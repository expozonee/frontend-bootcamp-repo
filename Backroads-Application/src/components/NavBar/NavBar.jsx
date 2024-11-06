import "./navBar.css";

const navLinksData = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "About",
    href: "#about",
  },
  {
    id: 3,
    title: "Services",
    href: "#services",
  },
  {
    id: 4,
    title: "Tours",
    href: "#tours",
  },
];

const socialLinksData = [
  {
    id: 1,
    href: "https://www.facebook.com",
    socialLogo: "facebook",
  },
  {
    id: 1,
    href: "https://www.twitter.com",
    socialLogo: "twitter",
  },
  {
    id: 1,
    href: "https://www.squarespace.com",
    socialLogo: "squarespace",
  },
];

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => {
              const links = document.getElementById("nav-links");
              links.classList.toggle("show-links");
            }}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {navLinksData.map(({ id, title, href }) => {
            return <Li key={id} title={title} href={href} />;
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinksData.map(({ id, href, socialLogo }) => {
            return <Li key={id} navLink href={href} socialLogo={socialLogo} />;
          })}
        </ul>
      </div>
    </nav>
  );
}
/* eslint-disable react/prop-types */
function Li({ href, title, navLink, socialLogo }) {
  if (navLink)
    return (
      <li>
        {navLink ? (
          <a href={href} target="_blank" className="nav-icon">
            <i className={`fab fa-${socialLogo}`}></i>
          </a>
        ) : (
          <a href={href} className="nav-link">
            {title}
          </a>
        )}
      </li>
    );
}
