import ThirdCompo from "./ThirdCompo";

export const SecondCompo =(props)=> {
    return(
        <>
        <h3>Hello learning props today </h3>
        <ThirdCompo secondForm = {props.myform}/>
        </>
    )
}

export default SecondCompo;


