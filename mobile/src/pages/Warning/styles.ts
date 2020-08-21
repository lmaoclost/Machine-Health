import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff4d4d',
        padding: 40,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#FFF',
        fontSize: 36,
        lineHeight: 37,
    },

    titleText: {
        color: '#FFF',
        fontSize: 24,
        lineHeight: 37,
    },

    okButton: {
        backgroundColor: '#99003d',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },

    oktButtonText: {
        color: '#FFF',
        fontSize: 16,
    }
});

export default styles;