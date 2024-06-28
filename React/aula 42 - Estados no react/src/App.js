import { useState } from "react";

function App() {
    const [numero,setNumero] = useState(0)

    function incrementar(){
        const numeroIncrementado = numero + 1
        setNumero(numeroIncrementado);
    }

     function decrementar() {
         const numeroIncrementado = numero - 1;
         setNumero(numeroIncrementado);
     }

    return (
        <div>
            <button onClick={incrementar}>Incrementar</button>
            <p>{numero}</p>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

export default App;
