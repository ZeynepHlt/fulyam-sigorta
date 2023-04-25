<template>
  <div class="col-md-10 mx-auto"> 
      <h4 class="text-center">SEYAHAT SİGORTASI TEKLİFİ AL</h4>
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
          <div class="row">
            <label class="form-label col-12">Seyahat Edilecek Bölge*</label>
            <div class="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="yurtici"
                  v-model="showFirst"
                  value="true"
                />
                <label class="form-check-label" for="yurtici"> Yurtiçi </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="yurtdisi"
                  v-model="showFirst"
                     value="false"
                />
                <label class="form-check-label" for="yurtdisi">
                  Yurtdışı
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3" v-if="showFirst === 'true'">
              <label for="il" class="form-label">İl*</label>
              <select class="custom-select" aria-label="Default select example"
              v-model="userData.yi_il"
                :class="
                  v$.userData.yi_il.$error === true
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
                v-for="error of v$.userData.yi_il.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </div>
            <div class="col-md-6 mb-3" v-else >
              <label for="ulke" class="form-label">Ülke*</label>
              <select class="custom-select" aria-label="Default select example"
              v-model="userData.yd_ülke"
                :class="
                  v$.userData.yd_ülke.$error === true
                    ? 'input-err'
                    : 'form-control '
                "
              >
                <option value="Afganistan">Afganistan</option>
                <option value="Arnavutluk">Arnavutluk</option>
                <option value="Cezayir">Cezayir</option>
                <option value="Amerikan Samoasi">Amerikan Samoasi</option>
                <option value="Andorra">Andorra</option>
                <option value="Angora">Angora</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarktika">Antarktika</option>
                <option value="Antigua ve Barbuda">Antigua ve Barbuda</option>
                <option value="Arjantin">Arjantin</option>
                <option value="Ermenistan">Ermenistan</option>
                <option value="Aruba">Aruba</option>
                <option value="Avustralya">Avustralya</option>
                <option value="Avusturya">Avusturya</option>
                <option value="Azerbaycan">Azerbaycan</option>
                <option value="Bahamalar">Bahamalar</option>
                <option value="Bahreyn">Bahreyn</option>
                <option value="Banglades">Banglades</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belçika">Belçika</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivya">Bolivya</option>
                <option value="Bosna-Hersek">Bosna-Hersek</option>
                <option value="Botsvana">Botsvana</option>
                <option value="Brezilya">Brezilya</option>
                <option value="Ingiliz Virgin Adalari">
                  Ingiliz Virgin Adalari
                </option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaristan">Bulgaristan</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Kamboçya">Kamboçya</option>
                <option value="Kamerun">Kamerun</option>
                <option value="Kanada">Kanada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Adalari">Cayman Adalari</option>
                <option value="Orta Afrika">Orta Afrika</option>
                <option value="Chad">Chad</option>
                <option value="Sili">Sili</option>
                <option value="Çin">Çin</option>
                <option value="Kolombiya">Kolombiya</option>
                <option value="Komorlar">Komorlar</option>
                <option value="Kongo">Kongo</option>
                <option value="Kongo (Dem. Cumhuriyeti)">
                  Kongo (Dem. Cumhuriyeti)
                </option>
                <option value="Cook Adalari">Cook Adalari</option>
                <option value="Kostarika">Kostarika</option>
                <option value="Hirvatistan">Hirvatistan</option>
                <option value="Küba">Küba</option>
                <option value="Kibris">Kibris</option>
                <option value="Çek Cumhuriyeti">Çek Cumhuriyeti</option>
                <option value="Danimarka">Danimarka</option>
                <option value="Cibuti">Cibuti</option>
                <option value="Dominika">Dominika</option>
                <option value="Dominik Cumhuriyeti">Dominik Cumhuriyeti</option>
                <option value="Dogu Timor">Dogu Timor</option>
                <option value="Ekvador">Ekvador</option>
                <option value="Misir">Misir</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Ekvator Ginesi">Ekvator Ginesi</option>
                <option value="Eritre">Eritre</option>
                <option value="Estonya">Estonya</option>
                <option value="Etiyopya">Etiyopya</option>
                <option value="Ext. Territ. Avustralya">
                  Ext. Territ. Avustralya
                </option>
                <option value="Falkland Adalari">Falkland Adalari</option>
                <option value="Faroe Adalari">Faroe Adalari</option>
                <option value="Fiji">Fiji</option>
                <option value="Finlandiya">Finlandiya</option>
                <option value="Fransa">Fransa</option>
                <option value="Fransiz Guyanasi">Fransiz Guyanasi</option>
                <option value="Fransiz Polinezyasi">Fransiz Polinezyasi</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambiya">Gambiya</option>
                <option value="Georgia">Georgia</option>
                <option value="Almanya">Almanya</option>
                <option value="Gana">Gana</option>
                <option value="Cebelitarik">Cebelitarik</option>
                <option value="Yunanistan">Yunanistan</option>
                <option value="Grönland">Grönland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey ve Alderney">
                  Guernsey ve Alderney
                </option>
                <option value="Gine">Gine</option>
                <option value="Gine Bissau">Gine Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Macaristan">Macaristan</option>
                <option value="Izlanda">Izlanda</option>
                <option value="Hindistan">Hindistan</option>
                <option value="Endonezya">Endonezya</option>
                <option value="Iran">Iran</option>
                <option value="Irak">Irak</option>
                <option value="Irlanda">Irlanda</option>
                <option value="Israil">Israil</option>
                <option value="Italya">Italya</option>
                <option value="Fildisi Sahili">Fildisi Sahili</option>
                <option value="Jamaika">Jamaika</option>
                <option value="Japonya">Japonya</option>
                <option value="Jarse">Jarse</option>
                <option value="Ürdün">Ürdün</option>
                <option value="Kazakistan">Kazakistan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kore (Kuzey)">Kore (Kuzey)</option>
                <option value="Kore (Güney)">Kore (Güney)</option>
                <option value="Kuveyt">Kuveyt</option>
                <option value="Kirgizistan">Kirgizistan</option>
                <option value="Laos">Laos</option>
                <option value="Letonya">Letonya</option>
                <option value="Lübnan">Lübnan</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberya">Liberya</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Litvanya">Litvanya</option>
                <option value="Lüksemburg">Lüksemburg</option>
                <option value="Makedonya">Makedonya</option>
                <option value="Madagaskar">Madagaskar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malezya">Malezya</option>
                <option value="Maldivler">Maldivler</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Man Adasi">Man Adasi</option>
                <option value="Marshall Adalari">Marshall Adalari</option>
                <option value="Martinik">Martinik</option>
                <option value="Moritanya">Moritanya</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Meksika">Meksika</option>
                <option value="Mikronezya">Mikronezya</option>
                <option value="Moldova">Moldova</option>
                <option value="Monako">Monako</option>
                <option value="Mogolistan">Mogolistan</option>
                <option value="Fas">Fas</option>
                <option value="Mozambik">Mozambik</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibya">Namibya</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Hollanda">Hollanda</option>
                <option value="Hollanda Antilleri">Hollanda Antilleri</option>
                <option value="Yeni Kaledonya">Yeni Kaledonya</option>
                <option value="Yeni Zelanda">Yeni Zelanda</option>
                <option value="Nikaragua">Nikaragua</option>
                <option value="Nijer">Nijer</option>
                <option value="Nijerya">Nijerya</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk">Norfolk</option>
                <option value="Kuzey Mariana Adalari">
                  Kuzey Mariana Adalari
                </option>
                <option value="Umman">Umman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Filistin">Filistin</option>
                <option value="Panama">Panama</option>
                <option value="Papua Yeni Gine">Papua Yeni Gine</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Filipinler">Filipinler</option>
                <option value="Polonya">Polonya</option>
                <option value="Portekiz">Portekiz</option>
                <option value="Porto Riko">Porto Riko</option>
                <option value="Qatar">Qatar</option>
                <option value="Réunion">Réunion</option>
                <option value="Romanya">Romanya</option>
                <option value="Rusya">Rusya</option>
                <option value="Ruanda">Ruanda</option>
                <option value="Sahara">Sahara</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts ve Nevis">
                  Saint Kitts ve Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre ve Miquelon">
                  Saint Pierre ve Miquelon
                </option>
                <option value="St Vincent ve Grenadinler">
                  St Vincent ve Grenadinler
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome ve Principe">
                  Sao Tome ve Principe
                </option>
                <option value="Suudi Arabistan">Suudi Arabistan</option>
                <option value="Senegal">Senegal</option>
                <option value="Sirbistan ve Karadag">
                  Sirbistan ve Karadag
                </option>
                <option value="Seysel Adalari">Seysel Adalari</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapur">Singapur</option>
                <option value="Slovakya">Slovakya</option>
                <option value="Slovenya">Slovenya</option>
                <option value="Smaller Territories of the UK">
                  Smaller Territories of the UK
                </option>
                <option value="Solomon Adalari">Solomon Adalari</option>
                <option value="Somali">Somali</option>
                <option value="Güney Afrika">Güney Afrika</option>
                <option value="Ispanya">Ispanya</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Surinam">Surinam</option>
                <option value="Svalbard ve Jan Mayen">
                  Svalbard ve Jan Mayen
                </option>
                <option value="Svaziland">Svaziland</option>
                <option value="Isveç">Isveç</option>
                <option value="Isviçre">Isviçre</option>
                <option value="Suriye">Suriye</option>
                <option value="Tayvan">Tayvan</option>
                <option value="Tacikistan">Tacikistan</option>
                <option value="Tanzanya">Tanzanya</option>
                <option value="Terres Australes">Terres Australes</option>
                <option value="Tayland">Tayland</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad ve Tobago">Trinidad ve Tobago</option>
                <option value="Tunus">Tunus</option>
                <option value="Türkiye">Türkiye</option>
                <option value="Türkmenistan">Türkmenistan</option>
                <option value="Turks ve Caicos Adalari">
                  Turks ve Caicos Adalari
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukrayna">Ukrayna</option>
                <option value="Birlesik Arap Emirlikleri">
                  Birlesik Arap Emirlikleri
                </option>
                <option value="Ingiltere">Ingiltere</option>
                <option value="Amerika Birlesik Devletleri">
                  Amerika Birlesik Devletleri
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Özbekistan">Özbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatikan">Vatikan</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Virgin Adalari">Virgin Adalari</option>
                <option value="Wallis ve Futuna">Wallis ve Futuna</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambiya">Zambiya</option>
                <option value="Zimbabve">Zimbabve</option>
              </select>
              <p
                class="text-err"
                v-for="error of v$.userData.yd_ülke.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="kisisayisi" class="form-label">Kişi Sayısı</label>
                <input
                  type="number"
                  class="form-control"
                  id="kisisayisi"
                  placeholder="Soyadınızı Giriniz..."
                  v-model="userData.kisi"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="bastarih" class="form-label"
                  >Başlangıç Tarihi</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="bastarih"
                  placeholder="Vergi Numaranızı Giriniz..."
                  v-model="userData.bas_tarih"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="bittarih" class="form-label">Bitiş Tarihi</label>
                <input
                  type="date"
                  class="form-control"
                  id="bittarih"
                  placeholder="Vergi Numaranızı Giriniz..."
                  v-model="userData.bit_tarih"
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
                <button type="button" class="btn btn-danger w-25" @click="onSave()">
              Teklif İste
            </button>
            </div>
        </div>
      </div>
    </div>
</template>
<!-- selected:null -- select ler birbirine bağlı olduğu için seçilen her optionda diğer selectte farklı değerler yükleniyor. veritabanından çekilse daha iyi olar(v-model="selected") ile yapabiliriz -->
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
        yi_il:null,
        yd_ülke:null,
        kisi:null,
        bas_tarih:null,
        bit_tarih:null,
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
        yi_il:{
          required: myRequired,
        },
        yd_ülke:{
          required: myRequired,
        }
      },
    };
  },
  methods: {
    onSave() {
      this.v$.$touch();
    },
  },
created(){
    this.showFirst="true"
  }
}
</script>