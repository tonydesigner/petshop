export function Destaque(){
    const images = 
    [
        {img:'https://www.petlove.com.br/static/uploads/banner_image/image/46471/display_CAMP-439_bannerbox__2_.png'},    
        {img:'https://www.petlove.com.br/static/uploads/banner_image/image/46679/display_CAMP-431_bannerbox__3_.png'},  
        {img:'https://www.petlove.com.br/static/uploads/banner_image/image/46477/display_BOX_-_CAMP-380__2_.png'},  
        {img:'https://www.petlove.com.br/static/uploads/banner_image/image/46675/display_BOX-CAMP-429.png'},  
    ]
    const destaque = {width:'312px', height:'182px',}
    const img = {width:'100%'}
    
    return(
        <>
             {
                images.map(i=>
                        <div style={destaque}>
                            <img src={i.img} alt="images" />
                        </div>
                    )
             }
             
        </>
       
    )
}