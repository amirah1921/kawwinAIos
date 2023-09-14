import React, { useState } from "react";
import Background from "../component/Background";
import { View, StyleSheet, Image } from "react-native";
import CustomButton from '../component/CustomButton';
import HeaderComponent from "../component/HeaderComponent";

const BackgroundImage = ({ source, opacity, children }) => {
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={source}
                style={[StyleSheet.absoluteFill, { opacity, width: '100%', height: '100%' }]}
                resizeMode="cover"
            />
            {children}
        </View>
    );
};

const BudgetScreen = ({ navigation }) => {
    return (
        <Background>
            <BackgroundImage source={require("../assets/spending.png")} opacity={0.3}>
                <HeaderComponent title="My Spending" navigation={navigation} />
                <View style={styles.container}>
                    <CustomButton
                        title="Add Budget"
                        onPress={() => navigation.navigate('Add2')}
                        width={260}
                        height={50}
                        backgroundColor="rgba(255, 255, 255, 0.7)" // 80% opacity
                    />
                    <CustomButton
                        title="Update Budget"
                        onPress={() => navigation.navigate('ViewBudget')}
                        width={260}
                        height={50}
                        backgroundColor="rgba(255, 255, 255, 0.7)" // 80% opacity
                    />

                </View>
            </BackgroundImage>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    text: {
        color: "white",
        fontSize: 24,
        marginVertical: 30,
        fontFamily: "Poppins",
    },
    addButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
});

export default BudgetScreen;
