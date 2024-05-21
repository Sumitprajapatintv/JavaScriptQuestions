function converF() {
  const inputData = document.getElementById("fname");
  const C = inputData.value * 9 / 5 + 32;
  console.log(C);
  const para = document.createElement("p");
  para.innerText = C;
  // document.body.appendChild(para);
}