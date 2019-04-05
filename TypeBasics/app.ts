//string
let myName: string = "Max";

// number
let myAge: number = 327;

//bool
let hasHobbies: boolean = true;

//array
let hoobies: any[] = ["Cooking", "Sports"];
console.log(hoobies);

let address: [string, number] = ["Supterstreet", 99];

//enum
enum Color {
  Gray,
  Green,
  Blue
}

let myColor: Color = Color.Green;
console.log(myColor);

//functions
function retrunMyName(): string {
  return myName;
}
console.log(retrunMyName());

//void
function sayHello(): void {
  console.log("Hello!");
}

//argument types
function mutiply(val1: number, val2: number): number {
  return val1 * val2;
}
console.log(mutiply(2, 3));

let myMutiply: (a: number, b: number) => number;
myMutiply = mutiply;
console.log(myMutiply(5, 2));

//objects
let userData: { name: string; age: number } = {
  name: "Abi",
  age: 28
};

//complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 2, 3],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

//type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };
let complex2: Complex = {
  data: [100, 2, 3],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

//union types
let myRealAge: number | string = 27;

//check types
let finalValue = "a String";
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

//never
function neverReturns(): never {
  throw new Error("An error!");
}

//Nullable types
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
