//No State But Prop
//Create React Component
const RGBDisplay = ({rgb}) => { // Destructuring RGBValue
    return(
        <h2 style={{backgroundColor: rgb}}>{rgb}</h2>
    )

}          

export default RGBDisplay;