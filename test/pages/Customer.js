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
      tableHead: ['CID', 'CName', 'CTelephone', 'CSex'],
      tableData: [
        ['1002', 'Chutima', '084-3526578', 'M'],
        ['1003', 'Pathompong', '084-7330422', 'F'],
        ['1004', 'Siwakorn', '092-9586655', 'F'],
        ['1005', 'Thitipong', '089-7445678', 'M']
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