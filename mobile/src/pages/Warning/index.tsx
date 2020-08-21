import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

function Warning() {
  const { navigate } = useNavigation();

  function hadleNavigateToDiabetes() {
    navigate('Diabetes');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Warning, {'\n'}
      </Text>
      <Text style={styles.titleText}>
          The app is only used for study, we are not responsible to any results here.
          If you need a diagnosis, see a doctor.
        </Text>
        <RectButton
          onPress={hadleNavigateToDiabetes}
          style={[styles.okButton]}
        >
          <Text style={styles.oktButtonText}>Ok</Text>
        </RectButton>
    </View>
  );
}

export default Warning;