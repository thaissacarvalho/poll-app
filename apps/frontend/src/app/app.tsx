import { useState } from 'react';
import Header from './components/layout/header/Header';
import Main from './components/Main/Main';
import Footer from './components/layout/footer/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Main activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Footer/> 
    </>
  );
}

export default App;
