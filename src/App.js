import React from 'react';
import './App.css';
import CategoryItem from './components/categories/CategoryItem';

class App extends React.PureComponent {
  render() {
    const categories = ['Cacti', 'Tillandsia', 'Succulents', 'Orchids'];

    // Krok 1.
    // const inner = function(item, index, arr) {
    //   console.log(item);
    // };

    // categories.forEach(inner);


    // Krok 2. usywamy niepotrzebne parametry
    // const inner = function (item) {
    //   console.log(item);
    // };

    // categories.forEach(inner);

    // Krok 3. Zastępujemy function przez arrow function
    // const inner = (item) => {
    //   console.log(item)
    // };

    // categories.forEach(inner);

    // Krok 4. arrow function; jeśli jest 1 patrametr(item), to możemy go podać bez nawiasów
    // const inner = item => {
    //   console.log(item)
    // };

    // categories.forEach(inner);

    //Krok 5. ponieważ w ciele funcji mamy tylko 1 wywołanie, możemy usunąć wąsy i przekazać do forEach jako parametr
    // categories.forEach(item => console.log(item));//funkcja iterująca - niczego nie zwraca

    // categories.map(inner); //funkcja mapująca - iteruje, zwracając każdy z elementów po przekształceniu

    return (
      <div className="app-container">
        {
          categories.map((item, index) => <CategoryItem category={item} label="Category" key={index} />) //to nam zwraca tablicę
        }

      </div>
    );
  }
}





export default App;
