import React, { useEffect, useState, useRef } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';


const workerCategory = [{
    id: 1,
    name: "Astrologer",
    image: "https://cdn-icons-png.flaticon.com/128/3049/3049623.png",
    type: "Astrologer",

},
{
    id: 2,
    name: "Assitant",
    image: "https://cdn-icons-png.flaticon.com/128/6342/6342669.png",
    type: "Assitant",
},
{
    id: 3,
    name: "MUA's",
    image: "https://cdn-icons-png.flaticon.com/128/4515/4515759.png",
    type: "MUA",

},
{
    id: 4,
    name: "Mehandi",
    image: "https://cdn-icons-png.flaticon.com/128/6037/6037422.png",
    type: "Mehandi",

},
{
    id: 5,
    name: "Hair Dresser",
    image: "https://cdn-icons-png.flaticon.com/128/2111/2111231.png",
    type: "Hair Dresser",
},
{
    id: 6,
    name: "Photographer",
    image: "https://cdn-icons-png.flaticon.com/128/10770/10770822.png",
    type: "Photographer",
},
{
    id: 7,
    name: "Plumber",
    image: "https://cdn-icons-png.flaticon.com/128/6342/6342703.png",
    type: "Plumber",
},
{
    id: 8,
    name: "Electrician",
    image: "https://cdn-icons-png.flaticon.com/128/9781/9781304.png",
    type: "Electrician",
}]

const peoples = [{
    id: 1,
    name: "Yudhisthira",
    image: "https://cdn-icons-png.flaticon.com/128/4202/4202843.png",
    type: "Astrologer",
    indian: true,
},
{
    id: 2,
    name: "Peter",
    image: "https://cdn-icons-png.flaticon.com/128/4202/4202843.png",
    type: "Astrologer",
    indian: false,


},
{
    id: 3,
    name: "Arjuna",
    image: "https://cdn-icons-png.flaticon.com/128/4202/4202843.png",
    type: "Astrologer",
    indian: true,


},
{
    id: 4,
    name: "Steven",
    image: "https://cdn-icons-png.flaticon.com/128/4202/4202843.png",
    type: "Astrologer",
    indian: false,

},
{
    id: 5,
    name: "Tommilson",
    image: "https://cdn-icons-png.flaticon.com/128/4202/4202843.png",
    type: "Astrologer",
    indian: false,

},
{
    id: 6,
    name: "Maria",
    image: "https://cdn-icons-png.flaticon.com/128/4202/4202850.png",
    type: "Assitant",
    indian: false,


},
{
    id: 7,
    name: "Alexandra",
    image: "https://cdn-icons-png.flaticon.com/128/4202/4202850.png",
    type: "Assitant",
    indian: false,

},
{
    id: 8,
    name: "Serena",
    image: "https://cdn-icons-png.flaticon.com/128/4202/4202850.png",
    type: "Assitant",
    indian: false,

}
]

const Workers = ({ }) => {


    const refRBSheet = useRef();

    const [selectedId, setSelectedId] = useState("");
    const [idealData, setIdealData] = useState([]);
    const [image, setImage] = useState("");
    const [name, setname] = useState("");
    const [wid, setwid] = useState("");


    const onCategorySelect = (item) => {
        setSelectedId(item.id)
        let data = peoples.filter((x) => x.type === item.type);
        console.log("ideal data --->", data)
        setIdealData(data);
    }


    const searchFilterFunction = (text) => {
        if (text) {
            const newData = idealData.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setIdealData(newData);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setIdealData(idealData);
        }
    };


    const renderItemCategory = (item) => {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => onCategorySelect(item)}>
                <View style={{ height: 90, width: 90, justifyContent: "center", borderColor: item.id == selectedId ? "magenta" : "pink", borderWidth: item.id == selectedId ? 1.5 : 0.5, borderRadius: 50, margin: 10 }}>
                    <Image style={{ height: 65, width: 65, alignSelf: "center" }} source={{ uri: item.image }}></Image>
                    <Text style={{ alignSelf: "center", color: "#000", fontSize: 12 }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    const openSheet = (item) => {
        console.log(item)
        setImage(item.image);
        setwid(item.id);
        setname(item.name);
        refRBSheet.current.open();

    }


    const renderPeopleCategory = (item) => {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => openSheet(item)}>
                <View style={{ height: 80, width: 70, justifyContent: "center", margin: 10 }}>
                    <Image style={{ height: 65, width: 65, alignSelf: "center", borderRadius: 65 / 2, borderWidth: 0.5, borderColor: "grey" }} source={{ uri: item.image }}></Image>
                    <Image style={{ height: 20, width: 20, alignSelf: "center", position: "absolute", right: -3, top: 0 }} source={item.indian ? require("../Images/indiafg.png") : require("../Images/germanyfg.png")}></Image>
                    <Text style={{ alignSelf: "center", color: "#000", fontSize: 12 }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={{ backgroundColor: '#fff' }}>
            <FlatList style={{ backgroundColor: "#FFFDD0", height: 110 }} data={workerCategory} extraData={selectedId}
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => renderItemCategory(item)}>
            </FlatList>

            <View style={{ flexDirection: "row", backgroundColor: "#f2f2f2", margin: 7 }}>
                <Image style={{ height: 20, width: 20, alignSelf: "center", marginLeft: 10 }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/54/54481.png" }}></Image>
                <View style={{ height: 50, borderRadius: 7, backgroundColor: "#f2f2f2", marginLeft: 10, borderRadius: 5 }}>
                    <TextInput
                        placeholder={"Search"}
                        style={{ marginLeft: 5, color: "black" }}
                        onChangeText={(text)=>searchFilterFunction(text)}
                        editable={true}>
                    </TextInput>
                </View>
            </View>


            {idealData.length > 0 && selectedId != "" &&
                <FlatList style={{ alignSelf: "center" }} data={idealData} numColumns={4}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => renderPeopleCategory(item)}>
                </FlatList>}

            {idealData.length == 0 && selectedId != "" ? <Text style={{ margin: 20, fontStyle: "italic", color: "red", fontSize: 16, fontWeight: "bold" }}>OOPS ! Try again after some time.</Text> : null}

            <RBSheet
                ref={refRBSheet} height={100}>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 65, width: 65, borderRadius: 65 / 2, borderWidth: 0.5, borderColor: "grey", margin: 20 }} source={{ uri: image }}></Image>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>{"Worker ID : " + wid}</Text>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>{"Name : " + name}</Text>
                        </View>
                    </View>
                    <View style={{ height: 60, width: 60, justifyContent: "center", alignSelf: "center" }}>
                        <Image style={{ height: 35, width: 35 }} source={require("../Images/phone-call.png")}></Image>
                    </View>
                </View>
            </RBSheet>
        </View>
    )
}




export default Workers;