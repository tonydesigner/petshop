import { Box } from "../components/Box";

export function Desconto(){
    return(
        <>
            <div className="desconto">
                <h1>Faça parte do nosso <br /> Clube de Descontos</h1>
                <div className="dados margin brd">
                   <Box 
                        title='Descontos em todos os produtos' 
                        desc='Até 20% de desconto em todos os produtos para membros do Clube' />

                   <Box title='Frete grátis' 
                        desc = 'Válido para todas as suas compras a partir de R$ 79,90'
                        />
                   <Box title='Sem stress' 
                        desc='Seus descontos são aplicados automaticamente em seu carrinho'
                            />
                </div>  
                <h3>O clube está disponível somente para as regiões Sul e Sudeste.</h3>
            </div>
                  
        </>

    )
}