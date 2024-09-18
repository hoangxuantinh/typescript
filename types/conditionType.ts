export type TypeName<T> = 
    T extends string ? 'string' :
    T extends number ? 'number' : 
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends symbol ? 'symbol' :
    T extends bigint ? 'bigint' : 
    T extends Function ? 'function' : 
    'object'

function typeName<T>(t: T): TypeName<T> {
    return typeof t as TypeName<T>
}

const str = typeName('hello')
const number = typeName(123)
const boolean = typeName(true)
const undef = typeName(undefined)



// conditional types with union and never

export type NoEmpty<T> = T extends null | undefined ? never : T
type Example = NoEmpty<string | null>
type Expanded0 = NoEmpty<string> | NoEmpty<null>

type Expanded1 = (string extends null | undefined ? never : string) | (null extends null | undefined ? never : string)
type Expanded2 = string | never

type Result = never
