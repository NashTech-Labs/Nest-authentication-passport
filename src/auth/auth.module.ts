import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./stratergy/local.stratergy";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [PassportModule, JwtModule],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService], // Export AuthService for dependency injection
})
export class AuthModule {}
