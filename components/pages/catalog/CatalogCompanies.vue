<template>
    <div class="companies-vacancies">
        <div class="companies-vacancies__label">Похожие вакансии</div>
        <div class="companies-vacancies__list">
            <div class="companies-vacancies__card">
                <div class="companies-vacancies__card-img">
                    <img src="" alt="">
                </div>
                <div class="companies-vacancies__card-info">
                    <div class="companies-vacancies__card-title">Дизайнер одежды</div>
                    <div class="companies-vacancies__card-vacancies">Наименование компании <span>12</span></div>
                </div>
            </div>
        </div>
        <nuxt-link class="companies-vacancies__more">
            все компании (12)
        </nuxt-link>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
.companies-vacancies {
    padding: 1.6rem;
    border-radius: 1.6rem;
    background-color: #FFFFFF;
    border-radius: 1.2rem;
    background: #FFFFFF;
    box-shadow: 0px 24px 48px 0px rgba(15, 69, 99, 0.06);
}
.companies-vacancies__label {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    line-height: 1.5em;
    font-weight: 700;
}
.companies-vacancies__card {
    padding: 2rem 0;
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
    border-bottom: 1px solid $primary-stroke;
}
.companies-vacancies__card-img {
    width: 5.6rem;
    height: 5.6rem;
    img {
        @include image-full-contain
    }
}
.companies-vacancies__card-title {
    margin-bottom: 0.4rem;
    font-size: 1.6rem;
    line-height: 1.5em;
    font-weight: 700;
}
.companies-vacancies__card-vacancies {
    color: $description;
    font-size: 1.4rem;
    line-height: 1.4em;
    font-weight: 600;
    span {
        color: $primary-text;
    }
}
.companies-vacancies__more {
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