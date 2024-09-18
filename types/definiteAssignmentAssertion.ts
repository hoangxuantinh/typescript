// In TypeScript, the Definite Assignment Assertion (!) is used to tell the TypeScript compiler 
// that a variable will be assigned a value before it is accessed, even if the compiler cannot deduce this on its own.


class Point {
    x: number
    y: number
    constructor(){
        this.random()
    }

    random() {
        this.x = Math.random()
        this.y = Math.random()
    }
}
