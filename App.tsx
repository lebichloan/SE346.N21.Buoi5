import React from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native';

function App() { 
  const [selectedItem, setSelectedItem] = useState(null)
  return ( 
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
    <MainNavigator></MainNavigator>
  </SafeAreaView>
};

export default App;
