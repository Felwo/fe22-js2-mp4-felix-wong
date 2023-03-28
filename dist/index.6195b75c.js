const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let textfield = "";
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        // const value = button.getAttribute("value") as string;
        let value = button.value;
        console.log(value);
        console.log("text:", textfield);
        switch(value){
            case "C":
                // Clear the display
                textfield = "";
                display.innerText = "";
                break;
            case "del":
                if (textfield.length > 0) {
                    textfield = textfield.slice(0, -1);
                    display.innerText = textfield;
                }
            case "=":
                try {
                    const result = eval(textfield);
                    textfield = result;
                    display.innerText = result;
                } catch (error) {
                    textfield = "Error";
                    display.innerText = textfield;
                }
                break;
            default:
                textfield += value;
                display.innerText = textfield;
                break;
        }
    });
});
const image = document.createElement("img");
image.src = ".src/images/BongoCat.png";
document.body.appendChild(image);

//# sourceMappingURL=index.6195b75c.js.map
