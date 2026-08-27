import { Component, type ErrorInfo, type ReactNode } from "react";
import { clinic } from "../data";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State { return { hasError: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error("Clinic site error", error, info); }
  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <main className="grid min-h-screen place-items-center bg-paper px-5 py-20">
        <section className="max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Something went wrong</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">We couldn't load this page.</h1>
          <p className="mx-auto mt-4 max-w-md text-ink/65">Please refresh the page or contact the clinic directly.</p>
          <div className="mt-7 flex justify-center gap-3">
            <button onClick={() => window.location.reload()} className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white">Refresh</button>
            <a href={`tel:${clinic.phoneRaw}`} className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold">Call clinic</a>
          </div>
        </section>
      </main>
    );
  }
}
