import { Text, View } from "react-native";
import styles from "./Rewards.styles";

const Rewards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rewards you own</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.reward}>Reward 1</Text>
        <Text style={styles.reward}>Reward 2</Text>
        <Text style={styles.reward}>Reward 3</Text>
        <Text style={styles.reward}>Reward 4</Text>
      </View>
    </View>
  );
};

export default Rewards;
