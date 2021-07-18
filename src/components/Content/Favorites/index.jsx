import { useSelector } from 'react-redux';

import style from './style.module.css';

function Favorites() {
  const favorites = useSelector((state) => state.application.favorites);

  return (
    <div className={style.title}>
      Добавлено в Избранное: <span>{favorites.length}</span> рейсов
    </div>
  );
}

export default Favorites;
