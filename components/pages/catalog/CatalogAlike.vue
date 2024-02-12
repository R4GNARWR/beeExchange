<template>
    <div class="vacancies-alike">
        <div class="vacancies-alike__label">Похожие вакансии</div>
        <div class="vacancies-alike__list">
            <div class="vacancies-alike__card">
                <div class="vacancies-alike__card-img">
                    <img src="" alt="">
                </div>
                <div class="vacancies-alike__card-info">
                    <div class="vacancies-alike__card-title">Дизайнер одежды</div>
                    <div class="vacancies-alike__card-company">Наименование компании</div>
                    <div class="vacancies-alike__card-city">Город</div>
                </div>
            </div>
        </div>
        <nuxt-link class="vacancies-alike__more">
            все вакансии (12)
        </nuxt-link>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
.vacancies-alike {
    padding: 1.6rem;
    border-radius: 1.6rem;
    background-color: #FFFFFF;
    border-radius: 1.2rem;
    background: #FFFFFF;
    box-shadow: 0px 24px 48px 0px rgba(15, 69, 99, 0.06);
}
.vacancies-alike__label {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    line-height: 1.5em;
    font-weight: 700;
}
.vacancies-alike__card {
    padding: 2rem 0;
    display: flex;
    column-gap: 1.2rem;
    border-bottom: 1px solid $primary-stroke;
}
.vacancies-alike__card-img {
    width: 4rem;
    height: 4rem;
    img {
        @include image-full-contain
    }
}
.vacancies-alike__card-title {
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
    line-height: 1.4em;
    font-weight: 700;
}
.vacancies-alike__card-company {
    margin-bottom: 0.4rem;
    color: $description;
    font-size: 1.4rem;
    line-height: 1.4em;
    font-weight: 600;
}
.vacancies-alike__card-city {
    font-size: 1.4rem;
    line-height: 1.4em;
    font-weight: 600;
}
.vacancies-alike__more {
    display: block;
    padding-top: 1.6rem;
    font-size: 1.2rem;
    color: $description;
    line-height: 1.66em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
}
</style>