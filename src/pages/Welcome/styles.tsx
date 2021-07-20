import {
    SafeAreaView,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import styled from "styled-components"
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {Feather} from '@expo/vector-icons';

export const ViewContainer = styled(SafeAreaView)`
    flex: 1;
`;

export const ViewWrapper = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Title = styled(Text)`
    font-size: 28px;
    font-family: ${fonts.heading};
    text-align: center;
    color: ${colors.heading};
    margin-top: 38px;
    line-height: 34px;
`;

export const SubTitle = styled(Text)`
    text-align: center;
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;
    color: ${colors.heading};
    font-family: ${fonts.text};
`;

export const WateringImg = styled(Image)`
    height: ${Dimensions.get('window').width * 0.7}px;
`;

export const ButtonStart = styled(TouchableOpacity)`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-right: 10px;
    height: 56px;
    width: 56px;
`;

export const IconFeather = styled(Feather)`
    font-size: 32px;
    color: ${colors.white};
`;



