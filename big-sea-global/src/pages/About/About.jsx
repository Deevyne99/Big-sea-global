import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Navbar from '../../components/navbar/Navbar'
import Values from '../../components/Values/Values'
import AboutComponent from '../../components/About/About'
import TeamContainer from '../../components/teamContainer/TeamContainer'
import Footer from '../../components/footer/Footer'
const About = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div>
        <BreadCrumb />
      </div>
      <div>
        <AboutComponent />
      </div>
      <div>
        <Values />
      </div>
      <div>
        <TeamContainer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About
