import SecondCompo from './SecondCompo'

export const FirstCompo =()=> {
   let form = 'Hadi Raza';

    return(
      <div className="main-heading">
        <h1>Passing Props to multiple components </h1>
        <SecondCompo myform = {form}/>
      </div>
    )
  }
export default FirstCompo;


