import { useEffect, useState } from "react";
import { apiClient } from "../../../../config/axios.config";
import { Poll } from "@poll-app/libs";

export default function RenderPolls() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await apiClient.get("/find-polls");
        setPolls(response.data);
      } catch (err) {
        if(err instanceof Error) {
          setError("Erro ao buscar enquetes.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPolls();
  }, []);

  if (loading) return <p>Carregando enquetes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Todas as Enquetes</h1>
      {polls.length === 0 ? (
        <p>Nenhuma enquete encontrada.</p>
      ) : (
        <ul>
          {polls.map((poll) => (
            <li key={poll.id}>
              <h2>{poll.question}</h2>
              <p>Criada por: {poll.creatorUser}</p>
              <p>Expira em: {new Date(poll.expiredAt).toLocaleDateString()}</p>
              <ul>
                {poll.options.map((option, index) => (
                  <li key={index}>
                    {option.text} - {option.votes} votos
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}