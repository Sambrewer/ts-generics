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

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return `Value: ${obj[key]}`;
}

extractAndConvert({ name: 'Samuel' }, 'name');

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Samuel');
textStorage.addItem('Samantha');
textStorage.addItem('Bob');
console.log(textStorage.getItems());
textStorage.removeItem('Bob');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objectStorage = new DataStorage<object>();
const bobObject = { name: 'Bob' };
objectStorage.addItem({ name: 'Samuel' });
objectStorage.addItem({ name: 'Samantha' });
objectStorage.addItem({ name: 'Baby Brewer' });
objectStorage.addItem(bobObject);

objectStorage.removeItem(bobObject);
console.log(objectStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Samuel', 'Samantha', 'Baby Brewer'];
// names.push('Bob');
