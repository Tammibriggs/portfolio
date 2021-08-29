import './index.css'
import logo from '../images/logo.png'

function Header(){
  return(
    <header>
      <div className="wrapper">
      <img src={logo} alt="logo" id="logo"/>
      </div>
    </header>
  )
}

export default Header
