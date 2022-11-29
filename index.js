let players = [
  { name: "benit", points: 0 },
  { name: "tincho", points: 0 },
  { name: "negro", points: 0 },
  { name: "gringo", points: 0 },
  { name: "player", points: 0 },
];

const calcularPuntos = () => {
  fetch("https://worldcupjson.net/matches")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((d) => {
        let resultado_partido = "";
        if (d.status === "completed") {
          // Seteo L,V o E
          if (d.winner_code === d.home_team_country) resultado_partido = "l";
          if (d.winner_code === d.away_team_country) resultado_partido = "v";
          if (d.winner_code === "Draw") resultado_partido = "e";
          // Comparo resultado con la apuesta de cada jugador
          if (
            resultado_partido === benit[d.id - 1].resultado ||
            resultado_partido === benit[d.id - 1].resultado2
          )
            players.forEach((p) => {
              if (p.name === "benit") p.points++;
            });
          if (
            resultado_partido === tincho[d.id - 1].resultado ||
            resultado_partido === tincho[d.id - 1].resultado2
          )
            players.forEach((p) => {
              if (p.name === "tincho") p.points++;
            });
          if (
            resultado_partido === negro[d.id - 1].resultado ||
            resultado_partido === negro[d.id - 1].resultado2
          )
            players.forEach((p) => {
              if (p.name === "negro") p.points++;
            });
          if (
            resultado_partido === gringo[d.id - 1].resultado ||
            resultado_partido === gringo[d.id - 1].resultado2
          )
            players.forEach((p) => {
              if (p.name === "gringo") p.points++;
            });
          if (
            resultado_partido === player[d.id - 1].resultado ||
            resultado_partido === player[d.id - 1].resultado2
          )
            players.forEach((p) => {
              if (p.name === "player") p.points++;
            });
        }
      });
      //Dibujo la tabla
      let playersPoints = players.sort(function (a, b) {
        return b.points - a.points;
      });
      let tbody = $("#body");
      let position = 1;
      playersPoints.forEach((f) => {
        let tr = $("<tr/>").appendTo(tbody);
        let td = $('<th scope="row">' + position + "</th>").appendTo(tr);
        tr.append("<td>" + f.name + "</td>");
        tr.append("<td>" + f.points + "</td>");
        position++;
      });
    });
};

const mostrarInfo = () => {
  fetch("https://worldcupjson.net/matches")
    .then((res) => res.json())
    .then((data) => {
      let partidos = [];
      data.forEach((d) => {
        if (d.status === "completed") {
          partidos.push(d);
        }
        if (d.status === "in_progress") {
          $(
            "<div class='card' style='width: 18rem;'><div class='card-body'><h5 class='card-title text-success'>Partido en curso</h5><p class='card-text'>" +
              d.home_team.country +
              " - " +
              d.home_team.goals +
              "<br>" +
              d.away_team.country +
              " - " +
              d.away_team.goals +
              "</p></div></div>"
          ).appendTo("#cards");
        }
      });
      let ultimo_partido = Math.max(...partidos.map((o) => o.id));
      partidos.forEach((p) => {
        if (p.id === ultimo_partido) {
          $(
            "<div class='card' style='width: 18rem;'><div class='card-body'><h5 class='card-title text-warning'>Último partido</h5><p class='card-text'>" +
              p.home_team.country +
              " - " +
              p.home_team.goals +
              "<br>" +
              p.away_team.country +
              " - " +
              p.away_team.goals +
              "</p></div></div>"
          ).appendTo("#cards");
        }
      });
    });
};

$(document).ready(function () {
  calcularPuntos();
  mostrarInfo();
});

