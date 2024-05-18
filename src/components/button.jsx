import { useContext } from "react"
import BaseContext from "../context/BaseContext"

export default function Button(){
    
    const clickMe = useContext(BaseContext);
    return(
        <button onClick={clickMe}>hi</button>
    )
}