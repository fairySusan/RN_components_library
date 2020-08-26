import React from 'react';
import {View, StyleSheet, Text, StyleProp} from 'react-native';
import {Theme, CommonSty} from '@/assets/styles';

interface Props {
  cardStyle?: any,
  isFull?: boolean // 是否是通行
}

class Card extends React.Component<Props> {
  static Header: typeof Header;
  static Body: typeof Body;

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {cardStyle, isFull = false } = this.props;
    return (
      <View style={[isFull ? styles.fullCard : styles.card, cardStyle]}>
        {
          this.props.children
        }
      </View>
    )
  }
}

interface HProps {
  title: string | JSX.Element,
  extra?: string | JSX.Element,
  headerStyle?: any,
}

function Header(props: HProps) {
  const {title, extra, headerStyle} = props;
    return (
      <View style={[styles.cardHeader, headerStyle]}>
        {
          typeof title === 'string'
          ?
          <Text>{title}</Text>
          :
          <View>
            {title}
          </View>
        }
        {
          typeof extra === 'string'
          ?
          <Text>{extra}</Text>
          :
          <View>
            {extra}
          </View>
        }
      </View>
    )
}

interface BProps {
  bodyStyle?: any,
  children: any,
}

function Body(props: BProps) {
  const {children, bodyStyle} = props;
  return (
    <View style={[styles.cardBody, bodyStyle]}>
      {
       children
      }
    </View>
  )
}


Card.Header = Header;
Card.Body = Body;


export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.whiteFontColor,
    borderRadius: 5,
    borderColor: Theme.mainLightGrayColor,
    borderWidth: 1,
    marginTop: Theme.vPardding
  },
  fullCard: {
    backgroundColor: Theme.whiteFontColor,
    borderColor: Theme.mainLightGrayColor,
    marginTop: Theme.vPardding,
    borderWidth: 0,
    borderRadius: 0,
  },
  cardHeader: {
    borderBottomWidth: 1,
    height: 40,
    borderColor: Theme.mainLightGrayColor,
    paddingHorizontal: Theme.hPardding,
    paddingVertical: Theme.vPardding / 2,
    ...CommonSty.flexRowBetween,
    alignItems: 'center'
  },
  cardBody: {
    padding: Theme.vPardding,
  },
})