// bai 1
// let Click = document.getElementById("sesion1");
// let div = document.getElementById("sesion");
// Click.onclick = function () {
//     if(div.style.display !== "none") {
//         div.style.display = "none";
//        }else{
//         div.style.display = "block";
//        }
// }
   


// bai 2
// let click = document.getElementById("section");
// let div = document.getElementById("changeColor");
// click.onclick = function (){
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     // console.log(r, g, b);
//     let color =`rgb(${r}, ${g}, ${b})`;
//     div.style.backgroundColor = color
// };

// bai 3:
// let click = document.getElementById("Click");
// let div1 = document.getElementById("div1");
// let div2 = document.getElementById("div2");
// click.onclick = function(){
//     let contentTemp = "";
//     let colorTemp = "";
//     let style = getComputedStyle(div1);
//     let style2 = getComputedStyle(div2);
//     colorTemp = style.backgroundColor;
//     div1.style.backgroundColor = style2.backgroundColor;
//     div2.style.backgroundColor = colorTemp;

//     contentTemp = div1.innerHTML;
//     div1.innerHTML = div2.innerHTML;
//     div2.innerHTML = contentTemp;
// }

// bai 4
// let click = document.getElementById("click");
// let div = document.getElementById("changefont");
// div.style.fontSize = "14px"
// click.onclick = function (){
//     let fontSize = (div.style.fontSize.replace("px",""));
//     fontSize = fontSize + 1;
//     div.style.fontSize = fontSize + "px";
  
// };