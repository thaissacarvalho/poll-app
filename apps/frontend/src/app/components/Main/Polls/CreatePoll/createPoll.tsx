import { Option } from '@poll-app/libs';
import { apiClient } from '../../../../config/axios.config';
import { useState } from 'react';
import ButtonCreatePoll from '../../../ui/Button/ButtonCreatePoll';
import ButtonOption from '../../../ui/Button/ButtonOption';
import InputOption from '../../../ui/Input/InputOption';

export default function CreatePoll() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<Partial<Option>[]>([
    { text: '', votes: 0 },
  ]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index].text = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    if (options.length < 3) {
      setOptions([...options, { text: '', votes: 0 }]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiClient.post('/create-polls', {
        question,
        options,
      });
      setSuccess('Enquete criada com sucesso!');
      setQuestion('');
      setOptions([{ text: '', votes: 0 }]);
    } catch (err) {
      if (err instanceof Error) {
        setError('Erro ao criar enquetes.');
      }
    }
  };

  return (
    <section className="p-6 m-4 max-w-lg mx-auto bg-white shadow-xl rounded-2xl border border-gray-200">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Criar Enquete
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Digite a pergunta da enquete"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {options.map((option, index) => (
          <InputOption key={index} placeholder={`Opção ${index + 1}`} value={option.text || ''} onChange={(e) => handleOptionChange(index, e.target.value)}/>
        ))}

        {options.length < 3 && (
         <ButtonOption onClick={addOption}/>
        )}

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}
        <ButtonCreatePoll />
      </form>
    </section>
  );
}
