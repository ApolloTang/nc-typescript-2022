// File: ./1a-use-super-to-call-bases-method.ts

class Base {
  someMethod(): void {
    console.log('someMethod on Base')
  }
}

class Derived extends Base {
  someMethod(): void { // this override base's method with samename
    console.log('someMethod on Derived')
  }
}

const o = new Derived()
o.someMethod()

// Result:
// ------
// 'someMethod on Derived'


export {}
