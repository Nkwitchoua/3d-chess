import CellClass from "./CellClass";
import Cell from "./models/WhiteCell";

export default class BoardClass {
    cells: CellClass[][];

    constructor() {


        this.cells = [];

        for(let i = 0; i < 8; i++) {
            this.cells[i] = [];
            for(let j = 0; j < 8; j++) {
                this.cells[i][j] = new CellClass(i, j);
            }
        }
    }

    renderCells(i: number, j: number) {
        this.cells[i][j].renderCell();
    }
}