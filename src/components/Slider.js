//React Component Taking in 3 Props.
const Slider = ({colourName, rgbValue, onSliderMove}) => //Destructuring 
{ 

    return (
        <div className="slider">
            <label htmlFor={colourName}> 
                {colourName}
            </label>
            <input 
                type="range"
                id={colourName}
                onInput={handleInput}
            />
             </div>
    )
}

export default Slider;
//Label Important for Accesibility, Labels an Input.
//Label Matches the For with the ID so needs to be the same.