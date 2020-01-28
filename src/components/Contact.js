import React from "react"
import "./Contact.css"

    const users=[
       {name:'Ana',
        status:true,
        avatar:'https://avatars0.githubusercontent.com/u/9919?s=280&v=4'
        },
        {name:'Maria',
        status:false,
        avatar:'https://banner2.cleanpng.com/20180326/eye/kisspng-github-computer-icons-logo-github-5ab8a338143da0.8375508315220498480829.jpg'
        },
        {name:'Celia',
        status:true,
        avatar:'https://p7.hiclipart.com/preview/191/448/847/computer-icons-github-github-logo-save-icon-format.jpg'
        }

    ]

const Contact = () => {
    return (
    <div>
        {users.map(i => (
         <div className='Contact'>
                    <img className='avatar' src={i.avatar}></img>
                    <div className='status'>
                        <h4 className='name'>{i.name}</h4>
                        <h4 className='status-text'><span className={i.status?"status-online": "status-offline"}></span>{i.status?"online": 'ofline'}</h4>
                        
                    </div>
                </div>
        ))}
    </div>
    )
}

export default Contact