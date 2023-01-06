import Header from './components/Header'
import Sidebar from './components/sidebar/Sidebar'

function App () {
  return (
    <div className='App'>
      <Header />
      <div className='container px-0 py-4'>
        <div className='app__body layout__content'>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App
