import { ExternaUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";
import { ForRepoQuerying } from "../../ports/driven";

const userMock: ExternaUser = {
    id: '1',
    name: 'Leandro Rojas',
    email: 'leandro@rojas.com',
}

export class RepoQuerierStub implements ForRepoQuerying {
    getUser(_main: string): Promise<ExternaUser> {
        return Promise.resolve(userMock)
    }

    createUser(_user: User): Promise<ExternaUser> {
        return Promise.resolve(userMock)
    }

}