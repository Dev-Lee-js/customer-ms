import React,  { Component} from 'react';
import './App.css';
import Customer from './components/Customer';


const customers = [
  {
    "id":1,
    "image":"https://placeimg.com/64/64/1",
    "name":"이종석",
    "birthday":"980511",
    "gender":"남자",
    "job":"회사원"
  },
  {
    "id":2,
    "image":"https://placeimg.com/64/64/2",
    "name":"박종수",
    "birthday":"123456",
    "gender":"남자",
    "job":"회사원"
  },
  {
    "id":3,
    "image":"https://placeimg.com/64/64/3",
    "name":"이순신",
    "birthday":"123456",
    "gender":"남자",
    "job":"회사원"
  },
]

class App extends Component{
  render(){
    return(
      <>
        {
          customers.map(c=>{
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
              );
          }) 
        }
      </>
    );
  }
}

export default App;
