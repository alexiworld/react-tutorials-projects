import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main className='main'>
      <section className='container'>
        <h3>Questions And Answers About Login</h3>
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
