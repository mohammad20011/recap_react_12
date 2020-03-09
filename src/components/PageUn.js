import React, {useState} from 'react'
const PageUn = () => {
  const [letitre, setLetitre] = useState({
    nom: "Le titre",
  })
  const changer = () => {
    return(
      setLetitre ({
        nom: "Le titre a été modifié",
        class: "bg-primary text-danger"
      })
    )
}

const changer4 = () => {
  return(
    setLetitre ({
      nom: "Le titre",
      class: ""
    })
  )
}
return(  
  <div className="container m-5 bg-secondary p-5">
          <div className="row">
            <h2 className={letitre.class}>{letitre.nom}</h2>
          </div>
          <p>Liste de propriétés et de méthodes a retrouver dans la doccumentation</p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, unde.</li>
            <li>Voluptate dolorum voluptatibus quos id dicta? Ad, quidem! Exercitationem, reiciendis!</li>
            <li>Quidem, nulla obcaecati ab veritatis id facere ducimus alias. Voluptas!</li>
            <li>Earum explicabo, minus quibusdam perferendis officiis rerum mollitia soluta saepe?</li>
            <li>Porro quasi, aut quo eius voluptate necessitatibus id atque consequatur?</li>
          </ul>
          <button onClick={letitre.class === "" ? changer : changer4}>Modifier le titre</button> 
        </div>
    
      
  )
}

export default PageUn