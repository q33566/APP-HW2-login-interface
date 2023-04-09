import React from 'react';
import { View,Text } from 'react-native';

export default function UserPage({route}){
    const { name, studentId } = route.params.userInfo;
    return(
        <View>
            <Text>基本資料</Text>
            <Text>姓名: {name}</Text>
            <Text>學號: {studentId}</Text>
        </View>
    );
}
