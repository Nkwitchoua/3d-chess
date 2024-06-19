import FigureClass from "../FigureClass";
import Rook from "../models/Rook";

export default class RookClass extends FigureClass {
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
        }
        return moves;
    }

    setFigure(handleClick: (id: string) => void) {
        this.figure = <Rook key={this.id} posX={this.posX} posZ={this.posZ} colorInt={this.colorInt} handleClick={handleClick} figureId={this.id}/>;
    }
}