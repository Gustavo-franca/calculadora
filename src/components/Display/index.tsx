import React from 'react';

interface DisplayProps {
    value : number;
}

const Display : React.FC<DisplayProps> = ({value})=>{

    return (  
        
    <div className="display">
        <span>1+45+58+88/85*7</span>
        <input type="text" value={value} disabled/>
        <input type="hidden" name="numberValue"/>
    </div>
);
}

export default Display;