<template>
    <section class="home-resume">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="home-resume__label" v-if="selected === 'employee'">Создай профессиональное резюме</div>
                    <div class="home-resume__label" v-if="selected === 'employer'">Ознакомьтесь с профилем специалиста</div>
                    <ul class="home-resume__steps">
                        <li class="home-resume__step" v-if="selected === 'employee'">
                            <div class="home-resume__step-label">1. Заполни данные профиля</div>
                            <div class="home-resume__step-text">
                                Из профиля на Бирже труда можно получить исчерпывающую информацию о твоих достижениях. Просто отправь работодателю ссылку на свой профиль.
                            </div>
                        </li>
                        <li class="home-resume__step" v-if="selected === 'employee'">
                            <div class="home-resume__step-label">2. Расскажи о себе больше</div>
                            <div class="home-resume__step-text">
                                Навыки и образование помогут найти подходящую работу. Активность в сообществах и дополнительные курсы делают профиль привлекательным для работодателя.
                            </div>
                        </li>
                        <li class="home-resume__step" v-if="selected === 'employer'">
                            <div class="home-resume__step-label">1. База резюме</div>
                            <div class="home-resume__step-text">
                                Доступ к базе даёт возможность просматривать профили всех специалистов, зарегистрированных на Хабр Карьере.
                            </div>
                            <div class="home-resume__step-action">
                                <nuxt-link class="btn btn-primary">Узнать стоимость</nuxt-link>
                            </div>
                        </li>
                        <li class="home-resume__step" v-if="selected === 'employer'">
                            <div class="home-resume__step-label">2. Больше о специалисте</div>
                            <div class="home-resume__step-text">
                                Профиль специалиста содержит исчерпывающую информацию о его профессиональных достижениях.
                            </div>
                            <div class="home-resume__step-action">
                                <nuxt-link class="btn btn-primary">Все специалисты</nuxt-link>
                            </div>
                        </li>
                    </ul>
                    <div class="home-resume__link" v-if="selected === 'employee'">
                        <nuxt-link class="btn btn-primary">Создай свой профиль</nuxt-link>
                    </div>
                </div>
                <div class="col-md-5 col-12 offset-md-1">
                    <div class="home-resume__card-background">
                        <div class="home-resume__card">
                            <div class="home-resume__card-img">
                                <img src="/img/home-resume-profile.png" alt="">
                            </div>
                            <div class="home-resume__card-name">
                                Ольга Степанова
                            </div>
                            <div class="home-resume__card-profession">
                                Дизайнер-швея
                            </div>
                            <ul class="home-resume__card-skills">
                                <li>Создание дизайна</li>
                                <li class="hollow"></li>
                                <li>Кройка</li>
                                <li class="hollow"></li>
                                <li>Работа с  лекалом</li>
                                <li class="hollow"></li>
                                <li>Шитье</li>
                                <li class="hollow"></li>
                                <li>Проверка качества</li>
                            </ul>
                            <div class="home-resume__card-salary">
                                От 50 000 ₽
                            </div>
                            <div class="home-resume__card-status">
                                Ищу работу
                            </div>
                            <div class="home-resume__card-action">
                                <MainButton class="btn-primary-light">Написать</MainButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

const props = defineProps({
    selected:  {
        type: String
    }
})

</script>
<style lang="scss">
.home-resume{
    padding: 9rem 0;
}
.home-resume__label {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: -0.08rem;
    margin-bottom: 9rem;
}
.home-resume__steps {
    margin-bottom: 6.8rem;
    display: flex;
    flex-direction: column;
    row-gap: 5.6rem;
    list-style: none;
}
.home-resume__step-label {
    margin-bottom: 1.4rem;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.8em;
    letter-spacing: -0.048rem;
}
.home-resume__step-text {
    padding-left: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.5em;
    letter-spacing: -0.032rem;
}
.home-resume__step-action {
    margin-top: 20px;
    .btn {
        text-decoration: none;
    }
}
.home-resume__link {
    .btn {
        text-decoration: none;
    }
}
.home-resume__card-background {
    padding: 0 8.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65.5rem;
    background-image: url('/svg/curved-background.svg');
    background-color: $background-dark;
    border-radius: 1.6rem;
}
.home-resume__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.2rem 1.6rem 1.6rem 1.6rem;
    border-radius: 1.2rem;
    background: #FFFFFF;
    box-shadow: 0px 24px 48px 0px rgba(15, 69, 99, 0.06);
}
.home-resume__card-img {
    margin-bottom: 2rem;
    position: relative;
    width: 13.6rem;
    height: 13.6rem;
    background-color:#E8D2CF;
    border-radius: 50%;
    overflow: hidden;
    img {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.home-resume__card-name {
    margin-bottom: .4rem;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.33em;
}
.home-resume__card-profession {
    margin-bottom: 1.6rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.4em;
}
.home-resume__card-skills {
    margin-bottom: 2.4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
        color: $description;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.4em;
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
.home-resume__card-salary {
    margin-bottom: .8rem;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.4em;
}
.home-resume__card-status {
    margin-bottom: 2.4rem;
    color: $primary;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.4em;
}
.home-resume__card-action {
    width: 100%;
    .btn {
        width: 100%;
    }
}
@media (max-width: 768px) {
    .home-resume{
        padding: 48px 0;
    }
    .home-resume__label {
        margin-bottom: 32px;
        font-size: 28px;
    }
    .home-resume__steps {
        margin-bottom: 32px;
        row-gap: 24px;
    }
    .home-resume__step-label {
        margin-bottom: 8px;
        font-size: 16px;
    }
    .home-resume__step-text {
        padding-left: 5px;
        font-size: 14px;
    }
    .home-resume__card-background {
        padding: 60px;
        height: auto;
        border-radius: 16px;
    }
    .home-resume__card {
        padding: 24px 12px 12px 12px;
        border-radius: 12px;
    }
    .home-resume__card-img {
        margin-bottom: 20px;
        width: 100px;
        height: 100px;
    }
    .home-resume__card-name {
        margin-bottom: 10px;
        font-size: 24px;
    }
    .home-resume__card-profession {
        margin-bottom: 16px;
        font-size: 14px;
    }
    .home-resume__card-skills {
        margin-bottom: 24px;
        li {
            font-size: 14px;
            &.hollow{ 
            &::marker{
                font-size: 14px;
            }
            margin-left: 20px;
        }
        }
    }
    .home-resume__card-salary {
        margin-bottom: 8px;
        font-size: 14px;
    }
    .home-resume__card-status {
        margin-bottom: 24px;
        font-size: 14px;
    }
    .home-resume__link {
        display: none;
    }
}
</style>