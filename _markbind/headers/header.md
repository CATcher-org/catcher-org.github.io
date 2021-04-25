<header>
  <navbar type="dark" class="temp-navbar">
    <a slot="brand" href="{{baseUrl}}/index.html" title="Home" class="navbar-brand"><img src="{{baseUrl}}/assets/catcher_logo.png" width="40"/></a>
    <a href="{{baseUrl}}/index.html" class="nav-link"> HOME </a>
    <a href="{{baseUrl}}/ug/index.html" class="nav-link"> USER GUIDE </a>
    <a href="{{baseUrl}}/dg/index.html" class="nav-link"> DEVELOPER GUIDE </a>
    <a href="https://github.com/CATcher-org/CATcher" target="_blank" class="nav-link"><span><span aria-hidden="true" class="fab fa-github"></span></span></a>
    <li slot="right">
      <form class="navbar-form">
        <searchbar :data="searchData" placeholder="Search" :on-hit="searchCallback" menu-align-right></searchbar>
      </form>
    </li>
  </navbar>
</header>
