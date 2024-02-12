<template>
    <div class="catalog-filters">
        <div class="catalog-filters__item">
            <div class="catalog-filters__item-label">Специализация</div>
            <MainSelect placeholder="Выберите специализацию"></MainSelect>
        </div>
        <div class="catalog-filters__item">
            <div class="catalog-filters__item-label">Квалификация</div>
            <MainSelect placeholder="Любая"></MainSelect>
        </div>
        <div class="catalog-filters__item">
            <div class="catalog-filters__item-label">Профессиональные навыки</div>
            <MainSelect placeholder="Выберите навык"></MainSelect>
        </div>
        <div class="catalog-filters__item">
            <div class="catalog-filters__item-label">Зарплата</div>
            <div class="split">
                <MainInput placeholder="От" type="number" min="0"></MainInput>
                <MainSelect placeholder="₽"></MainSelect>
            </div>
        </div>
        <div class="catalog-filters__item">
            <div class="catalog-filters__item-label">Местоположение</div>
            <MainAutocomplete placeholder="Введите город, область или страну" :list="citiesList"></MainAutocomplete>
        </div>
        <div class="catalog-filters__item">
            <div class="catalog-filters__item-label">Тип занятости</div>
            <MainSelect placeholder="Любой"></MainSelect>
        </div>
        <div class="catalog-filters__item">
            <div class="catalog-filters__item-label">Компания</div>
            <MainSelect placeholder="Выберите компанию"></MainSelect>
        </div>
    </div>
</template>
<script setup>
const citiesList = [
{ name: 'Россия', value: 1 },
{ name: 'США', value: 2 },
{ name: 'Китай', value: 3 },
{ name: 'Индия', value: 4 },
{ name: 'Бразилия', value: 5 },
{ name: 'Австралия', value: 6 },
{ name: 'Канада', value: 7 },
{ name: 'Германия', value: 8 },
{ name: 'Франция', value: 9 },
{ name: 'Япония', value: 10 }
]
</script>
<style lang="scss">
.catalog-filters {
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
    border-radius: 1.2rem;
    background: #FFFFFF;
    box-shadow: 0px 24px 48px 0px rgba(15, 69, 99, 0.06);
}
.catalog-filters__item {
    label {
        width: 100%;
    }
    .split {
        display: flex;
        column-gap: 1.2rem;
        label:nth-child(1) {
            flex-grow: 1;
        }
        label:nth-child(2) {
            width: auto;
        }
    }
}
.catalog-filters__item-label {
    margin-bottom: .8rem;
    font-size: 1.6rem;
    line-height: 1.5em;
    font-weight: 700;
}
</style>