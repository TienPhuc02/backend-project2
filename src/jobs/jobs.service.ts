import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { IUser } from 'src/users/users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './schema/job.schema';
import { UserDocument } from 'src/users/schema/user.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import mongoose from 'mongoose';
import aqp from 'api-query-params';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel(Job.name) private jobModel: SoftDeleteModel<UserDocument>,
  ) {}
  async create(createJobDto: CreateJobDto, user: IUser) {
    const {
      name,
      skills,
      salary,
      quantity,
      level,
      description,
      company,
      endDate,
      location,
      isActive,
    } = createJobDto;
    const newJob = await this.jobModel.create({
      name,
      skills,
      salary,
      quantity,
      level,
      location,
      isActive,
      description,
      company,
      endDate,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
    return {
      _id: newJob._id,
      createdAt: newJob.createdAt,
    };
  }

  async findAll(current: number, pageSize: number, qs: string) {
    const { filter, sort, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset: number = (+current - 1) * +pageSize;
    const defaultLimit = +pageSize ? +pageSize : 10;
    const totalItems = (await this.jobModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if ((sort as any) === '-updatedAt') {
      // @ts-ignore: Unreachable code error
      sort = '-updatedAt';
    }
    if ((sort as any) === '-name') {
      // @ts-ignore: Unreachable code error
      sort = '-name';
    }
    if ((sort as any) === '-email') {
      // @ts-ignore: Unreachable code error
      sort = '-email';
    }
    if ((sort as any) === '-createdAt') {
      // @ts-ignore: Unreachable code error
      sort = '-createdAt';
    }
    const result = await this.jobModel
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

  findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found job';
    }
    return this.jobModel.findOne({ _id: id });
  }

  update = async (id: string, updateJobDto: UpdateJobDto, user: IUser) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found job';
    }
    const newJobUpdate = await this.jobModel.updateOne(
      { _id: id },
      {
        ...updateJobDto,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return newJobUpdate;
  };

  remove = async (id: string, user: IUser) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found job';
    }
    await this.jobModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.jobModel.softDelete({ _id: id });
  };
}

//nếu mà chưa có company thì tự thêm company
