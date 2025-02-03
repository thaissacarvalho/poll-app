import CreatePoll from './Polls/CreatePoll/createPoll';
import Begin from './Home/Home';
import Login from './Account/Account';
import Polls from './Polls/RenderPoll/renderPolls';

export default function Main({ activeSection, setActiveSection }) {
  return (
    <main className="">
      {activeSection === 'begin' && <Begin />}
      {activeSection === 'polls' && <Polls />}
      {activeSection === 'login' && <Login />}
      {activeSection === 'createPoll' && <CreatePoll />}
      {!activeSection && (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
           <svg
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-800 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 15l-7-7-7 7"
            />
          </svg>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-20">
            ESCOLHA UMA OPÇÃO para começar a navegar no site
          </h1> 
        </section>
      )}
    </main>
  );
}
