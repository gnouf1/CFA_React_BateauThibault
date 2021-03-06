import { Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import Button from '../component/Button';
import Footer from '../component/Footer';
import { images } from '../constants/Images';
import Vcard from '../component/Vcard';
import Title from '../component/Title';
import styles from '../services/Style';

export default function recettes(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../assets/background.png")} style={styles.Pimage}>

                <View style={styles.main}>
                    <Title title="Nos recettes"></Title>
                    <View style={styles.Rcontenu}>
                        <Text style={styles.boldText}>Toutes les recettes du bateau de Thibault.</Text>
                        <Vcard></Vcard>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.buttons1}>
                        <Button text="Homard"
                        image={images.homardRecette_icon.url}
                        screen={"Homard"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="St Jacques"
                        image={images.saintJacques_icon.url}
                        screen={"StJacques"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons1}>
                        <Button text="Bar"
                        image={images.barRecette_icon.url}
                        screen={"Bar"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Tourteau"
                        image={images.tourteau.url}
                        screen={"TourteauLinguine"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons2}>
                        <Button text="Recette"
                        image={images.poulpe.url}
                        screen={"Recette"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Recette"
                        image={images.poulpe.url}
                        screen={"Recette"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <Footer></Footer>
                </View>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}
