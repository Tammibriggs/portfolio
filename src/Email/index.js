import './index.css'

function Email(){
  return (
    <div className="email wrapper">
      <h2>Drop an Email</h2>
      <div>
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