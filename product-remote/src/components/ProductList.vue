<template>
  <div class="product-list">
    <div class="pl-header">
      <div class="pl-icon">🛍️</div>
      <h2>Product Catalog</h2>
      <p class="pl-subtitle">Loaded from <strong>product-remote</strong> · Port 3001</p>
    </div>
    <div class="products-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
        @mouseenter="hovered = product.id"
        @mouseleave="hovered = null"
        :class="{ 'card-hovered': hovered === product.id }"
      >
        <div class="card-emoji">{{ product.emoji }}</div>
        <div class="card-body">
          <h3>{{ product.name }}</h3>
          <p class="card-desc">{{ product.description }}</p>
          <div class="card-footer">
            <span class="price">${{ product.price }}</span>
            <button class="add-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      hovered: null,
      products: [
        { id: 1, emoji: '💻', name: 'Pro Laptop X1', description: 'Ultra-thin, powerful 15" workstation.', price: '1,299' },
        { id: 2, emoji: '🎧', name: 'Studio Headphones', description: 'Noise-cancelling, Hi-Res audio.', price: '349' },
        { id: 3, emoji: '⌨️', name: 'Mech Keyboard TKL', description: 'Tactile switches, premium aluminium.', price: '189' },
        { id: 4, emoji: '🖱️', name: 'Ergo Mouse Pro', description: 'Wireless, ergonomic, 3-month battery.', price: '79' },
        { id: 5, emoji: '📱', name: 'SmartPhone Z', description: '6.7" AMOLED, 200MP camera.', price: '999' },
        { id: 6, emoji: '⌚', name: 'SmartWatch Elite', description: 'Health tracking, OLED display.', price: '449' },
      ],
    };
  },
};
</script>

<style scoped>
.product-list {
  padding: 1.5rem;
  font-family: 'Inter', sans-serif;
}

.pl-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.pl-icon {
  font-size: 2.5rem;
}

.pl-header h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0.25rem 0 0.5rem;
}

.pl-subtitle {
  font-size: 0.8rem;
  color: #64748b;
  background: #f1f5f9;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.product-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.card-hovered {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.15);
  border-color: #6366f1;
}

.card-emoji {
  font-size: 2rem;
}

.card-body h3 {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
}

.card-desc {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0 0 0.75rem;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 1rem;
  font-weight: 700;
  color: #6366f1;
}

.add-btn {
  background: #6366f1;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.add-btn:hover {
  background: #4f46e5;
}
</style>
