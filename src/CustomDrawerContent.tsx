// CustomDrawerContent.tsx
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../store/store";

type CustomDrawerContentProps = DrawerContentComponentProps & {
  onLogout?: () => void;
};

const CustomDrawerContent = ({
  navigation,
  onLogout,
}: CustomDrawerContentProps) => {
  const userName = useSelector((state: any) => state.userName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearCredentials());
    if (typeof onLogout === "function") {
      onLogout();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.usernameText}>Hello, {userName}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: "red",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomDrawerContent;
