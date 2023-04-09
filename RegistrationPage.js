import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

export default function RegistrationPage({navigation}){
    const [name,setName] = useState('');
    const [studentId,setStudentId] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const registerHandler = () => {
        if(name === '' || studentId === ''){
            setErrorMessage("有欄位為空，請輸入完整資訊")
            return;
        }else{
            navigation.navigate('UserPage',{userInfo:{name,studentId}});
        }
    }
    const center = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    const textInput = {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingHorizontal: 10
    }
    return(
        <View style = {center}>
            <Text>登入頁面</Text>
            <TextInput
                style = {textInput}
                placeholder='請輸入姓名'
                value= {name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                style = {textInput}
                placeholder='請輸入學號'
                value={studentId}
                onChangeText={text=>setStudentId(text)}
            />
            <Button
                
                title='註冊'
                onPress={registerHandler}
            />
            {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        </View>
    )
};
