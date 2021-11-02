import { CLOSE_MODAL, OPEN_MODAL } from "./modalConstant";


const initialState = null;

const ModalReducer = (state = initialState, action) => {
    switch(action.type) {

        case OPEN_MODAL:
            const { modalType, modalProps } = action.payload;
            return {
                modalType,
                modalProps
            }

        case CLOSE_MODAL:
            return null

        default:
            return state;
    }
}

export default ModalReducer;