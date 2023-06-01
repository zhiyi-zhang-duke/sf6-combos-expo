import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../common.style.js';

const HomeScreen = ({ navigation }) => {
  const filenames = [
    'blanka.json',
    'cammy.json',
    'chun-li.json',
    'deejay.json',
    'dhasim.json',
    'e_honda.json',
    'guile.json',
    'jamie.json',
    'jp.json',
    'juri.json',
    'ken.json',
    'kimberly.json',
    'lily.json',
    'luke.json',
    'manon.json',
    'marisa.json',
    'ryu.json',
    'zangief.json',
  ];

  // Sort filenames alphabetically
  filenames.sort();

  return (
    <View style={styles.container}>
      {filenames.map((filename) => (
        <TouchableOpacity
          key={filename}
          style={styles.button}
          onPress={() => navigation.navigate('character', { fileName: filename })}
        >
          <Text style={styles.buttonText}>{formatFilename(filename)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

function formatFilename(filename) {
  const baseName = filename.replace('.json', '');
  const capitalized = baseName
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return capitalized;
}

export default HomeScreen;
