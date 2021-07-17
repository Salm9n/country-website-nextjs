import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo4.png'

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
        <Image src={logo} alt="mylogo" width={45} height={45}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item">
            <Link href="/posts/about"><a className="nav-link">About Me</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/posts/build-table"><a className="nav-link">Countries</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/posts/contactme"><a className="nav-link">Contact</a></Link>
          </li>
        </ul>
      </div>
</nav>
      );
}
 
export default Header;