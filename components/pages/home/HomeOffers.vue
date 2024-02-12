<template>
    <section class="home-offer">
        <div class="container">
            <div class="home-offer__top">
                <RadioButtons v-model="selectedSpecialist" value="designers" groupName="selectedSpecialist">Дизайнеры</RadioButtons>
                <RadioButtons v-model="selectedSpecialist" value="technologists" groupName="selectedSpecialist">Технологи</RadioButtons>
                <RadioButtons v-model="selectedSpecialist" value="seamstresses" groupName="selectedSpecialist">Швеи</RadioButtons>
                <RadioButtons v-model="selectedSpecialist" value="accountants" groupName="selectedSpecialist">Бухгалтеры</RadioButtons>
                <RadioButtons v-model="selectedSpecialist" value="technologists2" groupName="selectedSpecialist">Технологи</RadioButtons>
                <RadioButtons v-model="selectedSpecialist" value="seamstresses2" groupName="selectedSpecialist">Швеи</RadioButtons>
            </div>
            <div class="home-offer__list" ref="swiperEmployee" v-if="selected === 'employee'" init="false">
                <div class="home-offer__list-card employee" v-for="index in 8" :key="index">
                    <div class="home-offer__list-card-name">Дизайнер одежды</div>
                    <div class="home-offer__list-card-salary">
                        от 50 000 до 70 000 <span>₽</span>
                    </div>
                    <ul class="home-offer__list-card-info">
                        <li class="home-offer__list-card-info__city">Москва</li>
                        <li class="hollow"></li>
                        <li class="home-offer__list-card-info__company">Наименование компании</li>
                    </ul>
                    <nuxt-link class="home-offer__list-card-link">Подробнее</nuxt-link>
                </div>
            </div>
            <swiper-container class="home-offer__swiper" v-if="selected === 'employee'" slides-per-view="1.2" :space-between="16">
                <swiper-slide v-for="index in 8" :key="index">
                    <div class="home-offer__list-card employee">
                        <div class="home-offer__list-card-name">Дизайнер одежды</div>
                        <div class="home-offer__list-card-salary">
                            от 50 000 до 70 000 <span>₽</span>
                        </div>
                        <ul class="home-offer__list-card-info">
                            <li class="home-offer__list-card-info__city">Москва</li>
                            <li class="hollow"></li>
                            <li class="home-offer__list-card-info__company">Наименование компании</li>
                        </ul>
                        <nuxt-link class="home-offer__list-card-link">Подробнее</nuxt-link>
                    </div>
                </swiper-slide>
            </swiper-container>
            <div class="home-offer__list" v-if="selected === 'employer'">
                <div class="home-offer__list-card employer" v-for="index in 8" :key="index">
                    <div class="home-offer__list-card__image">
                        <img src="" alt="">
                    </div>
                    <div class="home-offer__list-card-name">Анна Болдырева</div>
                    <div class="home-offer__list-card-position">Швея</div>
                    <div class="home-offer__list-card-salary">
                        От 50 000 <span>₽</span>
                    </div>
                    <div class="home-offer__list-card-status">
                        Открыта к предложениям
                    </div>
                    <nuxt-link class="btn btn-primary-light">Подробнее</nuxt-link>
                </div>
            </div>
            <swiper-container class="home-offer__swiper" v-if="selected === 'employer'" slides-per-view="1.2" :space-between="16">
                <swiper-slide v-for="index in 8" :key="index">
                    <div class="home-offer__list-card employer" >
                        <div class="home-offer__list-card__image">
                            <img src="" alt="">
                        </div>
                        <div class="home-offer__list-card-name">Анна Болдырева</div>
                        <div class="home-offer__list-card-position">Швея</div>
                        <div class="home-offer__list-card-salary">
                            От 50 000 <span>₽</span>
                        </div>
                        <div class="home-offer__list-card-status">
                            Открыта к предложениям
                        </div>
                        <nuxt-link class="btn btn-primary-light">Подробнее</nuxt-link>
                    </div>
                </swiper-slide>
            </swiper-container>
            <div class="home-offer__more">
                <nuxt-link class="btn btn-primary">Больше компаний</nuxt-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { register } from 'swiper/element/bundle';

