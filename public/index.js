import init, { greet, encode_base64 } from './wasm/hello.js';

await init(); // Initialize the wasm module
greet('Hello WASM!!!'); // Call the greet function from Rust
console.log(encode_base64('Hello, World!')); // Call the encode function from Rust
