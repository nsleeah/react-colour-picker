import { useState } from "react"; //More Efficient Than React

//Initialising 4 Bits of State
const ColourPickerContainer = () => {
    const [red, setRed] = useState(50); //50% Position on Slider.
    const [green, setGreen] = useState(50);
    const [blue, setBlue] = useState(50);
    const [rgb, setRgb] = useState("rgb(128, 128, 128");

}

export default ColourPickerContainer;

//Questions?
//What are the States?