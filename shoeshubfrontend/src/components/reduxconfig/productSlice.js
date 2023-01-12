import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApis from "../Web/WebApis";
import WebService from "../Web/WebService";
export const fetchProduct = createAsyncThunk('product/fetchProduct',async ()=>{
    let res= await WebService.getApi(WebApis.LOAD_PRODUCTS);
    if(res.data.status)
        return res.data.data;
})
const productSlice = createSlice({
    name:'product',
    initialState:{
        value:{
            productList:[],
            isLoading:false,
            error:'',
            proList:[]
        }
    },
    reducers:{
        search:(state,action)=>{
            let str = new RegExp("^"+action.payload.toLowerCase());
            state.value.productList = state.value.proList.filter(pro=>str.test(pro.productName.toLowerCase()));
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.value.isLoading=true;
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.value.productList=action.payload;
            state.value.proList = action.payload;
            state.value.isLoading=false;
        })
        builder.addCase(fetchProduct.rejected,(state)=>{
            state.value.productList=[];
            state.value.error="Oops!... something went wrong";
            state.value.isLoading=false;
        })
    }
})
export const {search} = productSlice.actions;
export default productSlice.reducer;