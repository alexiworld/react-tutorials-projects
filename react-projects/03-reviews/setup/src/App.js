import React from 'react';
import Review from './Review';
// Importing icons:
// https://react-icons.github.io/react-icons/
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
