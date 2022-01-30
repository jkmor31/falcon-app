import { Ira } from "./create-ira/create-ira.model";
export interface User {
    name?: string,
    email?: string,
    age?: number,
    password?: string,
    accounts?: Ira[]
}