<template>
    <app-navbar></app-navbar>
    <section id="offer-wrapper">
    <div class="row container-fluid mx-auto p-0">
      <div class="col-md-12  mx-auto p-0">
        <div class="nav sidebar container-fluid d-flex justify-content-center align-items-center ">
          <li class="nav-item">
            <router-link to="/anadolu" class="nav-link">Anadolu Sigorta</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/groupama" class="nav-link">Groupama Sigorta</router-link>
          </li>
          <span class="vline">|</span>
          <li class="nav-item">
            <router-link to="/allianz" class="nav-link">Allianz Sigorta</router-link>
          </li>
          <span class="vline">|</span>
        </div>
      </div>
      <RouterView></RouterView>
    </div>
    
  </section>
    <app-footer></app-footer>
</template>