<template>
  <div style="padding: 2rem; font-family: Inter, sans-serif; text-align: center;">
    <h2>🛍️ Product Remote (Standalone)</h2>
    <ProductList />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
export default { name: 'App', components: { ProductList } };
</script>
