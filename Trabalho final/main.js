import { fetchData } from "./fetchData.js";
import { renderTable } from "./renderTable.js";
import { generateChart } from "./generateChart.js";

$(document).ready(function () {
  $("#searchButton").click(async function () {
    const studentName = $("#studentName").val().trim();
    $("#error-message").text("");

    if (!studentName) {
      $("#error-message").text("Por favor, insira o nome do estudante.");
      return;
    }

    try {
      const data = await fetchData(`?nome=${studentName}`);
      if (data.length === 0) {
        $("#error-message").text("Nenhum dado encontrado para este estudante.");
        return;
      }

      renderTable(data);
      generateChart(data);
    } catch (error) {
      $("#error-message").text(
        "Erro ao buscar os dados. Tente novamente mais tarde."
      );
    }
  });
});
