import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
export default function App() {
  const [value, setInputValue] = useState('');
  const [res, setInputRes] = useState('');

  const pressBtnEvent = () =>{
    if(value.trim()){
      var n = 0;
      var result = 0;
      Array.from(value).forEach(element => {
        n = Number.parseInt(element);
        result+= n;
      });
      setInputRes(result);
    }else{
      Alert.alert("Поля не должны быть пустыми!")
    }
  }

  return (
    <View>
      <View style={styles.block}>
        <TextInput keyboardType = 'numeric' style = {styles.input} placeholder= "Введите число" value = {value} onChangeText={setInputValue}></TextInput>
        <Button title ="Выполнить" onPress={pressBtnEvent}/>
        <StatusBar style="auto" />
      </View>
      {res!=""&&
          <View style={styles.container}>
            <Text>Результат:   {res}</Text>
          </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 50
  },
  input: {
    width: '100%',
    textAlign:'center',
    padding: 10,
    borderStyle: 'solid',
    borderBottomColor: '#2196f3',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
