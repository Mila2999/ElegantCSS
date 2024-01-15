import classes from './UserCard.module.css';
const UserCard = (props) => {
  console.log(props);
  return (
    <div className={classes.card}>
      <div className={classes.circleContainer}>
        <div className={classes.circle}>
          <span className={classes.circleContent}>{props.id}</span>
        </div>
      </div>
      <div>
        <span>{props.name}</span>
        <br />
        <span className={classes.email}>{props.email}</span>
      </div>
      <div>
        <div>{props.title}</div>
        <div className={classes.status}>{props.status}</div>
      </div>
    </div>
  );
};
export default UserCard;
