console.log("Running tests...");

function testSum() {
    const sum = (a, b) => a + b;
    const result = sum(1, 2);
    if (result === 3) {
        console.log("Test passed!");
    } else {
        console.error("Test failed!");
    }
}

testSum();