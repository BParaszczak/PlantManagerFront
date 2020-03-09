import React from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.css';


class CategoryItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            className: 'category-item active-0',    //to jest stan początkowy
            index: 0
        };
    }

    componentDidMount() { //metoda wywoływana przy wstawieniu komponentu do drzewa DOM

    }

    componentDidUpdate(prevProps, prevState, snapshot) { //ta metoda wywoływana jest przy każdej zmianie state; pokazuje w konsoli co się zmieniło w stacie
        const index = this.state.index;
        if (prevState.index !== this.state.index) {
            console.log(`Index has changed from ${prevState.index} to ${index}`);
            let className = `category-item active-${index}`;
            this.setState({ className })
        } else {
            console.log('Some other state has changed');
        }
    }

    render() {
        const category = this.props.category; //tu przekazujemy atrybuty
        // let backgroundClassName = this.state.backgroundClassName;
        // let self = this;

        // const onClick = () => {
        //     self.setState({ className: 'category-item active' });
        // }
        //---------------------------------------------------------------------
        const onClick = () => {
            if (this.props.isLastItem === true) {
                let index = this.state.index;
                let className = 'category-item active-' + index;
                index = ++index === 4 ? 0 : index;
                this.setState({ className, index })
            }
        };
        //--------------------------------------------------------------------------
        // if (this.props.isLastItem === false) {
        //     return;
        // } else { }
        // let cycleIndex = this.state.cycleIndex;
        // cycleIndex++;
        // cycleIndex = cycleIndex === MAX_CYCLE_COLORS ? 0 : cycleIndex;
        // let className = this.getItemClassName(cycleIndex);
        // this.setState({ className: cycleIndex })



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
    isLastItem: PropTypes.bool.isRequired,
};

export default CategoryItem;