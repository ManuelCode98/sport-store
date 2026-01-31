import './ButtonWhatsapp.css';


const ButtonWhatsapp = () => {

    const linkWhatsapp = `https://wa.me/573157382433`;
    const text = `?text=Hola,%20quiero%20más%20información.`;

    return (
         <div className='icons-contact'>
          <a href={`${linkWhatsapp}${text}`} target='_blank'><img className='icon whatsapp' src={'./assets/icon/whatsapp.png'}/></a>
        </div>
    )
}

export default ButtonWhatsapp
