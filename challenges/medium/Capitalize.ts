// type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
type MyCapitalized<T extends string> = T extends `${infer x}${infer tail}`
  ? `${Uppercase<x>}${tail}`
  : T;


type TestMyCapitalized = MyCapitalized<'hello word!'>