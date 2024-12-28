// function FirstDecorator(constructor: Function) {
//     console.log('FirstDecorator', constructor);
// }

// @FirstDecorator
// class User {
//     constructor(){}
// }

// function Log(message: string) {
//     return function (...args: any[]) {
//       console.log(`${message}:`, args);
//     };
//   }

// // run last
// @Log('Class Decorator')
// class MyClass {
//     // run first
//     @Log('Property Decorator')
//     myProperty?: string;

//     // run second
//     @Log('Accessor Decorator')
//     get myAccessor() {
//         return 'value';
//     }

//     // run 4th
//     @Log('Method Decorator')
//     // run third
//     myMethod(@Log('Parameter Decorator') param: string) {}
// }
