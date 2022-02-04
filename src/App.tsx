import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { News, NewsItem } from './pages';
import { getNews } from './redux/action-creators';

function App() {
  const dispatch = useAppDispatch();
  const { news, error, isLoading } = useAppSelector(
    (state) => state.newsReducer
  );

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path='/'
        element={<News news={news} error={error} isLoading={isLoading} />}
      />
      <Route path='/news/:title' element={<NewsItem />} />
    </Routes>
  );
}

export default App;
