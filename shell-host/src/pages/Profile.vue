<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>👤 User Profile</h1>
      <p class="page-meta">React component mounted from <strong>profile-remote</strong> (Port 3002)</p>
    </div>

    <div class="react-mount-info">
      <span class="react-badge">⚛️ React 18</span>
      <span>This section is rendered by a React component federated at runtime.</span>
    </div>

    <!-- React Bridge: profile-remote mounts into this div -->
    <div id="profile-remote-root" ref="profileMount" class="profile-mount"></div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'ProfilePage',
  setup() {
    const profileMount = ref(null);
    let reactRoot = null;

    onMounted(async () => {
      try {
        const [{ default: React }, { createRoot }, { default: ProfileCard }] = await Promise.all([
          import('react'),
          import('react-dom/client'),
          import('profileapp/ProfileCard'),
        ]);

        reactRoot = createRoot(profileMount.value);
        reactRoot.render(React.createElement(ProfileCard));
      } catch (e) {
        if (profileMount.value) {
          profileMount.value.innerHTML = `
            <div class="react-error">
              <span>⚠️</span>
              <h3>profile-remote Unavailable</h3>
              <p>Make sure <strong>profile-remote</strong> is running on port 3002.</p>
              <code>npm start</code> inside <code>profile-remote/</code>
            </div>`;
        }
      }
    });

    onBeforeUnmount(() => {
      if (reactRoot) reactRoot.unmount();
    });

    return { profileMount };
  },
};
</script>

<style scoped>
.page-wrapper { max-width: 600px; margin: 0 auto; }
.page-header { margin-bottom: 1.25rem; }
.page-header h1 { font-size: 1.8rem; font-weight: 800; color: #0f172a; }
.page-meta { font-size: 0.82rem; color: #64748b; margin-top: 0.3rem; }

.react-mount-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #475569;
  margin-bottom: 1.25rem;
}

.react-badge {
  background: #eff6ff;
  color: #2563eb;
  padding: 2px 10px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.78rem;
}

.profile-mount { min-height: 200px; }

.react-error {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  color: #991b1b;
}
.react-error span { font-size: 2rem; }
.react-error h3 { margin: 0.5rem 0; }
.react-error p { margin-bottom: 0.5rem; color: #7f1d1d; }
</style>
