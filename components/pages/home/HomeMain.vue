<template>
    <section class="home-main">
        <div class="container">
            <div class="home-main__type">
                <RadioButtons v-model="type" value="employee" groupName="sectionType">Специалистам</RadioButtons>
                <RadioButtons v-model="type" value="employer" groupName="sectionType">Работодателям</RadioButtons>
            </div>
            <div class="home-main__label">
                <img src="/svg/main-home-employee.svg" alt="" v-if="type === 'employee'">
                <img src="/svg/main-home-employer.svg" alt="" v-if="type === 'employer'">
            </div>
            <div class="home-main__undertext">
                в сфере легкой промышленности
            </div>
            <div class="home-main__search">
                <MainInput placeholder="Должность или услуга"></MainInput>
                <MainSelect placeholder="Опыт" :list="experience" itemValue="name" itemLabel="name"></MainSelect>
                <MainSelect placeholder="Город" :list="cities" itemValue="name" itemLabel="name"></MainSelect>
                <MainButton class="btn-primary">Найти</MainButton>
            </div>
        </div>  
    </section>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
    selected:  {
        type: String
    }
})

const emit = defineEmits(['update-selected'])

const type = ref(props.selected)

watchEffect(() => {
    emit('update-selected', type.value)
})
const experience = [
{
    name: 'Без опыта'
},
{
    name: '1-3 лет'
},
{
    name: '3-5 лет'
},
{
    name: 'более 5 лет'
},
]

const cities = [
{
    name: 'Уфа'
},
{
    name: 'Москва'
},
{
    name: 'Миасс'
},
{
    name: 'Санкт-Петербург'
},
{
    name: 'Нижний-Новгород'
},
{
    name: 'Зеленоград'
},
{
    name: 'Тула'
},
{
    name: 'Якутск'
},
]
</script>
<style lang="scss">
.home-main {
    padding: 7.6rem 0 9rem 0;
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
.home-main__type {
    display: flex;
    column-gap: .8rem;
    padding: .4rem;
    background-color: $background-dark;
    border-radius: 100px;
}
.home-main__label {
    margin-top: 10rem;
    width: 62.5%;
    height: 32.5rem;
    img {
        @include image-full-contain
    }
}
.home-main__undertext {
    color: $primary-text;
    text-align: center;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: -0.078rem;
}
.home-main__search
{
    margin-top: 6.4rem;
    width: 94.5%;
    display: flex;
    column-gap: 1.6rem;
    label {
        flex-grow: 1;
        width: 100%;
        &:nth-child(1) {
            flex-basis: 35%;
            flex-shrink: 0;
        }
    }
}
@media (max-width: 1400px) {
    .home-main__label
    {
        width: 84.5%;
        height: 40rem;
    }
}
@media (max-width: 991px) {
    .home-main__label
    {
        width: 90.5%;
    }
}
@media (max-width: 768px) {
    .home-main {
        padding: 40px 0 48px 0;
    }
    .home-main__label
    {
        width: 100%;
        height: 138px;
    }
    .home-main__type {
        column-gap: 8px;
        padding: 4px;
    }
    .home-main__undertext {
        font-size: 18px;
    }
    .home-main__search {
        width: 100%;
        flex-direction: column;
        row-gap: 16px;
        column-gap: initial;
        label {
            &:nth-child(1) {
                flex-basis: 100%;
            }
        }
    }
}
</style>