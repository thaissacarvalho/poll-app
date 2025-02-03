export default function Login() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Login
      </h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email ou Username</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Digite seu email ou username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Digite sua senha"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Entrar
        </button>
      </form>
    </div>
  );
}
