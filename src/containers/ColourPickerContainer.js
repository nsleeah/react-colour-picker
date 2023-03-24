import { useState } from "react"; //More Efficient Than React
import Slider from "../components/Slider";
import RGBDisplay from "../components/RGBDisplay";


//Initialising 4 Bits of State
const ColourPickerContainer = () => {
    const [red, setRed] = useState(50); //50% Position on Slider.
    const [green, setGreen] = useState(50);
    const [blue, setBlue] = useState(50);
    const [rgb, setRgb] = useState("rgb(128, 128, 128");

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