
export interface Trainer {
  id: number
  name: string
  specialty: string | null
  description: string
  pokemon: Array<number>
  image: ImageKey
}

type ImageKey = keyof typeof TRAINER_IMAGES;

export const commonTrainers: Array<Trainer> = [
    { id: 1, name: "Youngster Joey", specialty: null, pokemon: [19], image: "youngster", description: "They are depicted as average young boys usually wearing caps and short pants. They use a variety of Pokémon, but they tend to use common ones that are caught early in their respective games." },

    { id: 1001, name: "Bird Keeper Abe", specialty: null, pokemon: [21], image: "birdkeeper", description: "They are generally depicted as young men carrying bird cages, except in Diamond, Pearl, and Platinum and their remakes, in which they are female." },
    { id: 1002, name: "Bird Keeper Rod", specialty: null, pokemon: [16, 16], image: "birdkeeper", description: "They are generally depicted as young men carrying bird cages, except in Diamond, Pearl, and Platinum and their remakes, in which they are female." },
    { id: 2001, name: "Bug Catcher Al", specialty: null, pokemon: [10, 13], image: "bugcatcher", description: "They are generally depicted as little boys in hats, carrying nets and what appears to be their lunchboxes, or containers to keep caught bugs in, held by a strap after Generation II. Most Bug Catchers have been considered just hobbyists. Some Bug Catchers move around areas, and don't always stay in the same place each day." },
    { id: 2002, name: "Bug Catcher Benny", specialty: null, pokemon: [13, 14, 15], image: "bugcatcher", description: "They are generally depicted as little boys in hats, carrying nets and what appears to be their lunchboxes, or containers to keep caught bugs in, held by a strap after Generation II. Most Bug Catchers have been considered just hobbyists. Some Bug Catchers move around areas, and don't always stay in the same place each day." },
    { id: 2003, name: "Bug Catcher Josh", specialty: null, pokemon: [46], image: "bugcatcher", description: "They are generally depicted as little boys in hats, carrying nets and what appears to be their lunchboxes, or containers to keep caught bugs in, held by a strap after Generation II. Most Bug Catchers have been considered just hobbyists. Some Bug Catchers move around areas, and don't always stay in the same place each day." },
    { id: 2004, name: "Twins Amy & Mimi", specialty: null, pokemon: [165, 167], image: "twins", description: "They are two identical young girls. In Generation II, they fought in regular battles. In Generation III and beyond, they fight in Double Battles. In Generation VII, they are represented as a pair of female Preschoolers." },
    { id: 3001, name: "Beauty Victoria", specialty: null, pokemon: [161, 161, 161], image: "beauty", description: "They use a variety of Pokémon, but tend to use those that implement beauty and cuteness, and they typically pay out a lot of money when defeated." },
    { id: 3002, name: "Beauty Samantha", specialty: null, pokemon: [52, 52], image: "beauty", description: "They use a variety of Pokémon, but tend to use those that implement beauty and cuteness, and they typically pay out a lot of money when defeated." },
    { id: 3003, name: "Lass Carrie", specialty: null, pokemon: [209], image: "lass", description: "They are depicted as average young girls in clothing resembling school uniforms. Lasses appear to be the female counterparts of Youngsters, and they grow up to be Beauties." },
    { id: 3004, name: "Lass Cathy", specialty: null, pokemon: [39, 39, 39], image: "lass", description: "They are depicted as average young girls in clothing resembling school uniforms. Lasses appear to be the female counterparts of Youngsters, and they grow up to be Beauties." },
    { id: 4001, name: "Medium Georgina", specialty: null, pokemon: [92, 92, 92, 92, 92], image: "medium", description: "They are depicted as old women with little ghosts floating around them in Generation II, and as old women with a large, lit candle in each hand in Generation IV. As their Japanese name suggests, they're based on blind female shamans from northern Japan who dress in a white kimono during their training for initiation (Itako)." },
    { id: 4002, name: "Medium Grace", specialty: null, pokemon: [93, 93], image: "medium", description: "They are depicted as old women with little ghosts floating around them in Generation II, and as old women with a large, lit candle in each hand in Generation IV. As their Japanese name suggests, they're based on blind female shamans from northern Japan who dress in a white kimono during their training for initiation (Itako)." },
    { id: 4003, name: "Medium Edith", specialty: null, pokemon: [93], image: "medium", description: "They are depicted as old women with little ghosts floating around them in Generation II, and as old women with a large, lit candle in each hand in Generation IV. As their Japanese name suggests, they're based on blind female shamans from northern Japan who dress in a white kimono during their training for initiation (Itako)." },
    { id: 4004, name: "Medium Martha", specialty: null, pokemon: [92, 93, 92], image: "medium", description: "They are depicted as old women with little ghosts floating around them in Generation II, and as old women with a large, lit candle in each hand in Generation IV. As their Japanese name suggests, they're based on blind female shamans from northern Japan who dress in a white kimono during their training for initiation (Itako)." },
    { id: 5001, name: "Black Belt Yoshi", specialty: null, pokemon: [106], image: "blackbelt", description: "They are generally depicted as generic martial artists, in headband and gi striking a fighting pose." },
    { id: 5002, name: "Black Belt Lao", specialty: null, pokemon: [107], image: "blackbelt", description: "They are generally depicted as generic martial artists, in headband and gi striking a fighting pose." },
    { id: 5003, name: "Black Belt Nob", specialty: null, pokemon: [66, 67], image: "blackbelt", description: "They are generally depicted as generic martial artists, in headband and gi striking a fighting pose." },
    { id: 5004, name: "Black Belt Lung", specialty: null, pokemon: [56, 56, 57], image: "blackbelt", description: "They are generally depicted as generic martial artists, in headband and gi striking a fighting pose." },

    { id: 7001, name: "Skier Diana", specialty: null, pokemon: [124], image: "skier", description: "They look like young women (and, in Sinnoh, young men) dressed in winter clothing and on skis. They mainly specialize in Ice-type Pokémon, although in Diamond and Pearl (and their remakes), they also use Pokémon of other types." },
    { id: 7002, name: "Boarder Patton", specialty: null, pokemon: [220, 220], image: "boarder", description: "They are generally depicted as young men in winter clothing, riding a snowboard. They specialize in Ice-type Pokémon." },
    { id: 7003, name: "Boarder Deandre", specialty: null, pokemon: [86, 87, 86], image: "boarder", description: "They are generally depicted as young men in winter clothing, riding a snowboard. They specialize in Ice-type Pokémon." },
    { id: 7004, name: "Skier Jill", specialty: null, pokemon: [87], image: "skier", description: "They look like young women (and, in Sinnoh, young men) dressed in winter clothing and on skis. They mainly specialize in Ice-type Pokémon, although in Diamond and Pearl (and their remakes), they also use Pokémon of other types." },
    { id: 7005, name: "Boarder Gerardo", specialty: null, pokemon: [90, 91, 86], image: "boarder", description: "They are generally depicted as young men in winter clothing, riding a snowboard. They specialize in Ice-type Pokémon." },
    { id: 8001, name: "Ace Trainer Paulo", specialty: null, pokemon: [147, 147, 117], image: "ace", description: "They are depicted as teens or young adults and can be male or female. The title Ace Trainer is used in Generation IV and onward; prior to this, the Trainer class was known as Cooltrainer. They generally use strong and evolved Pokémon." },
    { id: 8002, name: "Ace Trainer Lola", specialty: null, pokemon: [147, 148], image: "ace", description: "They are depicted as teens or young adults and can be male or female. The title Ace Trainer is used in Generation IV and onward; prior to this, the Trainer class was known as Cooltrainer. They generally use strong and evolved Pokémon." },
    { id: 8003, name: "Ace Trainer Cody", specialty: null, pokemon: [116, 117], image: "ace", description: "They are depicted as teens or young adults and can be male or female. The title Ace Trainer is used in Generation IV and onward; prior to this, the Trainer class was known as Cooltrainer. They generally use strong and evolved Pokémon." },
    { id: 8004, name: "Ace Trainer Fran", specialty: null, pokemon: [117], image: "ace", description: "They are depicted as teens or young adults and can be male or female. The title Ace Trainer is used in Generation IV and onward; prior to this, the Trainer class was known as Cooltrainer. They generally use strong and evolved Pokémon." },
    { id: 8005, name: "Ace Trainer Mike", specialty: null, pokemon: [148], image: "ace", description: "They are depicted as teens or young adults and can be male or female. The title Ace Trainer is used in Generation IV and onward; prior to this, the Trainer class was known as Cooltrainer. They generally use strong and evolved Pokémon." },

    { id: 9001, name: "Camper Jerry", specialty: null, pokemon: [112], image: "camper", description: "They are generally depicted as little boys in uniforms. Their female counterpart is Picnicker. They raise a variety of Pokémon, mainly those that would be found in the woods." },
    { id: 9002, name: "Hiker Edwin", specialty: null, pokemon: [76], image: "hiker", description: "They appear as large, typically bearded men carrying a walking stick and wearing hiking gear. In the following generations, they also carry a large backpack. They specialize in a combination of Fighting-, Ground-, and Rock-type Pokémon that are common in mountains and caves" },
    { id: 10001, name: "Sailor Parker", specialty: null, pokemon: [116, 117], image: "sailor", description: "Originally they were often depicted as burly men in sailor suits flexing their muscles, though their actual physical shape varies between games. They usually specialize in Water-type Pokémon, with the exception of using Raticate and the Machop evolution family." },
    { id: 10002, name: "Sailor Eddie", specialty: null, pokemon: [184], image: "sailor", description: "Originally they were often depicted as burly men in sailor suits flexing their muscles, though their actual physical shape varies between games. They usually specialize in Water-type Pokémon, with the exception of using Raticate and the Machop evolution family." },
    { id: 10003, name: "Swimmer Diana", specialty: null, pokemon: [55], image: "swimmer", description: "Swimmers are found in the sea, usually just off the coast, and in some Gyms" },
    { id: 10004, name: "Swimmer Joy", specialty: null, pokemon: [91], image: "swimmer", description: "Swimmers are found in the sea, usually just off the coast, and in some Gyms" },
    { id: 10005, name: "Swimmer Briana", specialty: null, pokemon: [119, 119], image: "swimmer", description: "Swimmers are found in the sea, usually just off the coast, and in some Gyms" },
    { id: 11001, name: "Juggler Horton", specialty: null, pokemon: [101, 101, 101], image: "juggler", description: " They are depicted as slim young men in flashy costumes, juggling Poké Balls. They specialize in using spherical Pokémon like Voltorb, as well as Psychic-type Pokémon, fitting with their class title and keeping with their circus theme, similar to the Clown class. They occasionally exhibit the behavior of constantly switching out their Pokémon in battle." },
    { id: 11002, name: "Guitarist Vincent", specialty: null, pokemon: [135, 100, 81], image: "guitarist", description: "They appear as young, blond men or (in Generation V only) black haired women, playing guitars. They specialize in Electric-type Pokémon, as they play electric guitars." },
    { id: 11003, name: "Gentleman Gregory", specialty: null, pokemon: [25, 180], image: "gentleman", description: "They generally use Pokémon based on pets - such as Growlithe, Manectric, or Chatot. They also tend to give out large amounts of money for winning." },
    { id: 12001, name: "Twins Jo & Zoe", specialty: null, pokemon: [71, 45], image: "twins", description: "They are two identical young girls. In Generation II, they fought in regular battles. In Generation III and beyond, they fight in Double Battles. In Generation VII, they are represented as a pair of female Preschoolers." },
    { id: 12002, name: "Picnicker Tanya", specialty: null, pokemon: [103], image: "picnicker", description: "They are generally depicted as younger girls in uniforms. Their male counterpart is Camper. They raise a variety of Pokémon." },
    { id: 12003, name: "Lass Michelle", specialty: null, pokemon: [188, 187, 189], image: "lass", description: "They are depicted as average young girls in clothing resembling school uniforms. Lasses appear to be the female counterparts of Youngsters, and they grow up to be Beauties." },
    { id: 12004, name: "Beauty Julia", specialty: null, pokemon: [46, 102, 47], image: "beauty", description: "They use a variety of Pokémon, but tend to use those that implement beauty and cuteness, and they typically pay out a lot of money when defeated." },
    { id: 13001, name: "Lass Linda", specialty: null, pokemon: [1, 2, 3], image: "lass", description: "They are depicted as average young girls in clothing resembling school uniforms. Lasses appear to be the female counterparts of Youngsters, and they grow up to be Beauties." },
    { id: 13002, name: "Picnicker Cindy", specialty: null, pokemon: [31], image: "picnicker", description: "They are generally depicted as younger girls in uniforms. Their male counterpart is Camper. They raise a variety of Pokémon." },
    { id: 13003, name: "Camper Barry", specialty: null, pokemon: [34], image: "camper", description: "They are generally depicted as little boys in uniforms. Their female counterpart is Picnicker. They raise a variety of Pokémon, mainly those that would be found in the woods." },
    { id: 13004, name: "Lass Alice", specialty: null, pokemon: [44, 24, 45], image: "lass", description: "They are depicted as average young girls in clothing resembling school uniforms. Lasses appear to be the female counterparts of Youngsters, and they grow up to be Beauties." },
    { id: 14001, name: "Medium Rebecca", specialty: null, pokemon: [96, 97], image: "medium", description: "They are depicted as old women with little ghosts floating around them in Generation II, and as old women with a large, lit candle in each hand in Generation IV. As their Japanese name suggests, they're based on blind female shamans from northern Japan who dress in a white kimono during their training for initiation (Itako)." },
    { id: 14002, name: "Psychic Jared", specialty: null, pokemon: [122, 102, 102], image: "psychic", description: "They appear as young men or young women levitating Poké Balls with their psychokinetic powers. As their name suggests, they specialize in Psychic-type Pokémon, though they occasionally also use Ghost-type Pokémon" },
    { id: 14003, name: "Medium Darcy", specialty: null, pokemon: [79, 80], image: "medium", description: "They are depicted as old women with little ghosts floating around them in Generation II, and as old women with a large, lit candle in each hand in Generation IV. As their Japanese name suggests, they're based on blind female shamans from northern Japan who dress in a white kimono during their training for initiation (Itako)." },
    { id: 14004, name: "Psychic Franklin", specialty: null, pokemon: [64, 203], image: "psychic", description: "They appear as young men or young women levitating Poké Balls with their psychokinetic powers. As their name suggests, they specialize in Psychic-type Pokémon, though they occasionally also use Ghost-type Pokémon" },
    { id: 15001, name: "Scientist Lowell", specialty: null, pokemon: [59], image: "scientist", description: "They generally use inorganic or artificial Pokémon such as Porygon, Muk, Voltorb, and Magnemite, but also Psychic-type Pokémon in Sinnoh- and Unova-based games." },
    { id: 15002, name: "Scientist Daniel", specialty: null, pokemon: [38], image: "scientist", description: "They generally use inorganic or artificial Pokémon such as Porygon, Muk, Voltorb, and Magnemite, but also Psychic-type Pokémon in Sinnoh- and Unova-based games." },
    { id: 15004, name: "Scientist Linden", specialty: null, pokemon: [126], image: "scientist", description: "They generally use inorganic or artificial Pokémon such as Porygon, Muk, Voltorb, and Magnemite, but also Psychic-type Pokémon in Sinnoh- and Unova-based games." },
    { id: 15005, name: "Super Nerd Merle", specialty: null, pokemon: [219], image: "supernerd", description: "They are generally depicted as skinny young men with long hair and glasses, and are grown-up male School Kids. They generally use a combination of Poison- and Electric-type Pokémon, except those in the Cinnabar Gym, who specialize in Fire-types instead." },
    { id: 16001, name: "Ace Trainer Arabella", specialty: null, pokemon: [234, 128], image: "ace", description: "They are depicted as teens or young adults and can be male or female. The title Ace Trainer is used in Generation IV and onward; prior to this, the Trainer class was known as Cooltrainer. They generally use strong and evolved Pokémon." },
    { id: 16002, name: "Ace Trainer Salma", specialty: null, pokemon: [199, 108], image: "ace", description: "They are depicted as teens or young adults and can be male or female. The title Ace Trainer is used in Generation IV and onward; prior to this, the Trainer class was known as Cooltrainer. They generally use strong and evolved Pokémon." },
    { id: 16003, name: "Ace Trainer Bonita", specialty: null, pokemon: [185], image: "ace", description: "They are depicted as teens or young adults and can be male or female. The title Ace Trainer is used in Generation IV and onward; prior to this, the Trainer class was known as Cooltrainer. They generally use strong and evolved Pokémon." },
    { id: 16004, name: "Double Team Elan & Ida", specialty: null, pokemon: [233, 184], image: "doubleteam", description: "They are depicted as a pair of male and female Ace Trainers. They use Pokémon of opposite genders and fight in Double Battles." },
]

