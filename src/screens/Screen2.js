import React from 'react';
import {StyleSheet, Text,SafeAreaView ,View, TouchableOpacity, Image} from 'react-native';

function Screen2({navigation, route}) {
return ( 
    <SafeAreaView style={styles.container}> 
        <TouchableOpacity onPress={()=>navigation.navigate('Screen1')}>
            <View style = {styles.productContainer}>
                <Image 
                style = {styles.image}
                source={{uri: route.params.item.avatar_url}} />
                
                <View style = {{marginLeft: 20, flexDirection: 'column'} }>
                    <Text style = {styles.textName}>
                        {route.params.item.name}
                    </Text>

                    <Text style = {styles.textName}>
                        {route.params.item.price}
                    </Text>
                </View>
            </View>

            <View style ={styles.product}>
                <Text style = {styles.textName}>
                    Description: {route.params.item.description}
                </Text>
            </View>
        </TouchableOpacity>
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
}
});

export default Screen2;