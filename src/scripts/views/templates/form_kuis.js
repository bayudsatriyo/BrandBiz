const createSoal = (soal, index) => `
<p>${index+1}. ${soal.deskripsi}</p>
<label>
  <input type="radio" id="soal1" name="soal${index}" value=${soal.value.a}>
  a. ${soal.opsi.a}
</label>
<br>
<label>
  <input type="radio" id="soal1" name="soal${index}" value=${soal.value.b}>
  b. ${soal.opsi.b}
</label>
<br>
<label>
  <input type="radio" id="soal1" name="soal${index}" value=${soal.value.c}>
  c. ${soal.opsi.c}
</label>
`;

export default createSoal;
