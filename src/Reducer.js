export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        // break;

        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn('Cannot Remove Item')
            }
            return { ...state, basket:[...newBasket] };
        // break;

        default:
            return state;
    }
}
export default reducer;