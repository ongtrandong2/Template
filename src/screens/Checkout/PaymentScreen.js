import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {IMG_Back, IMG_Card, IMG_Bank} from '../../assets/images';
import styles from './styles';
import CUSTOM_COLOR from '../../assets/constants/colors';
import CustomModal from '../../assets/components/CustomModal';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  },
];
const DATA2 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
  },
];
const Item = ({onPress, backgroundColor, borderColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.DotOutStyle, borderColor]}>
    <View style={[styles.DotInStyle, backgroundColor]} />
  </TouchableOpacity>
);
const PaymentScreen = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);
  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? CUSTOM_COLOR.Vermilion : CUSTOM_COLOR.Concrete;
    const borderColor =
      item.id === selectedId ? CUSTOM_COLOR.Vermilion : CUSTOM_COLOR.Black;
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        borderColor={{borderColor}}
      />
    );
  };
  const renderItem2 = ({item}) => {
    const backgroundColor =
      item.id === selectedId2 ? CUSTOM_COLOR.Vermilion : CUSTOM_COLOR.Concrete;
    const borderColor =
      item.id === selectedId2 ? CUSTOM_COLOR.Vermilion : CUSTOM_COLOR.Black;
    return (
      <Item
        item={item}
        onPress={() => setSelectedId2(item.id)}
        backgroundColor={{backgroundColor}}
        borderColor={{borderColor}}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>{'Checkout'}</Text>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Image source={IMG_Back} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <Text style={styles.formText}>{'Payment'}</Text>
      <Text style={styles.text1}>{'Payment method'}</Text>
      <View style={styles.addressContainer}>
        <View style={styles.backgroundLeft}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={dot => dot.id}
            extraData={selectedId}
          />
        </View>
        <View style={styles.backgroundRight}>
          <View style={styles.payment}>
            <View style={[styles.paymentTextView, {borderBottomWidth: 1}]}>
              <Text style={styles.paymentText}>{'Card'}</Text>
              <View
                style={[
                  styles.iconView,
                  {backgroundColor: CUSTOM_COLOR.GoldDrop},
                ]}>
                <Image source={IMG_Card} />
              </View>
            </View>
            <View style={styles.paymentTextView}>
              <Text style={styles.paymentText}>{'Bank'}</Text>
              <View
                style={[
                  styles.iconView,
                  {backgroundColor: CUSTOM_COLOR.RaspberryPink},
                ]}>
                <Image source={IMG_Bank} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.methodText}>{'Delivery method.'}</Text>
      <View style={styles.addressContainer}>
        <View style={styles.backgroundLeft}>
          <FlatList
            data={DATA2}
            renderItem={renderItem2}
            keyExtractor={dot => dot.id}
            extraData={selectedId}
          />
        </View>
        <View style={styles.backgroundRight}>
          <View style={styles.doorOrPickupContainer}>
            <Text style={[styles.doorOrPickupText, {borderBottomWidth: 1}]}>
              {'Door delivery'}
            </Text>
            <Text style={styles.doorOrPickupText}>{'Pick up'}</Text>
          </View>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>{'Total'}</Text>
        <Text style={styles.cost}>{'23,000'}</Text>
      </View>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.buttonSelection}>
        <Text style={styles.SelectionText}>{'Proceed to payment'}</Text>
        <CustomModal visible={visible} style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.textHeader}>{'Please note'}</Text>
          </View>
          <View style={[styles.body, {borderBottomWidth: 0.5}]}>
            <Text style={styles.textBody1}>{'DELIVERY TO MAINLAND'}</Text>
            <Text style={styles.textBody2}>{'N1000 - N2000'}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.textBody1}>{'DELIVERY TO ISLAND'}</Text>
            <Text style={styles.textBody2}>{'N2000 - N3000'}</Text>
          </View>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => setVisible(false)}>
            <Text style={styles.cancelText}>{'Cancel'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.proceed}
            onPress={() => setVisible(false)}>
            <Text style={styles.proceedText}>{'Proceed'}</Text>
          </TouchableOpacity>
        </CustomModal>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentScreen;
