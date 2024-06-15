import React from 'react'
import {TextInput, StyleSheet, Text, View} from 'react-native'

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) => {
  const styles = StyleSheet.create({
    textInputWrapper:{
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: '#DDD',
      padding: 10,
    },
  })

return (
  <View style={styles.textInputWrapper}>
    <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
        borderRadius={8}
      />
  </View>
) 
}

export default CustomTextInput
