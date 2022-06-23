# Use super to call base's method

If derived class has member with same name as that in base class, the one in derived class will be used: 

```typescript
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
```

If you want to call base's member of the same name, it is available on `super`:

```typescript
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
```

