
class Base {
  constructor(
    public propInBase: number
  ) { }
}

class Derived extends Base {
  // This class has no constructor,
  // so it will use it's parent's contructor
}

const o = new Derived(1)
console.log(o.propInBase)

export {}
