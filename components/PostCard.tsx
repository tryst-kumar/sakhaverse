import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
    
    export interface Post {
      id: string;
      type: 'Event' | 'Help' | 'Item';
      title: string;
      description: string;
      location: string; // For simplicity, using string. In a real app, this would be more complex.
      user: string; // User ID or name
      timestamp: Date;
    }
    
    interface PostCardProps {
      post: Post;
      onPress?: () => void;
      style?: StyleProp<ViewStyle>;
    }
    
    export default function PostCard({ post, onPress, style }: PostCardProps) {
      const colorScheme = useColorScheme() ?? 'light';
      const cardBackgroundColor = Colors[colorScheme].card;
      const textColor = Colors[colorScheme].text;
      const borderColor = Colors[colorScheme].border;
    
      return (
        <TouchableOpacity onPress={onPress} style={[styles.card, { backgroundColor: cardBackgroundColor, borderColor }, style]} disabled={!onPress}>
          <Text style={[styles.title, { color: textColor }]}>{post.title}</Text>
          <Text style={[styles.type, { color: Colors[colorScheme].tint }]}>{post.type}</Text>
          <Text style={[styles.description, { color: textColor }]} numberOfLines={3}>{post.description}</Text>
          <Text style={[styles.meta, { color: textColor }]}>Posted by: {post.user} | Location: {post.location}</Text>
          <Text style={[styles.meta, { color: textColor }]}>{post.timestamp.toLocaleDateString()}</Text>
        </TouchableOpacity>
      );
    }
    
    const styles = StyleSheet.create({
      card: {
        padding: 15,
        borderRadius: 8,
        marginVertical: 8,
        borderWidth: 1,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      type: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
      },
      description: {
        fontSize: 14,
        marginBottom: 10,
      },
      meta: {
        fontSize: 12,
        color: 'gray',
      },
    });
    