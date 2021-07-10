import Link from 'next/link'

const Header = () => {
    return (
      <nav>
      <div className="logo">
        <h2>Salmans Website</h2>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/posts/build-table"><a>Fancy Country Table</a></Link>
      <Link href="/posts/country"><a>Basic Country Table</a></Link>
      <Link href="/posts/contactme"><a>Contact Me</a></Link>
      <Link href="/posts/post"><a>Sample Content Form</a></Link>
    </nav>
      );
}
 
export default Header;