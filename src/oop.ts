// //Oop concepts in typescript
// class User{
//     name: Param;
//     age: 22;

// }
// const user1 = new User;
 
// console.log(user1.age)


// // constructor in typescript

// // class Member{
// //     name: string
// //     age: number     

// //     constructor(name:string ,age:number){
// //         this.name =name
// //         this.age=age

// //     }
// // }

// // const member1 = new Member("param", 22)
// // console.log(member1)

// //access modifier 

// class chai{
//     public name:string = "masala"
//     private sercetIngredients: string = " cardamom"

//   revel(){
// //     return this.sercetIngredients
// //   }

    
// // }

// // class shopeName {
// //     protected shopNames = "chai corenne"
// // getName(){
// //     return this.shopNames
// // }


// // class walet{
// //     #balance: number = 1000

// //     getBalance(){
// //         return this.#balance
    
// //     }
// // }

// // const w = new walet()

// class Cup{
//    readonly capacity : number = 25

//    constructor(capacity : number){
//     this.capacity = capacity
//    }
// }

// class modernChai{
//  private _sugar = 2 

//  get sugar(){
//     return this._sugar
//  }

//  set(valude: number){
//     if(valude > 3){
//         throw ( "too sweet")
//     }
//     return this._sugar
//  }
// }


// // staatic

// class ekChai{
//     static shopename = "chai co"
//     constructor(public flavour : string){

    
// }
// }
// ///
// class parent{
//  eat(){
//     console.log("parent class")
//  }
// }
// class child extends parent{
//     cry(){
//         console.log(" ye ek child class hai")
//     }
// }

// const child1 =new child()

// child1.eat()
// child1.cry()


// class person {
//     constructor(public name: string){
//     }
// }

// class student extends person{
//     constructor(name: string , public course: string){
//         super(name)
//     }
// }

// const a = new student("param", "mern")
// console.log(a.name)
// console.log(a.course)

// polimorphism
//{ overriding method}
// class animal{
//     sound(){

//     }
// }

// class dog extends animal{
//     sound(){
//         console.log("bark")
//     }
//     }

//     class cat extends animal{
//         sound(){
//             console.log(" meow")
//         }
//     }


//     const cat1 = new cat ()
//     const dog1 = new dog()

// encapusalation 

class BanKAccount {
    private _balance =2000

    deposit(amount: number){
     this._balance
    }

    get Balace()
    {
        return this._balance
    }


set balace (value:number){
    if( value > 0){
        this._balance = value
    }
}
}

const user1 = new BanKAccount

user1.deposit(500)
console.log(user1.getBalance())


// getter and setter 



// abstriction


abstract class dring{
    abstract make():void
}

class mychai extends dring{
    make(): void {
        console.log("brewning chai")
    }
}


 class heater{
    heat(){}
 }

 class chaiMaker {
    constructor (private heater : heater){
        
        make (){
            this.heater
        }
 }