export const gymLeaders: Array<Trainer> = [
    {id: 100001, name: "Falkner", specialty: "flying", pokemon: [16, 17], image: "falkner", description: "The Gym Leader of Violet City's Gym, known officially as the Violet Gym. He hands out the Zephyr Badge to Trainers who defeat him. He specializes in Flying-type Pokémon."},
    {id: 100002, name: "Bugsy", specialty: "bug", pokemon: [11, 14, 123], image: "bugsy", description: "The Gym Leader of Azalea Town's Gym, known officially as the Azalea Gym. He hands out the Hive Badge to Trainers who defeat him. He specializes in Bug-type Pokémon."},
    {id: 100003, name: "Whitney", specialty: "normal", pokemon: [35, 241], image: "whitney", description: "The Gym Leader of Goldenrod City's Gym, known officially as the Goldenrod Gym. She hands out the Plain Badge to Trainers who defeat her. She specializes in Normal-type Pokémon."},
    {id: 100004, name: "Morty", specialty: "ghost", pokemon: [92, 93, 93, 94], image: "morty", description: "The Gym Leader of Ecruteak City's Gym, known officially as the Ecruteak Gym. He hands out the Fog Badge to Trainers who defeat him. He specializes in Ghost-type Pokémon."},
    {id: 100005, name: "Chuck", specialty: "fighting", pokemon: [57, 62], image: "chuck", description: "The Gym Leader of Cianwood City's Gym, officially known as the Cianwood Gym. He specializes in Fighting-type Pokémon. Chuck gives out the Storm Badge to Trainers who defeat him."},
    {id: 100006, name: "Jasmine", specialty: "steel", pokemon: [81, 81, 208], image: "jasmine", description: "The Gym Leader of Olivine City's Gym, known officially as the Olivine Gym. She specializes in Steel-type Pokémon, and she gives the Mineral Badge to Trainers who defeat her in battle. She also appears in Sinnoh to give Trainers HM07 (Waterfall) and to compete in Sinnoh's Super Contests."},
    {id: 100007, name: "Pryce", specialty: "ice", pokemon: [86, 86, 221], image: "pryce", description: "The Gym Leader of Mahogany Town's Gym, known officially as the Mahogany Gym. He is an expert in Ice-type Pokémon. He gives the Glacier Badge to Trainers who defeat him at his Gym."},
    {id: 100008, name: "Clair", specialty: "dragon", pokemon: [148, 148, 148, 230], image: "clair", description: "The Gym Leader of Blackthorn City's Gym, known officially as the Blackthorn Gym. She specializes in Dragon-type Pokémon, and she gives the Rising Badge to Trainers who defeat her. Her cousin is Lance."},
    {id: 100009, name: "Brock", specialty: "rock", pokemon: [57, 111, 139, 141, 95], image: "brock", description: "The Gym Leader of Pewter City's Gym, known officially as the Pewter Gym. He specializes in Rock-type Pokémon. He gives the Boulder Badge to Trainers who defeat him."},
    {id: 100010, name: "Misty", specialty: "water", pokemon: [55, 195, 131, 121], image: "misty", description: "The Gym Leader of Cerulean City's Gym, known officially as the Cerulean Gym and a main character in the Pokémon TV show. She specializes in Water-type Pokémon. She gives the Cascade Badge to Trainers who defeat her."},
    {id: 100011, name: "Lt. Surge", specialty: "electric", pokemon: [26, 101, 101, 82, 125], image: "ltsurge", description: "The Gym Leader of Vermilion City's Gym, known officially as the Vermilion Gym. He specializes in Electric-type Pokémon. He gives the Thunder Badge to Trainers who defeat him."},
    {id: 100012, name: "Erika", specialty: "grass", pokemon: [114, 71, 189, 182], image: "erika", description: "The Gym Leader of Celadon City's Gym, known officially as the Celadon Gym. She specializes in Grass-type Pokémon. She gives the Rainbow Badge to Trainers who defeat her."},
    {id: 100013, name: "Janine", specialty: "poison", pokemon: [169, 110, 110, 168, 49], image: "janine", description: "The Gym Leader of Fuchsia City's Gym, known officially as the Fuchsia Gym. She became a Gym Leader after her father, Koga, was promoted to the Elite Four in Generation II. She specializes in Poison-type Pokémon. She gives the Soul Badge to Trainers who defeat her."},
    {id: 100014, name: "Sabrina", specialty: "psychic", pokemon: [196, 122, 65], image: "sabrina", description: "The Gym Leader of Saffron City's Gym, known officially as the Saffron Gym. She specializes in Psychic-type Pokémon. She gives the Marsh Badge to Trainers who defeat her."},
    {id: 100015, name: "Blaine", specialty: "fire", pokemon: [219, 126, 78], image: "blaine", description: "The Gym Leader of Cinnabar Island's (later the Seafoam Islands') Gym, known officially as the Cinnabar Gym. He specializes in Fire-type Pokémon. He gives the Volcano Badge to Trainers who defeat him."},
    {id: 100016, name: "Blue", specialty: "mixed", pokemon: [18, 65, 112, 130, 103, 59], image: "blue", description: "The rival of the player and the Champion in the Generation I games, as well as in Pokémon FireRed and LeafGreen, their Generation III remakes."},
]

