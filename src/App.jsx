import MainFeature from './components/MainFeature'
import Middle from './components/Middle'
import Review from './components/Review'
import Navbar from './components/header/navbar'
import Top from './components/top'
import Pricing from './components/Pricing'
import './index.css'
import Blogs from './components/Blogs'
import Ticket from './components/Ticket'


function App() {

  return (
    <>
      <Navbar></Navbar>   
      <Top></Top>   
      <MainFeature></MainFeature>
      <Middle></Middle>
      <Review></Review>
      <Pricing></Pricing>
      <Blogs></Blogs>
      <Ticket></Ticket>
      <h1 className='bg-violet-300 text-violet-500 font-extrabold text-3xl'>Hello World</h1>
    </>
  )
}

export default App
