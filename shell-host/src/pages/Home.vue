<template>
  <div class="home-page">
    <div class="hero">
      <div class="hero-badge">🚀 Webpack 5 Module Federation</div>
      <h1 class="hero-title">MFE <span class="gradient-text">Storefront</span></h1>
      <p class="hero-subtitle">
        A micro-frontend architecture with Vue 3 and React 18 running as independent applications,
        federated together seamlessly at runtime.
      </p>
      <div class="hero-actions">
        <router-link to="/products" class="btn btn-primary">Browse Products</router-link>
        <router-link to="/profile" class="btn btn-secondary">View Profile</router-link>
      </div>
    </div>

    <div class="architecture-grid">
      <div class="arch-card arch-shell">
        <div class="arch-icon">🏠</div>
        <h3>shell-host</h3>
        <p>Vue 3 Container</p>
        <span class="arch-port">:3000</span>
        <div class="arch-role">HOST (Consumer)</div>
      </div>
      <div class="arch-arrow">→</div>
      <div class="arch-card arch-product">
        <div class="arch-icon">🛍️</div>
        <h3>product-remote</h3>
        <p>Vue 3 Catalog</p>
        <span class="arch-port">:3001</span>
        <div class="arch-role">REMOTE</div>
      </div>
      <div class="arch-arrow">→</div>
      <div class="arch-card arch-profile">
        <div class="arch-icon">👤</div>
        <h3>profile-remote</h3>
        <p>React 18 Dashboard</p>
        <span class="arch-port">:3002</span>
        <div class="arch-role">REMOTE</div>
      </div>
    </div>

    <div class="shared-section">
      <h2>Shared Singletons</h2>
      <div class="shared-pills">
        <span class="pill pill-vue">vue@3</span>
        <span class="pill pill-router">vue-router@4</span>
        <span class="pill pill-react">react@18</span>
        <span class="pill pill-react">react-dom@18</span>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'HomePage' };
</script>

<style scoped>
.home-page { max-width: 900px; margin: 0 auto; }

.hero {
  text-align: center;
  padding: 3rem 1rem;
}

.hero-badge {
  display: inline-block;
  background: #eef2ff;
  color: #6366f1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: 999px;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #0f172a;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  color: #475569;
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

.hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

.btn {
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #fff; box-shadow: 0 4px 15px rgba(99,102,241,0.3); }
.btn-secondary { background: #fff; color: #6366f1; border: 2px solid #6366f1; }

.architecture-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.arch-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  text-align: center;
  width: 160px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.arch-card h3 { font-size: 0.88rem; font-weight: 700; color: #0f172a; margin: 0.5rem 0 0.25rem; }
.arch-card p { font-size: 0.75rem; color: #64748b; margin: 0; }
.arch-icon { font-size: 1.75rem; }

.arch-port {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 1px 6px;
  color: #475569;
}

.arch-role {
  margin-top: 0.5rem;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #6366f1;
}

.arch-shell { border-top: 3px solid #6366f1; }
.arch-product { border-top: 3px solid #10b981; }
.arch-profile { border-top: 3px solid #f59e0b; }
.arch-arrow { font-size: 1.5rem; color: #94a3b8; }

.shared-section { text-align: center; padding: 1.5rem 0 2rem; }
.shared-section h2 { font-size: 1rem; font-weight: 600; color: #475569; margin-bottom: 0.75rem; }
.shared-pills { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
.pill { padding: 4px 14px; border-radius: 999px; font-size: 0.8rem; font-weight: 600; }
.pill-vue { background: #dcfce7; color: #16a34a; }
.pill-router { background: #f0fdf4; color: #15803d; }
.pill-react { background: #eff6ff; color: #2563eb; }
</style>
