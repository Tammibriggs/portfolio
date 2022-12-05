import '../styles/testimonial.css'

function Testimonial({text, author, authorImg, platform}) {
  return (
    <div className='testimonial'>
      <p>
        {text}
      </p>
      <div className='testimonial__author'>
        <img src={authorImg} alt='avater'/>
        <span>
          <h3 className='testimonial__authorName'>{author}</h3>
          <span>{platform}</span>
        </span>
      </div> 
    </div>
  )
}

export default Testimonial
