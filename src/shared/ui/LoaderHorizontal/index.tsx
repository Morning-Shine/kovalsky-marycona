import { soccerBall } from 'shared';
import { LoaderHorizontalCont, Image } from './styled';

export const LoaderHorizontal: React.FC = () => {
  return (
    <LoaderHorizontalCont>
      <Image
        src={soccerBall}
        alt="loading..."
      />
      <h4>загрузка...</h4>
    </LoaderHorizontalCont>
  );
};
