import classes from './UserCard.module.css';

const getStatusColor = (status) => {
  switch (status) {
    case 'Active':
      return '#11d111';
    case 'Error':
      return 'red';
    case 'Expired':
      return 'orange';
    default:
      return '';
  }
};
const getStatusBackgroundColor = (status) => {
  switch (status) {
    case 'Active':
      return ' #b3f9b3';
    case 'Error':
      return ' #ffcccb';
    case 'Expired':
      return '#FFDAB9';
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
            background: getStatusBackgroundColor(props.status),
            color: getStatusColor(props.status),
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
