import { describe, expect, it } from 'vitest'
import { ControlAuthenticatorStub, RepoQuerierStub } from '../adapters/driven';
import { DashboardApi } from './dashborad-api';
import { AuthenticatedUser, User } from './schemas';


describe("DashboardApi", () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();

    const repoQuerierStub = new RepoQuerierStub()

    const dashboardApiMock = new DashboardApi( 
        controlAuthenticatorStub, 
        repoQuerierStub 
    )
    
    it.concurrent("should login",async () => {
        //GIVEN
        const mockedParams = {
            email: 'leandro@rojas.com',
            password: 'test123',
        }

        const expectedResult: AuthenticatedUser = {
            id: '1',
            name: 'Leandro Rojas',
            email: 'leandro@rojas.com',
            token: "token",
            refreshToken: 'resfreshToken',
            permissions: {
                admin: true,
                user: true,
            },
        }

        //WHEN

        const result = await dashboardApiMock.login(mockedParams.email, mockedParams.password)


        //THEN

        expect(result).toEqual(expectedResult)

    })

    it.concurrent('should register',async () => {

        const mokedUser: User ={
            email: 'leandro@rojas.com',
            name: 'Leandro',
            password:'1234564'
        }
        
        const expectedResult: AuthenticatedUser = {
            id: '1',
            name: 'Leandro Rojas',
            email: 'leandro@rojas.com',
            token: "token",
            refreshToken: 'resfreshToken',
            permissions: {
                admin: true,
                user: true,
            },
        }
    
        //WHEN 

        const result = await dashboardApiMock.register(mokedUser)

         // THEN

         expect(result).toEqual(expectedResult)
    })
})