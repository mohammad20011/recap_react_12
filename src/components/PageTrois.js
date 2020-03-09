import React, {useState} from 'react'
var PageTrois = () => {
  var [inconnu, setInconnu] = useState("inconnu")

  var [value, setValue] = useState("")
 
  var inputChange = (event) => {
    value = event.target.value
    setValue(value)
  }
  var go = () =>{
    inconnu = value
    setInconnu(inconnu)
  }
  return(  
        <div className="container">
          <div className="row m-5 bg-secondary p-5">
            <h2>Welcome {inconnu}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ex id libero ipsam aut unde harum ratione voluptatem laborum laboriosam?</p>
            <div>
              <input onChange={inputChange} value={value} type="text"/>
              <button onClick={go}>Ok</button>
            </div>
          </div>
        </div>
  )
}

export default PageTrois