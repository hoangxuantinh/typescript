type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

// type head1 = First<arr1>  expected to be 'a'
// type head2 = First<arr2>  expected to be 3

// answer 1
type First<T extends any[]> = T extends [] ? never : T[0]

// answer 2
// index signature
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]


// answer 3
// infer dùng với conditional types and cannot be used outside an extends clause => tạo ra 1 type tạm đảm bảo all type đều được khai báo sẵn
// type MyType2<T> = T extends R2 ? R2 : never; // error, R2 undeclared

type First3<T extends any[]> = T extends [infer A, ...infer rest] ? A : never

type head1 = First<arr1>  
type head2 = First<arr2>  
