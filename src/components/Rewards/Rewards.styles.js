import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  header: {
    backgroundColor: "#6A89CC",
    width: "100%",
    padding: 16,
    borderRadius: 16,
  },
  headerTitle: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  body: {
    flex: 1,
    width: "100%",
    padding: 16,
    justifyContent: "flex-start",
  },
  reward: {
    fontSize: 16,
    paddingVertical: 8,
    marginVertical: 8,
  },
});

export default styles;
