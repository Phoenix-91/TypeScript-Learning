// interface and genric

interface chai{
    flavour : string
    price:number
        
    }

    const masala:chai={
        flavour: "masala",
        price:30,
    };



    interface user{
        name: string
        email:string
    }

const user2 : user = {
    name : "parm",
    email : "heell@mail"
}


// interface with function 

interface login{
    login(email: string, password: string):void
}

class loginPage implements login{
    login(email: string, password: string): void {
        console.log("user ho gya login")
    }
}


interface user{
    name: string
}

interface user {
    age: number
}

const u: user ={
    name:"hitesh"

}