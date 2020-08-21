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
        fontSize: 23,
        lineHeight: 37,
        marginTop: 20,
        marginBottom: 50,
        textAlign: "center"
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: '#d4c2ff',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    submitButton: {
        backgroundColor: '#99003d',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default styles;