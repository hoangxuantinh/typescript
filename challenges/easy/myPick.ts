type MyPick<T, K extends keyof T> = {
    [k in K]: T[K]
}

type Responses = {
    username: string,
    token: string
    refreshToken: string
}



type TokenType = MyPick<Responses, 'token' | 'refreshToken'>