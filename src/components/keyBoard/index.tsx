import React from 'react';
import Button from '../KeyboardButton'
import {IOnClick} from '../KeyboardButton';
interface KeyBoardProps extends IOnClick{

}
const KeyBoard : React.FC<KeyBoardProps> = ({onClick}) => {
    


    return ( 
    <div className="calculator">
        <div className="grid">
            <Button onClick={onClick} label="%"/>
            <Button onClick={onClick} label="CE"/>
            <Button onClick={onClick} label="C"/>
            <Button onClick={onClick} label="<<"/>

            <Button onClick={onClick} label="1/x"/>
            <Button onClick={onClick} label="x^2"/>
            <Button onClick={onClick} label="pow(x,2)"/>
            <Button onClick={onClick} label="/"/>
            
            <Button onClick={onClick} label="7"/>
            <Button onClick={onClick} label="8"/>
            <Button onClick={onClick} label="9"/>

            <Button onClick={onClick} label="X"/>

            <Button onClick={onClick} label="4"/>
            <Button onClick={onClick} label="5"/>
            <Button onClick={onClick} label="6"/>

            <Button onClick={onClick} label="-"/>

            <Button onClick={onClick} label="1"/>
            <Button onClick={onClick} label="2"/>
            <Button onClick={onClick} label="3"/>

            <Button onClick={onClick} label="+"/>

            <Button onClick={onClick} label="+/-"/>
            <Button onClick={onClick} label="0"/>
            <Button onClick={onClick} label=","/>
            <Button onClick={onClick} label="="/>
        </div>
    </div>
);
}

export default KeyBoard;