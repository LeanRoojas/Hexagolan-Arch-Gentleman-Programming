import { DashboardApi } from "../../app/dashborad-api";
import { AuthenticatedUser, User } from "../../app/schemas";
import { ForAuthenticating } from "../../ports/drivers";


export class AuthenticatorProxyAdapter implements ForAuthenticating{

    constructor(private readonly dashboradApi: DashboardApi ){

    }

    async login (email: string, password: string): Promise<AuthenticatedUser>{
        return this.dashboradApi.login(email, password)
    }
    async register (user: User): Promise<AuthenticatedUser>{
        return this.dashboradApi.register(user)

    }
}