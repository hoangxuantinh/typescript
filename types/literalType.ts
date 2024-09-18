let str: String
str = 'whatever you want'

let strLiteral: 'hello'
strLiteral = 'hello'
strLiteral = 'anything else is an error' // error : not 'hello'

// Template literal types
let templateLiteral: `Example: ${string}` // must be a string that contains the prefix example colon space with string value
templateLiteral = 'Example: 1'
templateLiteral = 'without example prefix' // error

// real case 1
type CSSValue = number | `${number}px` | `${number}em` | `${number}rem`

function size(input: CSSValue) {
    return typeof input === 'number' ? input + 'px': input
}

size(123)
size('123px')
size('123em')
size('123ex') // error


// real case 2
/**
 * @param style is a combination of
 * Size: 'small' or 'medium' or 'large'
 * Color: 'primary' or 'secondary
 * Eg: 'small-secondary' 
*/

type Size = 'small' | 'medium' | 'large'
type Color = 'primary' | 'secondary'
type Style = `${Size}-${Color}`

function applyStyle(style: Style) {
    // todo
}

applyStyle('small-primary')
applyStyle('large-secondary')
applyStyle('medim-secondary') // error





