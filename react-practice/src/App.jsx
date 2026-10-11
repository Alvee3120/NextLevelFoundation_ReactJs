import Counter from './components/Counter'
import Display from './components/Display'
import CounterProvider from './providers/counterProvider'

export default function App() {
  return (
    <CounterProvider>
      <h3>Parent</h3>
      <Counter />
      <Display />
    </CounterProvider>
  )
}
