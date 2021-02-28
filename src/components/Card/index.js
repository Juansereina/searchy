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

const selectType = {
  usuarios: renderUserCard,
  conciliaciones: () => <span>concilicaiones</span>,
  tableros: () => <span>tableros</span>,
  fuentes: () => <span>fuentes</span>,
}

const Card = ({ type, card }) => {
  return <li>
    {selectType[type](card)}
  </li>
}

export default Card;
