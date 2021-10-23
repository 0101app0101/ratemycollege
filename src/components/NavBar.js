import { Link } from "react-router-dom"

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-md-auto gap-2">
        <li className="nav-item rounded">
          <a className="nav-link active" ><i className="bi bi-house-fill me-2" /> <Link to='/'>Home</Link> </a>
        </li>
        <li className="nav-item rounded">
       <a className='nav-link'> <Link to='/review'><i className="bi bi-people-fill me-2" />Review</Link></a>
        </li>
        <li className="nav-item rounded">
          <a className="nav-link" href="#"><i className="bi bi-telephone-fill me-2" />Contact</a>
        </li>
        <li className="nav-item dropdown rounded">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-person-fill me-2" />Profile</a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Account</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

//   <nav className="navbar navbar-expand-sm bg-light">
//   {/* Links */}
//   <ul className="navbar-nav">
//     <li className="nav-item">
//       <a className="nav-link" href="#">Link 1</a>
//     </li>
//     <li className="nav-item">
//     <Link to='/'>Home</Link> 
//     </li>
//     <li className="nav-item">
//      <Link to='/review'>Review</Link>
//     </li>
//   </ul>
// </nav>
)

export default NavBar