import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { fetchPokemons } from "./services/pokemonApi";
import { Pokemon } from "./domain/pokemon";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../store/store";
import Modal from "react-native-modal";

const PokemonScreen = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state: any) => state.pokemons);

  const [localPokemons, setLocalPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    const getPokemons = async () => {
      try {
        if (pokemons === undefined || pokemons.length === 0) {
          const fetchedPokemons = await fetchPokemons();
          if (fetchedPokemons !== undefined) {
            const pokemonList: Pokemon[] = fetchedPokemons.map((pokemon) => ({
              id: pokemon.id,
              name: pokemon.name,
              sprites: pokemon.sprites,
              species: pokemon.species,
              abilities: pokemon.abilities,
              types: pokemon.types,
            }));
            dispatch(setPokemons(pokemonList));
            setLocalPokemons(pokemonList);
          }
        } else {
          setLocalPokemons(pokemons);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, [dispatch, pokemons]);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderItem = ({ item }: { item: Pokemon }) => {
    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth * 0.9;

    return (
      <TouchableOpacity
        onPress={() => openModal(item)}
        style={[styles.card, { width: cardWidth }]}
      >
        <View style={styles.leftColumn}>
          <Image
            style={styles.image}
            source={{ uri: item.sprites.front_default }}
          />
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.idText}>{item.id}</Text>
          <Text style={styles.nameText}>
            {capitalizeFirstLetter(item.name)}
          </Text>
          <View style={styles.typeContainer}>
            {item.types.map((type, index, array) => (
              <View key={index} style={styles.typeBox}>
                <Text style={styles.typeName}>
                  {capitalizeFirstLetter(type.type.name)}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const openModal = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const renderPickerSelect = () => {
    return (
      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedType(value)}
          items={[
            { label: "Football", value: "football" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
          style={pickerSelectStyles}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TextInput
            style={styles.searchBar}
            placeholder="Search Pokemons"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FlatList
            data={localPokemons.filter((pokemon: any) =>
              pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
            )}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />

          {selectedPokemon !== null && (
            <Modal
              isVisible={selectedPokemon !== null}
              onBackdropPress={() => setSelectedPokemon(null)}
            >
              <View style={styles.modalContent}>
                <View style={styles.modalRow}>
                  <View style={styles.leftColumn}>
                    <Image
                      style={styles.image}
                      source={{ uri: selectedPokemon?.sprites.front_default }}
                    />
                  </View>
                  <View style={styles.rightColumn}>
                    <Text style={styles.idText}>{selectedPokemon?.id}</Text>
                    <Text style={styles.nameText}>
                      {capitalizeFirstLetter(selectedPokemon?.name)}
                    </Text>
                    <View style={styles.typeContainer}>
                      {selectedPokemon?.types.map((type, index, array) => (
                        <View key={index} style={styles.typeBox}>
                          <Text style={styles.typeName}>
                            {capitalizeFirstLetter(type.type.name)}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
                <View style={styles.modalRow}>
                  <Text style={styles.addToTrainerText}>Add to Trainer</Text>
                </View>
                <View style={styles.modalRow}>{renderPickerSelect()}</View>
              </View>
            </Modal>
          )}
        </>
      )}
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    //borderWidth: 1,
    //borderColor: "black",
    //borderRadius: 4,
    color: "black",
    paddingRight: 30,
    // Remove width from here
    // width: "200%",
    justifyContent: "center",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    //borderWidth: 1,
    //borderColor: "black",
    //borderRadius: 8,
    color: "black",
    paddingRight: 30,
    // Remove width from here
    // width: "200%",
    justifyContent: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
  searchBar: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
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

  modalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  addToTrainerText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
    width: "80%",
    marginLeft: 10,
    alignItems: "center",
  },
});

export default PokemonScreen;
