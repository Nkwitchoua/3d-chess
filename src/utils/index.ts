import { useCallback, useContext, useRef } from "react";

export const generateId = (length: number): string => {
    const digits = "123456789abcdefghikjlmnopqrstuvwxyz";
    let result = "";

    for(let i = 0; i < length; i++) {
        result += digits[Math.floor(Math.random() * digits.length)];
    }

    return result;
}