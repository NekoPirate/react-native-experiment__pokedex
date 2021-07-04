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
import React, { useCallback, useState, useRef } from 'react';
import { Dimensions, Animated, View, Image, ScrollView } from 'react-native';

import ScreenLeft from './components/ScreenLeft'
import ScreenRight from './components/ScreenRight'
import RoundBTN from './components/RoundBTN'

import { withAnchorPoint } from 'react-native-anchor-point'

const COLOR_RED = '#c2133a'
const COLOR_RED_LIGHT = '#f6a9b2'
const COLOR_GOLD = '#f5c912'
const COLOR_GOLD_LIGHT = '#fcf0be'
const COLOR_GREEN = '#4fa95f'
const COLOR_GREEN_LIGHT = '#c1e2c7'
const COLOR_BLUE = '#11709e'
const COLOR_BLUE_LIGHT = '#d2d2d2'
const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const GAP = SCREEN_WIDTH * .05
const SPEED = 750

export default function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const animationValue = useRef(new Animated.Value(0)).current


  const openCover = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `180deg`]
  })

  const fadeCover = animationValue.interpolate({
    inputRange: [0, 0.9, 1],
    outputRange: [1, 1, 0]
  })

  const getCoverAnimatedStyle = () => {
    let transform = {
      opacity: fadeCover,
    }
    return transform;
  }

  const getCoverSpecialAnimatedStyle = () => {
    let transform = {
      transform: [{ rotateY: openCover }, { perspective: 15000 }]
    }
    return withAnchorPoint(transform, { x: 1, y: 1 }, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT });
  }


  const openAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: SPEED,
      useNativeDriver: true,
    }).start()
    setIsOpen(isOpen => !isOpen)
  }

  const closeAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: SPEED,
      useNativeDriver: true,
    }).start()
    setIsOpen(isOpen => !isOpen)
  }


  const handle_toggle_open = useCallback(() => {

    isOpen

      ? closeAnimation()
      : openAnimation()

    // setIsOpen(isOpen => !isOpen)

    // setCount(count + 1)
    // console.log('count')
  }, [isOpen])

  return (
    <View style={[
      { flex: 1 },
      { alignItems: 'center', justifyContent: 'flex-start' },
      { backgroundColor: COLOR_OUTLINE },
    ]}>


      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        scrollEnabled={isOpen ? true : false}
      >
        <ScreenLeft animationValue={animationValue} />

        <ScreenRight />

      </ScrollView>


      {/*  PDX3  */}
      <View
        pointerEvents='none'
        style={[
          { width: SCREEN_WIDTH, height: '100%' },
          { justifyContent: 'flex-start', alignItems: 'center' },
          { position: 'absolute' },

        ]}>
        <Animated.View style={[
          { width: SCREEN_WIDTH, height: '100%' },
          { justifyContent: 'space-between', alignItems: 'center' },
          { position: 'absolute', right: 0 },
          getCoverAnimatedStyle(),
          getCoverSpecialAnimatedStyle(),
        ]}>
          <Image source={require('./assets/img/PDX3_A.png')} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />
          <Image source={require('./assets/img/PDX3_B.png')} style={{ flex: 1, width: SCREEN_WIDTH, }} resizeMode={'stretch'} />
          <Image source={require('./assets/img/PDX3_C.png')} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />

        </Animated.View>
      </View>

      {/* BTN OPEN------------------------------------------- */}
      <View style={[{ justifyContent: 'center', alignContent: 'center' }, { position: 'absolute', top: GAP - 5, right: GAP * 1.5 }]} >

        <RoundBTN onPress={() => handle_toggle_open()} size={50} >
          <View style={[
            { width: 30, height: 30, position: 'absolute', top: 7 },
            { borderRadius: 50, borderWidth: 4, borderColor: COLOR_OUTLINE }
          ]} />
          <View style={[
            { width: 12, height: 20, position: 'absolute', top: 4 },
            { borderLeftWidth: 4, borderRightWidth: 4, borderRadius: 20, borderColor: 'orange', backgroundColor: COLOR_OUTLINE }
          ]} />
        </RoundBTN>

      </View>

      <StatusBar style="auto" hidden={true} />
    </View >
  );
}
