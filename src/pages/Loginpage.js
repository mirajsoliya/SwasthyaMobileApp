import {
    Touchable,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
  import { Entypo } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const Loginpage = (props) => {
    const [pass, setPass] = useState(true);
    const navigation = useNavigation();

    const [pid, setPID] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState({});

    const postData = async (e) => {
        const PatientID = pid;
        const password1 = password;
        console.log(PatientID + " "+ password);
        const res = await fetch("http://192.168.43.94:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            credentials: "include",
            body: JSON.stringify({ PatientID, password1 })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            console.log("Invalid details");
        }
        else {

            setUser(data);
            console.log(data);
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('user', jsonValue)
            navigation.navigate("MainScreen");

        }
    }
    var passEye;
    if (pass) {
      passEye = (
        <Entypo
          name="eye-with-line"
          style={{ position: "absolute", bottom: 48, right: 16 }}
          size={20}
          onPress={() => setPass(false)}
        />
      );
    } else {
      passEye = (
        <Entypo
          name="eye"
          style={{ position: "absolute", bottom: 48, right: 16 }}
          size={20}
          onPress={() => setPass(true)}
        />
      );
    }
    return (
      <>
        <View className="bg-white mt-10 h-full">
          <View className="h-2/5 w-screen flex items-center">
          <Image
            className="h-full w-3/4"
            source={require("../../images/login1.gif")}
          />
          </View>
          <View className="py-8 px-8">
            <Text className="text-center text-2xl font-bold">Login Now</Text>
            <Text className="mt-2 text-gray-400 text-center">
              Please enter the details below to continue.
            </Text>
            <View className="relative flex space-y-4 my-8">
              <TextInput
                placeholder="patient id"
                className="bg-gray-100 rounded-lg px-4 py-2"
                onChangeText={(text) => setPID(text)}
              />
              <TextInput
                placeholder="password"      
                secureTextEntry={pass}
                onChangeText={text => setPassword(text)}
                className="bg-gray-100 rounded-lg px-4 py-2"
              />
              {passEye}
              <Text className="text-right text-sky-500 font-semibold">
                Forgot Password?
              </Text>
            </View>
            <View className="flex space-y-4">
              <TouchableOpacity
                onPress={() => navigation.navigate("MainScreen")}
                className="rounded-full w-full py-4 bg-sky-400"
              >
                <Text className="text-center text-white font-medium">LOGIN</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </>
    );
  };
  
  export default Loginpage;
  