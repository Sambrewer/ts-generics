// const names: Array<string> = ['Samuel', 'Samantha'];
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

// promise.then((data) => {
//     data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Samuel' }, { age: 32 });
mergedObj.age;
