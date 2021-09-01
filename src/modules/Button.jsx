import './styles/Button.css';
export default function ButtonCal(props){
    return(
        <>
        <div className={props.clas}>{props.val}</div>
        </>
    );
}