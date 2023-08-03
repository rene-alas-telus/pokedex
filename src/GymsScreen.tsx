import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";

import { Gym, kantoGyms, johtoGyms } from "../data/gyms";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Trainer,
  eliteFour,
  gymLeaders,
  commonTrainers,
  TRAINER_IMAGES,
} from "../data/trainers";

const GymScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGym, setSelectedGym] = useState<Gym | null>(null);
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  useEffect(() => {
    const allTrainers: React.SetStateAction<Trainer[]> = [];
    eliteFour.map((elite) => allTrainers.push(elite));
    gymLeaders.map((lider) => allTrainers.push(lider));
    commonTrainers.map((common) => allTrainers.push(common));
    setTrainers(allTrainers);
  }, []);

  const renderItem = ({ item }: { item: Gym }) => {
    return (
      <TouchableOpacity onPress={() => openModal(item)}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={require("../assets/gym.png")} style={styles.image} />
            <View style={styles.rightColumn}>
              <Text style={styles.title}>{item.location}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const openModal = (gym: Gym) => {
    setSelectedGym(gym);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedGym(null);
    setIsModalVisible(false);
  };

  interface TrainerCardProps {
    trainer: Trainer;
    isLeader?: boolean;
  }

  const TrainerCard: React.FC<TrainerCardProps> = ({ trainer, isLeader }) => {
    const imageSource = TRAINER_IMAGES[trainer.image].uri;
    return (
      <View
        style={[
          styles.trainerCard,
          isLeader ? styles.leaderCard : styles.memberCard,
        ]}
      >
        <View style={styles.trainerImageContainer}>
          <Image source={imageSource} style={styles.trainerImage} />
        </View>
        <View style={styles.trainerDetailsContainer}>
          <Text style={styles.trainerName}>{trainer.name}</Text>
          <Text style={styles.trainerSpecialty}>
            Specialty: {trainer.specialty}
          </Text>
          <Text style={styles.trainerId}>ID: {trainer.id}</Text>
        </View>
      </View>
    );
  };

  const renderGymModal = () => {
    if (!selectedGym) return null;

    const gymLeaderTrainer = trainers.find(
      (trainer) => trainer.id === selectedGym.leader
    );

    const gymMembersTrainers = trainers.filter((trainer) =>
      selectedGym.members.includes(trainer.id)
    );

    let leaderImage;

    if (gymLeaderTrainer !== undefined) {
      leaderImage = TRAINER_IMAGES[gymLeaderTrainer.image].uri;
    }

    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.gymName}>{selectedGym.location} Gym</Text>
          <Text style={styles.trainerName}>{selectedGym.badge} Badge</Text>
          <View style={styles.separator} />

          {/* Display Gym Leader */}
          {gymLeaderTrainer && (
            <>
              <Text style={styles.trainerName}>Team Leader</Text>
              <TrainerCard trainer={gymLeaderTrainer} isLeader />
            </>
          )}

          {/* Display Gym Members */}
          {gymMembersTrainers.length > 0 && (
            <>
              <Text style={styles.trainerName}>Members</Text>
              <FlatList
                data={gymMembersTrainers}
                renderItem={({ item }) => <TrainerCard trainer={item} />}
                keyExtractor={(item) => item.id.toString()}
              />
            </>
          )}
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kanto Gyms</Text>
      <FlatList
        data={kantoGyms}
        renderItem={renderItem}
        keyExtractor={(item) => item.number.toString()}
      />
      <Text style={styles.text}>Johto Gyms</Text>
      <FlatList
        data={johtoGyms}
        renderItem={renderItem}
        keyExtractor={(item) => item.number.toString()}
      />
      {renderGymModal()}
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const cardWidth = windowWidth * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 5,
    width: cardWidth,
    height: 100,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  rightColumn: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },

  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: Dimensions.get("window").height * 0.8,
  },

  gymName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  gymBadge: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },

  separator: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
  },

  trainerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  trainerImageContainer: {
    marginRight: 10,
  },

  trainerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  trainerDetailsContainer: {
    flex: 1,
  },

  trainerName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  trainerSpecialty: {
    fontSize: 16,
  },

  trainerId: {
    fontSize: 16,
  },
  trainerCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  leaderCard: {
    borderColor: "white",
    width: 360,
  },
  memberCard: {
    borderColor: "black",
    width: 360,
  },
});

export default GymScreen;
