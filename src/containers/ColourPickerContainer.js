import { useState, useEffect } from "react"; //More Efficient Than React
import Slider from "../components/Slider";
import RGBDisplay from "../components/RGBDisplay";


//Initialising 4 Bits of State
const ColourPickerContainer = () => {
    const [red, setRed] = useState(50); //50% Position on Slider.
    const [green, setGreen] = useState(50);
    const [blue, setBlue] = useState(50);
    const [rgb, setRgb] = useState("rgb(128, 128, 128)"); //RGB Between 0-255
    
     //2 Arguments
    //Convert percentages to values between 255.
    useEffect(() => {
        const red255 = Math.ceil(red * 2.55); //Value * 255 Then Math.Ceil To Round Up.
        const green255 = Math.ceil(green * 2.55);
        const blue255 = Math.ceil(blue * 2.55);
        setRgb(`rgb(${red255}, ${green255}, ${blue255})
        `)
    });
    
    return (
        <>
            <Slider
                colourName={"Red"}
                rgbValue={red}
                onSliderMove={setRed}
            />

            <Slider
                colourName={"Green"}
                rgbValue={green}
                onSliderMove={setGreen}
            />

            <Slider
                colourName={"Blue"}
                rgbValue={blue}
                onSliderMove={setBlue}
            />

            <RGBDisplay rgb={rgb} />
        </>
    )

}

export default ColourPickerContainer;

//Questions?
//What are the States?