import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { IUser } from 'src/users/users.interface';
import { ResponseMessage, User } from 'src/decorator/customize';

@Controller('resumes')
export class ResumesController {
  constructor(private readonly resumesService: ResumesService) {}

  @Post()
  @ResponseMessage('Create A Resume Success!!')
  create(@Body() createResumeDto: CreateResumeDto, @User() user: IUser) {
    return this.resumesService.create(createResumeDto, user);
  }

  @Get()
  @ResponseMessage('Get  Job With Paginate Success!!')
  findAll(
    @Query('current') current: number,
    @Query('pageSize') pageSize: number,
    @Query() qs: string,
  ) {
    return this.resumesService.findAll(current, pageSize, qs);
  }

  @Get(':id')
  @ResponseMessage('Get  Job By Id Success!!')
  findOne(@Param('id') id: string) {
    return this.resumesService.findOne(id);
  }

  @Post('/by-user')
  @ResponseMessage('Get  Job By User Success!!')
  findOneByUser(@User() user: IUser) {
    return this.resumesService.findOneByUser(user);
  }

  @Patch(':id')
  @ResponseMessage('Update Jobs Success!!')
  update(
    @Param('id') id: string,
    @Body() updateResumeDto: UpdateResumeDto,
    @User() user: IUser,
  ) {
    return this.resumesService.update(id, updateResumeDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Delete Jobs Success!!')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.resumesService.remove(id, user);
  }
}
