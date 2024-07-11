import React from "react";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '../../constants/Colors';
import { createIconSet } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { View } from "react-native-reanimated/lib/typescript/Animated";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function HistoryTab () {
    return (
        <ParallaxScrollView headerBackgroundColor={{ light: '#151718', dark: '#151718' }}>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">
                History
            </ThemedText>
            
        </ThemedView>
        <ThemedView style={styles.subContainer}>
            <ThemedText type="title">
                
            </ThemedText>
            
        </ThemedView>

        </ParallaxScrollView>
        
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      },
      subContainer:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:'center',
        marginVertical:25,
      }
}) 