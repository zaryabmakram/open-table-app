import React, { useState } from "react";

import { StyleSheet, ToastAndroid } from "react-native";
import {
    Container,
    Header,
    Content,
    Title,
    Text,
    Button,
    Footer
} from 'native-base';
import { CreditCardInput } from "react-native-credit-card-input";

console.disableYellowBox = true; //ignoring yellow-box warnings 

const s = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    label: {
        color: "black",
        fontSize: 12,
    },
    input: {
        fontSize: 16,
        color: "black",
    },
    inputContainer: {
        marginTop: 50,
    },
    btn: {
        width: "100%",
        justifyContent: 'center'
    }
});

export default function PaymentScreen(props) {

    const [cardData, setCardData] = useState({});

    const pressHandle = () => {
        let proceed = true;
        if (
            cardData["status"] == null ||
            cardData["status"]["number"] == "incomplete" ||
            cardData["status"]["expiry"] == "incomplete" ||
            cardData["status"]["cvc"] == "incomplete" ||
            cardData["status"]["name"] == "incomplete"
        ) proceed = false;

        if (proceed) {
            console.log(JSON.stringify(cardData, null, " "));
        } else {
            ToastAndroid.show('Incomplete Information!', ToastAndroid.SHORT);
        }
    }
    const changeHandle = form => setCardData(form);

    const cardInputsProps = {
        number: {
            maxLength: 20,
        },
    };
    return (
        <Container>
            <Header>
                <Title>Payment</Title>
            </Header>
            <Content style={s.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <CreditCardInput
                    autoFocus
                    requiresName
                    requiresCVC
                    labelStyle={s.label}
                    inputStyle={s.input}
                    validColor={"black"}
                    invalidColor={"black"}
                    placeholderColor={"darkgray"}
                    additionalInputsProps={cardInputsProps}
                    allowScroll={true}
                    onChange={changeHandle}
                />
            </Content>
            <Footer>
                <Button
                    transparent
                    style={s.btn}
                    onPress={() => pressHandle()}
                >
                    <Text style={{ color: "white" }}>Proceed</Text>
                </Button>
            </Footer>
        </Container>
    );
}
