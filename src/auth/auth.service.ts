import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import ms from 'ms';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);

    if (user) {
      const isValid = this.usersService.isValidPassword(pass, user.password);
      if (isValid === true) {
        return user;
      }
    }
    return null;
  }
  async login(user: any, response: Response) {
    const { email, _id, role, name } = user;
    const payload = {
      email,
      _id,
      role,
      name,
      sub: 'token login',
      iss: 'from server',
    };
    const refresh_token = await this.createRefreshToken(payload);
    console.log(
      '🚀 ~ file: auth.service.ts:37 ~ AuthService ~ login ~ refresh_token:',
      refresh_token,
    );

    //update user with refreshtoken
    await this.usersService.updateUserToken(refresh_token, _id);

    //set cookie
    response.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      maxAge: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')), //miliseconds,
    });
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token,
      user: {
        _id,
        name,
        email,
        role,
      },
    };
  }
  createRefreshToken = async (payload) => {
    const refresh_token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn:
        ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')) / 1000,
    });
    return refresh_token;
  };
}
