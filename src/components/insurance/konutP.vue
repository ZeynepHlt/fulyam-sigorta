<template>
     <div class="col-md-10 mx-auto">
      <h4 class="text-center">KONUT SİGORTASI TEKLİFİ AL</h4>
      <div class="hline"></div>
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
            <div class="col-md-6 mb-2">
              <label for="tc" class="form-label">TC Kimlik Numaranız*</label>
              <input
                type="number"
                class="form-control"
                id="tc"
                placeholder="TC Kimlik Numaranızı Giriniz..."
                v-model="userData.tc"
                :class="
                  v$.userData.tc.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
              />
              <p
                class="text-err"
                v-for="error of v$.userData.tc.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </div>
            <div class="col-md-6 mb-2">
              <label for="vgnum" class="form-label">Vergi Numaranız</label>
              <input
                type="number"
                class="form-control"
                id="vgnum"
                placeholder="Vergi Numaranızı Giriniz..."
                v-model="userData.vno"
              />
          
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-2">
              <label for="il" class="form-label">İl*</label>
              <select class="custom-select" aria-label="Default select example"
              v-model="userData.il"
                :class="
                  v$.userData.il.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
              >
                <option selected>İl*</option>
                <option value="1">Adana</option>
                <option value="2">Adıyaman</option>
                <option value="3">Afyonkarahisar</option>
                <option value="4">Ağrı</option>
                <option value="5">Amasya</option>
                <option value="6">Ankara</option>
                <option value="7">Antalya</option>
                <option value="8">Artvin</option>
                <option value="9">Aydın</option>
                <option value="10">Balıkesir</option>
                <option value="11">Bilecik</option>
                <option value="12">Bingöl</option>
                <option value="13">Bitlis</option>
                <option value="14">Bolu</option>
                <option value="15">Burdur</option>
                <option value="16">Bursa</option>
                <option value="17">Çanakkale</option>
                <option value="18">Çankırı</option>
                <option value="19">Çorum</option>
                <option value="20">Denizli</option>
                <option value="21">Diyarbakır</option>
                <option value="22">Edirne</option>
                <option value="23">Elazığ</option>
                <option value="24">Erzincan</option>
                <option value="25">Erzurum</option>
                <option value="26">Eskişehir</option>
                <option value="27">Gaziantep</option>
                <option value="28">Giresun</option>
                <option value="29">Gümüşhane</option>
                <option value="30">Hakkari</option>
                <option value="31">Hatay</option>
                <option value="32">Isparta</option>
                <option value="33">Mersin</option>
                <option value="34">İstanbul</option>
                <option value="35">İzmir</option>
                <option value="36">Kars</option>
                <option value="37">Kastamonu</option>
                <option value="38">Kayseri</option>
                <option value="39">Kırklareli</option>
                <option value="40">Kırşehir</option>
                <option value="41">Kocaeli</option>
                <option value="42">Konya</option>
                <option value="43">Kütahya</option>
                <option value="44">Malatya</option>
                <option value="45">Manisa</option>
                <option value="46">Kahramanmaraş</option>
                <option value="47">Mardin</option>
                <option value="48">Muğla</option>
                <option value="49">Muş</option>
                <option value="50">Nevşehir</option>
                <option value="51">Niğde</option>
                <option value="52">Ordu</option>
                <option value="53">Rize</option>
                <option value="54">Sakarya</option>
                <option value="55">Samsun</option>
                <option value="56">Siirt</option>
                <option value="57">Sinop</option>
                <option value="58">Sivas</option>
                <option value="59">Tekirdağ</option>
                <option value="60">Tokat</option>
                <option value="61">Trabzon</option>
                <option value="62">Tunceli</option>
                <option value="63">Şanlıurfa</option>
                <option value="64">Uşak</option>
                <option value="65">Van</option>
                <option value="66">Yozgat</option>
                <option value="67">Zonguldak</option>
                <option value="68">Aksaray</option>
                <option value="69">Bayburt</option>
                <option value="70">Karaman</option>
                <option value="71">Kırıkkale</option>
                <option value="72">Batman</option>
                <option value="73">Şırnak</option>
                <option value="74">Bartın</option>
                <option value="75">Ardahan</option>
                <option value="76">Iğdır</option>
                <option value="77">Yalova</option>
                <option value="78">Karabük</option>
                <option value="79">Kilis</option>
                <option value="80">Osmaniye</option>
                <option value="81">Düzce</option>
              </select>
              <p
                class="text-err"
                v-for="error of v$.userData.il.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </div>
            <div class="col-md-6 mb-2">
              <label for="ilce" class="form-label">İlçe*</label>
              <select class="custom-select" aria-label="Default select example"
              v-model="userData.ilce"
                :class="
                  v$.userData.ilce.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
              >
                <option selected>ilçe*</option>
                <option value="">Önce İl Seçiniz</option>
              </select>
              <p
                class="text-err"
                v-for="error of v$.userData.ilce.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="mahalle" class="form-label">Mahalle/Semt*</label>
                <input
                  type="text"
                  class="form-control"
                  id="mahalle"
                  placeholder="Mahalle/Semt Giriniz..."
                  v-model="userData.mahalle"
                :class="
                  v$.userData.mahalle.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
                />
                <p
                class="text-err"
                v-for="error of v$.userData.mahalle.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="cadde" class="form-label">Cadde/Sokak*</label>
                <input
                  type="text"
                  class="form-control"
                  id="cadde"
                  placeholder="Cadde/Sokak Giriniz..."
                  v-model="userData.cadde"
                :class="
                  v$.userData.cadde.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
                />
                <p
                class="text-err"
                v-for="error of v$.userData.cadde.$errors"
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
                <label for="site" class="form-label">Site</label>
                <input
                  type="text"
                  class="form-control"
                  id="site"
                  placeholder="Site Adı Giriniz..."
                  v-model="userData.site"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="apartman" class="form-label">Apartman</label>
                <input
                  type="text"
                  class="form-control"
                  id="apartman"
                  placeholder="Apartman Adı Giriniz..."
                  v-model="userData.apartman"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="kat" class="form-label">Kat</label>
                <input
                  type="number"
                  class="form-control"
                  id="kat"
                  placeholder="Kat No Giriniz..."
                  v-model="userData.kat"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="daire" class="form-label">Daire No</label>
                <input
                  type="number"
                  class="form-control"
                  id="daire"
                  placeholder="Daire No Giriniz..."
                  v-model="userData.daireno"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="metre" class="form-label"
                  >Metrekare (M<sup>2</sup>) Bilgisi</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="metre"
                  placeholder="Metrekare Bilgisi Giriniz..."
                  v-model="userData.metrekare"
                />
              </div>
            </div>
            <div class="col-md-6">
              <label for="meslek" class="form-label">Mesleğiniz</label>
              <select class="custom-select" aria-label="Default select example"
              v-model="userData.meslek"
              >
                <option selected>Mesleğiniz</option>
                <option value="Askeri Personel">Askeri Personel</option>
                <option value="AŞ / Holding &Ccedil;alışanı">
                  AŞ / Holding &Ccedil;alışanı
                </option>
                <option value="Diyanet Personeli">Diyanet Personeli</option>
                <option value="Emekli">Emekli</option>
                <option value="Finans Personeli">Finans Personeli</option>
                <option value="Kamu Personeli">Kamu Personeli</option>
                <option value="Profesyonel Sporcu">Profesyonel Sporcu</option>
                <option value="Yargı Personeli">Yargı Personeli</option>
                <option value="&Ouml;zel Sağlık Personeli">
                  &Ouml;zel Sağlık Personeli
                </option>
                <option value="&Ouml;ğretmen / Akademisyen">
                  &Ouml;ğretmen / Akademisyen
                </option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="bina" class="form-label"
                  >Talep Edilen Bina Bedeli</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="bina"
                  placeholder="Fiyat Bilgisi Giriniz(TL)..."
                  v-model="userData.binabedel"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="esya" class="form-label"
                  >Talep Edilen Eşya Bedeli</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="esya"
                  placeholder="Fiyat Bilgisi Giriniz(TL)..."
                  v-model="userData.esyabedel"
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
                <button type="button" @click="onSave()" class="btn btn-danger w-25">
              Teklif İste
            </button>
            </div>
        </div>
      </div>
 
     </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  numeric,
  email,
  helpers,
  maxLength,
  minLength
} from "@vuelidate/validators";

const myRequired = helpers.withMessage("Bu kısım boş olamaz !", required);
const myMaxLength = (max) =>
  helpers.withMessage(`En fazla ${max} karakter olmalı !`, maxLength(max));
  const myMinLength = (min) =>
  helpers.withMessage(`En az ${min} karakter olmalı !`, minLength(min));
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
        tc: null,
        vno: null,
        email: null,
        phone: null,
        il: null,
        ilce: null,
        mahalle: null,
        cadde: null,
        site:null,
        apartman:null,
        kat:null,
        daireno:null,
        metrekare:null,
        meslek:null,
        binabedel:null,
        esyabedel:null,
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
        tc: {
          required: myRequired,
          numeric,
          maxLength: myMaxLength(11),
          minLength:myMinLength(11)
        },
        vno: { numeric },
        email: {
          email: myEmail,
        },
        phone: {
          required: myRequired,
          maxLength: myMaxLength(11),
          minLength:myMinLength(10)
        },
        il: {
          required: myRequired,
        },
        ilce: {
          required: myRequired,
        },
        mahalle: {
          required: myRequired,
        },
        cadde: {
          required: myRequired,
        },
      },
    };
  },
  methods: {
    onSave() {
      this.v$.$touch();
    },
  },
};
</script>