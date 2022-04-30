"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
//
const charactersCollection = new CharactersCollection_1.CharactersCollection("xXaYyfBb");
const sorter2 = new Sorter_1.Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);
