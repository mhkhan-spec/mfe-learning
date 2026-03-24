<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>🛍️ Product Catalog</h1>
      <p class="page-meta">Components loaded remotely from <strong>product-remote</strong> (Port 3001)</p>
    </div>

    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Fetching remote module from <code>productapp@localhost:3001</code>…</p>
    </div>

    <div v-if="error" class="error-state">
      <span class="error-icon">⚠️</span>
      <h3>Remote Unavailable</h3>
      <p>Could not load <code>product-remote</code>. Make sure it's running on port 3001.</p>
      <code>npm start</code> in <code>product-remote/</code>
    </div>

    <Suspense v-if="!error">
      <template #default>
        <RemoteProductList />
      </template>
      <template #fallback>
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Loading product list…</p>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';

export default {
  name: 'ProductsPage',
  components: {
    RemoteProductList: defineAsyncComponent({
      loader: () => import('productapp/ProductList'),
      onError(error, retry, fail) {
        fail();
      },
      timeout: 8000,
    }),
  },
  data() {
    return {
      loading: false,
      error: false,
    };
  },
  errorCaptured(err) {
    this.error = true;
    return false;
  },
};
</script>

<style scoped>
.page-wrapper { max-width: 900px; margin: 0 auto; }

.page-header { margin-bottom: 1.5rem; }
.page-header h1 { font-size: 1.8rem; font-weight: 800; color: #0f172a; }
.page-meta { font-size: 0.82rem; color: #64748b; margin-top: 0.3rem; }

.loading-state {
  text-align: center;
  padding: 3rem;
  color: #64748b;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e2e8f0;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 1rem;
}
@keyframes spin { to { transform: rotate(360deg); } }

.error-state {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  color: #991b1b;
}
.error-icon { font-size: 2rem; }
.error-state h3 { margin: 0.5rem 0; }
.error-state p { margin-bottom: 0.5rem; color: #7f1d1d; }
</style>
