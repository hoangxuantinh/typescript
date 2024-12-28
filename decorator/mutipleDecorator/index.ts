function DecoratorOne(target: any) {
  console.log("DecoratorOne");
}

function DecoratorTwo(target: any) {
  console.log("DecoratorTwo");
}

@DecoratorOne
@DecoratorTwo
class Decor {
  //   constructor(public name: string) {}
}

// DecoratorTwo
// DecoratorOne
