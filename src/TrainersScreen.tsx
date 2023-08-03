import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

import {
  Trainer,
  commonTrainers,
  eliteFour,
  gymLeaders,
  TRAINER_IMAGES,
} from "../data/trainers";
import { Pokemon } from "./domain/pokemon";

const TrainerScreen = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  const pokemons = useSelector((state: any) => state.pokemons);

  useEffect(() => {
    const allTrainers: React.SetStateAction<Trainer[]> = [];
    eliteFour.map((elite) => allTrainers.push(elite));
    gymLeaders.map((lider) => allTrainers.push(lider));
    commonTrainers.map((common) => allTrainers.push(common));
    setTrainers(allTrainers);
  }, []);

  const openModal = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setIsModalVisible(true);
  };

  const renderItem = ({ item }: { item: Trainer }) => {
    const newimage = TRAINER_IMAGES[item.image].uri;

    return (
      <TouchableOpacity onPress={() => openModal(item)}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={newimage} style={styles.image} />
            <View style={styles.rightColumn}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>ID: {item.id}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderPokemonItem = ({ item }: { item: Pokemon }) => {
    return (
      <>
        <View style={pokemonStyles.leftColumn}>
          <Image
            style={pokemonStyles.image}
            source={{ uri: item.sprites.front_default }}
          />
        </View>
        <View style={pokemonStyles.rightColumn}>
          <Text style={pokemonStyles.idText}>{item.id}</Text>
          <Text style={pokemonStyles.nameText}>
            {capitalizeFirstLetter(item.name)}
          </Text>
          <View style={pokemonStyles.typeContainer}>
            {item.types.map((type, index, array) => (
              <View key={index} style={pokemonStyles.typeBox}>
                <Text style={pokemonStyles.typeName}>
                  {capitalizeFirstLetter(type.type.name)}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </>
    );
  };

  const renderTrainerModal = () => {
    if (!selectedTrainer) return null;

    const trainerPokemons = pokemons.filter((pokemon: Pokemon) =>
      selectedTrainer.pokemon.includes(pokemon.id)
    );

    return (
      <View style={styles.modalContent}>
        <Text style={styles.trainerName}>{selectedTrainer.name}</Text>
        <Text style={styles.modalId}>ID: {selectedTrainer.id}</Text>
        <Text style={styles.modalDescription}>
          Description: {selectedTrainer.description}
        </Text>
        <FlatList
          data={trainerPokemons}
          renderItem={renderPokemonItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trainers</Text>
      <FlatList
        data={trainers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      >
        {renderTrainerModal()}
      </Modal>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const cardWidth = windowWidth * 0.8;

const pokemonStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  idText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  typeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  typeBox: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  typeName: {
    fontSize: 14,
  },
});

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
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get("window").height * 0.8,
  },

  trainerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalId: {
    fontSize: 16,
  },

  modalDescription: {
    fontSize: 14,
  },

  pokemonCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },

  pokemonImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  pokemonName: {
    fontSize: 16,
  },
});

export default TrainerScreen;
