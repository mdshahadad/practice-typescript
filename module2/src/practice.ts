{

    // Task 1: Basic Data Types and First Program
    const welcome: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
    console.log(welcome);

    // Task 2: Functions, Optional, and Literal Types
    const user = (name: string, age: number, role: 'admin' | 'user' | 'guest') => {
        return {
            name,
            age,
            role
        }
    }

    const user1 = user('shahadad', 122, 'admin');
    console.log(user1);

    // Task 3: Object Types, Type Alias, & Literal Types
    type Person = {
        name: string;
        address: string;
        hairAndEyeColor: string;
        incomeAndExpense: [number, number];
        hobbies: string;
        familyMembers: number;
        job: string;
        skills: string[];
        maritalStatus: string;
        friends: string[];
    };

    const person1: Person = {
        name: 'Shahadad',
        address: 'Wasa Dampara',
        hairAndEyeColor: 'Black',
        incomeAndExpense: [10000, 5000],
        hobbies: 'Cricket',
        familyMembers: 4,
        job: 'None',
        skills: ['Javascript', 'Reactjs', 'Nodejs', 'Expressjs'],
        maritalStatus: 'Unmarried',
        friends: ['Muntasir', 'Avijit', 'Abdur', 'Ifti'],
    }

    // Task 4: Union and Intersection Types
    interface Book {
        name: string;
        author: string
        releaseDate: string;
        pageNumber: number;
    }

    interface Magazine {
        name: string;
        releaseDate: string;
        pageNumber: number;
    }

    type BookOrMagazine = Book | Magazine;
    type BookAndMagazine = Book & Magazine;


    // Task 5: Function Type
    const reverseString = (input: string): string => {
        /*
            let newString: string = '';
            for (let i: number = 0; i < input.length; i++) {
                newString = input[i] + newString;
            }
        */
        // Best Way for efficient:
        const newString: string = input.split('').reverse().join('');


        return newString;
    }

    const resultString: string = reverseString('shahadad');
    console.log("Result: ", resultString);



    // is this code right or wrong. if wrong then give write and explain it and also if there is a better ways give them

    // Task 6: Spread and Rest Operators, Destructuring

    const sumOfNumeric = (...num: number[]): number => {
        const sum = num.reduce((total, current) => (total + current), 0);
        return sum;
    }

    const resultNum: number = sumOfNumeric(1, 22, 44, 8, 34, 90, 10);
    console.log(resultNum);

    // Task 7: Type Assertion and Narrowing
    const doubleType = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            return value.length;
        } else if (typeof value === 'number') {
            return value * value;
        }
    }

    const resultDoubleType = doubleType('rohid') as string;
    const resultDoubleType1 = doubleType(5) as number;
    console.log(resultDoubleType, resultDoubleType1)


    // Task 8: Intersection Types
    interface User {
        name: string;
        email: string;
    }


    interface Admin {
        adminLevel: number;
    }

    type AdminUser = User & Admin;

    const describeAdmin = (user: AdminUser): string => {
        // console.log(user)
        return `${user.name} ${user.email} is an admin with level ${user.adminLevel}`;
    }

    const admin: AdminUser = {
        name: 'shahadad',
        email: 'me@gmail.com',
        adminLevel: 4,
    }

    console.log(describeAdmin(admin));


    // Task 9: Optional Chaining

    interface Employee {
        name: string;
        address: {
            roadNo: number;
            houseNo: number;
            country: "Bangladesh";
            city?: string;
        }
    }

    const getEmployeeCity = (employee: Employee): string => {
        const city = employee?.address?.city ? employee?.address?.city : 'NO CITY';
        console.log(city)
        return city;
    }

    const newEmployee: Employee = {
        name: 'shahadad',
        address: {
            roadNo: 5,
            houseNo: 10,
            country: 'Bangladesh',
            city: 'chittagong',
        }
    }

    console.log(getEmployeeCity(newEmployee));

    // Task 10: Nullish Coalescing

    const getDisplayName = (name: string | null | undefined): string => {
        return name ?? 'Anonymous';
    }

    console.log(getDisplayName('me'));
    console.log(getDisplayName(null));

    // Task 11: Unknown Type
    const processData = (data: unknown) => {
        if (typeof data === 'string') {
            return data.toLocaleUpperCase();
        } else if (typeof data === 'number') {
            return data * data;
        }
    }

    console.log(processData('shahadad'));
    console.log(processData(10));


    // Task 12: Never Type
    const handleError = (message: string): never => {
        throw new Error(message);
    }

    // handleError('Haha you got a new error');

    // Task 13: Generics with Functions and Interfaces
    const generic = <T>(arr: T[]): T[] => {
        let newArr;

        for (let i = 0; i < arr.length; i++) {

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1);
                    j--
                }
            }
        }
        return [...arr];
    }

    const num = [1, 2, 2, 3, 4];

    const callGeneric = generic(num);
    console.log(callGeneric);

    const strings = ["apple", "banana", "apple", "orange"];
    const uniqueStrings = generic(strings);
    console.log(uniqueStrings);

    // Task 14: Asynchronous TypeScript and Type Aliases

    type UserForFunction = {
        name: string;
        age: number;
    }

    const sayHello = async (): Promise<UserForFunction> => {
        return new Promise<UserForFunction>((resolve, reject) => {
            setTimeout(() => {
                resolve({ name: 'md shahadad', age: 30 })
            }, 1000);
        })
    }

    console.log(sayHello());

    // Task 15: Type Guards
    const isString = (value: unknown): value is string => {
        return typeof value === 'string';
    }

    const printUpperCase = (value: unknown): void => {
        const stringValue = isString(value);
        if (stringValue) {
            console.log(value.toUpperCase());
        } else {
            console.log('Provided value is not string');
        }
    }

    printUpperCase('shahadad');
    printUpperCase(10);

}