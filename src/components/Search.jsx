import '../styles/search.css'

function Search({setState, value}) {
  return (
    <div className='search'>
      <img src='/assets/search.png' alt='search'/> 
      <input
        placeholder='Search articles...'
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  )
}

export default Search
 