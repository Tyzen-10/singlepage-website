import MainFeature from './components/MainFeature'
import Middle from './components/Middle'
import Review from './components/Review'
import Navbar from './components/header/navbar'
import Top from './components/top'
import Pricing from './components/Pricing'
import './index.css'
import Blogs from './components/Blogs'
import Ticket from './components/Ticket'
import Footer from './components/header/footer'


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
      <Footer></Footer>
    </>
  )
}

export default App
