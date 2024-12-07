import React, { useEffect, useState } from 'react';

interface ChildComponentProps {
    displayHandler: (newState: boolean) => void;
}
export const ToggleSwitch:React.FC<ChildComponentProps> = (props) => {
    const [switchState, setSwitchState] = useState<boolean>(false);

    const switchHandler = () => {
        setSwitchState(prevState => {
            const newState = !prevState;            
            return newState;
        })
    }

    useEffect(() => {
        props.displayHandler(switchState);
    }, [switchState])
    
    return(
        <div>
            <button onClick={switchHandler}>{switchState? 'Hide' : 'Show'}</button>
        </div>
    )
}