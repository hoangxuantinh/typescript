type MyReadOnly<T> = {
    readonly [k in keyof T]: T[k]
} 

type User = {
    email: string 
    age: number
}

const u: MyReadOnly<User> = {
    email: 'hxt@gmail.com',
    age: 19
}


u.age = 20