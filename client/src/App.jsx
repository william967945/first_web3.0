import { useState } from 'react'
import { Navbar, Welcome, Services, Loader, Transactions, Footer } from './components';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
