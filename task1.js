// Iterative solution:
export const sumToNIterative = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Mathematical solution:
export const sumToNMath = (n) => {
    return (n * (n + 1)) / 2;
};

// Recursive solution:
export const sumToNRecursive = (n) => {
    if (n === 1) {
        return 1;
    } else {
        return n + sumToNRecursive(n - 1);
    }
};
