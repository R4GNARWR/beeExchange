<template>
    <HomeMain :selected="selectedType" @update-selected="updateType"></HomeMain>
    <HomeOffers :selected="selectedType"></HomeOffers>
    <HomeCompanies :selected="selectedType"></HomeCompanies>
    <HomeResume :selected="selectedType"></HomeResume>
    <HomeQuestion></HomeQuestion>
</template>
<script setup>
import { ref } from 'vue'
const selectedType = ref('employee')

const updateType = (value) => {
    selectedType.value = value
}
</script>
<style lang="">
    
</style>