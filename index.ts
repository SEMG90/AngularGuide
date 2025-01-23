// function
function syaHello(name:string){
    console.log("Welcome,", name);
}

syaHello("Mohammed");

// array
let ary:string[] = ["Mohamed","Magdy","Abdel","Rauof"];
let num:number[] = [1,2,3,4,];

// array group
let inputs:(string|number)[] = ["Mido",32,"Kemo",98];

// array string or number
let items:string[]|number[] = ["Lola","66","Amogo"];

// interface
interface Iuser{
    name:string;
    readonly age:number;
    email?:string;
    phone?:string;
}

let person:Iuser[] = [
    {name:"Hamada",age:30,email:"email",phone:"phone"},
    {name:"Islam",age:30,email:"email",phone:"phone"},
    {name:"Hala",age:30,email:"email",phone:"phone"}
]

person[0].age = 50;
person[0].email = "sfdsdf";
person[0].phone = "163516516516351";

// object
let user:Iuser = {name:"Mohammed",age:34,email:"mmagdy1690@gmail.com",phone:"01225901435"};

// ex

