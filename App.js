/*
..........................................yMMd...............oMMM-..................................................................................................................
.......................:::-...............yMMd...............-///.........::-.................::-.................-::-.........::-....................-::-........-:::-......-:::-..
hMMd...dMMm...mMMs..omMMMMMNh:..-MMMydNMs.yMMd..sMMN+........+MMM...mMMmdMMMMd:.........dMMmdMMMMd:..oMMMsmMM:./dMMMMMMd+...+dMMMMNMMM+..sMMNsmMM-./dMMmmMMd/../hNMNNMMN:.-yNMMNNMMo
-NMM/.oMNMMo.+MMm..yMMm:..oMMM:.-MMMhsos/.yMMd/mMMy-.........+MMM...mMMd/:/NMMh.........dMMd:-:hMMN..oMMMysos-+MMM/../NMMo.+MMMo-.-MMM+..sMMNysos.oMMm:::oMMM-.MMMh/---+-.hMMN/:--//
.oMMm-NM+yMN-mMM/..NMMy....MMMs.-MMM/.....yMMMMMMm-..........+MMM...mMMs...hMMh.........dMMh.../MMM:.oMMM.....hMMm....dMMd.yMMN....MMM+..sMMm.....dMMNmmmmmmm:.+mMMMMMNh:.:dMMMMMNd+
..dMMmMd.-NMmMMy...yMMm-..+MMM/.-MMM/.....yMMm-sMMN+.........+MMM...mMMs...hMMh.........dMMh..:dMMm..oMMM.....+MMM/..:NMMo./MMMy//oMMM+..sMMm.....sMMN/....:o..o:-:/+NMMh.+/--:+dMMN
..:MMMM:..+MMMN-....smMMNNMMh/..-MMM/.....yMMd../NMMy........+MMM...mMMs...hMMh.........dMMNMMMMNy-..oMMM......+dMMNNMMm+.../hNMMNhMMM+..sMMm......+dMMMNNMMN.-NMMNNNMNy-.hMMNNNMMd/
...----....---........-://:......---.......---....---.........---...---.....--..........dMMh.::-......---.........://:....../o/::/yMMN-...---.........-::::.....-::::-......-:::-...
........................................................................................hNNy................................+mNMMMNds-..............................................
*/

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import { withAnchorPoint } from 'react-native-anchor-point'

const COLOR_RED = '#dc1830'
const GAP = 25
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
export default function App() {

  const rotateValue = useRef(new Animated.Value(0)).current
  const translateValueY = useRef(new Animated.Value(0)).current
  const translateValueX = useRef(new Animated.Value(0)).current
  const scaleValue = useRef(new Animated.Value(1)).current
  const getTransform = () => {
    let transform = {
      transform: [
        {
          rotateY: rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '140deg']
          })
        },
        {
          translateX: translateValueX
        },
        {
          translateY: translateValueY
        },
        {
          scale: scaleValue
        },
      ],
    };
    return withAnchorPoint(transform, { x: 1, y: 1 }, { width: SCREEN_WIDTH + 40, height: SCREEN_HEIGHT });
    // return transform
  };

  {/* <Animated.View style={[styles.blockBlue, this.getTransform()]} /> */ }

  const pressAnimation = () => {
    Animated.timing(translateValueY, {
      toValue: 5,
      duration: 200,
      useNativeDriver: true

    }).start()
  }
  const openAnimation = () => {

    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 1.06,
        duration: 500,
        useNativeDriver: true,

      }),
      Animated.timing(translateValueX, {
        toValue: SCREEN_WIDTH * 1.1,
        duration: 500,
        useNativeDriver: true,
      }),
      // Animated.timing(rotateValue, {
      //   toValue: 1,
      //   duration: 500,
      //   useNativeDriver: true,
      // })

    ]).start()
  }
  const closeAnimation = () => {

    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateValueX, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,

        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        // Animated.timing(rotateValue, {
        //   toValue: 0,
        //   duration: 500,
        //   useNativeDriver: true,
        // })
      ]),
      Animated.timing(translateValueY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      })

    ]).start()
  }

  const handle_press = () => {
    pressAnimation()
  }
  const handle_OpenBtn = () => {

    openAnimation()

    setTimeout(() => { closeAnimation() }, 4000)
  }

  return (
    <View style={styles.container}>
      <View style={[
        { width: SCREEN_WIDTH * 1.2, height: SCREEN_HEIGHT - (GAP * 2.5) },
        { position: 'absolute', top: GAP * 2.5 },
        { alignItems: 'center', justifyContent: 'center' },

      ]}>
        <Image source={require('./assets/img/front.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

      </View>



      <View style={[
        { width: 100, height: 100 },
        { position: 'absolute', top: GAP, left: GAP },
      ]}>
        <Image source={require('./assets/img/circle_blue.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

      </View>

      <View style={[
        { width: 100, height: 30 },
        { position: 'absolute', top: GAP, left: (SCREEN_WIDTH / 2) - 50 },
      ]}>
        <Image source={require('./assets/img/color_light.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

      </View>

      <Animated.View style={[
        { width: SCREEN_WIDTH * 1.2, height: SCREEN_HEIGHT - (GAP * 2.5) },
        { position: 'absolute', top: GAP * 2.5 },
        { alignItems: 'center', justifyContent: 'center' },
        getTransform(),

      ]}>
        <Image source={require('./assets/img/front.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />
        <View style={[
          { width: SCREEN_WIDTH * .7, height: 30 },
          { position: 'absolute', bottom: GAP * 3 },
        ]}>
          <Image source={require('./assets/img/front_bottom.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

        </View>

        <Pressable
          // onLongPress={() => handle_press()}
          onPressIn={() => handle_press()}
          onPressOut={() => handle_OpenBtn()} style={[
            { width: 40, height: 100 },
            { position: 'absolute', left: GAP, top: (SCREEN_HEIGHT / 2) - 50 },
          ]}>
          <Image source={require('./assets/img/open_btn.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

        </Pressable>
      </Animated.View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_RED,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
