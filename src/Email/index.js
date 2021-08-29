import './index.css'
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

function Email(){
  return (
    <div className="email wrapper">
      <div className="email__head">
      <MailOutlineRoundedIcon id="email__head__icon"/>
        <h2>Drop an Email</h2>
      </div>
      <div className="email__form">
        <form method="POST" name="Portfolio_contact_form">
            <input type="hidden" name="form-name" value="contact_form"/>
            <input type="text" placeholder="Name" name="name"/>
            <input type="email" placeholder="Your email" name="email"/>
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit">Send email</button>
        </form>
      </div>
    </div>
  )
}

export default Email