/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, StyleSheet, Animated} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import { theme } from '@/assets/styles';

interface Props {
  style?: {}, // input 外面包裹的view的样式
  editable?: boolean, // 是否可以编辑
  defaultValue?: string, // 默认值
  innerStyle?: {}, // TextInput 组件的样式
  placeholder?: string,
  prefixIcon?: string, // 前缀图标名称
  prefixIconSize?: number, // 前缀图标名称大小
  clearIconSize?: number, // 清除图标的大小
  secureTextEntry?: boolean,
  autoFocus?: boolean, // 自动聚焦
  onChangeText?: (value:string) => void,
  onFocus?: () => void, // foucs 事件触发的回调函数
  onBlur?: () => void, // blur 事件触发的回调函数  
}

interface State {
  isShowClear: boolean,
  isShowError: boolean
}

export class Input extends React.Component<Props, State> {
  InputRef: any = React.createRef();

  interpolatedColor = new Animated.Value(0);

  constructor(props:Props) {
    super(props);
    this.state = {
      isShowClear: false,
      isShowError: false,
    };
  }

  onFocus = () => {
    Animated.timing(
      this.interpolatedColor,
      {
        toValue: 1,
        duration: 100,
        useNativeDriver: false
      }).start();
      this.props.onFocus && this.props.onFocus();
  };

  onBlur = () => {
    Animated.timing(
      this.interpolatedColor,
      {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }).start();
      this.props.onBlur && this.props.onBlur();
  };

  onChange = (e: any) => {
    this.setState({isShowClear: true})
    if (e.nativeEvent.text.length < 0) {
      this.setState({isShowClear: false})
    }
  };

  onChangeText = (e:string) => {
    this.setState({isShowClear: true});
    if (e.length <= 0) this.setState({isShowClear: false})
    if (this.props.onChangeText) this.props.onChangeText(e);
  }

  onClear = () => {
    this.InputRef.current.clear();
    this.setState({isShowClear: false});
    this.props.onChangeText && this.props.onChangeText('')
  }

  render() {
    const {
      placeholder,
      defaultValue,
      editable,
      prefixIcon,
      style,
      innerStyle,
      secureTextEntry,
      prefixIconSize,
      autoFocus = false,
      clearIconSize = 24
    } = this.props;

    const {isShowClear, isShowError} = this.state;

    const color = this.interpolatedColor.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.mainGrayColor, theme.mainColor]
    });

    const AnimatedIcon = Animated.createAnimatedComponent(AIcon);

    return (
        <Animated.View style={[styles.inputWrapper,style, {borderColor: color}]}>
          {
            prefixIcon
            &&
            <AnimatedIcon name={prefixIcon} size={prefixIconSize || 28} style={{color}} />
          }
          <TextInput
              ref={this.InputRef}
              style={[
                styles.inputInner,
                innerStyle,
              ]}
              autoFocus={autoFocus}
              placeholder={placeholder}
              editable={editable}
              defaultValue={defaultValue}
              onChangeText={this.onChangeText}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
              secureTextEntry={secureTextEntry}
            />
            {
              isShowClear
              &&
              <AIcon
                name="closecircle"
                size={clearIconSize}
                style={{color: theme.mainGrayColor, opacity: 0.8}}
                onPress={this.onClear}
              />
            }
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
  },
  inputInner: {
    width: '80%',
  },
});
