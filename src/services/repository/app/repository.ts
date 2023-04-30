import { ForMonitoring } from "../ports/driven";
import { ForManagingUser } from "../ports/drivers";
import { ExternaUser, RepoUser, User } from "./schemas";

export class Repository implements ForManagingUser {
    private userList: RepoUser[] = []

    constructor(private readonly logger: ForMonitoring ){}

    async getUser(email: string): Promise<ExternaUser> {
        const user = this.userList.find((user) => user.email === email)

        if(!user){
            this.logger.log('GetUser', 'User not found')
            throw new Error('User nor found')
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email
        }

    }

    async createUser(user: User): Promise<ExternaUser> {
        const userExist = this.userList.find((user) => user.email === user.email)

        if(userExist){
            this.logger.log('CreateUser', 'User already exists')
            throw new Error('User already exists')
        }

        const newUser = {
            ...user,
            id: String(this.userList.length +1),
        }

        this.userList.push(newUser)
        
        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }
    }
}