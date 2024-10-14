use wasm_bindgen::prelude::*;
use base64::{encode, decode};

// Import the `window.alert` function from the Web.
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// Export a `greet` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}


#[wasm_bindgen]
pub fn encode_base64(data: &str) -> String {
    encode(data)
}