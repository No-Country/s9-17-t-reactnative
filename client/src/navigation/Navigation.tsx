import { StatusBar } from 'react-native'
import React from 'react'
import { useAppSelector } from '../app/hooks'
import { NavigationContainer } from '@react-navigation/native';
import NoAuthNavigation from './NoAuthNavigation';
import AuthNavigation from './AuthNavigation';

const Navigation = () => {
  const user = useAppSelector(app => app.user.user)
  return (
    <NavigationContainer>
      {user.id ?
        <NoAuthNavigation />
        :
        <AuthNavigation />
      }
      <StatusBar />
    </NavigationContainer>
  )
}

export default Navigation