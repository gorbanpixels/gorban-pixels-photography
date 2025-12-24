import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";
import Header from './components/Header'
import Footer from './components/Footer'
import HomeBlog from './components/Blog'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Investment from './pages/Investment'
import Portfolio from './pages/Portfolio'
import Kathy_Jacob_Eng from './pages/Kathy_Jacob_Eng'
import Chloe_Ryan_Eng from './pages/Chloe_Ryan_Eng'
import Blog from './pages/Blog'
import BlogPost2025WeddingTrends from './pages/BlogPost2025WeddingTrends'
import BlogPostFloridaBotanicalGarden from './pages/BlogPostFloridaBotanicalGarden'
import BlogPostFamilyGuide from './pages/BlogPostFamilyGuide'
import BlogPostRehearsalDinner from './pages/BlogPostRehearsalDinner'
import BlogPostWeddingPrepTampa from './pages/BlogPostWeddingPrepTampa'
import BlogPostEditorialTampa from './pages/BlogPostEditorialTampa'
import BlogPostAnniversaryPhotoshoot from './pages/BlogPostAnniversaryPhotoshoot'
import BlogPostFortDesotoElopement from './pages/BlogPostFortDesotoElopement'


function App() {
  return (
    <Router>
        <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/Kathy_Jacob_Eng" element={<Kathy_Jacob_Eng />} />
          <Route path="/portfolio/Chloe_Ryan_Eng" element={<Chloe_Ryan_Eng />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/homeblog" element={<HomeBlog />} />
          <Route path="/blog/2025-wedding-trends" element={<BlogPost2025WeddingTrends />} />
          <Route path="/blog/florida-botanical-gardens-wedding-photos-cost" element={<BlogPostFloridaBotanicalGarden />} />
          <Route path="/blog/tampa-family-guide" element={<BlogPostFamilyGuide />} />
          <Route path="/blog/rehearsal-dinner-venues-tampa-fl" element={<BlogPostRehearsalDinner />} />
          <Route path="/blog/wedding-prep-tampa-fl" element={<BlogPostWeddingPrepTampa />} />
          <Route path="/blog/editorial-vibes-in-tampa" element={<BlogPostEditorialTampa />} />
          <Route path="/blog/anniversary-photoshoot-unforgettable" element={<BlogPostAnniversaryPhotoshoot />} />
          <Route path="/blog/escape-convention-fort-desoto-elopement" element={<BlogPostFortDesotoElopement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
