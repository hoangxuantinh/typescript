function MethodParameterDecorator(
  target: Object,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat(param1: string, @MethodParameterDecorator param2: string) {
    console.log("I'm eating");
  }
}


const person = new Person("John", 20);
person.eat("apple", "banana");