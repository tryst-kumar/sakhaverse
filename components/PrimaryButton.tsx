import React from 'react';
    import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
    import { Colors } from '@/constants/Colors';
    import { useColorScheme } from '@/hooks/useColorScheme';
    
    interface PrimaryButtonProps {
      title: string;
      onPress: () => void;
      style?: ViewStyle;
      textStyle?: TextStyle;
      disabled?: boolean;
    }
    
    export default function PrimaryButton({ title, onPress, style, textStyle, disabled }: PrimaryButtonProps) {
      const colorScheme = useColorScheme() ?? 'light';
      const-buttonBackgroundColor = Colors[colorScheme].tint;
      const textColor = Colors[colorScheme].background;
    
      return (
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: buttonBackgroundColor },
            disabled && styles.disabledButton,
            style,
          ]}
          onPress={onPress}
          disabled={disabled}>
          <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>
        </TouchableOpacity>
      );
    }
    
    const styles = StyleSheet.create({
      button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      disabledButton: {
        opacity: 0.5,
      },
    });
    