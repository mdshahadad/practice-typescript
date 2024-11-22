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
    console.log(user1)


}