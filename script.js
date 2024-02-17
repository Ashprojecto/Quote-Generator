let btn = document.querySelector("#btn");
let btn1 = document.querySelector("#btn1");
let line = document.querySelector("#line");

let URL = "https://api.quotable.io/random";

const getfacts = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  line.innerHTML = `<i>${data.content}</i>`;
};

btn.addEventListener("click", getfacts);
btn1.addEventListener("click", () => {
  line.innerText = "Click for your quote";
  console.log("Reset success");
});
