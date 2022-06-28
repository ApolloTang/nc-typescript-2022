import { strict as assert } from 'node:assert'

class Queue<T> {
  public data:T[] = []
  public push(item:T) {
    this.data.push(item)
  }
  public pop() {
    return this.data.shift()
  }
}

class User {
  public name!: string
  public surname!: string
}

const userQueue = new Queue<User>()
const user1= { name: 'John', surname: 'Blow' }
userQueue.push(user1)

assert.deepEqual(userQueue.data , [user1]);
assert.deepEqual(userQueue.pop(), user1);
assert.deepEqual(userQueue.data, []);

console.log('passed')
