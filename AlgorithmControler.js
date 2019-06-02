class AlgorithmController {
    constructor(algorithm, view, slepp) {
        this.algorithm = algorithm;
        this.view = view;
        this.slepp = slepp
    }

    run() {
        let list = this.algorithm.getCurrentState();
        view.getTableView(list);
    }

    reset() {

    }
}