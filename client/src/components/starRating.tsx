import { View,Image } from 'react-native'
import React from 'react';
import star from '../assets/imgTest/fullStar.png';
import emptyStar from '../assets/imgTest/emptyStar.png';

const starRating = (score) => {
    const scoreUser = (score: number) => {
        return Array.from({ length: 5 }, (_, i) => {
          const starImage = i < score ? star : emptyStar;
          return <Image key={i} source={starImage} className="h-6 w-6" />;
        });
    }
  return (
        <View className="flex flex-row">
            {scoreUser(score)}
        </View>
  )
}

export default starRating