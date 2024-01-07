import { Link } from 'react-router-dom'
import './Card.css'

export default function Card(props:any) {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='text'>{props.text}</div>
        <div className='divider'>------</div>
        <div className='description'>{props.description}</div>
        <Link to={props.link} className='link'></Link>
      </div>
    </div>
  )
}
