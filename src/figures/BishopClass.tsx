import FigureClass from "../FigureClass";
import Bishop from "../models/Bishop";

export default class BishopClass extends FigureClass {
    constructor(figureName: string, i: number, j: number, color: string) {
        super(figureName, i, j, color);

        this.moves = this.setFigureMoves();
    }

    setFigureMoves() {
        const moves = [];
        for(let i = 0; i < 8; ++i) {
            for(let j = 0; j < 8; ++j) {
                moves.push([i, j]);
                moves.push([-i, j]);
                moves.push([i, -j]);
                moves.push([-i, -j]);
            }
        }
        return moves;
    }

    setFigure(handleClick: (id: string) => void) {
        this.figure = <Bishop key={this.id} posX={this.posX} posZ={this.posZ} colorInt={this.colorInt}  handleClick={handleClick} figureId={this.id}/>;
    }
}