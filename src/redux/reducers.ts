import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle, INews } from '../shared/news.interface';

const newsState: INews = {
  news: [],
  error: '',
  isLoading: false,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: newsState,
  reducers: {
    newsFetching(state) {
      state.isLoading = true;
    },
    newsFetchingSuccess(state, action: PayloadAction<IArticle[]>) {
      state.isLoading = false;
      state.error = '';
      state.news = action.payload;
    },
    newsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteNews(state, action: PayloadAction<string | undefined>) {
      state.news = state.news.filter((item) => item.title !== action.payload);
    },
  },
});

export const { deleteNews } = newsSlice.actions;
export default newsSlice.reducer;
