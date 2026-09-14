import React from 'react';
import { useApp } from '../context/AppContext';

export default function Toast() {
  const { toasts, removeToast } = useApp();

  if (!toasts.length) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '420px',
      width: 'calc(100% - 48px)',
      pointerEvents: 'none'
    }}>
      {toasts.map(toast => (
        <div
          key={toast.id}
          style={{
            pointerEvents: 'auto',
            background: toast.type === 'warning' 
              ? 'rgba(234, 88, 12, 0.95)' 
              : toast.type === 'info'
              ? 'rgba(14, 116, 144, 0.95)'
              : 'rgba(16, 185, 129, 0.95)',
            color: '#ffffff',
            padding: '1rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.925rem',
            fontWeight: '600',
            backdropFilter: 'blur(8px)',
            animation: 'toastSpringIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <div>{toast.message}</div>
          <button
            onClick={() => removeToast(toast.id)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '1.2rem',
              lineHeight: 1,
              opacity: 0.8
            }}
          >
            ✕
          </button>
        </div>
      ))}
      <style>{`
        @keyframes toastSpringIn {
          0% {
            transform: translateX(120%) scale(0.9);
            opacity: 0;
          }
          70% {
            transform: translateX(-8px) scale(1.02);
            opacity: 1;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
