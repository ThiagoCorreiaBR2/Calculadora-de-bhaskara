import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import styles from "./styles";

export default function Baskara() {

    const [state, setState] = React.useState({      //aqui são estabelecidos o hook do UseState do react 
        A: '',
        B: '',
        C:'',
        Delta:'',
        Resultado1: '',
        Resultado2: '',
      })


    const {             //aqui sao estabelecidas as variaveis de soomente-leitura
        A,
        B,
        C,
        Delta,
        Resultado1,
        Resultado2,
      } = state

      const handleAChangeText = text => setState({...state, A: text})           //neste bloco é realizado o tratamento das informaçoes dadas no text Input
      const handleBChangeText = text => setState({...state, B: text})
      const handleCChangeText = text => setState({...state, C: text})
    
      function handleButtonPress() {      //aqui é declarado as variaveis para o calculo da equação
        let Resultado1
        let Resultado2
        let Delta
        Delta = (B** 2) - (4*A*C)          //o Delta é calculado 
        if(Delta<0){      //IF que determina se o delta é menor que 0 e provê o resultado adequado
          Resultado1 = 'não há raizes válidas para a equação de 2º grau.'
          Resultado2= ''
        }else{             //se o delta for maior que 0 o resultado será calculado
            Resultado1= -(B)+Math.sqrt(Delta)/2*C
            Resultado2= -(B)-Math.sqrt(Delta)/2*C
        }
        setState({...state, Delta: Delta, Resultado1: Resultado1, Resultado2: Resultado2})
        //Esse setState atribui as variaveis
      }
      
      //Esse bloco é responsavel por apresentar o prompt, area para se colocar o input e o resultado
    return (
        <View >
            <Text style={styles.title}>Equação de segundo grau</Text>
          <View >
            <Text>A:</Text>
            <TextInput
              style={styles.textInput} 
              onChangeText={handleAChangeText}
              inputMode="decimal"
              keyboardType="decimal-pad"
            />
          </View>
          <View styles={styles.caixa}>
            <Text>B:</Text>
            <TextInput 
                style={styles.textInput} 
              onChangeText={handleBChangeText}
              inputMode="decimal"
              keyboardType="decimal-pad"
            />
          </View>
          <View>
            <Text>C:</Text>
            <TextInput 
                style={styles.textInput} 
              onChangeText={handleCChangeText}
              inputMode="decimal"
              keyboardType="decimal-pad"
            />
          </View>
          <View >
            <Button title="Calcular"  onPress={handleButtonPress}/>
          </View>
          <View >
            <Text>Delta:</Text>
            <Text style={styles.textInput}>{Delta}</Text>
          </View>
          <View >
            <Text>Resultado 1:</Text>
            <Text style={styles.textInput}>{Resultado1}</Text>
          </View>
          <View >
            <Text>Resultado 2:</Text>
            <Text style={styles.textInput}>{Resultado2}</Text>
          </View>
        </View>
      )


}