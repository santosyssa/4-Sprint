import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.profile}>
                <Text style={styles.titulo}>Nome:</Text>
                <Text style={styles.info}>Rayssa Tavares dos Santos</Text>
                <Text style={styles.titulo}>Idade:</Text>
                <Text style={styles.info}>16 anos</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    profile: {
        backgroundColor: '#A8D8E7',
    },

    titulo: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#4EC1E3',

    },

    titulo2: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
        backgroundColor: '#A8D8E7',

    },

    info: {
        fontSize: 20,
        textAlign: 'center'
    }
})