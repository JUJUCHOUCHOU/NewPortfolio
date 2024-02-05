import About from '../components/about/index'
import Nav from '../components/nav/index'
import Header from '../components/header'
import Footer from '../components/footer'
import Skills from '../components/skills'
import Services from '../components/services'
import Works from '../components/works'

function Page(){
   return(
    <div className='PageContainer'>
    <Nav />
    <Header />
    <About/>
    <Services/>
    <Skills/>
    <Works />
    <Footer />
    </div>
   )

}
export default Page