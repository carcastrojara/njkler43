import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    const value = event.target.value;
    this.setState({
      searchTerm: value,
    });
  }
  render() {
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    const postList = filteredPosts.map(post => (
      <li key={post.title}>
        <p>{post.title}</p>
        <a href={post.link}><img src={posts.image } /></a>
      </li>
    ));
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={this.state.searchTerm} onChange={this.handleInputChange}/>
        </div>
        <ul>
          
          {postList}
        </ul>
      </div>
    )
  }
}


export default App


