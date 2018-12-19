import React, { Component } from 'react';
import '../index.css';
import Button from './button/button';
import Header from "./header/header";
import Input from "./input/input";
import Card from "./card/card";
import Spinner from "./spinner/spinner"
import ImageService from "../services/image-service";

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            data: [],
            loading: true,
            inputError: false
        };
        this.imageService = new ImageService();
    }

    handleSearch = (e) => {
        e.preventDefault();

        let isNumber = !isNaN(this.state.inputValue) && this.state.inputValue;

        if (isNumber) {
            this.setState({inputError: false});
            this.getResource(this.state.inputValue);
        } else {
            this.setState({inputError: true});
        }
    };

    handleChangeInput = (e) => {
        this.setState({inputValue: e.target.value});
    };

    componentDidMount() {
        this.getResource();
    }

    getResource = (count = 10) =>  {
        this.setState(() => {
            return {
                loading: true
            };
        });

        this.imageService.getResource(count).then((data) => {
            this.setState(() => {
                return {
                    data: data,
                    loading: false
                };
            });
        });
    };

    render() {
        const buttonTitle = 'load images';

        const {loading, data, inputError} = this.state;

        let mainComponent;

        if (loading) {
            mainComponent = <Spinner/>
        } else {
            mainComponent =
                <div className='cards'>
                    {data.map(item => (
                        <Card key={item.id}
                              image={item.url}
                              id={item.id}>
                        </Card>
                    ))}
                </div>
        }

        return (
            <div>
                <Header/>
                <form onSubmit={this.handleSearch} className="form-input">
                    <Input placeholder="Enter a number"
                           className="input-style"
                           type="submit"
                           error={inputError}
                           onChange={this.handleChangeInput}/>
                    <Button onClick={this.handleSearch} title={buttonTitle}/>
                </form>
                {mainComponent}
            </div>
        );
    }
}

export default Root;
