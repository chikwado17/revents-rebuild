const initialState = {
    data: 42
}


const testReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'INCREMENT':
            return {
                ...state,
                data: state.data + 1
            }

        case 'DECREMENT':
            return {
                ...state,
                data: state.data - 1
            }


        default:
            return state;
    }
}

export default testReducer;