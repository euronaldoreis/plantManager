import React from 'react';
import wateringImg from '../../assets/watering.png';
import { useNavigation } from '@react-navigation/core';
import {
    ViewContainer,
    ViewWrapper,
    Title,
    SubTitle,
    WateringImg,
    ButtonStart,
    IconFeather
} from './styles';

export function Welcome(){

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return (
        <ViewContainer>
            <ViewWrapper>
                <Title>
                    Gerencie {'\n'} 
                    suas plantas de {'\n'}
                    forma fácil
                </Title>

                <WateringImg 
                    source={wateringImg} 
                    resizeMode="contain"
                />

                <SubTitle>
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </SubTitle>

                <ButtonStart
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                <IconFeather 
                    name="chevron-right"
                />
                </ButtonStart>
            </ViewWrapper>
        </ViewContainer>
    );
}
