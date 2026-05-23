/// functions in TS 

function makeChai(type: string, cups: number
){
    console.log(`you have ordered ${cups} cups of ${type} chai`)
}

makeChai("adrak", 2)


function getChaiPrice(type: string): number {
    return 23
}

// logger function
function logChai(): void {// iska mtlab kya hai ki humara function kuch bhi return ni kr raha hai 
    console.log("Chai is being prepared")
}
// optional parameter
function orderChai(type?: string) {
}
// ab ye 2 terh se bante hai ye
//  toh  type dege ya phir apne app defaut value yaphit question mark laga denge\
