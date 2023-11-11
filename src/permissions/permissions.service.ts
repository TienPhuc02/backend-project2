import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { IUser } from 'src/users/users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Permission, PermissionDocument } from './schema/permission.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectModel(Permission.name)
    private permissionModel: SoftDeleteModel<PermissionDocument>,
  ) {}

  create = async (createPermissionDto: CreatePermissionDto, user: IUser) => {
    const { apiPath, method, name, module } = createPermissionDto;
    const existingPermisson = await this.permissionModel.findOne({
      apiPath,
      method,
    });
    if (existingPermisson) {
      throw new BadRequestException(
        `API ${apiPath} với method ${method} đã tồn tại vui lòng thêm API với method khác.`,
      );
    }
    const newPermission = await this.permissionModel.create({
      apiPath,
      method,
      name,
      module,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
    return {
      _id: newPermission._id,
      createdAt: newPermission.createdAt,
    };
  };

  async findAll(current: number, pageSize: number, qs: string) {
    const { filter, sort, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset: number = (+current - 1) * +pageSize;
    const defaultLimit = +pageSize ? +pageSize : 10;
    const totalItems = (await this.permissionModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if ((sort as any) === '-updatedAt') {
      // @ts-ignore: Unreachable code error
      sort = '-updatedAt';
    }
    if ((sort as any) === '-name') {
      // @ts-ignore: Unreachable code error
      sort = '-name';
    }
    if ((sort as any) === '-apiPath') {
      // @ts-ignore: Unreachable code error
      sort = '-apiPath';
    }
    if ((sort as any) === '-method') {
      // @ts-ignore: Unreachable code error
      sort = '-method';
    }
    if ((sort as any) === '-createdAt') {
      // @ts-ignore: Unreachable code error
      sort = '-createdAt';
    }
    const result = await this.permissionModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .select('-password')
      .exec();
    return {
      meta: {
        current: current, //trang hien tai
        pageSize: pageSize, // so luong ban ghi 1 trang
        pages: totalPages, //tong so trang
        total: totalItems, //tong so ban ghi
      },
      result,
    };
  }

  async findOne(id: string) {
    return await this.permissionModel.findOne({ _id: id });
  }

  update = async (
    id: string,
    updatePermissionDto: UpdatePermissionDto,
    user: IUser,
  ) => {
    const { apiPath, method, name, module } = updatePermissionDto;
    const newPermissionUpdate = await this.permissionModel.updateOne(
      { _id: id },
      {
        apiPath,
        method,
        name,
        module,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return newPermissionUpdate;
  };

  remove = async (id: string, user: IUser) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found permission';
    }
    await this.permissionModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.permissionModel.softDelete({ _id: id });
  };
}
