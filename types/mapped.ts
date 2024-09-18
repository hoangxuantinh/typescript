export type Setters<State> = {
    [K in keyof State as `set${Capitalize<string & K>}`]: (value: State[K]) => void
}

export type Getters<State> = {
    [K in keyof State as `get${Capitalize<string & K>}`]: () => State[K]
}

// & intersection type
type Store<State> = Setters<State> & Getters<State>

type PersonState = {
    name: string
    age: number
}


type PersonStore = Store<PersonState>

declare const personStore: PersonStore;
personStore.setAge(18)
personStore.setName('tinh')

const Name: string = personStore.getName()
// console.log("🚀 ~ Name:", Name)
// const age: number = personStore.getAge()
// console.log("🚀 ~ age:", age)

console.log(typeof Name)

