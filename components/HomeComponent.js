import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

class HomeComponent extends Component {

  state = {
		'title': 'Me Da Um Sinal'
	};

	render() {
		return (
			<View style={styles.container}>
        <View style={styles.containerPhoto}>
          <Image source={require('../assets/monkeyHome.png')} style={styles.homeImage}/>
        </View>        
				<View style={styles.footApp}>
            <View style={styles.viewButton}>
              <Button
                  style={styles.buttonRegisterFoot}
                  title="Registrar"
              />
            </View>            
          <Text style={styles.homeMessage}>{ this.state['title'] }</Text>
        </View>
			</View>
		);
  }
  
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
  },
  containerPhoto: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footApp: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#235390'
  },
  homeMessage: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 36,
    lineHeight: 44,
    color: '#FCFCFC'
  },
  viewButton: {
    width: 180,
    marginBottom: 20
  },
  buttonRegisterFoot: {
    height: 300,
    borderRadius: 200,
  },
  homeImage: {
    left: 150
  }
});

export default HomeComponent;
