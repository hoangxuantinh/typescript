// Các TH typescript tự inference

// 1. Khi giá trị đã được gán cho biến
// 2. Khi apply default value cho function parameter
// 3. Khi func return 1 a specific type of value


// TH1: assigned 
// annotation
let hello: string = 'hello'
// inference
let number = 3


// TH2: default value of fn parameter
function sum(a=3, b=4): number{}



// TH3: Khi func return 1 a specific type of value
const total = sum(3,5)






