import React from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.css';

class CategoryItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            className: 'category-item'    //to jest stan początkowy
        };
    }

    render() {
        const category = this.props.category; //tu przekazujemy atrybuty
        // let backgroundClassName = this.state.backgroundClassName;
        // let self = this;

        // const onClick = () => {
        //     self.setState({ className: 'category-item active' });
        // }

        const onClick = () => {
            this.setState({ className: 'category-item active' });
        }

        // function onClick() {
        //     self.setState({ className: 'category-item active' });
        // }
        // const changeBackgroundColor = () => {
        //     backgroundClassName = 'category-item active';
        //     console.log(backgroundClassName);                //wartość tej funkcji jest zwracana do przeglądarki
        // }

        return (
            <p className={this.state.className} onClick={onClick} >
                {category}
            </p>
        );
    }
}

CategoryItem.propTypes = { //w tym miejscu przypisujemy pole klasie (nie obiektowi, który powstanie na jej bazie); tzw. pole statyczne
    //tu listujemy wszystkie propsy, które należy lub można przekazać do komponentu; {} pusty obiekt
    category: PropTypes.string.isRequired,
    categoryLabel: PropTypes.string,
};

export default CategoryItem;