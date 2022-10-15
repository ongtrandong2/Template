import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Vermilion,
  },
  drawerContainer: {
    backgroundColor: CUSTOM_COLOR.Vermilion,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: scale(200),
    marginTop: scale(30),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: scale(75),
    width: scale(220),
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.White,
  },
  itemText: {
    marginLeft: scale(20),
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.SFProTextBold,
    color: CUSTOM_COLOR.White,
  },
  signOutText: {
    color: CUSTOM_COLOR.White,
    fontSize: scale(22),
    fontFamily: FONT_FAMILY.SFProTextBold,
  },
  signOutContainer: {
    height: scale(40),
    width: scale(155),
    bottom: scale(40),
    marginLeft: scale(70),
    justifyContent: 'center',
  },
});

export default styles;
