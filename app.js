const massa = document.querySelector("#inp1");
const Boy = document.querySelector("#inp2");
const yosh = document.querySelector("#inp3");
const jismoniy = document.querySelector("#inp4");
const form = document.querySelector("form");
const result = document.querySelector("#result");
const result2 = document.querySelector("#result2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const massaValue = Number(massa.value);
  const BoyValue = Number(Boy.value);
  const yoshValue = Number(yosh.value);
  const jismoniyValue = Number(jismoniy.value);

  if (massa && BoyValue && yoshValue && jismoniyValue) {
    const calculation = 10 * massaValue + 6.25 * BoyValue - 5 * yoshValue + 5;
    result.innerHTML = `Boshqarilmaydigan kalloriya: ${calculation}`;
    result2.innerHTML = `${jismoniyValue} bilan kalloriya ${calculation * jismoniyValue}`;
    result.style.color = "rgb(0,123,255)";
    result2.style.color = "rgb(0,123,255)";
  } else {
    result.innerHTML = "to'lliq kiriting !!!";
    result.style.color = "red";
    result2.innerHTML = "to'lliq kiriting !!!";
    result2.style.color = "red";
  }

  massa.value = "";
  Boy.value = "";
  yosh.value = "";
  jismoniy.value = "";
});
