import Link from 'next/link'

const Header = () => {
    return (
      <nav>
      <div className="logo">
        <h2>Salmans Website</h2>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/posts/build-table"><a>Countries</a></Link>
      <Link href="/posts/country"><a>Countries #2</a></Link>
      <Link href="/posts/contactme"><a>Contact</a></Link>
    </nav>
      );
}
 
export default Header;