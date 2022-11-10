/**
 * use site is https://ja.reactjs.org/docs/error-boundaries.html
 */

import React,{ Component, ErrorInfo,PropsWithChildren } from "react";

export default class ErrorBoundary extends Component<PropsWithChildren,{hasError: boolean}> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(): { hasError: boolean } {
    console.log("call on getDerivedStatefromError.");
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>Something went wrong.</div>;
    }

    return <>{this.props.children}</>;
  }
}
