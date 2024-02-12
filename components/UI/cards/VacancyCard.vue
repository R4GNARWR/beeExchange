<template>
    <div class="vacancy-card">
        <div class="vacancy-card__image">
            <img src="" alt="">
        </div>
        <div class="vacancy-card__body">
            <div class="vacancy-card__body-top">
                <div class="vacancy-card__body-top__title">
                    <div class="vacancy-card__body-top__title-company">Наименование компании</div>
                    <div class="vacancy-card__body-top__title-name">Дизайнер одежды</div>
                </div>
                <div class="vacancy-card__body-top__date">5 октября</div>
            </div>
            <div class="vacancy-card__body-description">
                <div class="vacancy-card__body-description-salary">
                    <span>от 50 000</span>
                    <span> до 100 000₽</span>
                </div>
                <ul class="vacancy-card__body-description-location">
                    <li>Москва</li>
                    <li class="hollow"></li>
                    <li>Полный рабочий день</li>
                </ul>
                <ul class="vacancy-card__body-description-props">
                    <li>Создание дизайна</li>
                    <li class="hollow"></li>
                    <li>Пошив</li>
                    <li class="hollow"></li>
                    <li>Наименование обязанностей</li>
                </ul>
            </div>
            <div class="vacancy-card__body-actions">
                <nuxt-link class="vacancy-card__body-actions__link">Подробнее</nuxt-link>
                <button class="vacancy-card__body-actions__save icon-24">
                    <img src="/svg/save.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
.vacancy-card {
    padding: 2.4rem;
    display: flex;
    column-gap: 1.2rem;
    background-color: #FFFFFF;
    border-radius: 1.2rem;
}
.vacancy-card__image {
    width: 5rem;
    height: 5rem;
    border-radius: .6rem;
    img {
        @include image-full-contain
    }
}
.vacancy-card__body {
    width: 100%;
}
.vacancy-card__body-top {
    margin-bottom: .8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.vacancy-card__body-top__title-company {
    margin-bottom: .4rem;
    font-size: 1.4rem;
    line-height: 1.44em;
    font-weight: 500;
}
.vacancy-card__body-top__title-name {
    font-size: 1.8rem;
    line-height: 1.5em;
    font-weight: 700;
}
.vacancy-card__body-top__date {
    color: $description;
    font-size: 1.4rem;
    line-height: 1.44em;
    font-weight: 500;
}
.vacancy-card__body-description {
    margin-bottom: 2.4rem;
    width: 100%;
}
.vacancy-card__body-description-salary {
    margin-bottom: 1.2rem;
    font-size: 1.4rem;
    line-height: 1.44em;
    font-weight: 700;
}
.vacancy-card__body-description-location {
    margin-bottom: 1.2rem;
    display: flex;
    li {
        font-size: 1.4rem;
        line-height: 1.44em;
        font-weight: 600;
        &::marker {
            font-size: 0;
        }
        &.hollow{ 
            &::marker{
                font-size: 1.4rem;
            }
            margin-left: 2rem;
        }
    }
}
.vacancy-card__body-description-props {
    display: flex;
    li {
        color: $description;
        font-size: 1.4rem;
        line-height: 1.44em;
        font-weight: 600;
        &::marker {
            font-size: 0;
        }
        &.hollow{ 
            &::marker{
                font-size: 1.4rem;
            }
            margin-left: 2rem;
        }
    }
}
.vacancy-card__body-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.vacancy-card__body-actions__link {
    color: $description;
    font-size: 1.4rem;
    line-height: 1.44em;
    font-weight: 700;
    text-decoration: none;
}
.vacancy-card__body-actions__save {
    padding: 0;
    background: transparent;
    border: 0;
}
</style>