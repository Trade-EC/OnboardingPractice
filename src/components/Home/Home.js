import { Button, Modal, Text, View } from "react-native";
import styles from "./Home.styles";
import { useState } from "react";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>A continuación puedes ver el QR</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
