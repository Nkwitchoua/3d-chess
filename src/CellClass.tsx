import WhiteCell from "./models/WhiteCell";
import BlackCell from "./models/BlackCell";
import { ReactElement } from "react";
import { generateId } from "./utils";

export interface CellProps {
    posX: number;
    posZ: number;
    canMove: boolean;
}

export default class CellClass {
    sum: number;
    posX: number;
    posZ: number;
    cell: ReactElement;
    id: string;
    position: number[];

    constructor(i: number, j: number) {
        this.id = generateId(24);
        this.sum = i + j;
        this.posX = i * 0.35;
        this.posZ = j * 0.35;
        this.position = [i, j];

        this.cell = this.sum % 2 == 0 ? 
        <WhiteCell posX={this.posX} posZ={this.posZ} key={this.id} canMove={false}/> :
        <BlackCell posX={this.posX} posZ={this.posZ} key={this.id} canMove={false}/>;
    }
    
    highlightCanMove() {
        this.cell = this.sum % 2 == 0 ? 
        <WhiteCell posX={this.posX} posZ={this.posZ} key={this.id} canMove={true}/> :
        <BlackCell posX={this.posX} posZ={this.posZ} key={this.id} canMove={true}/>;
    }
    
    renderCell(): JSX.Element {
        if(this.cell) return this.cell;

        return <></>;
    }
}