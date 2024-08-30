import React from 'react';
import './assets/css/bootstrap-datetimepicker.min.css';
import './assets/css/bootstrap.min.css'; 
import './assets/css/feedback67d9.css';
import './assets/css/responsive67d9.css';
import './assets/css/style_new67d9.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
