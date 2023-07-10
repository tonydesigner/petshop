export function Marca(){
    const marcas = 
    [
        {img:'https://www.petlove.com.br/images/brands/logo/267822/small/Reserva.jpg?1681317297'},
        {img:'https://www.petlove.com.br/images/brands/logo/206895/small/RC_logo_2016cmjn.jpg?1556295210'},
        {img:'https://www.petlove.com.br/images/brands/logo/238574/small/True.jpg?1624303954'},
        {img:'https://www.petlove.com.br/images/brands/logo/224798/small/Quatree.jpg?1591788981'},
        {img:'https://petlove.com.br/images/brands/logo/253145/small/guabi_natural.jpg?1648496868'},
        {img:'https://www.petlove.com.br/images/brands/logo/267071/small/Prmeier.jpg?1678277277'},
        {img:'https://www.petlove.com.br/images/brands/logo/260044/small/Bravecto_logo.jpg?1659545290'},
        {img:'https://www.petlove.com.br/images/brands/logo/223822/small/Purina.jpg?1589374456'},
        {img:'https://www.petlove.com.br/images/brands/logo/232580/small/Logo_F%C3%B3rmula_Natural.jpg?1606768535'},
        {img:'https://www.petlove.com.br/images/brands/logo/256452/small/SIMPARIC.png?1654629926'},


    ]
    const h1 = {textAlign:'center', color:'var(--bg)'}
    return(
        <>
            <h1 style={h1}>Marcas</h1>
            <div className="marca margin">
                {
                    marcas.map(i=>
                        <div className="img">
                            <img src={i.img} alt="" />
                        </div>
                        )
                }
 
            </div>        
        </>

    )
}