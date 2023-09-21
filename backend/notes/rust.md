# Rust, The beginning of a new era.

## What is Rust?

Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.

## Why Rust?

- Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages.
- Rust is type safe and memory safe: Rust uses a powerful type system and ownership to achieve a balance between performance and safety, and employs zero-cost abstractions so that high-level code can be as fast as low-level code.
- Rust is thread safe: Rust has great support for concurrency and parallelism, enabling developers to write efficient, safe, and highly concurrent applications.

## Example

- Hello World

```rust
fn main() {
    println!("Hello, world!");
}
```

- Fibonacci sequence

```rust
fn main() {
    let mut a = 0;
    let mut b = 1;
    let mut c = 0;
    for _ in 0..10 {
        c = a + b;
        a = b;
        b = c;
        println!("{}", c);
    }
}
```

- FizzBuzz

```rust
fn main() {
    for i in 1..101 {
        if i % 15 == 0 {
            println!("FizzBuzz");
        } else if i % 3 == 0 {
            println!("Fizz");
        } else if i % 5 == 0 {
            println!("Buzz");
        } else {
            println!("{}", i);
        }
    }
}
```
