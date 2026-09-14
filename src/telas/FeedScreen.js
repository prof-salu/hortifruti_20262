import {View, Text, StyleSheet} from 'react-native';

export default function FeedScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Feed de notícias</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', 
        backgroundColor: '#F5F7FA',
    }, titulo: {
        fontSize: 24, fontWeight: 'bold',
    }
})