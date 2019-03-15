import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Container, Header, Title, Right, Body, Textarea, Content } from "native-base";
import CircleCheckBox from 'react-native-circle-checkbox';
import DatePicker from 'react-native-datepicker'

const TodoComponent = (props) => {
  return (<Container>
    <Header span style={styles.header}>
      <Body>
        <Title>Add</Title>
      </Body>
      <Right />
    </Header>
    <Content padder>
      <Textarea rowSpan={2} bordered
        placeholder="When do you need to do?"
        value={props._state.text}
        onChangeText={props._inputChangeHandler}
      />
      <View style={styles.dateContainer}>
        <DatePicker
          style={{ width: 200 }}
          date={props._state.time}
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
          onDateChange={(date) => { props._dateHandler(date) }}
        />
      </View>

      <View style={styles.marginB}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <CircleCheckBox
            checked={true}
            outerColor={'red'}
            innerColor={"rgba(255, 192, 203, 0.5)"}
            onToggle={(checked) => props._colorHandler('pink')}
            innerSize={26}
            label=""
          />
          <CircleCheckBox
            checked={true}
            innerColor={'red'}
            onToggle={() => props._colorHandler('red')}
            innerSize={26}
            label=""
          />
          <CircleCheckBox
            checked={true}
            innerColor={'lightgreen'}
            onToggle={(checked) => props._colorHandler('lightgreen')}
            innerSize={26}
            label=""
          />
          <CircleCheckBox
            checked={true}
            innerColor={'purple'}
            onToggle={(checked) => props._colorHandler('purple')}
            innerSize={26}
            label=""
          />
          <CircleCheckBox
            checked={true}
            innerColor={'yellow'}
            onToggle={(checked) => props._colorHandler('yellow')}
            innerSize={26}
            label=""
          />
        </View>
      </View>

      <Button title='Add' full success
        onPress={props._submitTodo}
      />
    </Content>
  </Container>)
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

export default TodoComponent;