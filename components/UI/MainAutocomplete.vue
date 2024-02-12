<template>
    <label class="main-autocomplete__wrap" ref="autocomplete">
        <div class="main-autocomplete__head" :class="{'focused': showed}">
            <input :placeholder="placeholder"
            v-model="searchString"
            @input="searchVariants()"
            @focus="toggleList"
            />
        </div>
        <ul class="main-autocomplete__list" :class="{'show': showed}" v-if="searchVariantsList">
            <li @click="selectItem(item)" v-for="item in searchVariantsList" :key="item[itemValue]">{{item[itemLabel]}}</li>
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

const searchString = ref('')
const searchVariantsList = ref(props.list || null)
const showed = ref(false)
const autocomplete = ref(null)

const toggleList = () => {
    showed.value = !showed.value
}

const selectItem = (item) => {
    searchString.value = item[props.itemLabel]
    if(props.modelValue) {
        emit('update:modelValue', item[props.itemValue])
    }
}

const searchVariants = () => {
    const fullArray = props.list;
    let variants = [];
    if (searchString.value && fullArray) {
        for (let i = 0; i < fullArray.length; i++) {
            let words = (fullArray[i][props.itemLabel]).split(' ');
            for (let j = 0; j < words.length; j++) {
                if (words[j].toLowerCase().startsWith(searchString.value.toLowerCase())) {
                    variants.push(fullArray[i]);
                    break;
                }
            }
        }
        searchVariantsList.value = variants;
    } else {
        searchVariantsList.value = fullArray;
    }
};


onMounted(() => {
    onClickOutside(autocomplete, () => {
        if(showed.value)
        showed.value = false;
    })
})
</script>

<style lang="scss">
.main-autocomplete__wrap {
    position: relative;
}
.main-autocomplete__head {
    background-color: $background-dark;
    border: 1px solid $background-dark;
    border-radius: .8rem;
    color: $description;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.5em;
    transition: .2s;
    &.focused {
        border: 1px solid $primary;
        box-shadow: 0px 0px 0px 3px rgba(95, 177, 133, 0.25);
    }
    input
    {
        padding: 1.2rem 1.4rem;
        width: 100%;
        border: 0;
        background-color: transparent;
        &:active,
        &:focus
        {
            border: 0;
            outline: none;
            box-shadow: none;
        }
    }
}
.main-autocomplete__list {
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
    .main-autocomplete__head {
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 16px;
    }
    .main-autocomplete__list {
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