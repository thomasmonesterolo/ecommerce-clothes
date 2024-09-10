import React from 'react';
import Clothes from './components/clothes/Clothes';
import PersistentDrawerLeft from "./components/sideBar/SideBar"

function App() {
  return (
    <div>
      {PersistentDrawerLeft()}
      <Clothes/>
    </div>
    )
}

export default App;
