import { DashboardApi } from "./dashborad-api"
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/driven"
import { AuthenticatorProxyAdapter } from "../adapters/drivers/authenticator-proxy-adapter";
import { initTRPC } from "@trpc/server";
import { AuthTRPCAdapter } from "../adapters/drivers";

const compositionMock = () => {
    
    //DRIVENS

    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub()
    
    //APP
    const dashboardApiMock = new DashboardApi( controlAuthenticatorStub, repoQuerierStub )
    
    //DRIVERS
    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
        dashboardApiMock
    ) 

    return {
        authenticatorProxyAdapter
    }
}




export const { authenticatorProxyAdapter } = compositionMock();


// const registerMock = {
//     name: 'Leo',
//     email: 'leandro@gmail.com',
//     password: '12335123'
// }

// authenticatorProxyAdapter.login('leandro@email.com', '1234asdw')
// authenticatorProxyAdapter.register(registerMock)

export const localTRPCCompose = () => {

    //DRIVENS

    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub()
    
    //APP
    const dashboardApiMock = new DashboardApi( controlAuthenticatorStub, repoQuerierStub )


    //TRPC INSTANCE
    const t = initTRPC.create()

    //TRPC DRIVER
    const authTRPCAdapter = AuthTRPCAdapter(dashboardApiMock, t)

    const appRouter = t.router({
        auth: authTRPCAdapter,
    })
    
    return { appRouter }

}