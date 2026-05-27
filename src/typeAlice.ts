// partial type

type user = Partial< name>

const partialType : user ={
    name : "param"
}



// require type : 

type user ={
    name : string
    age : number
}
type userprint = Required<user>