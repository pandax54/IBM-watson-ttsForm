import React from 'react';
import GlobalStyle from './styles/global';
import Cover from './componentes/cover';



const App: React.FC = () => {

  return (
    <div className="App">
      <Cover />
      <GlobalStyle />
    </div>
  );
}

export default App;
