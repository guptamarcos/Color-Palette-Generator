const btn = document.querySelector("#btn");
const palettes = document.querySelectorAll(".palette");
const code = "ABCDEF0123456789";

// THIS LOOP IS USED FOR INITIALLY ASSIGEND COLORS TO THE PALETTES
for (let i = 0; i < palettes.length; i++) {
  palettes[i].textContent = generateCode();
  palettes[i].style.backgroundColor = palettes[i].textContent;
}

function generateCode() {
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * 16);
    colorCode += code[idx];
  }
  return colorCode;
}

btn.addEventListener("click", () => {
  for (let i = 0; i < palettes.length; i++) {
    palettes[i].textContent = generateCode();
    palettes[i].style.backgroundColor = palettes[i].textContent;
  }
});

for (let i = 0; i < palettes.length; i++) {
  palettes[i].addEventListener("click", () => {
    navigator.clipboard.writeText(palettes[i].textContent)
    .then(()=>{
       alert(`Color code ${palettes[i].textContent} copied to clipboard`);
    })
    .catch(()=>{
       alert("Could not copy");
    });
  });
}
