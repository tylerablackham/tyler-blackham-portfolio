import type {JSX} from "react";
import {Link} from "react-router";

function Layout({children} : {children: JSX.Element}) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>&copy; 2026 MySite. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Layout