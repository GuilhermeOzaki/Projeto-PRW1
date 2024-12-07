export function renderTable(data) {
  const tbody = $("#resultsTable tbody");
  tbody.empty();

  data.forEach((item) => {
    tbody.append(`
      <tr>
        <td>${item.disciplina}</td>
        <td>${item.nota}</td>
      </tr>
    `);
  });
}
