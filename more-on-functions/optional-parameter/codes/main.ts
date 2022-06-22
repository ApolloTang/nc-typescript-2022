function g(arg: number) {
  type t = typeof arg
  //   ^--- type t = number
}

function f(arg?: number) {
  type t = typeof arg
  //   ^--- type t = number | undefined
}

// @ts-expect-error
function k(arg?: number = 1) {
  //       ~~~~
  //       error| [tsserver 1015] Parameter cannot have question
  //       mark and initializer. [E]
}
export {}
