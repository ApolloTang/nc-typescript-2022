# Override base's member

If derived class has member with same name as that in base calss, it will be overrided: 



```typescript
class Base {
  someMethod(): void {
    console.log('someMethod on Base')
  }
}

class Derived extends Base {
  someMethod(): void { // this override base's method
    console.log('someMethod on Derived')
  }
}

const o = new Derived()
o.someMethod() // 'someMethod on Derived'
```



If you want to call base's member you can use the keyword `super`:

```typescript
class Base {
  someMethod(): void {
    console.log('someMethod on Base')
  }
}

class Derived2 extends Base {
  someMethod(): void {
    super.someMethod()
  }
}
const o2 = new Derived2()
o2.someMethod() // 'someMethod on Base'
```

