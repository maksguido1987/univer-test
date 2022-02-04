import { Link } from 'react-router-dom';
import { createDate } from '../shared/helpers';
import { IArticle, INews } from '../shared/news.interface';

export const News: React.FC<INews> = ({ news, error, isLoading }) => {

  const renderItem = (item: IArticle) => {
    const { title, publishedAt, description } = item;

    return (
      <div
        key={title}
        className='p-2.5 border border-neutral-300 mb-2.5 last:mb-0'
      >
        <h3 className='font-semibold text-center text-xl mb-1'>{title}</h3>
        <p className='text-sm text-gray-800 mb-5'>{description}</p>
        <Link
          to={`/news/${title}`}
          className='text-sm text-sky-600 hover:text-sky-700 font-semibold p-1'
        >
          Ссылка на статью
        </Link>
        <div className='text-xs text-gray-400'>{createDate(publishedAt)}</div>
      </div>
    );
  };

  return (
    <div className='w-full max-w-5xl m-auto pt-10'>
      {error && <div className='text-4xl text-center font-bold'>{error}</div>}
      <div>
        {isLoading ? (
          <h2 className='text-2xl text-center font-bold'>Идёт загрузка....</h2>
        ) : (
          <h1 className='text-4xl text-center font-bold mb-10'>Все новости</h1>
        )}
        {news.map(renderItem)}
      </div>
    </div>
  );
};
