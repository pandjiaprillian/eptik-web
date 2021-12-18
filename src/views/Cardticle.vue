<template>
    <div class="col-md-8">
        <div class="card mb-3">
            <img
                src="@/assets/images/infringements-of-privacy.jpg"
                class="card-img-top"
                alt="Infringements Of Privacy"
            />
            <div class="card-body">
                <h5 class="card-title">Infringements Of Privacy</h5>
                <p class="card-text">
                    Kejahatan ini ditujukan terhadap informasi seseorang yang
                    merupakan hal yang sangat pribadi dan rahasia. Kejahatan ini
                    biasanya ditujukan terhadap keterangan pribadi seseorang
                    yang tersimpan.
                </p>
                <router-link :to="{ name: 'privacy' }"  class="text-decoration-none">Read More</router-link>
            </div>
        </div>
        <div class="card mb-3">
            <img
                src="@/assets/images/data-forgery.jpg"
                class="card-img-top"
                alt="Data Forgery"
            />
            <div class="card-body">
                <h5 class="card-title">Data Forgery</h5>
                <p class="card-text">
                    Data Forgery merupakan kejahatan dengan memalsukan data pada
                    dokumen-dokumen penting yang tersimpan sebagai scripless
                    document melalui Internet.
                </p>
                <router-link :to="{ name: 'forgery' }"  class="text-decoration-none">Read More</router-link>
            </div>
        </div>
        <div class="card mb-3">
            <img
                src="@/assets/images/cyber-espionage.jpg"
                class="card-img-top"
                alt="Cyber Espionage"
            />
            <div class="card-body">
                <h5 class="card-title">Cyber Espionage</h5>
                <p class="card-text">
                    Cyber memata-matai atau Cyber Espionage adalah tindakan atau
                    praktek memperoleh rahasia tanpa izin dari pemegang
                    informasi (pribadi, sensitif, kepemilikan atau rahasia
                    alam), dari individu, pesaing, saingan, kelompok, pemerintah
                    dan musuh
                </p>
                <router-link :to="{ name: 'espionage' }"  class="text-decoration-none">Read More</router-link>
            </div>
        </div>
    </div>
</template>