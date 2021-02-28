import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import Title from '../Title';
import Loader from '../Loader';
import { loadMore } from './cardContainerSlice';
import './style.css';

const CardContainer = () => {
  const results = useSelector((state) => state.search.result || {});
  const cardsConfig = useSelector((state) => state.cards || {});
  const _modules = Object.entries(results);
  const dispatch = useDispatch();

  const renderSections = () => _modules.map(([key, cards]) => {
    const config = cardsConfig[key];
    return (
      <section key={key} className="container">
        <Title title={key} />
        <ul className="container__list">
        {cards.map((card, index) => index < config.index && <Card key={card._id} type={key} card={card} />)}
        </ul>
        { cardsConfig[key].isLoading ? <Loader /> : <button onClick={() => dispatch(loadMore(key))} className="container__load-more">Cargar más</button> }
      </section>
    )
  });

  return <div className="cards">{renderSections()}</div>
}

export default CardContainer;
