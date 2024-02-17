const names: Array<string> = ['Samuel', 'Samantha'];
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then((data) => {
    data.split(' ');
});
