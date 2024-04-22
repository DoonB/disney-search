import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';
import LoadMoreButton from './components/load-more-button/load-more-button.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ``
    };
  }
  componentDidMount(){
    fetch('https://api.disneyapi.dev/character?pageSize=7500')
    .then(response=>(response.json()))
    .then(data => this.setState({monsters:data.data}));
   }

   switchPage = () => {
    console.log('switched pages');
   }

   handleInputChange = (e) => {
    this.setState({ inputString: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputString } = this.state;
    if (inputString.trim() !== '') {
      this.setState({ submittedCharacter: inputString });
      this.setState({ inputString: '' }); // Clear input field after submission if needed
    }
  };
   

  render(){
    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return(
      <div className='App'>

        <h1>Disney Characters</h1>

        <SearchBox
            placeholder='search Disney Characters' 
            handleChange={e => this.setState({ searchField: e.target.value })}
            />

        <CardList monsters={filteredMonsters}/>

        <LoadMoreButton onClick={this.switchPage}/>      

      </div>
    );
  }
}

export default App;
