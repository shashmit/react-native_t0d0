import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";

export default function NoiseBackground() {
  return (
    <ImageBackground
    source={require('@/assets/images/bg_texture.jpg')}
    resizeMode='repeat'
    className='flex-1 absolute left-0 right-0 bottom-0 top-0'
    >
        <LinearGradient 
        colors={["#D7D7D7", "#ACACAC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className= "flex-1 opacity-50"
        
        />
    </ImageBackground>
  )
}