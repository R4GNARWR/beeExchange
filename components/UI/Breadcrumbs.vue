<template>
    <nav class="breadcrumbs">
        <nuxt-link to="/" class="breadcrums-item">Главная<span> / </span></nuxt-link>
        <template v-if="routes && routes.length">
            <nuxt-link
            class="breadcrums-item"
            v-for="item in routes"
            :key="item.path"
            :to="item.path"
            >
            {{ item.name }}
            <span> / </span>
        </nuxt-link>
    </template>
</nav>
</template>

<script setup>

const props = defineProps({
    routes: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="scss">
.breadcrumbs {
    width: 100%;
    padding: 2.4rem;
    border-radius: 1.2rem;
    background: #FFFFFF;
}
.breadcrums-item {
    color: $description;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5em;
    text-decoration: none;
    &.router-link-active {
        color: $primary-text;
        pointer-events: none;
        span {
            display: none;
        }
    }
}
</style>