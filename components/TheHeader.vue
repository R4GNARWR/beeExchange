<template>
    <header>
        <div class="header-lines icon-24">
            <img src="/svg/lines.svg" alt="">
        </div>
        <nuxt-link to="/" class="header-logo">
            Биржа труда
        </nuxt-link>
        <nav class="header-navigation">
            <ul>
                <li><nuxt-link to="/catalog?type=vacancies">Вакансии</nuxt-link></li>
                <li><nuxt-link to="/catalog?type=specialists">Специалисты</nuxt-link></li>
                <li><nuxt-link to="/catalog?type=companies">Компании</nuxt-link></li>
            </ul>
        </nav>
        <div class="header-actions">
            <MainButton class="btn-primary">Вход</MainButton>
        </div>
    </header>
</template>
<script setup>
</script>
<style lang="scss">
header
{
    height: 6.8rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.2rem 4.8rem ;
    z-index: 10000;
    background-color: #FFFFFF;
    box-shadow: 0px 15px 40px 0px rgba(12, 26, 82, 0.05);
}
.header-lines {
    display: none;
}
.header-navigation {
    ul {
        display: flex;
        align-items: center;
        list-style: none;
        column-gap: 2rem;
        li {
            padding: 1rem 1.4rem;
            font-size: 1.6rem;
            font-weight: 600;
            letter-spacing: -0.64px;
            a {
                text-decoration: none;
                color: inherit;
            }
        }
    }
}
.header-logo {
    font-size: 2.4rem;
    font-weight: 800;
    letter-spacing: -0.0298rem;
    line-height: 1em;
    text-decoration: none;
    color: $primary-text;
}
@media (max-width: 768px) {
    header {
        height: 48px;
        padding: 8px 16px;
        justify-content: flex-start;
    }
    .header-lines {
        margin-right: 12px;
        display: block;
        cursor: pointer;
    }
    .header-logo {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.8px;
    }
    .header-actions {
        margin-left: auto;
        .btn {
            padding: 6px 16px;
            font-size: 12px;
            line-height: 1.66em;
        }
    }
    .header-navigation {
        position: absolute;
        display: none;
        top: 100%;
        left: 0;
    }
}
</style>