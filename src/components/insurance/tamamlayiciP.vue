<template>
  <div class="col-md-10 mx-auto">
  <h4 class="text-center">TAMAMLAYICI SAĞLIK SİGORTASI TEKLİFİ AL</h4>
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
        <div class="col-md-6">
          <div class="mb-3">
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
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="vgnum" class="form-label">Vergi Numaranız</label>
            <input
              type="number"
              class="form-control"
              id="vgnum"
              placeholder="Vergi Numaranızı Giriniz..."
              v-model="userData.vno"
            :class="
              v$.userData.vno.$error === true
                ? 'input-err'
                : 'form-control '
            "
            />
            <p
            class="text-err"
            v-for="error of v$.userData.vno.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col-md-6">
          <div class="row">
            <label class="form-label col-12">Poliçe Tipi*</label>
            <div class="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="radio"
                  name="poliçe"
                  id="ferdi"
                  v-model="userData.p_tipi"
               
                :class="
                v$.userData.p_tipi.$error === true
                ? 'input-err'
                : ' '
                  "
                />
                <label class="form-check-label" for="ferdi">
                  Ferdi Poliçe
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="radio"
                  name="poliçe"
                  id="aile"
                  v-model="userData.p_tipi"
                  :class="
                v$.userData.p_tipi.$error === true
                ? 'input-err'
                : ' '
                  "
                />
                <label class="form-check-label" for="aile">
                  Aile Poliçe
                </label>
              </div>
            </div>
   
          </div>
          <p
            class="text-err"
            v-for="error of v$.userData.p_tipi.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>

          
        </div>
        <div class="col-md-6">
          <div class="row">
            <label class="form-label col-12">Cinsiyet*</label>
            <div class="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="radio"
                  name="cinsiyet"
                  id="kadin"
                  v-model="userData.cinsiyet"
                  :class="
              v$.userData.cinsiyet.$error === true
                ? 'input-err'
                : ''
                 "
                />
                <label class="form-check-label" for="kadin"> Kadın </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input mt-2"
                  type="radio"
                  name="cinsiyet"
                  id="erkek"
                  v-model="userData.cinsiyet"
                  :class="
              v$.userData.cinsiyet.$error === true
                ? 'input-err'
                : ''
                 "
                />
                <label class="form-check-label" for="erkek"> Erkek </label>
              </div>
            </div>
      
          </div>
          <p
            class="text-err"
            v-for="error of v$.userData.cinsiyet.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
 
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="dogumtarih" class="form-label"
              >Doğum Tarihiniz</label
            >
            <input type="date" class="form-control" id="dogumtarih" />
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
            <button type="button" class="btn btn-danger w-25" @click="onSave()">
          Teklif İste
        </button>
        </div>
    </div>
  </div>
</div>
</template>
<!-- poliçe ve cinsiyet seçerken ilk tıklamada olmuyo -->
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

export default{
data(){
return{
  showFirst:null,
  v$: useVuelidate(),
  userData: {
    name: null,
    surname: null,
    tc: null,
    vno: null,
    email: null,
    phone: null,
   p_tipi:null,
   cinsiyet:null,
  },
 
}
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
    p_tipi:{
      required: myRequired,
    },
    cinsiyet:{
      required: myRequired,
    }
  },
};
},
methods: {
onSave() {
  this.v$.$touch();
  // this.validateForm();
},
// validateForm() 
//   {
//                 if (!this.userData.p_tipi) {
//                     alert('please select an option');
//                     return false;
//                 }
//                 alert('Form Submitted')
//                 return true;
//   }
},
created(){
this.showFirst="true"
}
}
</script>