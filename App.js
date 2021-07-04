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
import React, { useState } from 'react';
import { Dimensions, View, ScrollView } from 'react-native';

import ScreenLeft from './components/ScreenLeft'
import ScreenRight from './components/ScreenRight'


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

export default function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <View style={[
      { flex: 1 },
      { alignItems: 'center', justifyContent: 'flex-start' },
      { backgroundColor: COLOR_OUTLINE },
    ]}>


      <ScrollView
        horizontal={true}
        pagingEnabled={true}
      >
        <ScreenLeft
          isOpen={isOpen}
          onPressToggleOpen={() => setIsOpen(isOpen => !isOpen)} />
        {
          isOpen
            ? <ScreenRight />
            : <></>
        }
      </ScrollView>


      <StatusBar style="auto" hidden={true} />
    </View >
  );
}
