import { Repository } from "../../app/repository";
import { ExternaUser, User } from "../../app/schemas";
import { ForManagingUser } from "../../ports/drivers";

export class UserManagerProxy implements ForManagingUser{
    constructor( private readonly repository: Repository){

    }

    async getUser(email: string): Promise<ExternaUser> {
        return this.repository.getUser(email)
    }

    async createUser(user: User): Promise<ExternaUser> {
        return this.repository.createUser(user)
    }
}