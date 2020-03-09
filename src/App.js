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
      successCategories: undefined,
      successPlants: undefined,
      inProgressCategories: true,
      inProgressPlants: true,
      inProgress: true,
    };
  }
  // ZADANIE 5
  // componentDidMount() {
  //   Promise.allSettled([this.fetchCategories(), this.fetchPlants()]).then(progress => { return this.setState({ inProgress: false }) });
  // }

  componentDidMount() {
    const allPromises = Promise.allSettled([
      this.fetchPlants(),
      this.fetchCategories(),
    ]);

    const stopProgress = () => {
      this.setState({ inProgress: false });
    };

    allPromises
      .then(stopProgress)
      .catch(stopProgress);
  }

  // componentDidMount() {
  //   const allPromises = Promise.all([
  //     this.fetchPlants(),
  //     this.fetchCategories(),
  //   ]);

  //   const stopProgress = () => {
  //     this.setState({ inProgress: false };)
  //   };

  //   allPromises
  //     .finally(() => {        //tu przekazujemy funkcję, która ma się wykonać niezależnie od wyniku rozstrzygnięcia
  //          console.log(resolve);
  //     });
  // }



  // ZADANIE 4.
  // componentDidUpdate(prevState) {
  //   const { inProgressCategories, inProgressPlants } = this.state;
  //   if (prevState.inProgressCategories !== inProgressCategories ||
  //     prevState.inProgressCategories !== inProgressCategories) {
  //     const inProgress = inProgressCategories || inProgressPlants;
  //     this.setState({ inProgress });
  //   };
  // }

  delayFetch(ms, method) {
    return new Promise((resolve, reject) => setTimeout(() => method(resolve, reject), ms));
  }

  fetchCategories() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';

    return this.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map((item) => item.name);
          const successCategories = true;
          this.setState({ categories, successCategories });
          this.setState({ inProgressCategories: false });
          resolve();
        })
        .catch((error) => {
          this.setState({ successCategories: false });
          this.setState({ inProgressCategories: false });                     // do zadania 4.
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
          const successPlants = true;
          this.setState({ plants, successPlants });
          this.setState({ inProgressPlants: false });
          resolve();
        })
        .catch((error) => {
          this.setState({ successPlants: false });
          this.setState({ inProgressPlants: false });                       //do ZADANIA 4.
          reject();
        });
    });
  }

  render() {
    const {
      categories: [],
      plants: [],
      successCategories,
      successPlants,
      inProgress,
      inProgressCategories,
      inProgressPlants,
    } = this.state;
    // const inProgress = inProgressCategories || inProgressPlants;

    return (
      <React.Fragment>
        <div className="app-container">
          {/* ZADANIE 3.
          {
            inProgress &&
            <p>Trwa ładownie kategorii...</p>
          }
          
          {/* ZADANIE 4. */}
          {/* {
            inProgress && componentDidUpdate &&
            <p>Trwa ładowanie danych...</p>
          } */}

          {/* {ZADANIE 2. */}


          {/* ZADANIE 5. */}
          {/* {
            inProgress &&
            <div class="spinner-border" role="status">
              <Spinner>
                <span className="sr-only">Trwa ładowanie danych...</span>
              </Spinner>
            </div>
          } */}

          {
            !successCategories &&
            <p>Nie udało się pobrać Kategorii</p>
          }
          {
            !successPlants &&
            <p>Nie udało się pobrać Kwiatow</p>
          }
          {
            successPlants && !inProgress && //ZADANIE 1.
            <div className="plants">
              {
                this.plants.map((plant, index, arr) =>
                  <Plant
                    name={plant}
                    key={index}
                  />
                )
              }
            </div>
          }
          {
            successCategories && !inProgress && //ZADANIE 1.
            <div className="categories">
              {
                this.categories.map((item, index, arr) =>
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



