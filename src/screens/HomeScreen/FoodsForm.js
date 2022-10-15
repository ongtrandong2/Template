import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {IMG_Food, IMG_Food2, IMG_Food3} from '../../assets/images';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';

const DATA = [
  {
    id: 1,
    title: 'Veggie tomato mix',
    cost: 'N1,900',
    source: IMG_Food,
    component: 'ProductDetail',
  },
  {
    id: 2,
    title: 'Veggie tomato mix',
    cost: 'N1,900',
    source: IMG_Food2,
    component: 'WaitingForUpgrade',
  },
  {
    id: 3,
    title: 'Spicy fish sauce',
    cost: 'N1,900',
    source: IMG_Food3,
    component: 'WaitingForUpgrade',
  },
];

const Item = props => (
  <TouchableOpacity
    style={styles.listContainer}
    onPress={() => {
      props.navigation.navigate(props.component);
    }}>
    <Image style={styles.foodImage} source={props.source} />
    <Text style={styles.textFoodContainer}>{props.title}</Text>
    <Text style={styles.textPriceContainer}>{props.cost}</Text>
  </TouchableOpacity>
);

export class Foods extends Component {
  constructor(props) {
    super(props);
  }
  renderItem = ({item}) => (
    <Item
      source={item.source}
      title={item.title}
      cost={item.cost}
      navigation={this.props.navigation}
      component={item.component}
    />
  );
  render() {
    return (
      <>
        <SafeAreaView style={styles.scrollView}>
          <FlatList
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  scrollView: {
    marginTop: scale(410),
    backgroundColor: CUSTOM_COLOR.Concrete,
    height: scale(370),
  },
  contentContainer: {
    paddingVertical: 20,
    width: scale(650),
    height: scale(500),
    justifyContent: 'center',
  },
  textFoodContainer: {
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 22,
    top: scale(115),
  },
  listContainer: {
    backgroundColor: 'white',
    width: scale(200),
    height: scale(270),
    marginTop: scale(60.49),
    marginRight: scale(20),
    borderRadius: scale(40),
    resizeMode: 'stretch',
    elevation: 10,
  },
  foodImage: {
    width: scale(150),
    height: scale(150),
    left: scale(25),
    top: scale(-60),
    borderRadius: scale(800),
    position: 'absolute',
  },
  textPriceContainer: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 15,
    textAlign: 'center',
    top: scale(130),
    lineHeight: 20,
  },
});
