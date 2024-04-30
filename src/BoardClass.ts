import CellClass from "./CellClass";
import FigureClass from "./FigureClass";
import Cell from "./models/WhiteCell";
import defaultConfig from "./FiguresConfig";
import Pawn from "./models/Pawn";
import PawnClass from "./figures/PawnClass";
import Bishop from "./models/Bishop";

enum FiguresNames {
    Pawn = "Pawn",
    Bishop = "Bishop",
    Knight = "Knight",
    Rook = "Rook",
    Queen = "Queen",
    King = "King"
};

interface FiguresMap {
    [figureName: string]: new(figureName: string, i: number, j: number) => any;
}

const figuresMap: FiguresMap = {
    Pawn: PawnClass
}

export default class BoardClass {
    cells: CellClass[][];
    figures: FigureClass[][];
    figuresConfig: string[][] = defaultConfig;

    constructor() {
        this.cells = [];
        this.figures = [];

        this.setCells();
        this.setFigures();
        
    }
    
    setCells() {
        for(let i = 0; i < 8; i++) {
            this.cells[i] = [];
            for(let j = 0; j < 8; j++) {
                this.cells[i][j] = new CellClass(i, j);
            }
        }
    }

    setFigures() {
        for(let i = 0; i < 8; i++) {
            this.figures[i] = [];
            for(let j = 0; j < 8; j++) {
                if(this.figuresConfig[i][j] && figuresMap[this.figuresConfig[i][j].split("_")[1]]) {
                    const figureName = this.figuresConfig[i][j].split("_")[1];
                    this.figures[i][j] = new figuresMap[figureName](figureName, i, j);
                    // console.log("this.figures[i][j]", this.figures[i][j])

                }
            }
        }
    }

    renderCells(i: number, j: number) {
        this.cells[i][j].renderCell();
    }

    renderFigures(i: number, j: number) {
        
    }

    showPossibleMoves() {

    }
}