import React, {useState} from 'react'
const PageDeux = () => {

  var [inconnu, setInconnu] = useState({
    class: "bg-white text-primary"
  })
  var go = () =>{
    return(
      setInconnu ({
        class: "bg-primary text-white"
      })
    )
  }
    return(  
        <div>
         <p id="ex1" className={inconnu.class} onClick={go}></p>

        </div>
  )
}

export default PageDeux