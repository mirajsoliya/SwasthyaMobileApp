import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, StyleSheet, Modal, Pressable } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Notification = ({ navigation, setRootName }) => {

    const [selected, setSelected] = useState([]);
    const [pred, setPred] = useState();
    const data = [
        { key: '1', value: 'itching' },
        { key: '2', value: 'skin_rash' },
        { key: '3', value: 'nodal_skin_eruptions' },
        { key: '4', value: 'continuous_sneezing' },
        { key: '5', value: 'shivering' },
        { key: '6', value: 'chills' },
        { key: '7', value: 'joint_pain' },
        { key: '8', value: 'stomach_pain' },
        { key: '9', value: 'acidity' },
        { key: '10', value: 'ulcers_on_tongue' },
        { key: '11', value: 'muscle_wasting' },
        { key: '12', value: 'vomiting' },
        { key: '13', value: 'burning_micturition' },
        { key: '14', value: 'spotting_ urination' },
        { key: '15', value: 'fatigue' },
        { key: '16', value: 'weight_gain' },
        { key: '17', value: 'anxiety' },
        { key: '18', value: 'cold_hands_and_feets' },
        { key: '19', value: 'mood_swings' },
        { key: '20', value: 'weight_loss' },
        { key: '21', value: 'restlessness' },
        { key: '22', value: 'lethargy' },
        { key: '23', value: 'patches_in_throat' },
        { key: '24', value: 'irregular_sugar_level' },
        { key: '25', value: 'cough' },
        { key: '26', value: 'high_fever' },
        { key: '27', value: 'sunken_eyes' },
        { key: '28', value: 'breathlessness' },
        { key: '29', value: 'sweating' },
        { key: '30', value: 'dehydration' },
        { key: '31', value: 'indigestion' },
        { key: '32', value: 'headache' },
        { key: '33', value: 'yellowish_skin' },
        { key: '34', value: 'dark_urine' },
        { key: '35', value: 'nausea' },
        { key: '36', value: 'loss_of_appetite' },
        { key: '37', value: 'back_pain' },
        { key: '38', value: 'constipation' },
        { key: '39', value: 'abdominal_pain' },
        { key: '40', value: 'diarrhoea' },
        { key: '41', value: 'mild_fever' },
        { key: '42', value: 'yellow_urine' },
        { key: '43', value: 'yellowing_of_eyes' },
        { key: '44', value: 'acute_liver_failure' },
        { key: '45', value: 'fluid_overload' },
        { key: '46', value: 'swelling_of_stomach' },
        { key: '47', value: 'swelled_lymph_nodes' },
        { key: '48', value: 'dark_urine' },
        { key: '49', value: 'malaise' },
        { key: '50', value: 'blurred_and_distorted_vision' },
        { key: '51', value: 'phlegm' },
        { key: '52', value: 'throat_irritation' },
        { key: '53', value: 'redness_of_eyes' },
        { key: '54', value: 'sinus_pressure' },
        { key: '55', value: 'runny_nose' },
        { key: '56', value: 'congestion' },
        { key: '57', value: 'chest_pain' },
        { key: '58', value: 'weakness_in_limbs' },
        { key: '59', value: 'fast_heart_rate' },
        { key: '60', value: 'pain_during_bowel_movements' },
        { key: '61', value: 'pain_in_anal_region' },
        { key: '62', value: 'bloody_stool' },
        { key: '63', value: 'irritation_in_anus' },
        { key: '64', value: 'neck_pain' },
        { key: '65', value: 'dizziness' },
        { key: '66', value: 'cramps' },
        { key: '67', value: 'bruising' },
        { key: '68', value: 'obesity' },
        { key: '69', value: 'swollen_legs' },
        { key: '70', value: 'swollen_blood_vessels' },
        { key: '71', value: 'puffy_face_and_eyes' },
        { key: '72', value: 'enlarged_thyroid' },
        { key: '73', value: 'brittle_nails' },
        { key: '74', value: 'swollen_extremeties' },
        { key: '75', value: 'excessive_hunger' },
        { key: '76', value: 'extra_marital_contacts' },
        { key: '77', value: 'drying_and_tingling_lips' },
        { key: '78', value: 'slurred_speech' },
        { key: '79', value: 'knee_pain' },
        { key: '80', value: 'hip_joint_pain' },
        { key: '81', value: 'muscle_weakness' },
        { key: '82', value: 'stiff_neck' },
        { key: '83', value: 'swelling_joints' },
        { key: '84', value: 'movement_stiffness' },
        { key: '85', value: 'loss_of_balance' },
        { key: '86', value: 'unsteadiness' },
        { key: '87', value: 'weakness_of_one_body_side' },
        { key: '88', value: 'loss_of_smell' },
        { key: '89', value: 'bladder_discomfort' },
        { key: '90', value: 'foul_smell_of_urine' },
        { key: '91', value: 'continuous_feel_of_urine' },
        { key: '92', value: 'passage_of_gases' },
        { key: '93', value: 'internal_itching' },
        { key: '94', value: 'toxic_look_(typhos)' },
        { key: '95', value: 'depression' },
        { key: '96', value: 'irritability' },
        { key: '97', value: 'muscle_pain' },
        { key: '98', value: 'altered_sensorium' },
        { key: '99', value: 'red_spots_over_body' },
        { key: '100', value: 'belly_pain' },
        { key: '101', value: 'abnormal_menstruation' },
        { key: '102', value: 'dischromic_patches' },
        { key: '103', value: 'watering_from_eyes' },
        { key: '104', value: 'increased_appetite' },
        { key: '105', value: 'polyuria' },
        { key: '106', value: 'family_history' },
        { key: '107', value: 'mucoid_sputum' },
        { key: '108', value: 'rusty_sputum' },
        { key: '109', value: 'lack_of_concentration' },
        { key: '110', value: 'mucoid_sputum' },
        { key: '111', value: 'rusty_sputum' },
        { key: '112', value: 'lack_of_concentration' },
        { key: '113', value: 'visual_disturbances' },
        { key: '114', value: 'receiving_blood_transfusion' },
        { key: '115', value: 'receiving_unsterile_injections' },
        { key: '116', value: 'coma' },
        { key: '117', value: 'stomach_bleeding' },
        { key: '118', value: 'distention_of_abdomen' },
        { key: '119', value: 'history_of_alcohol_consumption' },
        { key: '120', value: 'fluid_overload' },
        { key: '121', value: 'blood_in_sputum' },
        { key: '122', value: 'prominent_veins_on_calf' },
        { key: '123', value: 'palpitations' },
        { key: '124', value: 'painful_walking' },
        { key: '125', value: 'pus_filled_pimples' },
        { key: '126', value: 'pus_filled_pimples' },
        { key: '127', value: 'blackheads' },
        { key: '128', value: 'scurring' },
        { key: '129', value: 'skin_peeling' },
        { key: '130', value: 'silver_like_dusting' },
        { key: '131', value: 'small_dents_in_nails' },
        { key: '132', value: 'inflammatory_nails' },
        { key: '133', value: 'blister' },
        { key: '134', value: 'red_sore_around_nose' },
        { key: '135', value: 'yellow_crust_ooze' }
    ]
    const [modalVisible, setModalVisible] = useState(false);
    const submitdata = async () => {

        const res = await fetch(
            "http://192.168.1.8:8000/pythondadta",
            {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({ selected }),
            }
        );

        const data = await res.json()
        setPred(data.data);
        console.log(pred);
        setModalVisible(true)

    }

    return (
        <View className="mx-5 ">

            <MultipleSelectList
                className="mx-3"
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                // onSelect={() => alert(selected)}
                label="Categories"
            />
            <TouchableOpacity
                onPress={submitdata}
                className="bg-blue-500 w-1/3 text-center rounded-2xl py-3 mx-auto mt-3"
            ><Text className="text-center font-bold text-white">Submit</Text>
            </TouchableOpacity>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>Your Disease Prediction : </Text>
                            <Text style={styles.modalText}>{pred}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                }
                                }>
                                <Text style={styles.textStyle}>ok</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    notify: {
        // alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: '90%',
        borderRadius: 15,
        borderColor: '#e7e5e4',
        backgroundColor: '#e7e5e4',
        padding: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,


    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        width: 35,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});


export default Notification;

