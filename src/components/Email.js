import { useState } from 'react';
import '../styles/email.css'

const EMAIL = 'godsfirstbriggs@gmail.com';

function Email() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className='email'>
      <img src='/assets/mail.png' alt='mail' />

      <div className='email__address-row'>
        <button
          type='button'
          className={`email__copy-btn ${copied ? 'email__copy-btn--copied' : ''}`}
          onClick={handleCopy}
          aria-label='Copy email address'
        >
          {copied ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
              Copy Email
            </>
          )}
        </button>
      </div>

      <form method="POST" name="portfolio_contact_form">
        <input type="hidden" name="form-name" value="contact_form" />
        <div className='form__inputGrp'>
          <div>
            <label htmlFor='name'>What's your name?</label>
            <input type="text" placeholder="Damian Wayne" name="name" id='name' />
          </div>

          <div>
            <label htmlFor='email'>What's your email?</label>
            <input
              type="email"
              placeholder="damian@wayneenterprises.com"
              name="email"
              id='email' />
          </div>
        </div>

        <div>
          <label htmlFor='message'>Your message</label>
          <textarea placeholder="Message" name="message" id='message'></textarea>
        </div>
        <button type="submit">
          Send message
          <img src='/assets/vector.png' alt='arrow' />
        </button>
      </form>
    </div>
  )
}

export default Email
