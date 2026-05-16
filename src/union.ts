// here i am using union types to define a variable that can hold either a string or a number

let subs: number | string = "100k" // usmei hum ye botle hai ki hum usko number bhi bol skte hai aur String so Yaha pr Union type ka use kiya hai jisme humne number aur string dono ko allow kiya hai. Ab hum is variable ko number bhi assign kar skte hai aur string bhi assign kar skte hai.    
console.log(subs)



let apiRequestStatus : 'Pending' | 'Success' | 'Failure' = "Pending" // Yaha pr humne ek variable banaya hai jiska naam hai apiRequestStatus aur uska type hai Pending, Success aur Failure. Yaha pr humne Union type ka use kiya hai jisme humne Pending, Success aur Failure ko allow kiya hai. Ab hum is variable ko Pending, Success aur Failure me se koi bhi value assign kar skte hai.
console.log(apiRequestStatus)

apiRequestStatus = "Success"
console.log(apiRequestStatus)



// one more example 
const orders = [ '123', '456', '789' ] // Yaha pr humne ek array banaya hai jiska naam hai orders aur uska type hai string. Yaha pr humne Union type ka use kiya hai jisme humne string ko allow kiya hai. Ab hum is array me string value assign kar skte hai.

let currentOrder: string | undefined ;// Yaha pr humne ek variable banaya hai jiska naam hai currentOrder aur uska type hai string aur undefined. Yaha pr humne Union type ka use kiya hai jisme humne string aur undefined ko allow kiya hai. Ab hum is variable ko string value assign kar skte hai aur undefined bhi assign kar skte hai.;

for(let order of orders) {
    if(order === '456') {
        currentOrder = order
        break
    }
}
console.log(currentOrder)

