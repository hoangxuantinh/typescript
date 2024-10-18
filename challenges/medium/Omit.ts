// interface Todo {
//     title: string
//     description: string
//     completed: boolean
//   }
  
//   type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
//   const todo: TodoPreview = {
//     completed: false,
//   }


type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
}


interface Person {
    name: string
    age: number
    email: string
}

type Name = MyOmit<Person, 'age' | 'email'>

const a: Name = {
    name: 'john'
} 