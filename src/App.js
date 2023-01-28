import './App.css'
import Cards from "./components/CARDS/Cards.jsx"
import { useState, useEffect } from 'react'
import s from "../src/components/App.module.css"
import NavBar from './components/NAVBAR/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './components/ABOUT/About.jsx'
import Detail from "./components/DETAIL/Detail.jsx"
import Error from "./components/ERROR/Error.jsx"
import LandingPage from "./components/LANDING-PAGE/LandingPage.jsx"
import Form from './components/FORM/Form'
import { useLocation, useNavigate } from 'react-router-dom'
import Favorite from "./components/FAVORITE/Favorite.jsx"


function App () {
   const location = useLocation();
   const navigate = useNavigate();


   const username= "ejemplo@mail.com";
   const password= "ejemplo123";


   const [access, setAccess] = useState(false);

   const [characters, setCharacters] = useState([]);

    function login(userData){
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/');
      }
    }
       
    useEffect(() => {
      !access && navigate('/form');
   }, [access, navigate]);


 const onSearch = (character) => {
  const present = characters.find(c=> c.id == character)
  if (!present){
     fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  } else {window.alert("Personaje Repetido")}
 }

const onClose =(id) => {
  setCharacters(characters.filter(char => char.id !== id ))
}

  return (
     <div className={s.home}>
      {!["/","/form",].includes(location.pathname) && <NavBar  className={s.NavBar} onSearch={onSearch} setAccess={setAccess}/>}
      <Routes>
        <Route  exact path="/" element={<LandingPage/>}/>
        <Route path='/form' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path="/*" element={<Error/>} />
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
     </div>

    // <div className= {s.App} >
      
    //   <div>
    //     <NavBar onSearch={onSearch} />
    //   </div>
    //   <div>   
    //     <Cards 
    //       characters={characters}
    //       onClose={onClose}
    //        />
    //   </div>
    // </div>
  )
}

export default App
