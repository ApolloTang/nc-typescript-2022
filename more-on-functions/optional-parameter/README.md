# Optional parameter

Optional parameter is actually a union of `undefined` with the declared type:

```typescript
function f(arg?: number) {
  type t = typeof arg
  //   ^--- type t = number | undefined
}
```

As you can see bellow if you take away the `?` symbol, the `undefined` type is removed: 

```typescript
function f(arg: number) {
  type t = typeof arg
  //   ^--- type t = number
}
```

See:  https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters 

## Initializing an optional parameter:

This is a syntax error, you cannot linitialize an optional parameter.

```typescript
// @ts-expect-error
function k(arg?: number = 1) {
  //       ~~~~
  //       error| [tsserver 1015] Parameter cannot have question
  //       mark and initializer. [E]
}
```





