import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, useWindowDimensions, View } from 'react-native'
import HeaderWithTitle from '../Components/HeaderWithTitle'
import { TabView, SceneMap } from 'react-native-tab-view';
import Workers from './Workers';




const Welcome = () => (
    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: "center" }}>
        <Text style={{ alignSelf: "center" }}>Welcome Folks</Text>
    </View>
);




const renderScene = SceneMap({
    first: Welcome,
    second: Workers,
});

const Home = ({ navigation }) => {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Welcome' },
        { key: 'second', title: 'Categories' },
    ]);


    useEffect(() => {

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <HeaderWithTitle title={'WorkerApp'}></HeaderWithTitle>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>
    )
}

export default Home;