export const eliteFour: Array<Trainer> = [
    {id: 400001, name: "Will", specialty: "psychic", pokemon: [178, 124, 80, 103, 178], image: "will", description: "A Psychic-type Trainer and member of the Indigo Elite Four. Will is noted for his peculiar appearance—formal clothes and a mask that covers his eyes."},
    {id: 400002, name: "Koga", specialty: "poison", pokemon: [168, 49, 205, 89, 169], image: "koga", description: "The Gym Leader of Fuchsia City's Gym also a member of team rocket the elite four . He was promoted to a master Poison-type Trainer, and became a member of the Johto Elite Four, leaving his daughter, Janine, in charge of the Fuchsia Gym. He specializes in Poison-type Pokémon."},
    {id: 400003, name: "Bruno", specialty: "fighting", pokemon: [237, 106, 107, 95, 68], image: "bruno", description: "A Fighting-type Trainer and member of the Indigo Elite Four." },
    {id: 400004, name: "Karen", specialty: "dark", pokemon: [197, 45, 198, 94, 229], image: "karen", description: "A Dark-type Trainer and member of the Indigo Elite Four." },
    {id: 400005, name: "Lance", specialty: "dragon", pokemon: [130, 149, 6, 142, 149, 149], image: "lance", description: " a Dragon-type Trainer, a member of the Indigo Elite Four in Generation I, Generation III, and Generation VII, and the Pokémon Champion of the Indigo Plateau in Generation II and Generation IV."}
]

