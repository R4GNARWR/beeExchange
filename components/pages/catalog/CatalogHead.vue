<template>
    <div class="catalog-head">
        <div class="catalog-head__label">
            Работа и вакансии
        </div>
        <div class="catalog-head__search-settings">
            <SearchBar placeholder="Дизайнер одежды"></SearchBar>
            <MainSelect placeholder="По соответсвтию" :list="[{name:'По соответсвтию', value: '1'},{name:'По уменьшению', value: '2'}]" item-label="name" item-value="value"></MainSelect>
        </div>
        <div class="catalog-head__result">
            Найдено 265 вакансий
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
.catalog-head {
    margin-top: 4rem;
    padding: 2.4rem;
    border-radius: 1.2rem;
    background-color: #FFFFFF;
}
.catalog-head__label {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    line-height: 1.33em;
    font-weight: bold;
}
.catalog-head__search-settings {
    margin-bottom: 1.6rem;
    display: flex;
    column-gap: 1.2rem;
    .main-input__wrap
    {
        flex-grow: 1;
    }
    .main-select__wrap {
        flex-shrink: 0;
        flex-basis: 35%;
    }
}
.catalog-head__result {
    font-size: 1.6rem;
    line-height: 1.5em;
    font-weight: 600;
}
</style>