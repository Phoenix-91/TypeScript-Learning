// objects
const chai = {
    name: "namkin chai",
    price: 20,
    isHot: true
}


// one more
// kuch is terh se humne type define kr dete hai pehele
// let tea:{
//     name: string
//     price: number
//     isHot: boolean
// }

// tea={
//     name: "best chai",
//     price: 30,
//     isHot: true
// }

// type k alice object>>>
type tea = {
    name: string
    price: number   
    ingredients: string[]
}

const adrakChai: tea = {
    name: "adrak chai",
    price: 25,
    ingredients: ["adrak", "chai patti", "sugar", "pani"]
}



// ONE MORE ABOUT DUCK TYPING
 type cup ={
    size: string
 }
 let smallCup: cup = {
    size: "small"
 }
 let bigCup: cup = {
    size: "big"
 }



 // data types ko split out kr dena 

 type item= {
    name: string
    quantity: number
 }

 type order={
    id : string;
    items: item[];
    adress: address
 }

 // updating the order
 const upadateOrder=(update:partial<order>)=>{
    // code to update the order
    console.log("order updated", update)
 }

 upadateOrder({
    id: "12345",
    items: [
        {
            name: "adrak chai",
            quantity: 2
        }
    ]
 });// ismei issue kya hai ismei humko both value deni padegi id aur items dono dena padega but humko sirf id update krna hai to isliye humne partial use kiya hai taki humko dono value dena na pade sirf ek value dena ka option mile  


 type basicChaiInfo ={
    name: string
    price: number
    isHot: boolean
    ingredients: string[]
 }

 const getBasicChaiInfo = Pick<chai, "name" | "price">