import style from './style.module.css';

function Card(props) {
  return (
    <div className={style.card}>
      <img src={props.image.url} alt="" />
    </div>
  );
}

export default Card;
