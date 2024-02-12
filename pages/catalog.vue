<template>
    <div class="container">
        <div class="catalog-container">
            <div class="catalog">
                <Breadcrumbs :routes="[{name: 'Каталог', path:'/catalog'}]"></Breadcrumbs>
                <CatalogHead></CatalogHead>
                <CatalogList></CatalogList>
                <Pagination></Pagination>
            </div>
            <div class="catalog-aside">
                <CatalogFilters></CatalogFilters>
                <CatalogAlike></CatalogAlike>
                <CatalogCompanies></CatalogCompanies>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Каталог'
    })
</script>

<style lang="scss">
.catalog-container {
    padding: 2.8rem 0 15rem 0;
    display: flex;
    justify-content: flex-start;
    column-gap: 2.4rem;
}
.catalog {
    width: 71.5%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
}
.catalog-aside {
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
    flex-grow: 1;
}
</style>