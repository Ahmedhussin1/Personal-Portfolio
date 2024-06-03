import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='pt-2 '>
      <div className="max-w-lg mx-auto mt-5">
        <ul className="flex gap-5 justify-center border-2 border-[#212224] rounded-lg py-3 px-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/journal">Journal</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar