import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught application error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#070B14] text-slate-100 flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-[#0B1120] border border-[#D4AF37]/50 rounded-2xl p-8 shadow-2xl space-y-5">
            <div className="font-serif text-2xl font-bold text-[#D4AF37]">
              DANANG VVIP
            </div>
            <h2 className="text-lg font-bold text-white">
              일시적인 로딩 오류가 발생했습니다
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              페이지를 새로고침하거나 브라우저 캐시를 갱신해 주시기 바랍니다.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className="py-2.5 px-6 text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded transition-colors cursor-pointer"
              >
                페이지 새로고침
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
