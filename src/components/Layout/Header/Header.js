import React, {Component} from 'react';
import '../../../Assets/css/_header.scss';
import logoHeader from '../../../Assets/Images/Metablaze-logo.png';
import divide from '../../../Assets/Images/Decors/nav-border.svg';

class Header extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render (){
    return(
    <header className='header'>
      <nav className='NavbarItems container'>
      <a href='#'><img src={logoHeader} className='navbar-logo' alt="Logo Header"/></a>
        <div className='menu-icon' onClick={this.handleClick}>
          <div
            className={this.state.clicked ? 'closeHamburger' : 'hamburber'}
          />
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li className='mint-nft'>
            <a href="https://nftpresale.metablazetoken.com/login" target='_blank' className='mb_button mb_activeBtn'>Mint MetaGoblin NFT</a>
          </li>
          <img src={divide} className='divide_header'/>
          <li className='blaziverse_link'>
            <a href='https://drive.google.com/file/d/1HoxrqygZCg314TUgN4L7FZbrQXaTwrez/view' target='_blank' className='mb_button'>NFT Litepaper</a>
          </li>
          <img src={divide} className='divide_header'/>
          <li className='litepaper_link'>
            <a href="https://metablazetoken.com/" target='_blank' className='mb_button'>Visit MetaBlaze</a>
          </li>
        </ul>
      </nav>
    </header>
  )};
}

export default Header;