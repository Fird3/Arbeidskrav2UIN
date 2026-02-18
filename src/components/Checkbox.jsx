

// https://www.youtube.com/watch?v=WwBu3oykkBs

export default function Checkbox ({isChecked, checkHandler}){
     return (
        <input
        type="checkbox"
        checked={isChecked}
        onChange={checkHandler}>
        </input>
    )

}
   
// export default function Checkboxfunc(checkHandler){
//     // const checkboxRef = useRef(null)
//     const [isChecked, setIsCheck] = useState();
//     const onHandleChange = () => {
//         setIsCheck(!isChecked)
//     }

//     const updateCheckStatus = index => {
//         handlelisteVare(
//             liste.map((idk, currentIndex) =>
//             currentIndex === index
//         ? {...idk, checked: ! idk.checked}
//     :idk)
//         )
//     }
    
//     return(
//         <input type="checkbox" id="checkbox"  defaultChecked={isChecked} onChange={checkHandler} ></input>
//     )
// }