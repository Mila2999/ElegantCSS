import Card from './Card';
import UserCard from './UserCard';
import classes from './Container.module.css';

const USERS = [
  {
    id: 'HD',
    name: 'Hagit Dror(You)',
    email: 'hagit@jfrog.com',
    title: 'Primary Admin',
    status: { active: 'Active', expired: 'Expired', error: 'Error' },
  },
  {
    id: 'DG',
    name: 'Dror Gilad',
    email: 'drorgilad@jfrog.com',
    title: ' Admin',
    status: { active: 'Active', expired: 'Expired', error: 'Error' },
  },
  {
    id: 'DG',
    name: 'Dror Gilad',
    email: 'drorgilad@jfrog.com',
    title: ' Admin',
    status: { active: 'Active', expired: 'Expired', error: 'Error' },
  },
  {
    id: 'DG',
    name: 'Dror Gilad',
    email: 'drorgilad@jfrog.com',
    title: ' Admin',
    status: { active: 'Active', expired: 'Expired', error: 'Error' },
  },
  {
    id: 'DG',
    name: 'Dror Gilad',
    email: 'drorgilad@jfrog.com',
    title: ' Admin',
    status: { active: 'Active', expired: 'Expired', error: 'Error' },
  },
];
function Container() {
  return (
    <div className={classes.container}>
      <Card className={classes.item} />
      {USERS.map((user) => (
        <UserCard id={user.id} name={user.name} email={user.email} title={user.title} />
      ))}
    </div>
  );
}
export default Container;
