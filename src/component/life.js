import React, {  PureComponent } from 'react';

class Life extends PureComponent {

// 1 get default props


// 2 set default state
state={
    title:'Life Cycle'
}
// componentDidMount(){
//     console.log("AFTER RENDER");
//     document.querySelector('h1').style.color ='red'
// }
// // 3 before render
// UNSAFE_componentWillMount(){
//     console.log("BEFORE RENDER");
//     // document.querySelector('h1').style.color ='red'
    
// }

// componentWillUpdate(){
//         console.log("BEFORE UPDATE")
// }

// componentDidUpdate(){
//         console.log("AFTER UPDATE")
// }

// shouldComponentUpdate(nextProps, nextState){

//         if(this.state.title === nextState.title){
//             return false;
//         }
//         else{
//             return true;
//         }
// }

// UNSAFE_componentWillReceiveProps(){
//     console.log('BEFORE RECIEVE PROPS')
// }

// componentWillUnmount(){
//     console.log("UNMOUNT")
// }


// 4 render
    render(){
        console.log("RENDER")
        return(
           <div>
               <h1>{this.state.title}</h1>
               <div onClick = {() => this.setState({title:'Something Else'})}>Touch here</div>
           </div>
        )
    }
}


// 5 after render
  

export default Life;