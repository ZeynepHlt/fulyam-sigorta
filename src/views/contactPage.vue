<template>
    <app-navbar></app-navbar>
    <section id="offer-wrapper">
    <div class="col-md-10 mx-auto">
      <h4 class="text-center mt-3">İLETİŞİM</h4>
      <div class="hline"></div>
      <div class="offer-intro">
        <div class="container">
          <div class="row">
            <div class="col-md-6 border pt-4">
                <p><strong>Adres : </strong>Sarayaltı mahallesi celal Bayar caddesi no 84/102 Merkez/ Uşak</p>
                <p><strong>Telefon : </strong>0 (276) 223 13 44</p>
                <p><strong>GSM : </strong>0 532 413 04 97 / 0 533 550 39 59 / 0 553 064 95 90</p>
                <p><strong>Email : </strong><a class="text-danger" href="mailto:fulyamsigorta64@gmail.com">fulyamsigorta64@gmail.com</a></p>  
            </div>
            <div class="col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24917.701705105592!2d29.408578!3d38.67847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c87fea9e686951%3A0x605c54766be5fc7c!2sFulyam%20Sigorta!5e0!3m2!1str!2sus!4v1678562821975!5m2!1str!2sus" width="100%" height="200" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <h6 class="mx-auto">İLETİŞİM FORMU</h6>
          <hr>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="name" class="form-label">Adınız*</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Adınızı Giriniz..."
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="surname" class="form-label">Soyadınız*</label>
                <input
                  type="text"
                  class="form-control"
                  id="surname"
                  placeholder="Soyadınızı Giriniz..."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="email" class="form-label"
                  >Email Adresinizi Giriniz</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="phone" class="form-label">Telefon Numaranız</label>
                <input
                  type="number"
                  class="form-control"
                  id="phone"
                  placeholder="Telefon Numaranızı Giriniz..."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <label for="konu" class="form-label">Konu*</label>
                <input
                  type="text"
                  class="form-control"
                  id="konu"
                  placeholder="Konu Başlığı Giriniz..."
                />
              </div>
            </div>
            <div class="col-md-12 mb-3">
                <label for="konu" class="form-label">Mesaj*</label>
                <textarea class="form-control" aria-label="With textarea" style="height: 100px;" placeholder="Mesajınızı Giriniz..."></textarea>
            </div>
          </div>
          
       
         
         
     
          <div class="form-check">
            <input
              class="form-check-input mt-2"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label class="form-check-label" for="defaultCheck1">
              Kampanya ve bildirimlerden haberdar olmak istiyorum.
            </label>
          </div>
          <div class="text-right">
            <button type="button" class="btn btn-danger w-25">Gönder</button>
          </div>
        </div>
      </div>
    </div>
  </section>
    <app-footer></app-footer>
</template>