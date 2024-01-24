import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  textBlocks: [],
  resBlocks: [],
  listBlocks: [], 
  textremoveIds:[],
  listremoveids:[],
  resremoveids:[],
  textcount:0,
  listcount:0,
  respocount:0,
};

const addTextBlockSlice = createSlice({
  name: 'TextBlock',
  initialState,

  reducers: {

    addTextBlock: (state, action) => {
      state.textBlocks.push(action.payload);
      state.textcount += 1;
    }, 
    removeTextBlock: (state, action) => {
      const idToRemove = action.payload;
      state.textremoveIds = idToRemove
      state.textBlocks = state.textBlocks.filter(block => block?.id !== idToRemove); 
      state.textcount -= 1;
    },

    addResBlock: (state, action) => {
      state.resBlocks.push(action.payload); 
      state.respocount += 1;
    },
    removeResBlock: (state, action) => {
      const idToRemove = action.payload;
      state.resremoveids.push(idToRemove)
      state.resBlocks = state.resBlocks.filter(block => block.id !== idToRemove); 
      state.respocount -= 1;
    },
    



    // Add List Block and Remove List Block Function 
    addListBlock: (state, action) => {
      state.listBlocks.push(action.payload); 
      state.listcount += 1;
    },
    removeList: (state, action) => {
      const idToRemove = action.payload;
      state.listremoveids.push(idToRemove)
      state.listBlocks = state.listBlocks.filter(block => block?.id !== idToRemove); 
      state.listcount -= 1;
    },
 
  },
});

export const { addTextBlock, removeTextBlock,addListBlock ,removeList,removeResBlock,addResBlock } = addTextBlockSlice.actions;
export default addTextBlockSlice.reducer;