import {Controller, Get, Query, UseFilters} from '@nestjs/common';
import {CalcService} from './calc.service';
import {HttpExceptionFilter} from "../http-exception.filter";
import {OperationType} from "./Enums/OperationType";

@Controller()
export class CalcController {
    constructor(private readonly calcService: CalcService) {}

    @Get('sum')
    @UseFilters(new HttpExceptionFilter())
    getSum(@Query('v1') v1: string,
                 @Query('v2') v2: string) {
       return {result: this.calcService.processNums(v1, OperationType.Plus, v2)}
    }

    @Get('subtraction')
    getSubtraction(@Query('v1') v1: string,
           @Query('v2') v2: string) {
        return {result: this.calcService.processNums(v1, OperationType.Minus, v2)}
    }

    @Get('multiplication')
    getMultiplication(@Query('v1') v1: string,
           @Query('v2') v2: string) {
        return {result: this.calcService.processNums(v1, OperationType.Multiply, v2)}
    }

    @Get('division')
    getDivision(@Query('v1') v1: string,
           @Query('v2') v2: string) {
        return {result: this.calcService.processNums(v1, OperationType.Divide, v2)}
    }
}
