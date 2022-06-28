import { strict as assert } from 'node:assert'

// first-in-first-out (FIFO) data structure.

const push = <T>(data:T[], datum:T, validator: (datum:T)=>void) => {
  validator(datum)
  // array push method add a new element to the right
  return data.push(datum)
}

// array shift method removes the first element from an array
// (from the left) and returns that removed element.
const pop = <T>(data:T[]) => data.shift()


// ----------------------------------
// Usage with type User
type UserType = {
  name: string,
  surname: string
}

const userValidator = <T extends UserType>(datum:T) => {
  if ( datum.name === '' || datum.surname === '' ) {
    throw new Error('Invalid user')
  }
}


const userQueue:UserType[] = []
const user1 = { name: 'John', surname: 'Blow' }
push<UserType>(userQueue, user1, userValidator)

assert.deepEqual(userQueue, [user1]);
assert.deepEqual(pop<UserType>(userQueue), user1);
assert.deepEqual(userQueue, []);

const userInvalid =  { name: 'no-surname', surname: '' }
assert.throws(
  () => { push<UserType>(userQueue, userInvalid, userValidator) },
  { name: 'Error', message: 'Invalid user' }
);


// ----------------------------------
// Usage with type Car
type carType = {
  manufacturer: string,
  model: string
}

const carValidator = <T extends carType>(datum:T) => {
  if ( datum.manufacturer === '' || datum.model === '' ) {
    throw new Error('Invalid car')
  }
}


const carQueue:carType[] = []
const car1 = { manufacturer: 'Ford', model: 'model-t' }
push<carType>(carQueue, car1, carValidator)

assert.deepEqual(carQueue, [car1]);
assert.deepEqual(pop<carType>(carQueue), car1);
assert.deepEqual(carQueue, []);

const carInvalid =  { manufacturer: 'no-model', model: '' }
assert.throws(
  () => { push<carType>(carQueue, carInvalid, carValidator) },
  { name: 'Error', message: 'Invalid car' }
);

console.log('passed')

