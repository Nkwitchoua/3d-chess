import CellClass from "./CellClass";
import FigureClass from "./FigureClass";
import defaultConfig from "./FiguresConfig";
import PawnClass from "./figures/PawnClass";
import BishopClass from "./figures/BishopClass";
import KnightClass from "./figures/KnightClass";
import RookClass from "./figures/RookClass";
import QueenClass from "./figures/QueenClass";
import KingClass from "./figures/KingClass";


enum FiguresNames {
    Pawn = "Pawn",
    Bishop = "Bishop",
    Knight = "Knight",
    Rook = "Rook",
    Queen = "Queen",
    King = "King"
};

interface FiguresMap {
    [figureName: string]: new(figureName: string, i: number, j: number, color: string) => any;
}

const figuresMap: FiguresMap = {
    Pawn: PawnClass,
    Bishop: BishopClass,
    Knight: KnightClass,
    Rook: RookClass,
    Queen: QueenClass,
    King: KingClass
}

export default class BoardClass {
    cells: CellClass[][];
    figures: FigureClass[][];
    figuresObj: { [id: string]: FigureClass} = {};
    figuresConfig: string[][] = defaultConfig;
    selectedFigure: FigureClass | null = null;

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
                    const figProps = this.figuresConfig[i][j].split("_");
                    const figColor = figProps[0];
                    const figName = figProps[1];
                    this.figures[i][j] = new figuresMap[figName](figName, i, j, figColor);

                    this.figuresObj[this.figures[i][j].id] = this.figures[i][j];
                }
            }
        }
        
    }

    renderCells(i: number, j: number) {
        this.cells[i][j].renderCell();
    }

    showPossibleMoves() {

    }
}