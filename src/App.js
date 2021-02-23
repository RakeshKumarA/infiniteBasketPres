import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
