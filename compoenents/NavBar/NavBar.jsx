import navbarStyle from "../../styles/navbar.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
const NavBar = () => {
  const { data: session, status } = useSession();
 
  return (
    <nav className={navbarStyle.navBarCont}>
      <ul
        className={`${navbarStyle.leftPart} ${
          status === "loading" ? navbarStyle.loading : navbarStyle.loded
        } `}
      >
        <li>
          <Link href="/" className={navbarStyle.customLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/todo" className={navbarStyle.customLink}>
            To Do App
          </Link>
        </li>
      </ul>
      <ul
        className={`${navbarStyle.RightPart} ${
          status === "loading" ? navbarStyle.loading : navbarStyle.loded
        } `}
      >
        {!session && status === "unauthenticated" ? (
          <li
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Signin
          </li>
        ) : null}
        {session && status === "authenticated" ? (
          <li
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </li>
        ) : null}
        {session?.user?.name ?(<li>{session?.user?.name }</li>):null}
      </ul>
    </nav>
  );
};

export default NavBar;