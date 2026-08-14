import React from 'react';
import reviews from './data';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="app-shell">
      <div className="app-title-wrap">
        <h1>our testimonials</h1>
      </div>
      <div className="underline"></div>
      <div>
        <Testimonials reviews={reviews}  />
      </div>
    </div>
  );
}

export default App;
