import Card from '../Components/Shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className='about-link'>
          <h1>About this project</h1>
          <p> This is the React App to leave feedback for a product or Service</p>
          <br/>
          <p>
            <Link to='/'>Back to home</Link>
            </p>
        </div>
    </Card>
  )
} 

export default AboutPage
