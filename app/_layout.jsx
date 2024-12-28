import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Accueil"
            }}
        />
        <Tabs.Screen
            name="create"
            options={{
                title: "Ajouter"
            }}
        />
        <Tabs.Screen
            name="explore"
            options={{
                title: "Explorer"
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Profil"
            }}
        />
    </Tabs>
  )
}

export default _layout