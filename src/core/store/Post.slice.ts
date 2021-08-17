import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "rodolfohiok-sdk";

interface PostSliceState {
  paginated?: Post.Paginated; 
}

const initialState: PostSliceState = {
  paginated: {
    page: 0,
    size: 0,
    totalElements: 1,
    totalPages: 1,
    content: []
  }
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post.Summary>) {
      state.paginated?.content?.push(action.payload);
    }
  }
});

export const postReducer = postSlice.reducer;
export const { addPost } = postSlice.actions;
