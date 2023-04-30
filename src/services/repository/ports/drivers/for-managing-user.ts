import { ExternaUser, User } from "../../app/schemas";

export interface ForManagingUser {
    getUser(email: string): Promise<ExternaUser>
    createUser(user: User, password: string): Promise<ExternaUser>
}