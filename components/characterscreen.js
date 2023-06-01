import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../common.style.js'; // import the styles
import { getCharacterData } from './character_util.js';

const CharacterScreen = ({ route }) => {
  const { fileName } = route.params;
  const formattedFilename = formatFilename(fileName);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const characterData = await getCharacterData(fileName);
      setData(characterData);
    };

    fetchData();
  }, [fileName]);

  function formatFilename(filename) {
    // Strip the ".json" extension
    const baseName = filename.replace('.json', '');
  
    // Custom transformations for specific filenames
    if (baseName === 'e_honda') {
      return 'E. Honda';
    }
  
    // Capitalize the first letter
    const capitalized = baseName.charAt(0).toUpperCase() + baseName.slice(1);
  
    return capitalized;
  }
  

  function formatFieldName(fieldName) {
    const regex = /([A-Z])/g;
    const formatted = fieldName.replace(regex, ' $1');
    const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  
    return capitalized;
  }  

  function renderValue(value) {
    if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
      return value.map((item, index) => (
        <Text key={index} style={styles.value}>
          {item}
        </Text>
      ));
    }
  
    return <Text style={styles.value}>{value}</Text>;
  }  

  if (data === null || Object.keys(data).length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{formattedFilename}</Text>
        <Text style={styles.key}>Under Construction</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data && (
        <>
          <Text style={styles.header}>{formattedFilename}</Text>
          {Object.entries(data).map(([key, value]) => (
            <View key={key} style={styles.item}>
              <Text style={styles.key}>{formatFieldName(key)}</Text>
              {renderValue(value)}
            </View>
          ))}
        </>
      )}
    </View>
  );
};

export default CharacterScreen;