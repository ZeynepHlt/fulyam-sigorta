<template>
    <app-navbar></app-navbar>
    <section id="offer-wrapper">
    <div class="row  mx-auto p-0">
      <div class="col-md-12 mx-auto p-0">
        <div class="nav sidebar container-fluid d-flex justify-content-center align-items-center">
          <li class="nav-item">
            <router-link to="/kasko" class="nav-link">Kasko</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/trafik" class="nav-link">Trafik Sigortası</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/konut" class="nav-link">Konut Sigortası</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/isyeri" class="nav-link">İşyeri Sigortası</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/seyahat" class="nav-link">Seyahat Sigortası</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/saglik" class="nav-link">Sağlık Sigortası</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/tamamlayici" class="nav-link">Tamamlayıcı Sağlık Sigortası</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/dask" class="nav-link">DASK</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/bireysel" class="nav-link">Bireysel Emeklilik Sigortası</router-link>
          </li>
          
          
        </div>
        <RouterView></RouterView>
       
      </div>
      
    </div>
    
  </section>
    <app-footer></app-footer>
</template>



