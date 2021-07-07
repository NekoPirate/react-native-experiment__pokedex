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
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Dimensions, Animated, View, Image, ScrollView, Pressable } from 'react-native';

import ScreenLeft from './components/ScreenLeft'
import ScreenRight from './components/ScreenRight'
import CustomBTN from './components/CustomBTN'

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
// const SPEED_openClose = 5000
const SPEED_openClose = 750
const SPEED_press = 150




export default function App() {

  const [isOpen, setIsOpen] = useState(false)

  const scrollRef = useRef()

  const openCloseAnimationValue = useRef(new Animated.Value(0)).current
  const pressAnimationValue = useRef(new Animated.Value(0)).current

  const openCover = openCloseAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `180deg`]
  })

  const fadeCover = openCloseAnimationValue.interpolate({
    inputRange: [0, 0.9, 1],
    outputRange: [1, 1, 0]
  })

  const translateBTN = pressAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 5]
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
    // scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true })

    Animated.sequence([

      Animated.timing(pressAnimationValue, {
        toValue: 1,
        duration: SPEED_press,
        useNativeDriver: true,
      }),
      Animated.timing(pressAnimationValue, {
        toValue: 0,
        duration: SPEED_press,
        useNativeDriver: true,
      }),
      Animated.timing(openCloseAnimationValue, {
        toValue: 1,
        duration: SPEED_openClose,
        useNativeDriver: true,
      }),

    ]).start()

    // console.log('open')
  }

  const closeAnimation = () => {

    Animated.timing(openCloseAnimationValue, {
      toValue: 0,
      duration: SPEED_openClose,
      useNativeDriver: true,
    }).start()

    // console.log('close')
  }

  const handle_toggle_open = () => {

    setIsOpen(isOpen => !isOpen)
    scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true })

  }


  useEffect(() => {

    !isOpen
      ? closeAnimation()
      : openAnimation()

  }, [isOpen])


  return (
    <View style={[
      { flex: 1 },
      { alignItems: 'center', justifyContent: 'center' },
      { backgroundColor: COLOR_OUTLINE },
    ]}>


      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        scrollEnabled={isOpen ? true : false}
        ref={scrollRef}
      >

        <ScreenLeft animationValue={openCloseAnimationValue} />

        <ScreenRight />

        {/* BTN OPEN------------------------------------------- */}
        <View style={[{ justifyContent: 'center', alignContent: 'center' }, { position: 'absolute', top: SCREEN_HEIGHT * .7, right: GAP * 1.5 }]} >
          <CustomBTN
            width={50} height={50} borderRadius={40} color={'orange'} isActive={true}
            onPress={() => handle_toggle_open()}
          />
        </View>

      </ScrollView>



      {/*  PDX3  */}
      <View
        pointerEvents={isOpen ? 'none' : 'auto'}
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
          {/* BTN OPEN------------------------------------------- */}
          <View
            style={[

              { position: 'absolute', left: GAP, top: SCREEN_WIDTH * .9 },
            ]} >

            <Pressable
              onPress={() => handle_toggle_open()}
              style={{ width: 50, height: 100 }}
            >
              <Image source={require('./assets/img/OPEN_B.png')} style={{ width: '100%', height: '100%', position: 'absolute', top: 0 }} resizeMode={'stretch'} />
              <Animated.Image source={require('./assets/img/OPEN_A.png')} style={{ width: '85%', height: '85%', position: 'absolute', top: '3%', left: '10%', transform: [{ translateY: translateBTN }] }} resizeMode={'stretch'} />

            </Pressable>

          </View>
        </Animated.View>

      </View>

      <StatusBar style="auto" hidden={true} />
    </View >

  );
}
