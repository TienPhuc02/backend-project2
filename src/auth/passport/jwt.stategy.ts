import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private rolesService: RolesService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: any) {
    const { _id, name, email, role } = payload;
    const useRole = role as unknown as { _id: string; name: string };
    console.log("🚀 ~ file: jwt.stategy.ts:24 ~ JwtStrategy ~ validate ~ useRole:", useRole)
    const temp = (await this.rolesService.findOne(useRole._id)).toObject();
    console.log("🚀 ~ file: jwt.stategy.ts:26 ~ JwtStrategy ~ validate ~ temp:", temp)
    return { _id, name, email, role, permissions: temp?.permissions ?? [] };
  }
}
