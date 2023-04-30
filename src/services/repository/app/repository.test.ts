import { describe, expect, it } from "vitest";
import { LoggerStubAdapter } from "../adapters/driven";
import { Repository } from "./repository";

describe('Respository', () => {
    const monitorStub = new LoggerStubAdapter()

    const repositoryMock = new Repository(monitorStub)


    it.concurrent('should control that the user does not exsist',async () => {
        //GIVEN
        const mockEmail = 'cele@gmail.com'
        const expectedResult = {
            id: '1',
            name: 'cele',
            email: 'cele@gmail.com',
        }

        //WHEN

        let result

        try{
            result = await repositoryMock.getUser(mockEmail)
        } catch (error){ /* empty */ }


        //THEN

        expect(result).not.toEqual(expectedResult)

    })

    it.concurrent('should create a new user',async () => {
        //GIVEN
        const mockedUser  = {
            name: 'Cele',
            email: 'cele@gmail.com',
            password: '12346'
        }

        const expectedResult = {
            id: '1',
            name: mockedUser.name,
            email: mockedUser.email
        }

        //WHEN
        let result

        try {
            result = await repositoryMock.createUser(mockedUser)
        } catch (error) { /* empty */ }

        //THEN

        expect(result).toEqual(expectedResult)
    })

    it.concurrent('should control that the user already exist',async () => {
        //GIVEN
        const mockedUser  = {
            name: 'Cele',
            email: 'cele@gmail.com',
            password: '12346'
        }

        const expectedResult = {
            id: '1',
            name: mockedUser.name,
            email: mockedUser.email,
        } 
        
        //WHEN
        let result

        try {
            result = await repositoryMock.createUser(mockedUser)
        } catch (error) { /* empty */ }

        //THEN

        expect(result).not.toEqual(expectedResult)
    })

    it.concurrent('should get a user',async () => {
        //GIVEN
        const mokedEmail = "cele@gmail.com"

        const expectedResult = {
            id: '1',
            name: 'Cele',
            email: 'cele@gmail.com',
        }

        //WHEN

        let result

        try {
            result = await repositoryMock.getUser(mokedEmail)
        } catch (error) { /* empty */ }

        //THEN 

        expect(result).toEqual(expectedResult)


    })
})