import { BlobOptions } from "buffer";

const amount = 12;
if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

console.log(`Hello World!! My first app`);

// Primitive types
const aString: string = "I'm a string";
const aBoolean: Boolean = false;
const aNumber: number = 3.1415926;
const aNull: null = null;
const aAny: any = 43;
const aSymbol: unique symbol = Symbol("unique");
const aTuple: [number, string] = [19003, "John Smith"];
let aNever: never; // can't instantiate never

type Point2D = [x: number, y: number];
type Vector = [x: number, y: number, z: number];

const point: Point2D = [3.2, 1.8];
const vector1: Vector = [4.5, 6.8, 12.6];

class User {
  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const userJohn = new User("John");
console.log(`User name: ${userJohn.getName()}`);

type Suit = `${"Spade" | "Heart" | "Diamond" | "Club"}`;
type Rank = `${
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "Jack"
  | "Queen"
  | "King"
  | "Ace"}`;

type Deck = `${Rank} of ${Suit}`;

const myCards: Deck = "10 of Club";

console.log(`${myCards}`);
