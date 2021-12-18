<template>
    <div class="row mt-3">
        <Cardticle></Cardticle>
        <Members></Members>
    </div>
</template>

<script>
import Cardticle from "@/views/Cardticle.vue";
import Members from "@/views/Members.vue";

export default {
    components: {
        Cardticle,
        Members
    }
}
</script>