import classes from './Card.module.css';
function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.circleContainer}>
        <div className={classes.circle}>
          <span className={classes.circleContent}>+</span>
        </div>
      </div>
      <div>
        <p>Invite User to this Subscription</p>
      </div>
      <div>
        <button className={classes.button}>Invite User</button>
      </div>
    </div>
  );
}
export default Card;
