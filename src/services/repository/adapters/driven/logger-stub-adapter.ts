import { ForMonitoring } from "../../ports/driven";

export class LoggerStubAdapter implements ForMonitoring{
    log(event: string, message: string){
        console.log(event, message);
    }
}