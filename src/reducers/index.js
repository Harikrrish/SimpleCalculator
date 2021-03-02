
const initialState = {
    result: 0
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'calculate':
            return {
                result: action.output.result
            };
        default:
            return state;
    }
};

export default calculatorReducer;