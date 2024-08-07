import FigureClass from "../FigureClass";
import Queen from "../models/Queen";

export default class QueenClass extends FigureClass {
    constructor(figureName: string, i: number, j: number, color: string) {
        super(figureName, i, j, color);

        this.moves = this.setFigureMoves();
    }

    setFigureMoves() {
        const moves = [];
        for(let i = 0; i < 8; ++i) {
                moves.push([0, i]);
                moves.push([0, -i]);
                moves.push([i, 0]);
                moves.push([-i, 0]);
                // for(let j = 0; j < 8; ++j) {
                    moves.push([i, i]);
                    moves.push([-i, i]);
                    moves.push([i, -i]);
                    moves.push([-i, -i]);
                // }
        }
        return moves;
    }

    setFigure(handleClick: (id: string) => void, handleHover: (id: string, e: Event) => void) {
        this.figure = <Queen key={this.id} posX={this.posX} posZ={this.posZ} colorInt={this.colorInt} handleClick={handleClick} handleHover={handleHover} figureId={this.id}/>;
    }
}