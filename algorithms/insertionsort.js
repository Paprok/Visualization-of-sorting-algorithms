class Insert {
    constructor(toSort) {
        this.toSort = toSort;
        this.i = 1;
        this.j = 0;
        this.currentElement = toSort[1];
        this.isDone = false;
        
        this.getCurrentState = () => {
            return this.toSort;
        }
        
        this.continue = () => {
            if (this.j >= 0 && this.toSort[this.j] > this.currentElement) {
                this.moveElementRight(this.j, this.toSort);
            } else {
                this.toSort[this.j + 1] = this.currentElement;
                this.updateCounters();
            }
        }

        this.moveElementRight = () => {
            this.toSort[this.j + 1] = this.toSort[this.j];
            this.j--;
        }

        this.updateCounters = () => {
            this.i++;
            this.currentElement = this.toSort[this.i];
            this.j = this.i - 1;
            this.isDone = this.i == this.toSort.length;
        }
    }
}