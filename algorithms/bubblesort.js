class Bubble {
    constructor(toSort) {
        this.toSort = toSort;
        this.i = 0;
        this.j = toSort.length - 1;
        this.isDone = false;
        this.continue = () => {
            if (this.toSort[this.i] > this.toSort[this.i + 1]) {
                swap(this.toSort, this.i, this.i + 1);
            }

            this.updateCounters();
        }

        this.getCurrentState = () => {
            return this.toSort;
        }

        this.updateCounters = () => {
            this.i++;
            if (this.i == this.j) {
                this.j--;
                this.i = 0;
            }

            if (this.j == 0) {
                this.isDone = true;
            }
        }
    }
}

function swap(collection, index1, index2) {
    let temp = collection[index1];
    collection[index1] = collection[index2];
    collection[index2] = temp;
}
