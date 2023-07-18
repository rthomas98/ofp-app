import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';


// MenuBox Component
const MenuBox = ({ iconName, text }) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity 
      style={[styles.menuBox, selected && styles.selectedBox]} 
      onPress={handlePress}
    >
      <Ionicons name={iconName} size={30} color={selected ? "#FFFFFF" : "#FF1843"} />
      <Text style={[styles.info, selected && styles.selectedInfo]}>{text}</Text>
    </TouchableOpacity>
  )
}

// SelectInterest Component
const SelectInterest = () => {
  const items = [
    { iconName: "heart", text: "Trivia" },
    { iconName: "beaker", text: "Cooking" },
    { iconName: "build", text: "Crafts" },
    { iconName: "basketball", text: "Sports" },
    { iconName: "chatbubbles", text: "Games" },
    { iconName: "musical-notes", text: "Music" },
    { iconName: "book", text: "Reading" },
    { iconName: "car-sport", text: "Racing" },
    { iconName: "pencil", text: "Writing" },
    { iconName: "game-controller", text: "Gaming" },
    { iconName: "card", text: "Cards" },
    { iconName: "musical-note", text: "Dancing" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>Choose your interest to donate. Don't worry, you can always change it later.</Text>

      {items.map(item => (
        <MenuBox key={item.text} iconName={item.iconName} text={item.text} />
      ))}

    <View style={styles.button}>
            <Link style={styles.buttonText} href={'/home/'}>
            Go to my dashboard
            </Link>
        </View>

    </View>
  )
}

export default SelectInterest

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    backgroundColor: '#fff',
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#09101D',
    marginBottom: 15,
  },
  menuBox: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
  selectedBox: {
    backgroundColor: '#FF1843',
  },
  icon: {
    width: 60,
    height: 60,
  },
  info: {
    fontSize: 16,
    color: '#696969',
  },
  selectedInfo: {
    color: '#FFFFFF',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#FF1843',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    width: '100%',
},
});
