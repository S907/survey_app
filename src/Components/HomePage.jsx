import React, { useState } from 'react';

import jsonData from '../data/data.json'
import Poll from './Poll';
import Survey from './Survey';

function HomePage() {
  
  return (
    <div>
      <h1>Welcome to our site!</h1>
      <p>Please take a moment to fill out our survey:</p>
      <Survey jsonData={jsonData.data} />
      <br />
      <p>And don't forget to participate in our current poll:</p>
      <Poll jsonData={jsonData.data} />
    </div>
  );
}
  

  

export default HomePage;
