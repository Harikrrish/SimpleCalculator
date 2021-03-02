import { calculation } from '../utils';

export const updateCalculation = (inputValue) => {
    let calculationResult = calculation(inputValue);

    return {
        type: 'calculate',
        output: {
            result: calculationResult
        }
    }
};