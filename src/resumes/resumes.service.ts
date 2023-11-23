import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Resume, ResumeDocument } from './schema/resume.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';
import mongoose from 'mongoose';
import aqp from 'api-query-params';

@Injectable()
export class ResumesService {
  constructor(
    @InjectModel(Resume.name)
    private resumeModel: SoftDeleteModel<ResumeDocument>,
  ) {}

  async create(createResumeDto: CreateResumeDto, user: IUser) {
    const { url, companyId, jobId } = createResumeDto;
    const newResume = await this.resumeModel.create({
      email: user.email,
      userId: user._id,
      status: 'PENDING',
      history: [
        {
          status: 'PENDING',
          updatedAt: new Date(),
          updatedBy: {
            _id: user._id,
            email: user.email,
          },
        },
      ],
      url,
      companyId,
      jobId,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
    return {
      _id: newResume._id,
      createdAt: newResume.createdAt,
    };
  }

  async findAll(current: number, pageSize: number, qs: string) {
    const { filter, sort, population, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset: number = (+current - 1) * +pageSize;
    const defaultLimit = +pageSize ? +pageSize : 10;
    const totalItems = (await this.resumeModel.find(filter)).length;
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
    const result = await this.resumeModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .select(projection as any)
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
      return 'not found resume';
    }
    return this.resumeModel.findOne({ _id: id });
  }
  update = async (
    id: string,
    updateResumeDto: UpdateResumeDto,
    user: IUser,
  ) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found resume';
    }
    const existingResume = await this.resumeModel.findOne({ _id: id });

    if (!existingResume) {
      return 'not found resume';
    }
    const newHistoryEntry = {
      status: updateResumeDto.status,
      updatedAt: new Date(),
      updatedBy: {
        _id: user._id,
        email: user.email,
      },
    };
    const updatedHistory = [...existingResume.history, newHistoryEntry];
    const newResumeUpdate = await this.resumeModel.updateOne(
      { _id: id },
      {
        ...updateResumeDto,
        history: updatedHistory,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return newResumeUpdate;
  };

  remove = async (id: string, user: IUser) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found resume';
    }
    await this.resumeModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.resumeModel.softDelete({ _id: id });
  };
  findOneByUser = async (user: IUser) => {
    console.log(
      '🚀 ~ file: resumes.service.ts:149 ~ ResumesService ~ findOneByUser= ~ user:',
      user.email,
    );
    return this.resumeModel
      .find({ email: user.email })
      .populate('companyId') // Populate the 'companyId' field
      .populate('jobId'); // Populate the 'jobId' field;
  };
}
