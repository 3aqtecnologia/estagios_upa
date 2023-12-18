export async function getVagas() {
  const response = await fetch(`https://estagio.universidadepatativa.com.br/api/disponivel/paginete/vagas`);
  const vagas = await response.json();

  return vagas?.dados || [];
}
