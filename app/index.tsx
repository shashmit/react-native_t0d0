import { View,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    return (
        <SafeAreaView className='flex-1 justify-center items-center'>
            <Text className='text-2xl text-selected font-barlow-700'>Home</Text>
        </SafeAreaView>
    );
}