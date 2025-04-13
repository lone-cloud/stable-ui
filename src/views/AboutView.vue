<script setup lang="ts">
import BaseLink from '@/components/BaseLink.vue';
</script>

<template>
  <div class="about">
    <div class="about-content">
        <h1 style="margin-top: 0">Stable UI</h1>
        <div>This tool was originally a front-end for the AI Horde and has since been converted for local generations with the A1111 API, such as in KoboldCpp.</div><br>
        <div>If you want to help improve this tool, you can find the currently maintained source code from this modified version on https://github.com/LostRuins/stable-ui and https://github.com/henk717/stable-ui, which is based off https://github.com/ayunami2000/stable-ui, which derives from the original AI Horde version on https://github.com/aqualxx/stable-ui (Original author aqualxx#5004). Feel free to contribute!</div><br>
        <div>You can find the KoboldAI community and authors of this fork on the <BaseLink href="https://koboldai.org/discord">KoboldAI Discord</BaseLink></div>
    </div>
  </div>
</template>

<style scoped>
h3, h1 {
    margin-bottom: 0;
}

.about {
    width: 100%;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
}

.about-content {
    width: 60%
}

.faq {
    font-size: 1.05rem
}

@media only screen and (max-width: 1000px) {
    .about-content {
        width: 80%;
    }
}

@media only screen and (max-width: 700px) {
    .about-content {
        width: 100%;
    }
}
</style>
