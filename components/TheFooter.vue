<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-12">
                    <div class="footer-links__wrap">
                        <div class="footer-links">
                            <nuxt-link to="/" class="footer-links__label">
                                Биржа труда
                            </nuxt-link >
                            <ul class="footer-links__list">
                                <li><nuxt-link to="/">Вакансии</nuxt-link></li>
                                <li><nuxt-link to="/">Специалисты</nuxt-link></li>
                                <li><nuxt-link to="/">Компании</nuxt-link></li>
                                <li><nuxt-link to="/">О нас</nuxt-link></li>
                                <li><nuxt-link to="/">Контакты</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="footer-links">
                            <nuxt-link to="/" class="footer-links__label">
                                Помощь
                            </nuxt-link >
                            <ul class="footer-links__list">
                                <li><nuxt-link to="/">Для соискателя</nuxt-link></li>
                                <li><nuxt-link to="/">Для работодателя</nuxt-link></li>
                                <li><nuxt-link to="/">Служба поддержки</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="footer-links">
                            <nuxt-link to="/" class="footer-links__label">
                                Документы
                            </nuxt-link >
                            <ul class="footer-links__list">
                                <li><nuxt-link to="/">Соглашение с пользователем</nuxt-link></li>
                                <li><nuxt-link to="/">Правила оказания услуг</nuxt-link></li>
                                <li><nuxt-link to="/">Прайс-лист</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 offset-md-2">
                    <div class="footer-socials">
                        <div class="footer-socials__label">Соцсети</div>
                        <div class="footer-socials__list">
                            <nuxt-link to="/" class="footer-socials__list-item" v-for="index in 4" :key="index">
                                <img src="/svg/footer-socials.svg" alt="">
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
</script>
<style lang="scss">
footer {
    padding: 4.2rem 0 4.6rem 0;
    border-top: 1px solid $primary-stroke;
    background: $background-dark;
}
.footer-links__wrap {
    display: flex;
    column-gap: 8rem
}
.footer-links {
    display: flex;
    flex-direction: column;
}
.footer-links__label {
    margin-bottom: 2.8rem;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.33em;
    letter-spacing: -0.036rem;
    color: $primary-text;
    text-decoration: none;
}
.footer-links__list {
    color: $description;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5em;
    letter-spacing: -0.032rem;
    list-style: none;
    a {
        text-decoration: none;
        color: inherit;
    }
}
.footer-socials {
    display: flex;
    flex-direction: column;
}
.footer-socials__label {
    margin-bottom: 2.8rem;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.33em;
    letter-spacing: -0.036rem;
}
.footer-socials__list {
    display: flex;
    column-gap: .8rem;
}
.footer-socials__list-item {
    width: 3.2rem;
    height: 3.2rem;
    img {
        @include image-full-contain
    }
}
@media (max-width: 768px) {
    footer {
        padding: 32px 0;
    }
    .footer-links__wrap {
        margin-bottom: 40px;
        flex-direction: column;
        column-gap: initial;
        row-gap: 40px;
    }
    .footer-links__label {
        margin-bottom: 16px;
        font-size: 16px;
        letter-spacing: initial;
    }
    .footer-links__list {
        font-size: 14px;
        letter-spacing: initial;
    }
    .footer-socials__label {
        margin-bottom: 16px;
        font-size: 16px;
        letter-spacing: initial;
    }
    .footer-socials__list {
        column-gap: 8px;
    }
    .footer-socials__list-item {
        width: 24px;
        height: 24px;
    }
}
</style>