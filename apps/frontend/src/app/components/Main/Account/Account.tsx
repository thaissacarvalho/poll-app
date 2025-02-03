import React, { useState } from 'react';
import Register from './Register/Register';
import Login from './Login/Login';
import ButtonTab from './ButtonTab/ButtonTab';

export default function Account() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 sm:p-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <div className="flex justify-around border-b">
          <ButtonTab onClick={() => setActiveTab('login')} activeTab={activeTab} option={'login'} name={'Login'}/>
          <ButtonTab onClick={() => setActiveTab('register')} activeTab={activeTab} option={'register'} name={'Cadastro'}/>
        </div>
        {activeTab === 'login' && (
          <Login/>
        )}
        {activeTab === 'register' && (
          <Register/>
        )}
      </div>
    </section>
  );
}
