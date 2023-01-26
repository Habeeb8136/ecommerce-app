import {createSlice} from "@reduxjs/toolkit"

const initialState={
    items:[],
    TotalItemsquantity:0,
    totalItemsAmount:0
}

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtoCart(state,action){
            
            const itemIndex= state.items.findIndex(item=>item.id===action.payload.id)
            
            if(itemIndex>=0){
                state.items[itemIndex].itemQuantity+=1;
            }else{
                const temp={
                ...action.payload,
                 itemQuantity:1,
                }
            state.items.push(temp)
            }

            
        }
    }
})

export const {addtoCart}= cartSlice.actions;
export default cartSlice.reducer;