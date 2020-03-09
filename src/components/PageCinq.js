import React, {useState} from 'react'
const PageCinq = () => {
  const [rien, setRien] = useState({
    contenu: "",
  })
  const apparaitre = () => {
    return(
      setRien ({
        contenu: "./images/Œuf.png"
      })
    )
}

    return(  
      <div className="container">
      <div className="row m-5 bg-secondary p-5">
        <div className={rien.contenu}>

        </div>
        <div>
          <button onClick={apparaitre}>Ajouter un oeuf</button>
        </div>
      </div>
    </div>
  )
}

export default PageCinq