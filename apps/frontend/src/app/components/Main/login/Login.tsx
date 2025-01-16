import React, { useState } from 'react';

export default function Login() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 sm:p-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <div className="flex justify-around border-b">
          <button
            className={`px-4 py-2 w-1/2 text-center font-semibold ${
              activeTab === 'login'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 w-1/2 text-center font-semibold ${
              activeTab === 'register'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('register')}
          >
            Cadastro
          </button>
        </div>
        {activeTab === 'login' && (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h1>
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
        )}
        {activeTab === 'register' && (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Cadastro</h1>
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
        )}
      </div>
    </section>
  );
}
