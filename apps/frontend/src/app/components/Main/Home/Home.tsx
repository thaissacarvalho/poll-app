export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 md:p-12 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        Bem Vindo ao Poll
      </h1>
      <h5 className="text-lg sm:text-xl text-gray-600 mb-6">
        O Poll é um site de enquete onde você e qualquer outra pessoa pode criar uma enquete para outros usuários votarem.
      </h5>
      <p className="text-base sm:text-lg text-gray-500 mb-8">
        Clique no botão <span className="font-semibold">"Criar Enquete"</span> caso tenha conta, caso não tenha, <a href="#" className="text-blue-500 underline">clique aqui</a>.
      </p>
    </section>
  );
}
