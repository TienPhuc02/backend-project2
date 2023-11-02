import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import {  Response } from 'express';

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
    return this.authService.login(req.user,response);
  }

  @Public()
  @Post('/register')
  @ResponseMessage('Register A New User')
  handleRegister(@Body() registerDto: RegisterUserDto) {
    return this.usersService.register(registerDto);
  }
}
