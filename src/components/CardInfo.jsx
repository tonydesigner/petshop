export function CardInfo(){
    const dados = 
    [
        {title:'Compre agora', desc:'Ganhe até 15% Off na primeira compra e tenha Frete Grátis.'},
        {title:'Perfil Pet', desc:'Preencha e personalize sua experiência.'},
        {title:'Cuidamos do seu Pet', desc:'Enquanto você viaja ou trabalha.'},
        {title:'3X sem juros', desc:'Parcele suas Compras.'},
        {title:'Frete Grátis', desc:'Nas compras a partir de R$ 250,00.'},
    ]
        const box = {height:'auto',padding:'.5rem', display:'flex', justifyContent:'space-around', gap:'.5rem'}
        const cardInfo={width:'225px', height:'auto', padding:'.5rem', }
        const title = {color:'#4E2096'}
    return(
        <div style={box}>
            {
                dados.map(i=>
                    <div style={cardInfo}>
                        <h3 style={title}>{i.title} </h3>
                        <p>{i.desc} </p>
                    </div>
                       
                    )
            }
           
            
        </div>
    )
}