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

 const location : readonly [number, string] = [ 32.4,"23"]



 //enums: ye choices ko restrict kr dete hai

 enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
 }

 const size = cupSize.LARGE
