import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


export type HomeStackParam = {
  Home: undefined;
  Details: {
    Name: string;
    Birthday: string;
  };
};

export type BottomTabParam = {
  HomeStack: HomeStackParam;
  Feed: undefined;
  Settings: undefined;
};

export type HomeScreenProps = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParam, 'Details'>,
  BottomTabNavigationProp<BottomTabParam, 'Feed'>
>;


export type DetailsRouteProp = RouteProp<
  HomeStackParam,
  'Details'
>;
