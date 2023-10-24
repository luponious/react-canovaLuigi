import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom';

const MiLogo = () => {
  return (
    <div className=' box-content h-12 w-12 pb-8 hover:scale-95'>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

    </div>
  )
}

export default MiLogo