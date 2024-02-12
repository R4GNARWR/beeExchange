<template>
    <label class="main-input__wrap">
        <input
        :type="type"
        class="main-input"
        :name="name"
        :value="modelValue"
        :required="required"
        :disabled="disabled"
        :placeholder="placeholder"
        v-maska
        :data-maska="maska"
        :min="min"
        :max="max"
        @input="updateValue($event)">
    </label>
</template>
<script setup>
import { computed, watch } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, email, minLength, maxLength, minValue, maxValue } from '@vuelidate/validators'

const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: String,
    modelValue: String,
    required: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    placeholder: String,
    maska: Object,
    min: Number,
    max: Number,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (e) => {
    const string = e.target.value
    emit('update:modelValue', string)
}

const v$ = useVuelidate()

watch(() => props.modelValue, () => {
    v$.value.$touch()
})

const validations = computed(() => ({
    modelValue: {
        ...(props.required && { required: helpers.withMessage("Поле должно быть заполнено", props.required) }),
    }
}))

</script>

<style lang="scss">
.main-input__wrap {
    position: relative;
    border-radius: .8rem;
    background: $background-dark;
    &.background-light {
        background-color: #FFFFFF;
    }
}
.main-input {
    width: 100%;
    border: 0;
    padding: 1.2rem 2rem;
    background: transparent;
    &,&::placeholder {
        color: $description;
        font-size: 1.6rem;
        font-weight: 500;
    }
    &:focus {
        outline: none;
    }
}
@media (max-width: 768px) {
    .main-input {
        border-radius: 8px;
        padding: 12px 20px;
        &,&::placeholder {
            font-size: 16px;
        }
    }
}
</style>