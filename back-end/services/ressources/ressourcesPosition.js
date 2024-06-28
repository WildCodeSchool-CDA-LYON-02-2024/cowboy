// legende
// 1 = gold
// 2 = metal
// 3 = stone
// 4 = wood

// Ce tableau definis le nombre de ressources en fonction de son type sur chaque slot de la map
// Si plus de 10 slots, rajouter des objets aux tableaux
const ressourcesPosition = [
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 1, 1: 0, 2: 0, 3: 0, 4: 10 },
  { slot: 2, 1: 0, 2: 0, 3: 30, 4: 0 },
  { slot: 3, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 4, 1: 10, 2: 10, 3: 10, 4: 10 },
  { slot: 5, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 6, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 7, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 8, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 9, 1: 0, 2: 0, 3: 0, 4: 0 },
  { slot: 10, 1: 0, 2: 0, 3: 0, 4: 0 },
];

export default ressourcesPosition;
