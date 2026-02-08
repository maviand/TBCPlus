import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 md:p-12 text-center border border-red-500/30 bg-[#1a0505] rounded-lg my-8 mx-auto max-w-2xl shadow-xl">
                    <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/50">
                        <AlertTriangle className="text-red-500 w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-hero text-red-500 mb-3 tracking-wide">Component Error</h2>
                    <p className="text-gray-400 mb-6 font-body">
                        Something went wrong while rendering this section. Changing tabs or refreshing the page might fix it.
                    </p>

                    <div className="bg-black/50 p-4 rounded text-left mb-6 border border-red-900/30 overflow-auto max-h-48 custom-scrollbar">
                        <code className="text-xs font-mono text-red-300">
                            {this.state.error && this.state.error.toString()}
                        </code>
                    </div>

                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-200 border border-red-500/30 rounded uppercase text-xs font-bold tracking-widest transition-all"
                    >
                        <RotateCcw size={14} /> Try Again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
