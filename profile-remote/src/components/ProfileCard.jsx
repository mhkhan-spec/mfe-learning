import React, { useState } from 'react';

const profileData = {
    name: 'Alex Rivera',
    role: 'Senior Product Designer',
    avatar: '👤',
    joined: 'March 2022',
    location: 'San Francisco, CA',
    stats: [
        { label: 'Orders', value: '47' },
        { label: 'Reviews', value: '23' },
        { label: 'Wishlist', value: '12' },
    ],
    tags: ['Premium', 'Early Adopter', 'Top Reviewer'],
};

const styles = {
    card: {
        fontFamily: "'Inter', sans-serif",
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        padding: '2rem',
        color: '#fff',
        maxWidth: '380px',
        margin: '1rem auto',
        boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)',
        position: 'relative',
        overflow: 'hidden',
    },
    badge: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'rgba(255,255,255,0.2)',
        backdropFilter: 'blur(8px)',
        borderRadius: '999px',
        padding: '3px 10px',
        fontSize: '0.72rem',
        fontWeight: '600',
        letterSpacing: '0.05em',
    },
    avatarWrap: {
        width: '70px',
        height: '70px',
        background: 'rgba(255,255,255,0.25)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.4rem',
        marginBottom: '1rem',
        border: '3px solid rgba(255,255,255,0.5)',
    },
    name: { fontSize: '1.3rem', fontWeight: '700', margin: '0 0 0.25rem' },
    role: { fontSize: '0.85rem', opacity: '0.8', margin: '0 0 0.5rem' },
    meta: { fontSize: '0.78rem', opacity: '0.7', margin: '0 0 1.25rem' },
    stats: {
        display: 'flex',
        gap: '0',
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '10px',
        marginBottom: '1.25rem',
        overflow: 'hidden',
    },
    statItem: { flex: 1, textAlign: 'center', padding: '0.75rem 0.5rem' },
    statValue: { fontSize: '1.2rem', fontWeight: '700' },
    statLabel: { fontSize: '0.7rem', opacity: '0.75', marginTop: '2px' },
    divider: { width: '1px', background: 'rgba(255,255,255,0.2)', alignSelf: 'stretch' },
    tags: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' },
    tag: {
        background: 'rgba(255,255,255,0.2)',
        borderRadius: '999px',
        padding: '3px 10px',
        fontSize: '0.75rem',
        fontWeight: '500',
    },
    editBtn: {
        width: '100%',
        padding: '0.65rem',
        background: 'rgba(255,255,255,0.95)',
        color: '#764ba2',
        border: 'none',
        borderRadius: '10px',
        fontWeight: '700',
        fontSize: '0.88rem',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
    },
    source: {
        textAlign: 'center',
        fontSize: '0.72rem',
        opacity: '0.55',
        marginTop: '0.75rem',
    },
};

function ProfileCard() {
    const [editing, setEditing] = useState(false);

    return (
        <div style={styles.card}>
            <span style={styles.badge}>⚛️ React Remote · 3002</span>
            <div style={styles.avatarWrap}>{profileData.avatar}</div>
            <p style={styles.name}>{profileData.name}</p>
            <p style={styles.role}>{profileData.role}</p>
            <p style={styles.meta}>📍 {profileData.location} &nbsp;·&nbsp; Joined {profileData.joined}</p>

            <div style={styles.stats}>
                {profileData.stats.map((s, i) => (
                    <>
                        {i > 0 && <div key={`d-${i}`} style={styles.divider} />}
                        <div key={s.label} style={styles.statItem}>
                            <div style={styles.statValue}>{s.value}</div>
                            <div style={styles.statLabel}>{s.label}</div>
                        </div>
                    </>
                ))}
            </div>

            <div style={styles.tags}>
                {profileData.tags.map(tag => (
                    <span key={tag} style={styles.tag}>✦ {tag}</span>
                ))}
            </div>

            <button
                style={styles.editBtn}
                onMouseOver={e => (e.target.style.opacity = '0.85')}
                onMouseOut={e => (e.target.style.opacity = '1')}
                onClick={() => setEditing(!editing)}
            >
                {editing ? '💾 Save Profile' : '✏️ Edit Profile'}
            </button>

            <p style={styles.source}>Rendered by profile-remote (React 18)</p>
        </div>
    );
}

export default ProfileCard;
