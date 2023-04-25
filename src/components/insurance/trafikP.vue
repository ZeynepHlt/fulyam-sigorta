<template>
  <div class="col-md-10 mx-auto">
    <h4 class="text-center">TRAFİK SİGORTASI TEKLİFİ AL</h4>
    <div class="hline"></div>
    <div class="offer-intro">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="name" class="form-label">Adınız*</label>
              <input type="text" class="form-control" id="name" placeholder="Adınızı Giriniz..." v-model="userData.name"
                :class="
                  v$.userData.name.$error === true
                    ? 'input-err'
                    : 'form-control '
                " />
              <p class="text-err" v-for="error of v$.userData.name.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="surname" class="form-label">Soyadınız*</label>
              <input type="text" class="form-control" id="surname" placeholder="Soyadınızı Giriniz..."
                v-model="userData.surname" :class="
                  v$.userData.surname.$error === true
                    ? 'input-err'
                    : 'form-control '
                " />
              <p class="text-err" v-for="error of v$.userData.surname.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="tc" class="form-label">TC Kimlik Numaranız*</label>
              <input type="number" class="form-control" id="tc" placeholder="TC Kimlik Numaranızı Giriniz..."
                v-model="userData.tc" :class="
                  v$.userData.tc.$error === true ? 'input-err' : 'form-control '
                " />
              <p class="text-err" v-for="error of v$.userData.tc.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="vgnum" class="form-label">Vergi Numaranız</label>
              <input type="number" class="form-control" id="vgnum" placeholder="Vergi Numaranızı Giriniz..."
                v-model="userData.vno" :class="
                  v$.userData.vno.$error === true
                    ? 'input-err'
                    : 'form-control '
                " />
              <p class="text-err" v-for="error of v$.userData.vno.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <p hidden>{{ onChange }}</p>
            <label for="aracmarka" class="form-label">Araç Markanız*</label>
            <select class="custom-select" aria-label="Default select example" v-model="userData.aracmarka" :class="
              v$.userData.aracmarka.$error === true
                ? 'input-err'
                : 'form-control '
            ">
              <option selected>Araç markanızı seçiniz...</option>
              <option v-for="arac in araclar" :key="arac" :value="arac.araclar_id">{{ arac.araclar_name }}</option>
            </select>

            <p class="text-err" v-for="error of v$.userData.aracmarka.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
          <div class="col-md-6 mb-3">
            <label for="aracmodeli" class="form-label">Araç Modeliniz*</label>
            <select class="custom-select" aria-label="Default select example" v-model="userData.aracmodel" :class="
              v$.userData.aracmodel.$error === true
                ? 'input-err'
                : 'form-control '
            ">
              <option selected>Araç Modelinizi Seçiniz...</option>
              <option v-for="model in change" :key="model" :value="model.model_id">{{ model.model_name }}</option>

            </select>
            <p class="text-err" v-for="error of v$.userData.aracmodel.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="aracyili" class="form-label">Araç Yılı*</label>
            <select class="custom-select" aria-label="Default select example" v-model="userData.aracyil" :class="
              v$.userData.aracyil.$error === true
                ? 'input-err'
                : 'form-control '
            ">
              <option selected>Araç Yılınızı Seçiniz...</option>
              <option v-for="y in yil" :key="y" :value="y.yil">{{ y.yil }}</option>
            </select>
            <p class="text-err" v-for="error of v$.userData.aracyil.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
          <div class="col-md-6 mb-3">
            <label for="aracyili" class="form-label">Mesleğiniz</label>
            <select class="custom-select" aria-label="Default select example" v-model="userData.meslek">
              <option selected>Mesleğinizi Seçiniz...</option>
              <option v-for="mslk in meslek" :key="mslk" :value="mslk.meslek_id">{{ mslk.meslek_name }}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-none">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="plakali" v-model="showFirst"
                value="true" />
              <label class="form-check-label" for="plakali"> Plakalı </label>
            </div>
          </div>
          <div class="col-md-6 d-none">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="plakasiz" v-model="showFirst"
                value="false" />
              <label class="form-check-label" for="plakasiz"> Plakasız </label>
            </div>
          </div>
        </div>
        <div class="row" v-if="showFirst === 'true'">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="plaka" class="form-label">Plaka*</label>
              <input type="text" class="form-control" id="plaka" placeholder="Plaka Giriniz..." v-model="userData.plaka"
                :class="
                  v$.userData.plaka.$error === true
                    ? 'input-err'
                    : 'form-control '
                " />
              <p class="text-err" v-for="error of v$.userData.plaka.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div class="col-md-4 popover-wrapper">
            <div class="mb-3">
              <label for="serino" class="form-label">Ruh.Seri ve Sıra No*</label>
              <font-awesome-icon icon="fa-regular fa-circle-question" class="fa-i" @click="simple = !simple" />

              <input type="number" class="form-control" id="serino" placeholder="Ruh.Seri ve Sıra No Giriniz.."
                v-model="userData.serino" :class="
                  v$.userData.serino.$error === true
                    ? 'input-err'
                    : 'form-control '
                " />
              <p class="text-err" v-for="error of v$.userData.serino.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
            <div class="popover rs" v-show="simple">
              <img src="@/assets/ruhserino.jpg" alt="" />
            </div>
          </div>

          <div class="col-md-4 popover-wrapper">
            <div class="mb-3">
              <label for="asbis" class="form-label">Asbis Referans No *</label>
              <font-awesome-icon icon="fa-regular fa-circle-question" class="fa-i" @click="simple1 = !simple1" />
              <input type="number" class="form-control" id="asbis" placeholder="Asbis Referans No Giriniz..."
                v-model="userData.asbis" :class="
                  v$.userData.asbis.$error === true
                    ? 'input-err'
                    : 'form-control '
                " />
              <p class="text-err" v-for="error of v$.userData.asbis.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
            <div class="popover as" v-show="simple1">
              <img src="@/assets/asbisno.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="email" class="form-label">Email Adresinizi Giriniz</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="userData.email"
                :class="
                  v$.userData.email.$error === true
                    ? 'input-err'
                    : 'form-control '
                " />
              <p class="text-err" v-for="error of v$.userData.email.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="phone" class="form-label">Telefon Numaranız*</label>
              <input type="number" class="form-control" id="phone" placeholder="05555555555" v-model="userData.phone"
                :class="
                  v$.userData.phone.$error === true
                    ? 'input-err'
                    : 'form-control '
                " />
              <p class="text-err" v-for="error of v$.userData.phone.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>

        <div class="form-check">
          <input v-model="userData.teklif" class="form-check-input mt-2" type="checkbox" value="" id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">
            Bu form ile "Kasko Teklifi" de almak istiyorum
          </label>
        </div>


        <div class="form-check">
          <input v-model="userData.kampanya" class="form-check-input mt-2" type="checkbox" value="" id="defaultCheck2" />
          <label class="form-check-label" for="defaultCheck2">
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
<script>
import axios from "axios"

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

      simple1: false,
      simple: false,
      showFirst: null,
      v$: useVuelidate(),
      userData: {
        name: null,
        surname: null,
        tc: null,
        vno: null,
        email: null,
        phone: null,
        plaka: null,
        serino: null,
        asbis: null,
        aracmarka: null,
        aracmodel: null,
        aracyil: null,
        meslek: null,
        teklif: null,
        kampanya: null,
        cins: "Trafik"
      },
      araclar: [],
      arac_model: [],
      change: [],
      meslek: [],
      yil: [],
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
        plaka: {
          required: myRequired,
        },
        serino: {
          required: myRequired,
        },
        asbis: {
          required: myRequired,
        },
        aracmarka: {
          required: myRequired,
        },
        aracmodel: {
          required: myRequired,
        },
        aracyil: {
          required: myRequired,
        }
      },
    };
  },
  methods: {
    onSave() {
      this.v$.$touch();
      axios.post("http://localhost:3000/userData", this.userData).then((response) => {
        console.log("sonuc:",response)
      }).catch(err => console.log(err))

    },
  },
  created() {
    axios.get('http://localhost:3000/araclar').then(response => {
      this.araclar = response.data;
    });
    axios.get('http://localhost:3000/arac_model').then(response => {
      this.arac_model = response.data;
    });
    axios.get('http://localhost:3000/meslek').then(response => {
      this.meslek = response.data;
    });
    axios.get('http://localhost:3000/yil').then(response => {
      this.yil = response.data;
    });
    this.showFirst = "true";
  },
  // onChange() {
  //   if (this.change.length > 0) {
  //     this.change.splice(0);
  //   }
  //   this.arac_model.forEach(model => {
  //     if (model.model_arac_id == this.userData.aracmarka) {
  //       this.change.push(model);
  //     }
  //   });
  // },
  computed: {
    onChange() {
      if (this.change.length > 0) {
        //this.change=[];
      }
      this.arac_model.forEach(model => {
        if (model.model_arac_id == this.userData.aracmarka) {
          this.change.push(model);
        }
      });
      return 0;
    },
  }
};
</script>

<!-- phone:{required:helpers.withMessage("Telefon Kısmı Boş Olamaz !",required),numeric,maxLength:maxLength(11)}, -->
<!-- minLength:minLength(10) -->
