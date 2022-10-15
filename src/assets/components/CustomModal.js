import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';

const CustomModal = ({visible, children, style}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };
  return (
    <Modal transparent visible={modalVisible} animationType={'fade'}>
      <View style={styles.modalBackground}>
        <View style={style}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
