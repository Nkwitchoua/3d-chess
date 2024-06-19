import WhiteCell from "./models/WhiteCell";
import BlackCell from "./models/BlackCell";
import { ReactElement } from "react";
import { generateId } from "./utils";

export interface CellProps {
    posX: number;
    posZ: number;
}

export default class CellClass {
    sum: number;
    posX: number;
    posZ: number;
    cell: ReactElement;
    id: string;

    constructor(i: number, j: number) {
        this.id = generateId(24);
        this.sum = i + j;
        this.posX = 0 + i * 0.35;
        this.posZ = 0 + j * 0.35;

        this.cell = this.sum % 2 == 0 ? 
        <WhiteCell posX={this.posX} posZ={this.posZ} key={this.id}/> :
        <BlackCell posX={this.posX} posZ={this.posZ} key={this.id}/>;
    }
    
    renderCell(): JSX.Element {
        if(this.cell) return this.cell;

        return <></>;
    }
}