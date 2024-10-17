# wasm-web-minimum-boilerplate

This is a minimal boilerplate for WASM on the web, which doesn't use any bundler for the web and uses `wasm-bindgen` and `wasm-bindgen-cli` as external tools.

## Setup

### Rust

```
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
```

### npm

```
npm ci
npm start # Run `npm run build` before starting the HTTP server
```
