import NoiseBackground from '@/components/NoiseBackground';
import { Week } from '@/components/Week';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

export default function Home() {
    return (
        <SafeAreaView className='flex-1'>
            <NoiseBackground />
           
            <Week />
    
        </SafeAreaView>
    );
}