// interfaces

interface User {
    name : string;
    age : number;
    email : string;

}

let user1 : User = {
    name : "param",
    age : 22,
    email : "param@example.com"
}

function printUserInfo(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}   


// lets use interface in class
class Person implements User {
   name: string
   age: number

   constructor(name: string, age: number) {
      this.name = name
      this.age = age
   }
}