import CellClass from "./CellClass";
import FigureClass from "./FigureClass";
import Cell from "./models/WhiteCell";
import defaultConfig from "./FiguresConfig";
import Pawn from "./models/Pawn";

enum FiguresNames {
    Pawn = "Pawn",
    Bishop = "Bishop",
    Knight = "Knight",
    Rook = "Rook",
    Queen = "Queen",
    King = "King"
};

export default class BoardClass {
    cells: CellClass[][];
    figures: FigureClass[][];
    figuresConfig: string[][] = defaultConfig;

    constructor() {
        this.cells = [];
        this.figures = [];

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

    renderFigures(i: number, j: number) {
        
    }
}