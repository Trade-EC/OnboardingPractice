import { Button, Image, Modal, Text, View } from "react-native";
import styles from "./Home.styles";
import { useState } from "react";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Welcome to the most beautiful app in the world
        </Text>
        <Text style={styles.points}>20 points</Text>
      </View>
      <View style={styles.body}>
        <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      </View>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalDescription}>
              A continuación puedes ver el QR
            </Text>
            <Image source={require("../../assets/images/qrexample.png")} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
