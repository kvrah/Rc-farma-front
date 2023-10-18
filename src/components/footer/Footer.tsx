import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    const linkedinLink = 'https://www.linkedin.com/in/richard-rcampos/'; 
    const instagramLink = 'https://www.instagram.com/kvra.h/'; 
    const facebookLink = 'https://www.facebook.com/kvrah'; 
  
    footerComponent = (
      <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>RcFarma | Copyright: {data}</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <LinkedinLogo size={48} weight='bold' />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <InstagramLogo size={48} weight='bold' />
              </a>
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FacebookLogo size={48} weight='bold' />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer