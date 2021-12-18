<template>
    <div class="row mt-3">
        <div class="col">
            <div class="card">
                <img :src="require('@/assets/images/' + data.image)" class="card-img-top" :alt="data.judul" />
                <div class="card-body">
                    <h2 class="card-title">{{ data.judul }}</h2>
                    <h6 class="card-subtitle mb-3 text-muted">Pertemuan {{ data.pertemuan }}</h6>
                    <div class="card-text mt-2">
                        <div class="mb-3">
                            <h5>{{ data.pembahasanSatu.judul }}</h5>
                            <div v-html="data.pembahasanSatu.isi"></div>
                        </div>
                        <hr>
                        <div class="mb-3">
                            <h5>{{ data.pembahasanDua.judul }}</h5>
                            <ol v-for="(content, index) in data.pembahasanDua.isi" :key="index" class="list-group">
                                <li class="list-group-item mb-2 shadow-sm">
                                    <b>{{ index + 1 }}. {{ content.point }}</b>
                                    <div v-html="content.konten"></div>
                                </li>
                            </ol>
                        </div>
                        <hr>
                        <div class="mb-3">
                            <h5>{{ data.pembahasanTiga.judul }}</h5>
                            <ul v-for="(content, index) in data.pembahasanTiga.isi" :key="index" class="list-group">
                                <li class="list-group-item mb-2 shadow-sm">
                                    <b>{{ index + 1 }}. {{ content.point }}</b>
                                    <div v-html="content.konten"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Members></Members>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { forgery } from '@/assets/data/forgery'
import Members from '@/views/Members.vue'

export default {
    components: {
        Members
    },
    setup() {
        const data = reactive(forgery);
        
        return {
            data
        }
    },
}
</script>