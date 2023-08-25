export interface IUserState {
    isAdmin: boolean
}

export interface IToken{
    token: string
}
export interface IInitialUser {
    user: IUserState | null
    isLoading: boolean
}


// export interface   IAuthResponse extends IToken{
//     user: IUs
// }