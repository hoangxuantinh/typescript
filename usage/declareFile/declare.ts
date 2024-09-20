console.log('logged in user', process.env.USER)

//  typescript provides the ability to declare any variables that are not present within the Typescript
declare const process: any

// we can't not provide any implementation
declare const process2: any = 'abcd'


// set of declarations hold on the file has extension .d.ts

