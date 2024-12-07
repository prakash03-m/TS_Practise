import React, {MouseEvent, useState} from 'react'
import { ToggleSwitch } from '../toggleSwitch/ToggleSwitch';

export const Counter:React.FC = (props) => {

    const [count, setCount] = useState<number>(0);
    const [countDisplay, setCountDisplay] = useState<boolean>(true);

    const countChangeHandler = (e:MouseEvent<HTMLButtonElement>, action: "increment" | "decrement") => {
	    action === 'increment' ? setCount((prevCount) => prevCount+=1) : setCount((prevCount) => prevCount-=1);        
    }

    const toggleHandler = (status:boolean):void => {
        setCountDisplay(status);
    }

    return (
        <div>
            {countDisplay && <h3>{count}</h3>}
            <button onClick={(e) => countChangeHandler(e, "increment")}>Increment</button>
            <button onClick={(e) => countChangeHandler(e, "decrement")}>Decrement</button>
            <ToggleSwitch displayHandler={(status:boolean) => toggleHandler(status)}/>
        </div>
    )
}