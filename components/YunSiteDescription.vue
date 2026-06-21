<script setup lang="ts">
import { useSiteConfig, useValaxyI18n } from 'valaxy'

const siteConfig = useSiteConfig()
const { $t } = useValaxyI18n()
</script>

<template>
  <div v-if="siteConfig.description" class="site-description text-$va-c-text text-sm">
    {{ $t(siteConfig.description) }}
  </div>
</template>

<style>
@import url('https://fonts.googleapis.cn/css2?family=Bitcount+Prop+Single:wght@100..900&display=swap');

.site-description {
  font-family: 'Bitcount Prop Single', sans-serif;
}
</style>
