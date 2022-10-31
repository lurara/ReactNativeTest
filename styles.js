import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subcontainer: {
        maxWidth: '80%',
        marginBottom: 25,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
        // border: 100,
        alignItems: 'center',   
    },  
    itemView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 15,
        marginTop: 10,
        color: 'black',
        maxWidth: '80%',
        textAlign: 'center',
    },
    listItem: {
        alignContent: 'center',
        padding: 20,
        fontSize: 15,
        marginTop: 5,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 60,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 50,
    },
    score: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fc0373',
    },
    rec: {
        fontSize: 100,
        fontWeight: 'bold',
        color: '#black',
        marginTop: 60,
    },
    buttonsView: {
        marginBottom: 30,
        marginTop: 30,
        flexDirection: 'row',
    },
    backButton: {
        paddingRight: 10,
    }

});
    
export default styles;