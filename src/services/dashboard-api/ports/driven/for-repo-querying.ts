import { ExternaUser} from "../../../repository/app/schemas";
import { User } from "../../app/schemas";

export interface ForRepoQuerying {
    getUser(main: string): Promise<ExternaUser>;
    createUser(user: User): Promise<ExternaUser>;
}

