import { isLast } from '../../utils';
import './style.css';

/* This component renders the structure of different type of cards, no contains business logic */

/* Renders the structure for the user card */
const renderUserCard = ({ name, age, gender, phone, email, address }) => {
  return (
    <div className="user">
      <img className="user__photo" src="https://picsum.photos/100/100" alt="user"/>
      <div className="user__info">
        <p><b>Nombre:</b> {name.firstName}{name.lastName}</p>
        <p><b>Edad:</b> {age}</p>
        <p><b>Genero:</b> {gender}</p>
        <p><b>Teléfono:</b> {phone}</p>
        <p><b>Correo:</b> {email}</p>
        <p><b>Dirección:</b> {address}</p>
      </div>
    </div>
  );
}

/* Renders the structure for the coinciliation card */
const renderConciliationCard = ({ conciliationName, balance, timestamp, description}) => {
  return (
    <div className="coinciliation">
      <div className="coinciliation__info">
        <p><b>Conciliacion:</b> {conciliationName}</p>
        <p><b>Balance:</b> {balance}</p>
        <p><b>Fecha:</b> {timestamp.createdAt} - {timestamp.updateAt}</p>
        <p><b>Descripción:</b> {description}</p>
      </div>
    </div>
  );
}

/* Renders the structure for the source card */
const renderSourceCard = ({ company, timestamp, description}) => {
  return (
    <div className="source">
      <div className="source__info">
        <p><b>Empresa:</b> {company}</p>
        <p><b>Fecha:</b> {timestamp.createdAt} - {timestamp.updateAt}</p>
        <p><b>Descripción:</b> {description}</p>
      </div>
    </div>
  );
}

/* Renders the structure for the table card */
const renderTableCard = ({ dashboardName, visualType, description, visuals, tags, timestamp}) => {
  return (
    <div className="table">
      <div className="table__info">
        <p><b>Nombre:</b> {dashboardName}</p>
        <p><b>Tipo:</b> {visualType.map((v, index) => `${v.name}${!isLast(visualType, index) ? ', ' : ''} `)}</p>
        <p><b>Fecha:</b> {timestamp.createdAt} - {timestamp.updateAt}</p>
        <p><b>Descripción:</b> {description}</p>
        <p><b>Visual:</b> {visuals.map((v, index)=> `[${v.name} - ${v.type}]${!isLast(visuals, index) ? ', ' : ''} `)}</p>
        <p><b>Tags:</b> {tags.map((t, index )=> `${t}${!isLast(tags, index) ? ', ' : ''}`)}</p>
      </div>
    </div>
  );
}

/* Type of cards */
const selectType = {
  usuarios: renderUserCard,
  conciliaciones: renderConciliationCard,
  tableros: renderTableCard,
  fuentes: renderSourceCard,
}

/* Renders a card component */
const Card = ({ type, card }) => {
  return <li>
    {selectType[type](card)}
  </li>
}

export default Card;
