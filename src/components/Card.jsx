import classes from './Card.module.css';
function Card() {
  return (
    <div className={classes.card}>
      <div> + </div>
      <p>Invite User to this Subscription</p>
      <button>Invite User</button>
    </div>
  );
}
export default Card;
