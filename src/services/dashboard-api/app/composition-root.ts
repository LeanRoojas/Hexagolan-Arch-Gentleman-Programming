import { DashboardApi } from "./dashborad-api"
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/driven"
import { AuthenticatorProxyAdapter } from "../adapters/drivers/authenticator-proxy-adapter";

const compositionMock = () => {
    
    const controlAuthenticatorStub = new ControlAuthenticatorStub();

    const repoQuerierStub = new RepoQuerierStub()

    const dashboardApiMock = new DashboardApi( controlAuthenticatorStub, repoQuerierStub )


    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
        dashboardApiMock
    ) 

    return {
        authenticatorProxyAdapter
    }
}


export const { authenticatorProxyAdapter } = compositionMock();


const registerMock = {
    name: 'Leo',
    email: 'leandro@gmail.com',
    password: '12335123'
}

authenticatorProxyAdapter.login('leandro@email.com', '1234asdw')
authenticatorProxyAdapter.register(registerMock)

