import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            eventos: [] //api
        };
    }

    componentDidMount() {
        this._carregarEventos();
    }

    _carregarEventos = async () => {
        //axios, fetch, xhr
        await fetch('http://192.168.7.85:5000/api/eventos')
            .then(resposta => resposta.json())
            .then(data => this.setState({ eventos: data }))
            .catch(erro => console.warn(erro));
    };

    render() {
        return (
            <FlatList
                data={this.state.eventos}
                keyExtractor={item => item.idEvento}
                renderItem={({ item }) => (
                    <View style={style.table}>
                        <Text style={style.title}>{item.titulo}</Text>
                        <Text style={style.data}>{item.dataEvento}</Text>
                    </View>
                )}
            />
        );
    }

}
    const style = StyleSheet.create({

        table:{
            backgroundColor: '#4EC1E3'
        },

        title:{
            backgroundColor:'#4EC1E3',
            fontSize: 20,
            textAlign: 'center'
        },

        data:{
            backgroundColor:'#A8D8E7',
            fontSize: 20,
            textAlign: 'center'
        }
    })


