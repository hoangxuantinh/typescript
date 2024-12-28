/// <reference path="./common.util.ts" />


namespace MathUtils {
    export function sum(a: number, b: number): number {
        CommonUtils.log("Summing two numbers");
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}