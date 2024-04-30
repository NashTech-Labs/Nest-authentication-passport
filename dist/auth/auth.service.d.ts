import { JwtService } from "@nestjs/jwt";
import { User } from "../user/user.entity";
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    validateUser(username: string, password: string): Promise<User | null>;
    login(user: User): Promise<{
        access_token: string;
    }>;
}
