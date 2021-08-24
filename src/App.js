import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
const getLocalStorage = () => {
  let theme = 'light-theme'
  const local = localStorage.getItem('theme')
  return local ? local : theme
}
function App() {
  const [theme, setTheme] = useState(getLocalStorage())
  const handleClick = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <button className='btn' onClick={handleClick}>
            Toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
