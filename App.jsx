
import React from 'react';
import inscriptionform from './inscriptionform';
import listeinscription from './listeinscription';
const App = () => {
  return (
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/inscriptionform">Inscription Form</Link>
            </li>
            <li>
              <Link to="/listeinscription">Liste des Inscriptions</Link>
            </li>
          </ul>
        </nav>
         </div>
  );
};

export default App;

