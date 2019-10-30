import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Categorias extends Component{

    constructor() {
        super();
        this.state = {
            categorias: []
        }
    }


    componentDidMount() {
        this._carregarCategorias();
    }

    _carregarCategorias = async () => {
        await fetch('http://192.168.7.85:5000/api/categorias')
            .then(resposta => resposta.json())
            .then(data => this.setState({ categorias: data }))
            .catch(erro => console.warn(erro))
    }

    render() {
        return (
            <FlatList
            data={this.state.categorias}
            keyExtractor={item => item.idCategoria}
            renderItem={({ item }) => (
                <View style={styles.table} >
                        <Text style={styles.info}>Nome: {item.nome}</Text>
                </View>
                )}
            />
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

    info: {
        fontSize: 20,
        textAlign: 'center'
    }
})