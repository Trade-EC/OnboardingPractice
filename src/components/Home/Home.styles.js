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
    marginBottom: 8,
  },
  points: {
    paddingVertical: 8,
    color: "white",
  },
  body: {
    flex: 1,
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalDescription: {
    marginBottom: 32,
    color: "#4A3D36",
  },
});

export default styles;
