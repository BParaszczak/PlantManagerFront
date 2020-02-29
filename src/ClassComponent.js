import React from 'react';
import './ClassComponent.css';

class ClassComponent extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <dl>
                <dt>Raki</dt>
                <dd>Nie ptaki i nie ssaki</dd>
                <dt>Szczupaki</dt>
                <dd>Bytują tam gdzie raki</dd>
                <dt>Łapanie</dt>
                <dd>Nie takie łatwe, panie!</dd>
                <dt>Dupa</dt>
                <dd>Tam właśnie chodzisz na nie</dd>
            </dl>
        );
    }
}

export default ClassComponent;