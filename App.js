import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Top Left "Pro" Button */}
      <TouchableOpacity style={styles.proButton}>
        <Text style={styles.proButtonText}>Pro</Text>
      </TouchableOpacity>

      {/* Top Right Icons */}
      <View style={styles.topRightIcons}>
        <TouchableOpacity style={styles.topRightIcon}>
          <Icon name="cog" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topRightIcon}>
          <Icon name="info" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Top Menu Buttons with Icons */}
      <View style={styles.topMenu}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="camera" size={24} color="black" />
          <Text style={styles.menuText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="magic" size={24} color="black" />
          <Text style={styles.menuText}>Retouch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="comment" size={24} color="black" />
          <Text style={styles.menuText}>Captions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="scissors" size={24} color="black" />
          <Text style={styles.menuText}>AutoCut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="comment-o" size={24} color="black" />
          <Text style={styles.menuText}>Prompter</Text>
        </TouchableOpacity>
      </View>

      {/* New Project Button with + Icon */}
      <TouchableOpacity style={styles.newProjectButton}>
        <Icon name="plus" size={20} color="white" style={styles.plusIcon} />
        <Text style={styles.newProjectText}>New Project</Text>
      </TouchableOpacity>

      {/* Local Text Button */}
      <TouchableOpacity style={styles.localButton}>
        <Text style={styles.localButtonText}>Local</Text>
      </TouchableOpacity>

      {/* Edit, Templates, and Camera Sections */}
      <View style={styles.sections}>
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>Templates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>Camera</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40, // Add padding to move content to the top
    paddingHorizontal: 20, // Add horizontal padding for icons and buttons
    alignItems: 'center',
  },
  proButton: {
    position: 'absolute',
    left: 16,
    top: 16,
    backgroundColor: 'purple', // Change the background color to purple
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    zIndex: 2, // Ensure it's above other elements
  },
  proButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topRightIcons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 16,
    top: 16,
  },
  topRightIcon: {
    marginLeft: 16,
  },
  topMenu: {
    flexDirection: 'row',
    marginTop: 60, // Adjust the margin to align with the "Pro" button
  },
  menuButton: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newProjectButton: {
    backgroundColor: 'skyblue',
    width: windowWidth - 120, // Occupy the space on both sides (3 inches)
    paddingHorizontal: 60, // Increase the horizontal size (1.5 inches)
    paddingVertical: 24, // Keep the vertical size
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center', // Center the contents horizontally
  },
  plusIcon: {
    marginRight: 8,
    backgroundColor: 'skyblue',
    borderRadius: 10, // Make the background circular
    padding: 5, // Adjust the padding for the icon background
  },
  newProjectText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  localButton: {
    position: 'absolute',
    left: 20, // Adjust the left position to align with the camera icon
    top: windowWidth / 2 + 20, // Position below the "New Project" button
  },
  localButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sections: {
    flexDirection: 'row',
    marginTop: 20,
  },
  sectionButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
  sectionButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;