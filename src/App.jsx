import './App.css'
import MovieList from './pages/MovieList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieForm from './pages/MovieForm'
import { useEffect, useState } from 'react'
const getLocalItems = () => {
  let film = localStorage.getItem("films")
  if (film) {
      return JSON.parse(localStorage.getItem("films"))
  } else {
      return [];
  }
}
function App() {

  const [allEntry, setAllEntry] = useState(getLocalItems())

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(allEntry))
}, [allEntry])




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<MovieList  allEntry={allEntry} setAllEntry={setAllEntry} />} />
          <Route path="/movie-form"   element={<MovieForm allEntry={allEntry} setAllEntry={setAllEntry} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
