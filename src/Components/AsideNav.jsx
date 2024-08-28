import relaxation from '../assets/relaxation.png'
import natation from '../assets/natation.png'
import cyclisme from '../assets/cyclisme.png'
import musculation from '../assets/musculation.png'
 
function AsideNav () {
  return (
    <div>
      <nav>
        <div className='AsideNav'><img src={relaxation} alt='relaxation' /></div>
        <div className='AsideNav'><img src={natation} alt='natation' /></div>
        <div className='AsideNav'><img src={cyclisme} alt='cyclisme' /></div>
        <div className='AsideNav'><img src={musculation} alt='musculation' /></div>
      </nav>
      <p> Copiryght, SportSee 2020 </p>
    </div>
  )
}
export default AsideNav