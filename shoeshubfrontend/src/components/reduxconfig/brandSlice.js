import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApis from "../Web/WebApis";
import WebService from "../Web/WebService";
export const fetchBrand = createAsyncThunk('brand/fetchBrand',async ()=>{
    let res= await WebService.getApi(WebApis.LOAD_BRANDS);
    if(res.data.status)
        return res.data.result;
})
const brandSlice = createSlice({
    name:'brand',
    initialState:{
        value:{
            brandList:[],
            isLoading:false,
            error:''
        }
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBrand.pending,(state)=>{
            state.value.isLoading=true;
        })
        builder.addCase(fetchBrand.fulfilled,(state,action)=>{
            state.value.brandList=action.payload;
            state.value.isLoading=false;
        })
        builder.addCase(fetchBrand.rejected,(state)=>{
            state.value.brandList=[];
            state.value.error="Oops!... something went wrong";
            state.value.isLoading=false;
        })
    }
})
export default brandSlice.reducer