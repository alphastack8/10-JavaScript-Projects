const res = document.getElementById("result");

document.getElementById("loveForm").onsubmit = (e) => {
  e.preventDefault();
  
  const n1 = document.getElementById("name1").value.trim();
  const n2 = document.getElementById("name2").value.trim();

  if (!n1 || !n2) return alert("Names likhen!");

  // 30 to 100 in one short line
  const score = Math.floor(Math.random() * 71) + 30;
  res.textContent = `${n1} & ${n2}: ${score}%`;
};

function resetCalculator() {
  document.getElementById("loveForm").reset(); // Sirf aik line se pura form khali
  res.textContent = "0%";
}