import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, StyleSheet, TextInput, Text } from 'react-native';
import { updateCalculation } from '../actions/index';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            textDigit: "",
            calculation: ""
        };
    }

    onClickButton = (digit) => {
        let textString = this.state.textDigit;
        var lastChar = textString[textString.length - 1];
        let symbols = ["*", "/", "-", "+"];
        let tDigit = symbols.includes(lastChar) ? (symbols.includes(digit) ? `${textString}` : `${textString}${digit}`) : `${textString}${digit}`;
        this.setState({ textDigit: tDigit });
    }

    onClickClear = () => {
        this.setState({ textDigit: "", calculation: "" });
    }

    onClickOk = () => {
        debugger;
        let textValue = this.state.textDigit;
        if (textValue) {
            let firstChar = textValue[0];
            let lastChar = textValue[textValue.length - 1];
            let symbols = ["*", "/", "-", "+"];
            if (symbols.includes(firstChar)) {
                textValue = textValue.substring(1);
            }
            if (symbols.includes(lastChar)) {
                textValue = textValue.slice(0, -1);
            }
            let calculationValue = this.props.updateCalculation(textValue);
            this.setState({ calculation: calculationValue.output.result.toString() });
        }
    }

    render() {
        return (
            <View>
                <View style={styles.displayValue}>
                    <TextInput disabled value={this.state.textDigit}></TextInput>
                </View>
                <View style={styles.outputValue}>
                    <TextInput disabled value={this.state.calculation}></TextInput>
                </View>
                <View style={styles.row}>
                    <View style={styles.inputWrap}>
                        <Button onPress={() => { this.onClickButton("1") }} title={"1"}></Button>
                        <Button onPress={() => { this.onClickButton("4") }} title={"4"}></Button>
                        <Button onPress={() => { this.onClickButton("7") }} title={"7"}></Button>
                        <Button onPress={() => { this.onClickButton("*") }} title={"*"}></Button>
                    </View>
                    <View style={styles.inputWrap}>
                        <Button onPress={() => { this.onClickButton("2") }} title={"2"}></Button>
                        <Button onPress={() => { this.onClickButton("5") }} title={"5"}></Button>
                        <Button onPress={() => { this.onClickButton("8") }} title={"8"}></Button>
                        <Button onPress={() => { this.onClickButton("0") }} title={"0"}></Button>
                    </View>
                    <View style={styles.inputWrap}>
                        <Button onPress={() => { this.onClickButton("3") }} title={"3"}></Button>
                        <Button onPress={() => { this.onClickButton("6") }} title={"6"}></Button>
                        <Button onPress={() => { this.onClickButton("9") }} title={"9"}></Button>
                        <Button onPress={() => { this.onClickButton("/") }} title={"/"}></Button>
                    </View>

                    <View style={styles.inputWrap}>
                        <Button onPress={() => { this.onClickClear() }} title={"Clear"}></Button>
                        <Button onPress={() => { this.onClickButton("+") }} title={"+"}></Button>
                        <Button onPress={() => { this.onClickButton("-") }} title={"-"}></Button>
                        <Button onPress={() => { this.onClickOk() }} title={"="}></Button>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    displayValue: {
        marginTop: 350,
    },
    outputValue: {
        marginTop: 5
    },
    inputWrap: {
        flex: 1,
        marginTop: 5
    }
});

const mapDispatchToProps = (dispatch) => ({
    updateCalculation: (inputValue) => dispatch(updateCalculation(inputValue))
});

const mapStateToProps = (state) => ({
    result: state.result
});


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

