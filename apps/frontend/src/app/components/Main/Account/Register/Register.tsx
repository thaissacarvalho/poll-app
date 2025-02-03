import React from 'react';

export default function Register() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Cadastro
      </h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Nome</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Digite seu username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Digite seu email"
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
          Registrar
        </button>
      </form>
    </div>
  );
}
