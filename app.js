const div = document.querySelector(".div");
const text = document.querySelector("p");

const colorNumber = () => {
    a = Math.floor(Math.random() * 255);
    return a;
  };


div.onclick = () => {
    r = colorNumber();
    g = colorNumber();
    b = colorNumber();

    const dec2Hex = (r) => {
      return Math.abs(r).toString(16);
    }
    
    div.style.background = `rgb(${r}, ${g}, ${b})`;
    text.innerText = `#${dec2Hex(r)}${dec2Hex(g)}${dec2Hex(b)}`;
}

