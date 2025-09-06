import Header from './components/Header'
import Hero3 from './components/Hero3'
import Projects from './components/Projects'
import Process from './components/Process'
import ServicesPricing from './components/ServicesPricing'
import QuizForm from './components/QuizForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Hero3 />
        <Projects />
        <Process />
        <ServicesPricing />
        <QuizForm />
        <Footer />
      </main>
    </>
  )
}
