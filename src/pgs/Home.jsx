import { Destaque } from "../components/Destaques"
import { Services } from "../components/Services"
import { Vendas } from "./Vendas"

export function Home(){
    const dados = 
    [
        {img:'https://apaixonadossaudepet.com.br/wp-content/uploads/2021/05/bg-contact03.png', title:'Plano de Saude', desc:'Já pensou em dar um plano de saúde para o seu pet?', btn:'Contratar'},
        {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtq-ZaO2OnodYR2LKpZ5sTQo6R8gssz1OuzQ&usqp=CAU', title:'Hospedagem', desc:'O hotel que seu cãozinho merece: um lar como o seu.', btn:'Agendar'},
        {img:'https://diracapet.com.br/wp-content/uploads/2022/10/5-Cuidados-que-o-servico-de-Pet-Sitter-pode-fazer-por-voce-e-seu-pet-300x201.jpg', title:'Pet Sitter', desc:'Um herói vai até a sua casa para cuidar do seu pet.', btn:'Agendar'},
        {img:'https://animalvillage.com.br/wp-content/uploads/2021/06/Animal-Village_30-e1626475176183.jpg', title:'Creche', desc:'Não deixe seu cão sozinho em casa enquanto trabalha!', btn:'Agendar'}
    ]
    const home = {width: '100%', height: 'auto',padding:'1rem', display:'flex', justifyContent:'space-around', gap:'1rem', borderTop:'.5px solid #ccc' }
    const h1 = {textAlign:'center', color:'#4E2096'}
    const service = {borderTop:'.5rem solid #ccc'}
    return(
        <>
        <div style={home}>
           <Vendas/>
        </div>
        <h1 style={h1}>Nossos Serviços</h1>
        <div style={home}>
            {
                dados.map(i=>
                        <Services style={service} img={i.img}
                        title={i.title}
                        desc={i.desc}
                        btn={i.btn} />
                    )
            }
            
        </div>
        <h1 style={h1}>Destaques</h1>
        <div style={home}>
            <Destaque />
        </div>
        </>
       
    )
}