const selectedSpecialist = ref('designers')

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
.home-offer {
    padding: 9rem 0;
}
.home-offer__top {
    margin-bottom: 3.2rem;
    display: flex;
    column-gap: 1.6rem;
    justify-content: center;
}
.home-offer__list {
    margin-bottom: 3.2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.4rem;
    column-gap: 2.4rem;
}
.home-offer__swiper {
    display: none;
}
.home-offer__list-card {
    padding: 1.6rem;
    border-radius: 1.2rem;
    background:#FFFFFF;
    box-shadow: 0px 24px 48px 0px rgba(0, 0, 0, 0.06);
}
.home-offer__list-card-name {
    margin-bottom: .8rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5em;
}
.home-offer__list-card-salary {
    margin-bottom: .8rem;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.4em;
    span {
        font-weight: 700;
    }
}
.home-offer__list-card-info {
    margin-bottom: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    li {
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
.home-offer__list-card-info__city,
.home-offer__list-card-info__company {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.4em;
}
.home-offer__list-card-link {
    color: $primary;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.4em;
    text-decoration: none;
}
.home-offer__more {
    display: flex;
    justify-content: center;
    a {
        text-decoration: none;
    }
}
.home-offer__list-card.employer {
    padding: 3.2rem 1.6rem 2rem 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .home-offer__list-card__image {
        margin-bottom: 2rem;
        width: 9.6rem;
        height:9.6rem;
        img {
            @include image-full-contain;
            border-radius: 50%;
        }
    }
    .home-offer__list-card-name {
        margin-bottom: .4rem;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 1.5em;
    }
    .home-offer__list-card-position {
        margin-bottom: 2rem;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.4em;
    }
    .home-offer__list-card-salary {
        margin-bottom: .4rem;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.4em;
    }
    .home-offer__list-card-status {
        margin-bottom: 2rem;
        color: $primary;
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1.4em;
    }
    a {
        text-decoration: none;
    }
}
@media (max-width: 768px) {
    .home-offer {
        padding: 48px 0;
    }
    .home-offer__top {
        margin-bottom: 16px;
        justify-content: flex-start;
        column-gap: 8px;
        overflow-x: scroll;
        scrollbar-width: none;
    }
    .home-offer__swiper {
        margin-bottom: 24px;
        display: block;
    }
    .home-offer__list {
        display: none;
    }
    .home-offer__list-card {
        padding: 16px;
        border-radius: 12px;
    }
    .home-offer__list-card-name {
        margin-bottom: 8px;
        font-size: 16px;
    }
    .home-offer__list-card-salary {
        margin-bottom: 8px;
        font-size: 14px;
    }
    .home-offer__list-card-info {
        margin-bottom: 16px;
        li {
            &.hollow{ 
                &::marker{
                    font-size: 14px;
                }
                margin-left: 20px;
            }
        }
    }
    .home-offer__list-card-info__city,
    .home-offer__list-card-info__company {
        white-space: nowrap;
        font-size: 14px;
    }
    .home-offer__list-card-link {
        font-size: 14px;
    }
    .home-offer__list-card.employer {
        padding: 32px 16px 16px 16px;
        .home-offer__list-card__image {
            margin-bottom: 20px;
            width: 72px;
            height: 72px;
        }
        .home-offer__list-card-name {
            margin-bottom:4px;
            font-size: 16px;
        }
        .home-offer__list-card-position {
            margin-bottom: 20px;
            font-size: 14px;
        }
        .home-offer__list-card-salary {
            margin-bottom: 4px;
            font-size: 14px;
        }
        .home-offer__list-card-status {
            margin-bottom: 20px;
            font-size: 14px;
            white-space: nowrap;
        }
    }
}
</style>