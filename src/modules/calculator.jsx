import {React,useState} from "react";
import ButtonCal from "./Button";
import './styles/Calculator.css';
import day from '../img/sunny.png';
import night from '../img/moon.png';

export default function Calculator(props){
    const [isDay, setDay] = useState(true);
    const changeFunc = () => {
        setDay(!isDay);
        props.onChange(!isDay);
    };
    return(
        <>
        <div className="mode" onClick={changeFunc}><img src={isDay?night:day} alt="mode switch" /></div>
        <div className={isDay?"screen":"screen screen-dark"}>0</div>
        <div className="calculatorGrid">
            <ButtonCal val="AC" clas={isDay?"btn btn1 btn-gray":"btn btn1 btn-gray btn-dark-gray btn-shadow"} />
            <ButtonCal val="+/-" clas={isDay?"btn btn2 btn-gray":"btn btn2 btn-gray btn-dark-gray btn-shadow"} />
            <ButtonCal val="%" clas={isDay?"btn btn3 btn-gray":"btn btn3 btn-gray btn-dark-gray btn-shadow"} />
            <ButtonCal val="/" clas={isDay?"btn btn4 btn-yellow": "btn btn4 btn-yellow btn-shadow"} />
            <ButtonCal val="7" clas={isDay?"btn btn5":"btn btn5 btn-dark btn-shadow"} />
            <ButtonCal val="8" clas={isDay?"btn btn6":"btn btn6 btn-dark btn-shadow"} />
            <ButtonCal val="9" clas={isDay?"btn btn7":"btn btn7 btn-dark btn-shadow"} />
            <ButtonCal val="x" clas={isDay?"btn btn8 btn-yellow": "btn btn8 btn-yellow btn-shadow"} />
            <ButtonCal val="4" clas={isDay?"btn btn9":"btn btn9 btn-dark btn-shadow"} />
            <ButtonCal val="5" clas={isDay?"btn btn10":"btn btn10 btn-dark btn-shadow"} />
            <ButtonCal val="6" clas={isDay?"btn btn11":"btn btn11 btn-dark btn-shadow"} />
            <ButtonCal val="-" clas={isDay?"btn btn12 btn-yellow": "btn btn12 btn-yellow btn-shadow"} />
            <ButtonCal val="1" clas={isDay?"btn btn13":"btn btn13 btn-dark btn-shadow"} />
            <ButtonCal val="2" clas={isDay?"btn btn14":"btn btn14 btn-dark btn-shadow"} />
            <ButtonCal val="3" clas={isDay?"btn btn15":"btn btn15 btn-dark btn-shadow"} />
            <ButtonCal val="+" clas={isDay?"btn btn16 btn-yellow": "btn btn16 btn-yellow btn-shadow"} />
            <ButtonCal val="0" clas={isDay?"btn btn17":"btn btn17 btn-dark btn-shadow"} />
            <ButtonCal val="." clas={isDay?"btn btn18":"btn btn18 btn-dark btn-shadow"} />
            <ButtonCal val="=" clas={isDay?"btn btn19 btn-yellow": "btn btn19 btn-yellow btn-shadow"} />
        </div>
        </>
    );
}