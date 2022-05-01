"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// Sorter is an abstract class, so we can call methods
// that don't exist yet that we expect to exist in the child class
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            // using -1 to keep track of not needing the
            // next ending index in bubble sort after each iteration
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
