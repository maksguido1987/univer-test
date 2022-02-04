import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { deleteNews } from '../redux/reducers';
import { createDate } from '../shared/helpers';

export const NewsItem: React.FC = () => {
  const { title } = useParams();
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.newsReducer);

  const { content, publishedAt } = news.filter(
    (item) => item.title === title
  )[0];

  return (
    <div className='p-2.5 border border-neutral-300 max-w-lg m-auto'>
      <h3 className='font-semibold text-center text-xl mb-1'>{title}</h3>
      <p className='text-sm text-gray-800 mb-5'>{content}</p>
      <div className='flex items-center justify-between'>
        <div className='text-xs text-gray-400'>{createDate(publishedAt)}</div>
        <Link
          to={'/'}
          className='text-sm text-red-600 hover:text-red-700 font-semibold p-1'
          onClick={() => dispatch(deleteNews(title))}
        >
          Удалить статью
        </Link>
      </div>
    </div>
  );
};
