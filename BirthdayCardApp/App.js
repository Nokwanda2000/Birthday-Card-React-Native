// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BirthdayCardApp = () => {
  // State for text input
  const [message, setMessage] = useState('Happy Birthday!');
  // State for background image
  const [backgroundImage, setBackgroundImage] = useState(require('./assets/adaptive-icon.png'));
  // State for text formatting
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [textColor, setTextColor] = useState('#000000');

  // Function to change background image
  const changeBackground = () => {
    setBackgroundImage(require('./assets/adaptive-icon.png'));
  };

  // Function to toggle bold text
  const toggleBold = () => {
    setIsBold(!isBold);
  };

  // Function to toggle italic text
  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  // Function to change text color
  const changeTextColor = () => {
    setTextColor(textColor === '#000000' ? '#FF5733' : '#000000');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background Image */}
      <Image source={backgroundImage} style={styles.backgroundImage} />

      {/* Card Content */}
      <View style={styles.card}>
        {/* Text Input for Message */}
        <TextInput
          style={styles.input}
          onChangeText={setMessage}
          value={message}
          placeholder="Enter your birthday message"
          multiline
        />

        {/* Display Message with Formatting */}
        <Text
          style={[
            styles.message,
            { fontWeight: isBold ? 'bold' : 'normal' },
            { fontStyle: isItalic ? 'italic' : 'normal' },
            { color: textColor },
          ]}
        >
          {message}
        </Text>

        {/* Formatting Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleBold} style={styles.button}>
            <Ionicons name="md-bold" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleItalic} style={styles.button}>
            <Ionicons name="md-italic" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={changeTextColor} style={styles.button}>
            <Ionicons name="md-color-palette" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Change Background Button */}
        <TouchableOpacity onPress={changeBackground} style={styles.changeBackgroundButton}>
          <Text style={styles.buttonText}>Change Background</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  changeBackgroundButton: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BirthdayCardApp;