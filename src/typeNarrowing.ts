 function getChai(kind: String | number) {
    if(typeof kind ==='string') {
        console.log(`you have ordered ${kind} chai`)
    } else {
        console.log(`you have ordered ${kind} cups of chai`)
    }       }


    // oone moere

    function serveChai(msg?: string) {
        if(msg) {
            console.log(`serving ${msg}`)
        } else {
            console.log(`serving chai`)
        }   }

        // one more example

     function orderChai(size: 'small' | 'medium' | 'large' | number) {
     if(size === 'small'){
        return `u have ordered small chai`
     }
     
    if(size==='medium'){
     return ` u have ordered meduim chai`
    }
    else{
        return  `mujay ni pta ${size}`

    }
    }



    // ab class banate hai 

    class namkinChai {
       serve()
      {
       return `namkkin chai` 
      }
    }

       class bestChai {
       serve()
      {
       return  `best Chai`
      }
    }

    function serve(chai : namkinChai | bestChai){
        if(chai instanceof namkinChai){
         return chai.serve
        }
}    


// // ye yaha pr hum apni type banaa rahe hai using type keyword

//  type chaiOrder={
//     type: string
//     suger : number

//  }
//  function ischaiOrder( obj: any  ):obj is chaiOrder{
//  return(
//     typeof obj === "object"
//  }
 


interface User {
   name: string
   age: number
}

class Person implements User {
   name: string
   age: number

   constructor(name: string, age: number) {
      this.name = name
      this.age = age
   }
}

