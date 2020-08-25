import {StyleSheet} from 'react-native';
export const CommonSty = StyleSheet.create({
  flexRowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  flexRowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexRowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexColStart: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  flexColEnd: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  flexColBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  flexColAround: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  full: {
    width: '100%',
    height: '100%'
  }
})