
import React, { useState } from 'react';
import autocomplete from './autocomplete';

const inscriptionform = () => {
  const [ville, setVille] = useState('');
  const [option, setOption] = useState('');

  const villeValues = ['Casa', 'Rabat', 'Kenitra', 'Merrakech', 'Meknes'];
  const optionValues = ['Dev Digital', 'Dev Mobile', 'Infra Digitale'];

  return (
    <div>
      <autocomplete values={villeValues} />
      <autocomplete values={optionValues} />
      <button>Submit</button>
    </div>
  );
};

export default inscriptionform;

