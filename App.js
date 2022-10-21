import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput
} from 'react-native';
export default function App(){
return(
  <View style={styles.Container}>
    <Image style={styles.logo}source={require("./assets/logo.jpg")}/>
  
  <View style={styles.inputView}>
    <TextInput
          style={styles.textInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />

  </View>
  <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
    </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
  </View>
);
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  font: {
    fontSize: 24,
    fontWeight: '600',
  },
  logo: {
    width:100,
    height:100,
    marginTop:1,
    borderRadius:50,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginTop:10,
  },
  textInput:{
    height: 50,
    flex: 1,
    padding:0,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
    backgroundColor:"#f0733a",
  },
});

