import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import scale from '../../assets/constants/responsive';
import FONT_FAMILY from '../../assets/constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    top: scale(30),
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
  },
  backButton: {
    height: '100%',
    width: scale(50),
    justifyContent: 'center',
    position: 'absolute',
    left: scale(60),
    marginTop: scale(3),
  },
  iconBack: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInput: {
    height: scale(54),
    alignSelf: 'center',
    width: scale(300),
  },
  bodyContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    height: scale(760),
    width: '100%',
    bottom: 0,
    position: 'absolute',
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
    justifyContent: 'center',
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
    marginHorizontal: scale(20),
    marginVertical: scale(40),
    borderRadius: scale(40),
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
  textBody: {
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.SFProTextBold,
    fontSize: scale(28),
    color: CUSTOM_COLOR.Black,
    height: scale(70),
    top: scale(30),
  },
  column: {
    alignSelf: 'center',
  },
});
export default styles;
