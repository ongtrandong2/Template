import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  View,
  Text,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  IMG_Back,
  IMG_Food,
  IMG_EggAndCucumber,
  IMG_FriedFood,
  IMG_MoiMoiFood,
} from '../../assets/images';
import {FlatList} from 'react-native-gesture-handler';
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
    title: 'Egg and cucumber...',
    cost: 'N1,900',
    source: IMG_EggAndCucumber,
    component: 'WaitingForUpgrade',
  },
  {
    id: 3,
    title: 'Fried chicken m...',
    cost: 'N1,900',
    source: IMG_FriedFood,
    component: 'WaitingForUpgrade',
  },
  {
    id: 4,
    title: 'Moi-moi and ekpa.',
    cost: 'N1,900',
    source: IMG_MoiMoiFood,
    component: 'WaitingForUpgrade',
  },
  {
    id: 5,
    title: 'Veggie tomato mix',
    cost: 'N1,900',
    source: IMG_Food,
    component: 'ProductDetail',
  },
  {
    id: 6,
    title: 'Egg and cucumber...',
    cost: 'N1,900',
    source: IMG_EggAndCucumber,
    component: 'WaitingForUpgrade',
  },
];

const SearchScreen = props => {
  const Item = props => (
    <TouchableOpacity
      style={[
        styles.listContainer,
        props.id % 2 === 0 ? {top: scale(95)} : {top: scale(0)},
      ]}
      onPress={() => {
        props.navigation.navigate(props.component);
      }}>
      <Image style={styles.foodImage} source={props.source} />
      <Text style={styles.textFoodContainer}>{props.title}</Text>
      <Text style={styles.textPriceContainer}>{props.cost}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => (
    <Item
      source={item.source}
      title={item.title}
      cost={item.cost}
      navigation={props.navigation}
      component={item.component}
      id={item.id}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput style={styles.textInput} placeholder={'Search'} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={props.navigation.goBack}>
          <Image source={IMG_Back} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.textBody}>{'Found 6 results'}</Text>
        <FlatList
          contentContainerStyle={{paddingVertical: scale(75)}}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.column}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
