<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img src="@/assets/fslogo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'homePage' }" class="nav-link"
              >ANASAYFA
            </router-link>
            <span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'aboutPage' }" class="nav-link"
              >HAKKIMIZDA
            </router-link>
           
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              HİZMETLERİMİZ
            </a>
            <div class="dropdown-menu">
            <li><router-link to="/anadolu" class="dropdown-item">Anadolu Sigorta</router-link></li>
            <li><router-link to="/groupama" class="dropdown-item">Groupama Sigorta</router-link></li>
            <li><router-link to="/allianz" class="dropdown-item">Allianz Sigorta</router-link></li>
            </div>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'policyPage' }" class="nav-link" href="#"
              >POLİÇE HATIRLAT</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              TEKLİF AL
            </a>
            <div class="dropdown-menu">
              <li>
                <router-link to="/kasko" class="dropdown-item"
                  >Kasko</router-link
                >
              </li>
              <li>
                <router-link to="/trafik" class="dropdown-item"
                  >Trafik Sigortası</router-link
                >
              </li>
              <li>
                <router-link to="/konut" class="dropdown-item"
                  >Konut Sigortası</router-link
                >
              </li>
              <li>
                <router-link to="/isyeri" class="dropdown-item"
                  >İşyeri Sigortası</router-link
                >
              </li>
              <li>
                <router-link to="/seyahat" class="dropdown-item"
                  >Seyahat Sigortası</router-link
                >
              </li>
              <li>
                <router-link to="/saglik" class="dropdown-item"
                  >Sağlık Sigortası</router-link
                >
              </li>
              <li>
                <router-link to="/tamamlayici" class="dropdown-item"
                  >Tamamlayıcı Sağlık Sigortası</router-link
                >
              </li>
              <li>
                <router-link to="/dask" class="dropdown-item">DASK</router-link>
              </li>
              <li>
                <router-link to="/bireysel" class="dropdown-item"
                  >Bireysel Emeklilik Sigortası</router-link
                >
              </li>
            </div>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contactPage' }" class="nav-link" href="#"
              >İLETİŞİM</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
