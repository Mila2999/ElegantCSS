import Container from './components/Container';
import classes from './App.module.css';
function App() {
  return (
    <>
      <div className={classes.body}>
        <h1>All Users (7)</h1>
        <Container />
      </div>
    </>
  );
}

export default App;
