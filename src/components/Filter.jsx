import { useEffect, useRef, useState } from 'react'
import '../styles/filter.css'
import Select from './Select'
import {useContextValue} from '../context'

function Filter({
  languages,
  setLanguagues,
  frameworks,
  setFrameworks,
  displayAll
}) {

  const {isLight} = useContextValue()
  const languagesOptions = ['JavaScript', 'Python']
  const frameworksOptions = ['React', 'Vue', 'Angular', 'Django']
  const filterOptionsElem = useRef()
  const [selected, setSelected] = useState([])
  const [openSelect, setOpenSelect] = useState({
    languages: false, 
    frameworks: false, 
  })

   // Keeping checkbox checked even after a render 
   useEffect(() => {
    let checkboxes = document.getElementsByClassName('chk')
      for(let i = 0; i < checkboxes.length; i++) {
        if(selected.includes(checkboxes[i].value.toLowerCase())) {
          checkboxes[i].checked = true
        }
      }
  }, [openSelect, selected])

  // Adding checked checkbox to the state and removing unchecked checkbox from the state
  const handleChange = (e, state, setState) => {
    let isChecked = e.target.checked;
    if(isChecked) setState([...state, e.target.value.toLowerCase()])
    else setState(state.filter((option) => option !== e.target.value.toLowerCase()))
  }

  const toggleLanguageSelect = () => {
    setOpenSelect({
      languages: !openSelect.languages, 
      frameworks: false, 
    })
    setSelected(languages)
  }

  const toggleFremeworksSelect = () => {
    setOpenSelect({
      languages: false, 
      frameworks: !openSelect.frameworks, 
    })
    setSelected(frameworks)
  }

  return (
    <div className='filter'>
      {isLight
        ? <img src='/assets/filter.png' alt='filter'/>
        : <img src='/assets/filter-light.png' alt='filter'/> 
      }
      <div className='filter__options' ref={filterOptionsElem}>
        <span onClick={() => {
          displayAll()
        }}>All</span>
        <Select
          filterOptionsElem={filterOptionsElem}
          text='Languages'
          open={openSelect.languages}
          toggleSelect={toggleLanguageSelect}
        >
          {languagesOptions.map((option, i) => 
            <div key={i}>
              <input 
                type='checkbox' 
                id={option} 
                value={option} 
                className='chk'
                onChange={(e) => handleChange(e, languages, setLanguagues)}/>
              <label htmlFor={option}>{option}</label>
            </div>
          )}
        </Select>

        <Select 
          text='Frameworks'
          open={openSelect.frameworks}
          filterOptionsElem={filterOptionsElem}
          toggleSelect={toggleFremeworksSelect}
        >
          {frameworksOptions.map((option, i) =>
            <div key={i}>
              <input 
                type='checkbox'
                id={option} 
                value={option} 
                className='chk'
                onChange={(e) => handleChange(e, frameworks, setFrameworks)}/>
              <label htmlFor={option}>{option}</label>
            </div>
          )}
        </Select>
      </div>
    </div>
  )
}

export default Filter