let benit = [
  { id: 1, resultado: "e", resultado2: "" },
  { id: 2, resultado: "l", resultado2: "" },
  { id: 3, resultado: "v", resultado2: "" },
  { id: 4, resultado: "e", resultado2: "" },
  { id: 5, resultado: "l", resultado2: "" },
  { id: 6, resultado: "l", resultado2: "" },
  { id: 7, resultado: "e", resultado2: "" },
  { id: 8, resultado: "l", resultado2: "" },
  { id: 9, resultado: "v", resultado2: "" },
  { id: 10, resultado: "l", resultado2: "" },
  { id: 11, resultado: "l", resultado2: "" },
  { id: 12, resultado: "l", resultado2: "" },
  { id: 13, resultado: "e", resultado2: "" },
  { id: 14, resultado: "l", resultado2: "" },
  { id: 15, resultado: "l", resultado2: "" },
  { id: 16, resultado: "l", resultado2: "" },
  { id: 17, resultado: "l", resultado2: "" },
  { id: 18, resultado: "v", resultado2: "" },
  { id: 19, resultado: "l", resultado2: "" },
  { id: 20, resultado: "e", resultado2: "" },
  { id: 21, resultado: "e", resultado2: "" },
  { id: 22, resultado: "l", resultado2: "" },
  { id: 23, resultado: "l", resultado2: "e" },
  { id: 24, resultado: "l", resultado2: "" },
  { id: 25, resultado: "l", resultado2: "" },
  { id: 26, resultado: "l", resultado2: "" },
  { id: 27, resultado: "l", resultado2: "" },
  { id: 28, resultado: "e", resultado2: "v" },
  { id: 29, resultado: "l", resultado2: "" },
  { id: 30, resultado: "e", resultado2: "" },
  { id: 31, resultado: "l", resultado2: "" },
  { id: 32, resultado: "v", resultado2: "" },
  { id: 33, resultado: "l", resultado2: "" },
  { id: 34, resultado: "e", resultado2: "" },
  { id: 35, resultado: "v", resultado2: "" },
  { id: 36, resultado: "v", resultado2: "" },
  { id: 37, resultado: "v", resultado2: "" },
  { id: 38, resultado: "v", resultado2: "" },
  { id: 39, resultado: "e", resultado2: "v" },
  { id: 40, resultado: "v", resultado2: "" },
  { id: 41, resultado: "e", resultado2: "" },
  { id: 42, resultado: "e", resultado2: "" },
  { id: 43, resultado: "e", resultado2: "" },
  { id: 44, resultado: "v", resultado2: "" },
  { id: 45, resultado: "e", resultado2: "" },
  { id: 46, resultado: "v", resultado2: "" },
  { id: 47, resultado: "v", resultado2: "" },
  { id: 48, resultado: "v", resultado2: "" },
];

let tincho = [
  { id: 1, resultado: "v", resultado2: "" },
  { id: 2, resultado: "l", resultado2: "" },
  { id: 3, resultado: "v", resultado2: "" },
  { id: 4, resultado: "e", resultado2: "" },
  { id: 5, resultado: "l", resultado2: "" },
  { id: 6, resultado: "l", resultado2: "" },
  { id: 7, resultado: "v", resultado2: "" },
  { id: 8, resultado: "l", resultado2: "" },
  { id: 9, resultado: "v", resultado2: "" },
  { id: 10, resultado: "l", resultado2: "" },
  { id: 11, resultado: "l", resultado2: "" },
  { id: 12, resultado: "l", resultado2: "" },
  { id: 13, resultado: "v", resultado2: "" },
  { id: 14, resultado: "l", resultado2: "" },
  { id: 15, resultado: "l", resultado2: "" },
  { id: 16, resultado: "l", resultado2: "" },
  { id: 17, resultado: "l", resultado2: "" },
  { id: 18, resultado: "v", resultado2: "" },
  { id: 19, resultado: "e", resultado2: "" },
  { id: 20, resultado: "l", resultado2: "" },
  { id: 21, resultado: "e", resultado2: "" },
  { id: 22, resultado: "l", resultado2: "" },
  { id: 23, resultado: "l", resultado2: "e" },
  { id: 24, resultado: "l", resultado2: "" },
  { id: 25, resultado: "e", resultado2: "" },
  { id: 26, resultado: "l", resultado2: "" },
  { id: 27, resultado: "l", resultado2: "" },
  { id: 28, resultado: "e", resultado2: "" },
  { id: 29, resultado: "e", resultado2: "" },
  { id: 30, resultado: "v", resultado2: "" },
  { id: 31, resultado: "l", resultado2: "" },
  { id: 32, resultado: "e", resultado2: "" },
  { id: 33, resultado: "l", resultado2: "" },
  { id: 34, resultado: "e", resultado2: "" },
  { id: 35, resultado: "e", resultado2: "v" },
  { id: 36, resultado: "v", resultado2: "" },
  { id: 37, resultado: "v", resultado2: "" },
  { id: 38, resultado: "v", resultado2: "" },
  { id: 39, resultado: "v", resultado2: "" },
  { id: 40, resultado: "v", resultado2: "" },
  { id: 41, resultado: "e", resultado2: "" },
  { id: 42, resultado: "l", resultado2: "e" },
  { id: 43, resultado: "v", resultado2: "" },
  { id: 44, resultado: "v", resultado2: "" },
  { id: 45, resultado: "v", resultado2: "" },
  { id: 46, resultado: "v", resultado2: "" },
  { id: 47, resultado: "l", resultado2: "" },
  { id: 48, resultado: "v", resultado2: "" },
];

