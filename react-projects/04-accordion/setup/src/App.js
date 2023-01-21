import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className='main'>
      <section className='container'>
        <h3>questions and answers about login</h3>
        <ul>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
