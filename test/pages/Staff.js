//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
// import all basic components


export default class Staff extends Component {
  //Staff Component
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['SID', 'SName', 'STelephone', 'SPhoto'],
      tableData: [
        ['7501', 'Sarinya', '089-352-7425', '7501.jpg'],
        ['7502', 'Kawin', '095-752-8531', '7502.jpg'],
        ['7503', 'Isara', '086-254-3597', '7503.jpg'],
        ['7504', 'Tanrada', '094-234-3521', '7504.jpg']
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff' 
  },
  head: { 
    height: 40, backgroundColor: '#f1f8ff' 
  },
  text: { margin: 6 }
});