// Write your code here
import './index.css'

const registrationStatus = {
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
  yetToReg: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {renderRegistrationDetails} = props

  const renderDefaultView = () => (
    <p className="para">Click on an event, to view its registration details</p>
  )

  const renderClosedRegisterView = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="status-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="para">Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderAlreadyRegistrationView = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="status-img"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderYetToRegistorView = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="status-img"
      />
      <p className="para">
        A live performance brings so much to your relationShip with dance.
        Seeing dnce live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationStatus = () => {
    switch (renderRegistrationDetails) {
      case registrationStatus.registered:
        return renderAlreadyRegistrationView()
      case registrationStatus.closed:
        return renderClosedRegisterView()
      case registrationStatus.yetToReg:
        return renderYetToRegistorView()
      default:
        return renderDefaultView()
    }
  }

  return (
    <div className="event-status-container">{renderRegistrationStatus()}</div>
  )
}
export default ActiveEventRegistrationDetails
