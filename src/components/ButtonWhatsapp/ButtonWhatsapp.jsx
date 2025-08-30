import './ButtonWhatsapp.css';


const ButtonWhatsapp = () => {

    const linkWhatsapp = 'https://wa.me/3157382433';

    return (
         <div className='icons-contact'>
          <a href={linkWhatsapp} target='_blank'><img className='icon whatsapp' src={'./assets/icon/whatsapp.png'}/></a>
        </div>
    )
}

export default ButtonWhatsapp
