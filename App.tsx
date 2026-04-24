import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CustomButton from './components/CustomButton';
import BottomNavigation from './components/BottomNavigation';
import SectionHeader from './components/SectionHeader';

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <Header />

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Recommended */}
        <SectionHeader title="Recommended" />

        <View style={styles.grid}>
          <ProductCard
            title="Layered Earth Tones"
            price="$158.99"
            image={require('./assets/images/explore/layered-earth-tones.png')}
          />
        </View>

        {/* Trending */}
        <SectionHeader title="Trending now" />

        {/* Button */}
        <CustomButton title="Continue shopping" />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="Home" />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
