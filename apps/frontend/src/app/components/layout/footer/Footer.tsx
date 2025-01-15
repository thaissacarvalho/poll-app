export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; <span>{new Date().getFullYear()}</span>
          <a href="https://www.bythaissa.com" className="hover:underline text-purple-400 ml-1">
            Thaissa Carvalho
          </a>. Todos os direitos reservados.
        </p>
        <nav className="mt-6">
          <ul className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0 text-sm">
            <li>
              <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            </li>
            <li>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </li>
            <li>
              <a href="#privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
