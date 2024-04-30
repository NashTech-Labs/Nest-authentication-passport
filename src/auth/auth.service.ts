import { Injectable } from "@nestjs/common";
import { bcrypt } from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/user.entity";
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async validateUser(username: string, password: string): Promise<User | null> {
    // Logic to validate user against database

    // const user = await this.userService.findByUsername(username);
    // Ensure to validate password hash

    // const isValidPassword = await bcrypt.compare(password, user.password);
    // if (isValidPassword) return user;
    // else
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
