export async function fetchData(endpoint) {
  try {
    const response = await fetch(
      `https://ifsp.ddns.net/webservices/boletim/${endpoint}`
    );
    if (!response.ok) throw new Error("Erro na resposta da API");
    return await response.json();
  } catch (error) {
    throw new Error("Erro na conexão com a API");
  }
}
