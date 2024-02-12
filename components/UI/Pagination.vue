<template>
    <div class="pagination">
        <button class="pagination-action back icon-24">
            <img src="/svg/arrow.svg" alt="">
        </button>
        <ul class="pagination-pages">
            <li><button>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>...</button></li>
        </ul>
        <button class="pagination-action forward icon-24">
            <img src="/svg/arrow.svg" alt="">
        </button>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
    .pagination {
        padding: 1.6rem 2.4rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 1.2rem;
        background-color: #FFFFFF;
    }
    .pagination-action {
        padding: 0;
        border: 0;
        background: transparent;
        &.back {
            transform: rotate(90deg);
        }
        &.forward {
            transform: rotate(-90deg);
        }
    }
    .pagination-pages {
        display: flex;
        align-items: center;
        column-gap: .4rem;
        list-style: none;
        li {
            button {
                padding: 0;
                width: 4.4rem;
                height: 4.4rem;
                background: transparent;
                border: 0;
                border-radius: 50%;
                font-size: 1.6rem;
                line-height: 1.5em;
                font-weight: 700;
                transition: .2s;
            }
            &:hover {
                button {
                color: #FFFFFF;
                background: $primary;
            }
            }
        }
    }
</style>