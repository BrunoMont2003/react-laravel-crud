import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img src={logo} alt='' className='img-fluid' style={{ height: '40px' }} />
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbar'>
          <div className='navbar-nav'>
            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/products/create'>Create</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/products'>Products</NavLink>
          </div>
        </div>
      </div>
    </nav>

  )
}
