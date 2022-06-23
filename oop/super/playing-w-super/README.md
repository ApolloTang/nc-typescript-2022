# Playing with super

```typescript
// File: playing-w-super/codes/playing-w-super.ts

class Base {
  constructor(
    public prop1: string
  ) {
    console.log('in Base\'s constructor, this: ', this)
  }
}

class Derived1 extends Base {
  // This class has no constructor so it will use it's base's contructor
}

// This class has constructor, but you have to call the base's
// contructor. And the base's constructor is called super
class Derived2 extends Base {
  public prop2 = 'props2 only exist in Derieved class'

  constructor(
    public prop1: string
  ){
    super('this value will be over written')
    console.log('in Derived2\'s constructor, this: ', this)
  }
}

const o2 = new Derived2('this value over write previous value')
// in Base's constructor, this:  Derived2 { prop1: 'this value will be over written' }
// in Derived2's constructor, this:  Derived2 {
//   prop1: 'this value over write previous value',
//   prop2: 'props2 only exist in Derieved class'
// }
```

