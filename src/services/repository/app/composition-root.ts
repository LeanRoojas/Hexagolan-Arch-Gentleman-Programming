import { LoggerStubAdapter } from "../adapters/driven"
import { UserManagerProxy } from "../adapters/drivers"
import { Repository } from "./repository"

export const compositionMock = () => {

    const monitorStub = new LoggerStubAdapter()

    const repositoryMock = new Repository(monitorStub)

    const userManagerProxy = new UserManagerProxy(repositoryMock)

    return {
        userManagerProxy,
    }

}

export const { userManagerProxy } = compositionMock();

const registerMock = {
    name: 'Cele',
    email: 'cele@gmail.com',
    password: '123456'
}

userManagerProxy.getUser('leandro@email.com')
userManagerProxy.createUser(registerMock, registerMock.password)