function makeFibonacciFunction() {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    return () => {
        const c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
};

const fibonacci = makeFibonacciFunction();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();