import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View,Image,StyleSheet,Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();

    function handleNavigateToGoals()
    {
        navigation.navigate('Goals');
    }
    return (
        <ImageBackground source={require('../../assets/backgound1.png')} 
        style={styles.container}
        resizeMode='contain'
        imageStyle={{width: 384, height: 388}}
        >
            <View style={styles.main}>
            {/* <Image source={require('../../assets/logo.png')}/> */}
                <Text style={styles.title}>Adicione suas metas e seus locais favoritos : )</Text>
                <Text style={styles.description}> Tome suco de abacaxi </Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button}  onPress={handleNavigateToGoals}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="arrow-right" color="#fff" size={24}/>
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </RectButton>
            </View>
        </ImageBackground> 
        )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 20,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home; 