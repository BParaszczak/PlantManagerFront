import React from 'react';
import './App.css';
import axios from 'axios';
import CategoryItem from './components/categories/CategoryItem';
import Plant from './components/plants/Plant';
import Spinner from 'react-bootstrap/Spinner';

const CATEGORIES_FETCH_DELAY = 4000;
const PLANTS_FETCH_DELAY = 2000;

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      plants: [],
      successCategories: true,
      successPlants: true,
      inProgress: true,

    };
  }

  componentDidMount() {
    Promise.allSettled([this.fetchCategories(), this.fetchPlants()]).then(progress => { return this.setState({ inProgress: false }) });
  }


  // ZADANIE 4.
  // componentDidUpdate(prevState) {
  //   if (prevState.inProgress !== this.state.inProgress) {
  //     return false;
  //   };
  // }

  delayFetch(ms, method) {
    return new Promise((resolve, reject) => setTimeout(() => method(resolve, reject), ms));
  }

  fetchCategories() {
    const requestUrl = 'http://gentle-tor-07382.sherokuapp.com/categories/';

    return this.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map((item) => item.name);
          this.setState({ categories });
          // this.setState({ inProgress: false });
          resolve();
        })
        .catch((error) => {
          this.setState({ successCategories: false });
          // this.setState({ inProgress: false });                     // do zadania 4.
          reject();
        });
    });
  }

  fetchPlants() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/plants/';

    return this.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const plants = data.map((item) => item.name);
          this.setState({ plants });
          // this.setState({ inProgress: false });
          resolve();
        })
        .catch((error) => {
          this.setState({ successPlants: false });
          // this.setState({ inProgress: false });                       //do ZADANIA 4.
          reject();
        });
    });
  }

  render() {
    const categories = this.state.categories;
    const plants = this.state.plants;

    return (
      <React.Fragment>
        <div className="app-container">
          {/* ZADANIE 3. */}
          {
            ((categories.length === 0 || this.state.inProgress)
              || (plants.length === 0 || this.state.inProgress)) &&
            <p>Trwa ładowanie danych...</p>
          } */}
          {/* ZADANIE 4. */}
          {/* {
            this.state.inProgress && this.componentDidUpdate &&
            <p>Trwa ładowanie danych...</p>
          } */}

          {/* ZADANIE 2.
          {
            categories.length === 0 && this.state.successCategories &&
            <p>Trwa ładownie kategorii...</p>
          }
          {
            plants.length === 0 && this.state.successPlants &&
            <p>Trwa ładownie kwiatów...</p>
          }  */}
          {/* ZADANIE 5. */}
          {
            this.state.inProgress &&
            <div class="spinner-border" role="status">
              <Spinner>
                <span className="sr-only">Trwa ładowanie danych...</span>
              </Spinner>
            </div>
          }

          {
            !this.state.successCategories &&
            <p>Nie udało się pobrać Kategorii</p>
          }
          {
            !this.state.successPlants &&
            <p>Nie udało się pobrać Kwiatow</p>
          }
          {
            this.state.successPlants && (!this.state.inProgress && plants.length !== 0) && //ZADANIE 1.
            <div className="plants">
              {
                plants.map((plant, index, arr) =>
                  <Plant
                    name={plant}
                    key={index}
                  />
                )
              }
            </div>
          }
          {
            this.state.successCategories && (!this.state.inProgress && categories.length !== 0) && //ZADANIE 1.
            <div className="categories">
              {
                categories.map((item, index, arr) =>
                  <CategoryItem
                    category={item}
                    label='category'
                    key={index}
                    isLastItem={arr.length - 1 === index}
                    index={index}
                  />
                )
              }
            </div>
          }
        </div>
      </React.Fragment >
    )
  }
}


export default App;



