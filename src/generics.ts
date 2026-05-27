function hello(data: string): string{
    return data

}

hello(23) // ager num bheja toh error show hoga


// generic sol;_____<T>  temproray type placeholder
function generic <T> (item: T):T {
    return item
}

generic(23)

// mtlab hu ismei kuch bhi pass kr skte hai like number,  string obj. type wala seen dea

function aryan <a>(sharma :a): a[]{
    return [sharma]
}


let nums: Array<number> =[1,23,4]
{

}


// generic interface 

interface APiresponse<t>{
data: t
success: boolean
}

const  userRes : APiresponse<string>
={
    data: "param",
    success: true
}


//
interface user {
    name : string
    age : number
}

const res : userResponse<users> ={
data:{
    name: "prama",
    age: 22
},

success: true
}


// generic class{}

class openBox <t>{
    constext: t

    constructor( value: t){
        this.constext = value
    }
}


const openbox1 =new openBox < string> ("helllo")