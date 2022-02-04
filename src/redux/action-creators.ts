import NewsApi from '../services/Api';
import { IArticle } from '../shared/news.interface';
import { newsSlice } from './reducers';
import { AppDispatch } from './store';

export const getNews = () => async (dispatch: AppDispatch) => {
  try {
    const newsApi = new NewsApi();
    dispatch(newsSlice.actions.newsFetching());
    const response: IArticle[] = await newsApi.getNews('education');
    dispatch(newsSlice.actions.newsFetchingSuccess(response)); //
  } catch (error) {
    dispatch(newsSlice.actions.newsFetchingError('Произошла ошибка....'));
  }
};
