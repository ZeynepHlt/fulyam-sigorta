<template>
  <app-navbar></app-navbar>
  <section id="offer-wrapper">
    <div class="col-md-10 mx-auto">
      <h4 class="text-center mt-3">POLİÇE HATIRLAT</h4>
      <div class="hline"></div>
      <p class="text-center mt-3">
        Aşağıdaki formu doldurduğunuzda sigorta poliçenizin tarihi yaklaştığında
        size hatırlatma maili gönderilecektir.
      </p>
      <div class="offer-intro">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="name" class="form-label">Adınız*</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Adınızı Giriniz..."
                  v-model="userData.name"
                :class="
                  v$.userData.name.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
                />
                <p
                class="text-err"
                v-for="error of v$.userData.name.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
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
                  v-model="userData.surname"
                :class="
                  v$.userData.surname.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
                />
                <p
                class="text-err"
                v-for="error of v$.userData.surname.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="email" class="form-label"
                  >Email Adresinizi Giriniz*</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  v-model="userData.email"
                :class="
                  v$.userData.email.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
                />
                <p
                class="text-err"
                v-for="error of v$.userData.email.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="phone" class="form-label">Telefon Numaranız*</label>
                <input
                  type="number"
                  class="form-control"
                  id="phone"
                  placeholder="Telefon Numaranızı Giriniz..."
                  v-model="userData.phone"
                :class="
                  v$.userData.phone.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
                />
                <p
                class="text-err"
                v-for="error of v$.userData.phone.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
              </div>
            </div>
          </div>
          <h6 class="mx-auto">POLİÇE BİLGİLERİNİZ</h6>
          <hr>
          <div class="row mt-3">
            <div class="col-md-4"></div>
            <div class="col-md-4"><p class="policy-des"> Vade Tarihi</p> </div>
            <div class="col-md-4"><p class="policy-des"> Açıklama</p> </div>
          </div>
          <div class="row">
            <div class="col-md-4 mt-1">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="checkbox"
                  value="kasko"
                  id="kaskoCheck"
                  v-model="userData.sigorta"
                  
                />
                <label class="form-check-label" for="kaskoCheck">
                  Kasko
                </label>
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input type="date" class="form-control" id="kaskoDate" v-model="userData.vade_tarih" />
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="kaskoDes"
                  placeholder="Açıklama Giriniz..."
                  v-model="userData.aciklama"
                  
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mt-1">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="checkbox"
                  value=""
                  id="trafikCheck"
                />
                <label class="form-check-label" for="trafikCheck">
                  Trafik Sigortası
                </label>
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input type="date" class="form-control" id="trafikDate" />
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="trafikDes"
                  placeholder="Açıklama Giriniz..."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mt-1">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="checkbox"
                  value=""
                  id="isCheck"
                />
                <label class="form-check-label" for="isCheck">
                 İşyeri Sigortası
                </label>
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input type="date" class="form-control" id="isDate" />
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="isDes"
                  placeholder="Açıklama Giriniz..."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mt-1">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="checkbox"
                  value=""
                  id="seyCheck"
                />
                <label class="form-check-label" for="seyCheck">
                Seyahat Sigortası
                </label>
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input type="date" class="form-control" id="seyDate" />
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="seyDes"
                  placeholder="Açıklama Giriniz..."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mt-1">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="checkbox"
                  value=""
                  id="kntCheck"
                />
                <label class="form-check-label" for="kntCheck">
                Konut Sigortası
                </label>
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input type="date" class="form-control" id="kntDate" />
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="kntDes"
                  placeholder="Açıklama Giriniz..."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mt-1">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="checkbox"
                  value=""
                  id="sglkCheck"
                />
                <label class="form-check-label" for="sglkCheck">
               Sağlık Sigortası
                </label>
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input type="date" class="form-control" id="sglkDate" />
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="sglkDes"
                  placeholder="Açıklama Giriniz..."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mt-1">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="checkbox"
                  value=""
                  id="tamCheck"
                />
                <label class="form-check-label" for="tamCheck">
               Tamamlayıcı Sağlık Sigortası
                </label>
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input type="date" class="form-control" id="tamDate" />
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="tamDes"
                  placeholder="Açıklama Giriniz..."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mt-1">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="checkbox"
                  value=""
                  id="daskCheck"
                />
                <label class="form-check-label" for="daskCheck">
               Dask
                </label>
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input type="date" class="form-control" id="daskDate" />
              </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="daskDes"
                  placeholder="Açıklama Giriniz..."
                />
              </div>
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
            <button type="button" class="btn btn-danger w-25" @click="onSave()">Gönder</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <app-footer></app-footer>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  maxLength,
} from "@vuelidate/validators";

const myRequired = helpers.withMessage("Bu kısım boş olamaz !", required);
const myMaxLength = (max) =>
  helpers.withMessage(`En fazla ${max} karakter olmalı !`, maxLength(max));
const myEmail = helpers.withMessage(
  "Lütfen geçerli bir email giriniz !",
  email
);

export default {
  data() {
    return {
      v$: useVuelidate(),
      userData: {
        name: null,
        surname: null,
        email: null,
        phone: null, 
        sigorta:[], 
        vade_tarih:[],
        aciklama:[], 
      },
    };
  },
  validations() {
    return {
      userData: {
        name: {
          required: myRequired,
        },
        surname: {
          required: myRequired,
        },
        email: {
          required: myRequired,
          email: myEmail,
        },
        phone: {
          required: myRequired,
          maxLength: myMaxLength(11),
        },
      },
    };
  },
  methods: {
    onSave() {
      this.v$.$touch();
      console.log("sigorta:",this.userData.sigorta,"vade tarihi:",this.userData.vade_tarih,"açıklama:",this.userData.aciklama);
    },
  },
};
</script>
