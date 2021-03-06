import { Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import Footer from '../../component/Footer';
import Title from '../../component/Title';
import Json from '../../services/text';
import styles from '../../services/Style';

export default function saphir(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../../assets/background.png")} style={styles.bg}>
                <View style={styles.main}>
                    <Title title={Json.ship.saphir.Title}></Title>
                    <View style={styles.image}>
                      <Image
                      source={Json.ship.saphir.img}
                      />
                    </View>
                  <View style={styles.contenu}>
                      <Text>Qu'il est chaud le Soleil</Text>
                      <Text>Quand nous sommes en vacances</Text>
                      <Text>Y a d'la joe, des hirondelles</Text>
                      <Text>C'est le Sud de la France</Text>
                      <Text>Papa bricole au garage</Text>
                      <Text>Maman lit dans la chaise longue</Text>
                      <Text>Dans ce jolie paysage</Text>
                      <Text>Moi, je me balade en tongs</Text>
                      <Text>{'\n'}Que de bonheur !</Text>
                      <Text>Que de bonheur !</Text>
                  </View>
                </View>
                <Footer></Footer>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}
