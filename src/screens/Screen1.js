import React from 'react';
import {StyleSheet, Text,SafeAreaView ,View, TouchableOpacity, Image, FlatList} from 'react-native';

const products = [
    {
      id: 1,
      avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
      description: 'Keep your eyes on the stars and your feet on the ground.',
      price: '500 000',
      name: 'San Pham 001'
    },
    { id: 2,
      avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
      description: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
      price: '1 500 000',
      name: 'San Pham 002'
    },
  ];

function Screen1({navigation}) {
return ( 
    <SafeAreaView style={styles.container}> 
    <FlatList
        data={products}
        keyExtractor = {(item) => item.id.toString()}
        renderItem = {({item}) =>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('Screen2',{item})}> 
                <View style = {styles.productContainer}>
                    <Image 
                        style = {styles.image}
                        source={{uri: item.avatar_url}} />
                    
                    <View style = {{marginLeft: 15, flexDirection: 'column'} }>
                        <Text style = {styles.textName}>
                            {item.name}
                        </Text>

                        <Text style = {styles.textName}>
                            {item.price}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
        }}
    />
    </SafeAreaView> 
);
};

const styles = StyleSheet.create({
container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
},
productContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    height: 100,
    marginTop: 10,
},
image: {
    width: 55,
    height: 55,
    marginLeft: 10,
},
textName:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
},
});
      
export default Screen1;