import classes from './UserCard.module.css';

const getStatusColor = (status) => {
  switch (status) {
    case 'Active':
      return 'green';
    case 'Error':
      return 'red';
    case 'Expired':
      return 'orange';
    default:
      return '';
  }
};
const UserCard = (props) => {
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

        <div
          className={classes.status}
          style={{
            backgroundColor: getStatusColor(props.status),
          }}
        >
          <span className={classes.statusText}>{props.status}</span>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
//className={`${styles['form-control']} ${!isValid && styles.invalid}`}
//color: ${(props) => (props.invalid ? 'red' : 'black')};
