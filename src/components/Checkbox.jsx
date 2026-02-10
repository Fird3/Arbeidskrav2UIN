import { useState } from "react"

// https://www.youtube.com/watch?v=WwBu3oykkBs

export default function Checkboxfunc(){
    // const checkboxRef = useRef(null)
    const [isChecked, setIsCheck] = useState(false);
    const onHandleChange = () => {
        setIsCheck(!isChecked)
    }
    return(
        <input type="checkbox" id="checkbox" value={isChecked} onChange={onHandleChange} ></input>
    )
}