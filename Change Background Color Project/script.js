const buttonEl = document.getElementById("change-Bg-Btn");
const title = document.getElementById("title")
const bodyBackgroundColor = document.body.style.background;

//colors with color hexcode...
const rose = "#FF0080";
const peach = "#FFE5B4";
const beige = "#F5F5DC";
const icterine = "#FCF75E";
const vanilla = "#F3E5AB";
const malachite = "#0BDA51";
const mint = "#3EB489";
const persianGreen = "#00A693";
const robinEggBlue = "#00CCCC";
const turquise = "#40E0D0";
const processCyan = "#00B7EB";
const babyBlue = "#89CFF0";
const comboliaBlue = "#B9D9EB";
const tuftsBlue = "#3E8EDE";
const africanViolet = "#B284BE";
const wisteria = "#C9A0DC";
const salmonPink = "#FF91A4";

const colorArray = [rose, peach, beige, icterine, vanilla, malachite, mint, persianGreen, robinEggBlue, turquise, processCyan, babyBlue, comboliaBlue, tuftsBlue, africanViolet, wisteria, salmonPink];

const colorArrayLength = colorArray.length;
console.log(colorArrayLength)

buttonEl.addEventListener("click", function(){
    const chooseRandomIndex = Math.floor(Math.random() * colorArrayLength);
    const changeColor = colorArray[chooseRandomIndex];
    changeBodyBackgroundColor(changeColor)

})

function changeBodyBackgroundColor(color){
    document.body.style.background = color;
}