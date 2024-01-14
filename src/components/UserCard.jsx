import classes from './UserCard.module.css';
const UserCard = (props) => {
  console.log(props);
  return (
    <div className={classes.card}>
      <div>{props.id}</div>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.title}</p>
      <button>{props.status}</button>
    </div>
  );
};
export default UserCard;
