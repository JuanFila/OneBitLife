import React from "react";
import { View,Text, Image ,ScrollView } from "react-native";

export default function Start() {
    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={façse}>
                <View>
                    <Image
                    source={require("../../assets/icons/logo3.png")}
                    />
                    <Text>
                        Vamos transformar sua vida {"/n"} em jogo, bucscando sempre {"/n"}
                        o melhor nível
                    </Text>
                </View>

            </ScrollView>
        </View>
    )
}