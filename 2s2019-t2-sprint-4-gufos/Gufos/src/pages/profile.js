import React, { Component } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';

export default class Profile extends Component {

    constructor() {
        super();
        this.state = {
            tokenLocal: null,
        };
    }

    componentDidMount() {
        this._buscarDadosDoStorage();
    }

    _buscarDadosDoStorage = async () => {
        try {
            const tokenDoStorage = await AsyncStorage.getItem('@gufos:token');
            if (tokenDoStorage != null) {
                this.setState({ tokenLocal: tokenDoStorage })
            }
        } catch (erro) { }
    };

    render() {
        return (
            <View style={styles.profile}>
                <Text style={styles.titulo}>{this.state.tokenLocal}</Text>
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