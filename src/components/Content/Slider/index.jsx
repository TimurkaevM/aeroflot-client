import ScrollItems from './ScrollItems';
import Card from './Card';
import { useSelector } from 'react-redux';

import style from './style.module.css';

function Slider() {
  const images = useSelector((state) => state.images.items);

  return (
    <div className={style.slider}>
      <ScrollItems _class={style.cards}>
        {images.map((image) => {
          return <Card key={image._id} image={image} />;
        })}
      </ScrollItems>
    </div>
  );
}

export default Slider;
