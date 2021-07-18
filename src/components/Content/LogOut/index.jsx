import logout from '../../../assets/icons/logout.png';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../../redux/ducks/usersReducer';

import style from './style.module.css';

function LogOut() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userLogOut());
  };

  return (
    <div onClick={handleClick} className={style.exit}>
      <div className={style.exit__text}>Выйти</div>
      <div className={style.exit__img}>
        <img src={logout} alt="logout" />
      </div>
    </div>
  );
}

export default LogOut;
