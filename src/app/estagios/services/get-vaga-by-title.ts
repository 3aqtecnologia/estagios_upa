export async function getVagaByTitle(titulo: string) {
  const response = await fetch(`https://estagio.universidadepatativa.com.br/api/v1/vagas?busca=${titulo}`);
  const vagad = await response.json();

  return vagad?.data;
}
