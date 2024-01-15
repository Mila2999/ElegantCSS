import Card from './Card';
import UserCard from './UserCard';
import classes from './Container.module.css';

const USERS = [
  {
    id: 'HD',
    name: 'Hagit Dror(You)',
    email: 'hagit@jfrog.com',
    title: 'Primary Admin',
    status: 'Active',
  },
  {
    id: 'DG',
    name: 'Dror Gilad',
    email: 'drorgilad@jfrog.com',
    title: ' Admin',
    status: 'Active',
  },
  {
    id: 'DG',
    name: 'Dror Gilad',
    email: 'drorgilad@jfrog.com',
    title: ' Admin',
    status: 'Error',
  },
  {
    id: 'DG',
    name: 'Dror Gilad',
    email: 'drorgilad@jfrog.com',
    title: ' Admin',
    status: 'Expired',
  },
  {
    id: 'DG',
    name: 'Dror Gilad',
    email: 'drorgilad@jfrog.com',
    title: ' Admin',
    status: 'Active',
  },
];
function Container() {
  return (
    <div className={classes.container}>
      <Card className={classes.card} />
      {USERS.map((user) => (
        <UserCard
          id={user.id}
          name={user.name}
          email={user.email}
          title={user.title}
          status={user.status}
        />
      ))}
    </div>
  );
}
export default Container;
