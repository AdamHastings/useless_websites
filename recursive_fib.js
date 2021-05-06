function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waste_cpu() {
    setTimeout(waste_cpu, 8000);

    console.log("Doing useless computation...");
    var i = 0;
    while (i < 42) {
        console.log(fibonacci(i));
        i = i + 1;
    }
}

