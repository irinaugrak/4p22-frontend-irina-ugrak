const fibonacci = (function() {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    return () => {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
})();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();