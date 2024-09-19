import relaxation from '../assets/relaxation.png'
import natation from '../assets/natation.png'
import cyclisme from '../assets/cyclisme.png'
import musculation from '../assets/musculation.png'
import "../style/AsideNav/AsideNav.scss"
 
function AsideNav () {
  return (
    <div className='AsideNav'>
      <nav>
        <div className='Item'><img src={relaxation} alt='relaxation' /></div>
        <div className="Item"><img src={natation} alt='natation' /></div>
        <div className="Item"><img src={cyclisme} alt='cyclisme' /></div>
        <div className="Item"><img src={musculation} alt='musculation' /></div>
      </nav>
      <p> Copyright, SportSee 2020 </p>
    </div>
  )
}
export default AsideNav