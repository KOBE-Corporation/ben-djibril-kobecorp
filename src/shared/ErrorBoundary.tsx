import { Component } from 'react'
import type { ReactNode } from 'react'
import ErrorFallback from '../components/ui/ErrorFallback'

type Props = {
  children: ReactNode
  fallbackVariant?: 'page' | 'section' | 'inline'
  onReset?: () => void
}

type State = {
  hasError: boolean
  error?: unknown
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: unknown): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error('UI Error:', error, info)
  }

  private handleRetry = () => {
    this.props.onReset?.()
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800">
          <ErrorFallback
            variant={this.props.fallbackVariant ?? 'page'}
            error={this.state.error}
            onRetry={this.handleRetry}
          />
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
