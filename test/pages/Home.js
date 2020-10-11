//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native';



// import all basic components

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Image
            source={require('../image/01.jpg')}
            style={{ marginTop:3,width: 600,height:200}}
          />          
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>วิสาหกิจชุมชนกลุ่มอนุรักษ์ป่าชายเลนบ้านแหลมโฮมสเตย์</Text>
              <Text style={styles.info}>ลักษณะเด่น</Text>
              <Text style={styles.description}>เป็นพื้นที่ ที่มีแหล่งโคลนที่มีความอุดมสมบูรณ์สูงในการทำสปา มีเมนูอาหารที่เป็นเอกลักษณ์คือข้าวมันทะเลโคลนและใบโกงกางทอดเทมปุระที่อร่อยที่สุด</Text>
              <Text style={styles.info}>เวลาทำการ</Text>
              <Text style={styles.description}>หมายเหตุเวลาทำการ : เปิดทำการทุกวันไม่เว้นวันหยุดราชการ : 08:30 - 16:00</Text>
              <Text style={styles.info}>ราคาค่าเข้าชม</Text>
              <Text style={styles.description}>ต่างชาติ ผู้ใหญ่: 1650</Text>
              
              
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'30',
  },
  body:{
    marginTop:20,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:10,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
