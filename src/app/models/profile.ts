import { User } from "./user";

export interface Profile{
    id: number;
    user: User;
    name:string;
    lastName:string;
    phone:string;
    img:any;
    grade:string;
}