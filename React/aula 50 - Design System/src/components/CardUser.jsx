import { Card, Email, Foto, Nome, SobreNome } from "./styled";

const CardUser = ({ nome, sobrenome, email, foto }) => {
    return (
        <Card>
            <Foto src={foto} alt="Foto de perfil" />
            <Nome>{nome}</Nome>
            <SobreNome>{sobrenome}</SobreNome>
            <Email>{email}</Email>
        </Card>
    );
};

export default CardUser;
