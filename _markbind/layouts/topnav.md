{% macro showTopNav() %}
<navbar type="dark">
  <a slot="brand" href="{{baseUrl}}/index.html" title="Home" class="navbar-brand"><img src="{{baseUrl}}/images/catcher_logo.png" width="40"/></a>
  <li><a href="{{baseUrl}}/index.html" class="nav-link">HOME</a></li>
  <li><a href="{{baseUrl}}/ug/index.html" class="nav-link"> USER GUIDE </a></li>
  <li><a href="{{baseUrl}}/dg/index.html" class="nav-link"> DEVELOPER GUIDE </a></li>
  <li><a href="{{baseUrl}}/about-us.html" class="nav-link"> ABOUT US </a></li>
  <li><a href="https://github.com/CATcher-org/CATcher" target="_blank" class="nav-link"><span><span aria-hidden="true" class="fab fa-github"></span></span></a></li>
  <li slot="right">
    <form class="navbar-form">
      <searchbar :data="searchData" placeholder="Search" :on-hit="searchCallback" menu-align-right></searchbar>
    </form>
  </li>
</navbar>
{% endmacro %}
{{ showTopNav() }}
