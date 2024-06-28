import axios from "axios";
import { useEffect, useState } from "react";
import CardUser from "./components/CardUser";
import CardChakra from "./components/CardChakra";

function App() {
    const [usuario, setUsuario] = useState({
        email: "",
        nome: "",
        sobrenome: "",
        foto: "",
    });

    useEffect(() => {
        const buscarUsuario = async () => {
            const result = await axios.get("https://randomuser.me/api/");
            console.log(result.data.results[0]);
            setUsuario({
                email: result.data.results[0].email,
                nome: result.data.results[0].name.first,
                sobrenome: result.data.results[0].name.last,
                foto: result.data.results[0].picture.medium,
            });
        };
        buscarUsuario();
    }, []);

    return (
        <div>
            <CardChakra
                nome={usuario.nome}
                sobrenome={usuario.sobrenome}
                email={usuario.email}
                foto={usuario.foto}
            />
        </div>
    );
}

export default App;
