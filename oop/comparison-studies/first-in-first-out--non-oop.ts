import { strict as assert } from 'node:assert'

const push = <T>(data:T[], datum:T ) => data.push(datum)
const pop = <T>(data:T[]) => data.shift()

type UserType = {
  name: string,
  surname: string
}

const userQueue:UserType[] = []
const user1 = { name: 'John', surname: 'Blow' }
push<UserType>(userQueue, user1)

assert.deepEqual(userQueue, [user1]);
assert.deepEqual(pop<UserType>(userQueue), user1);
assert.deepEqual(userQueue, []);

console.log('passed')

