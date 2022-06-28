import { strict as assert } from 'node:assert'

interface Validatable {
  validate(): void;
}


// first-in-first-out (FIFO) data structure.
class Queue<T extends Validatable> {
  public data:T[] = []
  public push(datum:T) {
    datum.validate()
    // array push method add a new element to the right
    this.data.push(datum)
  }
  public pop() {
    // array shift method removes the first element from an array
    // (from the left) and returns that removed element.
    return this.data.shift()
  }
}


// ----------------------------------
// Usage with type User
class User implements Validatable {
  public constructor(
    public name: string,
    public surname: string
  ) {}

  public validate() {
    if ( this.name === '' || this.surname === '' ) {
      throw new Error('Invalid user')
    }
  }
}

const userQueue = new Queue<User>()
const user1= new User('John', 'Blow')
userQueue.push(user1)

assert.deepEqual(userQueue.data , [user1]);
assert.deepEqual(userQueue.pop(), user1);
assert.deepEqual(userQueue.data, []);

const userInvalid =  new User('no-surname', '')
assert.throws(
  () => { userQueue.push(userInvalid) },
  { name: 'Error', message: 'Invalid user' }
);


// ----------------------------------
// Usage with type Car
class Car implements Validatable {
  public constructor(
    public manufacturer: string,
    public model: string
  ) {}

  public validate() {
    if ( this.manufacturer === '' || this.model === '' ) {
      throw new Error('Invalid car')
    }
  }
}


const carQueue = new Queue<Car>()
const car1 = new Car('Ford', 'model-t')
carQueue.push(car1)

assert.deepEqual(carQueue.data , [car1]);
assert.deepEqual(carQueue.pop(), car1);
assert.deepEqual(carQueue.data, []);

const carInvalid =  new Car('no-model', '')
assert.throws(
  () => { carQueue.push(carInvalid) },
  { name: 'Error', message: 'Invalid car' }
);


export {}