let negro = [
  { id: 1, resultado: "e", resultado2: "" },
  { id: 2, resultado: "l", resultado2: "e" },
  { id: 3, resultado: "v", resultado2: "" },
  { id: 4, resultado: "v", resultado2: "" },
  { id: 5, resultado: "l", resultado2: "" },
  { id: 6, resultado: "l", resultado2: "" },
  { id: 7, resultado: "v", resultado2: "" },
  { id: 8, resultado: "l", resultado2: "" },
  { id: 9, resultado: "v", resultado2: "" },
  { id: 10, resultado: "l", resultado2: "" },
  { id: 11, resultado: "l", resultado2: "" },
  { id: 12, resultado: "l", resultado2: "" },
  { id: 13, resultado: "l", resultado2: "" },
  { id: 14, resultado: "e", resultado2: "" },
  { id: 15, resultado: "l", resultado2: "e" },
  { id: 16, resultado: "l", resultado2: "" },
  { id: 17, resultado: "l", resultado2: "" },
  { id: 18, resultado: "v", resultado2: "" },
  { id: 19, resultado: "v", resultado2: "" },
  { id: 20, resultado: "l", resultado2: "" },
  { id: 21, resultado: "e", resultado2: "" },
  { id: 22, resultado: "l", resultado2: "" },
  { id: 23, resultado: "e", resultado2: "" },
  { id: 24, resultado: "l", resultado2: "" },
  { id: 25, resultado: "l", resultado2: "" },
  { id: 26, resultado: "l", resultado2: "e" },
  { id: 27, resultado: "l", resultado2: "" },
  { id: 28, resultado: "e", resultado2: "" },
  { id: 29, resultado: "e", resultado2: "" },
  { id: 30, resultado: "l", resultado2: "" },
  { id: 31, resultado: "l", resultado2: "" },
  { id: 32, resultado: "l", resultado2: "" },
  { id: 33, resultado: "l", resultado2: "" },
  { id: 34, resultado: "v", resultado2: "" },
  { id: 35, resultado: "e", resultado2: "" },
  { id: 36, resultado: "v", resultado2: "" },
  { id: 37, resultado: "v", resultado2: "" },
  { id: 38, resultado: "v", resultado2: "" },
  { id: 39, resultado: "v", resultado2: "" },
  { id: 40, resultado: "e", resultado2: "" },
  { id: 41, resultado: "v", resultado2: "" },
  { id: 42, resultado: "e", resultado2: "" },
  { id: 43, resultado: "e", resultado2: "" },
  { id: 44, resultado: "v", resultado2: "" },
  { id: 45, resultado: "v", resultado2: "" },
  { id: 46, resultado: "v", resultado2: "" },
  { id: 47, resultado: "l", resultado2: "" },
  { id: 48, resultado: "v", resultado2: "" },
];

