const createRow = (nilai) => `
    <tr>
      <td>${nilai.date}</td>
      <td>${nilai.judul}</td>
      <td>${nilai.total}</td>
      <td>${nilai.presentase}%</td>
      <td>${nilai.status}</td>
    </tr>
`;

export default createRow;
