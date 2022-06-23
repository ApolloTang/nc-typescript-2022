// File: ./1b-use-super-to-call-bases-method.ts

class Base {
  someMethod(): void {
    console.log('someMethod on Base')
  }
}

class Derived2 extends Base {
  someMethod(): void {
    console.log('someMethod on Derived2')
    super.someMethod()  // this call the method with same name in base
  }
}
const o2 = new Derived2()
o2.someMethod()

// Result:
// ------
//   someMethod on Derived2
//   someMethod on Base

export {}
