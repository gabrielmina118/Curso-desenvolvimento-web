import { useState } from "react";

function App() {
    const [ step , setStep] = useState(0)

    const changeStep = ()=>{
        switch(step){
            case 0:
            return (
                <div>
                    <h1>Primeira parte do cadastro</h1>
                    <label htmlFor="">Nome</label>
                    <input type="text" />
                </div>
            )
            case 1:
                return(
                <div>
                    <h1>Segunda parte do cadastro</h1>
                    <label htmlFor="">Sobrenome</label>
                    <input type="text" />
                </div>

                )
            case -1:
                return (<div>Inciando Cadastro</div>)
                
            default:
                return <div>Finalizado</div>
        }
    }

    const nextStep = () =>{
        setStep(step + 1)
    }

     const backStep = () => {
         setStep(step - 1);
     };

    return (
        <div>
            {changeStep()}
            <button onClick={backStep}>Anterior</button>
            <button onClick={nextStep}>Proximo</button>
        </div>
    );
}

export default App;
