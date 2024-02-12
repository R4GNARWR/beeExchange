<template>
    <div role="button" class="radio-button" :class="{'active': value === modelValue}">
        <input type="radio"
        :name="groupName"
        :value="value"
        :checked="modelValue === value"
        @change="$emit('update:modelValue', $event.target.value ) ">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps ({
    value: String,
    modelValue: String,
    groupName: String
})
const emit = defineEmits(['update:modelValue']); 
</script>

<style lang="scss">
.radio-button
{
    position: relative;
    padding: 1rem 2rem;
    background-color: $background-dark;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.5em;
    color: $description;
    border-radius: 100px;
    transition: .2s;
    &.active {
        background-color: $primary-text;
        color: #FFFFFF;
    }
    input{ 
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }
}
@media (max-width: 768px) {
    .radio-button
    {
        padding: 8px 20px;
        font-size: 12px;
    }
}
</style>