import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIcons() {
  return (
    <div className="about-link">
        <Link to='/about'>
            <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default AboutIcons
