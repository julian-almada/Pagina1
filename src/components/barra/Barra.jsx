import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../home/Home'
import Abaut from '../abaut/Abaut'
import Info from '../info/Info'
import Contact from '../contact/Contact'
import Settings from '../settings/Settings'
import Proyects from '../proyects/Proyects'
import { useTheme } from '../../context/ThemeProvider'
import './Barra.css'

const Barra = () => {
  const { theme, toggleTheme, themeName } = useTheme();
  return (
        <div className='container-heade' style={{ backgroundColor: theme.background, color: theme.textColor }}>
            <div className="aj">
                <div className="coso">
                    <Link className='logo' exact to='/'>
                
                            <img src='media/a.png' id='a'></img>
                        <span className='title'>lmada</span>
                            <img src='media/j.png' id='j'></img>
                        <span className='title'>ulian</span>
                
            </Link>
                </div>
            </div>

            <div className='menu'>
                <ul className='menu'>
                    <Link className='item' exact to='/'>
              <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
              <span className='title'>Home</span>
            </Link>


            <Link className='item' to='/abaut'>
              <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
              <span className='title'>About</span>
            </Link>
      
            <Link className='item' to='/proyects'>
              <span><ion-icon name="code-slash-outline"></ion-icon></span>
              <span className='title'>Proyects</span>
            </Link>

            <Link className='item' to='/info'>
                <span className='icon'><ion-icon name="information-circle-outline"></ion-icon></span>
                <span className='title'>Info</span>
              </Link>

            <Link className='item' to='/contact'>
              <span><ion-icon name="chatbox-outline"></ion-icon></span>
              <span className='title'>Contact</span>
            </Link>

            <Link className='item' to='settings'>
              <span><ion-icon name="settings-outline"></ion-icon></span>
              <span className='title'>Settings</span>
            </Link>
                </ul>
            </div>
      
            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/abaut' exact={true} component={Abaut} />
              <Route path='/proyects' exact={true} component={Proyects} />
              <Route path='/info' exact={true} component={Info} />
              <Route path='/contact' exact={true} component={Contact} />
              <Route path='/settings' exact={true} component={Settings} />
            </Switch>
        </div>

  )
}

export default Barra