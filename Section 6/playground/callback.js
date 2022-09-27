const callbackFunc = (callback) => {
    setTimeout(() => {
        callback({
            name: 'John',
            age: 30
        });
    }, 2000);
}

callbackFunc(data => {
    console.log(data);
})

const add = (a,b,callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
}

add(1, 2, (sum) => {
    console.log(sum);
})