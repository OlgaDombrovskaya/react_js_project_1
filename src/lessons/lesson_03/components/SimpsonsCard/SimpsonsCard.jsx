import "./styles.css";

// props - это обьект, с помощью которого мы передаем данные из родительского компонента в дочерний
function SimpsonsCard({
  avatarURL = "",
  firstName = "Name",
  lastName = "Last Name",
  job = "-",
  hobby = "-",
}) {
  return (
    <div className="card">
      <img className="avatar" src={avatarURL} alt="User Avatar" />
      <p className="card_info">
        <span className="info_title">Fullname:</span>
        {`${firstName} ${lastName}`}
      </p>
      <p className="card_info">
        <span className="info_title">Job:</span>
        {job}
      </p>
      <p className="card_info">
        <span className="info_title">Hobby:</span>
        {hobby}
      </p>
    </div>
  );
}

export default SimpsonsCard;
