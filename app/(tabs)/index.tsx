import {Text,  View , StyleSheet}  from "react-native";

export default function Index(){
    return(
          <View style={styles.container}>
            <Text style={styles.title}>Nora & Hammer's Articles</Text>
            <Text style={styles.subtitle}>Welcome to our app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:  1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#fff",
    },
    title:{
        fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: "gray",

    },
});
