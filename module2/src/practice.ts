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


}