type PersonInfo = {
    name: string
    age: number

}


type Picker = keyof PersonInfo // 'name' | 'age'

type MyPick<
 T extends {},
 K extends keyof T
> = {
    [P in K] : T[P]
}


type MyPicker = MyPick<PersonInfo, 'age'>
