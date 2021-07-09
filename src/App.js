import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Main from './components/Main';

function App() {
  return (
    <>
      {' '}
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  );
}

export default App;
