import React from 'react'
import { useState } from 'react'
const PageQuatre = () => {

var [app, setApp] = useState({
  class: "bg-danger"
})

var [app2, setApp2] = useState({
  class: "bg-primary"
})

const changer = () => {
  return(
    setApp ({
      class: "bg-primary"
    })
  )
}

const changer2 = () => {
  return(
    setApp2 ({
      class: "bg-danger"
    })
  )
}
    return(  
        <div className="container">
            <div className="row">
              <div className="col-6 bg-primary">
                <div id="carre1" className={app.class}>.</div>
              </div>
              <div className="col-6 bg-primary">
                <div className={app2.class}>.</div>
              </div>
              <button className={changer,changer2}>Changer</button>
            </div>
        </div>
  )
}


export default PageQuatre