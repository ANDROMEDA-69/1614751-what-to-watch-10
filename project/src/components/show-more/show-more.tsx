import {useAppDispatch} from '../../hooks';
import {increaseFilmsCount} from '../../store/genre-process/genre-process';
import {SyntheticEvent} from 'react';

type ShowMoreProps = {
  isShowButton: boolean;
}

function ShowMore({isShowButton}: ShowMoreProps): JSX.Element | null {
  const dispatch = useAppDispatch();

  const сlickShowMoreHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(increaseFilmsCount());
  };

  if (isShowButton) {
    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={сlickShowMoreHandler}>Show more</button>
      </div>
    );
  }
  return null;
}

export default ShowMore;
