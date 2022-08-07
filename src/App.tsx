import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Output from './components/Output'
import Footer from './components/Footer'
import { ApiProvider } from './context/context'

export default function App(): JSX.Element {
  return (
    <div className="app">
      <ApiProvider>
        <Header />  
        <Menu />
        <Output />
        <Footer />
      </ApiProvider>
    </div>
  )
}
