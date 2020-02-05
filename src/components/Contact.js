import React from "react"
import "./Contact.css"

    
//i: valor x:indice
//añadimos un id donde recogemos el indice de la persona
const Contact =({user, change}) => (
        <div>
            {user.map((i, x) => (
             <figure className='Contact' key={x}>
                        <img className='avatar' src={i.avatar}alt=""></img>
                        <div className='status'  >
                            <h4 className='name' >{i.name}</h4>
                            <h4 id={x} className='status-text' onClick={change}><span className={i.status?"status-online": "status-offline"}></span>{i.status?"online": 'ofline'}</h4>
                            
                        </div>
                    </figure>
            ))}
        </div>
)
export default Contact