let gringo = [
  { id: 1, resultado: "e", resultado2: "" },
  { id: 2, resultado: "l", resultado2: "" },
  { id: 3, resultado: "v", resultado2: "" },
  { id: 4, resultado: "e", resultado2: "" },
  { id: 5, resultado: "l", resultado2: "" },
  { id: 6, resultado: "e", resultado2: "" },
  { id: 7, resultado: "l", resultado2: "" },
  { id: 8, resultado: "l", resultado2: "" },
  { id: 9, resultado: "e", resultado2: "" },
  { id: 10, resultado: "l", resultado2: "" },
  { id: 11, resultado: "e", resultado2: "" },
  { id: 12, resultado: "l", resultado2: "" },
  { id: 13, resultado: "v", resultado2: "" },
  { id: 14, resultado: "e", resultado2: "" },
  { id: 15, resultado: "e", resultado2: "" },
  { id: 16, resultado: "l", resultado2: "" },
  { id: 17, resultado: "e", resultado2: "" },
  { id: 18, resultado: "e", resultado2: "" },
  { id: 19, resultado: "l", resultado2: "" },
  { id: 20, resultado: "e", resultado2: "" },
  { id: 21, resultado: "e", resultado2: "" },
  { id: 22, resultado: "l", resultado2: "" },
  { id: 23, resultado: "e", resultado2: "" },
  { id: 24, resultado: "l", resultado2: "" },
  { id: 25, resultado: "e", resultado2: "" },
  { id: 26, resultado: "l", resultado2: "" },
  { id: 27, resultado: "e", resultado2: "" },
  { id: 28, resultado: "e", resultado2: "" },
  { id: 29, resultado: "e", resultado2: "" },
  { id: 30, resultado: "v", resultado2: "" },
  { id: 31, resultado: "l", resultado2: "" },
  { id: 32, resultado: "v", resultado2: "" },
  { id: 33, resultado: "l", resultado2: "e" },
  { id: 34, resultado: "l", resultado2: "" },
  { id: 35, resultado: "e", resultado2: "" },
  { id: 36, resultado: "l", resultado2: "" },
  { id: 37, resultado: "v", resultado2: "" },
  { id: 38, resultado: "e", resultado2: "" },
  { id: 39, resultado: "e", resultado2: "v" },
  { id: 40, resultado: "v", resultado2: "" },
  { id: 41, resultado: "e", resultado2: "" },
  { id: 42, resultado: "l", resultado2: "" },
  { id: 43, resultado: "e", resultado2: "v" },
  { id: 44, resultado: "v", resultado2: "" },
  { id: 45, resultado: "e", resultado2: "" },
  { id: 46, resultado: "v", resultado2: "" },
  { id: 47, resultado: "e", resultado2: "" },
  { id: 48, resultado: "v", resultado2: "" },
];

let player = [
  { id: 1, resultado: "v", resultado2: "" },
  { id: 2, resultado: "l", resultado2: "" },
  { id: 3, resultado: "v", resultado2: "" },
  { id: 4, resultado: "e", resultado2: "v" },
  { id: 5, resultado: "l", resultado2: "" },
  { id: 6, resultado: "l", resultado2: "" },
  { id: 7, resultado: "v", resultado2: "" },
  { id: 8, resultado: "l", resultado2: "" },
  { id: 9, resultado: "v", resultado2: "" },
  { id: 10, resultado: "l", resultado2: "" },
  { id: 11, resultado: "l", resultado2: "" },
  { id: 12, resultado: "l", resultado2: "" },
  { id: 13, resultado: "e", resultado2: "" },
  { id: 14, resultado: "l", resultado2: "" },
  { id: 15, resultado: "l", resultado2: "" },
  { id: 16, resultado: "l", resultado2: "" },
  { id: 17, resultado: "l", resultado2: "" },
  { id: 18, resultado: "v", resultado2: "" },
  { id: 19, resultado: "l", resultado2: "e" },
  { id: 20, resultado: "l", resultado2: "" },
  { id: 21, resultado: "e", resultado2: "" },
  { id: 22, resultado: "l", resultado2: "" },
  { id: 23, resultado: "e", resultado2: "" },
  { id: 24, resultado: "l", resultado2: "" },
  { id: 25, resultado: "l", resultado2: "" },
  { id: 26, resultado: "l", resultado2: "" },
  { id: 27, resultado: "l", resultado2: "" },
  { id: 28, resultado: "e", resultado2: "" },
  { id: 29, resultado: "e", resultado2: "" },
  { id: 30, resultado: "v", resultado2: "" },
  { id: 31, resultado: "l", resultado2: "" },
  { id: 32, resultado: "l", resultado2: "" },
  { id: 33, resultado: "l", resultado2: "" },
  { id: 34, resultado: "l", resultado2: "" },
  { id: 35, resultado: "e", resultado2: "" },
  { id: 36, resultado: "e", resultado2: "" },
  { id: 37, resultado: "v", resultado2: "" },
  { id: 38, resultado: "v", resultado2: "" },
  { id: 39, resultado: "e", resultado2: "" },
  { id: 40, resultado: "v", resultado2: "" },
  { id: 41, resultado: "e", resultado2: "" },
  { id: 42, resultado: "e", resultado2: "v" },
  { id: 43, resultado: "v", resultado2: "" },
  { id: 44, resultado: "v", resultado2: "" },
  { id: 45, resultado: "v", resultado2: "" },
  { id: 46, resultado: "v", resultado2: "" },
  { id: 47, resultado: "l", resultado2: "" },
  { id: 48, resultado: "v", resultado2: "" },
];
