<script setup lang="ts">
import BaseLink from '@/components/BaseLink.vue';
</script>

<template>
  <div class="about">
    <div class="about-content">
        <h1 style="margin-top: 0">Stable UI</h1>
        <div>This tool was originally a front-end for the AI Horde and has since been converted for local generations with the A1111 API. While Stable UI was originally created as a way to explore web APIs and <BaseLink href="https://vuejs.org/">Vue</BaseLink>, it has since evolved into a tool that allows users to easily access Stable Diffusion to create fascinating images!</div><br>
        <div>If you want to help improve this tool, you can find the source code from this modified version on https://github.com/ayunami2000/stable-ui and its original AI Horde version on https://github.com/aqualxx/stable-ui. Feel free to contribute! Message the original author on Discord (aqualxx#5004) or through the <BaseLink href="https://discord.com/channels/781145214752129095/1033312325668708393">Stable-UI Suggestions</BaseLink> thread if you have any problems or questions. If you're feeling quite generous, I'd really appreciate it if you were to <BaseLink href="https://ko-fi.com/aqualxx">buy me a coffee</BaseLink>! Generate some images and enjoy using this tool.</div><br>
        <div>You can find the KoboldAI community and authors of this fork on the <BaseLink href="https://koboldai.org/discord">KoboldAI Discord</BaseLink></div>
        <h2>Helpful Resources</h2>
        <ul>
            <li><BaseLink href="https://lexica.art/">Lexica.art</BaseLink> - A prompt search engine</li>
            <li><BaseLink href="https://publicprompts.art/">Public Prompts</BaseLink> - A collection of prompts for creating unique styles</li>
            <li><BaseLink href="https://openart.ai/promptbook">Promptbook</BaseLink> - A generalized prompting guide</li>
            <li><BaseLink href="https://promptomania.com/stable-diffusion-prompt-builder/">Prompt Mania</BaseLink> - A Stable Diffusion prompt builder</li>
        </ul>
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
