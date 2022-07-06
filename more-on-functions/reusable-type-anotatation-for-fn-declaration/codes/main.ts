type Func = (a:number, b:number) => number

// function expression
const myFunctionExpression:Func = function(a,b) {
  return a+b
}

// function declaration
function myFunctionDeclaration(...[a, b]: Parameters<Func>): ReturnType<Func> {
  return a+b
}

console.log(myFunctionExpression(1,2))  // 3
console.log(myFunctionDeclaration(1,2)) // 3

export {}


