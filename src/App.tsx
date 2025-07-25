import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoApresentacao from './components/VideoApresentacao'
import About from './components/About'
import Missao from './components/Missao'
import Abordagem from './components/Abordagem'
import Plano40 from './components/Plano40'
import PodPri from './components/PodPri'
import Depoimentos from './components/Depoimentos'
import AgendamentoOnline from './components/AgendamentoOnline'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="video">
          <VideoApresentacao />
        </section>
        <section id="sobre">
          <About />
          <Missao />
        </section>
        <section id="tratamentos">
          <Plano40 />
        </section>
        <section id="abordagem">
          <Abordagem />
        </section>
        <section id="podcast">
          <PodPri />
        </section>
        <section id="depoimentos">
          <Depoimentos />
        </section>
        <section id="agendamento">
          <AgendamentoOnline />
        </section>
        <section id="contato">
          <Contato />
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
