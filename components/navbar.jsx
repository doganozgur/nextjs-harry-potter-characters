import Link from "next/link"

function Navbar() {
  return <div className="py-5 mb-5 px-3 flex justify-center">
      <ul className="flex space-x-12 text-xl">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/listing">Characters</Link></li>
      </ul>
  </div>;
}

export default Navbar;
