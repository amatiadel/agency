import Header from './components/Header'
import Hero4 from './components/Hero4'
import Work from './work-section/Work'
import Process from './components/Process'
import ServicesPricing from './components/ServicesPricing'
import Contact from './components/Contact'
import QuizForm from './components/QuizForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero4 />
        <Work />
        <Process />
        <ServicesPricing />
        <QuizForm />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
