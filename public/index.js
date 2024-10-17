import init, { greet, encode_base64 } from './wasm/hello.js';

await init();

document.querySelector('.alert').addEventListener('click', () => {
    greet("Hello!");
});

document.querySelector('.encode').addEventListener('click', () => {
    document.querySelector('.result').textContent = encode_base64(document.querySelector('.input').value);
});