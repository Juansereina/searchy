import './style.css';

const Title = ({ title, results }) => (
  <div className="title">
    <h2 className={`title__text title--${title}`}>{title}</h2>
    <span className={`title__results title--${title}`}>Resultados: {results}</span>
  </div>
);

export default Title;
