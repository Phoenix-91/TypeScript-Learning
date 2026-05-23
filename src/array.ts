// array, tupples and enums 
// const myarr: string[] = ['a', 'b', 'c'];
// const myarr2: number[] = [1, 2, 3];
// console.log(myarr);
// console.log(myarr2);

type chai ={
    name: string,
    price: number
}
const menu: chai[]= [
    {name: "masala chai", price: 42},
    {name: "adrak chai", price: 32},
]

// multi dimonsion array 

const multi : number[][]=[
    [1,2,30],
    [3,4,5]
]
// tupple

let chaiTupple: [string,number];
chaiTupple=["masal chai",23]
// so tupple mein jis order mein define 
// same order mei value dali hoti hai u cant write 
 //[20 "masala chai"]

 // readonly tupples

 const n : readonly [number, string] = [ 32.4,"23"]



 //enums: ye choices ko restrict kr dete hai

 enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
 }

 const size = cupSize.LARGE


// array length k liye
  
const arr1 :number [] =[1,2,3]

    console.log(arr1.length);

// now push and  pop opertaion
arr1.push(4);
console.log(arr1.length)

const removeElement= arr1.pop(1, 1)
console.log(removeElement)
console.log(arr1)

// tupple
const userInfo: [number, string] = [55, "param"]
console.log(userInfo)

// named tupple 
const location: readonly[name: string, age: Number] =["masala",22]

// enums
enum status{
    pending,
    failed,
    success
}

if (status.failed ===1){
    console.log(" failed")
}

else(!status.failed && status.pending){
    console.log("success")
}

// enum stander practice
enum statusCode{    
    pending = "PENDING",
    failed = "FAILED",
    success = "SUCCESS"
}// ismei  valude humesha same hi hoti hai chahe humne enum ke andar kitne bhi value add kar di ho



// even we can do push and pop in tupple but it is not recommended because tupple ka main purpose hi ye hota hai ki hum ek fixed size ka array create kar sake jisme humne pehle se hi data type define kar diya ho aur usme hum sirf wahi value daal sake jo humne define ki hai to isliye tupple mein push and pop karna sahi nahi hota hai

let tupple1: [number, string] = [1, "hello"]
tupple1.push(2)
console.log(tupple1) // ismei push karne ke baad tupple ka size badh jayega aur usme humne number aur string dono daal diye hai to ye tupple ka main purpose hi khatam ho jayega isliye tupple mein push karna sahi nahi hota hai

