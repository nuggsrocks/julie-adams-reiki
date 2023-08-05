import '../../public/index.scss'
import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light border border-primary m-5'>
      <div className='container-fluid align-items-center'>
        <a className='navbar-brand display-1' href='/'>
          Inner Light Reiki
        </a>
        <div className='navbar-nav me-auto mb-2 mb-lg-0'>
          <a href='#about' className='nav-link'>
            About
          </a>
          <a href='#what-is-reiki' className='nav-link'>
            What Is Reiki
          </a>
          <a href='#reiki-session' className='nav-link'>
            Reiki Session
          </a>
          <a href='#services' className='nav-link'>
            Services
          </a>
          <a href='#contact' className='nav-link'>
            Contact
          </a>
          <a href='#resources' className='nav-link'>
            Resources
          </a>
        </div>
      </div>
    </nav>
  )
}

const Section = ({ id, children }) => {
  return (
    <section id={id} className='m-5'>
      <div className='container-fluid'>{children}</div>
    </section>
  )
}

const App = () => {
  return (
    <div className='m-5'>
      <Nav />
      <Section id='about'>
        <h3 className='text-primary'>About Me</h3>

        <div className='py-3'>
        <p>
          I worked for more than 35 years as a registered nurse specializing in
          neonatal intensive care. During that time, I took a Therapeutic Touch
          course and found that it seemed to help babies to calm during stress.
          After retiring in 2017, I attended an introductory session on Reiki. I
          had no personal experience with Reiki but I knew people who had and
          they all had positive things to say about it. From my first
          experience, I felt a sense of calm and peace and I wanted to learn
          more.
        </p>

        <p>
          In the spring of 2018, I began a Japanese Reiki Level 1 class taught
          by Dr. Sally Littleton, Master Teacher and founder of Enlightenment
          Reiki. It was a fulfilling experience. I continued on and earned my
          Reiki Levels 2 and 3 with Dr. Littleton over the next year and a half.
          I completed my Master Teacher certification in May of 2021. I also
          completed an Animal Reiki certification in 2019.
        </p>

        <p>
          Having a daily Reiki practice helps me to manage stress and feel
          better physically, emotionally, and spiritually. My family and friends
          feel that it helps them when I share Reiki with them. I find that it
          makes me feel grateful and more connected to Reiki when I share it
          with others.
        </p>
        </div>

            <h5 className='text-secondary'>Qualifications</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                Shoden (Reiki First Degree) - June 2018
              </li>
              <li className='list-group-item'>
                Okuden (Reiki Second Degree) - October 2018
              </li>
              <li className='list-group-item'>
                Shinpiden (Reiki Master Practitioner) - June 2019
              </li>
              <li className='list-group-item'>
                Animal Reiki Practitioner - September 2019
              </li>
              <li className='list-group-item'>
                Energy Healing Certification - Northwestern Community College - July 2020
              </li>
              <li className='list-group-item'>
                Gokuikaiden (Shihan, Master Teacher) - May 2021
              </li>
              <li className='list-group-item'>
                Member of the Rieki Healing Association
              </li>
            </ul>
      </Section>
      <Section id='what-is-reiki'>
        <h3 className='text-primary'>What Is Reiki</h3>

        <div className='py-3'>
        <p>
          Reiki is a Japanese healing energy technique used for the treatment of
          self and others. It was developed in the early 1900&apos;s by a
          Japanese Buddhist named Mikao Usui. The word Reiki comes from the
          Japanese word “Rei” meaning Universal Life, and “Ki” which means
          energy. Reiki is the energy that flows through all living things. When
          energy is blocked, it can lead to emotional, physical and spiritual
          imbalances. During a Reiki session, energy is shared by a trained
          practitioner through touch and intention to promote the health of the
          body, mind and spirit. Common reactions after a Reiki session include
          feelings of relaxation, a sense of calm, pain relief and a sense of
          well being. People seek out Reiki for a variety of reasons. Some of
          these include pain, anxiety or emotional distress. I have shared Reiki
          with people who are grieving and also with people who have a terminal
          illness and are in the process of dying. Reiki is not a substitute for
          medical care but is used as a supplement to medical treatment. Reiki
          is provided by practitioners in private practice as well as in
          hospitals and clinics throughout the world.
        </p>
        </div>
      </Section>
      <Section id='reiki-session'>
        <h3 className='text-primary'>Reiki Session</h3>
        <div className='py-3'>
        <p>
          The practitioner will spend some time before the session to explain
          what will happen in the session and share some common reactions to
          Reiki. The practitioner will also discuss what issues brought the
          person in to receive Reiki and answer any questions they may have.
          Reiki is shared in a peaceful, quiet setting. The person may lie on a
          table or sit in a chair. The person is fully clothed and a blanket can
          be used for added warmth and comfort. Soft music may be played in the
          background depending the on the person&apos;s preference. The
          practitioner places their hands lightly on or slightly above specific
          parts of the body for the sharing of energy. The energy sharing
          session takes about 45 minutes. The person receiving Reiki may feel
          many different sensations such as feeling warmth or coolness, seeing
          colors or feeling calm and relaxed. It is also not uncommon for
          someone to not feel much of anything at all. These are all perfectly
          normal reactions. After the session, the practitioner will spend more
          time talking with the person about their experiences. Water is
          recommended after a session to enhance the Reiki.
        </p>
        </div>
      </Section>
      <Section id='services'>
        <h3 className='text-primary'>Services</h3>

        <div className='py-3'>
        <p>
          I offer Reiki sessions by appointment in person and virtually on
          FaceTime or Zoom. My in person sessions will be held at The Box
          building, 425 Boardman in Traverse City. The building is located at
          the corner of Eighth St. and Boardman. Sessions will be held in the
          lower level of the building in the wellness center called The Well. In
          person sessions are by appointment only and can be scheduled by
          contacting me by phone or email.
        </p>
        <p>
          One hour in person sessions- $50 Virtual sessions- $40 Payments can be
          made by cash, check, or PayPal
        </p>
        </div>
      </Section>
      <Section id='contact'>
        <h3 className='text-primary'>Contact</h3>
        <form>
          <div className='my-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              id='name'
              className='form-control'
              name='name'
              required
              type='text'
            />
          </div>

          <div className='my-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              id='email'
              className='form-control'
              name='email'
              required
              type='email'
            />
          </div>

          <div className='my-3'>
            <label htmlFor='phone' className='form-label'>
              Phone
            </label>
            <input
              id='phone'
              className='form-control'
              name='phone'
              required
              type='tel'
            />
          </div>

          <div className='my-3'>
            <label htmlFor='subject' className='form-label'>
              Subject
            </label>
            <input
              id='subject'
              className='form-control'
              name='subject'
              required
              type='text'
            />
          </div>

          <div className='my-3'>
            <label htmlFor='comment' className='form-label'>
              Comment
            </label>
            <textarea
              id='comment'
              className='form-control'
              name='comment'
              required
            />
          </div>

          <button
            type='submit'
            className='btn btn-primary btn-lg btn-block w-100'
          >
            Submit
          </button>
        </form>
      </Section>
      <Section id='resources'>
        <div className='card border border-primary'>
          <div className='card-body'>
            <h3 className='card-title text-primary'>Resources</h3>
            <div className='list-group list-group-flush'>
              <a
                href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5871310/'
                className='list-group-item list-group-item-action'
              >
                Reiki is Better Than Placebo and Has Broad Potential as a
                Complementary Health Therapy
              </a>
              <a
                href='https://centerforreikiresearch.com/'
                className='list-group-item list-group-item-action'
              >
                Center for Reiki Research
              </a>
              <a
                href='https://www.liebertpub.com/doi/10.1089/acm.2019.0022'
                className='list-group-item list-group-item-action'
              >
                A Large Scale Effectiveness Trial of Reiki for Physical and
                Psychological Health
              </a>
            </div>
          </div>
        </div>
      </Section>
      <footer>
        <div className='container-fluid text-center'>
          <small>Copyright 2023 Inner Light Reiki</small>
        </div>
      </footer>
    </div>
  )
}

export default App
