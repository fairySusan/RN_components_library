import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Theme } from '@/assets/styles';
import { LocaleText } from '@/components';

export class LoadingRematch extends React.Component<{loading: boolean}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {loading} = this.props;
    return (
      <>
        {
          loading
          ?
          <View style={styles.loadingStyle}>
            <ActivityIndicator animating={true} color={Theme.ThemeColor} />
            <LocaleText style={styles.loadingText} i18key='common.loading'/>
          </View>
          :
          false
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  loadingStyle: {
    ...StyleSheet.absoluteFill,
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.9
  },
  loadingText: {
    color: Theme.greyFontColor,
    marginTop: 10,
  }
});
