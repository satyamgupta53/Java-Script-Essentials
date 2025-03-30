## Introduction

Node JS is runtime environment to execute codes on server, based on v8 engine (by google, C++ based) uses JIT compilation, executing codes faster. **Parsing** — creating abstract syntax tree AST, **Interpretation** — Ignition interpreter (keeping hot code, for optimization) to byte codes, **Optimization** — hot code to Turbo Fan compiler (uses inline caching, copy elision), converting into machine code, **De-Optimization** — when assumptions fail, discarding optimized code, Ignition re-interprets and then, compilation. **Garbage Collection** — uses mark-sweep algorithms to mark live variables & objects, sweeps unused ones. 

```jsx
console.log("Hello World !");
process.stdout.write("Another way to print");
console.table({city: ["jaipur", "delhi"], state: ["rajasthan", "delhi"]});

typeof(balance) --> return number (method to find data type)
console.log(`Hello! My name is ${username}`); // string interpolation
```

**Datatypes** — `string, number, boolean, bigint, undefined, null, Object`.  **Logical operations** — `&& (and), || (or), !)`. Back ticks allows to use variables in  string.

![image.png](readme-assets/jit_compiler.png)