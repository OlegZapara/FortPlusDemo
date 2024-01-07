import { Link } from 'react-router-dom'
import './Navbar.css'
import { User, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth, logoutUser } from '../Firebase';

export default function Navbar() {

  const [user, setUser] = useState<User|null>();
  onAuthStateChanged(auth, (newUser) => {
    if(user !== newUser){
      setUser(newUser);
      console.log('current user is', newUser);
    }
  })

  return (
    <div className="navbar-container">
      <div className='navbar'>
        <div className='logo'>LOGO</div>
        <div className='main-nav'>ТОВ "НАУКОВО-ЕКСПЕРТНИЙ ЦЕНТР  "ФОРТ  ПЛЮС"</div>
        <div className='nav-login'>
          {user == null? 
          <Link to='/login'>
            Увійти
          </Link> : 
          <Link to='/' onClick={() => logoutUser()}>Вийти</Link> 
          }
          </div>
      </div>
    </div>
  )
}
