import React, { useEffect, useRef } from 'react'

const App = () => {
  const ref = useRef(null)
  
  useEffect(() => {
    ref.current.onwheel = (e) => {
      e.preventDefault()
      document.querySelector('.splash').style.setProperty('height', 'calc(5vh - 16rem)')
  
      setTimeout(() => {
        ref.current.onwheel = null
      }, 500)
      
    }
  })

  return (
    <div ref={ref}>
      <section className='splash'>
        <header>
          <h1>Julie Adams Reiki</h1>
        </header>
      </section>
      <section>
        <header>
          <h3>About Me</h3>
        </header>

        <p>
          I worked for 40 years as a nurse specializing in neonatal intensive
          care. During that time, I took a Therapeutic Touch course and found
          that it seemed to help babies to calm during stress. After retiring, I
          attended an introductory session on Reiki. I had no experience with
          Reiki but I knew some people who had and they all had positive things
          to say about it. From my first experience, I felt a sense of calm and
          peace and I wanted to learn more.
        </p>

        <p>
          I started taking Japanese Reiki Level 1 from Dr. Sally Littleton in
          the spring of 2018. It was a great experience. I continued on and
          earned my Reiki Levels 2 and 3 with Dr. Littleton over the next year
          and a half. Having a daily Reiki practice helps me to manage stress
          and feel better physically, emotionally, and spiritually. My family
          and friends feel that it helps them when I practice hands on sessions
          with them. I find that it makes me feel happy and more connected to
          Reiki when I share it with others so I started on my journey of
          starting my own practice.
        </p>
      </section>
      <section>
        <h2>What Is Reiki</h2>

        <p>
          Reiki is a Japanese healing energy technique used for the treatment of
          self and others. It was developed in the early 1900’s by a Japanese
          Buddhist named Mikao Usui. The word Reiki comes from the Japanese word
          “Rei” meaning Universal Life, and “Ki” which means energy.
        </p>

        <p>
          Reiki is the energy that flows through all living things. When energy
          is blocked, it can lead to emotional, physical and spiritual
          imbalances. During a Reiki session, energy is shared by a trained
          practitioner through touch and intention to promote the health of the
          body, mind and spirit. Common reactions after a Reiki session include
          feelings of relaxation, a sense of calm, pain relief and a sense of
          well being.
        </p>

        <p>
          Reiki is not a substitute for medical care but is used as a supplement
          to medical treatment. Reiki is provided by practitioners in private
          practice as well as in hospitals throughout the world.
        </p>
      </section>
      <section>
        <h2>Reiki Session</h2>

        <p>
          The practitioner will spend some time before the session to explain
          what will happen in the session and share some common reactions to
          Reiki. The practitioner will also discuss what issues brought the
          person in to receive Reiki and answer any questions they may have.
        </p>

        <p>
          Reiki is shared in a peaceful, quiet setting. The person may lie on a
          table or sit in a chair. The person is fully clothed and a blanket can
          be used for added warmth and comfort. Soft music may be played in the
          background depending the on the person&apos;s preference.
        </p>

        <p>
          The practitioner places their hands lightly on or slightly above
          specific parts of the body for the sharing of energy. The energy
          sharing session takes about 30-45 minutes.
        </p>

        <p>
          The person receiving Reiki may feel many different sensations such as
          feeling warmth or coolness, seeing colors or feeling calm and relaxed.
          It is also not uncommon for someone to not feel much of anything at
          all. These are all perfectly normal reactions.
        </p>

        <p>
          After the session, the practitioner will spend more time talking with
          the person about their experiences. Water is recommended after a
          session.
        </p>
      </section>
      <section>
        <h3>Contact</h3>
        <form>
          <label htmlFor='name'>
            Name
            <input
              type='text'
              name='name'
              id='name'
              pattern='([A-z]|\s){1,24}'
            />
          </label>

          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              id='email'
              pattern='[A-z]{1,30}@[A-z]{1,20}(.com|.net|.org|.edu|.io)'
            />
          </label>

          <label htmlFor='phone'>
            Phone
            <input
              type='tel'
              name='phone'
              id='phone'
              pattern='1?-?\s?\(?[0-9]{3}\)?\s?-?[0-9]{3}-?[0-9]{4}'
            />
          </label>

          <label htmlFor='subject'>
            Subject
            <input type='text' name='subject' id='subject' />
          </label>

          <label htmlFor='comment'>
            Comment
            <textarea id='comment' />
          </label>

          <input type='submit' value='Submit' id='submit' />
        </form>
      </section>
    </div>
  )
}

export default App
