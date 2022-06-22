class Base {
  foo: number
  constructor(foo: number = 1) {
    this.foo = foo
    console.log('Base\'s contructor', this.foo)
  }
}

class Derived extends Base {
  // public foo: number = 2
  // constructor() {
  //   super(); // Constructors for derived classes must contain a 'super' call.
  //   console.log('Derived\'s contructor', this.foo)
  // }
}

const o = new Derived();

function f(arg?: number) {
  type t = typeof arg
}

console.log(f(1))



export {};
