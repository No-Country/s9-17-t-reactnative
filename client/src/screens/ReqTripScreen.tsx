import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { useEffect, useState } from "react";
import star from "../assets/icons/StarFull.png";
import { AirbnbRating } from "react-native-ratings";
import ChatCircleText from "../assets/icons/ChatCircleText.svg";
import ArrowBackComponent from "../components/ArrowBackComponent";
import Calendar from "../assets/icons/Calendar.svg";
import PointedLine from "../assets/icons/PointedLine.svg";
import CircleBlack from "../assets/icons/CircleBlack.svg";
import MapPin from "../assets/icons/MapPin.svg";
import Clock from "../assets/icons/Clock.svg";
import Car from "../assets/icons/Car.svg";
import CreditCard from "../assets/icons/CreditCard.svg";
import Visa from "../assets/icons/Visa.svg";
import ArrowDropDown from "../assets/icons/ArrowDropDown.svg";
import ButtonReqTravel from "../components/ButtonReqTravel";
import { RouteProp } from "@react-navigation/native";
import MapView from "react-native-maps";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setTripsConfirmed, login } from "../features/user/userSlice";
import PayTripsComponent from "../components/PayTripsComponent";
const StarRating = ({
  rating,
  styles,
}: {
  rating?: number;
  styles: StyleProp<ViewStyle>;
}) => {
  return (
    <AirbnbRating
      count={5}
      starImage={star}
      showRating={false}
      defaultRating={rating}
      size={24}
      isDisabled={true}
      starContainerStyle={styles}
    />
  );
};

const ReqTripScreen = ({ route }: { route: RouteProp<any> }) => {
  const { name, picture, location, day, login } = route.params?.item;
  const tripsConfirmed = useAppSelector(store => store.user.user.tripsConfirmed)

  const [requestSent, setRequestSent] = useState(false);
  const [requestAccepted, setRequestAccepted] = useState(false)
  const [origin, setOrigin] = useState({
    latitude: -34.604442,
    longitude: -58.430154,
  });

  const dispatch = useAppDispatch()


  const sentRequest = () => {
    dispatch(setTripsConfirmed(login.uuid))
    setTimeout(() => {
      setRequestAccepted(true)
    }, 4000)
  }
  useEffect(() => {
    if (tripsConfirmed.includes(login.uuid)) {
      setRequestAccepted(true)
      setRequestSent(true)
    } else {
      setRequestAccepted(false)
      setRequestSent(false)
    }
    console.log(tripsConfirmed.includes(login.uuid));
  }, [login])

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom:20 }}>
      <ArrowBackComponent edit="absolute top-6 left-5 z-10 rounded-full p-1 bg-white" />
      <MapView
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
        className={`h-[130px] max-h-[18%] border justify-center items-center `}
      ></MapView>
      <View className={`h-min border-b-[#FFA800] border-b mx-4 py-4 flex-row`}>
        <Image
          source={{ uri: picture.large }}
          className={`h-[120px] w-[120px] rounded-full`}
        />
        <View className={`flex-1 justify-evenly items-center `}>
          <Text className={`text-base font-semibold `}>
            {name.first} {name.last}
          </Text>
          <StarRating
            rating={3}
            styles={{
              borderBottomWidth: 1,
              borderBottomColor: "#FFA800",
              paddingBottom: 2,
            }}
          />
          <TouchableOpacity
            className={`flex-row items-center gap-1 text-base font-medium `}
          >
            <ChatCircleText width={16} height={16} />
            <Text className={`font-medium text-base`}>Contactar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className={`border-b border-b-[#FFA800] h-min mx-4 py-4 gap-y-1`}>
        <View className={`flex-row items-center gap-x-1`}>
          <Calendar width={20} height={20} />
          <Text className={`text-base font-normal`}>{day}</Text>
        </View>
        <View className={` pl-2 gap-y-[2px] max-w-[70%]`}>
          <View className={`flex-row items-center  ml-[-3px] mb-[-5px] `}>
            <CircleBlack />
            <Text className={`ml-3 text-base`}>{location.state}</Text>
          </View>
          <PointedLine />
          <View className={`flex-row items-start ml-[-11px]`}>
            <MapPin width={24} height={24} />
            <Text
              className={`ml-1 text-base`}
            >{`${location.city}, ${location.state}`}</Text>
          </View>
        </View>
        <View className={`absolute right-0 top-3 gap-y-1`}>
          <Text className={`text-sm w-[45px] ml-auto `}>Salida</Text>
          <View className={`flex-row items-center gap-x-1`}>
            <Clock width={24} height={24} />
            <Text className={`text-base`}>15:30hs</Text>
          </View>
        </View>
      </View>
      <View
        className={`h-min border-b-[#FFA800] border-b mx-4 py-4 gap-y-[20]`}
      >
        <View className={`flex-row items-center gap-x-1`}>
          <Car width={20} height={20} />
          <Text className={`text-base font-semibold`}>
            Detalles del vehículo
          </Text>
        </View>
        <View className={`flex-row justify-between`}>
          <Text className={`text-base font-normal`}>Modelo</Text>
          <Text className={`text-base font-normal`}>Volswagen Gol</Text>
        </View>
        <View className={`flex-row justify-between`}>
          <Text className={`text-base font-normal`}>Patente</Text>
          <Text className={`text-base font-normal`}>AA 123 BC</Text>
        </View>
      </View>
      <View className={`h-min mx-4 py-4 gap-y-[20]`}>
        <View className={`flex-row justify-between`}>
          <Text className={`text-base font-normal`}>Valor del viaje:</Text>
          <Text className={`text-base font-normal`}>$250</Text>
        </View>
        <View className={`flex-row justify-between`}>
          <View className={`flex-row items-center gap-x-1`}>
            <CreditCard width={20} height={20} />
            <Text className={`text-base font-normal`}>Medio de pago:</Text>
          </View>
          <View className={`flex-row items-center gap-x-1`}>
            <Visa width={35} height={35} />
            <Text className={`text-base font-normal`}>**** 0253</Text>
            <ArrowDropDown width={24} height={24} />
          </View>
        </View>
      </View>
      <ButtonReqTravel action={sentRequest} requestSent={requestSent} requestAccepted={requestAccepted} setRequestSent={setRequestSent}
      />
      {requestAccepted &&
        <PayTripsComponent />
      }
    </ScrollView>
  );
};

export default ReqTripScreen;
