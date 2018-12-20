import React, { Component } from 'react';
import '../index.css';
import Button from './button/button';
import Header from "./header/header";
import Input from "./input/input";
import Card from "./card/card";
import Spinner from "./spinner/spinner"
import { loadImages } from '../redux/actions/images';
import { changeInputValue } from '../redux/actions/input';
import { connect } from 'react-redux';

class Root extends Component {

    handleSearch = (e) => {
        e.preventDefault();

        this.props.loadImages(this.props.inputValue);
    };

    handleChangeInput = (e) => {
        this.props.changeInputValue(e.target.value)
    };

    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const buttonTitle = 'load images';

        const {loading, data, inputError} = this.props;

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

function mapStateToProps(state) {
    const { inputValue, data, loading, inputError } = state.imageReducer;
    return {
        inputValue,
        data,
        loading,
        inputError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadImages: (count) => dispatch(loadImages(count)),
        changeInputValue: (count) => dispatch(changeInputValue(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);