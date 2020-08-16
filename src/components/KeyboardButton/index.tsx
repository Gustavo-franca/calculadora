import React from 'react';

export interface IOnClick {
    onClick : (label : string) => void;

}
interface ButtonProps extends IOnClick{
    label : string;
}

const Button : React.FC<ButtonProps>= ({onClick,label})=>{
    return (
    <button onClick={()=>onClick(label)}  className="field">{label}</button>
    );
}

export default Button;