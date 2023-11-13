import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import ms from 'ms';
import { Response } from 'express';
import { IUser } from 'src/users/users.interface';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private rolesService: RolesService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);

    if (user) {
      const isValid = this.usersService.isValidPassword(pass, user.password);
      if (isValid === true) {
        const userRole = user.role as unknown as { _id: string; name: string };
        const temp = await this.rolesService.findOne(userRole._id);
        const objUser = {
          ...user.toObject(),
          permissions: temp?.permissions ?? [],
        };
        return objUser;
      }
    }
    return null;
  }
  async login(user: any, response: Response) {
    const { email, _id, role, name, age, gender, address, permissions } = user;
    const payload = {
      email,
      _id,
      age,
      gender,
      address,
      role,
      name,
      sub: 'token login',
      iss: 'from server',
    };
    const refresh_token = await this.createRefreshToken(payload);

    //update user with refreshtoken
    await this.usersService.updateUserToken(refresh_token, _id);

    //set cookie
    response.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      maxAge: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')), //miliseconds,
    });
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        email,
        _id,
        age,
        gender,
        address,
        role,
        name,
        permissions,
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
  async processNewToken(refreshToken: string, response: Response) {
    try {
      this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      });
      const user = await this.usersService.findUserByToken(refreshToken);
      if (user) {
        const { email, _id, name, role, age, gender, address } = user;
        const payload = {
          email,
          _id,
          age,
          gender,
          address,
          role,
          name,
          sub: 'refresh token',
          iss: 'from server',
        };
        const refresh_token = await this.createRefreshToken(payload);

        await this.usersService.updateUserToken(refresh_token, _id.toString());
        const userRole = user.role as unknown as { _id: string; name: string };
        const temp = await this.rolesService.findOne(userRole._id);
        response.clearCookie('refresh_token');
        response.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          maxAge: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')),
        });

        return {
          access_token: this.jwtService.sign(payload),
          user: {
            email,
            _id,
            age,
            gender,
            address,
            role,
            name,
            permissions: temp?.permissions ?? [],
          },
        };
      } else {
        throw new BadRequestException(
          `Refresh Token không hợp lệ. Vui lòng đăng nhập`,
        );
      }
    } catch (error) {
      throw new BadRequestException(`Refresh Token không hợp lệ`);
    }
  }
  async logout(user: IUser, response: Response) {
    await this.usersService.updateUserToken('', user._id);
    response.clearCookie('refresh_token');
    return 'Logout Success!!';
  }
}
