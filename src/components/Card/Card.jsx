import card from "../Card/data.js";

function Card() {
  return (
    <div className="card">
      <img className="avatar" src={card.avatarURL} alt="image" />
      <h3 className="card_name">Имя и фамилия: {card.fullName}</h3>
      <p className="card_info">Род деятельности: {card.job}</p>
      <p className="card_info">Хобби: {card.hobby}</p>
    </div>
  );
}

export default Card;