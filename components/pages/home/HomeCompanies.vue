<template>
    <section class="home-companies">
        <div class="container">
            <div class="home-companies__label" v-if="selected === 'employee'">
                Изучи будущее место работы
            </div>
            <div class="home-companies__label" v-if="selected === 'employer'">
                Нам доверяют
            </div>
            <div class="home-companies__text" v-if="selected === 'employer'">
                Нам доверяют крупнейшие компании, которые регулярно размещают вакансии на нашей платформе
            </div>
            <div class="home-companies__list">
                <div class="home-companies__card" v-for="index in 3" :key="index">
                    <div class="home-companies__card-img">
                        <img src="/img/home-companies-test.png" alt="">
                    </div>
                    <div class="home-companies__card-label">
                        Lux Persona
                    </div>
                    <div class="home-companies__card-text">
                        Небольшое описание  Небольшое описание Небольшое описание Небольшое описание 
                    </div>
                    <div class="home-companies__card-link">
                        Подробнее
                    </div>
                    <div class="home-companies__card-vacancies">
                        Активные вакансии (12)
                    </div>
                </div>
            </div>
            <swiper-container class="home-companies__swiper" slides-per-view="1.2" :space-between="16">
                <swiper-slide v-for="index in 3" :key="index">
                    <div class="home-companies__card" >
                        <div class="home-companies__card-img">
                            <img src="/img/home-companies-test.png" alt="">
                        </div>
                        <div class="home-companies__card-label">
                            Lux Persona
                        </div>
                        <div class="home-companies__card-text">
                            Небольшое описание  Небольшое описание Небольшое описание Небольшое описание 
                        </div>
                        <div class="home-companies__card-link">
                            Подробнее
                        </div>
                        <div class="home-companies__card-vacancies">
                            Активные вакансии (12)
                        </div>
                    </div>
                </swiper-slide>
                
            </swiper-container>
            <div class="home-companies__more">
                <nuxt-link class="btn btn-primary">Больше компаний</nuxt-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { register } from 'swiper/element/bundle';

const props = defineProps({
    selected:  {
        type: String
    }
})
onMounted(()=> {
    register()
})

</script>
<style lang="scss">
.home-companies {
    padding: 9rem 0;
}
.home-companies__label {
    color: $primary-text;
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1em;
    letter-spacing: -0.088rem;
}
.home-companies__text {
    margin-top: 2rem;
    color: $description;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.5em;
}
.home-companies__list {
    margin-top: 4.8rem;
    margin-bottom: 3.2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.4rem;
}
.home-companies__swiper {
    display: none;
}
.home-companies__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.2rem;
    padding: 2.4rem 1.6rem 1.6rem 1.6rem;
    background-color: #FFFFFF;
}
.home-companies__card-img {
    margin-bottom: 2rem;
    padding: 3rem 1rem;
    border-radius: 6px;
    background: $background-dark;
}
.home-companies__card-label {
    margin-bottom: .4rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5em;
}
.home-companies__card-text {
    margin-bottom: .4rem;
    text-align: center;
    font-size: 1.4rem;
    color: $description;
    font-weight: 500;
    line-height: 1.4em;
}
.home-companies__card-link {
    margin-bottom: 2rem;
    color: $primary;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.4em;
}
.home-companies__card-vacancies {
    border-top: 1px solid $divider;
    padding-top: 1.6rem;
    color: $description;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.66em;
    text-transform: uppercase;
}
.home-companies__more {
    display: flex;
    justify-content: center;
    a {
        text-decoration: none;
    }
}
@media (max-width: 768px) {
    .home-companies {
        padding: 48px 0;
    }
    .home-companies__label {
        margin-bottom: 24px;
        font-size: 28px;
    }
    .home-companies__text,
    .home-companies__list {
        display: none;
    }
    .home-companies__swiper {
        margin-bottom: 24px;
        display: block;
    }
    .home-companies__card {
        padding: 32px 16px 16px 16px;
        border-radius: 12px;
    }
    .home-companies__card-img {
        margin-bottom: 20px;
        padding: 30px 10px;
    }
    .home-companies__card-label {
        margin-bottom: 4px;
        font-size: 16px;
    }
    .home-companies__card-text {
        margin-bottom: 4px;
        font-size: 14px;
    }
    .home-companies__card-link {
        margin-bottom: 20px;
        font-size: 14px;
    }
    .home-companies__card-vacancies {
        padding-top: 16px;
        font-size: 12px;
    }
}
</style>