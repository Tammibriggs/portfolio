import '../styles/hero.css'

function Hero({text1, text2, children}) {
  return (
    <div className='hero wrapper'>
      <div>
        <span>{text1}</span>
        <h1>{text2}</h1>
      </div>
      {children}
    </div>
  )
}

export default Hero
