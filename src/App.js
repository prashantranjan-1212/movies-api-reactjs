import './App.css';
import Counter from './component/counter';
import GenreSelect from './component/genreSelect';
import SearchForm from './component/searchForm';


function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Counter initilaValue={10} />
        <SearchForm />
        <GenreSelect />
      </div>
    </div>
  );
}

export default App;
