<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>İLETİŞİM BİLGİLERİMİZ</h5>
            <p>
              <font-awesome-icon icon="fa-solid fa-location-dot" class="fa" />
              Sarayaltı mahallesi celal Bayar caddesi no 84/102 Merkez/ Uşak
            </p>
            <p>
              <font-awesome-icon
                icon="fa-solid fa-phone-volume"
                class="fa"
              />0(276) 223-1344
            </p>
            <p>
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="fa"
              />fulyamsigorta64@gmail.com
            </p>
            <p>Fulyam Sigorta Acentesi-Uşak Sigorta Acenteleri</p>
          </div>
          <div class="col-md-4 pl-5">
            <h5>TÜM HİZMETLERİMİZ</h5>
            <p><router-link to="/kasko">Kasko</router-link></p>

            <p><router-link to="/trafik">Trafik Sigortası</router-link></p>

            <p><router-link to="/konut">Konut Sigortası</router-link></p>

            <p><router-link to="/seyahat">Seyahat Sigortası</router-link></p>

            <p><router-link to="/isyeri">İşyeri Sigortası</router-link></p>

            <p><router-link to="/saglik">Sağlık Sigortası</router-link></p>

            <p>
              <router-link to="/tamamlayici"
                >Tamamlayıcı Sağlık Sigortası</router-link
              >
            </p>

            <p><router-link to="/dask">DASK</router-link></p>

            <p>
              <router-link to="/bireysel"
                >Bireysel Emeklilik Sigortası</router-link
              >
            </p>
          </div>
          <div class="col-md-4">
            <h5>FULYAM SİGORTA</h5>
            <p>  <router-link :to="{ name: 'homePage' }"
              >Anasayfa
            </router-link></p>
            <p> <router-link :to="{ name: 'aboutPage' }"
              >Biz Kimiz?
            </router-link></p>
            <p>  <router-link :to="{ name: 'contactPage' }" 
              >İletişim</router-link
            ></p>
            <p> <router-link to="/kasko">Teklif Al</router-link></p>
            
            <p><a href="">SSS</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="foot-img">
              <img src="@/assets/fslogo.png" alt="" />
            </div>
          </div>
          <div class="col-md-6 mt-3">
            <p>Copyright © 1996-2023 Fulyam Sigorta Acentesi</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
