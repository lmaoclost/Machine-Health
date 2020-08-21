import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import styles from './styles';
import api from '../../services/api';
import { RectButton } from 'react-native-gesture-handler';

function Diabetes() {
  const [pregnancies, setPregnancies] = useState('');
  const [glucose, setGlucose] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [skinThickness, setSkinThickness] = useState('');
  const [insulin, setInsulin] = useState('');
  const [bmi, setBMI] = useState('');
  const [diabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState('');
  const [age, setAge] = useState('');

  async function handleCalcSubmit() {
    const response = await api.post('/diabetes', {
      pregnancies,
      glucose,
      bloodPressure,
      skinThickness,
      insulin,
      bmi,
      diabetesPedigreeFunction,
      age
    });

    const { positive, negative } = response.data;

    Alert.alert(
      "Probability",
      `Yes: ${positive}%, No: ${negative}%`,
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calculate the Diabetes Probability
      </Text>

      <View style={styles.searchForm}>
        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Pregnancy</Text>
            <TextInput
              style={styles.input}
              placeholder="How many times you got pregnant?"
              value={pregnancies}
              onChangeText={text => setPregnancies(text)}
              keyboardType={'numeric'}
              placeholderTextColor="#c1bccc"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Glucose</Text>
            <TextInput
              style={styles.input}
              placeholder="What's your glucose value?"
              value={glucose}
              onChangeText={text => setGlucose(text)}
              keyboardType={'numeric'}
              placeholderTextColor="#c1bccc"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Blood Pressure</Text>
            <TextInput
              style={styles.input}
              placeholder="What's your blood pressure?"
              value={bloodPressure}
              onChangeText={text => setBloodPressure(text)}
              keyboardType={'numeric'}
              placeholderTextColor="#c1bccc"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Skin Thickness</Text>
            <TextInput
              style={styles.input}
              placeholder="What's your skin thickness"
              value={skinThickness}
              onChangeText={text => setSkinThickness(text)}
              keyboardType={'numeric'}
              placeholderTextColor="#c1bccc"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Insulin</Text>
            <TextInput
              style={styles.input}
              placeholder="What's your insulin level? "
              value={insulin}
              onChangeText={text => setInsulin(text)}
              keyboardType={'numeric'}
              placeholderTextColor="#c1bccc"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Body Mass Index</Text>
            <TextInputMask
              style={styles.input}
              placeholder="What's your body mass index?"
              value={bmi}
              onChangeText={text => setBMI(text)}
              keyboardType={'numeric'}
              placeholderTextColor="#c1bccc"
              type={'custom'}
              options={{
                mask: '99.99'
              }}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Diabetes Pedigree Function</Text>
            <TextInputMask
              style={styles.input}
              placeholder="What's your Diabetes Pedigree Function?"
              value={diabetesPedigreeFunction}
              onChangeText={text => setDiabetesPedigreeFunction(text)}
              keyboardType={'numeric'}
              placeholderTextColor="#c1bccc"
              type={'custom'}
              options={{
                mask: '9.999'
              }}
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Age {'\n'}</Text>
            <TextInput
              style={styles.input}
              placeholder="How Old are you?"
              value={age}
              onChangeText={text => setAge(text)}
              keyboardType={'numeric'}
              placeholderTextColor="#c1bccc"
            />
          </View>
        </View>
      </View>
      <RectButton style={styles.submitButton} onPress={handleCalcSubmit}>
        <Text style={styles.submitButtonText}>Calculate</Text>
      </RectButton>
    </View>
  );
}

export default Diabetes;
