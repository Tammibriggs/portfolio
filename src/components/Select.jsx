import { useEffect, useRef, useState } from 'react'
import '../styles/select.css'
import {useContextValue} from '../context'

function Select({text, replaceText, open, toggleSelect, filterOptionsElem, children}) {

  const {isLight} = useContextValue()
  const selectRef = useRef()
  const selectOptions = useRef()
  const [selectPos, setSelectPos] = useState({top: 0, left: 0, height: 0})

  const positionSelectOption =  () => {
    const selectElemRect = selectRef.current.getBoundingClientRect(),
    bodyRect = document.body.getBoundingClientRect(),
    offsetTop = selectElemRect.top - bodyRect.top

    setSelectPos({top: offsetTop, left: selectElemRect.left, height: selectElemRect.height})
    
  }

  // position the select options at the bottom of it's parent
  useEffect(() => {
    
    const filterCurrent = filterOptionsElem.current
    filterOptionsElem.current?.scroll(filterOptionsElem.current.scrollLeft + 1, 0) // move element a little to the left to trigger the it's scroll event listerner

    // correctly position select options while scrolling horizontally
    filterCurrent?.addEventListener(
      'scroll',
      positionSelectOption
    )

    // correctly position select options while resizing the windows
    window.addEventListener('resize', positionSelectOption)

    // unsubscribe listeners
    return () => {
      filterCurrent.removeEventListener(
        'scroll',
        positionSelectOption
      )
      window.removeEventListener('resize', positionSelectOption)
    }
  }, [open, filterOptionsElem])

  return (
    <div className='select' ref={selectRef}>
      <button onClick={toggleSelect} type="button">
        {replaceText || text} 
        {isLight 
          ? <img src='/assets/down-arrow.png' alt='down arrow'/>
          : <img src='/assets/down-arrow-light.png' alt='down arrow'/>
        }
      </button>
      {open &&
        <div 
          className='select__options' 
          ref={selectOptions}
          style={{
            left: `${selectPos.left}px`
          }}
        >
          {children}
        </div>
      }
    </div>
  )
}

export default Select