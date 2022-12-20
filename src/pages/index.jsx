import Navegador from '../components/Navegador';

export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: "100vh",
            flexWrap: "wrap"
        }}>
            <Navegador destino='/estiloso' nome='Estilo'/>
            <Navegador destino='/exemplo' nome='Exemplo' color="red"/>
            <Navegador destino='/client/123' nome='Navegação Dinâmica' color="green"/>
            <Navegador destino='/estado' nome='Estado' color="#009688"/>
            <Navegador destino='/estatico' nome='Conteúdo Estático' color="#4b86b4"/>
        </div>
    )
}