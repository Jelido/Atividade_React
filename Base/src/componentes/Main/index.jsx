import { Paragrafo, Cima, Input1, Input, Botoes, DivBotoes, Meio} from './style'

export function Main(){
    return(
        <>
        <Cima>
        
        
        <Paragrafo>Cadastro</Paragrafo>
       
        </Cima>

        <Meio>

        <Input1 placeholder='Nome'></Input1>

        <Input placeholder='Data de Nascimento'></Input>

        <Input placeholder='E-mail'></Input>

        <Input placeholder='CPF'></Input>

        </Meio>
        
        <DivBotoes>

        <Botoes>Cancelar</Botoes> <Botoes>Cadastrar</Botoes>

        </DivBotoes>
        
        </>
    )
}