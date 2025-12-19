import './ButtonWhatsapp.css';


const ButtonWhatsapp = () => {

    const linkWhatsapp = import.meta.env.VITE_LINK_WHATSAPP;

    return (
         <div className='icons-contact'>
          <a href={linkWhatsapp} target='_blank'><img className='icon whatsapp' src={'./assets/icon/whatsapp.png'}/></a>
        </div>
    )
}

export default ButtonWhatsapp
