// type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
type MyCapitalized1<T extends string> = T extends `${infer x}${infer tail}`
  ? `${Uppercase<x>}${tail}`
  : T;

type TestMyCapitalized = MyCapitalized1<"hello word!">;


// Note: type script sẽ infer những phần trước tail theo khoảng chia nhỏ nhất cho 1 string
type MyCapitalized2<T extends string> = T extends `${infer x}${infer y}${infer tail}`
  ? `${x}${Uppercase<y>}${tail}`
  : T;



type TestMyCapitalized2 = MyCapitalized2<"hello word!">; // "hEllo word!"
 