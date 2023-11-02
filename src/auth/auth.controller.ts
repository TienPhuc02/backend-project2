import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { Request, Response } from 'express';
import { IUser } from 'src/users/users.interface';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ResponseMessage('Login SuccessFull!')
  handleLogin(@Req() req, @Res({ passthrough: true }) response: Response) {
    console.log(
      '🚀 ~ file: auth.controller.ts:22 ~ AuthController ~ handleLogin ~ req:',
      req,
    );
    return this.authService.login(req.user, response);
  }

  @Public()
  @Post('/register')
  @ResponseMessage('Register A New User')
  handleRegister(@Body() registerDto: RegisterUserDto) {
    return this.usersService.register(registerDto);
  }

  @ResponseMessage('Get Account Success!!')
  @Get('/account')
  handleGetAccount(@User() user: IUser) {
    return user;
  }

  @Public()
  @ResponseMessage('Refresh Account Success!!')
  @Get('/refresh')
  handleRefreshAccount(@Req() request: Request) {
    const refreshToken = request.cookies['refresh_token'];
    return this.authService.processNewToken(refreshToken);
  }
}
