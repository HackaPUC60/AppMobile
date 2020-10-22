import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeComponent extends Component {

  state = {
		'title': 'Me Da Um Sinal'
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.footApp}>
          <Text style={styles.homeMessage}>{ this.state['title'] }</Text>
        </Text>
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
  footApp: {
    position: 'absolute',
    width: 411,
    height: 337,
    left: 0,
    top: 486,
    backgroundColor: '#235390'
  },
  homeMessage: {
    position: 'absolute',
    left: '19',
    right: '8',
    top: '860',
    bottom: '8',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 36,
    lineHeight: 44,
    color: '#FCFCFC'
  }
});

export default HomeComponent;
