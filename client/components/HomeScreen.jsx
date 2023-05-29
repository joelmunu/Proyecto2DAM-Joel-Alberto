import { StyleSheet, Text, View, ImageBackground, Pressable, ScrollView } from 'react-native';


export default function HomeScreen() {
    return (
        <ScrollView>
            <View style={styles.screenContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Fitness App</Text>
                </View>
                <View style={styles.imgContainerExplore}>
                    <ImageBackground source={require('../assets/crossfit.jpg')} resizeMode="cover" style={styles.imageExplore}>
                        <View style={styles.exploreContentContainer}>
                            <Text style={styles.exploreText}>Crossfit</Text>
                        </View>
                        <Pressable style={styles.pressable}>
                            <Text style={styles.pressableText}>Explore now</Text>
                        </Pressable>
                    </ImageBackground>
                </View>
                <View style={styles.categories}>
                    <Text style={styles.sectionText}>Categories:</Text>
                </View>
                <ScrollView horizontal style={{paddingBottom: 10}}>
                    <View>
                        <View>
                            <ImageBackground source={require('../assets/crossfit.jpg')} resizeMode="cover" style={styles.categoryCard} />
                        </View>
                        <View style={styles.categoryCardTextContainer}>
                            <Text style={styles.categoryCardTextTitle}>Fitness</Text>
                            <Text style={styles.categoryCardText}>Rutines</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <ImageBackground source={require('../assets/crossfit.jpg')} resizeMode="cover" style={styles.categoryCard} />
                        </View>
                        <View style={styles.categoryCardTextContainer}>
                            <Text style={styles.categoryCardTextTitle}>Fitness</Text>
                            <Text style={styles.categoryCardText}>Rutines</Text>
                        </View>
                    </View>
                    <View style={styles.categoryCardLast}>
                        <View>
                            <ImageBackground source={require('../assets/crossfit.jpg')} resizeMode="cover" style={styles.categoryCard} />
                        </View>
                        <View style={styles.categoryCardTextContainer}>
                            <Text style={styles.categoryCardTextTitle}>Fitness</Text>
                            <Text style={styles.categoryCardText}>Rutines</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.categories}>
                    <Text style={styles.sectionText}>Quick search:</Text>
                </View>
                <ScrollView horizontal style={{paddingBottom: 10}}>
                    <View>
                        <View>
                            <ImageBackground source={require('../assets/crossfit.jpg')} resizeMode="cover" style={styles.categoryCard} />
                        </View>
                        <View style={styles.categoryCardTextContainer}>
                            <Text style={styles.categoryCardTextTitle}>Fitness</Text>
                            <Text style={styles.categoryCardText}>Rutines</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <ImageBackground source={require('../assets/crossfit.jpg')} resizeMode="cover" style={styles.categoryCard} />
                        </View>
                        <View style={styles.categoryCardTextContainer}>
                            <Text style={styles.categoryCardTextTitle}>Fitness</Text>
                            <Text style={styles.categoryCardText}>Rutines</Text>
                        </View>
                    </View>
                    <View style={styles.categoryCardLast}>
                        <View>
                            <ImageBackground source={require('../assets/crossfit.jpg')} resizeMode="cover" style={styles.categoryCard} />
                        </View>
                        <View style={styles.categoryCardTextContainer}>
                            <Text style={styles.categoryCardTextTitle}>Fitness</Text>
                            <Text style={styles.categoryCardText}>Rutines</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    titleContainer: {
        margin: 50,
        marginLeft: 30
    },
    title: {
        fontSize: 25,
        color: "#FF8000",
        fontWeight: "bold"
    },
    imgContainerExplore: {
        alignItems: "center"
    },
    imageExplore: {
        width: 350,
        height: 150,
        overflow: 'hidden',
        borderRadius: 20
    },
    exploreContentContainer: {
        margin: 20
    },
    exploreText: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold"
    },
    pressable: {
        margin: 20,
        marginTop: 5,
        backgroundColor: "#39393B",
        width: 150,
        padding: 10,
        borderRadius: 20,
        alignItems: "center"
    },
    pressableText: {
        color: "#FF8000",
        fontSize: 20,
        fontWeight: "bold"
    },
    screenContainer: {
        backgroundColor: "#fff",
        height: "100%"
    },
    categories: {
        margin: 30,
        marginTop: 20
    },
    sectionText: {
        fontSize: 25,
        color: "#39393B",
        fontWeight: "bold"
    },
    categoryCard: {
        marginLeft: 30,
        width: 200,
        height: 150,
        overflow: 'hidden',
        borderRadius: 20
    },
    categoryCardLast: {
        marginRight: 30,
    },
    categoryCardTextContainer: {
        marginLeft: 40,
    },
    categoryCardTextTitle: {
        fontSize: 20,
        color: "#FF8000",
        fontWeight: "bold"
    },
    categoryCardText: {
        fontSize: 16,
        color: "#39393B",
        fontWeight: "bold"
    }
});