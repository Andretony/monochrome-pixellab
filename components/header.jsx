export default function Header() {
  return (
    <header className="header">
      <section className="header-inner container">
        <section className="header-secondary">
          <div className="header-connect d-none d-lg-block">
            <ul>
              <li>
                <a
                  href="http://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  {' '}
                  <i class="fa-brands fa-youtube"></i>{' '}
                </a>
              </li>

              <li>
                <a
                  href="http://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  {' '}
                  <i class="fa-brands fa-twitter"></i>{' '}
                </a>
              </li>

              <li>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  {' '}
                  <i class="fa-brands fa-facebook"></i>{' '}
                </a>
              </li>

              <li>
                <a
                  href="http://Instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="IG"
                >
                  {' '}
                  <i class="fa-brands fa-instagram"></i>{' '}
                </a>
              </li>

              <li>
                <a href="tel:+44(0)1023456789" title="Call us">
                  CALL US +44(0)1023456789
                </a>
              </li>
            </ul>
          </div>
          <div className="header-title d-lg-none">
            <span>Monochrome</span>
          </div>

          <section className="header-controls">
            <div className="header-controls">
              <ul>
                <li>
                  <form className="header-search d-none d-lg-block">
                    <input
                      type="text"
                      name="Search"
                      id="Search"
                      placeholder="Search"
                    ></input>
                    <button title="Search">
                      <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                    </button>
                  </form>
                </li>
                <li>
                  <a href="" title="user">
                    <i className="fa-regular fa-user"></i>
                  </a>
                </li>
                <li>
                  <a href="" title="wishlist">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="" title="Shopping-bag">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>

      <section className="header-bottom">
        <nav className="nav-main d-none d-lg-block">
          <ul>
            <li>
              <a href="" title="New arrivals">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="" title="Brands">
                Brands
              </a>
            </li>
            <li>
              <a href="" title="Men's">
                Men's
              </a>
            </li>
            <li>
              <a href="" title="Women's">
                Women's
              </a>
            </li>
            <li>
              <a href="" title="Accessories">
                Accessories
              </a>
            </li>
            <li>
              <a href="" title="Lookbook"></a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
