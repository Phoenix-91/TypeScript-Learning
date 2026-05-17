// // //  let respose: any ="42";

// // //  let numericLength: number = ( respose as string).length;

// // //  console.log(numericLength)


// //  type book ={
// //     name: string

// //  }

// //  let bookString ='{"name":"The Great Gatsby"}'


// const inputElement = document.getElementById("user") as HTMLInputElement // uska matlab hai ki hum forcefully bol rahe hai ki ye hi tyoe hai cuz types script ko surity chaiye hoti hai , so isko bolte hai tyoe assertion or annotation







// unknown and any

// let value:any

// value = " chai" 
// value = [ 1,3,4,] 
// value = 2.3
// value.toUpperCase()

// let Userlogin: unknown
// try{
//     if(Userlogin === 1) {
//         console.log("Admin")
//     }
// }catch(error){
//     console.log("Error: ", error)
// }


let data: unknown = "Hello, TypeScript!";
const letData: string = data as string; // Type assertion to string

console.log(letData.toUpperCase()); // Now we can safely call string methods    


// now NEVER data type

type User = {
    name: string;
    age: number;
}

