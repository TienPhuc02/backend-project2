import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/decorator/customize';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext) {
    //ExecutionContext là không gian thự thi code, khi vào ExcutionContext mình có thể lấy request=> req.user

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest(err, user, info, context: ExecutionContext) {
    //ley request
    const request: Request = context.switchToHttp().getRequest();

    //check permission
    const targetMethod = request.method;
    console.log(
      '🚀 ~ file: jwt-auth.guard.ts:37 ~ JwtAuthGuard ~ handleRequest ~ targetMethod:',
      targetMethod,
    );
    const targetEndpoint = request?.path;
    console.log(
      '🚀 ~ file: jwt-auth.guard.ts:39 ~ JwtAuthGuard ~ handleRequest ~ targetEndpoint:',
      targetEndpoint,
    );
    const permissions = user?.permissions ?? [];
    const isExist = permissions.find(
      (permissions) =>
        targetMethod === permissions.method &&
        targetEndpoint === permissions.apiPath,
    );
    console.log(
      '🚀 ~ file: jwt-auth.guard.ts:47 ~ JwtAuthGuard ~ handleRequest ~ isExist:',
      isExist,
    );
    if (!isExist) {
      throw new ForbiddenException(
        'Bạn không có quyền để truy cập end point này',
      );
    }
    if (err || !user) {
      throw (
        err ||
        new UnauthorizedException(
          'Token không hợp lệ/không có Bearer Token ở Header',
        )
      );
    }
    return user;
  }
}
