import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Button, Checkbox } from 'reactstrap';
import Select, { components } from 'react-select';
import "./CreatePlantForm.css";

const requiredExposureOptions = [
    { value: 'dark', label: 'Dark' },
    { value: 'shade', label: 'Shade' },
    { value: 'partsun', label: 'Part sun' },
    { value: 'sunny', label: 'Sunny' },
];

class CreatePlantForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            className: 'nonPalindrom',
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

            requiredTemperatureOptions: [
                { value: 'cold', label: 'Cold' },
                { value: 'medium', label: 'Medium' },
                { value: 'warm', label: 'Warm' },
            ],
            requiredHumidityOptions: [
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' },
            ],
            difficultyLevel: [
                { value: 'low', label: 'Low' },
                { value: 'medium-low', label: 'Medium-low' },
                { value: 'medium', label: 'Medium' },
                { value: 'medium-high', label: 'Medium-high' },
                { value: 'high', label: 'High' },
            ],

        }
    }

    handleInputChange = (event) => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }

    handleSelectChange = (event) => {
        const { target: { name, options } } = event;
        this.setState({ [name]: options });
    }

    // inputOnChange = (event) => {
    //     this.setState({
    //         name: event.currentTarget.name,
    //         category: event.currentTarget.category,
    //         room: event.currentTarget.room,
    //         wateringInterval: event.currentTarget.wateringInterval,
    //         fertilizingInterval: event.currentTarget.fertilizingInterval,
    //         requiredExposure: event.currentTarget.requiredExposure,
    //         requiredTemperature: event.currentTarget.requiredTemperature,
    //         requiredHumidity: event.currentTarget.requiredHumidity,
    //         blooming: event.currentTarget.blooming,
    //         difficulty: event.currentTarget.difficulty,
    //         lastWatered: event.currentTarget.lastWatered,
    //         lastFertilized: event.currentTarget.lastFertilized,
    //         requiredExposureOptions: event.currentTarget.requiredExposureOptions,
    //         requiredTemperatureOptions: event.currentTarget.requiredTemperatureOptions,
    //         requiredHumidityOptions: event.currentTarget.requiredHumidityOptions,
    //         difficultyLevel: event.currentTarget.difficultyLevel,
    //     });
    //     this.handleInputChange();
    // };

    isPalindrom = (text) => {
        let value = text.replace(/\s+/g, "");
        value = value.toLowerCase();
        value = value.split('');

        for (let i = 0; i < value.length; i++) {
            if (value[i] !== [value.length - i - 1]) {
                return false;
            }
        }
        return true;
    }



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
            difficultyLevel,

        } = this.state;

        return (
            <React.Fragment>
                <h3>Add a new plant</h3>
                <form method="POST" action="">
                    <Label>Plant name:</Label>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                    />
                    <Label>Plant category:</Label>
                    <Input
                        type="text"
                        name="category"
                        value={category}
                        onChange={this.handleInputChange}
                    />
                    <Label>Room:</Label>
                    <Input
                        type="text"
                        name="room"
                        value={room}
                        onChange={this.handleInputChange/*, this.isPalindrom*/}
                    />
                    <Label>Watering interval:</Label>
                    <Input
                        type="text"
                        name="wateringInterval"
                        value={wateringInterval}
                        onChange={this.handleInputChange}
                    />
                    <Label>Fertilizing interval:</Label>
                    <Input
                        type=""
                        name="fertilizingInterval"
                        value={fertilizingInterval}
                        onChange={this.handleInputChange}
                    />
                    <Label>Required exposure:</Label>
                    <Input
                        type="select"
                        name="requiredExposure"
                        value={requiredExposure}
                        onChange={this.handleInputChange}>
                        {
                            requiredExposureOptions.map(item =>
                                (<option value={item.value} key={item.value}>{item.label}</option>
                                ))
                        }

                    </Input>
                    {/* <Label>Required temperature:</Label>
                    <Input
                        type="select"
                        name="requiredTemperature"
                        value={requiredTemperature}
                        onChange={this.handleSelectChange}
                    /> */}
                    {/* <Label>Required humidity:</Label>
                    <Input
                        type="select"
                        name="requiredHumidity"
                        value={requiredHumidity}
                        options={requiredHumidityOptions}
                        onChange={this.handleSelectChange}
                    /> */}
                    <Label>Bloomig:</Label>
                    <Input
                        type="checkbox"
                        name="blooming"
                        value={blooming}
                        onChange={this.handleInputChange}
                    />
                    {/* <Label>Difficulty:</Label>
                    <Input
                        type="select"
                        name="difficulty"
                        value={difficulty}
                        options={difficultyLevel}
                        onChange={this.handleSelectChange}
                    /> */}
                    <Label>Last watered:</Label>
                    <Input
                        type="text"
                        name="lastWatered"
                        value={lastWatered}
                        onChange={this.handleInputChange}
                    />
                    <Label>Last fertilized:</Label>
                    <Input
                        type="text"
                        name="lastFertilized"
                        value={lastFertilized}
                        onChange={this.handleInputChange}
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