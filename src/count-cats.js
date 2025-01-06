function countCats(matrix) {
  const catChar = "^^";
  const catHash = { [catChar]: 0 };
  for (const row of matrix) {
    for (const cell of row) {
      if (!(cell in catHash)) continue;
      catHash[cell] += 1;
    }
  }
  return catHash[catChar];
}
