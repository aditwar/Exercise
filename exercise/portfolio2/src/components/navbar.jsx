import { Link } from "react-router-dom"

function Navbar() {
    const data = "Aditya Wardana" // ini cara buat var dan dipanggil dengan {}
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3">
            <a className="navbar-brand">{data}</a>
            <div className="collapse navbar-collapse">              
                <ul className="nav nav-underline">
                    <li className="nav-item nav-link"><Link to={'/'}> Home </Link></li>
                    <li className="nav-item nav-link"><Link to={'/about'}> About </Link></li>
                    <li className="nav-item nav-link"><Link to={'/portfolio'}> Portfolio </Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar