import React from "react"


let users=[
    {name:'Ruth',
     status:true,
     avatar:'https://avatars0.githubusercontent.com/u/9919?s=280&v=4'
     },
     {name:'Maca',
     status:false,
     avatar:'https://banner2.cleanpng.com/20180326/eye/kisspng-github-computer-icons-logo-github-5ab8a338143da0.8375508315220498480829.jpg'
     },
     {name:'Binay',
     status:true,
     avatar:'https://p7.hiclipart.com/preview/191/448/847/computer-icons-github-github-logo-save-icon-format.jpg'
     },
     {name:'Julie',
     status:true,
     avatar:'https://p7.hiclipart.com/preview/191/448/847/computer-icons-github-github-logo-save-icon-format.jpg'
     },
     {name:'Sandra',
     status: false,
     avatar:'https://p7.hiclipart.com/preview/191/448/847/computer-icons-github-github-logo-save-icon-format.jpg'
     }

 ]
 const ContactList = () => (
     users.map((user, i) =>(
        <div key = {i}>
         <div className='Contact'>
            <img className='avatar' src={user.avatar} alt=""></img>
            <div className='status'>
                <h4 className='name'>{user.name}</h4>
                <h4 className='status-text'><span className={user.status?"status-online": "status-offline"}></span>{user.status?"online": 'ofline'}</h4>
            </div>
        </div>
    </div>
     ))
 )
 export default ContactList