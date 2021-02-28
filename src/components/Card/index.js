import { isLast } from '../../utils';
import './style.css';

const renderUserCard = ({ name, age, gender, phone, email, address }) => {
  return (
    <div className="user">
      <img className="user__photo" src="https://picsum.photos/100/100" alt="user"/>
      <div className="user__info">
        <div><b>Nombre:</b> {name.firstName}{name.lastName}</div>
        <div><b>Edad:</b> {age}</div>
        <div><b>Genero:</b> {gender}</div>
        <div><b>Teléfono:</b> {phone}</div>
        <div><b>Correo:</b> {email}</div>
        <div><b>Dirección:</b> {address}</div>
      </div>
    </div>
  );
}

const renderConciliationCard = ({ conciliationName, balance, timestamp, description}) => {
  return (
    <div className="coinciliation">
      <div className="coinciliation__info">
        <div><b>Conciliacion:</b> {conciliationName}</div>
        <div><b>Balance:</b> {balance}</div>
        <div><b>Fecha:</b> {timestamp.createdAt} - {timestamp.updateAt}</div>
        <div><b>Descripción:</b> {description}</div>
      </div>
    </div>
  );
}

const renderSourceCard = ({ company, timestamp, description}) => {
  return (
    <div className="source">
      <div className="source__info">
        <div><b>Empresa:</b> {company}</div>
        <div><b>Fecha:</b> {timestamp.createdAt} - {timestamp.updateAt}</div>
        <div><b>Descripción:</b> {description}</div>
      </div>
    </div>
  );
}

const renderTableCard = ({ dashboardName, visualType, description, visuals, tags, timestamp}) => {
  return (
    <div className="table">
      <div className="table__info">
        <div><b>Nombre:</b> {dashboardName}</div>
        <div><b>Tipo:</b> {visualType.map((v, index) => `${v.name}${!isLast(visualType, index) ? ', ' : ''} `)}</div>
        <div><b>Fecha:</b> {timestamp.createdAt} - {timestamp.updateAt}</div>
        <div><b>Descripción:</b> {description}</div>
        <div><b>Visual:</b> {visuals.map((v, index)=> `[${v.name} - ${v.type}]${!isLast(visuals, index) ? ', ' : ''} `)}</div>
        <div><b>Tags:</b> {tags.map((t, index )=> `${t}${!isLast(tags, index) ? ', ' : ''}`)}</div>
      </div>
    </div>
  );
}

const selectType = {
  usuarios: renderUserCard,
  conciliaciones: renderConciliationCard,
  tableros: renderTableCard,
  fuentes: renderSourceCard,
}

const Card = ({ type, card }) => {
  return <li>
    {selectType[type](card)}
  </li>
}

export default Card;
