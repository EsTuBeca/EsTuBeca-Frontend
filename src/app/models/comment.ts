import { Post } from "./post";
import { Profile } from "./profile";

export interface Role{
    id: number;
    body:string;
    profile: Profile;
    createdAt:string;
    post:Post;
}