<template>
    <section class="home-question">
        <div class="container">
            <div class="home-question__label">
                <img src="/svg/main-question-label.svg" alt="">
            </div>
            <div class="home-question__text">
                Заполните форму, и наш специалист свяжется с вами
            </div>
            <div class="row w-100">
                <div class="col-md-8 col-12 mx-auto">
                    <div class="home-question__inputs">
                        <MainInput class="background-light" placeholder="Имя"></MainInput>
                        <MainInput class="background-light" placeholder="Email"></MainInput>
                        <MainButton class="btn-primary">Отправить</MainButton>
                    </div>
                </div>
            </div>
            <img class="home-question__absolute-designer" src="/svg/main-question-designer.svg" alt="">
            <img class="home-question__absolute-sewer" src="/svg/main-question-sewer.svg" alt="">
            <img class="home-question__absolute-cutter" src="/svg/main-question-cutter.svg" alt="">
            
            <img class="home-question__absolute-star star1" src="/svg/main-question-star.svg" alt="">
            <img class="home-question__absolute-star star2" src="/svg/main-question-star.svg" alt="">
            <img class="home-question__absolute-star star3" src="/svg/main-question-star.svg" alt="">
        </div>
    </section>
</template>
<script setup>


</script>
<style lang="scss">
.home-question{
    padding-bottom: 11rem;
    padding-top: 11rem;
    margin-top: 9rem;
    background-color: $background-dark;
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
.home-question__label {
    margin-bottom: 2rem;
    width: 44.5rem;
    height: 22.5rem;
    img {
        @include image-full-contain;
        object-position: center;
    }
}
.home-question__text {
    margin-bottom: 6.4rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    line-height: 2em;
    letter-spacing: -0.04rem;
}
.home-question__inputs {
    display: flex;
    column-gap: 1.6rem;
    justify-content: space-between;
    .main-input__wrap {
        flex-grow: 1;
    }
}
.home-question__absolute-designer,
.home-question__absolute-sewer,
.home-question__absolute-cutter {
    position: absolute;
    width: 16.5rem;
    height: 15rem;
    object-fit: contain;
}
.home-question__absolute-designer {
    left: 13.5rem;
    top: 5rem;
}
.home-question__absolute-sewer {
    right: 20rem;
    top: -5rem;
}
.home-question__absolute-cutter {
    right: 3rem;
    bottom: 8rem;
}
.home-question__absolute-star {
    position: absolute;
    width: 3.6rem;
    height: 3.7rem;
    object-fit: contain;
    &.star1 {
        top: -5rem;
        left: 12rem;
    }
    &.star2 {
        bottom: 5rem;
        left: 8.5rem;
    }
    &.star3 {
        top: 8.5rem;
        right: -5rem;
    }
}
@media (max-width: 768px) {
    .home-question{
        padding-bottom: 40px;
        padding-top: 60px;
        margin-top: 48px;
    }
    .home-question__label {
        margin-bottom: 10px;
        width: 300px;
        height: 140px;
    }
    .home-question__text {
        margin-bottom: 24px;
        font-size: 16px;
        letter-spacing: normal;
    }
    .home-question__inputs {
        display: flex;
        flex-direction: column;
        column-gap: initial;
        row-gap: 16px;
        justify-content: space-between;
    }
    .home-question__absolute-designer,
    .home-question__absolute-sewer,
    .home-question__absolute-cutter {
        width: 76px;
        height: 64px;
    }
    .home-question__absolute-designer {
        left: -8px;
        top: 27px;
    }
    .home-question__absolute-sewer {
        right: 93px;
        top: -34px;
    }
    .home-question__absolute-cutter {
        bottom: initial;
        right: -4px;
        top: 81px;
    }
    .home-question__absolute-star {
        display: none;
    }
}
</style>