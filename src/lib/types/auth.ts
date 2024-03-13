import { UserType } from "."

type UserToken = {
    access_token:string,
    refresh_token:string,
    token_type:string,
    expires_in:number
}
type UserLoginArgs = {
    email: string
    password: string
}
type UserLoginRes = {
    user: UserType
} & UserToken
export type {UserToken ,UserLoginArgs ,UserLoginRes}