
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {ORIGINALS,ACTIONS,ROMANCE_MOVIES,COMEDY,HORROR_MOVIES,DOCUMENTARIES} from './urls';
function App() {
  return (
    <div>
     <NavBar/>
     <Banner/>
     <RowPost url={ORIGINALS} isSmall={false} title='Netflix Originals'/>
     <RowPost url={ACTIONS} isSmall title='Action'/>
     <RowPost url={ROMANCE_MOVIES} isSmall title='Romance'/>
     <RowPost url={COMEDY} isSmall title='Comedy'/>
     <RowPost url={HORROR_MOVIES} isSmall title='Horror'/>
     <RowPost url={DOCUMENTARIES} isSmall title='Documentaries'/>


    </div>
  );
}

export default App;
