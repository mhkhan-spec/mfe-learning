<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-brand">
        <span class="nav-logo">🏪</span>
        <span class="nav-title">MFE Storefront</span>
        <span class="nav-tag">Webpack 5 Module Federation</span>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="nav-link--active" exact>🏠 Home</router-link>
        <router-link to="/products" class="nav-link" active-class="nav-link--active">🛍️ Products</router-link>
        <router-link to="/profile" class="nav-link" active-class="nav-link--active">👤 Profile</router-link>
      </div>
      <div class="nav-status">
        <span class="status-dot"></span>
        <span>All remotes online</span>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', sans-serif;
  background: #f8fafc;
  min-height: 100vh;
  color: #0f172a;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ---- Navbar ---- */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 64px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  gap: 1.5rem;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.nav-logo { font-size: 1.5rem; }

.nav-title {
  font-size: 1.1rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-tag {
  font-size: 0.68rem;
  background: #eef2ff;
  color: #6366f1;
  padding: 2px 8px;
  border-radius: 999px;
  font-weight: 600;
  display: none;
}

@media (min-width: 720px) { .nav-tag { display: inline; } }

.nav-links {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  text-decoration: none;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #475569;
  transition: background 0.15s, color 0.15s;
}

.nav-link:hover { background: #f1f5f9; color: #1e293b; }
.nav-link--active { background: #eef2ff; color: #6366f1; font-weight: 600; }

.nav-status {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: #64748b;
  flex-shrink: 0;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ---- Main ---- */
.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
