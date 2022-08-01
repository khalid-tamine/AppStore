import { createSlice } from '@reduxjs/toolkit';



export const cartSlice = createSlice({
    name: 'cartReducer',
    initialState: {
        selectedItems: {items: [], restaurantName: ''},
    },
    reducers: {
        addToCart: (state,action) => {
            if (action.payload.checkboxValue) {
                console.log("ADD TO CART");
                console .log(action.payload.checkboxValue);
                state.selectedItems = {
                    items: [...state.selectedItems.items, action.payload.food],
                    restaurantName: action.payload.restaurantName,
                };
                console.log(state.selectedItems.items);
            }else {
                console.log("REMOVE FROM CART");
                console .log(action.payload.checkboxValue);
                
                state.selectedItems = {
                    items : [...state.selectedItems.items.filter( (item) => item.title !== action.payload.food.title)],
                    restaurantName : action.payload.restaurantName
                }
                console.log(state.selectedItems.items[0]);
            }
            
            
           
        
        },
    },
  })

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
