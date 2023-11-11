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
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @ResponseMessage('Create A New Permission Success!!')
  create(
    @Body() createPermissionDto: CreatePermissionDto,
    @User() user: IUser,
  ) {
    return this.permissionsService.create(createPermissionDto, user);
  }

  @Get()
  @ResponseMessage('Create A New Permission Success!!')
  findAll(
    @Query('current') current: number,
    @Query('pageSize') pageSize: number,
    @Query() qs: string,
  ) {
    return this.permissionsService.findAll(current, pageSize, qs);
  }

  @Get(':id')
  @ResponseMessage('Get A New Permission Success!!')
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage('Update A New Permission Success!!')
  update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
    @User() user: IUser,
  ) {
    return this.permissionsService.update(id, updatePermissionDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Create A New Permission Success!!')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.permissionsService.remove(id, user);
  }
}
