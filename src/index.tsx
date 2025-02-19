import { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Pressable,
  type PressableProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// const color = `rgba(0, 0, 255, 1)`;
// const colorTransparentShade = `rgba(0, 0, 255, 0.40)`;

interface ButtonProps extends PressableProps {
  title: string;
  borderGradientColor?: [number, number, number, number];
  viewStyles?: ViewStyle;
  textStyles?: TextStyle;
}

export function Button({
  title = 'button',
  borderGradientColor,
  textStyles,
  viewStyles,
  ...rest
}: ButtonProps) {
  const rotateValue = new Animated.Value(0);

  const r = borderGradientColor?.[0] || 0;
  const g = borderGradientColor?.[1] || 0;
  const b = borderGradientColor?.[2] || 255;
  const a = borderGradientColor?.[3] || 1;
  const aLight = borderGradientColor?.[3] || 0.4;

  const color = `rgba(${r}, ${g}, ${b}, ${a})`;
  const colorTransparentShade = `rgba(${r}, ${g}, ${b}, ${aLight})`;

  useEffect(() => {
    // Start the animation
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1, // Ends at 1, completing the animation cycle
        duration: 1000, // Duration of each rotation (in milliseconds)
        easing: Easing.linear, // Smooth, continuous rotation
        useNativeDriver: true, // Use native driver for better performance
      })
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Interpolate the rotation value
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Rotate from 0 to 360 degrees
  });

  // Apply rotation style to the view
  const animatedStyle = {
    transform: [{ rotate }],
  };

  const pressableDefaultRadius = parseInt(
    styles?.pressable?.borderRadius.toString(),
    10
  );

  const customViewRadius =
    parseInt(viewStyles?.borderRadius?.toString() || '', 10) || 0;

  const textBorderRadius =
    (customViewRadius || pressableDefaultRadius) - 1 || 4;

  return (
    <View style={styles.view}>
      <Pressable style={[styles.pressable, viewStyles]} {...rest}>
        <Animated.View style={[animatedStyle, styles.animatedView]}>
          <LinearGradient
            start={{ x: 0.4, y: 1 }}
            end={{ x: 0.6, y: 0 }}
            locations={[0.25, 0.5, 0.75]}
            colors={[colorTransparentShade, color, colorTransparentShade]}
            style={styles.linearGradient}
          />
        </Animated.View>
        <Text
          style={[
            styles.buttonText,
            textStyles,
            { borderRadius: textBorderRadius },
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignSelf: 'center',
  },
  pressable: {
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5,
  },
  animatedView: {
    position: 'absolute',
    width: '350%',
    height: '350%',
  },
  linearGradient: {
    flex: 0,
    width: '50%',
    height: '50%',
    zIndex: 1000,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 0,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#222222',
    backgroundColor: '#dddddd',
    borderRadius: 4,
  },
});
