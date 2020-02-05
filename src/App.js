import React, {Component} from 'react'
import Contact from "./components/Contact.js"


class App extends Component{
state={ users: [
  {name:'Ana',
   status:false,
   avatar:'https://avatars0.githubusercontent.com/u/9919?s=280&v=4'
   },
   {name:'Maria',
   status:true,
   avatar:'https://banner2.cleanpng.com/20180326/eye/kisspng-github-computer-icons-logo-github-5ab8a338143da0.8375508315220498480829.jpg'
   },
   {name:'Celia',
   status:false,
   avatar:'https://p7.hiclipart.com/preview/191/448/847/computer-icons-github-github-logo-save-icon-format.jpg'
   }

],
}
changeStatus = (e) => { 
 
console.log(e.target.id)
//setstate de users en el indice qe me da e.target.id lo cambio al contrario
/* let user = e.target.id
let users = this.state
let status = e.target
console.log(this.setStatus({status:true})) */
//this.setState({user})

/* let usersCopy = JSON.parse(JSON.stringify(this.state.users))
console.log(usersCopy);

   //make changes to ingredients
usersCopy[e.target.id].status = true//whatever new ingredients are
console.log(usersCopy);
 */
console.log(this.state.users[e.target.id].status);


//crear array del state
let arrTemp=[...this.state.users]

//si el id es el pusado cambiar el status al contrario
arrTemp[e.target.id].status = !arrTemp[e.target.id].status

//cambiar el state por el array creado
   this.setState({
      [this.state.users]: arrTemp
    }) 
    
} 
render() {
  return (
    <div>
      <Contact user={this.state.users} change={this.changeStatus}/>
    </div>
  );
}
}
export default App;
