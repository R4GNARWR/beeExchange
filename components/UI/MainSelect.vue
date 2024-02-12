<template>
    <label class="main-select__wrap" ref="select">
        <div class="main-select__head" :class="{'focused': showed}" @click="toggleList">
            <span v-if="placeholder && !selected">{{ placeholder }}</span>
            <span v-if="selected">{{ selected }}</span>
            <img src="/svg/arrow.svg" alt="">
        </div>
        <ul class="main-select__list" :class="{'show': showed}" v-if="list">
            <li @click="selectValue(item)" v-for="item in list" :key="item[itemValue]">{{item[itemLabel]}}</li>
        </ul>
    </label>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core';
const props = defineProps({
    list: Array,
    placeholder: String,
    itemLabel: {
        type: String,
        default: 'name',
    },
    itemValue: {
        type: String,
        default: 'value',
    },
})
const emit = defineEmits(['update:modelValue'])

const selected = ref('')
const showed = ref(false)
const select = ref(null)

const toggleList = () => {
    showed.value = !showed.value
}
const selectValue = (item) => {
    selected.value = item[props.itemLabel]
    if(props.modelValue) {
        emit('update:modelValue', item[props.itemValue])
    }
    showed.value = !showed.value
}
onMounted(() => {
    onClickOutside(select, () => {
        if(showed.value)
        showed.value = false;
    })
})

</script>

<style lang="scss">
.main-select__wrap {
    position: relative;
}
.main-select__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: $background-dark;
    border: 1px solid $background-dark;
    border-radius: .8rem;
    img {
        width: 2.4rem;
        height: 2.4rem;
        object-fit: contain;
    }
    color: $description;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.5em;
    transition: .2s;
    &.focused {
        border: 1px solid $primary;
        box-shadow: 0px 0px 0px 3px rgba(95, 177, 133, 0.25);
    }
}
.main-select__list {
    display: none;
    position: absolute;
    left: 0;
    top: calc(100% + .8rem);
    width: 100%;
    max-height: calc(7 * 4rem);
    overflow-y: scroll;
    list-style: none;
    border-radius: .6rem;
    background-color: #FFFFFF;
    z-index: 900;
    li {
        padding: 1rem 1.6rem;
        color: $primary-text;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.42em;
        border-bottom: 1px solid $divider;
        transition: .2s;
        cursor: pointer;
        &:hover {
            background-color: $primary;
            color: #FFFFFF;
        }
    }
    scrollbar-color: $description transparent;
    scrollbar-width: thin;
    scrollbar-gutter: stable;
    &.show {
        display: block;
    }
}
@media (max-width: 768px) {
    .main-select__wrap {
        position: relative;
    }
    .main-select__head {
        padding: 12px 20px;
        border-radius: 8px;
        img {
            width: 24px;
            height: 24px;
        }
        font-size: 16px;
    }
    .main-select__list {
        top: calc(100% + 8px);
        width: 100%;
        max-height: calc(7 * 40px);
        overflow-y: scroll;
        list-style: none;
        border-radius: 6px;
        background-color: #FFFFFF;
        li {
            padding: 10px 16px;
            font-size: 14px;
        }
    }
}
</style>