export const TRAINER_IMAGES = {
  "will": {
    uri: require('../assets/trainers/will.png')
  },
  "bruno": {
    uri: require('../assets/trainers/bruno.png')
  },
  "karen": {
    uri: require('../assets/trainers/karen.png')
  },
  "lance": {
    uri: require('../assets/trainers/lance.png')
  },
  "falkner": {
    uri: require('../assets/trainers/falkner.png')
  },
  "bugsy": {
    uri: require('../assets/trainers/bugsy.png')
  },
  "whitney": {
    uri: require('../assets/trainers/bugsy.png')
  },
  "morty": {
    uri: require('../assets/trainers/bugsy.png')
  },
  "chuck": {
    uri: require('../assets/trainers/chuck.png')
  },
  "jasmine": {
    uri: require('../assets/trainers/jasmine.png')
  },
  "pryce": {
    uri: require('../assets/trainers/pryce.png')
  },
  "blue": {
    uri: require('../assets/trainers/blue.png')
  },
  "brock": {
    uri: require('../assets/trainers/brock.jpeg')
  },
  "clair": {
    uri: require('../assets/trainers/clair.png')
  },
  "misty": {
    uri: require('../assets/trainers/misty.jpeg')
  },
  "ltsurge": {
    uri: require('../assets/trainers/LtSurge.png')
  },
  "erika": {
    uri: require('../assets/trainers/erika.png')
  },
  "janine": {
    uri: require('../assets/trainers/janine.png')
  },
  "koga": {
    uri: require('../assets/trainers/koga.png')
  },
  "sabrina": {
    uri: require('../assets/trainers/sabrina.png')
  },
  "blaine": {
    uri: require('../assets/trainers/blaine.png')
  },
  "youngster": {
    uri: require('../assets/trainers/youngster.png')
  },
  "birdkeeper": {
    uri: require('../assets/trainers/birdkeeper.png')
  },
  "bugcatcher": {
    uri: require('../assets/trainers/bugcatcher.png')
  },
  "twins": {
    uri: require('../assets/trainers/twins.png')
  },
  "beauty": {
    uri: require('../assets/trainers/beauty.png')
  },
  "lass": {
    uri: require('../assets/trainers/lass.png')
  },
  "medium": {
    uri: require('../assets/trainers/medium.png')
  },
  "blackbelt": {
    uri: require('../assets/trainers/blackbelt.png')
  },
  "skier": {
    uri: require('../assets/trainers/skier.png')
  },
  "boarder": {
    uri: require('../assets/trainers/boarder.png')
  },
  "ace": {
    uri: require('../assets/trainers/ace.png')
  },
  "camper": {
    uri: require('../assets/trainers/camper.png')
  },
  "hiker": {
    uri: require('../assets/trainers/hiker.png')
  },
  "sailor": {
    uri: require('../assets/trainers/sailor.png')
  },
  "swimmer": {
    uri: require('../assets/trainers/swimmer.png')
  },
  "juggler": {
    uri: require('../assets/trainers/juggler.png')
  },
  "guitarist": {
    uri: require('../assets/trainers/guitarist.png')
  },
  "gentleman": {
    uri: require('../assets/trainers/gentleman.png')
  },
  "picnicker": {
    uri: require('../assets/trainers/picnicker.png')
  },
  "psychic": {
    uri: require('../assets/trainers/psychic.png')
  },
  "scientist": {
    uri: require('../assets/trainers/scientist.png')
  },
  "supernerd": {
    uri: require('../assets/trainers/supernerd.png')
  },
  "doubleteam": {
    uri: require('../assets/trainers/doubleteam.png')
  }
}

