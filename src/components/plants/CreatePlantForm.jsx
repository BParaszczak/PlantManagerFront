import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Button, Checkbox } from 'reactstrap';
import Select from 'react-select';
import "./CreatePlantForm.css";

class CreatePlantForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            room: '',
            wateringInterval: '',
            fertilizingInterval: '',
            requiredExposure: '',
            requiredTemperature: '',
            requiredHumidity: '',
            blooming: '',
            difficulty: '',
            lastWatered: '',
            lastFertilized: '',

        }
    }

    inputOnChange = (event) => {
        this.setState(
            { name: event.currentTarget.name },
            { category: event.currentTarget.category },
            { room: event.currentTarget.room },
            { wateringInterval: event.currentTarget.wateringInterval },
            { fertilizingInterval: event.currentTarget.fertilizingInterval },
            { requiredExposure: event.currentTarget.requiredExposure },
            { requiredTemperature: event.currentTarget.requiredTemperature },
            { requiredHumidity: event.currentTarget.requiredHumidity },
            { blooming: event.currentTarget.blooming },
            { difficulty: event.currentTarget.difficulty },
            { lastWatered: event.currentTarget.lastWatered },
            { lastFertilized: event.currentTarget.lastFertilized },

        );
    };



    render() {

        const {
            name,
            category,
            room,
            wateringInterval,
            fertilizingInterval,
            requiredExposure,
            requiredTemperature,
            requiredHumidity,
            blooming,
            difficulty,
            lastWatered,
            lastFertilized,

        } = this.state;

        const requiredExposureOptions = [
            { value: 'dark', label: 'Dark' },
            { value: 'shade', label: 'Shade' },
            { value: 'partsun', label: 'Part sun' },
            { value: 'sunny', label: 'Sunny' },
        ];

        const requiredTemperatureOptions = [
            { value: 'cold', label: 'Cold' },
            { value: 'medium', label: 'Medium' },
            { value: 'warm', label: 'Warm' },
        ];

        const requiredHumidityOptions = [
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
        ];

        const difficultyLevel = [
            { value: 'low', label: 'Low' },
            { value: 'medium-low', label: 'Medium-low' },
            { value: 'medium', label: 'Medium' },
            { value: 'medium-high', label: 'Medium-high' },
            { value: 'high', label: 'High' },
        ]
        return (
            <React.Fragment>
                <h3>Add a new plant</h3>
                <form method="POST" action="">
                    <Label>Plant name:</Label>
                    <Input
                        type="text"
                        name={name}
                        onChange={this.inputOnChange}
                    />
                    <Label>Plant category:</Label>
                    <Input
                        type="text"
                        name={category}
                        onChange={this.inputOnChange}
                    />
                    <Label>Room:</Label>
                    <Input
                        type="text"
                        name={room}
                        onChange={this.inputOnChange}
                    />
                    <Label>Watering interval:</Label>
                    <Input
                        type="number"
                        name={wateringInterval}
                        onChange={this.inputOnChange}
                    />
                    <Label>Fertilizing interval:</Label>
                    <Input
                        type="number"
                        name={fertilizingInterval}
                        onChange={this.inputOnChange}
                    />
                    <Label>Required exposure:</Label>
                    <Input
                        name={requiredExposure}
                        type="select"
                        options={requiredExposureOptions}
                        onChange={this.inputOnChange}
                    />
                    <Label>Required temperature:</Label>
                    <Input
                        name={requiredTemperature}
                        type="select"
                        options={requiredTemperatureOptions}
                        onChange={this.inputOnChange}
                    />
                    <Label>Required humidity:</Label>
                    <Input
                        name={requiredHumidity}
                        type="select"
                        options={requiredHumidityOptions}
                        onChange={this.inputOnChange}
                    />
                    <Label>Bloomig:</Label>
                    <Input
                        type="checkbox"
                        name={blooming}
                        onChange={this.inputOnChange}
                    />
                    <Label>Difficulty:</Label>
                    <Input
                        name={difficulty}
                        type="select"
                        options={difficultyLevel}
                        onChange={this.inputOnChange}
                    />
                    <Label>Last watered:</Label>
                    <Input
                        type="text"
                        name={lastWatered}
                        onChange={this.inputOnChange}
                    />
                    <Label>Last fertilized:</Label>
                    <Input
                        type="text"
                        name={lastFertilized}
                        onChange={this.inputOnChange}
                    />

                    <Button type="submit">Submit new plant</Button>
                </form>

            </React.Fragment>
        )
    }
}

CreatePlantForm.propTypes = {
    name: PropTypes.string,
    category: PropTypes.string,
    room: PropTypes.string,
    wateringInterval: PropTypes.number,
    fertilizingInterval: PropTypes.number,
    requiredExposure: PropTypes.string,
    requiredTemperature: PropTypes.string,
    requiredHumidity: PropTypes.string,
    blooming: PropTypes.string,
    difficulty: PropTypes.string,
    lastWatered: PropTypes.string,
    lastFertilized: PropTypes.string,
}


export default CreatePlantForm;