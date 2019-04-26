import React, {Component} from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';

import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            cats: [],
            searchValue: ''
        };

        this.onSearchBoxChange = this.onSearchBoxChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({cats: users}));
    }

    onSearchBoxChange(event) {
        this.setState({searchValue: event.target.value});
    };

    render() {
        const filteredCats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        });

        if(this.state.cats.length < 1) {
            return (
                <div className="App">

                    <header className="App-header">
                        <h1 className="App-title App-title_loading">Loading</h1>
                    </header>

                </div>
            )
        }

        return (
            <div className="App">

                <header className="App-header">
                    <h1 className="App-title">Cats Finder</h1>

                    <SearchBox onChange={this.onSearchBoxChange} />
                </header>

                <CardList cats={filteredCats}/>

            </div>
        );
    }
}

export default App;