import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <section className='container'>
        <ul>
          {data.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
