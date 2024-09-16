// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventClassName = isActive ? 'event-img active-event' : 'event-img'

  const onClickImage = () => {
    onClickEvent(id)
  }

  return (
    <li className="event-item-container">
      <button type="button" className="event-button" onClick={onClickImage}>
        <img src={imageUrl} className={eventClassName} alt="event" />
      </button>
      <p className="para1">{name}</p>
      <p className="para2">{location}</p>
    </li>
  )
}

export default EventItem
