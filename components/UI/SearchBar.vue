<template>
    <label class="main-input__wrap search">
        <input
        type="text"
        class="main-input"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="updateValue($event)">
        <img src="/svg/search.svg" alt="">
    </label>
</template>
<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
    modelValue: String,
    disabled: {
        type: Boolean,
        default: false
    },
    placeholder: String,
})

const emit = defineEmits(['update:modelValue', 'searchAction'])

const updateValue = (e) => {
    const string = e.target.value
    emit('update:modelValue', string)
}

watch(() => props.modelValue, () => {
    v$.value.$touch()
})


</script>

<style lang="scss">
    .main-input__wrap.search {
        .main-input {
            padding: 1.2rem 4.4rem 1.2rem 1.4rem;
        }
        position: relative;
        img {
            width: 2rem;
            height: 2rem;
            position: absolute;
            right: 1.4rem;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>