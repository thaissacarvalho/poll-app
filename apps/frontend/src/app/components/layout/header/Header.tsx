import { useState } from 'react';
import ButtonSection from '../../ui/ButtonSection';

interface HeaderProps {
  setActiveSection: (section: string) => void; 
  activeSection: string;
}


export default function Header({ setActiveSection, activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black h-16 flex items-center justify-between p-4 lg:h-[80px]">
      <a href="/" className="text-3xl text-white">Poll</a>

      <nav className="relative">
        <button 
          className="text-white md:hidden" 
          onClick={handleMenuToggle}
        >
          Home ↓
        </button>
        <ul className={`absolute bg-black text-white space-y-2 mt-2 p-4 rounded shadow-lg md:flex md:space-x-4 md:static md:space-y-0 md:p-0 md:mt-0 ${menuOpen ? 'block' : 'hidden'}`}>
         <ButtonSection onClick={() => { setActiveSection(activeSection === 'begin' ? '' : 'begin'); setMenuOpen(false); }} name={'Inicio'}/>
         <ButtonSection onClick={() => { setActiveSection(activeSection === 'polls' ? '' : 'polls'); setMenuOpen(false); }} name={'Enquetes'}/>
         <ButtonSection onClick={() => { setActiveSection(activeSection === 'login' ? '' : 'login'); setMenuOpen(false); }} name={'Login'}/>
        </ul>
      </nav>

      <button className="bg-white text-black px-4 py-2 rounded md:px-6 md:py-2.5 hover:bg-blue-400 hover:text-white focus:bg-blue-700 focus:"
      onClick={() => { setActiveSection(activeSection === 'createPoll' ? '' : 'createPoll')}}>
        Criar Enquete
      </button>
    </header>
  );
}
