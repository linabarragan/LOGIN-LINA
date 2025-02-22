<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuthLayout from '@/layout/AuthLayout.vue'
import WireFrame from '@/layout/WireFrame.vue'

const route = useRoute()
const layouts = { AuthLayout, WireFrame }
const layout = computed(() => layouts[route.meta.layout] || AuthLayout)
</script>
