import '../styles/email.css'

function Email() {
  return (
    <div className='email'>
      <img src='/assets/mail.png' alt='mail'/>
      <form method="POST" name="portfolio_contact_form">
        <input type="hidden" name="form-name" value="contact_form"/>
        <div className='form__inputGrp'>
          <div>
            <label htmlFor='name'>What’s your name?</label>
            <input type="text" placeholder="Damian Wayne" name="name" id='name'/>
          </div>

          <div>
            <label htmlFor='email'>What’s your email?</label>
            <input 
              type="email" 
              placeholder="damian@wayneenterprises.com" 
              name="email" 
              id='email'/> 
          </div>
        </div>

        <div>
          <label htmlFor='message'>Your message</label>
          <textarea placeholder="Message" name="message" id='message'></textarea>
        </div>
        <button type="submit">
          Send message
          <img src='/assets/vector.png' alt='arrow'/>
        </button>
      </form>
    </div>
  ) 
}

export default Email
