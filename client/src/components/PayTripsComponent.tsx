import { Alert, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import axios from 'axios'
import React from 'react';
export default function PayTripsComponent() {
  const amount = "10";
  const stripe = useStripe();

  const customerData = {
    firstName: "name",
    lastName: "lastname",
    email: "email@gmail.com"
  }

  const payTrip = async () => {
    try {
      const finalAmount = parseInt(amount);
      const response = await axios.post(`${process.env.EXPO_PUBLIC_URL_BASE}payTrip`, {
        amount: finalAmount,
        customerData,
        travelData: {
          travel_id: "123",
          user_id: "123"
        }
      })
      const data = await response.data
      console.log(data.clientSecret);

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: data.clientSecret,
        merchantDisplayName: 'Merchant Name',
      });

      if (initSheet.error) {
        console.error(initSheet.error);
        return Alert.alert(initSheet.error.message);
      }
      const presentSheet = await stripe.presentPaymentSheet({

      });
      if (presentSheet.error) {
        console.log("presentSheet error");

        console.error(presentSheet.error);
        return Alert.alert(presentSheet.error.message);
      }
      Alert.alert("¡¡Compra realizada con éxito!!");
    } catch (err) {
      console.error(err.message);
      Alert.alert("Error en la compra");
    }
  };
  return (
    <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_KEY}>
      <TouchableOpacity
        style={styles.button}
        onPress={payTrip}
      >
        <Text style={{ textAlign: 'center' }} >Pagar ahora</Text>
      </TouchableOpacity>
    </StripeProvider>
  );
}
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#FFA800',
    paddingVertical: 10,
    width: "90%"
  }

})