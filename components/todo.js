import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';
import { Container, Header, Title, Right, Body, Textarea, Content } from "native-base";
import CircleCheckBox from 'react-native-circle-checkbox';
import DatePicker from 'react-native-datepicker'


class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      time: new Date(),
      color: 'blue'
    };
  }

  submitTodo = () => {
    if (this.state.text.trim() === '') {
      return;
    }
    this.props.add(this.state);
    this.setState({ text: "", color: "blue", time: new Date() });
  }

  inputChangeHandler = (value) => {
    this.setState({
      text: value
    });
  }

  colorHandler = (color) => {
    this.setState({ color })
  }

  render() {
    return (
      <Container>
        <Header span style={styles.header}>
          <Body>
            <Title>Add</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Textarea rowSpan={2} bordered
            placeholder="When do you need to do?"
            value={this.state.text}
            onChangeText={this.inputChangeHandler}
          />
          <View style={styles.dateContainer}>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.time}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2019-01-01"
              maxDate="2019-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => { this.setState({ time: date }) }}
            />
          </View>


          <View style={styles.marginB}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <CircleCheckBox
                checked={true}
                outerColor={'red'}
                innerColor={"rgba(255, 192, 203, 0.5)"}
                onToggle={(checked) => this.colorHandler('pink')}
                innerSize={26}
                label=""
              />
              <CircleCheckBox
                checked={true}
                innerColor={'red'}
                onToggle={() => this.colorHandler('red')}
                innerSize={26}
                label=""
              />
              <CircleCheckBox
                checked={true}
                innerColor={'lightgreen'}
                onToggle={(checked) => this.colorHandler('lightgreen')}
                innerSize={26}
                label=""
              />
              <CircleCheckBox
                checked={true}
                innerColor={'purple'}
                onToggle={(checked) => this.colorHandler('purple')}
                innerSize={26}
                label=""
              />
              <CircleCheckBox
                checked={true}
                innerColor={'yellow'}
                onToggle={(checked) => this.colorHandler('yellow')}
                innerSize={26}
                label=""
              />
            </View>
          </View>

          <Button title='Add' full success
            onPress={this.submitTodo}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    backgroundColor: "#24D330",
    color: "#FFF",
    fontWeight: 'bold',
  },
  dateContainer: {
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    // border: '2px solid black'
  },
  parent: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    height: '100%'
  },
  marginB: {
    marginBottom: 20
  }
});

const mapDispatchToProps = dispatch => {
  return {
    add: (todo) => {
      dispatch(addTodo(todo))
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoComponent);