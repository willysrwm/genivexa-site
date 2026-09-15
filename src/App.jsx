import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Tools from './pages/Tools'
import Blog from './pages/Blog'
import Article from './pages/Article'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/outils" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
