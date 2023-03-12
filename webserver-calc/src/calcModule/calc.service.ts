import {Injectable} from '@nestjs/common';
import {InvalidDataException} from "./Exceptions/InvalidDataException";
import {OperationType} from "./Enums/OperationType"

@Injectable()
export class CalcService {
    sum(v1: number, v2: number) : number {
        return (+v1) + (+v2);
    }

    subtract(v1: number, v2: number) : number {
        return v1 - v2;
    }

    multiply(v1: number, v2: number) : number {
        return v1 * v2;
    }

    divide(v1: number, v2: number) : number {
        return v1 / v2;
    }

    processNums(v1: string, operator: OperationType, v2: string) : number{
        let res;
        let val1 = parseFloat(v1);
        let val2 = parseFloat(v2);
        switch (operator){

            case OperationType.Plus:
                res = this.sum(val1, val2);
                break;
            case OperationType.Minus:
                res = this.subtract(val1, val2);
                break;
            case OperationType.Multiply:
                res = this.multiply(val1, val2);
                break;
            case OperationType.Divide:
                res = this.divide(val1, val2);
                break;
        }
        if(isNaN(res))
            throw new InvalidDataException()
        return res;
    }
}