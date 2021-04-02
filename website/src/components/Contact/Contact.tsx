import { FC } from 'react'
import Main from '../Main/Main'

const Contact: FC = () => {
  return (
    <Main>
      <div className="contact">
        <div className="contact__wrapper">
          <h1 className="contact__wrapper__title">Get in touch</h1>
          <p className="contact__wrapper__description">
            A lorum is a male genital piercing, placed horizontally on the underside of the penis at
            its base, where the penis meets the scrotum. The word lorum is a portmanteau of the
            words.
          </p>
          <form className="contact__wrapper__form">
            <p className="contact__wrapper__form__title">Contact Form</p>
            <div className="contact__wrapper__form__grid">
              <div className="contact__wrapper__form__group">
                <label htmlFor="contactName">
                  Name <small>*</small>
                </label>
                <input name="name" type="text" id="contactName" />
              </div>
              <div className="contact__wrapper__form__group">
                <label htmlFor="contactEmail">
                  Email Address <small>*</small>
                </label>
                <input name="name" type="text" id="contactName" />
              </div>
            </div>
            <div className="contact__wrapper__form__group">
              <label htmlFor="message">
                Message <small>*</small>
              </label>
              <textarea name="name" id="message" />
            </div>
            <div className="contact__wrapper__form__button">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  )
}

export default Contact
