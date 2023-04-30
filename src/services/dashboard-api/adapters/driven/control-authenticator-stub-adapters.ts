import { ForControlAuthenticating } from "../../ports/driven";
import { Permissions, AuthDetails } from "../../app/schemas";

const authDetailsMock: AuthDetails = {
    token: 'token',
    refreshToken: 'resfreshToken'
}

const permissionsMock: Permissions = {
    admin: true,
    user: true
}



export class ControlAuthenticatorStub implements ForControlAuthenticating {

     

    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock)
    }

    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock)
        
    }

}