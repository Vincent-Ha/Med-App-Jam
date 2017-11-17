import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style = {styles.container}>
          <Text style = {styles.bolditalicblack}>OculAR</Text>
          <View style = {styles.buttonContainer}/>
            <Button
            onPress = {() => navigate('Exam')}
            title = "Take examination!"
            color = "steelblue"
            />
          <View style = {styles.buttonContainer}/>
            <Button
            onPress = {() => navigate('Results')}
            title = "View results"
            color = "steelblue"
            />
      </View>
    );
  }
}

/*
ResultsScreen Class
Handles the
*/
class ResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Results Screen',
  };

  render() {
    const tableLabels = ['Dates', 'Results'];
    const tableData = [
      ['10/08/2017', '06/01/2017', '09/20/2016'],
      ['20 / 210' , '20 / 200', '20 / 180']];

    widthArray = [];
    for(var index = 0; index < tableData[0].length; index++){
        widthArray.push(100);
    }

    return (
      <View style={styles.resultsScreenBackground}>
        <Text style = {{color: 'white', fontSize: 26, textAlign: 'left', fontWeight: '500'}}>
          {'\n'}     PAST EXAMS{'\n'}{'\n'}
        </Text>
        <View style={styles.resultsScreenCentered}>
          <Table style = {styles.tables} borderStyle = {{borderWidth: 0.5, borderColor: 'white'}}>
            <Row data = {tableLabels} style = {styles.tableHead} textStyle = {styles.tableText}/>
            <Cols data = {tableData} style = {styles.tableCols} textStyle = {styles.tableText}/>
          </Table>
        </View>
      </View>
    );
  }
}

const OculARNav = StackNavigator({
  Home: { screen: HomeScreen},
  Results: { screen: ResultsScreen}
});

// Main Function
export default class oculAR extends React.Component{
  render(){
    return <OculARNav />
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },

  bolditalicblack: {
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 50,
  },

  buttonContainer: {
    margin: 15,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultsScreenBackground: {
    flex: 1,
    backgroundColor: '#5ac8fa'
  },

  resultsScreenCentered: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5ac8fa',
    alignItems: 'center'
  },

  tables: {
    alignItems: 'center',
    width: 300
  },

  tableHead: {
     height: 40,
     backgroundColor : '#007aff',
  },

  tableCols: {
    height: 100,
    backgroundColor: '#5effde'
  },

  tableText: {
    fontSize : 20,
    textAlign:  'center'
  }
});
