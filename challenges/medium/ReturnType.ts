// declare function f1(): { a: number; b: string };

// type T0 = ReturnType<() => string>;

// type T0 = string
// type T1 = ReturnType<(s: string) => void>;

type MyReturnType<T extends (...args: any[]) => unknown> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }
  

  type a = MyReturnType<typeof fn> // should be "1 | 2"
