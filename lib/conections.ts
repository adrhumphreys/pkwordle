import { ImportedConnectionGame } from "@/lib/types";

export const connections: ImportedConnectionGame[] = [
  {
    id: "1",
    name: "Connections #1",
    createdAt: "2023-06-12T00:00:00.000Z",
    board: {
      "WET WEATHER": { level: 0, members: ["HAIL", "RAIN", "SLEET", "SNOW"] },
      "NBA TEAMS": { level: 1, members: ["BUCKS", "HEAT", "JAZZ", "NETS"] },
      "KEYBOARD KEYS": {
        level: 2,
        members: ["OPTION", "RETURN", "SHIFT", "TAB"],
      },
      PALINDROMES: { level: 3, members: ["KAYAK", "LEVEL", "MOM", "RACECAR"] },
    },
    startingBoard: [
      ["SNOW", "LEVEL", "SHIFT", "KAYAK"],
      ["HEAT", "TAB", "BUCKS", "RETURN"],
      ["JAZZ", "HAIL", "OPTION", "RAIN"],
      ["SLEET", "RACECAR", "MOM", "NETS"],
    ],
  },
  {
    id: "2",
    name: "Connections #2",
    createdAt: "2023-06-13T00:00:00.000Z",
    board: {
      FOOTWEAR: { level: 0, members: ["BOOT", "LOAFER", "PUMP", "SNEAKER"] },
      "UNITS OF LENGTH": {
        level: 1,
        members: ["FOOT", "LEAGUE", "MILE", "YARD"],
      },
      MAGAZINES: { level: 2, members: ["ESSENCE", "PEOPLE", "TIME", "US"] },
      "LETTER HOMOPHONES": {
        level: 3,
        members: ["ARE", "QUEUE", "SEA", "WHY"],
      },
    },
    startingBoard: [
      ["PUMP", "FOOT", "TIME", "SEA"],
      ["LEAGUE", "LOAFER", "WHY", "US"],
      ["BOOT", "YARD", "PEOPLE", "ARE"],
      ["MILE", "SNEAKER", "QUEUE", "ESSENCE"],
    ],
  },
  {
    id: "3",
    name: "Connections #3",
    createdAt: "2023-06-14T00:00:00.000Z",
    board: {
      "FACIAL FEATURES": {
        level: 0,
        members: ["CHEEK", "EYE", "MOUTH", "NOSE"],
      },
      "SYNONYMS FOR EAT": {
        level: 1,
        members: ["CHOW", "GOBBLE", "SCARF", "WOLF"],
      },
      "DOG BREEDS, INFORMALLY": {
        level: 2,
        members: ["LAB", "PEKE", "PIT", "POM"],
      },
      "MEMBERS OF A TRIO": {
        level: 3,
        members: ["AMIGO", "KING", "STOOGE", "TENOR"],
      },
    },
    startingBoard: [
      ["AMIGO", "MOUTH", "LAB", "STOOGE"],
      ["WOLF", "KING", "NOSE", "CHOW"],
      ["TENOR", "POM", "SCARF", "EYE"],
      ["PIT", "GOBBLE", "PEKE", "CHEEK"],
    ],
  },
  {
    id: "4",
    name: "Connections #4",
    createdAt: "2023-06-15T00:00:00.000Z",
    board: {
      "SNEAKER BRANDS": {
        level: 0,
        members: ["ADIDAS", "NIKE", "PUMA", "REEBOK"],
      },
      "MUSICALS BEGINNING WITH “C”": {
        level: 1,
        members: ["CABARET", "CAROUSEL", "CATS", "CHICAGO"],
      },
      "CLEANING VERBS": {
        level: 2,
        members: ["DUST", "MOP", "SWEEP", "VACUUM"],
      },
      "___ MAN SUPERHEROES": {
        level: 3,
        members: ["BAT", "IRON", "SPIDER", "SUPER"],
      },
    },
    startingBoard: [
      ["DUST", "CATS", "SPIDER", "CAROUSEL"],
      ["PUMA", "IRON", "NIKE", "MOP"],
      ["CHICAGO", "SWEEP", "SUPER", "BAT"],
      ["REEBOK", "CABARET", "VACUUM", "ADIDAS"],
    ],
  },
  {
    id: "5",
    name: "Connections #5",
    createdAt: "2023-06-16T00:00:00.000Z",
    board: {
      "STREAMING SERVICES": {
        level: 0,
        members: ["HULU", "NETFLIX", "PEACOCK", "PRIME"],
      },
      CONDIMENTS: {
        level: 1,
        members: ["KETCHUP", "MAYO", "RELISH", "TARTAR"],
      },
      "SYNONYMS FOR SAD": {
        level: 2,
        members: ["BLUE", "DOWN", "GLUM", "LOW"],
      },
      "CLUE CHARACTERS": {
        level: 3,
        members: ["GREEN", "MUSTARD", "PLUM", "SCARLET"],
      },
    },
    startingBoard: [
      ["MUSTARD", "TARTAR", "PLUM", "BLUE"],
      ["GREEN", "PRIME", "GLUM", "RELISH"],
      ["DOWN", "PEACOCK", "KETCHUP", "LOW"],
      ["HULU", "SCARLET", "MAYO", "NETFLIX"],
    ],
  },
  {
    id: "6",
    name: "Connections #6",
    createdAt: "2023-06-17T00:00:00.000Z",
    board: {
      "MONOPOLY SQUARES": {
        level: 0,
        members: ["BOARDWALK", "CHANCE", "GO", "JAIL"],
      },
      "SHADES OF BLUE": {
        level: 1,
        members: ["BABY", "MIDNIGHT", "POWDER", "ROYAL"],
      },
      RAPPERS: { level: 2, members: ["COMMON", "FUTURE", "ICE CUBE", "Q-TIP"] },
      "MEMBERS OF A SEPTET": {
        level: 3,
        members: ["SEA", "SIN", "SISTER", "WONDER"],
      },
    },
    startingBoard: [
      ["WONDER", "FUTURE", "BABY", "GO"],
      ["SIN", "CHANCE", "ROYAL", "ICE CUBE"],
      ["MIDNIGHT", "JAIL", "SEA", "POWDER"],
      ["Q-TIP", "SISTER", "BOARDWALK", "COMMON"],
    ],
  },
  {
    id: "7",
    name: "Connections #7",
    createdAt: "2023-06-18T00:00:00.000Z",
    board: {
      "LEG PARTS": { level: 0, members: ["ANKLE", "KNEE", "SHIN", "THIGH"] },
      "BABY ANIMALS": { level: 1, members: ["CALF", "CUB", "JOEY", "KID"] },
      "SLANG FOR TOILET": {
        level: 2,
        members: ["CAN", "HEAD", "JOHN", "THRONE"],
      },
      "___ FISH THAT AREN’T FISH": {
        level: 3,
        members: ["CRAY", "JELLY", "SILVER", "STAR"],
      },
    },
    startingBoard: [
      ["JOHN", "CUB", "STAR", "SILVER"],
      ["KNEE", "THRONE", "JOEY", "JELLY"],
      ["CALF", "ANKLE", "CRAY", "HEAD"],
      ["SHIN", "CAN", "KID", "THIGH"],
    ],
  },
  {
    id: "8",
    name: "Connections #8",
    createdAt: "2023-06-19T00:00:00.000Z",
    board: {
      "BOARD GAMES": {
        level: 0,
        members: ["BACKGAMMON", "CHECKERS", "CHESS", "GO"],
      },
      "MATTRESS SIZES": {
        level: 1,
        members: ["FULL", "KING", "QUEEN", "TWIN"],
      },
      "THINGS THAT ARE RED": {
        level: 2,
        members: ["CHERRY", "FIRE TRUCK", "RUBY", "STOP SIGN"],
      },
      "THINGS WITH KEYS": {
        level: 3,
        members: ["CRYPTOGRAPHY", "FLORIDA", "LOCKSMITH", "PIANO"],
      },
    },
    startingBoard: [
      ["LOCKSMITH", "FIRE TRUCK", "KING", "PIANO"],
      ["CHESS", "RUBY", "FLORIDA", "TWIN"],
      ["CHERRY", "QUEEN", "STOP SIGN", "GO"],
      ["CHECKERS", "CRYPTOGRAPHY", "FULL", "BACKGAMMON"],
    ],
  },
  {
    id: "9",
    name: "Connections #9",
    createdAt: "2023-06-20T00:00:00.000Z",
    board: {
      SPORTS: { level: 0, members: ["CRICKET", "FENCING", "POLO", "SQUASH"] },
      TOPS: { level: 1, members: ["CAMI", "HALTER", "TANK", "TEE"] },
      VEGETABLES: { level: 2, members: ["BEET", "CARROT", "CORN", "ONION"] },
      INSECTS: { level: 3, members: ["ANT", "BEETLE", "MANTIS", "TERMITE"] },
    },
    startingBoard: [
      ["SQUASH", "TEE", "CARROT", "ANT"],
      ["TANK", "CORN", "CRICKET", "MANTIS"],
      ["POLO", "ONION", "BEETLE", "BEET"],
      ["CAMI", "TERMITE", "HALTER", "FENCING"],
    ],
  },
  {
    id: "10",
    name: "Connections #10",
    createdAt: "2023-06-21T00:00:00.000Z",
    board: {
      FRUIT: { level: 0, members: ["DATE", "KIWI", "LEMON", "ORANGE"] },
      COUNTRIES: { level: 1, members: ["CHAD", "GEORGIA", "JORDAN", "TOGO"] },
      BIRDS: { level: 2, members: ["CRANE", "JAY", "SWALLOW", "TURKEY"] },
      "ZODIAC SYMBOLS": {
        level: 3,
        members: ["FISH", "GOAT", "SCALES", "TWINS"],
      },
    },
    startingBoard: [
      ["TWINS", "TURKEY", "GOAT", "KIWI"],
      ["SCALES", "FISH", "JORDAN", "JAY"],
      ["ORANGE", "GEORGIA", "DATE", "CRANE"],
      ["TOGO", "SWALLOW", "LEMON", "CHAD"],
    ],
  },
  {
    id: "11",
    name: "Connections #11",
    createdAt: "2023-06-22T00:00:00.000Z",
    board: {
      "SPICES BEGINNING WITH “C”": {
        level: 0,
        members: ["CARDAMOM", "CLOVE", "CORIANDER", "CUMIN"],
      },
      "TERMS OF ENDEARMENT": {
        level: 1,
        members: ["BOO", "HONEY", "SUGAR", "SWEETIE"],
      },
      "THINGS WITH WINGS": {
        level: 2,
        members: ["AIRPLANE", "ANGEL", "BIRD", "PEGASUS"],
      },
      "SPICE GIRLS": { level: 3, members: ["BABY", "GINGER", "POSH", "SCARY"] },
    },
    startingBoard: [
      ["SUGAR", "ANGEL", "GINGER", "BIRD"],
      ["BABY", "CUMIN", "BOO", "SCARY"],
      ["SWEETIE", "CORIANDER", "AIRPLANE", "CLOVE"],
      ["PEGASUS", "HONEY", "CARDAMOM", "POSH"],
    ],
  },
  {
    id: "12",
    name: "Connections #12",
    createdAt: "2023-06-23T00:00:00.000Z",
    board: {
      "ANIMAL GROUP NAMES": {
        level: 0,
        members: ["FLOCK", "PACK", "POD", "SCHOOL"],
      },
      "DEADLY SINS": { level: 1, members: ["ENVY", "GREED", "LUST", "PRIDE"] },
      "SLOW ANIMALS": {
        level: 2,
        members: ["LORIS", "SLOTH", "SNAIL", "TORTOISE"],
      },
      "TRIG FUNCTIONS": { level: 3, members: ["COT", "SEC", "SIN", "TAN"] },
    },
    startingBoard: [
      ["LUST", "PRIDE", "TAN", "SCHOOL"],
      ["SLOTH", "SEC", "PACK", "COT"],
      ["SNAIL", "GREED", "SIN", "FLOCK"],
      ["POD", "LORIS", "ENVY", "TORTOISE"],
    ],
  },
  {
    id: "13",
    name: "Connections #13",
    createdAt: "2023-06-24T00:00:00.000Z",
    board: {
      AIRLINES: {
        level: 0,
        members: ["FRONTIER", "SPIRIT", "UNITED", "VIRGIN"],
      },
      "GREEK LETTERS": { level: 1, members: ["BETA", "CHI", "DELTA", "IOTA"] },
      "SILENT “G”": { level: 2, members: ["GNAT", "GNAW", "GNOCCHI", "GNOME"] },
      HOMOPHONES: { level: 3, members: ["GNU", "KNEW", "NEW", "NU"] },
    },
    startingBoard: [
      ["KNEW", "GNOME", "IOTA", "FRONTIER"],
      ["DELTA", "CHI", "GNOCCHI", "NEW"],
      ["SPIRIT", "BETA", "VIRGIN", "GNAW"],
      ["NU", "GNAT", "UNITED", "GNU"],
    ],
  },
  {
    id: "14",
    name: "Connections #14",
    createdAt: "2023-06-25T00:00:00.000Z",
    board: {
      BEDS: { level: 0, members: ["BUNK", "CANOPY", "MURPHY", "TRUNDLE"] },
      "FAMOUS BROTHERS": {
        level: 1,
        members: ["JONAS", "MARX", "WARNER", "WRIGHT"],
      },
      HONDAS: { level: 2, members: ["ACCORD", "CIVIC", "PASSPORT", "PILOT"] },
      "VIDEO GAME CHARACTERS": {
        level: 3,
        members: ["CRASH", "LINK", "MARIO", "SONIC"],
      },
    },
    startingBoard: [
      ["CANOPY", "LINK", "PASSPORT", "MARX"],
      ["PILOT", "SONIC", "WRIGHT", "ACCORD"],
      ["MURPHY", "CRASH", "CIVIC", "BUNK"],
      ["MARIO", "JONAS", "TRUNDLE", "WARNER"],
    ],
  },
  {
    id: "15",
    name: "Connections #15",
    createdAt: "2023-06-26T00:00:00.000Z",
    board: {
      "BIRD SOUNDS": { level: 0, members: ["CAW", "CHIRP", "CLUCK", "TWEET"] },
      COLORS: { level: 1, members: ["BROWN", "PINK", "TURQUOISE", "VIOLET"] },
      "FISHING GEAR": { level: 2, members: ["LURE", "REEL", "ROD", "TACKLE"] },
      "FICTIONAL PIRATES": {
        level: 3,
        members: ["HOOK", "JONES", "SILVER", "SPARROW"],
      },
    },
    startingBoard: [
      ["SILVER", "TWEET", "ROD", "SPARROW"],
      ["BROWN", "TACKLE", "HOOK", "PINK"],
      ["CAW", "JONES", "VIOLET", "REEL"],
      ["TURQUOISE", "CHIRP", "LURE", "CLUCK"],
    ],
  },
  {
    id: "16",
    name: "Connections #16",
    createdAt: "2023-06-27T00:00:00.000Z",
    board: {
      "COFFEE DRINKS": {
        level: 0,
        members: ["AMERICANO", "CAPPUCCINO", "ESPRESSO", "LATTE"],
      },
      "TREE NUTS": {
        level: 1,
        members: ["ALMOND", "CASHEW", "PECAN", "WALNUT"],
      },
      "SHADES OF GREEN": {
        level: 2,
        members: ["EMERALD", "FOREST", "KELLY", "OLIVE"],
      },
      "MR. ___": { level: 3, members: ["BEAN", "CLEAN", "FOX", "PEANUT"] },
    },
    startingBoard: [
      ["BEAN", "ESPRESSO", "ALMOND", "FOREST"],
      ["PECAN", "CLEAN", "KELLY", "LATTE"],
      ["PEANUT", "EMERALD", "AMERICANO", "FOX"],
      ["OLIVE", "WALNUT", "CAPPUCCINO", "CASHEW"],
    ],
  },
  {
    id: "17",
    name: "Connections #17",
    createdAt: "2023-06-28T00:00:00.000Z",
    board: {
      NECKWEAR: { level: 0, members: ["ASCOT", "BOLO", "SCARF", "TIE"] },
      "SHIP DIRECTIONS": {
        level: 1,
        members: ["BOW", "PORT", "STARBOARD", "STERN"],
      },
      DETERGENTS: { level: 2, members: ["ALL", "ERA", "GAIN", "TIDE"] },
      "___ TRIANGLE": {
        level: 3,
        members: ["ACUTE", "BERMUDA", "LOVE", "RIGHT"],
      },
    },
    startingBoard: [
      ["TIDE", "BERMUDA", "STERN", "SCARF"],
      ["LOVE", "ASCOT", "GAIN", "BOW"],
      ["RIGHT", "ERA", "PORT", "BOLO"],
      ["ACUTE", "TIE", "ALL", "STARBOARD"],
    ],
  },
  {
    id: "18",
    name: "Connections #18",
    createdAt: "2023-06-29T00:00:00.000Z",
    board: {
      "MUSCLES, INFORMALLY": {
        level: 0,
        members: ["LAT", "PEC", "QUAD", "TRI"],
      },
      AWARDS: { level: 1, members: ["CUP", "MEDAL", "RIBBON", "TROPHY"] },
      "TITLE TV DOCTORS": {
        level: 2,
        members: ["GREY", "HOUSE", "HOWSER", "QUINN"],
      },
      "NFL PLAYERS": {
        level: 3,
        members: ["BEAR", "BILL", "BROWN", "COMMANDER"],
      },
    },
    startingBoard: [
      ["GREY", "CUP", "BILL", "RIBBON"],
      ["QUAD", "BEAR", "HOUSE", "LAT"],
      ["QUINN", "TRI", "MEDAL", "COMMANDER"],
      ["BROWN", "TROPHY", "PEC", "HOWSER"],
    ],
  },
  {
    id: "19",
    name: "Connections #19",
    createdAt: "2023-06-30T00:00:00.000Z",
    board: {
      "OFF-WHITE SHADES": {
        level: 0,
        members: ["CREAM", "EGGSHELL", "IVORY", "VANILLA"],
      },
      "ANTI-VAMPIRE": {
        level: 1,
        members: ["CRUCIFIX", "GARLIC", "MIRROR", "STAKE"],
      },
      "KINDS OF MEAT": {
        level: 2,
        members: ["BEEF", "PORK", "POULTRY", "VENISON"],
      },
      "SYNONYMS FOR ARGUMENT": {
        level: 3,
        members: ["ROW", "QUARREL", "SPAT", "TIFF"],
      },
    },
    startingBoard: [
      ["CREAM", "GARLIC", "PORK", "ROW"],
      ["MIRROR", "BEEF", "SPAT", "EGGSHELL"],
      ["POULTRY", "STAKE", "TIFF", "VANILLA"],
      ["IVORY", "QUARREL", "VENISON", "CRUCIFIX"],
    ],
  },
  {
    id: "20",
    name: "Connections #20",
    createdAt: "2023-07-01T00:00:00.000Z",
    board: {
      GRAINS: { level: 0, members: ["BARLEY", "OAT", "RYE", "SPELT"] },
      "ROYAL TITLES": {
        level: 1,
        members: ["BARON", "EARL", "KING", "PRINCE"],
      },
      UNIVERSITIES: { level: 2, members: ["BROWN", "DUKE", "HOWARD", "RICE"] },
      "BEST DIRECTOR OSCAR WINNERS": {
        level: 3,
        members: ["BONG", "FORD", "LEE", "STONE"],
      },
    },
    startingBoard: [
      ["KING", "OAT", "STONE", "RICE"],
      ["BARLEY", "BONG", "DUKE", "FORD"],
      ["BROWN", "SPELT", "LEE", "EARL"],
      ["HOWARD", "BARON", "RYE", "PRINCE"],
    ],
  },
  {
    id: "21",
    name: "Connections #21",
    createdAt: "2023-07-02T00:00:00.000Z",
    board: {
      "MUSIC GENRES": { level: 0, members: ["JAZZ", "POP", "PUNK", "RAP"] },
      "WEB BROWSERS": {
        level: 1,
        members: ["CHROME", "EDGE", "OPERA", "SAFARI"],
      },
      "“LITTLE WOMEN” SISTERS": {
        level: 2,
        members: ["AMY", "BETH", "JO", "MEG"],
      },
      "LIL ___ RAPPERS": { level: 3, members: ["BABY", "JON", "KIM", "WAYNE"] },
    },
    startingBoard: [
      ["OPERA", "BABY", "WAYNE", "JO"],
      ["POP", "MEG", "SAFARI", "KIM"],
      ["RAP", "CHROME", "BETH", "JAZZ"],
      ["PUNK", "JON", "AMY", "EDGE"],
    ],
  },
  {
    id: "22",
    name: "Connections #22",
    createdAt: "2023-07-03T00:00:00.000Z",
    board: {
      "DOG BREEDS": {
        level: 0,
        members: ["BOXER", "DALMATIAN", "HUSKY", "POODLE"],
      },
      "ANIMAL NOSES": {
        level: 1,
        members: ["BEAK", "MUZZLE", "SNOUT", "TRUNK"],
      },
      "TRAFFIC SIGNS": {
        level: 2,
        members: ["DETOUR", "SLOW", "STOP", "YIELD"],
      },
      "SOUND ___": { level: 3, members: ["ASLEEP", "BARRIER", "BITE", "WAVE"] },
    },
    startingBoard: [
      ["BITE", "STOP", "TRUNK", "BOXER"],
      ["WAVE", "YIELD", "MUZZLE", "BARRIER"],
      ["DETOUR", "HUSKY", "SNOUT", "ASLEEP"],
      ["DALMATIAN", "BEAK", "SLOW", "POODLE"],
    ],
  },
  {
    id: "23",
    name: "Connections #23",
    createdAt: "2023-07-04T00:00:00.000Z",
    board: {
      "60’s BAND MEMBERS": {
        level: 0,
        members: ["BEACH BOY", "BEATLE", "BYRD", "MONKEE"],
      },
      "DANCE FADS": {
        level: 1,
        members: ["DOUGIE", "MACARENA", "MASHED POTATO", "TWIST"],
      },
      MAGAZINES: {
        level: 2,
        members: ["FORTUNE", "ROLLING STONE", "VOGUE", "WIRED"],
      },
      "THINGS WITH LINKS": {
        level: 3,
        members: ["CHAIN", "GOLF COURSE", "SAUSAGE", "WEBSITE"],
      },
    },
    startingBoard: [
      ["BEACH BOY", "TWIST", "CHAIN", "ROLLING STONE"],
      ["MASHED POTATO", "WIRED", "WEBSITE", "BEATLE"],
      ["SAUSAGE", "BYRD", "DOUGIE", "FORTUNE"],
      ["MACARENA", "VOGUE", "GOLF COURSE", "MONKEE"],
    ],
  },
  {
    id: "24",
    name: "Connections #24",
    createdAt: "2023-07-05T00:00:00.000Z",
    board: {
      "CANDY BARS": {
        level: 0,
        members: ["BOUNTY", "CRUNCH", "HEATH", "MILKY WAY"],
      },
      "VIDEO GAME CONSOLES": {
        level: 1,
        members: ["DREAMCAST", "GENESIS", "SWITCH", "WII"],
      },
      "EAR PARTS": {
        level: 2,
        members: ["ANVIL", "COCHLEA", "HAMMER", "STIRRUP"],
      },
      "BAND NAMES MINUS NUMBERS": {
        level: 3,
        members: ["BLINK", "MAROON", "SUM", "U"],
      },
    },
    startingBoard: [
      ["MILKY WAY", "GENESIS", "HAMMER", "SUM"],
      ["SWITCH", "MAROON", "BOUNTY", "U"],
      ["ANVIL", "CRUNCH", "BLINK", "STIRRUP"],
      ["HEATH", "WII", "COCHLEA", "DREAMCAST"],
    ],
  },
  {
    id: "25",
    name: "Connections #25",
    createdAt: "2023-07-06T00:00:00.000Z",
    board: {
      DESSERTS: {
        level: 0,
        members: ["CHEESECAKE", "FLAN", "MOUSSE", "TIRAMISU"],
      },
      "MILD OATHS": { level: 1, members: ["DARN", "FUDGE", "HECK", "SHOOT"] },
      "ANIMALS WITH TUSKS": {
        level: 2,
        members: ["ELEPHANT", "HIPPO", "NARWHAL", "WARTHOG"],
      },
      MUSTACHES: {
        level: 3,
        members: ["HANDLEBAR", "HORSESHOE", "PENCIL", "WALRUS"],
      },
    },
    startingBoard: [
      ["MOUSSE", "WALRUS", "FUDGE", "HORSESHOE"],
      ["SHOOT", "PENCIL", "ELEPHANT", "FLAN"],
      ["NARWHAL", "HIPPO", "HECK", "HANDLEBAR"],
      ["TIRAMISU", "DARN", "WARTHOG", "CHEESECAKE"],
    ],
  },
  {
    id: "26",
    name: "Connections #26",
    createdAt: "2023-07-07T00:00:00.000Z",
    board: {
      "EUROPEAN COUNTRIES": {
        level: 0,
        members: ["DENMARK", "GREECE", "POLAND", "PORTUGAL"],
      },
      "SYNONYMS FOR IMITATE": {
        level: 1,
        members: ["COPY", "ECHO", "MIMIC", "PARROT"],
      },
      TOMS: { level: 2, members: ["CRUISE", "HOLLAND", "PETTY", "WAITS"] },
      "WORDS SPELLED WITH ROMAN NUMERALS": {
        level: 3,
        members: ["DILL", "LIVID", "MILD", "MIX"],
      },
    },
    startingBoard: [
      ["PETTY", "PARROT", "POLAND", "CRUISE"],
      ["MIX", "MIMIC", "HOLLAND", "GREECE"],
      ["ECHO", "MILD", "LIVID", "COPY"],
      ["PORTUGAL", "WAITS", "DENMARK", "DILL"],
    ],
  },
  {
    id: "27",
    name: "Connections #27",
    createdAt: "2023-07-08T00:00:00.000Z",
    board: {
      HATS: { level: 0, members: ["BERET", "BOWLER", "FEDORA", "FEZ"] },
      ORGANS: { level: 1, members: ["HEART", "KIDNEY", "LIVER", "LUNG"] },
      "PARTS OF A BOOK": {
        level: 2,
        members: ["COVER", "JACKET", "PAGE", "SPINE"],
      },
      "JACK ___": { level: 3, members: ["ASS", "KNIFE", "POT", "RABBIT"] },
    },
    startingBoard: [
      ["HEART", "BERET", "SPINE", "POT"],
      ["ASS", "KIDNEY", "FEZ", "JACKET"],
      ["BOWLER", "RABBIT", "LIVER", "COVER"],
      ["LUNG", "PAGE", "FEDORA", "KNIFE"],
    ],
  },
  {
    id: "28",
    name: "Connections #28",
    createdAt: "2023-07-09T00:00:00.000Z",
    board: {
      "SEVEN DWARFS": {
        level: 0,
        members: ["BASHFUL", "DOC", "GRUMPY", "HAPPY"],
      },
      "FILE EXTENSIONS": { level: 1, members: ["GIF", "PDF", "TIFF", "ZIP"] },
      "FLIGHTLESS BIRDS": {
        level: 2,
        members: ["EMU", "KIWI", "OSTRICH", "PENGUIN"],
      },
      "TROPICAL FRUITS": {
        level: 3,
        members: ["BANANA", "COCONUT", "MANGO", "PINEAPPLE"],
      },
    },
    startingBoard: [
      ["COCONUT", "ZIP", "PENGUIN", "DOC"],
      ["KIWI", "HAPPY", "TIFF", "BANANA"],
      ["EMU", "GRUMPY", "MANGO", "GIF"],
      ["PDF", "OSTRICH", "BASHFUL", "PINEAPPLE"],
    ],
  },
  {
    id: "29",
    name: "Connections #29",
    createdAt: "2023-07-10T00:00:00.000Z",
    board: {
      "WINGED INSECTS": { level: 0, members: ["FLY", "GNAT", "MOTH", "WASP"] },
      "ARITHMETIC OPERATIONS": {
        level: 1,
        members: ["ADD", "DIVIDE", "MULTIPLY", "SUBTRACT"],
      },
      FISH: { level: 2, members: ["TANG", "TETRA", "SKATE", "SOLE"] },
      "___ CAT": { level: 3, members: ["ALLEY", "COOL", "COPY", "LAP"] },
    },
    startingBoard: [
      ["SKATE", "ADD", "COPY", "FLY"],
      ["ALLEY", "TANG", "MOTH", "COOL"],
      ["DIVIDE", "SOLE", "LAP", "SUBTRACT"],
      ["TETRA", "GNAT", "MULTIPLY", "WASP"],
    ],
  },
  {
    id: "30",
    name: "Connections #30",
    createdAt: "2023-07-11T00:00:00.000Z",
    board: {
      "NFL PLAYERS": {
        level: 0,
        members: ["BRONCO", "COWBOY", "PACKER", "RAVEN"],
      },
      "PASTA SHAPES": {
        level: 1,
        members: ["BOWTIE", "ELBOW", "SHELL", "SPIRAL"],
      },
      JOINTS: { level: 2, members: ["HIP", "KNEE", "SHOULDER", "WRIST"] },
      "MOVIES WITH “!”": {
        level: 3,
        members: ["AIRPLANE", "MOTHER", "OKLAHOMA", "THEM"],
      },
    },
    startingBoard: [
      ["SPIRAL", "HIP", "MOTHER", "RAVEN"],
      ["ELBOW", "AIRPLANE", "KNEE", "SHELL"],
      ["COWBOY", "SHOULDER", "OKLAHOMA", "BOWTIE"],
      ["THEM", "PACKER", "WRIST", "BRONCO"],
    ],
  },
  {
    id: "31",
    name: "Connections #31",
    createdAt: "2023-07-12T00:00:00.000Z",
    board: {
      "VEGETABLES THAT ARE ALSO FRUITS": {
        level: 0,
        members: ["CUCUMBER", "EGGPLANT", "PEPPER", "TOMATO"],
      },
      "3-D SHAPES": {
        level: 1,
        members: ["CONE", "CUBE", "PYRAMID", "SPHERE"],
      },
      "WORDS WITH “i”": { level: 2, members: ["MAC", "PAD", "PHONE", "POD"] },
      "WORDS WITH TWO PRONUNCIATIONS": {
        level: 3,
        members: ["JOB", "LIMA", "MOBILE", "POLISH"],
      },
    },
    startingBoard: [
      ["PAD", "LIMA", "CONE", "TOMATO"],
      ["POLISH", "PEPPER", "PHONE", "PYRAMID"],
      ["CUBE", "MOBILE", "JOB", "CUCUMBER"],
      ["EGGPLANT", "MAC", "SPHERE", "POD"],
    ],
  },
  {
    id: "32",
    name: "Connections #32",
    createdAt: "2023-07-13T00:00:00.000Z",
    board: {
      "SHOE PARTS": { level: 0, members: ["HEEL", "LACE", "SOLE", "TONGUE"] },
      "BOARD GAMES": {
        level: 1,
        members: ["CLUE", "RISK", "SORRY", "TROUBLE"],
      },
      "FICTIONAL SPIES": {
        level: 2,
        members: ["BOND", "HUNT", "RYAN", "SMART"],
      },
      "RUBBER ___": { level: 3, members: ["BAND", "CEMENT", "DUCKIE", "SOUL"] },
    },
    startingBoard: [
      ["SOLE", "TROUBLE", "HUNT", "CEMENT"],
      ["SMART", "TONGUE", "SOUL", "BOND"],
      ["LACE", "BAND", "SORRY", "RYAN"],
      ["CLUE", "HEEL", "DUCKIE", "RISK"],
    ],
  },
  {
    id: "33",
    name: "Connections #33",
    createdAt: "2023-07-14T00:00:00.000Z",
    board: {
      BOATS: { level: 0, members: ["FERRY", "JUNK", "TUG", "YACHT"] },
      SANDWICHES: { level: 1, members: ["CLUB", "CUBAN", "MELT", "SUB"] },
      "CUTS OF BEEF": {
        level: 2,
        members: ["FLANK", "LOIN", "ROUND", "SHANK"],
      },
      "NICKNAMES THAT ARE VERBS": {
        level: 3,
        members: ["CHUCK", "JOSH", "ROB", "SUE"],
      },
    },
    startingBoard: [
      ["TUG", "CHUCK", "JUNK", "CLUB"],
      ["SHANK", "ROB", "SUB", "FLANK"],
      ["CUBAN", "FERRY", "LOIN", "SUE"],
      ["JOSH", "ROUND", "MELT", "YACHT"],
    ],
  },
  {
    id: "34",
    name: "Connections #34",
    createdAt: "2023-07-15T00:00:00.000Z",
    board: {
      "PLEASANT SMELLS": {
        level: 0,
        members: ["AROMA", "BOUQUET", "FRAGRANCE", "SCENT"],
      },
      "MUSIC GENRES": {
        level: 1,
        members: ["BLUES", "COUNTRY", "FUNK", "SOUL"],
      },
      "ROCK PAPER SCISSORS": {
        level: 2,
        members: ["PAPER", "ROCK", "SCISSORS", "SHOOT"],
      },
      "MALE ANIMALS": { level: 3, members: ["BOAR", "BUCK", "BULL", "JACK"] },
    },
    startingBoard: [
      ["ROCK", "FUNK", "BUCK", "BOUQUET"],
      ["SHOOT", "BULL", "COUNTRY", "JACK"],
      ["SOUL", "SCENT", "SCISSORS", "BOAR"],
      ["FRAGRANCE", "PAPER", "BLUES", "AROMA"],
    ],
  },
  {
    id: "35",
    name: "Connections #35",
    createdAt: "2023-07-16T00:00:00.000Z",
    board: {
      "U.S. COINS": {
        level: 0,
        members: ["DIME", "NICKEL", "PENNY", "QUARTER"],
      },
      "METAL ELEMENTS": { level: 1, members: ["IRON", "LEAD", "TIN", "ZINC"] },
      "LUCKY CHARMS MARSHMALLOWS": {
        level: 2,
        members: ["CLOVER", "HORSESHOE", "MOON", "RAINBOW"],
      },
      "___ AND ___": { level: 3, members: ["AGAIN", "HALF", "NECK", "SO"] },
    },
    startingBoard: [
      ["NICKEL", "HALF", "HORSESHOE", "TIN"],
      ["RAINBOW", "QUARTER", "NECK", "LEAD"],
      ["PENNY", "CLOVER", "IRON", "SO"],
      ["ZINC", "AGAIN", "DIME", "MOON"],
    ],
  },
  {
    id: "36",
    name: "Connections #36",
    createdAt: "2023-07-17T00:00:00.000Z",
    board: {
      MARSUPIALS: {
        level: 0,
        members: ["KANGAROO", "KOALA", "WALLABY", "WOMBAT"],
      },
      "CHOCOLATE BARS": {
        level: 1,
        members: ["CHUNKY", "CRUNCH", "MARS", "MOUNDS"],
      },
      "SLANG FOR MONEY": {
        level: 2,
        members: ["CHEDDAR", "DOUGH", "PAPER", "STACKS"],
      },
      "NAKED ___": { level: 3, members: ["EYE", "GUN", "MOLE RAT", "TRUTH"] },
    },
    startingBoard: [
      ["EYE", "MARS", "PAPER", "TRUTH"],
      ["WOMBAT", "GUN", "MOLE RAT", "CHUNKY"],
      ["CHEDDAR", "CRUNCH", "KANGAROO", "DOUGH"],
      ["KOALA", "STACKS", "MOUNDS", "WALLABY"],
    ],
  },
  {
    id: "37",
    name: "Connections #37",
    createdAt: "2023-07-18T00:00:00.000Z",
    board: {
      "MARINE MAMMALS": {
        level: 0,
        members: ["DOLPHIN", "MANATEE", "OTTER", "SEAL"],
      },
      "BIKE PARTS": {
        level: 1,
        members: ["BRAKE", "CHAIN", "SADDLE", "SPOKE"],
      },
      "SYNONYMS FOR SELL": {
        level: 2,
        members: ["HAWK", "MOVE", "PEDDLE", "VEND"],
      },
      "COUNTRIES WHEN “A” IS ADDED": {
        level: 3,
        members: ["CHIN", "CUB", "MALT", "TONG"],
      },
    },
    startingBoard: [
      ["SPOKE", "MOVE", "CUB", "SEAL"],
      ["HAWK", "CHAIN", "DOLPHIN", "CHIN"],
      ["SADDLE", "PEDDLE", "MALT", "OTTER"],
      ["MANATEE", "BRAKE", "VEND", "TONG"],
    ],
  },
  {
    id: "38",
    name: "Connections #38",
    createdAt: "2023-07-19T00:00:00.000Z",
    board: {
      TREES: { level: 0, members: ["ASH", "CEDAR", "MAPLE", "PINE"] },
      "LAND FORMATIONS": {
        level: 1,
        members: ["HILL", "MOUNTAIN", "PLATEAU", "VALLEY"],
      },
      "BAGEL FLAVORS": {
        level: 2,
        members: ["EVERYTHING", "ONION", "PLAIN", "POPPY"],
      },
      "STREETS ON SCREEN": {
        level: 3,
        members: ["ELM", "FEAR", "JUMP", "SESAME"],
      },
    },
    startingBoard: [
      ["MOUNTAIN", "ELM", "ONION", "JUMP"],
      ["PLAIN", "VALLEY", "MAPLE", "POPPY"],
      ["PINE", "SESAME", "HILL", "FEAR"],
      ["PLATEAU", "ASH", "EVERYTHING", "CEDAR"],
    ],
  },
  {
    id: "39",
    name: "Connections #39",
    createdAt: "2023-07-20T00:00:00.000Z",
    board: {
      "TIMEKEEPING DEVICES": {
        level: 0,
        members: ["CLOCK", "HOURGLASS", "SUNDIAL", "WATCH"],
      },
      HAIRSTYLES: { level: 1, members: ["BOB", "CROP", "PIXIE", "SHAG"] },
      "UNITS OF MEASURE": {
        level: 2,
        members: ["HERTZ", "MOLE", "NEWTON", "SECOND"],
      },
      "DR. ___": { level: 3, members: ["EVIL", "J", "NO", "PEPPER"] },
    },
    startingBoard: [
      ["PEPPER", "MOLE", "WATCH", "BOB"],
      ["SECOND", "EVIL", "CROP", "CLOCK"],
      ["NO", "NEWTON", "SUNDIAL", "PIXIE"],
      ["HERTZ", "HOURGLASS", "SHAG", "J"],
    ],
  },
  {
    id: "40",
    name: "Connections #40",
    createdAt: "2023-07-21T00:00:00.000Z",
    board: {
      WOODWINDS: {
        level: 0,
        members: ["BASSOON", "CLARINET", "FLUTE", "OBOE"],
      },
      COVERINGS: { level: 1, members: ["CAP", "COVER", "LID", "TOP"] },
      SUNGLASSES: {
        level: 2,
        members: ["AVIATOR", "CAT EYE", "WAYFARER", "WRAPAROUND"],
      },
      SEALS: { level: 3, members: ["HARBOR", "HARP", "HOODED", "MONK"] },
    },
    startingBoard: [
      ["AVIATOR", "FLUTE", "MONK", "LID"],
      ["HARBOR", "HARP", "CLARINET", "CAT EYE"],
      ["TOP", "HOODED", "BASSOON", "COVER"],
      ["OBOE", "WAYFARER", "CAP", "WRAPAROUND"],
    ],
  },
  {
    id: "41",
    name: "Connections #41",
    createdAt: "2023-07-22T00:00:00.000Z",
    board: {
      "BOTTLED WATER BRANDS": {
        level: 0,
        members: ["DASANI", "EVIAN", "FIJI", "VOSS"],
      },
      "SLANG FOR COFFEE": { level: 1, members: ["BREW", "JAVA", "JOE", "MUD"] },
      "ISLAND COUNTRIES": {
        level: 2,
        members: ["CUBA", "JAPAN", "MALTA", "PALAU"],
      },
      "CEREAL MASCOTS": { level: 3, members: ["LUCKY", "POP", "SAM", "TONY"] },
    },
    startingBoard: [
      ["FIJI", "MUD", "POP", "PALAU"],
      ["JOE", "SAM", "JAPAN", "BREW"],
      ["CUBA", "VOSS", "TONY", "JAVA"],
      ["DASANI", "MALTA", "EVIAN", "LUCKY"],
    ],
  },
  {
    id: "42",
    name: "Connections #42",
    createdAt: "2023-07-23T00:00:00.000Z",
    board: {
      "SCUBA GEAR": { level: 0, members: ["FINS", "MASK", "SNORKEL", "TANK"] },
      "PUNCTUATION MARKS": {
        level: 1,
        members: ["COLON", "COMMA", "HYPHEN", "PERIOD"],
      },
      "RUN QUICKLY": { level: 2, members: ["BOLT", "DASH", "RACE", "SPRINT"] },
      "___ CAT": { level: 3, members: ["DOJA", "FAT", "HOUSE", "JUNGLE"] },
    },
    startingBoard: [
      ["DASH", "MASK", "JUNGLE", "PERIOD"],
      ["HOUSE", "HYPHEN", "SNORKEL", "BOLT"],
      ["FAT", "TANK", "COLON", "RACE"],
      ["FINS", "SPRINT", "DOJA", "COMMA"],
    ],
  },
  {
    id: "43",
    name: "Connections #43",
    createdAt: "2023-07-24T00:00:00.000Z",
    board: {
      "SYNONYMS FOR ANGRY": {
        level: 0,
        members: ["FURIOUS", "INCENSED", "IRATE", "LIVID"],
      },
      "THINGS THAT ARE YELLOW": {
        level: 1,
        members: ["BANANA", "CANARY", "SCHOOL BUS", "SUNFLOWER"],
      },
      "MARINE BIRDS": {
        level: 2,
        members: ["BOOBY", "GULL", "PELICAN", "PUFFIN"],
      },
      "___ BOYS": { level: 3, members: ["BEACH", "BEASTIE", "HARDY", "LOST"] },
    },
    startingBoard: [
      ["CANARY", "IRATE", "LOST", "SCHOOL BUS"],
      ["BEACH", "GULL", "FURIOUS", "BOOBY"],
      ["BANANA", "BEASTIE", "SUNFLOWER", "LIVID"],
      ["HARDY", "PELICAN", "INCENSED", "PUFFIN"],
    ],
  },
  {
    id: "44",
    name: "Connections #44",
    createdAt: "2023-07-25T00:00:00.000Z",
    board: {
      "STATES OF MATTER": {
        level: 0,
        members: ["GAS", "LIQUID", "PLASMA", "SOLID"],
      },
      "EDIT MENU COMMANDS": {
        level: 1,
        members: ["COPY", "CUT", "PASTE", "UNDO"],
      },
      "DEFEAT BADLY": {
        level: 2,
        members: ["CRUSH", "ROUT", "SHELLAC", "TRASH"],
      },
      ANAGRAMS: { level: 3, members: ["LEAST", "SLATE", "STALE", "TESLA"] },
    },
    startingBoard: [
      ["SOLID", "PASTE", "SLATE", "TRASH"],
      ["TESLA", "CUT", "PLASMA", "CRUSH"],
      ["GAS", "SHELLAC", "STALE", "UNDO"],
      ["COPY", "LIQUID", "ROUT", "LEAST"],
    ],
  },
  {
    id: "45",
    name: "Connections #45",
    createdAt: "2023-07-26T00:00:00.000Z",
    board: {
      "MODES OF TRANSPORTATION": {
        level: 0,
        members: ["BOAT", "CAR", "PLANE", "TRAIN"],
      },
      "NBA PLAYERS": { level: 1, members: ["KING", "MAGIC", "SUN", "THUNDER"] },
      "FAST FOOD CHAINS": {
        level: 2,
        members: ["CHECKERS", "OUTBACK", "SONIC", "SUBWAY"],
      },
      "BAND NAMES MINUS COLORS": {
        level: 3,
        members: ["DAY", "FLOYD", "SABBATH", "STRIPES"],
      },
    },
    startingBoard: [
      ["PLANE", "SUN", "DAY", "THUNDER"],
      ["SONIC", "BOAT", "STRIPES", "CHECKERS"],
      ["CAR", "SUBWAY", "FLOYD", "TRAIN"],
      ["OUTBACK", "KING", "SABBATH", "MAGIC"],
    ],
  },
  {
    id: "46",
    name: "Connections #46",
    createdAt: "2023-07-27T00:00:00.000Z",
    board: {
      "MOVIE TITLE CITIES": {
        level: 0,
        members: ["CHICAGO", "MUNICH", "PHILADELPHIA", "RIO"],
      },
      "FASHION MAGAZINES": {
        level: 1,
        members: ["ALLURE", "ELLE", "GLAMOUR", "W"],
      },
      STORMS: {
        level: 2,
        members: ["BLIZZARD", "CYCLONE", "SQUALL", "TORNADO"],
      },
      COCKTAILS: {
        level: 3,
        members: ["COSMOPOLITAN", "HURRICANE", "MANHATTAN", "SCREWDRIVER"],
      },
    },
    startingBoard: [
      ["HURRICANE", "CYCLONE", "CHICAGO", "W"],
      ["MANHATTAN", "GLAMOUR", "TORNADO", "PHILADELPHIA"],
      ["COSMOPOLITAN", "SQUALL", "ALLURE", "SCREWDRIVER"],
      ["RIO", "BLIZZARD", "MUNICH", "ELLE"],
    ],
  },
  {
    id: "47",
    name: "Connections #47",
    createdAt: "2023-07-28T00:00:00.000Z",
    board: {
      BIOMES: {
        level: 0,
        members: ["DESERT", "FOREST", "GRASSLAND", "TUNDRA"],
      },
      LIZARDS: {
        level: 1,
        members: ["CHAMELEON", "GECKO", "IGUANA", "MONITOR"],
      },
      "YOGA POSES": {
        level: 2,
        members: ["COBRA", "LOTUS", "TREE", "WARRIOR"],
      },
      "DANCES WHEN DOUBLED": { level: 3, members: ["CAN", "CHA", "GO", "NAE"] },
    },
    startingBoard: [
      ["TREE", "GECKO", "FOREST", "GO"],
      ["MONITOR", "DESERT", "LOTUS", "CAN"],
      ["IGUANA", "CHA", "TUNDRA", "COBRA"],
      ["GRASSLAND", "WARRIOR", "NAE", "CHAMELEON"],
    ],
  },
  {
    id: "48",
    name: "Connections #48",
    createdAt: "2023-07-29T00:00:00.000Z",
    board: {
      FABRICS: { level: 0, members: ["CORDUROY", "DENIM", "LINEN", "TWEED"] },
      APPARITIONS: {
        level: 1,
        members: ["GHOST", "PHANTOM", "SPECTER", "SPIRIT"],
      },
      "SYNONYMS FOR BOTHER": {
        level: 2,
        members: ["NEEDLE", "POKE", "RIB", "TEASE"],
      },
      "DISNEY CHARACTERS": {
        level: 3,
        members: ["BEAST", "GENIE", "SCAR", "STITCH"],
      },
    },
    startingBoard: [
      ["RIB", "SPECTER", "TWEED", "SCAR"],
      ["SPIRIT", "BEAST", "NEEDLE", "LINEN"],
      ["STITCH", "POKE", "DENIM", "GENIE"],
      ["CORDUROY", "GHOST", "TEASE", "PHANTOM"],
    ],
  },
  {
    id: "49",
    name: "Connections #49",
    createdAt: "2023-07-30T00:00:00.000Z",
    board: {
      RELATIVES: { level: 0, members: ["AUNT", "COUSIN", "MOTHER", "NEPHEW"] },
      "SYNONYMS FOR OFFBEAT": {
        level: 1,
        members: ["DAFFY", "KOOKY", "QUIRKY", "WACKY"],
      },
      "DISNEY DUCKS": {
        level: 2,
        members: ["DAISY", "DEWEY", "DONALD", "SCROOGE"],
      },
      "___ CLOCK": {
        level: 3,
        members: ["ALARM", "BIOLOGICAL", "CUCKOO", "GRANDFATHER"],
      },
    },
    startingBoard: [
      ["DAISY", "AUNT", "ALARM", "QUIRKY"],
      ["SCROOGE", "GRANDFATHER", "KOOKY", "BIOLOGICAL"],
      ["NEPHEW", "DAFFY", "CUCKOO", "MOTHER"],
      ["DEWEY", "WACKY", "COUSIN", "DONALD"],
    ],
  },
  {
    id: "50",
    name: "Connections #50",
    createdAt: "2023-07-31T00:00:00.000Z",
    board: {
      "UNITS OF LENGTH": {
        level: 0,
        members: ["FOOT", "INCH", "MILE", "YARD"],
      },
      "TYPES OF PAINT": {
        level: 1,
        members: ["ACRYLIC", "OIL", "TEMPERA", "WATERCOLOR"],
      },
      "DEEP-FRIED FOOD": {
        level: 2,
        members: ["FALAFEL", "KATSU", "SAMOSA", "SCHNITZEL"],
      },
      "STARTS OF U.S. COINS": {
        level: 3,
        members: ["DIM", "NICK", "PEN", "QUART"],
      },
    },
    startingBoard: [
      ["OIL", "FOOT", "SAMOSA", "DIM"],
      ["QUART", "KATSU", "MILE", "WATERCOLOR"],
      ["PEN", "INCH", "ACRYLIC", "FALAFEL"],
      ["YARD", "NICK", "SCHNITZEL", "TEMPERA"],
    ],
  },
  {
    id: "51",
    name: "Connections #51",
    createdAt: "2023-08-01T00:00:00.000Z",
    board: {
      "LONG SANDWICHES": {
        level: 0,
        members: ["HERO", "HOAGIE", "GRINDER", "SUB"],
      },
      "DATING APPS": {
        level: 1,
        members: ["BUMBLE", "HINGE", "MATCH", "TINDER"],
      },
      "VAMPIRE MOVIES": {
        level: 2,
        members: ["BLADE", "LOST BOYS", "NEAR DARK", "TWILIGHT"],
      },
      ADAMS: { level: 3, members: ["ANT", "DRIVER", "SCOTT", "WEST"] },
    },
    startingBoard: [
      ["MATCH", "HERO", "BLADE", "DRIVER"],
      ["GRINDER", "SCOTT", "HINGE", "TWILIGHT"],
      ["WEST", "TINDER", "ANT", "SUB"],
      ["BUMBLE", "LOST BOYS", "HOAGIE", "NEAR DARK"],
    ],
  },
  {
    id: "52",
    name: "Connections #52",
    createdAt: "2023-08-02T00:00:00.000Z",
    board: {
      "COMPUTER EQUIPMENT": {
        level: 0,
        members: ["KEYBOARD", "MONITOR", "MOUSE", "SPEAKER"],
      },
      RODENTS: { level: 1, members: ["GERBIL", "HAMSTER", "RAT", "VOLE"] },
      "MUSICAL INSTRUMENTS": {
        level: 2,
        members: ["HARP", "HORN", "ORGAN", "TRIANGLE"],
      },
      "SYNONYMS FOR COMPLAIN": {
        level: 3,
        members: ["CARP", "GRIPE", "GROUSE", "MOAN"],
      },
    },
    startingBoard: [
      ["RAT", "HORN", "SPEAKER", "TRIANGLE"],
      ["CARP", "HARP", "ORGAN", "VOLE"],
      ["GROUSE", "HAMSTER", "MOUSE", "MONITOR"],
      ["KEYBOARD", "MOAN", "GERBIL", "GRIPE"],
    ],
  },
  {
    id: "53",
    name: "Connections #53",
    createdAt: "2023-08-03T00:00:00.000Z",
    board: {
      "ANIMAL GROUP NAMES": {
        level: 0,
        members: ["COLONY", "HERD", "PRIDE", "SWARM"],
      },
      STONED: { level: 1, members: ["BAKED", "BLAZED", "HIGH", "LIT"] },
      "AP CLASSES": { level: 2, members: ["BIO", "CHEM", "GOV", "STATS"] },
      "TAXONOMY RANKS": {
        level: 3,
        members: ["CLASS", "DOMAIN", "FAMILY", "ORDER"],
      },
    },
    startingBoard: [
      ["HIGH", "PRIDE", "CLASS", "GOV"],
      ["ORDER", "CHEM", "LIT", "FAMILY"],
      ["SWARM", "DOMAIN", "BIO", "COLONY"],
      ["BAKED", "STATS", "HERD", "BLAZED"],
    ],
  },
  {
    id: "54",
    name: "Connections #54",
    createdAt: "2023-08-04T00:00:00.000Z",
    board: {
      "PLACES FOR WORSHIP": {
        level: 0,
        members: ["ALTAR", "RELIQUARY", "SHRINE", "TEMPLE"],
      },
      "CARTOON CATS": {
        level: 1,
        members: ["FELIX", "GARFIELD", "SYLVESTER", "TOM"],
      },
      "PRESIDENTIAL FIRST NAMES": {
        level: 2,
        members: ["CALVIN", "CHESTER", "GROVER", "HARRY"],
      },
      "___ ROAD": { level: 3, members: ["ABBEY", "HIGH", "ROCKY", "SILK"] },
    },
    startingBoard: [
      ["TOM", "ROCKY", "TEMPLE", "HARRY"],
      ["HIGH", "ALTAR", "SYLVESTER", "GROVER"],
      ["SILK", "CALVIN", "ABBEY", "GARFIELD"],
      ["CHESTER", "RELIQUARY", "FELIX", "SHRINE"],
    ],
  },
  {
    id: "55",
    name: "Connections #55",
    createdAt: "2023-08-05T00:00:00.000Z",
    board: {
      "CLASSIC TOYS": { level: 0, members: ["BLOCKS", "DOLL", "TOP", "YO-YO"] },
      "WORDS WITH THREE G’S": {
        level: 1,
        members: ["BAGGAGE", "EGGNOG", "GIGGLE", "LEGGINGS"],
      },
      "SHAKESPEARE CHARACTERS": {
        level: 2,
        members: ["DUNCAN", "JULIET", "PUCK", "VIOLA"],
      },
      "___ STICK": {
        level: 3,
        members: ["FISH", "HOCKEY", "MEMORY", "SELFIE"],
      },
    },
    startingBoard: [
      ["VIOLA", "TOP", "GIGGLE", "MEMORY"],
      ["EGGNOG", "BLOCKS", "SELFIE", "PUCK"],
      ["DOLL", "HOCKEY", "DUNCAN", "LEGGINGS"],
      ["JULIET", "BAGGAGE", "YO-YO", "FISH"],
    ],
  },
  {
    id: "56",
    name: "Connections #56",
    createdAt: "2023-08-06T00:00:00.000Z",
    board: {
      "CLASSIC ARCADE GAMES": {
        level: 0,
        members: ["ASTEROIDS", "BREAKOUT", "FROGGER", "PONG"],
      },
      DANCES: { level: 1, members: ["HUSTLE", "SALSA", "SWING", "TANGO"] },
      "TOUCHSCREEN GESTURES": {
        level: 2,
        members: ["PINCH", "SPREAD", "SWIPE", "TAP"],
      },
      "RAPPERS MINUS NUMBERS": {
        level: 3,
        members: ["CENT", "CHAINZ", "PAC", "SAVAGE"],
      },
    },
    startingBoard: [
      ["PINCH", "SALSA", "SAVAGE", "BREAKOUT"],
      ["CENT", "SWIPE", "SWING", "TAP"],
      ["ASTEROIDS", "PAC", "PONG", "HUSTLE"],
      ["TANGO", "SPREAD", "CHAINZ", "FROGGER"],
    ],
  },
  {
    id: "57",
    name: "Connections #57",
    createdAt: "2023-08-07T00:00:00.000Z",
    board: {
      "MOVIE GENRES": {
        level: 0,
        members: ["HORROR", "MUSICAL", "ROMANCE", "WESTERN"],
      },
      PATTERNS: {
        level: 1,
        members: ["HOUNDSTOOTH", "PAISLEY", "PLAID", "STRIPES"],
      },
      "SYNONYMS FOR FALSEHOOD": {
        level: 2,
        members: ["FIB", "FICTION", "LIE", "TALE"],
      },
      "CANDY PIECES": {
        level: 3,
        members: ["DOT", "GOOBER", "KISS", "WHOPPER"],
      },
    },
    startingBoard: [
      ["KISS", "ROMANCE", "STRIPES", "FICTION"],
      ["PAISLEY", "HORROR", "DOT", "LIE"],
      ["MUSICAL", "WHOPPER", "PLAID", "FIB"],
      ["GOOBER", "TALE", "WESTERN", "HOUNDSTOOTH"],
    ],
  },
  {
    id: "58",
    name: "Connections #58",
    createdAt: "2023-08-08T00:00:00.000Z",
    board: {
      ARACHNIDS: { level: 0, members: ["MITE", "SCORPION", "SPIDER", "TICK"] },
      FISH: { level: 1, members: ["CHAR", "EEL", "PERCH", "SHARK"] },
      SUPERHEROES: {
        level: 2,
        members: ["BLACK WIDOW", "BLADE", "FLASH", "STORM"],
      },
      "MTV SHOWS": {
        level: 3,
        members: ["CATFISH", "CRIBS", "JACKASS", "STATE"],
      },
    },
    startingBoard: [
      ["BLADE", "CATFISH", "TICK", "CHAR"],
      ["STATE", "EEL", "STORM", "FLASH"],
      ["BLACK WIDOW", "JACKASS", "PERCH", "SCORPION"],
      ["MITE", "SHARK", "SPIDER", "CRIBS"],
    ],
  },
  {
    id: "59",
    name: "Connections #59",
    createdAt: "2023-08-09T00:00:00.000Z",
    board: {
      "UNSPECIFIED QUANTITIES": {
        level: 0,
        members: ["FEW", "HANDFUL", "SEVERAL", "SOME"],
      },
      "CELESTIAL OBJECTS": {
        level: 1,
        members: ["ASTEROID", "COMET", "MOON", "PLANET"],
      },
      NEWSPAPERS: { level: 2, members: ["GLOBE", "JOURNAL", "POST", "SUN"] },
      "FRUIT HOMOPHONES": {
        level: 3,
        members: ["LYME", "MELLON", "PAIR", "PLUMB"],
      },
    },
    startingBoard: [
      ["MOON", "GLOBE", "SOME", "LYME"],
      ["FEW", "PAIR", "POST", "COMET"],
      ["PLUMB", "HANDFUL", "SUN", "PLANET"],
      ["JOURNAL", "MELLON", "ASTEROID", "SEVERAL"],
    ],
  },
  {
    id: "60",
    name: "Connections #60",
    createdAt: "2023-08-10T00:00:00.000Z",
    board: {
      "HORROR FRANCHISES": {
        level: 0,
        members: ["PURGE", "RING", "SAW", "SCREAM"],
      },
      "SPORTS VENUES": {
        level: 1,
        members: ["COURT", "DIAMOND", "FIELD", "RINK"],
      },
      "MAKE HAPPY": {
        level: 2,
        members: ["CHARM", "DELIGHT", "PLEASE", "TICKLE"],
      },
      JEWELRY: { level: 3, members: ["ANKLET", "BANGLE", "BROOCH", "PENDANT"] },
    },
    startingBoard: [
      ["DIAMOND", "PENDANT", "CHARM", "SAW"],
      ["PLEASE", "COURT", "SCREAM", "TICKLE"],
      ["BANGLE", "RING", "FIELD", "DELIGHT"],
      ["PURGE", "ANKLET", "RINK", "BROOCH"],
    ],
  },
  {
    id: "61",
    name: "Connections #61",
    createdAt: "2023-08-11T00:00:00.000Z",
    board: {
      "THEORETICAL PHYSICISTS": {
        level: 0,
        members: ["EINSTEIN", "FEYNMAN", "HAWKING", "OPPENHEIMER"],
      },
      TALENT: { level: 1, members: ["FACULTY", "FLAIR", "GENIUS", "GIFT"] },
      "AUSTRALIAN TERMS": {
        level: 2,
        members: ["BARBIE", "BUSH", "CRIKEY", "MATE"],
      },
      "___ POINT": { level: 3, members: ["MATCH", "MOOT", "SELLING", "WEST"] },
    },
    startingBoard: [
      ["BARBIE", "OPPENHEIMER", "MATCH", "GENIUS"],
      ["WEST", "BUSH", "SELLING", "HAWKING"],
      ["FACULTY", "EINSTEIN", "MATE", "MOOT"],
      ["CRIKEY", "GIFT", "FEYNMAN", "FLAIR"],
    ],
  },
  {
    id: "62",
    name: "Connections #62",
    createdAt: "2023-08-12T00:00:00.000Z",
    board: {
      "STATE ABBREVIATIONS": { level: 0, members: ["CO", "MA", "ME", "PA"] },
      "MUSICAL NOTES": { level: 1, members: ["DO", "FA", "LA", "TI"] },
      "GREEK LETTERS": { level: 2, members: ["MU", "NU", "PI", "XI"] },
      "PERIODIC TABLE SYMBOLS": { level: 3, members: ["FE", "HE", "NA", "NI"] },
    },
    startingBoard: [
      ["MA", "LA", "NA", "NU"],
      ["PI", "NI", "TI", "HE"],
      ["FA", "XI", "PA", "FE"],
      ["DO", "CO", "MU", "ME"],
    ],
  },
  {
    id: "63",
    name: "Connections #63",
    createdAt: "2023-08-13T00:00:00.000Z",
    board: {
      "FASTENING VERBS": {
        level: 0,
        members: ["BUCKLE", "BUTTON", "SNAP", "ZIP"],
      },
      "SLANG FOR ZERO": {
        level: 1,
        members: ["JACK", "NADA", "NOTHING", "SQUAT"],
      },
      "GYM EXERCISES": {
        level: 2,
        members: ["CURL", "LUNGE", "PLANK", "PRESS"],
      },
      "“CAPTAINS”": {
        level: 3,
        members: ["CRUNCH", "KANGAROO", "OBVIOUS", "PLANET"],
      },
    },
    startingBoard: [
      ["JACK", "PRESS", "PLANET", "BUTTON"],
      ["PLANK", "SQUAT", "SNAP", "OBVIOUS"],
      ["CRUNCH", "BUCKLE", "NOTHING", "CURL"],
      ["ZIP", "KANGAROO", "LUNGE", "NADA"],
    ],
  },
  {
    id: "64",
    name: "Connections #64",
    createdAt: "2023-08-14T00:00:00.000Z",
    board: {
      "CLASSIC DOG NAMES": {
        level: 0,
        members: ["FIDO", "LUCKY", "ROVER", "SPOT"],
      },
      PERCEIVE: { level: 1, members: ["CATCH", "NOTICE", "OBSERVE", "SEE"] },
      "FISHING TERMS": { level: 2, members: ["BAIT", "CHUM", "FLY", "SINKER"] },
      "T-___": { level: 3, members: ["BONE", "REX", "SHIRT", "STORM"] },
    },
    startingBoard: [
      ["CATCH", "SPOT", "BONE", "LUCKY"],
      ["SEE", "SHIRT", "FLY", "STORM"],
      ["CHUM", "NOTICE", "REX", "BAIT"],
      ["FIDO", "SINKER", "OBSERVE", "ROVER"],
    ],
  },
  {
    id: "65",
    name: "Connections #65",
    createdAt: "2023-08-15T00:00:00.000Z",
    board: {
      "STATES OF MATTER": {
        level: 0,
        members: ["GAS", "LIQUID", "PLASMA", "SOLID"],
      },
      ENERGY: { level: 1, members: ["JUICE", "SPIRIT", "STEAM", "VIGOR"] },
      "CLASSICAL ELEMENTS": {
        level: 2,
        members: ["AIR", "EARTH", "FIRE", "WATER"],
      },
      "THINGS WITH RINGS": {
        level: 3,
        members: ["CIRCUS", "SATURN", "TREE", "WEDDING"],
      },
    },
    startingBoard: [
      ["JUICE", "WATER", "TREE", "EARTH"],
      ["GAS", "CIRCUS", "STEAM", "LIQUID"],
      ["SATURN", "FIRE", "SOLID", "SPIRIT"],
      ["PLASMA", "VIGOR", "AIR", "WEDDING"],
    ],
  },
  {
    id: "66",
    name: "Connections #66",
    createdAt: "2023-08-16T00:00:00.000Z",
    board: {
      "TIME PERIODS": {
        level: 0,
        members: ["CENTURY", "DECADE", "MILLENNIUM", "YEAR"],
      },
      "BREAKFAST FOODS": {
        level: 1,
        members: ["CEREAL", "OMELET", "PANCAKE", "WAFFLE"],
      },
      PAINTERS: { level: 2, members: ["BACON", "CLOSE", "MUNCH", "WHISTLER"] },
      "ONE IN A DOZEN": {
        level: 3,
        members: ["EGG", "JUROR", "MONTH", "ROSE"],
      },
    },
    startingBoard: [
      ["ROSE", "CLOSE", "BACON", "YEAR"],
      ["PANCAKE", "MONTH", "MUNCH", "EGG"],
      ["DECADE", "CEREAL", "CENTURY", "OMELET"],
      ["WHISTLER", "MILLENNIUM", "JUROR", "WAFFLE"],
    ],
  },
  {
    id: "67",
    name: "Connections #67",
    createdAt: "2023-08-17T00:00:00.000Z",
    board: {
      DESSERTS: { level: 0, members: ["CAKE", "COBBLER", "PIE", "TART"] },
      "OCCUPATIONAL SURNAMES": {
        level: 1,
        members: ["FISHER", "MASON", "MILLER", "SMITH"],
      },
      "ALTER DECEPTIVELY": {
        level: 2,
        members: ["DISTORT", "DOCTOR", "FUDGE", "TWIST"],
      },
      "SQUARE ___": { level: 3, members: ["DANCE", "MEAL", "ONE", "ROOT"] },
    },
    startingBoard: [
      ["FUDGE", "MEAL", "COBBLER", "SMITH"],
      ["PIE", "DOCTOR", "ROOT", "TWIST"],
      ["DANCE", "ONE", "FISHER", "TART"],
      ["MASON", "CAKE", "DISTORT", "MILLER"],
    ],
  },
  {
    id: "68",
    name: "Connections #68",
    createdAt: "2023-08-18T00:00:00.000Z",
    board: {
      "UNITS OF VOLUME": {
        level: 0,
        members: ["CUP", "GALLON", "PINT", "QUART"],
      },
      EXTREMELY: { level: 1, members: ["AWFUL", "QUITE", "SUPER", "VERY"] },
      "WORLD CURRENCIES": {
        level: 2,
        members: ["RAND", "REAL", "STERLING", "WON"],
      },
      "___ CAKE": {
        level: 3,
        members: ["CARROT", "COFFEE", "POUND", "SPONGE"],
      },
    },
    startingBoard: [
      ["PINT", "REAL", "CARROT", "AWFUL"],
      ["SPONGE", "CUP", "WON", "SUPER"],
      ["GALLON", "COFFEE", "VERY", "POUND"],
      ["RAND", "QUITE", "QUART", "STERLING"],
    ],
  },
  {
    id: "69",
    name: "Connections #69",
    createdAt: "2023-08-19T00:00:00.000Z",
    board: {
      FRIEND: { level: 0, members: ["BUD", "CHUM", "MATE", "PAL"] },
      COOKWEAR: { level: 1, members: ["CROCK", "POT", "SKILLET", "WOK"] },
      SHOES: { level: 2, members: ["CLOG", "PUMP", "SLIDE", "WEDGE"] },
      "SLANG FOR CANNABIS": {
        level: 3,
        members: ["GRASS", "HERB", "MARY JANE", "WEED"],
      },
    },
    startingBoard: [
      ["BUD", "PUMP", "CROCK", "HERB"],
      ["POT", "MATE", "WEDGE", "GRASS"],
      ["WOK", "MARY JANE", "CHUM", "SLIDE"],
      ["CLOG", "PAL", "SKILLET", "WEED"],
    ],
  },
  {
    id: "70",
    name: "Connections #70",
    createdAt: "2023-08-20T00:00:00.000Z",
    board: {
      "CAMPING SUPPLIES": {
        level: 0,
        members: ["COOLER", "LANTERN", "SLEEPING BAG", "TENT"],
      },
      INSULT: { level: 1, members: ["BARB", "DIG", "DISS", "JAB"] },
      TINY: { level: 2, members: ["MINUTE", "SLIGHT", "SMALL", "WEE"] },
      "HAPPY ___": { level: 3, members: ["CAMPER", "HOUR", "MEAL", "MEDIUM"] },
    },
    startingBoard: [
      ["MINUTE", "DIG", "MEAL", "COOLER"],
      ["HOUR", "TENT", "SLIGHT", "MEDIUM"],
      ["SMALL", "BARB", "CAMPER", "LANTERN"],
      ["JAB", "SLEEPING BAG", "DISS", "WEE"],
    ],
  },
  {
    id: "71",
    name: "Connections #71",
    createdAt: "2023-08-21T00:00:00.000Z",
    board: {
      "U.S. MOUNTAIN STATES": {
        level: 0,
        members: ["ARIZONA", "COLORADO", "NEVADA", "UTAH"],
      },
      "SODA BRANDS": {
        level: 1,
        members: ["CRUSH", "MUG", "SPRITE", "SQUIRT"],
      },
      "CLASSIC ROCK BANDS": {
        level: 2,
        members: ["GENESIS", "KANSAS", "RUSH", "YES"],
      },
      "TONY ___": {
        level: 3,
        members: ["HAWK", "MONTANA", "SOPRANO", "STARK"],
      },
    },
    startingBoard: [
      ["CRUSH", "UTAH", "RUSH", "HAWK"],
      ["MONTANA", "MUG", "ARIZONA", "GENESIS"],
      ["SQUIRT", "STARK", "YES", "COLORADO"],
      ["KANSAS", "SPRITE", "NEVADA", "SOPRANO"],
    ],
  },
  {
    id: "72",
    name: "Connections #72",
    createdAt: "2023-08-22T00:00:00.000Z",
    board: {
      "PERFORMING ARTISTS": {
        level: 0,
        members: ["ACTOR", "DANCER", "SINGER", "STAND-UP"],
      },
      "SANTA’S REINDEER": {
        level: 1,
        members: ["COMET", "CUPID", "DASHER", "VIXEN"],
      },
      "SEEN ON VALENTINE’S DAY": {
        level: 2,
        members: ["CARD", "CHOCOLATE", "HEART", "ROSE"],
      },
      "“BAD ___” MOVIES": {
        level: 3,
        members: ["BOYS", "LIEUTENANT", "SANTA", "TASTE"],
      },
    },
    startingBoard: [
      ["HEART", "COMET", "TASTE", "SINGER"],
      ["SANTA", "CUPID", "CARD", "DANCER"],
      ["ROSE", "BOYS", "STAND-UP", "VIXEN"],
      ["LIEUTENANT", "ACTOR", "DASHER", "CHOCOLATE"],
    ],
  },
  {
    id: "73",
    name: "Connections #73",
    createdAt: "2023-08-23T00:00:00.000Z",
    board: {
      "FACIAL HAIR": {
        level: 0,
        members: ["BEARD", "GOATEE", "MUSTACHE", "STUBBLE"],
      },
      "BIKE PARTS": {
        level: 1,
        members: ["GEAR", "HANDLEBAR", "PEDAL", "WHEEL"],
      },
      PURSUE: { level: 2, members: ["DOG", "FOLLOW", "TAIL", "TRACK"] },
      "THINGS THAT ARE CAST": {
        level: 3,
        members: ["DOUBT", "MOVIE", "SHADOW", "VOTE"],
      },
    },
    startingBoard: [
      ["SHADOW", "GEAR", "DOG", "BEARD"],
      ["HANDLEBAR", "TRACK", "GOATEE", "VOTE"],
      ["TAIL", "MOVIE", "WHEEL", "DOUBT"],
      ["MUSTACHE", "PEDAL", "FOLLOW", "STUBBLE"],
    ],
  },
  {
    id: "74",
    name: "Connections #74",
    createdAt: "2023-08-24T00:00:00.000Z",
    board: {
      "EXTINCT ANIMALS": {
        level: 0,
        members: ["DODO", "MAMMOTH", "MASTODON", "TRILOBITE"],
      },
      FAILURES: { level: 1, members: ["BUSTS", "FLOPS", "MISSES", "TURKEYS"] },
      "SLANG FOR CLOTHES": {
        level: 2,
        members: ["DUDS", "GETUP", "OUTFIT", "THREADS"],
      },
      KISS: { level: 3, members: ["PECK", "SMACK", "SMOOCH", "X"] },
    },
    startingBoard: [
      ["MASTODON", "X", "SMACK", "THREADS"],
      ["BUSTS", "PECK", "DODO", "DUDS"],
      ["SMOOCH", "MAMMOTH", "OUTFIT", "FLOPS"],
      ["MISSES", "GETUP", "TURKEYS", "TRILOBITE"],
    ],
  },
  {
    id: "75",
    name: "Connections #75",
    createdAt: "2023-08-25T00:00:00.000Z",
    board: {
      "SOCIAL GATHERING": {
        level: 0,
        members: ["BASH", "BLOWOUT", "PARTY", "SHINDIG"],
      },
      "FOUND IN A KITCHEN": {
        level: 1,
        members: ["COUNTER", "MIXER", "RANGE", "SINK"],
      },
      "“PINOCCHIO” FIGURES": {
        level: 2,
        members: ["CRICKET", "PUPPET", "WHALE", "WOODCARVER"],
      },
      "EASTER ___": { level: 3, members: ["BUNNY", "EGG", "ISLAND", "SUNDAY"] },
    },
    startingBoard: [
      ["MIXER", "WHALE", "ISLAND", "BASH"],
      ["BUNNY", "PARTY", "RANGE", "PUPPET"],
      ["BLOWOUT", "EGG", "CRICKET", "COUNTER"],
      ["SINK", "WOODCARVER", "SUNDAY", "SHINDIG"],
    ],
  },
  {
    id: "76",
    name: "Connections #76",
    createdAt: "2023-08-26T00:00:00.000Z",
    board: {
      "BOARD GAMES": {
        level: 0,
        members: ["RISK", "SORRY", "TABOO", "TROUBLE"],
      },
      "NEWSPAPER SECTIONS": {
        level: 1,
        members: ["BUSINESS", "NATIONAL", "OPINION", "STYLE"],
      },
      "FIGURES IN GREEK MYTH": {
        level: 2,
        members: ["ATLAS", "HERMES", "NIKE", "PARIS"],
      },
      "FIRST WORDS IN RAPPERS’ NAMES": {
        level: 3,
        members: ["FOXY", "GUCCI", "KILLER", "NOTORIOUS"],
      },
    },
    startingBoard: [
      ["PARIS", "STYLE", "FOXY", "TROUBLE"],
      ["KILLER", "RISK", "NATIONAL", "GUCCI"],
      ["BUSINESS", "ATLAS", "SORRY", "NIKE"],
      ["HERMES", "TABOO", "OPINION", "NOTORIOUS"],
    ],
  },
  {
    id: "77",
    name: "Connections #77",
    createdAt: "2023-08-27T00:00:00.000Z",
    board: {
      "PIECES OF CHICKEN": {
        level: 0,
        members: ["BREAST", "DRUMSTICK", "TENDER", "WING"],
      },
      "GOLF TERMS": {
        level: 1,
        members: ["DRIVER", "EAGLE", "HOLE", "STROKE"],
      },
      "DRUM SET COMPONENTS": {
        level: 2,
        members: ["CYMBAL", "KICK", "SNARE", "TOM"],
      },
      "ASSOCIATED WITH “CRAWL”": {
        level: 3,
        members: ["INFANT", "PUB", "SWIMMING", "TICKER"],
      },
    },
    startingBoard: [
      ["TOM", "INFANT", "DRIVER", "WING"],
      ["PUB", "EAGLE", "TENDER", "SNARE"],
      ["CYMBAL", "SWIMMING", "STROKE", "TICKER"],
      ["BREAST", "KICK", "HOLE", "DRUMSTICK"],
    ],
  },
  {
    id: "78",
    name: "Connections #78",
    createdAt: "2023-08-28T00:00:00.000Z",
    board: {
      "STATES OF ELATION": {
        level: 0,
        members: ["BLISS", "CLOUD NINE", "HEAVEN", "PARADISE"],
      },
      SCAM: { level: 1, members: ["CON", "FAST ONE", "HUSTLE", "RACKET"] },
      "GREETING GESTURES": {
        level: 2,
        members: ["HIGH FIVE", "HUG", "SHAKE", "WAVE"],
      },
      "___ LIST": { level: 3, members: ["BUCKET", "GUEST", "TOP TEN", "WISH"] },
    },
    startingBoard: [
      ["TOP TEN", "WAVE", "RACKET", "GUEST"],
      ["SHAKE", "CLOUD NINE", "BUCKET", "BLISS"],
      ["HUSTLE", "WISH", "HIGH FIVE", "CON"],
      ["HEAVEN", "HUG", "PARADISE", "FAST ONE"],
    ],
  },
  {
    id: "79",
    name: "Connections #79",
    createdAt: "2023-08-29T00:00:00.000Z",
    board: {
      "DEPART QUICKLY": {
        level: 0,
        members: ["BOOK", "BOUNCE", "RUN", "SPLIT"],
      },
      "ANIMALS THAT END WITH “X”": {
        level: 1,
        members: ["FOX", "IBEX", "LYNX", "ORYX"],
      },
      "SHADES OF BLACK": {
        level: 2,
        members: ["EBONY", "JET", "ONYX", "RAVEN"],
      },
      "WORDS BEFORE DAYS OF THE WEEK": {
        level: 3,
        members: ["ASH", "BLACK", "CYBER", "FAT"],
      },
    },
    startingBoard: [
      ["JET", "FOX", "BOOK", "ONYX"],
      ["LYNX", "ASH", "BLACK", "BOUNCE"],
      ["CYBER", "ORYX", "RUN", "RAVEN"],
      ["EBONY", "SPLIT", "FAT", "IBEX"],
    ],
  },
  {
    id: "80",
    name: "Connections #80",
    createdAt: "2023-08-30T00:00:00.000Z",
    board: {
      "PLAYGROUND FIXTURES": {
        level: 0,
        members: ["SANDBOX", "SEESAW", "SLIDE", "SWING"],
      },
      INFLUENCE: { level: 1, members: ["CLOUT", "PULL", "SWAY", "WEIGHT"] },
      "EGYPTIAN SYMBOLS": {
        level: 2,
        members: ["ANKH", "CROOK", "EYE", "SCARAB"],
      },
      FONTS: { level: 3, members: ["COURIER", "IMPACT", "PAPYRUS", "TIMES"] },
    },
    startingBoard: [
      ["SWING", "TIMES", "EYE", "IMPACT"],
      ["WEIGHT", "PAPYRUS", "SLIDE", "PULL"],
      ["SCARAB", "SEESAW", "SWAY", "CROOK"],
      ["CLOUT", "COURIER", "ANKH", "SANDBOX"],
    ],
  },
  {
    id: "81",
    name: "Connections #81",
    createdAt: "2023-08-31T00:00:00.000Z",
    board: {
      "APPETIZER UNIT": {
        level: 0,
        members: ["FRY", "NACHO", "POPPER", "WING"],
      },
      "RESPONSE TO A CORRECT ANSWER": {
        level: 1,
        members: ["BINGO", "CORRECT", "RIGHT", "YES"],
      },
      MAR: { level: 2, members: ["CHIP", "DING", "NICK", "SCRATCH"] },
      ___JACK: { level: 3, members: ["APPLE", "CRACKER", "FLAP", "LUMBER"] },
    },
    startingBoard: [
      ["CHIP", "APPLE", "FRY", "RIGHT"],
      ["CRACKER", "WING", "DING", "FLAP"],
      ["BINGO", "SCRATCH", "NACHO", "YES"],
      ["NICK", "LUMBER", "CORRECT", "POPPER"],
    ],
  },
  {
    id: "82",
    name: "Connections #82",
    createdAt: "2023-09-01T00:00:00.000Z",
    board: {
      "DRINK VESSELS": {
        level: 0,
        members: ["GOBLET", "SNIFTER", "TUMBLER", "STEIN"],
      },
      WOODWINDS: {
        level: 1,
        members: ["CLARINET", "FLUTE", "OBOE", "SAXOPHONE"],
      },
      "AMERICAN POETS": {
        level: 2,
        members: ["BISHOP", "FROST", "OLDS", "POUND"],
      },
      "CONSECUTIVE DOUBLE LETTERS": {
        level: 3,
        members: ["BALLOON", "BASSOON", "COFFEE", "FRICASSEE"],
      },
    },
    startingBoard: [
      ["FLUTE", "COFFEE", "POUND", "OBOE"],
      ["STEIN", "FRICASSEE", "BISHOP", "TUMBLER"],
      ["BASSOON", "FROST", "GOBLET", "CLARINET"],
      ["OLDS", "SNIFTER", "SAXOPHONE", "BALLOON"],
    ],
  },
  {
    id: "83",
    name: "Connections #83",
    createdAt: "2023-09-02T00:00:00.000Z",
    board: {
      "AU NATUREL": { level: 0, members: ["BARE", "NAKED", "NUDE", "UNCLAD"] },
      "BAKED GOODS": {
        level: 1,
        members: ["BUN", "DANISH", "MUFFIN", "TURNOVER"],
      },
      "AMERICAN FOOTBALL ACTIONS": {
        level: 2,
        members: ["FUMBLE", "PUNT", "SACK", "SNAP"],
      },
      "MANICURE STEPS": {
        level: 3,
        members: ["BUFF", "CLIP", "FILE", "POLISH"],
      },
    },
    startingBoard: [
      ["BUN", "SNAP", "CLIP", "BARE"],
      ["BUFF", "MUFFIN", "POLISH", "SACK"],
      ["DANISH", "NUDE", "FUMBLE", "TURNOVER"],
      ["NAKED", "PUNT", "FILE", "UNCLAD"],
    ],
  },
  {
    id: "84",
    name: "Connections #84",
    createdAt: "2023-09-03T00:00:00.000Z",
    board: {
      "FEMALE ANIMALS": { level: 0, members: ["COW", "DOE", "HEN", "MARE"] },
      PRONOUNS: { level: 1, members: ["I", "IT", "THEY", "WE"] },
      "ROMAN NUMERALS": { level: 2, members: ["D", "L", "M", "V"] },
      HOMOPHONES: { level: 3, members: ["EWE", "U", "YEW", "YOU"] },
    },
    startingBoard: [
      ["I", "L", "U", "V"],
      ["YOU", "WE", "D", "DOE"],
      ["M", "EWE", "HEN", "IT"],
      ["COW", "THEY", "YEW", "MARE"],
    ],
  },
  {
    id: "85",
    name: "Connections #85",
    createdAt: "2023-09-04T00:00:00.000Z",
    board: {
      "PAINTING ACCESSORIES": {
        level: 0,
        members: ["BRUSH", "CANVAS", "EASEL", "PALETTE"],
      },
      "AUTOMATIC TRANSMISSION SETTINGS": {
        level: 1,
        members: ["DRIVE", "NEUTRAL", "PARK", "REVERSE"],
      },
      "THINGS WITH TEETH": {
        level: 2,
        members: ["COMB", "GEAR", "SAW", "ZIPPER"],
      },
      "___ CHAIR": { level: 3, members: ["FIRST", "FOLDING", "HIGH", "LAWN"] },
    },
    startingBoard: [
      ["PARK", "FOLDING", "GEAR", "BRUSH"],
      ["HIGH", "COMB", "NEUTRAL", "LAWN"],
      ["CANVAS", "DRIVE", "SAW", "FIRST"],
      ["ZIPPER", "EASEL", "REVERSE", "PALETTE"],
    ],
  },
  {
    id: "86",
    name: "Connections #86",
    createdAt: "2023-09-05T00:00:00.000Z",
    board: {
      "INFORMATION DISPLAYS": {
        level: 0,
        members: ["CHART", "DIAGRAM", "GRAPH", "MAP"],
      },
      "ADDITIONAL BENEFIT": {
        level: 1,
        members: ["BONUS", "EXTRA", "ICING", "PERK"],
      },
      "THANKSGIVING FOOD": {
        level: 2,
        members: ["GRAVY", "PIE", "STUFFING", "TURKEY"],
      },
      "SONG TITLES WITH PARENTHESES": {
        level: 3,
        members: ["I RAN", "ISTANBUL", "MONTERO", "SATISFACTION"],
      },
    },
    startingBoard: [
      ["TURKEY", "MAP", "EXTRA", "SATISFACTION"],
      ["ICING", "PIE", "CHART", "GRAVY"],
      ["ISTANBUL", "GRAPH", "I RAN", "BONUS"],
      ["DIAGRAM", "MONTERO", "PERK", "STUFFING"],
    ],
  },
  {
    id: "87",
    name: "Connections #87",
    createdAt: "2023-09-06T00:00:00.000Z",
    board: {
      "CREATURES IN FOLKLORE": {
        level: 0,
        members: ["GNOME", "GOBLIN", "OGRE", "TROLL"],
      },
      "FLOWER PARTS": { level: 1, members: ["BUD", "LEAF", "PETAL", "STALK"] },
      "ONE INVOLVED IN ESPIONAGE": {
        level: 2,
        members: ["AGENT", "MOLE", "PLANT", "SPY"],
      },
      "CHINESE ZODIAC ANIMALS": {
        level: 3,
        members: ["DRAGON", "HORSE", "RABBIT", "TIGER"],
      },
    },
    startingBoard: [
      ["LEAF", "HORSE", "GNOME", "MOLE"],
      ["DRAGON", "STALK", "SPY", "TROLL"],
      ["PLANT", "GOBLIN", "RABBIT", "PETAL"],
      ["OGRE", "AGENT", "BUD", "TIGER"],
    ],
  },
  {
    id: "88",
    name: "Connections #88",
    createdAt: "2023-09-07T00:00:00.000Z",
    board: {
      "ROCKY HORROR PICTURE SHOW": {
        level: 0,
        members: ["HORROR", "PICTURE", "ROCKY", "SHOW"],
      },
      "WHO FRAMED ROGER RABBIT": {
        level: 1,
        members: ["FRAMED", "RABBIT", "ROGER", "WHO"],
      },
      "WHEN HARRY MET SALLY": {
        level: 2,
        members: ["HARRY", "MET", "SALLY", "WHEN"],
      },
      "MAD MAX FURY ROAD": {
        level: 3,
        members: ["FURY", "MAD", "MAX", "ROAD"],
      },
    },
    startingBoard: [
      ["FURY", "HORROR", "HARRY", "ROGER"],
      ["MET", "MAX", "WHO", "MAD"],
      ["PICTURE", "FRAMED", "ROAD", "SHOW"],
      ["RABBIT", "WHEN", "ROCKY", "SALLY"],
    ],
  },
  {
    id: "89",
    name: "Connections #89",
    createdAt: "2023-09-08T00:00:00.000Z",
    board: {
      "INHERENT NATURE": {
        level: 0,
        members: ["ESSENCE", "HEART", "SPIRIT", "SOUL"],
      },
      "FERMENTED ALCOHOLIC BEVERAGES": {
        level: 1,
        members: ["CIDER", "PORT", "SAKE", "STOUT"],
      },
      "PIXAR MOVIES": { level: 2, members: ["BRAVE", "CARS", "COCO", "UP"] },
      "___ TAPE": { level: 3, members: ["DEMO", "RED", "SCOTCH", "TICKER"] },
    },
    startingBoard: [
      ["SOUL", "SCOTCH", "STOUT", "BRAVE"],
      ["RED", "HEART", "UP", "SPIRIT"],
      ["TICKER", "SAKE", "DEMO", "PORT"],
      ["CARS", "ESSENCE", "CIDER", "COCO"],
    ],
  },
  {
    id: "90",
    name: "Connections #90",
    createdAt: "2023-09-09T00:00:00.000Z",
    board: {
      "BASEBALL CALLS": {
        level: 0,
        members: ["BALL", "OUT", "SAFE", "STRIKE"],
      },
      "HEAT SOURCES": {
        level: 1,
        members: ["FORGE", "FURNACE", "KILN", "OVEN"],
      },
      "FISH THAT ARE VERBS": {
        level: 2,
        members: ["CARP", "CATFISH", "FLOUNDER", "SMELT"],
      },
      "SILENT “L”": {
        level: 3,
        members: ["COLONEL", "SALMON", "WALK", "YOLK"],
      },
    },
    startingBoard: [
      ["SMELT", "OUT", "WALK", "OVEN"],
      ["YOLK", "CARP", "FORGE", "BALL"],
      ["CATFISH", "SAFE", "SALMON", "KILN"],
      ["COLONEL", "FURNACE", "STRIKE", "FLOUNDER"],
    ],
  },
  {
    id: "91",
    name: "Connections #91",
    createdAt: "2023-09-10T00:00:00.000Z",
    board: {
      "AMAZON ANIMALS": {
        level: 0,
        members: ["ANACONDA", "CAPYBARA", "JAGUAR", "TOUCAN"],
      },
      "LOWEST POINT": {
        level: 1,
        members: ["BASE", "BOTTOM", "FOOT", "FOUNDATION"],
      },
      MUSICALS: { level: 2, members: ["COMPANY", "GREASE", "HAIR", "RENT"] },
      "SEA ___": { level: 3, members: ["CHANGE", "CUCUMBER", "LEGS", "LION"] },
    },
    startingBoard: [
      ["JAGUAR", "COMPANY", "BOTTOM", "LEGS"],
      ["FOOT", "LION", "TOUCAN", "HAIR"],
      ["CUCUMBER", "FOUNDATION", "GREASE", "ANACONDA"],
      ["RENT", "CAPYBARA", "BASE", "CHANGE"],
    ],
  },
  {
    id: "92",
    name: "Connections #92",
    createdAt: "2023-09-11T00:00:00.000Z",
    board: {
      "HALLOWEEN DECORATIONS": {
        level: 0,
        members: ["BAT", "COBWEB", "PUMPKIN", "TOMBSTONE"],
      },
      "TV SHOWS": { level: 1, members: ["24", "BONES", "FIREFLY", "WEEDS"] },
      "SLOT MACHINE SYMBOLS": {
        level: 2,
        members: ["7", "BAR", "BELL", "CHERRY"],
      },
      "NUMBERS IN BOOK TITLES": {
        level: 3,
        members: ["22", "451", "2001", "20,000"],
      },
    },
    startingBoard: [
      ["BELL", "24", "BAT", "7"],
      ["2001", "TOMBSTONE", "BONES", "22"],
      ["FIREFLY", "20,000", "CHERRY", "PUMPKIN"],
      ["451", "COBWEB", "WEEDS", "BAR"],
    ],
  },
  {
    id: "93",
    name: "Connections #93",
    createdAt: "2023-09-12T00:00:00.000Z",
    board: {
      "HOT DRINKS": { level: 0, members: ["CHAI", "COCOA", "COFFEE", "TEA"] },
      "ANIMAL SOUNDS": { level: 1, members: ["BUZZ", "CLUCK", "MEOW", "OINK"] },
      "TREE FEATURES": {
        level: 2,
        members: ["BARK", "BRANCH", "ROOT", "TRUNK"],
      },
      "INSIDE INFO": { level: 3, members: ["DIRT", "DISH", "SCOOP", "SKINNY"] },
    },
    startingBoard: [
      ["BARK", "DIRT", "TEA", "ROOT"],
      ["BUZZ", "COFFEE", "DISH", "SKINNY"],
      ["TRUNK", "MEOW", "COCOA", "SCOOP"],
      ["OINK", "CHAI", "CLUCK", "BRANCH"],
    ],
  },
  {
    id: "94",
    name: "Connections #94",
    createdAt: "2023-09-13T00:00:00.000Z",
    board: {
      "“SKEDADDLE!”": {
        level: 0,
        members: ["GET OUT", "GO", "LEAVE", "SCRAM"],
      },
      PRONOUNS: { level: 1, members: ["ME", "THEM", "US", "YOU"] },
      ANAGRAMS: { level: 2, members: ["NOPE", "OPEN", "PEON", "PONE"] },
      "___ BABY": { level: 3, members: ["BEANIE", "FUR", "NEPO", "SANTA"] },
    },
    startingBoard: [
      ["NOPE", "BEANIE", "US", "OPEN"],
      ["FUR", "GET OUT", "YOU", "SANTA"],
      ["PEON", "THEM", "GO", "PONE"],
      ["LEAVE", "NEPO", "ME", "SCRAM"],
    ],
  },
  {
    id: "95",
    name: "Connections #95",
    createdAt: "2023-09-14T00:00:00.000Z",
    board: {
      "EYE PARTS": { level: 0, members: ["IRIS", "LENS", "PUPIL", "RETINA"] },
      COUNTERFEIT: { level: 1, members: ["BOGUS", "FAKE", "PHONY", "SHAM"] },
      "RADIO LINGO": { level: 2, members: ["COPY", "OUT", "OVER", "ROGER"] },
      "SONGS THAT ARE NAMES": {
        level: 3,
        members: ["ALEJANDRO", "LOLA", "MICHELLE", "STAN"],
      },
    },
    startingBoard: [
      ["IRIS", "OUT", "FAKE", "MICHELLE"],
      ["COPY", "STAN", "ROGER", "BOGUS"],
      ["LENS", "OVER", "LOLA", "PUPIL"],
      ["SHAM", "ALEJANDRO", "RETINA", "PHONY"],
    ],
  },
  {
    id: "96",
    name: "Connections #96",
    createdAt: "2023-09-15T00:00:00.000Z",
    board: {
      BOVIDS: { level: 0, members: ["BUFFALO", "COW", "GOAT", "SHEEP"] },
      "EMIT LIGHT": { level: 1, members: ["BEAM", "GLOW", "RADIATE", "SHINE"] },
      "GYMNASTICS APPARATUS": {
        level: 2,
        members: ["FLOOR", "HORSE", "RINGS", "VAULT"],
      },
      "WORDS THAT SOUND LIKE TWO LETTERS": {
        level: 3,
        members: ["CUTIE", "ENVY", "EXCEL", "SEEDY"],
      },
    },
    startingBoard: [
      ["FLOOR", "SHINE", "CUTIE", "COW"],
      ["GLOW", "SEEDY", "HORSE", "BEAM"],
      ["EXCEL", "GOAT", "VAULT", "ENVY"],
      ["BUFFALO", "RINGS", "SHEEP", "RADIATE"],
    ],
  },
  {
    id: "97",
    name: "Connections #97",
    createdAt: "2023-09-16T00:00:00.000Z",
    board: {
      "FAIRY TALE FIGURES": {
        level: 0,
        members: ["GIANT", "PRINCESS", "WITCH", "WOLF"],
      },
      "CHESS TERMS": {
        level: 1,
        members: ["BISHOP", "MATE", "GAMBIT", "QUEEN"],
      },
      "“PEANUTS” CHARACTERS": {
        level: 2,
        members: ["CHARLIE", "PEPPERMINT PATTY", "PIGPEN", "WOODSTOCK"],
      },
      "I LOVE ___": {
        level: 3,
        members: ["LUCY", "NEW YORK", "ROCK 'N ROLL", "YOU"],
      },
    },
    startingBoard: [
      ["WOODSTOCK", "GAMBIT", "NEW YORK", "GIANT"],
      ["QUEEN", "ROCK 'N ROLL", "WOLF", "CHARLIE"],
      ["YOU", "PEPPERMINT PATTY", "MATE", "PRINCESS"],
      ["PIGPEN", "WITCH", "LUCY", "BISHOP"],
    ],
  },
  {
    id: "98",
    name: "Connections #98",
    createdAt: "2023-09-17T00:00:00.000Z",
    board: {
      FRUITS: { level: 0, members: ["APRICOT", "FIG", "GRAPE", "LIME"] },
      LUXURIOUS: {
        level: 1,
        members: ["DELUXE", "GRAND", "LAVISH", "OPULENT"],
      },
      "BEST ACTRESS OSCAR WINNERS": {
        level: 2,
        members: ["BERRY", "FOSTER", "STONE", "SWANK"],
      },
      "WHAT “GREEN” MIGHT MEAN": {
        level: 3,
        members: ["ENVIOUS", "FRESH", "NAIVE", "UNWELL"],
      },
    },
    startingBoard: [
      ["SWANK", "FIG", "FRESH", "GRAND"],
      ["LIME", "STONE", "ENVIOUS", "FOSTER"],
      ["DELUXE", "NAIVE", "LAVISH", "APRICOT"],
      ["GRAPE", "OPULENT", "BERRY", "UNWELL"],
    ],
  },
  {
    id: "99",
    name: "Connections #99",
    createdAt: "2023-09-18T00:00:00.000Z",
    board: {
      INTELLIGENT: {
        level: 0,
        members: ["BRIGHT", "CLEVER", "QUICK", "SHARP"],
      },
      AIRLINES: {
        level: 1,
        members: ["ALASKA", "FRONTIER", "SOUTHWEST", "SPIRIT"],
      },
      "WESTERN TROPES": {
        level: 2,
        members: ["COWBOY", "DRIFTER", "OUTLAW", "SHERIFF"],
      },
      "TV SHOW TITLE SURNAMES": {
        level: 3,
        members: ["LASSO", "MARS", "ROGERS", "SMART"],
      },
    },
    startingBoard: [
      ["SMART", "COWBOY", "MARS", "LASSO"],
      ["FRONTIER", "SHARP", "SHERIFF", "ALASKA"],
      ["QUICK", "SPIRIT", "BRIGHT", "OUTLAW"],
      ["DRIFTER", "CLEVER", "ROGERS", "SOUTHWEST"],
    ],
  },
  {
    id: "100",
    name: "Connections #100",
    createdAt: "2023-09-19T00:00:00.000Z",
    board: {
      "WEB BROWSER-RELATED": {
        level: 0,
        members: ["BOOKMARK", "HISTORY", "TAB", "WINDOW"],
      },
      "SHIRT FEATURES": {
        level: 1,
        members: ["BUTTON", "COLLAR", "CUFF", "POCKET"],
      },
      CONNECTION: { level: 2, members: ["BOND", "LINK", "RELATION", "TIE"] },
      "DIRTY ___": {
        level: 3,
        members: ["DOZEN", "JOKE", "LAUNDRY", "MARTINI"],
      },
    },
    startingBoard: [
      ["LINK", "LAUNDRY", "BUTTON", "WINDOW"],
      ["COLLAR", "TAB", "MARTINI", "BOND"],
      ["RELATION", "JOKE", "TIE", "HISTORY"],
      ["CUFF", "BOOKMARK", "POCKET", "DOZEN"],
    ],
  },
  {
    id: "101",
    name: "Connections #101",
    createdAt: "2023-09-20T00:00:00.000Z",
    board: {
      REPLACEMENT: { level: 0, members: ["BACKUP", "COPY", "EXTRA", "SPARE"] },
      BOWLING: { level: 1, members: ["ALLEY", "BALL", "LANE", "PIN"] },
      "COMMON MERCH ITEMS": {
        level: 2,
        members: ["MUG", "PEN", "TEE", "TOTE"],
      },
      "NUMBER HOMOPHONES": { level: 3, members: ["ATE", "FOR", "TOO", "WON"] },
    },
    startingBoard: [
      ["EXTRA", "BALL", "WON", "MUG"],
      ["PIN", "COPY", "TOO", "TEE"],
      ["ATE", "SPARE", "PEN", "LANE"],
      ["ALLEY", "TOTE", "FOR", "BACKUP"],
    ],
  },
  {
    id: "102",
    name: "Connections #102",
    createdAt: "2023-09-21T00:00:00.000Z",
    board: {
      "RESTAURANT WORKERS": {
        level: 0,
        members: ["BARTENDER", "CHEF", "HOST", "SERVER"],
      },
      "MOTOR VEHICLES": {
        level: 1,
        members: ["BUS", "CAR", "MOTORCYCLE", "TRUCK"],
      },
      MUPPETS: { level: 2, members: ["ANIMAL", "BEAKER", "GONZO", "SCOOTER"] },
      "HAND- AND FOOT-RELATED SLANG": {
        level: 3,
        members: ["DIGIT", "DOG", "MITT", "PIGGY"],
      },
    },
    startingBoard: [
      ["CHEF", "DOG", "ANIMAL", "CAR"],
      ["MITT", "BUS", "HOST", "SCOOTER"],
      ["TRUCK", "DIGIT", "BEAKER", "PIGGY"],
      ["BARTENDER", "GONZO", "MOTORCYCLE", "SERVER"],
    ],
  },
  {
    id: "103",
    name: "Connections #103",
    createdAt: "2023-09-22T00:00:00.000Z",
    board: {
      "SODA FOUNTAIN ORDERS": {
        level: 0,
        members: ["FLOAT", "MALT", "SHAKE", "SUNDAE"],
      },
      "SET, AS PLANS": {
        level: 1,
        members: ["CONCRETE", "FIRM", "SOLID", "TANGIBLE"],
      },
      "M. NIGHT SHYAMALAN MOVIES": {
        level: 2,
        members: ["GLASS", "OLD", "SIGNS", "SPLIT"],
      },
      ___BOARD: { level: 3, members: ["DASH", "HOVER", "KEY", "STAR"] },
    },
    startingBoard: [
      ["FLOAT", "STAR", "FIRM", "HOVER"],
      ["SPLIT", "CONCRETE", "SUNDAE", "GLASS"],
      ["KEY", "SOLID", "DASH", "SHAKE"],
      ["OLD", "MALT", "SIGNS", "TANGIBLE"],
    ],
  },
  {
    id: "104",
    name: "Connections #104",
    createdAt: "2023-09-23T00:00:00.000Z",
    board: {
      ROBUST: { level: 0, members: ["FIT", "HEALTHY", "SOUND", "STRONG"] },
      DECLINE: { level: 1, members: ["DIP", "DROP", "FALL", "SINK"] },
      "WATER SOURCES": {
        level: 2,
        members: ["FOUNTAIN", "SPRING", "TAP", "WELL"],
      },
      "WOMEN SINGERS": {
        level: 3,
        members: ["KEYS", "NICKS", "SUMMER", "SWIFT"],
      },
    },
    startingBoard: [
      ["FALL", "STRONG", "SWIFT", "DROP"],
      ["KEYS", "SPRING", "SOUND", "SINK"],
      ["FIT", "DIP", "SUMMER", "TAP"],
      ["FOUNTAIN", "NICKS", "HEALTHY", "WELL"],
    ],
  },
  {
    id: "105",
    name: "Connections #105",
    createdAt: "2023-09-24T00:00:00.000Z",
    board: {
      "KITCHEN UTENSILS": {
        level: 0,
        members: ["GRATER", "LADLE", "PEELER", "WHISK"],
      },
      VERTEBRATES: { level: 1, members: ["BIRD", "FISH", "MAMMAL", "REPTILE"] },
      "SUPER MARIO-RELATED": {
        level: 2,
        members: ["DINOSAUR", "MUSHROOM", "PLUMBER", "PRINCESS"],
      },
      "SITCOM FAMILIES": {
        level: 3,
        members: ["BUNKER", "CLEAVER", "PARTRIDGE", "TANNER"],
      },
    },
    startingBoard: [
      ["CLEAVER", "FISH", "PRINCESS", "LADLE"],
      ["DINOSAUR", "PARTRIDGE", "BIRD", "MUSHROOM"],
      ["REPTILE", "PLUMBER", "WHISK", "TANNER"],
      ["GRATER", "BUNKER", "PEELER", "MAMMAL"],
    ],
  },
  {
    id: "106",
    name: "Connections #106",
    createdAt: "2023-09-25T00:00:00.000Z",
    board: {
      "BRIDAL ACCESSORIES": {
        level: 0,
        members: ["BOUQUET", "RING", "TRAIN", "VEIL"],
      },
      "“C” WORDS FOR “ENVELOP”": {
        level: 1,
        members: ["CAKE", "COAT", "COVER", "CRUST"],
      },
      JACKS: { level: 2, members: ["BLACK", "FROST", "MA", "SPARROW"] },
      "SOCIAL MEDIA APP ENDINGS": {
        level: 3,
        members: ["BOOK", "GRAM", "IN", "TUBE"],
      },
    },
    startingBoard: [
      ["TRAIN", "COAT", "GRAM", "MA"],
      ["BLACK", "BOOK", "CAKE", "RING"],
      ["FROST", "BOUQUET", "TUBE", "CRUST"],
      ["VEIL", "COVER", "IN", "SPARROW"],
    ],
  },
  {
    id: "107",
    name: "Connections #107",
    createdAt: "2023-09-26T00:00:00.000Z",
    board: {
      SNAKES: { level: 0, members: ["BOA", "MAMBA", "PYTHON", "VIPER"] },
      LINGERIE: { level: 1, members: ["GARTER", "SLIP", "TEDDY", "THONG"] },
      SUMMARY: {
        level: 2,
        members: ["ABSTRACT", "BRIEF", "DIGEST", "RUNDOWN"],
      },
      "FULL ___": { level: 3, members: ["CIRCLE", "HOUSE", "MONTY", "MOON"] },
    },
    startingBoard: [
      ["GARTER", "BRIEF", "MONTY", "PYTHON"],
      ["DIGEST", "MOON", "SLIP", "ABSTRACT"],
      ["THONG", "BOA", "RUNDOWN", "CIRCLE"],
      ["MAMBA", "TEDDY", "HOUSE", "VIPER"],
    ],
  },
  {
    id: "108",
    name: "Connections #108",
    createdAt: "2023-09-27T00:00:00.000Z",
    board: {
      "PRODUCED BY TREES": {
        level: 0,
        members: ["ACORN", "CONE", "POLLEN", "SAP"],
      },
      "CANDY STORE TREATS": {
        level: 1,
        members: ["CHOCOLATE", "GUM", "LICORICE", "LOLLIPOP"],
      },
      "TARGET OF A SCHEME": {
        level: 2,
        members: ["CHUMP", "FOOL", "MARK", "SUCKER"],
      },
      "THINGS WITH EYE(S)": {
        level: 3,
        members: ["FACE", "HURRICANE", "NEEDLE", "POTATO"],
      },
    },
    startingBoard: [
      ["GUM", "CONE", "FOOL", "POTATO"],
      ["POLLEN", "MARK", "FACE", "CHUMP"],
      ["SUCKER", "CHOCOLATE", "NEEDLE", "ACORN"],
      ["LICORICE", "SAP", "LOLLIPOP", "HURRICANE"],
    ],
  },
  {
    id: "109",
    name: "Connections #109",
    createdAt: "2023-09-28T00:00:00.000Z",
    board: {
      "REFLECT LIGHT": {
        level: 0,
        members: ["FLASH", "GLEAM", "GLITTER", "SPARKLE"],
      },
      "WAYS TO GATHER FOOD": {
        level: 1,
        members: ["FISH", "FORAGE", "HUNT", "TRAP"],
      },
      "RAP SUBGENRES": {
        level: 2,
        members: ["BOUNCE", "CRUNK", "DRILL", "GRIME"],
      },
      "LIGHT ___": { level: 3, members: ["BEER", "BULB", "RAIL", "YEAR"] },
    },
    startingBoard: [
      ["FLASH", "DRILL", "FISH", "BULB"],
      ["BEER", "TRAP", "SPARKLE", "GRIME"],
      ["GLITTER", "YEAR", "HUNT", "GLEAM"],
      ["FORAGE", "CRUNK", "RAIL", "BOUNCE"],
    ],
  },
  {
    id: "110",
    name: "Connections #110",
    createdAt: "2023-09-29T00:00:00.000Z",
    board: {
      "VERY IMPORTANT": {
        level: 0,
        members: ["CENTRAL", "CRITICAL", "KEY", "VITAL"],
      },
      "RECYCLING CATEGORIES": {
        level: 1,
        members: ["GLASS", "METAL", "PAPER", "PLASTIC"],
      },
      HUDSONS: { level: 2, members: ["HENRY", "JENNIFER", "KATE", "ROCK"] },
      "WHAT “BEAT” MAY MEAN": {
        level: 3,
        members: ["ASSIGNMENT", "DEFEAT", "TEMPO", "TIRED"],
      },
    },
    startingBoard: [
      ["METAL", "KEY", "ROCK", "TEMPO"],
      ["HENRY", "TIRED", "PAPER", "CENTRAL"],
      ["ASSIGNMENT", "VITAL", "JENNIFER", "DEFEAT"],
      ["GLASS", "KATE", "PLASTIC", "CRITICAL"],
    ],
  },
  {
    id: "111",
    name: "Connections #111",
    createdAt: "2023-09-30T00:00:00.000Z",
    board: {
      "PLAYING CARD SUITS": {
        level: 0,
        members: ["CLUB", "DIAMOND", "HEART", "SPADE"],
      },
      "GOLF CLUBS": { level: 1, members: ["IRON", "PUTTER", "WEDGE", "WOOD"] },
      YEARN: { level: 2, members: ["ACHE", "LONG", "PINE", "THIRST"] },
      INSUFFICIENT: { level: 3, members: ["LOW", "SHORT", "SHY", "WANTING"] },
    },
    startingBoard: [
      ["SHY", "HEART", "ACHE", "WOOD"],
      ["LONG", "IRON", "CLUB", "PINE"],
      ["DIAMOND", "SHORT", "THIRST", "WEDGE"],
      ["WANTING", "SPADE", "PUTTER", "LOW"],
    ],
  },
  {
    id: "112",
    name: "Connections #112",
    createdAt: "2023-10-01T00:00:00.000Z",
    board: {
      "COFFEE COUNTER ITEMS": {
        level: 0,
        members: ["CUP", "LID", "STIRRER", "STRAW"],
      },
      "NOCTURNAL ANIMALS": {
        level: 1,
        members: ["BAT", "MOTH", "OWL", "WOLF"],
      },
      "THINGS THAT ARE RED": {
        level: 2,
        members: ["BEET", "BRICK", "CARDINAL", "POPPY"],
      },
      "___ FIGURE": {
        level: 3,
        members: ["ACTION", "BALLPARK", "GO", "STICK"],
      },
    },
    startingBoard: [
      ["STRAW", "BALLPARK", "BAT", "STICK"],
      ["GO", "OWL", "BRICK", "CUP"],
      ["CARDINAL", "LID", "ACTION", "BEET"],
      ["WOLF", "POPPY", "MOTH", "STIRRER"],
    ],
  },
  {
    id: "113",
    name: "Connections #113",
    createdAt: "2023-10-02T00:00:00.000Z",
    board: {
      "WAYS TO SHOW RESPECT": {
        level: 0,
        members: ["BOW", "KNEEL", "SALUTE", "STAND"],
      },
      "IPHONE APPS": { level: 1, members: ["CLOCK", "MAIL", "MAPS", "NOTES"] },
      "ANIMAL COVERINGS": {
        level: 2,
        members: ["DOWN", "FUR", "SCALES", "SHELL"],
      },
      "“POINTERS”": { level: 3, members: ["ARROW", "DOG", "FINGER", "HINT"] },
    },
    startingBoard: [
      ["DOG", "BOW", "CLOCK", "SHELL"],
      ["STAND", "DOWN", "ARROW", "NOTES"],
      ["MAIL", "SALUTE", "SCALES", "FINGER"],
      ["HINT", "MAPS", "KNEEL", "FUR"],
    ],
  },
  {
    id: "114",
    name: "Connections #114",
    createdAt: "2023-10-03T00:00:00.000Z",
    board: {
      "LONG-HAIRED ANIMALS": {
        level: 0,
        members: ["AFGHAN", "ALPACA", "ANGORA", "YAK"],
      },
      "PRATTLE ON": { level: 1, members: ["BLATHER", "CHAT", "JABBER", "GAB"] },
      "SNEAKER BRANDS": {
        level: 2,
        members: ["CONVERSE", "JORDAN", "PUMA", "VANS"],
      },
      "___ BALLOON": {
        level: 3,
        members: ["LEAD", "SPEECH", "TRIAL", "WATER"],
      },
    },
    startingBoard: [
      ["SPEECH", "PUMA", "AFGHAN", "WATER"],
      ["LEAD", "YAK", "JORDAN", "JABBER"],
      ["ANGORA", "BLATHER", "CONVERSE", "ALPACA"],
      ["CHAT", "VANS", "TRIAL", "GAB"],
    ],
  },
  {
    id: "115",
    name: "Connections #115",
    createdAt: "2023-10-04T00:00:00.000Z",
    board: {
      "CHRISTMAS-RELATED": {
        level: 0,
        members: ["MISTLETOE", "REINDEER", "SNOWMAN", "STOCKING"],
      },
      "MAKE PUBLIC": {
        level: 1,
        members: ["DISPLAY", "EXHIBIT", "PRESENT", "SHOW"],
      },
      "TORUS-SHAPED FOOD": {
        level: 2,
        members: ["BAGEL", "CHEERIO", "DONUT", "LIFESAVER"],
      },
      "THINGS WITH STRIPES": {
        level: 3,
        members: ["CANDY CANE", "CROSSWALK", "REFEREE", "TIGER"],
      },
    },
    startingBoard: [
      ["SHOW", "DONUT", "STOCKING", "TIGER"],
      ["LIFESAVER", "PRESENT", "CANDY CANE", "SNOWMAN"],
      ["REINDEER", "CHEERIO", "EXHIBIT", "REFEREE"],
      ["BAGEL", "DISPLAY", "CROSSWALK", "MISTLETOE"],
    ],
  },
  {
    id: "116",
    name: "Connections #116",
    createdAt: "2023-10-05T00:00:00.000Z",
    board: {
      DIVISION: { level: 0, members: ["ARM", "BRANCH", "CHAPTER", "WING"] },
      "IMPERIAL UNITS": {
        level: 1,
        members: ["BUSHEL", "PECK", "STONE", "TON"],
      },
      "M.L.B. TEAM MEMBER": {
        level: 2,
        members: ["ANGEL", "CUB", "MET", "RED"],
      },
      "INSECT HOMOPHONES": {
        level: 3,
        members: ["AUNT", "BEATLE", "FLEE", "NAT"],
      },
    },
    startingBoard: [
      ["WING", "STONE", "FLEE", "ANGEL"],
      ["PECK", "BEATLE", "RED", "AUNT"],
      ["CHAPTER", "CUB", "BRANCH", "TON"],
      ["BUSHEL", "ARM", "NAT", "MET"],
    ],
  },
  {
    id: "117",
    name: "Connections #117",
    createdAt: "2023-10-06T00:00:00.000Z",
    board: {
      "LAUGHTER, IN A TEXT": {
        level: 0,
        members: ["DEAD", "HAHA", "LOL", "ROFL"],
      },
      "ART MOVEMENTS": { level: 1, members: ["DADA", "DECO", "GOTHIC", "POP"] },
      "“PETER PAN” CHARACTERS": {
        level: 2,
        members: ["HOOK", "NANA", "PETER", "WENDY"],
      },
      "LADY ___": { level: 3, members: ["BIRD", "GAGA", "LUCK", "MACBETH"] },
    },
    startingBoard: [
      ["GAGA", "HAHA", "DECO", "HOOK"],
      ["DADA", "NANA", "POP", "LUCK"],
      ["DEAD", "GOTHIC", "MACBETH", "LOL"],
      ["PETER", "BIRD", "ROFL", "WENDY"],
    ],
  },
  {
    id: "118",
    name: "Connections #118",
    createdAt: "2023-10-07T00:00:00.000Z",
    board: {
      RHYMES: { level: 0, members: ["DARREN", "KAREN", "SHARON", "AARON"] },
      "NATURAL FEATURES": {
        level: 1,
        members: ["DALE", "BROOK", "SAVANNA", "CLIFF"],
      },
      "IRREGULAR VERBS": { level: 2, members: ["DREW", "ROSE", "WILL", "MAY"] },
      PALINDROMES: { level: 3, members: ["EVE", "HANNAH", "OTTO", "NATAN"] },
    },
    startingBoard: [
      ["ROSE", "AARON", "HANNAH", "MAY"],
      ["KAREN", "DALE", "WILL", "NATAN"],
      ["DREW", "EVE", "SHARON", "CLIFF"],
      ["BROOK", "DARREN", "SAVANNA", "OTTO"],
    ],
  },
  {
    id: "119",
    name: "Connections #119",
    createdAt: "2023-10-08T00:00:00.000Z",
    board: {
      "CELEBRATORY OCCASIONS": {
        level: 0,
        members: ["ANNIVERSARY", "BIRTHDAY", "SHOWER", "WEDDING"],
      },
      "PHONE CONNECTIVITY": {
        level: 1,
        members: ["BARS", "RECEPTION", "SERVICE", "SIGNAL"],
      },
      "CITIES AND TOWNS IN ENGLAND": {
        level: 2,
        members: ["BATH", "DERBY", "READING", "SANDWICH"],
      },
      "___ OPERA": { level: 3, members: ["COMIC", "MET", "ROCK", "SOAP"] },
    },
    startingBoard: [
      ["BATH", "ROCK", "BARS", "BIRTHDAY"],
      ["SOAP", "RECEPTION", "WEDDING", "SANDWICH"],
      ["ANNIVERSARY", "COMIC", "DERBY", "SHOWER"],
      ["READING", "SERVICE", "MET", "SIGNAL"],
    ],
  },
  {
    id: "120",
    name: "Connections #120",
    createdAt: "2023-10-09T00:00:00.000Z",
    board: {
      CROPS: { level: 0, members: ["CORN", "CUCUMBER", "PEPPER", "TOMATO"] },
      "SLANG FOR HEAD": {
        level: 1,
        members: ["CROWN", "DOME", "MELON", "NOODLE"],
      },
      SONG: { level: 2, members: ["CUT", "NUMBER", "SINGLE", "TRACK"] },
      "THINGS THAT WHISTLE": {
        level: 3,
        members: ["BIRD", "KETTLE", "REFEREE", "TRAIN"],
      },
    },
    startingBoard: [
      ["KETTLE", "CORN", "NUMBER", "NOODLE"],
      ["TRAIN", "CROWN", "PEPPER", "BIRD"],
      ["SINGLE", "TOMATO", "REFEREE", "TRACK"],
      ["DOME", "CUT", "CUCUMBER", "MELON"],
    ],
  },
  {
    id: "121",
    name: "Connections #121",
    createdAt: "2023-10-10T00:00:00.000Z",
    board: {
      ORIGIN: { level: 0, members: ["GENESIS", "GERM", "SEED", "SOURCE"] },
      "BIBLE BOOKS": { level: 1, members: ["ACTS", "JOB", "KINGS", "MARK"] },
      "N.H.L. TEAMS": {
        level: 2,
        members: ["FLAMES", "KRAKEN", "STARS", "WILD"],
      },
      "POWER ___": { level: 3, members: ["NAP", "PLANT", "RANGER", "TRIP"] },
    },
    startingBoard: [
      ["NAP", "JOB", "SOURCE", "PLANT"],
      ["ACTS", "WILD", "MARK", "STARS"],
      ["GERM", "RANGER", "GENESIS", "KRAKEN"],
      ["TRIP", "FLAMES", "KINGS", "SEED"],
    ],
  },
  {
    id: "122",
    name: "Connections #122",
    createdAt: "2023-10-11T00:00:00.000Z",
    board: {
      "FILM SET DIRECTIVES": {
        level: 0,
        members: ["ACTION", "CAMERA", "CUT", "LIGHTS"],
      },
      "CONDITIONAL WORDS": {
        level: 1,
        members: ["CAN", "COULD", "MAY", "MIGHT"],
      },
      FOREMOST: { level: 2, members: ["HEAD", "LEAD", "PRIME", "TOP"] },
      "___ PAPER": { level: 3, members: ["BUTCHER", "SCRAP", "TOILET", "WAX"] },
    },
    startingBoard: [
      ["CAN", "BUTCHER", "ACTION", "LEAD"],
      ["PRIME", "CUT", "WAX", "MAY"],
      ["TOILET", "TOP", "MIGHT", "CAMERA"],
      ["HEAD", "LIGHTS", "SCRAP", "COULD"],
    ],
  },
  {
    id: "123",
    name: "Connections #123",
    createdAt: "2023-10-12T00:00:00.000Z",
    board: {
      CONCEAL: { level: 0, members: ["BLOCK", "COVER", "HIDE", "MASK"] },
      "PARTS OF A WATCH": {
        level: 1,
        members: ["CROWN", "DIAL", "HAND", "STRAP"],
      },
      "WONDER WOMAN’S COSTUME": {
        level: 2,
        members: ["LASSO", "SHIELD", "SWORD", "TIARA"],
      },
      "THINGS THAT CAN RUN": {
        level: 3,
        members: ["CANDIDATE", "FAUCET", "MASCARA", "NOSE"],
      },
    },
    startingBoard: [
      ["NOSE", "CROWN", "SWORD", "MASK"],
      ["DIAL", "FAUCET", "TIARA", "HAND"],
      ["BLOCK", "MASCARA", "HIDE", "LASSO"],
      ["CANDIDATE", "SHIELD", "STRAP", "COVER"],
    ],
  },
  {
    id: "124",
    name: "Connections #124",
    createdAt: "2023-10-13T00:00:00.000Z",
    board: {
      BEANS: { level: 0, members: ["FAVA", "KIDNEY", "LIMA", "PINTO"] },
      "CITIES BEGINNING WITH “L”": {
        level: 1,
        members: ["LAGOS", "LIMERICK", "LINCOLN", "LUXOR"],
      },
      "POETRY TERMS": {
        level: 2,
        members: ["LINE", "METER", "RHYME", "VERSE"],
      },
      "“THE(E) ___” RAPPERS": {
        level: 3,
        members: ["CREATOR", "DUDE", "RAPPER", "STALLION"],
      },
    },
    startingBoard: [
      ["LINE", "LIMA", "CREATOR", "LIMERICK"],
      ["LINCOLN", "RAPPER", "PINTO", "VERSE"],
      ["STALLION", "RHYME", "LAGOS", "KIDNEY"],
      ["LUXOR", "DUDE", "FAVA", "METER"],
    ],
  },
  {
    id: "125",
    name: "Connections #125",
    createdAt: "2023-10-14T00:00:00.000Z",
    board: {
      BUTT: { level: 0, members: ["BOTTOM", "BUNS", "SEAT", "TAIL"] },
      "ROTARY PHONE PARTS": {
        level: 1,
        members: ["CORD", "CRADLE", "DIAL", "HANDSET"],
      },
      "SLANG FOR HOME": { level: 2, members: ["CRIB", "DIGS", "JOINT", "PAD"] },
      PLUNDER: { level: 3, members: ["BOOTY", "LOOT", "SPOILS", "SWAG"] },
    },
    startingBoard: [
      ["CRADLE", "TAIL", "PAD", "SWAG"],
      ["SEAT", "CRIB", "BOOTY", "CORD"],
      ["SPOILS", "DIAL", "DIGS", "BUNS"],
      ["JOINT", "BOTTOM", "HANDSET", "LOOT"],
    ],
  },
  {
    id: "126",
    name: "Connections #126",
    createdAt: "2023-10-15T00:00:00.000Z",
    board: {
      TOOLS: { level: 0, members: ["FILE", "HAMMER", "LEVEL", "SAW"] },
      PULL: { level: 1, members: ["JERK", "TUG", "WRENCH", "YANK"] },
      "SHORTCUT COMMANDS": {
        level: 2,
        members: ["COPY", "FIND", "PRINT", "SAVE"],
      },
      "TITLE MOVIE ANIMALS": {
        level: 3,
        members: ["BABE", "BEETHOVEN", "CHARLOTTE", "WILLY"],
      },
    },
    startingBoard: [
      ["FILE", "BABE", "WRENCH", "COPY"],
      ["WILLY", "YANK", "SAVE", "HAMMER"],
      ["TUG", "LEVEL", "BEETHOVEN", "PRINT"],
      ["CHARLOTTE", "FIND", "JERK", "SAW"],
    ],
  },
  {
    id: "127",
    name: "Connections #127",
    createdAt: "2023-10-16T00:00:00.000Z",
    board: {
      "DAYS OF THE WEEK": {
        level: 0,
        members: ["FRIDAY", "SATURDAY", "SUNDAY", "THURSDAY"],
      },
      "GO BAD": { level: 1, members: ["ROT", "SOUR", "SPOIL", "TURN"] },
      "“THE ADDAMS FAMILY” CHARACTERS": {
        level: 2,
        members: ["FESTER", "LURCH", "THING", "WEDNESDAY"],
      },
      "FAT ___": { level: 3, members: ["CAT", "CHANCE", "LIP", "TUESDAY"] },
    },
    startingBoard: [
      ["TURN", "SUNDAY", "CAT", "THING"],
      ["SATURDAY", "SOUR", "FRIDAY", "SPOIL"],
      ["CHANCE", "THURSDAY", "LURCH", "LIP"],
      ["WEDNESDAY", "ROT", "TUESDAY", "FESTER"],
    ],
  },
  {
    id: "128",
    name: "Connections #128",
    createdAt: "2023-10-17T00:00:00.000Z",
    board: {
      TAUNTS: { level: 0, members: ["BOO", "HISS", "JEER", "RASPBERRY"] },
      FAILURE: { level: 1, members: ["BOMB", "DUD", "FLOP", "LEMON"] },
      "RUDELY BREAK OFF CONTACT": {
        level: 2,
        members: ["DESERT", "GHOST", "IGNORE", "JILT"],
      },
      "ROCK ___": { level: 3, members: ["BOTTOM", "CANDY", "GARDEN", "STAR"] },
    },
    startingBoard: [
      ["GHOST", "LEMON", "GARDEN", "DESERT"],
      ["STAR", "RASPBERRY", "CANDY", "BOMB"],
      ["FLOP", "HISS", "IGNORE", "BOO"],
      ["BOTTOM", "DUD", "JEER", "JILT"],
    ],
  },
  {
    id: "129",
    name: "Connections #129",
    createdAt: "2023-10-18T00:00:00.000Z",
    board: {
      "SOMETHING TIRESOME": {
        level: 0,
        members: ["BORE", "DRAG", "SNOOZE", "YAWN"],
      },
      "BIT OF WIND": { level: 1, members: ["BREEZE", "DRAFT", "GUST", "PUFF"] },
      PIQUANCY: { level: 2, members: ["BITE", "KICK", "TANG", "ZIP"] },
      "SINGULAR OF THINGS SEEN IN PAIRS": {
        level: 3,
        members: ["BOXER", "GOGGLE", "PANT", "TONG"],
      },
    },
    startingBoard: [
      ["PUFF", "KICK", "BOXER", "YAWN"],
      ["BITE", "PANT", "DRAG", "ZIP"],
      ["SNOOZE", "DRAFT", "GOGGLE", "BORE"],
      ["BREEZE", "TONG", "TANG", "GUST"],
    ],
  },
  {
    id: "130",
    name: "Connections #130",
    createdAt: "2023-10-19T00:00:00.000Z",
    board: {
      FALSIFY: { level: 0, members: ["FABRICATE", "FAKE", "FIX", "FORGE"] },
      "MILD OATHS": {
        level: 1,
        members: ["FIDDLESTICKS", "FIE", "FRICK", "FUDGE"],
      },
      "TV SHOWS": {
        level: 2,
        members: ["FARGO", "FIREFLY", "FLEABAG", "FLIPPER"],
      },
      "FAST ___": {
        level: 3,
        members: ["FASHION", "FOOD", "FORWARD", "FRIENDS"],
      },
    },
    startingBoard: [
      ["FAKE", "FOOD", "FUDGE", "FIREFLY"],
      ["FASHION", "FORWARD", "FORGE", "FRIENDS"],
      ["FIE", "FLEABAG", "FRICK", "FLIPPER"],
      ["FABRICATE", "FIDDLESTICKS", "FARGO", "FIX"],
    ],
  },
  {
    id: "131",
    name: "Connections #131",
    createdAt: "2023-10-20T00:00:00.000Z",
    board: {
      "ANIMAL HOMES": { level: 0, members: ["DEN", "HIVE", "LAIR", "NEST"] },
      "VIRTUAL SPACES": {
        level: 1,
        members: ["CLOUD", "METAVERSE", "NET", "WEB"],
      },
      EQUITABLE: { level: 2, members: ["EQUAL", "EVEN", "FAIR", "JUST"] },
      "___ BURGER": {
        level: 3,
        members: ["GOOD", "IMPOSSIBLE", "NOTHING", "WARREN"],
      },
    },
    startingBoard: [
      ["IMPOSSIBLE", "EVEN", "CLOUD", "HIVE"],
      ["GOOD", "WEB", "JUST", "DEN"],
      ["FAIR", "LAIR", "NOTHING", "NET"],
      ["NEST", "EQUAL", "METAVERSE", "WARREN"],
    ],
  },
  {
    id: "132",
    name: "Connections #132",
    createdAt: "2023-10-21T00:00:00.000Z",
    board: {
      TABLEWARE: { level: 0, members: ["BOWL", "DISH", "PLATE", "SAUCER"] },
      NONSENSE: { level: 1, members: ["BALONEY", "BUNK", "CROCK", "TRIPE"] },
      "BRA PARTS": { level: 2, members: ["CUP", "HOOK", "STRAP", "WIRE"] },
      ACRONYMS: { level: 3, members: ["LASER", "RADAR", "SCUBA", "SPAM"] },
    },
    startingBoard: [
      ["HOOK", "SPAM", "PLATE", "WIRE"],
      ["RADAR", "CUP", "BALONEY", "DISH"],
      ["CROCK", "SAUCER", "LASER", "BUNK"],
      ["BOWL", "STRAP", "TRIPE", "SCUBA"],
    ],
  },
  {
    id: "133",
    name: "Connections #133",
    createdAt: "2023-10-22T00:00:00.000Z",
    board: {
      RELAX: { level: 0, members: ["CHILL", "HANG", "LOAF", "LOUNGE"] },
      "CATCHY SONG": { level: 1, members: ["BANGER", "BOP", "GROOVE", "JAM"] },
      "BRITISH CUISINE": {
        level: 2,
        members: ["MASH", "ROAST", "SCONE", "TRIFLE"],
      },
      "STICKY SITUATION": {
        level: 3,
        members: ["BIND", "PICKLE", "SCRAPE", "SPOT"],
      },
    },
    startingBoard: [
      ["JAM", "LOUNGE", "SCONE", "PICKLE"],
      ["LOAF", "TRIFLE", "BANGER", "HANG"],
      ["MASH", "SCRAPE", "CHILL", "GROOVE"],
      ["BIND", "BOP", "ROAST", "SPOT"],
    ],
  },
  {
    id: "134",
    name: "Connections #134",
    createdAt: "2023-10-23T00:00:00.000Z",
    board: {
      "CELL PHONE MODES": {
        level: 0,
        members: ["FOCUS", "RING", "SILENT", "VIBRATE"],
      },
      IMPEL: { level: 1, members: ["DRIVE", "INSPIRE", "MOTIVATE", "SPUR"] },
      "ROMANTIC BEGINNINGS": {
        level: 2,
        members: ["CONNECTION", "FEELINGS", "SPARK", "VIBE"],
      },
      "HARD ___": { level: 3, members: ["CANDY", "COPY", "KNOCKS", "SELTZER"] },
    },
    startingBoard: [
      ["CANDY", "SPUR", "RING", "FEELINGS"],
      ["FOCUS", "MOTIVATE", "SPARK", "COPY"],
      ["DRIVE", "VIBE", "VIBRATE", "SELTZER"],
      ["CONNECTION", "SILENT", "KNOCKS", "INSPIRE"],
    ],
  },
  {
    id: "135",
    name: "Connections #135",
    createdAt: "2023-10-24T00:00:00.000Z",
    board: {
      "ANIMAL GROUPS": {
        level: 0,
        members: ["COLONY", "HERD", "PRIDE", "SCHOOL"],
      },
      "SMALL OPENING": {
        level: 1,
        members: ["CRANNY", "NICHE", "NOOK", "RECESS"],
      },
      PARADIGMATIC: {
        level: 2,
        members: ["CLASSIC", "DEFINITIVE", "MODEL", "TEXTBOOK"],
      },
      "RHYMING COMPOUND WORDS": {
        level: 3,
        members: ["BACKPACK", "BIGWIG", "DOWNTOWN", "RAGTAG"],
      },
    },
    startingBoard: [
      ["SCHOOL", "MODEL", "DOWNTOWN", "PRIDE"],
      ["TEXTBOOK", "RAGTAG", "CRANNY", "CLASSIC"],
      ["NOOK", "COLONY", "BIGWIG", "RECESS"],
      ["BACKPACK", "DEFINITIVE", "NICHE", "HERD"],
    ],
  },
  {
    id: "136",
    name: "Connections #136",
    createdAt: "2023-10-25T00:00:00.000Z",
    board: {
      "GRAMMAR TENSE TERMS": {
        level: 0,
        members: ["FUTURE", "PAST", "PERFECT", "PRESENT"],
      },
      "“GRACIOUS ME!”": {
        level: 1,
        members: ["GOODNESS", "HEAVENS", "LORD", "MERCY"],
      },
      "12 DAYS OF CHRISTMAS": {
        level: 2,
        members: ["DRUMMER", "LADY", "RING", "SWAN"],
      },
      "___ SYRUP": { level: 3, members: ["CORN", "COUGH", "MAPLE", "SIMPLE"] },
    },
    startingBoard: [
      ["LADY", "PERFECT", "GOODNESS", "MAPLE"],
      ["FUTURE", "MERCY", "DRUMMER", "SIMPLE"],
      ["RING", "COUGH", "HEAVENS", "SWAN"],
      ["PRESENT", "LORD", "CORN", "PAST"],
    ],
  },
  {
    id: "137",
    name: "Connections #137",
    createdAt: "2023-10-26T00:00:00.000Z",
    board: {
      INCREASE: { level: 0, members: ["BUILD", "GROW", "SWELL", "MOUNT"] },
      "EXCELLENT, IN OLD SLANG": {
        level: 1,
        members: ["ACES", "KEEN", "NEATO", "NIFTY"],
      },
      "FINE BUBBLES": {
        level: 2,
        members: ["FOAM", "FROTH", "HEAD", "LATHER"],
      },
      "SPHERICAL THINGS": {
        level: 3,
        members: ["BUBBLE", "GLOBE", "MARBLE", "PEARL"],
      },
    },
    startingBoard: [
      ["ACES", "GLOBE", "HEAD", "GROW"],
      ["BUBBLE", "SWELL", "NEATO", "LATHER"],
      ["NIFTY", "MARBLE", "FOAM", "MOUNT"],
      ["FROTH", "BUILD", "PEARL", "KEEN"],
    ],
  },
  {
    id: "138",
    name: "Connections #138",
    createdAt: "2023-10-27T00:00:00.000Z",
    board: {
      "SHAMELESS BOLDNESS": {
        level: 0,
        members: ["BRASS", "CHEEK", "GALL", "NERVE"],
      },
      "METAL ELEMENTS": {
        level: 1,
        members: ["COPPER", "GOLD", "NICKEL", "SILVER"],
      },
      "W.N.B.A. TEAMS": {
        level: 2,
        members: ["MERCURY", "SKY", "SPARKS", "LIBERTY"],
      },
      "THINGS WITH TRUNKS": {
        level: 3,
        members: ["CARS", "ELEPHANTS", "SWIMMERS", "TREES"],
      },
    },
    startingBoard: [
      ["ELEPHANTS", "CHEEK", "LIBERTY", "GOLD"],
      ["BRASS", "CARS", "MERCURY", "NERVE"],
      ["SILVER", "SKY", "TREES", "COPPER"],
      ["SPARKS", "SWIMMERS", "NICKEL", "GALL"],
    ],
  },
  {
    id: "139",
    name: "Connections #139",
    createdAt: "2023-10-28T00:00:00.000Z",
    board: {
      SENSES: { level: 0, members: ["SIGHT", "SMELL", "TASTE", "TOUCH"] },
      APPEARANCE: { level: 1, members: ["DRESS", "LOOK", "MANNER", "STYLE"] },
      "“AGREE!”": {
        level: 2,
        members: ["DITTO", "LIKEWISE", "SAME", "SECOND"],
      },
      "___ MOON": { level: 3, members: ["BLUE", "HARVEST", "NEW", "SAILOR"] },
    },
    startingBoard: [
      ["NEW", "LOOK", "SAME", "TASTE"],
      ["SECOND", "SAILOR", "TOUCH", "STYLE"],
      ["SIGHT", "DITTO", "DRESS", "HARVEST"],
      ["MANNER", "SMELL", "BLUE", "LIKEWISE"],
    ],
  },
  {
    id: "140",
    name: "Connections #140",
    createdAt: "2023-10-29T00:00:00.000Z",
    board: {
      MISHMASH: { level: 0, members: ["HASH", "JUMBLE", "MEDLEY", "STEW"] },
      "GO UP AGAINST": {
        level: 1,
        members: ["CHALLENGE", "CONFRONT", "FACE", "OPPOSE"],
      },
      "GROUP OF OFFSPRING": {
        level: 2,
        members: ["BROOD", "CLUTCH", "HATCH", "LITTER"],
      },
      "GUITAR PARTS": { level: 3, members: ["BODY", "BRIDGE", "FRET", "NECK"] },
    },
    startingBoard: [
      ["NECK", "CLUTCH", "STEW", "FACE"],
      ["HASH", "FRET", "HATCH", "BRIDGE"],
      ["CHALLENGE", "JUMBLE", "BODY", "BROOD"],
      ["OPPOSE", "LITTER", "MEDLEY", "CONFRONT"],
    ],
  },
  {
    id: "141",
    name: "Connections #141",
    createdAt: "2023-10-30T00:00:00.000Z",
    board: {
      "BIRD FEATURES": {
        level: 0,
        members: ["BEAK", "FEATHER", "TALON", "WING"],
      },
      "BLINK OF AN EYE": {
        level: 1,
        members: ["FLASH", "HEARTBEAT", "SECOND", "WINK"],
      },
      "MAHJONG TILES": {
        level: 2,
        members: ["BAMBOO", "DRAGON", "SEASON", "WIND"],
      },
      "___ BUTTON": { level: 3, members: ["BELLY", "HOT", "PANIC", "SNOOZE"] },
    },
    startingBoard: [
      ["TALON", "HEARTBEAT", "HOT", "FLASH"],
      ["BELLY", "WING", "DRAGON", "SNOOZE"],
      ["SECOND", "SEASON", "WINK", "FEATHER"],
      ["BAMBOO", "BEAK", "PANIC", "WIND"],
    ],
  },
  {
    id: "142",
    name: "Connections #142",
    createdAt: "2023-10-31T00:00:00.000Z",
    board: {
      FLOWERS: { level: 0, members: ["DAISY", "ROSE", "TULIP", "VIOLET"] },
      "SEEN ON A FARM": {
        level: 1,
        members: ["BARN", "CHICKEN", "FARMER", "TRACTOR"],
      },
      "HORROR DIRECTORS": {
        level: 2,
        members: ["ASTER", "CARPENTER", "CRAVEN", "WAN"],
      },
      "___ JACKET": { level: 3, members: ["DUST", "LIFE", "SPORTS", "YELLOW"] },
    },
    startingBoard: [
      ["FARMER", "DAISY", "CARPENTER", "YELLOW"],
      ["TULIP", "SPORTS", "TRACTOR", "ROSE"],
      ["CRAVEN", "LIFE", "VIOLET", "WAN"],
      ["BARN", "ASTER", "DUST", "CHICKEN"],
    ],
  },
  {
    id: "143",
    name: "Connections #143",
    createdAt: "2023-11-01T00:00:00.000Z",
    board: {
      "SOCIAL MEDIA ACTIONS": {
        level: 0,
        members: ["FOLLOW", "LIKE", "SHARE", "SUBSCRIBE"],
      },
      "USE A NEEDLE AND THREAD": {
        level: 1,
        members: ["DARN", "HEM", "SEAM", "SEW"],
      },
      "SHOWS SET IN HOSPITALS": {
        level: 2,
        members: ["ER", "HOUSE", "RATCHED", "SCRUBS"],
      },
      "EXPRESSIONS OF HESITATION": {
        level: 3,
        members: ["ERM", "UH", "UM", "WELL"],
      },
    },
    startingBoard: [
      ["WELL", "LIKE", "UM", "HOUSE"],
      ["HEM", "ER", "DARN", "FOLLOW"],
      ["SEAM", "SHARE", "ERM", "SCRUBS"],
      ["SUBSCRIBE", "RATCHED", "UH", "SEW"],
    ],
  },
  {
    id: "144",
    name: "Connections #144",
    createdAt: "2023-11-02T00:00:00.000Z",
    board: {
      IGNITE: { level: 0, members: ["BURN", "KINDLE", "LIGHT", "TORCH"] },
      INFORMATION: { level: 1, members: ["DATA", "INFO", "INTEL", "NEWS"] },
      "SMALL WOODED AREA": {
        level: 2,
        members: ["DELL", "GLEN", "HOLLOW", "VALLEY"],
      },
      "THINGS WITH CORES": {
        level: 3,
        members: ["APPLE", "COMPUTER", "PLANET", "REACTOR"],
      },
    },
    startingBoard: [
      ["NEWS", "COMPUTER", "LIGHT", "VALLEY"],
      ["APPLE", "KINDLE", "PLANET", "INTEL"],
      ["TORCH", "DELL", "DATA", "GLEN"],
      ["INFO", "BURN", "HOLLOW", "REACTOR"],
    ],
  },
  {
    id: "145",
    name: "Connections #145",
    createdAt: "2023-11-03T00:00:00.000Z",
    board: {
      NEVERTHELESS: {
        level: 0,
        members: ["HOWEVER", "STILL", "THOUGH", "YET"],
      },
      "REPEATED WORDS IN EXPRESSIONS": {
        level: 1,
        members: ["HEAR", "KNOCK", "THERE", "TUT"],
      },
      "WORDS ABBREVIATED WITH LETTERS": {
        level: 2,
        members: ["ARE", "SEE", "WHY", "YOU"],
      },
      "ROYAL ___": { level: 3, members: ["FAMILY", "FLUSH", "JELLY", "WE"] },
    },
    startingBoard: [
      ["ARE", "WE", "THERE", "YET"],
      ["YOU", "SEE", "JELLY", "TUT"],
      ["STILL", "FAMILY", "KNOCK", "HOWEVER"],
      ["HEAR", "WHY", "THOUGH", "FLUSH"],
    ],
  },
  {
    id: "146",
    name: "Connections #146",
    createdAt: "2023-11-04T00:00:00.000Z",
    board: {
      "WAYS TO PREPARE": {
        level: 0,
        members: ["DRILL", "PRACTICE", "STUDY", "TRAIN"],
      },
      "HOLLOW CYLINDERS": {
        level: 1,
        members: ["HOSE", "PIPE", "STRAW", "TUBE"],
      },
      "WEAPONS IN THE GAME CLUE": {
        level: 2,
        members: ["CANDLESTICK", "KNIFE", "ROPE", "WRENCH"],
      },
      "“E-” THINGS": {
        level: 3,
        members: ["CIGARETTE", "BIKE", "TICKET", "SPORTS"],
      },
    },
    startingBoard: [
      ["TRAIN", "STRAW", "TICKET", "ROPE"],
      ["STUDY", "BIKE", "TUBE", "SPORTS"],
      ["KNIFE", "CIGARETTE", "PIPE", "DRILL"],
      ["WRENCH", "HOSE", "PRACTICE", "CANDLESTICK"],
    ],
  },
  {
    id: "147",
    name: "Connections #147",
    createdAt: "2023-11-05T00:00:00.000Z",
    board: {
      UNCHANGING: { level: 0, members: ["EVEN", "LEVEL", "STABLE", "STEADY"] },
      "LONG, SHARP OBJECTS": {
        level: 1,
        members: ["LANCE", "PIN", "SKEWER", "SPIT"],
      },
      "MUSIC PUBLICATIONS": {
        level: 2,
        members: ["BILLBOARD", "PITCHFORK", "ROLLING STONE", "SPIN"],
      },
      "WORDS WITH NUMERICAL PREFIXES": {
        level: 3,
        members: ["UNIFORM", "BICYCLE", "TRILOGY", "QUADRANT"],
      },
    },
    startingBoard: [
      ["BICYCLE", "SPIN", "STABLE", "PIN"],
      ["EVEN", "LANCE", "TRILOGY", "PITCHFORK"],
      ["UNIFORM", "ROLLING STONE", "SKEWER", "LEVEL"],
      ["BILLBOARD", "STEADY", "QUADRANT", "SPIT"],
    ],
  },
  {
    id: "148",
    name: "Connections #148",
    createdAt: "2023-11-06T00:00:00.000Z",
    board: {
      INVESTMENTS: { level: 0, members: ["BOND", "CD", "OPTION", "STOCK"] },
      "TERMS FOR RECORDS": {
        level: 1,
        members: ["LP", "PLATTER", "VINYL", "WAX"],
      },
      "CUBE-SHAPED": { level: 2, members: ["BOUILLON", "DIE", "ICE", "SUGAR"] },
      "WORDS THAT GO WITH “BONE”": {
        level: 3,
        members: ["FUNNY", "HERRING", "SOUP", "WISH"],
      },
    },
    startingBoard: [
      ["ICE", "WAX", "SOUP", "STOCK"],
      ["HERRING", "PLATTER", "CD", "VINYL"],
      ["BOND", "BOUILLON", "LP", "SUGAR"],
      ["WISH", "OPTION", "DIE", "FUNNY"],
    ],
  },
  {
    id: "149",
    name: "Connections #149",
    createdAt: "2023-11-07T00:00:00.000Z",
    board: {
      "DIGITAL NOTIFICATION SOUNDS": {
        level: 0,
        members: ["CHIME", "DING", "PING", "RING"],
      },
      TATTLE: { level: 1, members: ["RAT", "SING", "SNITCH", "SQUEAL"] },
      "GROUP WITHIN A GROUP": {
        level: 2,
        members: ["CAMP", "DIVISION", "FACTION", "WING"],
      },
      "MICROSOFT PRODUCTS": {
        level: 3,
        members: ["BING", "EDGE", "SURFACE", "WORD"],
      },
    },
    startingBoard: [
      ["BING", "CAMP", "PING", "RAT"],
      ["WORD", "SING", "DIVISION", "CHIME"],
      ["WING", "EDGE", "DING", "SNITCH"],
      ["SURFACE", "RING", "SQUEAL", "FACTION"],
    ],
  },
  {
    id: "150",
    name: "Connections #150",
    createdAt: "2023-11-08T00:00:00.000Z",
    board: {
      "BROUGHT TO THE BEACH": {
        level: 0,
        members: ["FLIP-FLOP", "SUNSCREEN", "TOWEL", "UMBRELLA"],
      },
      "TYPES OF FRENCH FRIES": {
        level: 1,
        members: ["CURLY", "SHOESTRING", "WAFFLE", "WEDGE"],
      },
      EQUIVOCATE: { level: 2, members: ["HEDGE", "SEE-SAW", "WAVER", "YO-YO"] },
      "SECOND WORDS OF VODKA COCKTAILS": {
        level: 3,
        members: ["BREEZE", "MARY", "MULE", "RUSSIAN"],
      },
    },
    startingBoard: [
      ["WAFFLE", "TOWEL", "YO-YO", "MARY"],
      ["HEDGE", "WEDGE", "UMBRELLA", "MULE"],
      ["FLIP-FLOP", "BREEZE", "WAVER", "CURLY"],
      ["RUSSIAN", "SHOESTRING", "SUNSCREEN", "SEE-SAW"],
    ],
  },
  {
    id: "151",
    name: "Connections #151",
    createdAt: "2023-11-09T00:00:00.000Z",
    board: {
      "DOCTORS’ ORDERS": {
        level: 0,
        members: ["DIET", "EXERCISE", "FRESH AIR", "SLEEP"],
      },
      "EMAIL ACTIONS": {
        level: 1,
        members: ["COMPOSE", "FORWARD", "REPLY ALL", "SEND"],
      },
      PODCASTS: {
        level: 2,
        members: ["RADIOLAB", "SERIAL", "UP FIRST", "WTF"],
      },
      "___ COMEDY": {
        level: 3,
        members: ["BLACK", "DIVINE", "PROP", "SKETCH"],
      },
    },
    startingBoard: [
      ["COMPOSE", "DIVINE", "EXERCISE", "SEND"],
      ["FRESH AIR", "FORWARD", "SERIAL", "SKETCH"],
      ["WTF", "PROP", "UP FIRST", "DIET"],
      ["BLACK", "RADIOLAB", "SLEEP", "REPLY ALL"],
    ],
  },
  {
    id: "152",
    name: "Connections #152",
    createdAt: "2023-11-10T00:00:00.000Z",
    board: {
      SPICES: { level: 0, members: ["ANISE", "DILL", "NUTMEG", "SAGE"] },
      INTELLIGENT: { level: 1, members: ["BRIGHT", "QUICK", "SHARP", "SMART"] },
      DEODORANTS: {
        level: 2,
        members: ["AXE", "DEGREE", "OLD SPICE", "SECRET"],
      },
      "MEDIEVAL WEAPONS": {
        level: 3,
        members: ["CLUB", "MACE", "SPEAR", "SWORD"],
      },
    },
    startingBoard: [
      ["DILL", "SPEAR", "SECRET", "CLUB"],
      ["QUICK", "DEGREE", "SAGE", "AXE"],
      ["MACE", "BRIGHT", "NUTMEG", "SHARP"],
      ["SWORD", "ANISE", "SMART", "OLD SPICE"],
    ],
  },
  {
    id: "153",
    name: "Connections #153",
    createdAt: "2023-11-11T00:00:00.000Z",
    board: {
      "SPARSE/LACKING": {
        level: 0,
        members: ["LIGHT", "SHORT", "SPARE", "THIN"],
      },
      "FUN TIME": { level: 1, members: ["BALL", "BLAST", "KICK", "RIOT"] },
      "FILMMAKING EQUIPMENT": {
        level: 2,
        members: ["BOOM", "DOLLY", "LENS", "TRIPOD"],
      },
      "“GET A ___!”": { level: 3, members: ["CLUE", "GRIP", "LIFE", "ROOM"] },
    },
    startingBoard: [
      ["KICK", "BALL", "BOOM", "ROOM"],
      ["SHORT", "CLUE", "SPARE", "BLAST"],
      ["DOLLY", "GRIP", "LIFE", "LIGHT"],
      ["RIOT", "TRIPOD", "THIN", "LENS"],
    ],
  },
  {
    id: "154",
    name: "Connections #154",
    createdAt: "2023-11-12T00:00:00.000Z",
    board: {
      PRESIDENTS: { level: 0, members: ["FORD", "GRANT", "LINCOLN", "WILSON"] },
      "SPORTS PROFESSIONALS": {
        level: 1,
        members: ["COACH", "GM", "PLAYER", "SCOUT"],
      },
      "CAR COMPANIES": {
        level: 2,
        members: ["BMW", "HONDA", "JAGUAR", "SUBARU"],
      },
      "COMMON PREFIXES": { level: 3, members: ["AUTO", "POST", "SEMI", "SUB"] },
    },
    startingBoard: [
      ["FORD", "AUTO", "SCOUT", "POST"],
      ["BMW", "GRANT", "SUB", "SUBARU"],
      ["COACH", "JAGUAR", "SEMI", "GM"],
      ["HONDA", "WILSON", "PLAYER", "LINCOLN"],
    ],
  },
  {
    id: "155",
    name: "Connections #155",
    createdAt: "2023-11-13T00:00:00.000Z",
    board: {
      "UNIT OF LANGUAGE": {
        level: 0,
        members: ["LETTER", "PARAGRAPH", "SENTENCE", "WORD"],
      },
      TRADEMARK: {
        level: 1,
        members: ["FEATURE", "HALLMARK", "STAMP", "TRAIT"],
      },
      "FUNNY PERSON": {
        level: 2,
        members: ["CARD", "CLOWN", "CUTUP", "JOKER"],
      },
      "THINGS WITH LEAVES": {
        level: 3,
        members: ["BOOK", "TABLE", "TEA", "TREE"],
      },
    },
    startingBoard: [
      ["STAMP", "WORD", "CLOWN", "TEA"],
      ["BOOK", "CARD", "LETTER", "FEATURE"],
      ["SENTENCE", "HALLMARK", "TREE", "JOKER"],
      ["TRAIT", "TABLE", "CUTUP", "PARAGRAPH"],
    ],
  },
  {
    id: "156",
    name: "Connections #156",
    createdAt: "2023-11-14T00:00:00.000Z",
    board: {
      "BASIC EMOTIONS": {
        level: 0,
        members: ["ANGER", "FEAR", "HAPPINESS", "SURPRISE"],
      },
      "BIT OF VOCAL FANFARE": {
        level: 1,
        members: ["BEHOLD", "PRESTO", "TADA", "VOILA"],
      },
      OBTAIN: { level: 2, members: ["GET", "LAND", "SECURE", "WIN"] },
      "___ ANT": { level: 3, members: ["ADAM", "CARPENTER", "FIRE", "RED"] },
    },
    startingBoard: [
      ["WIN", "FIRE", "HAPPINESS", "PRESTO"],
      ["VOILA", "ADAM", "LAND", "FEAR"],
      ["GET", "ANGER", "BEHOLD", "RED"],
      ["SURPRISE", "CARPENTER", "SECURE", "TADA"],
    ],
  },
  {
    id: "157",
    name: "Connections #157",
    createdAt: "2023-11-15T00:00:00.000Z",
    board: {
      "“GROSS!”": { level: 0, members: ["EW", "ICK", "PU", "UGH"] },
      MAGAZINES: { level: 1, members: ["O", "OK", "US", "W"] },
      "“YES” IN DIFFERENT LANGUAGES": {
        level: 2,
        members: ["HAI", "JA", "SI", "DA"],
      },
      HOMOPHONES: { level: 3, members: ["OUI", "WE", "WEE", "WII"] },
    },
    startingBoard: [
      ["EW", "OK", "WE", "O"],
      ["US", "PU", "SI", "WII"],
      ["DA", "WEE", "UGH", "JA"],
      ["ICK", "HAI", "W", "OUI"],
    ],
  },
  {
    id: "158",
    name: "Connections #158",
    createdAt: "2023-11-16T00:00:00.000Z",
    board: {
      BALDERDASH: { level: 0, members: ["BULL", "HOGWASH", "NONSENSE", "ROT"] },
      HELM: { level: 1, members: ["DIRECT", "GUIDE", "LEAD", "STEER"] },
      "SINGLE/PLURAL ANIMALS": {
        level: 2,
        members: ["BUFFALO", "DEER", "FISH", "MOOSE"],
      },
      "GREAT ___": { level: 3, members: ["DANE", "LAKE", "SEAL", "WHITE"] },
    },
    startingBoard: [
      ["WHITE", "FISH", "LEAD", "BULL"],
      ["MOOSE", "LAKE", "STEER", "ROT"],
      ["DIRECT", "SEAL", "NONSENSE", "DEER"],
      ["HOGWASH", "GUIDE", "BUFFALO", "DANE"],
    ],
  },
  {
    id: "159",
    name: "Connections #159",
    createdAt: "2023-11-17T00:00:00.000Z",
    board: {
      "BODYWEIGHT EXERCISES": {
        level: 0,
        members: ["DIPS", "LUNGES", "PLANKS", "SQUATS"],
      },
      "EMAIL SIGN-OFFS": {
        level: 1,
        members: ["BEST", "CHEERS", "REGARDS", "THANKS"],
      },
      "M.L.B. TEAMS, FOR SHORT": {
        level: 2,
        members: ["CARDS", "JAYS", "NATS", "YANKS"],
      },
      "ELIZABETHS (AND ONE ELISABETH)": {
        level: 3,
        members: ["BANKS", "MOSS", "TAYLOR", "WARREN"],
      },
    },
    startingBoard: [
      ["DIPS", "MOSS", "CARDS", "CHEERS"],
      ["THANKS", "YANKS", "BANKS", "PLANKS"],
      ["JAYS", "LUNGES", "REGARDS", "TAYLOR"],
      ["SQUATS", "NATS", "WARREN", "BEST"],
    ],
  },
  {
    id: "160",
    name: "Connections #160",
    createdAt: "2023-11-18T00:00:00.000Z",
    board: {
      "QUICK PEEK": {
        level: 0,
        members: ["GANDER", "GLANCE", "GLIMPSE", "LOOK"],
      },
      DECEIT: { level: 1, members: ["ACT", "BLUFF", "CHARADE", "FRONT"] },
      "PARTS OF A MOUNTAIN": {
        level: 2,
        members: ["CLIFF", "CRAG", "LEDGE", "RIDGE"],
      },
      HOMOPHONES: { level: 3, members: ["PEAK", "PEEK", "PEKE", "PIQUE"] },
    },
    startingBoard: [
      ["RIDGE", "GANDER", "FRONT", "PEEK"],
      ["LOOK", "CHARADE", "PEAK", "CLIFF"],
      ["BLUFF", "PIQUE", "CRAG", "GLANCE"],
      ["PEKE", "LEDGE", "GLIMPSE", "ACT"],
    ],
  },
  {
    id: "161",
    name: "Connections #161",
    createdAt: "2023-11-19T00:00:00.000Z",
    board: {
      ONSET: { level: 0, members: ["BIRTH", "CREATION", "DAWN", "START"] },
      VENERABLE: { level: 1, members: ["AUGUST", "GRAND", "NOBLE", "REGAL"] },
      WALK: { level: 2, members: ["MARCH", "STEP", "STRIDE", "TREAD"] },
      "___ DAY HOLIDAYS": {
        level: 3,
        members: ["EARTH", "GROUNDHOG", "LABOR", "MAY"],
      },
    },
    startingBoard: [
      ["DAWN", "MAY", "GRAND", "STEP"],
      ["AUGUST", "LABOR", "TREAD", "BIRTH"],
      ["EARTH", "MARCH", "CREATION", "GROUNDHOG"],
      ["NOBLE", "START", "STRIDE", "REGAL"],
    ],
  },
  {
    id: "162",
    name: "Connections #162",
    createdAt: "2023-11-20T00:00:00.000Z",
    board: {
      "RELIGIOUS FIGURES": {
        level: 0,
        members: ["CARDINAL", "LAMA", "MONK", "PASTOR"],
      },
      PRIMATES: {
        level: 1,
        members: ["BABOON", "BONOBO", "GIBBON", "GORILLA"],
      },
      "CHUTNEY VARIETIES": {
        level: 2,
        members: ["MANGO", "MINT", "TAMARIND", "TOMATO"],
      },
      IMITATE: { level: 3, members: ["APE", "MIME", "MIRROR", "PARROT"] },
    },
    startingBoard: [
      ["GORILLA", "MIRROR", "MINT", "CARDINAL"],
      ["PARROT", "PASTOR", "GIBBON", "TOMATO"],
      ["LAMA", "MANGO", "APE", "BABOON"],
      ["TAMARIND", "BONOBO", "MONK", "MIME"],
    ],
  },
  {
    id: "163",
    name: "Connections #163",
    createdAt: "2023-11-21T00:00:00.000Z",
    board: {
      "TYPES OF TEETH": {
        level: 0,
        members: ["CANINE", "FANG", "MOLAR", "TUSK"],
      },
      FASHIONABLE: { level: 1, members: ["CHIC", "HIP", "HOT", "IN"] },
      "DANCE MOVES": { level: 2, members: ["FLOSS", "ROBOT", "VOGUE", "WORM"] },
      "THINGS THAT SUCK": {
        level: 3,
        members: ["LEECH", "STRAW", "VACUUM", "VAMPIRE"],
      },
    },
    startingBoard: [
      ["FLOSS", "STRAW", "HIP", "TUSK"],
      ["VAMPIRE", "HOT", "FANG", "VOGUE"],
      ["CANINE", "ROBOT", "VACUUM", "CHIC"],
      ["WORM", "MOLAR", "IN", "LEECH"],
    ],
  },
  {
    id: "164",
    name: "Connections #164",
    createdAt: "2023-11-22T00:00:00.000Z",
    board: {
      "AREAS BETWEEN MOUNTAINS AND HILLS": {
        level: 0,
        members: ["CANYON", "GULCH", "PASS", "RAVINE"],
      },
      "EAT VORACIOUSLY": {
        level: 1,
        members: ["GORGE", "GULP", "SCARF", "WOLF"],
      },
      "FEATURED IN “SNOW WHITE”": {
        level: 2,
        members: ["APPLE", "BASHFUL", "MIRROR", "QUEEN"],
      },
      "“C” + BIRD": { level: 3, members: ["CHEN", "CLARK", "COWL", "CRAVEN"] },
    },
    startingBoard: [
      ["SCARF", "PASS", "MIRROR", "CLARK"],
      ["RAVINE", "APPLE", "COWL", "WOLF"],
      ["CRAVEN", "CANYON", "GORGE", "BASHFUL"],
      ["GULP", "CHEN", "QUEEN", "GULCH"],
    ],
  },
  {
    id: "165",
    name: "Connections #165",
    createdAt: "2023-11-23T00:00:00.000Z",
    board: {
      "FOODS WITH CRUSTS": {
        level: 0,
        members: ["PASTY", "PIE", "TART", "TURNOVER"],
      },
      "ENDING IN A SILENT “T”": {
        level: 1,
        members: ["BOUQUET", "PARFAIT", "RAGOUT", "RAPPORT"],
      },
      "COUNTRIES WITH RED AND WHITE FLAGS": {
        level: 2,
        members: ["JAPAN", "POLAND", "TUNISIA", "TURKEY"],
      },
      "N.B.A. GREATS": {
        level: 3,
        members: ["BIRD", "CURRY", "JAMES", "JORDAN"],
      },
    },
    startingBoard: [
      ["CURRY", "BOUQUET", "TURKEY", "TURNOVER"],
      ["PIE", "BIRD", "POLAND", "PARFAIT"],
      ["RAPPORT", "JORDAN", "TART", "TUNISIA"],
      ["JAMES", "JAPAN", "RAGOUT", "PASTY"],
    ],
  },
  {
    id: "166",
    name: "Connections #166",
    createdAt: "2023-11-24T00:00:00.000Z",
    board: {
      CRITICIZE: { level: 0, members: ["KNOCK", "PAN", "ROAST", "SLAM"] },
      "REALITY SHOWS": {
        level: 1,
        members: ["ALONE", "CATFISH", "CHOPPED", "SURVIVOR"],
      },
      "CAR BRANDS": { level: 2, members: ["FIAT", "JAGUAR", "MINI", "RAM"] },
      "___ PAD": { level: 3, members: ["BACHELOR", "LILY", "MAXI", "MOUSE"] },
    },
    startingBoard: [
      ["MINI", "MOUSE", "ALONE", "KNOCK"],
      ["RAM", "LILY", "SLAM", "BACHELOR"],
      ["PAN", "CHOPPED", "JAGUAR", "CATFISH"],
      ["MAXI", "SURVIVOR", "ROAST", "FIAT"],
    ],
  },
  {
    id: "167",
    name: "Connections #167",
    createdAt: "2023-11-25T00:00:00.000Z",
    board: {
      SECLUDED: {
        level: 0,
        members: ["HIDDEN", "PRIVATE", "REMOTE", "SECRET"],
      },
      "AGGREGATE SIZE": {
        level: 1,
        members: ["AMOUNT", "NUMBER", "QUANTITY", "VOLUME"],
      },
      "BODIES OF WATER": {
        level: 2,
        members: ["CANAL", "CHANNEL", "SOUND", "STRAIT"],
      },
      "READS THE SAME ROTATED 180°": {
        level: 3,
        members: ["96", "MOW", "NOON", "SIS"],
      },
    },
    startingBoard: [
      ["CHANNEL", "96", "NUMBER", "REMOTE"],
      ["SIS", "VOLUME", "HIDDEN", "SOUND"],
      ["NOON", "SECRET", "STRAIT", "AMOUNT"],
      ["PRIVATE", "QUANTITY", "MOW", "CANAL"],
    ],
  },
  {
    id: "168",
    name: "Connections #168",
    createdAt: "2023-11-26T00:00:00.000Z",
    board: {
      MUNICIPALITIES: {
        level: 0,
        members: ["CITY", "COUNTY", "TOWN", "VILLAGE"],
      },
      "BLENDER BUTTONS": {
        level: 1,
        members: ["CHOP", "GRIND", "PULSE", "PUREE"],
      },
      "FINANCIAL TERMS": {
        level: 2,
        members: ["CAPITAL", "EQUITY", "INTEREST", "STOCK"],
      },
      "___ LEAGUE": {
        level: 3,
        members: ["IVY", "JUSTICE", "LITTLE", "PREMIER"],
      },
    },
    startingBoard: [
      ["CAPITAL", "PULSE", "JUSTICE", "CITY"],
      ["IVY", "TOWN", "GRIND", "EQUITY"],
      ["VILLAGE", "INTEREST", "LITTLE", "CHOP"],
      ["PREMIER", "COUNTY", "PUREE", "STOCK"],
    ],
  },
  {
    id: "169",
    name: "Connections #169",
    createdAt: "2023-11-27T00:00:00.000Z",
    board: {
      "CARRY A TUNE": { level: 0, members: ["HUM", "SING", "SCAT", "WHISTLE"] },
      "WHOLE AMOUNT": { level: 1, members: ["COUNT", "GROSS", "SUM", "TOTAL"] },
      "MOJITO INGREDIENTS": {
        level: 2,
        members: ["LIME", "MINT", "RUM", "SODA"],
      },
      "THINGS THAT ARE “STICKY”": {
        level: 3,
        members: ["GLUE", "GUM", "TAPE", "STICK"],
      },
    },
    startingBoard: [
      ["HUM", "SODA", "GROSS", "STICK"],
      ["MINT", "GUM", "SING", "COUNT"],
      ["TAPE", "LIME", "SUM", "WHISTLE"],
      ["SCAT", "TOTAL", "GLUE", "RUM"],
    ],
  },
  {
    id: "170",
    name: "Connections #170",
    createdAt: "2023-11-28T00:00:00.000Z",
    board: {
      "ROOMS IN A HOUSE": {
        level: 0,
        members: ["BEDROOM", "DEN", "KITCHEN", "STUDY"],
      },
      "LAND SURROUNDED BY WATER": {
        level: 1,
        members: ["ATOLL", "BAR", "ISLAND", "KEY"],
      },
      "FILL TO EXCESS": { level: 2, members: ["CRAM", "JAM", "PACK", "STUFF"] },
      "BEAN ___": { level: 3, members: ["BAG", "COUNTER", "DIP", "SPROUT"] },
    },
    startingBoard: [
      ["BAG", "KEY", "STUDY", "STUFF"],
      ["KITCHEN", "COUNTER", "PACK", "ISLAND"],
      ["DIP", "JAM", "DEN", "SPROUT"],
      ["BAR", "BEDROOM", "CRAM", "ATOLL"],
    ],
  },
  {
    id: "171",
    name: "Connections #171",
    createdAt: "2023-11-29T00:00:00.000Z",
    board: {
      "FOOT PARTS": { level: 0, members: ["ARCH", "BALL", "SOLE", "TOE"] },
      "MUSICAL INSTRUMENTS": {
        level: 1,
        members: ["BASS", "HARP", "HORN", "ORGAN"],
      },
      "DOG COMMANDS": { level: 2, members: ["COME", "DOWN", "SIT", "STAY"] },
      BADDIE: { level: 3, members: ["DOG", "HEEL", "JERK", "SNAKE"] },
    },
    startingBoard: [
      ["DOG", "HORN", "SOLE", "DOWN"],
      ["BASS", "BALL", "COME", "SNAKE"],
      ["TOE", "HARP", "HEEL", "SIT"],
      ["ORGAN", "STAY", "ARCH", "JERK"],
    ],
  },
  {
    id: "172",
    name: "Connections #172",
    createdAt: "2023-11-30T00:00:00.000Z",
    board: {
      AVOID: { level: 0, members: ["DODGE", "DUCK", "ESCAPE", "SKIRT"] },
      "HITCHCOCK MOVIES": {
        level: 1,
        members: ["BIRDS", "NOTORIOUS", "REBECCA", "ROPE"],
      },
      SIDEKICKS: { level: 2, members: ["GOOSE", "HOBBES", "ROBIN", "WATSON"] },
      "___ CHEESE": {
        level: 3,
        members: ["COTTAGE", "CREAM", "SAY", "STRING"],
      },
    },
    startingBoard: [
      ["COTTAGE", "ESCAPE", "REBECCA", "ROBIN"],
      ["DUCK", "CREAM", "GOOSE", "SKIRT"],
      ["STRING", "BIRDS", "SAY", "ROPE"],
      ["HOBBES", "DODGE", "NOTORIOUS", "WATSON"],
    ],
  },
  {
    id: "173",
    name: "Connections #173",
    createdAt: "2023-12-01T00:00:00.000Z",
    board: {
      "PLACES TO SHOP": {
        level: 0,
        members: ["MALL", "MARKET", "OUTLET", "STORE"],
      },
      "WAYS TO REMOVE HAIR": {
        level: 1,
        members: ["SHAVE", "THREAD", "TWEEZE", "WAX"],
      },
      "PORTION OF PROFIT": {
        level: 2,
        members: ["CUT", "PIECE", "SHARE", "TAKE"],
      },
      "KINDS OF WRENCHES": {
        level: 3,
        members: ["ALLEN", "CRESCENT", "MONKEY", "SOCKET"],
      },
    },
    startingBoard: [
      ["WAX", "PIECE", "CRESCENT", "STORE"],
      ["MONKEY", "OUTLET", "THREAD", "SOCKET"],
      ["SHARE", "SHAVE", "MARKET", "CUT"],
      ["MALL", "TAKE", "TWEEZE", "ALLEN"],
    ],
  },
  {
    id: "174",
    name: "Connections #174",
    createdAt: "2023-12-02T00:00:00.000Z",
    board: {
      CONTAINERS: { level: 0, members: ["BASKET", "BIN", "CHEST", "HAMPER"] },
      "CIRCULAR SHAPES": {
        level: 1,
        members: ["BAND", "CIRCLE", "HOOP", "RING"],
      },
      RESTRICT: { level: 2, members: ["CAP", "CHECK", "CURB", "LIMIT"] },
      "___ JAM": { level: 3, members: ["NBA", "PAPER", "PEARL", "TRAFFIC"] },
    },
    startingBoard: [
      ["NBA", "CAP", "HOOP", "HAMPER"],
      ["RING", "PAPER", "BASKET", "CURB"],
      ["CHEST", "PEARL", "CHECK", "BAND"],
      ["TRAFFIC", "BIN", "CIRCLE", "LIMIT"],
    ],
  },
  {
    id: "175",
    name: "Connections #175",
    createdAt: "2023-12-03T00:00:00.000Z",
    board: {
      "MONTHLY BILLS": {
        level: 0,
        members: ["CABLE", "ELECTRIC", "GAS", "WATER"],
      },
      "AUDITORY/RELATED TO SOUND": {
        level: 1,
        members: ["ACOUSTIC", "AUDITORY", "HEARD", "SONIC"],
      },
      CONNECT: { level: 2, members: ["COUPLE", "HITCH", "LINK", "TIE"] },
      "EXCITE, WITH “UP”": {
        level: 3,
        members: ["AMP", "FIRE", "HYPE", "PUMP"],
      },
    },
    startingBoard: [
      ["LINK", "SONIC", "FIRE", "WATER"],
      ["ACOUSTIC", "GAS", "PUMP", "COUPLE"],
      ["HITCH", "HEARD", "ELECTRIC", "AMP"],
      ["CABLE", "TIE", "HYPE", "AUDITORY"],
    ],
  },
  {
    id: "176",
    name: "Connections #176",
    createdAt: "2023-12-04T00:00:00.000Z",
    board: {
      "UNIT OF BREAD": {
        level: 0,
        members: ["BAGUETTE", "BUN", "LOAF", "ROLL"],
      },
      "ASSURE, AS A WIN": {
        level: 1,
        members: ["CLINCH", "GUARANTEE", "LOCK", "SECURE"],
      },
      "SMALL IMPERFECTION": {
        level: 2,
        members: ["CHIP", "MARK", "NICK", "SCRATCH"],
      },
      "HEAD OF ___": {
        level: 3,
        members: ["LETTUCE", "HAIR", "STATE", "STEAM"],
      },
    },
    startingBoard: [
      ["LOCK", "STEAM", "CHIP", "BUN"],
      ["HAIR", "LOAF", "SECURE", "MARK"],
      ["ROLL", "LETTUCE", "SCRATCH", "CLINCH"],
      ["NICK", "BAGUETTE", "GUARANTEE", "STATE"],
    ],
  },
  {
    id: "177",
    name: "Connections #177",
    createdAt: "2023-12-05T00:00:00.000Z",
    board: {
      ENORMOUS: { level: 0, members: ["BIG", "GIANT", "GREAT", "HUGE"] },
      "BOOKSTORE SECTIONS": {
        level: 1,
        members: ["FICTION", "HUMOR", "POETRY", "TRAVEL"],
      },
      "TV SHOWS WITH HAPPY-SOUNDING NAMES": {
        level: 2,
        members: ["CHEERS", "EUPHORIA", "FELICITY", "GLEE"],
      },
      "___ CRANE": {
        level: 3,
        members: ["CONSTRUCTION", "FRASIER", "PAPER", "WHOOPING"],
      },
    },
    startingBoard: [
      ["CONSTRUCTION", "PAPER", "GREAT", "GLEE"],
      ["BIG", "FELICITY", "POETRY", "GIANT"],
      ["HUMOR", "WHOOPING", "CHEERS", "FICTION"],
      ["TRAVEL", "EUPHORIA", "HUGE", "FRASIER"],
    ],
  },
  {
    id: "178",
    name: "Connections #178",
    createdAt: "2023-12-06T00:00:00.000Z",
    board: {
      "FOUND ON SHEET MUSIC": {
        level: 0,
        members: ["CLEF", "NOTE", "REST", "STAFF"],
      },
      "ZODIAC SYMBOLS": {
        level: 1,
        members: ["BULL", "CRAB", "SCALES", "TWINS"],
      },
      "RECORD LABELS": {
        level: 2,
        members: ["CAPITOL", "COLUMBIA", "VIRGIN", "ISLAND"],
      },
      "ZODIAC SIGN BEGINNINGS": {
        level: 3,
        members: ["CAN", "GEM", "LIB", "TAU"],
      },
    },
    startingBoard: [
      ["TAU", "ISLAND", "NOTE", "GEM"],
      ["STAFF", "SCALES", "BULL", "CAN"],
      ["CAPITOL", "CRAB", "REST", "VIRGIN"],
      ["LIB", "COLUMBIA", "TWINS", "CLEF"],
    ],
  },
  {
    id: "179",
    name: "Connections #179",
    createdAt: "2023-12-07T00:00:00.000Z",
    board: {
      "STATE ABBREVIATIONS": { level: 0, members: ["HI", "LA", "MA", "OK"] },
      "CABLE CHANNELS": { level: 1, members: ["BET", "E", "HALLMARK", "USA"] },
      "NATO ALPHABET LETTERS": {
        level: 2,
        members: ["ALPHA", "BRAVO", "ROMEO", "TANGO"],
      },
      "___-___": { level: 3, members: ["BOO", "POM", "TOM", "YO"] },
    },
    startingBoard: [
      ["ALPHA", "BET", "POM", "MA"],
      ["USA", "YO", "LA", "TANGO"],
      ["BRAVO", "OK", "BOO", "E"],
      ["HI", "TOM", "HALLMARK", "ROMEO"],
    ],
  },
  {
    id: "180",
    name: "Connections #180",
    createdAt: "2023-12-08T00:00:00.000Z",
    board: {
      DECLINE: { level: 0, members: ["EBB", "FADE", "FLAG", "WANE"] },
      ABSOLUTE: { level: 1, members: ["PURE", "SHEER", "TOTAL", "UTTER"] },
      EXPRESS: { level: 2, members: ["AIR", "SPEAK", "STATE", "VOICE"] },
      "SUPERHERO LAST NAMES": {
        level: 3,
        members: ["BANNER", "PRINCE", "STARK", "WAYNE"],
      },
    },
    startingBoard: [
      ["STATE", "FLAG", "PURE", "AIR"],
      ["PRINCE", "BANNER", "UTTER", "FADE"],
      ["SPEAK", "SHEER", "STARK", "TOTAL"],
      ["EBB", "VOICE", "WANE", "WAYNE"],
    ],
  },
  {
    id: "181",
    name: "Connections #181",
    createdAt: "2023-12-09T00:00:00.000Z",
    board: {
      "ICE CREAM TREATS": {
        level: 0,
        members: ["FLOAT", "SHAKE", "SPLIT", "SUNDAE"],
      },
      "HARDWARE FASTENERS": {
        level: 1,
        members: ["BOLT", "NAIL", "RIVET", "SCREW"],
      },
      "KINDS OF COOKING OIL": {
        level: 2,
        members: ["CORN", "OLIVE", "PALM", "PEANUT"],
      },
      "STICKY ___": {
        level: 3,
        members: ["FINGERS", "NOTE", "RICE", "WICKET"],
      },
    },
    startingBoard: [
      ["NAIL", "SHAKE", "RICE", "PEANUT"],
      ["NOTE", "FLOAT", "PALM", "SCREW"],
      ["FINGERS", "OLIVE", "BOLT", "SPLIT"],
      ["CORN", "RIVET", "WICKET", "SUNDAE"],
    ],
  },
  {
    id: "182",
    name: "Connections #182",
    createdAt: "2023-12-10T00:00:00.000Z",
    board: {
      "JUMP INTO THE AIR": {
        level: 3,
        members: ["BOUND", "LEAP", "SPRING", "VAULT"],
      },
      "PARTS OF A RIVER": {
        level: 0,
        members: ["BANK", "BED", "DELTA", "MOUTH"],
      },
      "SOMETHING EASY TO DO": {
        level: 1,
        members: ["BREEZE", "CINCH", "PICNIC", "SNAP"],
      },
      "WRAP AROUND IN A CIRCLE": {
        level: 2,
        members: ["COIL", "SPIRAL", "TWIST", "WIND"],
      },
    },
    startingBoard: [
      ["SPRING", "BREEZE", "SPIRAL", "BANK"],
      ["WIND", "VAULT", "MOUTH", "SNAP"],
      ["LEAP", "BED", "TWIST", "CINCH"],
      ["PICNIC", "COIL", "BOUND", "DELTA"],
    ],
  },
  {
    id: "183",
    name: "Connections #183",
    createdAt: "2023-12-11T00:00:00.000Z",
    board: {
      "COME DOWN TO REST": {
        level: 1,
        members: ["PERCH", "ROOST", "SETTLE", "LAND"],
      },
      "LUXURIOUS FABRICS": {
        level: 0,
        members: ["CHIFFON", "SATIN", "SILK", "VELVET"],
      },
      "SHOE PARTS": { level: 2, members: ["EYELET", "LACE", "SOLE", "TONGUE"] },
      "THINGS THAT ARE DELIVERED": {
        level: 3,
        members: ["BABY", "BLOW", "PACKAGE", "SPEECH"],
      },
    },
    startingBoard: [
      ["SILK", "BLOW", "LACE", "LAND"],
      ["SOLE", "BABY", "VELVET", "TONGUE"],
      ["PERCH", "PACKAGE", "SETTLE", "SPEECH"],
      ["SATIN", "EYELET", "ROOST", "CHIFFON"],
    ],
  },
  {
    id: "184",
    name: "Connections #184",
    createdAt: "2023-12-12T00:00:00.000Z",
    board: {
      FOLLOW: { level: 1, members: ["SHADOW", "TAIL", "TRACK", "TRAIL"] },
      "MURKY CONDITION": {
        level: 0,
        members: ["CLOUD", "FOG", "HAZE", "MIST"],
      },
      "PINBALL MACHINE COMPONENTS": {
        level: 2,
        members: ["BALL", "BUMPER", "FLIPPER", "PLUNGER"],
      },
      "___LAND COUNTRIES": {
        level: 3,
        members: ["ICE", "IRE", "FIN", "NETHER"],
      },
    },
    startingBoard: [
      ["BALL", "TAIL", "CLOUD", "FIN"],
      ["SHADOW", "ICE", "FLIPPER", "FOG"],
      ["BUMPER", "TRACK", "HAZE", "IRE"],
      ["NETHER", "PLUNGER", "TRAIL", "MIST"],
    ],
  },
  {
    id: "185",
    name: "Connections #185",
    createdAt: "2023-12-13T00:00:00.000Z",
    board: {
      "GOLF COURSE PARTS": {
        level: 0,
        members: ["BUNKER", "FAIRWAY", "GREEN", "ROUGH"],
      },
      INDECENT: { level: 2, members: ["BAWDY", "BLUE", "COARSE", "RISQUE"] },
      "“I GIVE!”": { level: 1, members: ["ENOUGH", "MERCY", "STOP", "UNCLE"] },
      "”-OUGH” WORDS THAT DON’T RHYME": {
        level: 3,
        members: ["BOUGH", "COUGH", "DOUGH", "TOUGH"],
      },
    },
    startingBoard: [
      ["TOUGH", "STOP", "ROUGH", "BLUE"],
      ["GREEN", "DOUGH", "COARSE", "ENOUGH"],
      ["COUGH", "UNCLE", "BOUGH", "BAWDY"],
      ["BUNKER", "RISQUE", "MERCY", "FAIRWAY"],
    ],
  },
  {
    id: "186",
    name: "Connections #186",
    createdAt: "2023-12-14T00:00:00.000Z",
    board: {
      PESTER: { level: 0, members: ["BADGER", "BUG", "HOUND", "NAG"] },
      SEPARATE: { level: 2, members: ["DIVIDE", "FORK", "PART", "SPLIT"] },
      "SILVER ___": { level: 3, members: ["FOX", "LINING", "SCREEN", "SPOON"] },
      "SPORTS VENUES": {
        level: 1,
        members: ["ARENA", "BOWL", "DOME", "FIELD"],
      },
    },
    startingBoard: [
      ["SPOON", "BUG", "SCREEN", "FORK"],
      ["BOWL", "PART", "HOUND", "FOX"],
      ["FIELD", "BADGER", "SPLIT", "DOME"],
      ["NAG", "LINING", "ARENA", "DIVIDE"],
    ],
  },
  {
    id: "187",
    name: "Connections #187",
    createdAt: "2023-12-15T00:00:00.000Z",
    board: {
      CURMUDGEON: { level: 0, members: ["CRAB", "CRANK", "GROUCH", "GRUMP"] },
      "GET LOW": { level: 1, members: ["CROUCH", "DUCK", "SQUAT", "STOOP"] },
      "NATIONAL SYMBOLS": {
        level: 2,
        members: ["ANTHEM", "FLAG", "MOTTO", "SEAL"],
      },
      SWINDLER: { level: 3, members: ["CHEAT", "CROOK", "QUACK", "SHARK"] },
    },
    startingBoard: [
      ["SHARK", "MOTTO", "CRAB", "SEAL"],
      ["DUCK", "QUACK", "FLAG", "CRANK"],
      ["CROOK", "STOOP", "GRUMP", "ANTHEM"],
      ["CROUCH", "GROUCH", "CHEAT", "SQUAT"],
    ],
  },
  {
    id: "188",
    name: "Connections #188",
    createdAt: "2023-12-16T00:00:00.000Z",
    board: {
      "FARM TOOLS": { level: 0, members: ["HOE", "PLOW", "RAKE", "SICKLE"] },
      "MAKE HAPPY": {
        level: 2,
        members: ["AMUSE", "DELIGHT", "PLEASE", "TICKLE"],
      },
      ONOMATOPOEIA: { level: 3, members: ["BANG", "PLOP", "SPLASH", "THUD"] },
      SCHEME: { level: 1, members: ["PLOT", "PLOY", "RUSE", "TRICK"] },
    },
    startingBoard: [
      ["PLOT", "PLOP", "PLOW", "PLOY"],
      ["TICKLE", "SICKLE", "TRICK", "BANG"],
      ["RUSE", "AMUSE", "SPLASH", "RAKE"],
      ["PLEASE", "THUD", "HOE", "DELIGHT"],
    ],
  },
  {
    id: "189",
    name: "Connections #189",
    createdAt: "2023-12-17T00:00:00.000Z",
    board: {
      "RESERVE FOR LATER": {
        level: 0,
        members: ["BANK", "SAVE", "STASH", "STORE"],
      },
      "BOLDNESS, FIGURATIVELY": {
        level: 1,
        members: ["GALL", "GUTS", "NERVE", "STONES"],
      },
      "USED TO BUILD A SNOWMAN": {
        level: 2,
        members: ["CARROT", "COAL", "SNOW", "STICKS"],
      },
      "FUNNY ___": { level: 3, members: ["BONE", "BUSINESS", "GIRL", "PAGES"] },
    },
    startingBoard: [
      ["PAGES", "STICKS", "BANK", "STONES"],
      ["COAL", "BONE", "NERVE", "SAVE"],
      ["GUTS", "CARROT", "STORE", "BUSINESS"],
      ["SNOW", "STASH", "GIRL", "GALL"],
    ],
  },
  {
    id: "190",
    name: "Connections #190",
    createdAt: "2023-12-18T00:00:00.000Z",
    board: {
      "BRIEF MOMENT": {
        level: 0,
        members: ["FLASH", "JIFFY", "SECOND", "WINK"],
      },
      PRIMARY: { level: 1, members: ["CHIEF", "FIRST", "MAIN", "PRINCIPAL"] },
      "AVENUES IN NYC": {
        level: 2,
        members: ["BROADWAY", "FIFTH", "MADISON", "PARK"],
      },
      "___ HOUR": {
        level: 3,
        members: ["AMATEUR", "ELEVENTH", "HAPPY", "RUSH"],
      },
    },
    startingBoard: [
      ["FIRST", "AMATEUR", "BROADWAY", "JIFFY"],
      ["HAPPY", "SECOND", "RUSH", "PARK"],
      ["CHIEF", "FIFTH", "FLASH", "PRINCIPAL"],
      ["MADISON", "WINK", "MAIN", "ELEVENTH"],
    ],
  },
  {
    id: "191",
    name: "Connections #191",
    createdAt: "2023-12-19T00:00:00.000Z",
    board: {
      ACCESSORIES: { level: 0, members: ["BELT", "BRACELET", "TIE", "WATCH"] },
      "COMEDIAN'S OUTPUT": {
        level: 1,
        members: ["BIT", "JOKE", "ROUTINE", "SKETCH"],
      },
      ATTRACTION: { level: 2, members: ["APPEAL", "CHARM", "DRAW", "PULL"] },
      "TWO LETTERS + NUMBER": {
        level: 3,
        members: ["CANINE", "FREIGHT", "OFTEN", "STONE"],
      },
    },
    startingBoard: [
      ["DRAW", "SKETCH", "WATCH", "CHARM"],
      ["TIE", "FREIGHT", "ROUTINE", "BRACELET"],
      ["OFTEN", "CANINE", "BELT", "BIT"],
      ["PULL", "STONE", "JOKE", "APPEAL"],
    ],
  },
  {
    id: "192",
    name: "Connections #192",
    createdAt: "2023-12-20T00:00:00.000Z",
    board: {
      "CONTACT VIA PHONE": {
        level: 0,
        members: ["BUZZ", "CALL", "DIAL", "RING"],
      },
      "BOOK SECTIONS": {
        level: 1,
        members: ["APPENDIX", "CHAPTER", "INDEX", "PREFACE"],
      },
      WEE: { level: 2, members: ["DINKY", "LITTLE", "MINUTE", "SLIGHT"] },
      "CARTOON MICE": {
        level: 3,
        members: ["ITCHY", "JERRY", "PINKY", "SPEEDY"],
      },
    },
    startingBoard: [
      ["DINKY", "ITCHY", "INDEX", "BUZZ"],
      ["PINKY", "RING", "SLIGHT", "MINUTE"],
      ["SPEEDY", "LITTLE", "APPENDIX", "CALL"],
      ["CHAPTER", "DIAL", "JERRY", "PREFACE"],
    ],
  },
  {
    id: "193",
    name: "Connections #193",
    createdAt: "2023-12-21T00:00:00.000Z",
    board: {
      "SEEN IN A LAUNDRY ROOM": {
        level: 0,
        members: ["DRYER", "HAMPER", "IRON", "WASHER"],
      },
      SHEPHERD: { level: 1, members: ["DIRECT", "GUIDE", "LEAD", "STEER"] },
      'WHAT "I" MIGHT MEAN': {
        level: 2,
        members: ["IODINE", "IOTA", "MYSELF", "ONE"],
      },
      "___ VALLEY": {
        level: 3,
        members: ["DEATH", "HIDDEN", "SILICON", "UNCANNY"],
      },
    },
    startingBoard: [
      ["LEAD", "HIDDEN", "HAMPER", "MYSELF"],
      ["ONE", "IRON", "DIRECT", "SILICON"],
      ["IODINE", "UNCANNY", "GUIDE", "DRYER"],
      ["STEER", "WASHER", "IOTA", "DEATH"],
    ],
  },
  {
    id: "194",
    name: "Connections #194",
    createdAt: "2023-12-22T00:00:00.000Z",
    board: {
      "CLASSIC HALLOWEEN COSTUMES": {
        level: 0,
        members: ["ANGEL", "CLOWN", "PIRATE", "WITCH"],
      },
      "BEE CREATIONS": { level: 1, members: ["COMB", "HIVE", "HONEY", "WAX"] },
      "INTERVAL OF TIME": {
        level: 2,
        members: ["PERIOD", "SPELL", "STRETCH", "WHILE"],
      },
      "ANIMAL HOMOPHONES": {
        level: 3,
        members: ["DEAR", "HAIR", "HOARSE", "WAIL"],
      },
    },
    startingBoard: [
      ["ANGEL", "HAIR", "SPELL", "COMB"],
      ["WAIL", "WITCH", "WHILE", "WAX"],
      ["DEAR", "HONEY", "CLOWN", "PERIOD"],
      ["PIRATE", "HOARSE", "STRETCH", "HIVE"],
    ],
  },
  {
    id: "195",
    name: "Connections #195",
    createdAt: "2023-12-23T00:00:00.000Z",
    board: {
      "MEANS OF TRANSPORTATION": {
        level: 0,
        members: ["BOAT", "CAR", "PLANE", "TRAIN"],
      },
      "WILLING TO PARTICIPATE": {
        level: 1,
        members: ["DOWN", "GAME", "IN", "ON BOARD"],
      },
      "LITTLE BIT, IN A RECIPE": {
        level: 2,
        members: ["DASH", "DROP", "PINCH", "SPLASH"],
      },
      "___ BERRY": { level: 3, members: ["BLUE", "GOOSE", "RASP", "STRAW"] },
    },
    startingBoard: [
      ["CAR", "GAME", "BLUE", "DASH"],
      ["STRAW", "SPLASH", "IN", "BOAT"],
      ["DROP", "DOWN", "GOOSE", "ON BOARD"],
      ["PINCH", "TRAIN", "RASP", "PLANE"],
    ],
  },
  {
    id: "196",
    name: "Connections #196",
    createdAt: "2023-12-24T00:00:00.000Z",
    board: {
      GENTLE: { level: 0, members: ["LIGHT", "MELLOW", "MILD", "SOFT"] },
      "CUTS OF PORK": {
        level: 1,
        members: ["BELLY", "CHOP", "HOCK", "SHOULDER"],
      },
      "THINGS TO BLOW ON FOR WISHES / LUCK": {
        level: 2,
        members: ["CANDLE", "DANDELION", "DICE", "EYELASH"],
      },
      "STATUE OF LIBERTY FEATURES": {
        level: 3,
        members: ["CROWN", "ROBE", "TABLET", "TORCH"],
      },
    },
    startingBoard: [
      ["CROWN", "SOFT", "DICE", "SHOULDER"],
      ["CHOP", "CANDLE", "ROBE", "LIGHT"],
      ["EYELASH", "TORCH", "MELLOW", "BELLY"],
      ["MILD", "HOCK", "DANDELION", "TABLET"],
    ],
  },
  {
    id: "197",
    name: "Connections #197",
    createdAt: "2023-12-25T00:00:00.000Z",
    board: {
      DARLING: { level: 0, members: ["BABY", "BOO", "DEAR", "LOVE"] },
      "BASIC GEOMETRIC OBJECTS": {
        level: 1,
        members: ["LINE", "POINT", "RAY", "SEGMENT"],
      },
      OOMPH: { level: 2, members: ["ENERGY", "FIRE", "JUICE", "ZIP"] },
      "SECRET ___": { level: 3, members: ["AGENT", "CODE", "SANTA", "SAUCE"] },
    },
    startingBoard: [
      ["SANTA", "BABY", "ZIP", "LINE"],
      ["LOVE", "SAUCE", "POINT", "ENERGY"],
      ["BOO", "RAY", "JUICE", "DEAR"],
      ["FIRE", "CODE", "SEGMENT", "AGENT"],
    ],
  },
  {
    id: "198",
    name: "Connections #198",
    createdAt: "2023-12-26T00:00:00.000Z",
    board: {
      "ROAD NAMES": { level: 0, members: ["ALLEY", "DRIVE", "LANE", "STREET"] },
      "PAPER IN A BOOK": {
        level: 1,
        members: ["FOLIO", "LEAF", "PAGE", "SHEET"],
      },
      RESTRAIN: { level: 2, members: ["CHECK", "CURB", "LIMIT", "STEM"] },
      "THINGS YOU CAN DO TO YOUR NOSE": {
        level: 3,
        members: ["BLOW", "HOLD", "PICK", "THUMB"],
      },
    },
    startingBoard: [
      ["LEAF", "THUMB", "DRIVE", "PAGE"],
      ["STEM", "PICK", "BLOW", "CHECK"],
      ["STREET", "CURB", "SHEET", "ALLEY"],
      ["LIMIT", "LANE", "HOLD", "FOLIO"],
    ],
  },
  {
    id: "199",
    name: "Connections #199",
    createdAt: "2023-12-27T00:00:00.000Z",
    board: {
      "INDICATION OF THINGS TO COME": {
        level: 0,
        members: ["MESSAGE", "OMEN", "SIGN", "WARNING"],
      },
      "NAME PREFIXES": { level: 1, members: ["GEN", "MS", "PROF", "REV"] },
      "ART MEDIUMS": {
        level: 2,
        members: ["CHARCOAL", "INK", "PAINT", "PASTEL"],
      },
      "___ PEPPER": { level: 3, members: ["BELL", "BLACK", "DR", "GHOST"] },
    },
    startingBoard: [
      ["MS", "PAINT", "GHOST", "BELL"],
      ["PASTEL", "SIGN", "BLACK", "INK"],
      ["REV", "WARNING", "MESSAGE", "GEN"],
      ["DR", "PROF", "CHARCOAL", "OMEN"],
    ],
  },
  {
    id: "200",
    name: "Connections #200",
    createdAt: "2023-12-28T00:00:00.000Z",
    board: {
      "PARTS OF A CAR": {
        level: 0,
        members: ["BUMPER", "HOOD", "TIRE", "TRUNK"],
      },
      "MOVE QUICKLY": { level: 1, members: ["BOLT", "DART", "DASH", "ZIP"] },
      BIRDS: { level: 2, members: ["CARDINAL", "JAY", "LARK", "SWIFT"] },
      "JAZZ LEGENDS": {
        level: 3,
        members: ["HANCOCK", "HOLIDAY", "MONK", "PARKER"],
      },
    },
    startingBoard: [
      ["SWIFT", "HOLIDAY", "CARDINAL", "HOOD"],
      ["ZIP", "MONK", "TRUNK", "DASH"],
      ["PARKER", "LARK", "DART", "TIRE"],
      ["BOLT", "BUMPER", "JAY", "HANCOCK"],
    ],
  },
  {
    id: "201",
    name: "Connections #201",
    createdAt: "2023-12-29T00:00:00.000Z",
    board: {
      SHIRTS: { level: 0, members: ["CROP", "POLO", "TANK", "TEE"] },
      "COOL, IN '80S SLANG": {
        level: 1,
        members: ["BAD", "FLY", "FRESH", "RAD"],
      },
      "LETTER SPELLINGS": { level: 2, members: ["BEE", "EX", "GEE", "JAY"] },
      "___ GEORGE": { level: 3, members: ["BOY", "BY", "CURIOUS", "SAINT"] },
    },
    startingBoard: [
      ["SAINT", "BAD", "BOY", "POLO"],
      ["BY", "FLY", "TEE", "JAY"],
      ["FRESH", "CROP", "GEE", "CURIOUS"],
      ["BEE", "RAD", "EX", "TANK"],
    ],
  },
  {
    id: "202",
    name: "Connections #202",
    createdAt: "2023-12-30T00:00:00.000Z",
    board: {
      "BLACK-AND-WHITE ANIMALS": {
        level: 0,
        members: ["ORCA", "PANDA", "SKUNK", "ZEBRA"],
      },
      SEQUENCE: { level: 1, members: ["CHAIN", "SERIES", "STRING", "TRAIN"] },
      HETERONYMS: { level: 2, members: ["BASS", "DOVE", "DESERT", "WIND"] },
      "___ TRAP": { level: 3, members: ["BEAR", "SAND", "SPEED", "TOURIST"] },
    },
    startingBoard: [
      ["PANDA", "BEAR", "SAND", "STRING"],
      ["SPEED", "TRAIN", "DESERT", "WIND"],
      ["ORCA", "DOVE", "SKUNK", "BASS"],
      ["TOURIST", "CHAIN", "ZEBRA", "SERIES"],
    ],
  },
  {
    id: "203",
    name: "Connections #203",
    createdAt: "2023-12-31T00:00:00.000Z",
    board: {
      ORGANIZATION: { level: 0, members: ["CLUB", "GROUP", "PARTY", "TEAM"] },
      "SHARPNESS, AS OF AN IMAGE": {
        level: 1,
        members: ["CLARITY", "DEFINITION", "DETAIL", "RESOLUTION"],
      },
      "PLACES IN FRANCE": {
        level: 2,
        members: ["CHAMPAGNE", "DIJON", "NICE", "TOURS"],
      },
      "HAPPY NEW YEAR!": {
        level: 3,
        members: ["BALL", "COUNTDOWN", "FIREWORKS", "KISS"],
      },
    },
    startingBoard: [
      ["COUNTDOWN", "KISS", "NICE", "DETAIL"],
      ["BALL", "CLUB", "RESOLUTION", "CHAMPAGNE"],
      ["GROUP", "TOURS", "FIREWORKS", "PARTY"],
      ["DIJON", "DEFINITION", "TEAM", "CLARITY"],
    ],
  },
  {
    id: "204",
    name: "Connections #204",
    createdAt: "2024-01-01T00:00:00.000Z",
    board: {
      "GARDENING NOUNS/VERBS": {
        level: 0,
        members: ["PLANT", "SEED", "WATER", "WEED"],
      },
      "KINDS OF SALADS": {
        level: 1,
        members: ["CAESAR", "GREEK", "GREEN", "WEDGE"],
      },
      "CLASSIC GAME SHOWS, FAMILIARLY": {
        level: 2,
        members: ["FEUD", "MILLIONAIRE", "PYRAMID", "WHEEL"],
      },
      "W+ VOWEL SOUND": { level: 3, members: ["WAY", "WEE", "WHY", "WHOA"] },
    },
    startingBoard: [
      ["WAY", "WEED", "WHEEL", "WEDGE"],
      ["WATER", "WEE", "GREEN", "FEUD"],
      ["WHY", "PYRAMID", "SEED", "GREEK"],
      ["MILLIONAIRE", "WHOA", "CAESAR", "PLANT"],
    ],
  },
  {
    id: "205",
    name: "Connections #205",
    createdAt: "2024-01-02T00:00:00.000Z",
    board: {
      "B.L.T INGREDIENTS": {
        level: 0,
        members: ["BREAD", "BACON", "LETTUCE", "TOMATO"],
      },
      OBSTRUCT: { level: 1, members: ["BLOCK", "CLOG", "JAM", "STOP"] },
      "BASEBALL STATS": { level: 2, members: ["DOUBLE", "HIT", "RUN", "WALK"] },
      "SMALL ___": { level: 3, members: ["FRY", "TALK", "WORLD", "WONDER"] },
    },
    startingBoard: [
      ["WONDER", "BREAD", "WALK", "TALK"],
      ["TOMATO", "JAM", "WORLD", "HIT"],
      ["DOUBLE", "BACON", "BLOCK", "FRY"],
      ["STOP", "RUN", "LETTUCE", "CLOG"],
    ],
  },
  {
    id: "206",
    name: "Connections #206",
    createdAt: "2024-01-03T00:00:00.000Z",
    board: {
      "MOVE THROUGH THE AIR": {
        level: 0,
        members: ["FLOAT", "FLY", "GLIDE", "SOAR"],
      },
      "HIDDEN LISTENING DEVICES": {
        level: 1,
        members: ["BUG", "MIKE", "TAP", "WIRE"],
      },
      "SELECT, AS A BOX ON A FORM": {
        level: 2,
        members: ["CHECK", "MARK", "TICK", "X"],
      },
      "RAPPERS MINUS FIRST LETTER": {
        level: 3,
        members: ["40", "COLE", "PAIN", "TIP"],
      },
    },
    startingBoard: [
      ["TICK", "TIP", "TAP", "FLY"],
      ["CHECK", "40", "X", "PAIN"],
      ["BUG", "MARK", "GLIDE", "MIKE"],
      ["FLOAT", "COLE", "WIRE", "SOAR"],
    ],
  },
  {
    id: "207",
    name: "Connections #207",
    createdAt: "2024-01-04T00:00:00.000Z",
    board: {
      "GIFT-GIVING ACCESSORIES": {
        level: 0,
        members: ["BOW", "BOX", "CARD", "WRAPPING"],
      },
      "DATING APP ACTIONS": {
        level: 1,
        members: ["BLOCK", "MATCH", "MESSAGE", "SWIPE"],
      },
      "COOL, IN SLANG": { level: 2, members: ["FIRE", "LIT", "SICK", "TIGHT"] },
      "LUCKY ___": { level: 3, members: ["BREAK", "CHARM", "DUCK", "STRIKE"] },
    },
    startingBoard: [
      ["MATCH", "BOX", "CHARM", "STRIKE"],
      ["BOW", "DUCK", "SICK", "SWIPE"],
      ["FIRE", "CARD", "BLOCK", "TIGHT"],
      ["BREAK", "MESSAGE", "LIT", "WRAPPING"],
    ],
  },
  {
    id: "208",
    name: "Connections #208",
    createdAt: "2024-01-05T00:00:00.000Z",
    board: {
      "PLAYFULLY BOTHER": {
        level: 0,
        members: ["JOSH", "KID", "RIB", "TEASE"],
      },
      APEX: { level: 1, members: ["HEIGHT", "MAX", "PEAK", "TOP"] },
      "WORDS FOR SPECIFIC QUANTITIES": {
        level: 2,
        members: ["DOZEN", "GROSS", "PAIR", "SCORE"],
      },
      'WHAT "X" MIGHT MEAN': {
        level: 3,
        members: ["ADULT", "KISS", "TEN", "TIMES"],
      },
    },
    startingBoard: [
      ["KID", "ADULT", "TOP", "TEN"],
      ["MAX", "TEASE", "DOZEN", "TIMES"],
      ["RIB", "PAIR", "PEAK", "JOSH"],
      ["GROSS", "KISS", "SCORE", "HEIGHT"],
    ],
  },
  {
    id: "209",
    name: "Connections #209",
    createdAt: "2024-01-06T00:00:00.000Z",
    board: {
      "STRONG SMELL": { level: 0, members: ["FUNK", "MUSK", "ODOR", "TANG"] },
      "MOVE BACK AND FORTH": {
        level: 1,
        members: ["ROCK", "SWAY", "SWING", "WAVE"],
      },
      "THINGS TO PICK": {
        level: 2,
        members: ["AFRO", "BONE", "FIGHT", "LOCK"],
      },
      "___ BALL": { level: 3, members: ["CRYSTAL", "DISCO", "FOUL", "GUTTER"] },
    },
    startingBoard: [
      ["DISCO", "WAVE", "CRYSTAL", "BONE"],
      ["SWING", "LOCK", "ROCK", "AFRO"],
      ["FUNK", "FIGHT", "GUTTER", "TANG"],
      ["MUSK", "SWAY", "FOUL", "ODOR"],
    ],
  },
  {
    id: "210",
    name: "Connections #210",
    createdAt: "2024-01-07T00:00:00.000Z",
    board: {
      "TECH COMPANIES": {
        level: 0,
        members: ["ALPHABET", "AMAZON", "APPLE", "META"],
      },
      "KINDS OF EXAMS": {
        level: 1,
        members: ["BAR", "FINAL", "ORAL", "PHYSICAL"],
      },
      "SOMETHING EXEMPLARY": {
        level: 2,
        members: ["BEAUTY", "GEM", "MARVEL", "PEACH"],
      },
      "___ TOOTH": { level: 3, members: ["BABY", "EYE", "SWEET", "WISDOM"] },
    },
    startingBoard: [
      ["META", "PHYSICAL", "WISDOM", "BEAUTY"],
      ["PEACH", "BABY", "APPLE", "EYE"],
      ["SWEET", "BAR", "GEM", "FINAL"],
      ["ALPHABET", "MARVEL", "ORAL", "AMAZON"],
    ],
  },
  {
    id: "211",
    name: "Connections #211",
    createdAt: "2024-01-08T00:00:00.000Z",
    board: {
      "THINGS THAT ARE ORANGE": {
        level: 0,
        members: ["BASKETBALL", "CARROT", "GOLDFISH", "PUMPKIN"],
      },
      "LONG, SKINNY OBJECTS": {
        level: 1,
        members: ["POLE", "ROD", "STAFF", "STICK"],
      },
      "SEEN ON A GOLF COURSE": {
        level: 2,
        members: ["CART", "CLUB", "HOLE", "TEE"],
      },
      "SHAPES OF CAPITAL GREEK LETTERS": {
        level: 3,
        members: ["CIRCLE", "HORSESHOE", "PITCHFORK", "TRIANGLE"],
      },
    },
    startingBoard: [
      ["TRIANGLE", "BASKETBALL", "CARROT", "STICK"],
      ["CART", "HORSESHOE", "POLE", "CLUB"],
      ["PITCHFORK", "HOLE", "CIRCLE", "GOLDFISH"],
      ["STAFF", "PUMPKIN", "ROD", "TEE"],
    ],
  },
  {
    id: "212",
    name: "Connections #212",
    createdAt: "2024-01-09T00:00:00.000Z",
    board: {
      "CLEANING SUPPLIES": {
        level: 0,
        members: ["BROOM", "MOP", "RAG", "SPONGE"],
      },
      "ELEMENTS OF COOKING, PER SAMIN NOSRAT": {
        level: 1,
        members: ["SALT", "FAT", "ACID", "HEAT"],
      },
      "THINGS THAT MAKE YOU SNEEZE": {
        level: 2,
        members: ["DUST", "PEPPER", "POLLEN", "SMOKE"],
      },
      "TITULAR FICTIONAL DETECTIVES": {
        level: 3,
        members: ["MAGNUM", "MONK", "SHAFT", "TRACY"],
      },
    },
    startingBoard: [
      ["SPONGE", "SALT", "SMOKE", "SHAFT"],
      ["DUST", "MONK", "BROOM", "HEAT"],
      ["MAGNUM", "FAT", "POLLEN", "RAG"],
      ["ACID", "MOP", "TRACY", "PEPPER"],
    ],
  },
  {
    id: "213",
    name: "Connections #213",
    createdAt: "2024-01-10T00:00:00.000Z",
    board: {
      "BIT OF MAGIC": { level: 0, members: ["CHARM", "CURSE", "HEX", "SPELL"] },
      "FOUND AROUND A FIREPLACE": {
        level: 1,
        members: ["FLUE", "GRATE", "LOG", "POKER"],
      },
      "THINGS SEEN AT A CASINO": {
        level: 2,
        members: ["CARDS", "CHIPS", "DICE", "SLOTS"],
      },
      "WAYS TO PREPARE CHEESE": {
        level: 3,
        members: ["CRUMBLE", "MELT", "SHRED", "SLICE"],
      },
    },
    startingBoard: [
      ["POKER", "DICE", "CHARM", "MELT"],
      ["CHIPS", "SPELL", "SLICE", "LOG"],
      ["GRATE", "CARDS", "CURSE", "SHRED"],
      ["CRUMBLE", "HEX", "SLOTS", "FLUE"],
    ],
  },
  {
    id: "214",
    name: "Connections #214",
    createdAt: "2024-01-11T00:00:00.000Z",
    board: {
      "STATES OF MATTER": {
        level: 0,
        members: ["GAS", "LIQUID", "PLASMA", "SOLID"],
      },
      "ALL-TIMER": { level: 1, members: ["GREAT", "HERO", "ICON", "LEGEND"] },
      '"PH" WORDS THAT ALSO WORK WITH "F"': {
        level: 2,
        members: ["PHAT", "PHEW", "PHILLY", "PHISH"],
      },
      "___ PITCH": {
        level: 3,
        members: ["ELEVATOR", "FEVER", "PERFECT", "SALES"],
      },
    },
    startingBoard: [
      ["PERFECT", "PHAT", "LIQUID", "ELEVATOR"],
      ["GREAT", "GAS", "LEGEND", "FEVER"],
      ["SOLID", "SALES", "PHILLY", "ICON"],
      ["PHEW", "HERO", "PLASMA", "PHISH"],
    ],
  },
  {
    id: "215",
    name: "Connections #215",
    createdAt: "2024-01-12T00:00:00.000Z",
    board: {
      "TOPIC OF DISCUSSION": {
        level: 0,
        members: ["ISSUE", "MATTER", "POINT", "SUBJECT"],
      },
      "SECTION OF ONE'S LIFE": {
        level: 1,
        members: ["CHAPTER", "PERIOD", "PHASE", "STAGE"],
      },
      "PARTS OF A CAR, INFORMALLY": {
        level: 2,
        members: ["DASH", "SHOCK", "TANK", "WHEEL"],
      },
      "COLOR HOMOPHONES": {
        level: 3,
        members: ["BLEW", "CHORAL", "READ", "ROWS"],
      },
    },
    startingBoard: [
      ["READ", "SHOCK", "POINT", "WHEEL"],
      ["SUBJECT", "BLEW", "DASH", "STAGE"],
      ["PERIOD", "MATTER", "CHAPTER", "ROWS"],
      ["TANK", "ISSUE", "PHASE", "CHORAL"],
    ],
  },
  {
    id: "216",
    name: "Connections #216",
    createdAt: "2024-01-13T00:00:00.000Z",
    board: {
      "CREDENTIALS FOR ENTRY": {
        level: 0,
        members: ["BADGE", "INVITE", "PASS", "TICKET"],
      },
      "PRESIDE OVER": { level: 1, members: ["CHAIR", "DIRECT", "LEAD", "RUN"] },
      "AMERICAN FOOTBALL POSITIONS": {
        level: 2,
        members: ["CENTER", "END", "SAFETY", "TACKLE"],
      },
      POSTPONE: { level: 3, members: ["HOLD", "PUNT", "STALL", "TABLE"] },
    },
    startingBoard: [
      ["PUNT", "BADGE", "TACKLE", "RUN"],
      ["DIRECT", "PASS", "END", "TABLE"],
      ["TICKET", "STALL", "CHAIR", "CENTER"],
      ["LEAD", "SAFETY", "INVITE", "HOLD"],
    ],
  },
  {
    id: "217",
    name: "Connections #217",
    createdAt: "2024-01-14T00:00:00.000Z",
    board: {
      "THINGS TO PAY": {
        level: 0,
        members: ["BILL", "CHECK", "INVOICE", "TAB"],
      },
      THIEVE: { level: 1, members: ["PINCH", "ROB", "STEAL", "SWIPE"] },
      "MALE ANIMALS": { level: 2, members: ["BUCK", "BULL", "JACK", "TOM"] },
      "LEGWEAR, IN THE SINGULAR": {
        level: 3,
        members: ["JEAN", "PANT", "SHORT", "TIGHT"],
      },
    },
    startingBoard: [
      ["JACK", "CHECK", "TIGHT", "ROB"],
      ["JEAN", "BUCK", "BILL", "SWIPE"],
      ["TOM", "TAB", "SHORT", "PINCH"],
      ["STEAL", "PANT", "BULL", "INVOICE"],
    ],
  },
  {
    id: "218",
    name: "Connections #218",
    createdAt: "2024-01-15T00:00:00.000Z",
    board: {
      "LIST OF CANDIDATES": {
        level: 0,
        members: ["BALLOT", "ROSTER", "SLATE", "TICKET"],
      },
      "PROTECTIVE BARRIER": {
        level: 1,
        members: ["BUFFER", "CUSHION", "PAD", "SHIELD"],
      },
      "MEDICINE FORMATS": {
        level: 2,
        members: ["CAPSULE", "CREAM", "SYRUP", "TABLET"],
      },
      "PEA ___": { level: 3, members: ["COAT", "GREEN", "POD", "SOUP"] },
    },
    startingBoard: [
      ["SOUP", "SLATE", "CREAM", "PAD"],
      ["SYRUP", "SHIELD", "POD", "TICKET"],
      ["BALLOT", "TABLET", "COAT", "CUSHION"],
      ["CAPSULE", "GREEN", "BUFFER", "ROSTER"],
    ],
  },
  {
    id: "219",
    name: "Connections #219",
    createdAt: "2024-01-16T00:00:00.000Z",
    board: {
      DECEIVE: { level: 0, members: ["CON", "DUPE", "FOOL", "TRICK"] },
      "INSIDE INFO": { level: 1, members: ["DOPE", "SCOOP", "SKINNY", "WORD"] },
      "TILT TO ONE SIDE": {
        level: 2,
        members: ["CANT", "LEAN", "LIST", "SLOPE"],
      },
      "WORDS SPELLED WITH AN UPSIDE-DOWN CALCULATOR": {
        level: 3,
        members: ["BOOB", "EGGSHELL", "GIGGLE", "HELLO"],
      },
    },
    startingBoard: [
      ["HELLO", "LIST", "TRICK", "WORD"],
      ["CANT", "FOOL", "SKINNY", "EGGSHELL"],
      ["LEAN", "CON", "GIGGLE", "SCOOP"],
      ["BOOB", "SLOPE", "DOPE", "DUPE"],
    ],
  },
  {
    id: "220",
    name: "Connections #220",
    createdAt: "2024-01-17T00:00:00.000Z",
    board: {
      "DATA SET DATA": {
        level: 0,
        members: ["MEAN", "MEDIAN", "MODE", "RANGE"],
      },
      "CHEMISTRY TERMS": {
        level: 1,
        members: ["BASE", "BOND", "ELEMENT", "SOLUTION"],
      },
      "ADJECTIVE INTENSIFIERS": {
        level: 2,
        members: ["AWFUL", "PRETTY", "RATHER", "REAL"],
      },
      "RADIO HALL OF FAME MEMBERS": {
        level: 3,
        members: ["GLASS", "GROSS", "KING", "STERN"],
      },
    },
    startingBoard: [
      ["BASE", "RANGE", "GROSS", "PRETTY"],
      ["BOND", "RATHER", "GLASS", "REAL"],
      ["AWFUL", "MODE", "STERN", "MEAN"],
      ["SOLUTION", "KING", "MEDIAN", "ELEMENT"],
    ],
  },
  {
    id: "221",
    name: "Connections #221",
    createdAt: "2024-01-18T00:00:00.000Z",
    board: {
      "SHOW OFF": {
        level: 0,
        members: ["GRANDSTAND", "PEACOCK", "POSTURE", "STRUT"],
      },
      FOREMOST: {
        level: 1,
        members: ["MAIN", "PARAMOUNT", "PRIME", "SUPREME"],
      },
      "COLORS IN BRAZIL'S FLAG": {
        level: 2,
        members: ["BLUE", "GREEN", "WHITE", "YELLOW"],
      },
      "___ LETTER": {
        level: 3,
        members: ["CHAIN", "COVER", "LOVE", "SCARLET"],
      },
    },
    startingBoard: [
      ["PRIME", "LOVE", "GREEN", "COVER"],
      ["PEACOCK", "BLUE", "SUPREME", "POSTURE"],
      ["WHITE", "PARAMOUNT", "SCARLET", "MAIN"],
      ["CHAIN", "GRANDSTAND", "YELLOW", "STRUT"],
    ],
  },
  {
    id: "222",
    name: "Connections #222",
    createdAt: "2024-01-19T00:00:00.000Z",
    board: {
      "SUNDAE TOPPINGS": {
        level: 0,
        members: ["CHERRY", "FUDGE", "NUTS", "SPRINKLES"],
      },
      "LEAVE HIGH AND DRY": {
        level: 1,
        members: ["DESERT", "DITCH", "MAROON", "STRAND"],
      },
      '"PHOOEY!"': { level: 2, members: ["CURSES", "DARN", "RATS", "SHOOT"] },
      "WORDS IN TOUNGE TWISTERS": {
        level: 3,
        members: ["FUZZY", "PEPPERS", "SEASHELLS", "WOODCHUCK"],
      },
    },
    startingBoard: [
      ["NUTS", "PEPPERS", "DESERT", "RATS"],
      ["FUZZY", "CHERRY", "MAROON", "SEASHELLS"],
      ["FUDGE", "STRAND", "SHOOT", "SPRINKLES"],
      ["DARN", "DITCH", "WOODCHUCK", "CURSES"],
    ],
  },
  {
    id: "223",
    name: "Connections #223",
    createdAt: "2024-01-20T00:00:00.000Z",
    board: {
      DECLINE: { level: 0, members: ["DIP", "DROP", "FALL", "SINK"] },
      "MOVE WITH SPEED": {
        level: 1,
        members: ["BLAZE", "FLY", "RACE", "TEAR"],
      },
      "KINDS OF DANCE": {
        level: 2,
        members: ["MODERN", "SALSA", "SWING", "TAP"],
      },
      "BABY ___": { level: 3, members: ["BOOM", "CARROT", "SHOWER", "TALK"] },
    },
    startingBoard: [
      ["TALK", "TAP", "TEAR", "DROP"],
      ["SHOWER", "FLY", "DIP", "CARROT"],
      ["SALSA", "SINK", "MODERN", "BLAZE"],
      ["SWING", "BOOM", "RACE", "FALL"],
    ],
  },
  {
    id: "224",
    name: "Connections #224",
    createdAt: "2024-01-21T00:00:00.000Z",
    board: {
      "RIP OFF": { level: 0, members: ["FLEECE", "HOSE", "ROB", "STIFF"] },
      "THINGS MADE OF WAX": {
        level: 1,
        members: ["CANDLE", "CRAYON", "HONEYCOMB", "SEAL"],
      },
      "PARTS OF AN AIRPLANE": {
        level: 2,
        members: ["CABIN", "ENGINE", "NOSE", "WING"],
      },
      "UNITS OF VEGETABLES": {
        level: 3,
        members: ["BULB", "EAR", "HEAD", "STALK"],
      },
    },
    startingBoard: [
      ["HEAD", "WING", "CANDLE", "HOSE"],
      ["CRAYON", "CABIN", "FLEECE", "NOSE"],
      ["ENGINE", "BULB", "SEAL", "EAR"],
      ["STALK", "STIFF", "HONEYCOMB", "ROB"],
    ],
  },
  {
    id: "225",
    name: "Connections #225",
    createdAt: "2024-01-22T00:00:00.000Z",
    board: {
      "SYMBOLIC RODS": {
        level: 0,
        members: ["BATON", "SCEPTER", "STAFF", "WAND"],
      },
      "DENTAL TERMS": {
        level: 1,
        members: ["CAVITY", "CROWN", "FILLING", "PLAQUE"],
      },
      "RUBBER STAMP WORDS": {
        level: 2,
        members: ["APPROVED", "PAID", "URGENT", "VOID"],
      },
      "___ YEAR": { level: 3, members: ["GAP", "LEAP", "LIGHT", "SCHOOL"] },
    },
    startingBoard: [
      ["CROWN", "APPROVED", "SCHOOL", "STAFF"],
      ["VOID", "SCEPTER", "FILLING", "GAP"],
      ["CAVITY", "LIGHT", "PAID", "WAND"],
      ["LEAP", "PLAQUE", "BATON", "URGENT"],
    ],
  },
  {
    id: "226",
    name: "Connections #226",
    createdAt: "2024-01-23T00:00:00.000Z",
    board: {
      "BRING INTO BEING": {
        level: 0,
        members: ["COIN", "CREATE", "DEVISE", "INVENT"],
      },
      EXCELLENT: {
        level: 1,
        members: ["FINE", "PRIME", "QUALITY", "STERLING"],
      },
      "SYMBOLS ABOVE NUMBERS ON A KEYBOARD": {
        level: 2,
        members: ["AT", "DOLLAR", "PERCENT", "POUND"],
      },
      "PASS THE ___": { level: 3, members: ["BAR", "BUCK", "TIME", "TORCH"] },
    },
    startingBoard: [
      ["PRIME", "TIME", "AT", "BAR"],
      ["DEVISE", "DOLLAR", "FINE", "POUND"],
      ["TORCH", "BUCK", "COIN", "QUALITY"],
      ["CREATE", "STERLING", "PERCENT", "INVENT"],
    ],
  },
  {
    id: "227",
    name: "Connections #227",
    createdAt: "2024-01-24T00:00:00.000Z",
    board: {
      "SMARTPHONE FEATURES BEGINNING WITH “C”": {
        level: 0,
        members: ["CALCULATOR", "CALENDAR", "CAMERA", "CLOCK"],
      },
      "PARTS OF THE EYE": {
        level: 1,
        members: ["CONE", "IRIS", "LENS", "PUPIL"],
      },
      "FAMILIAL NICKNAMES": {
        level: 2,
        members: ["DADA", "GRAMMY", "MUM", "POPPY"],
      },
      "WORDS PRONOUNCED DIFFERENTLY WITH ACCENT MARKS": {
        level: 3,
        members: ["EXPOSE", "PATE", "RESUME", "ROSE"],
      },
    },
    startingBoard: [
      ["POPPY", "CLOCK", "ROSE", "CONE"],
      ["IRIS", "EXPOSE", "CAMERA", "MUM"],
      ["CALCULATOR", "GRAMMY", "LENS", "RESUME"],
      ["PATE", "PUPIL", "CALENDAR", "DADA"],
    ],
  },
  {
    id: "228",
    name: "Connections #228",
    createdAt: "2024-01-25T00:00:00.000Z",
    board: {
      "OF-THE-MOMENT": { level: 0, members: ["BIG", "HOT", "IN", "POPULAR"] },
      PICTOGRAPH: {
        level: 1,
        members: ["CHARACTER", "GLYPH", "ICON", "SYMBOL"],
      },
      "IMPOSE, AS A PENALTY": {
        level: 2,
        members: ["ASSESS", "CHARGE", "FINE", "LEVY"],
      },
      "WORDS BEGINNING WITH BODY PARTS": {
        level: 3,
        members: ["HANDSOME", "HIPPO", "LEGEND", "LIPID"],
      },
    },
    startingBoard: [
      ["HANDSOME", "HIPPO", "IN", "CHARGE"],
      ["FINE", "ICON", "POPULAR", "LEGEND"],
      ["HOT", "CHARACTER", "LIPID", "LEVY"],
      ["SYMBOL", "BIG", "ASSESS", "GLYPH"],
    ],
  },
  {
    id: "229",
    name: "Connections #229",
    createdAt: "2024-01-26T00:00:00.000Z",
    board: {
      "BASEBALL EQUIPMENT": {
        level: 0,
        members: ["BALL", "BASE", "BAT", "GLOVE"],
      },
      "HARD HIT": { level: 1, members: ["BLOW", "LICK", "SOCK", "STRIKE"] },
      "ORIGINAL MONOPOLY TOKENS": {
        level: 2,
        members: ["BOOT", "IRON", "THIMBLE", "TOP HAT"],
      },
      "___ BUNNY": { level: 3, members: ["BAD", "BUGS", "DUST", "HONEY"] },
    },
    startingBoard: [
      ["DUST", "SOCK", "IRON", "GLOVE"],
      ["STRIKE", "BOOT", "HONEY", "BAT"],
      ["BAD", "BASE", "BLOW", "BUGS"],
      ["THIMBLE", "BALL", "TOP HAT", "LICK"],
    ],
  },
  {
    id: "230",
    name: "Connections #230",
    createdAt: "2024-01-27T00:00:00.000Z",
    board: {
      HURT: { level: 0, members: ["ACHE", "BURN", "SMART", "STING"] },
      "LOOK AFTER": { level: 1, members: ["GUARD", "MIND", "TEND", "WATCH"] },
      "SOUGHT AFTER IN “THE WIZARD OF OZ”": {
        level: 2,
        members: ["BRAIN", "COURAGE", "HEART", "HOME"],
      },
      "SILENT “W”": { level: 3, members: ["ANSWER", "TWO", "WRIST", "WRONG"] },
    },
    startingBoard: [
      ["HEART", "MIND", "WRIST", "WATCH"],
      ["SMART", "COURAGE", "WRONG", "ANSWER"],
      ["GUARD", "BRAIN", "STING", "HOME"],
      ["BURN", "TEND", "TWO", "ACHE"],
    ],
  },
  {
    id: "231",
    name: "Connections #231",
    createdAt: "2024-01-28T00:00:00.000Z",
    board: {
      "HIGHEST POINT": {
        level: 0,
        members: ["CREST", "PEAK", "SUMMIT", "VERTEX"],
      },
      "“CAN I GET YOUR ___?” (PHONE INFO REQUEST)": {
        level: 1,
        members: ["CELL", "CONTACT", "DIGITS", "NUMBER"],
      },
      "MODIFIERS MEANING “SMALL”": {
        level: 2,
        members: ["BABY", "MINI", "POCKET", "TOY"],
      },
      "INSIDE A SCRABBLE BOX": {
        level: 3,
        members: ["BAG", "BOARD", "RACKS", "TILES"],
      },
    },
    startingBoard: [
      ["VERTEX", "CELL", "BABY", "BAG"],
      ["TOY", "TILES", "PEAK", "POCKET"],
      ["NUMBER", "BOARD", "MINI", "RACKS"],
      ["CREST", "CONTACT", "SUMMIT", "DIGITS"],
    ],
  },
  {
    id: "232",
    name: "Connections #232",
    createdAt: "2024-01-29T00:00:00.000Z",
    board: {
      "DO SOME MARKETING FOR": {
        level: 0,
        members: ["PITCH", "PLUG", "PROMOTE", "PUSH"],
      },
      "ROMANTIC TWOSOME": {
        level: 1,
        members: ["COUPLE", "ITEM", "PAIR", "THING"],
      },
      "TENNIS SCORING TERMS": {
        level: 2,
        members: ["AD", "ALL", "DEUCE", "LOVE"],
      },
      "WORDS WITH “FRUIT”": {
        level: 3,
        members: ["BREAD", "DRAGON", "JACK", "PASSION"],
      },
    },
    startingBoard: [
      ["LOVE", "THING", "DRAGON", "PROMOTE"],
      ["JACK", "AD", "PASSION", "PAIR"],
      ["PUSH", "ITEM", "DEUCE", "PITCH"],
      ["COUPLE", "BREAD", "PLUG", "ALL"],
    ],
  },
  {
    id: "233",
    name: "Connections #233",
    createdAt: "2024-01-30T00:00:00.000Z",
    board: {
      "HIT HARD": { level: 0, members: ["BANG", "HAMMER", "POUND", "SLAM"] },
      "NEWSPAPER NAMES": {
        level: 1,
        members: ["CHRONICLE", "HERALD", "REGISTER", "SUN"],
      },
      "CRESCENT-SHAPED THINGS": {
        level: 2,
        members: ["BANANA", "CROISSANT", "MOON", "SICKLE"],
      },
      "POWER-UPS IN SUPER MARIO WORLD": {
        level: 3,
        members: ["FEATHER", "FLOWER", "MUSHROOM", "STAR"],
      },
    },
    startingBoard: [
      ["BANANA", "HAMMER", "REGISTER", "SICKLE"],
      ["FLOWER", "SUN", "FEATHER", "MOON"],
      ["POUND", "HERALD", "STAR", "BANG"],
      ["CROISSANT", "SLAM", "MUSHROOM", "CHRONICLE"],
    ],
  },
  {
    id: "234",
    name: "Connections #234",
    createdAt: "2024-01-31T00:00:00.000Z",
    board: {
      MERRIMENT: { level: 0, members: ["CHEER", "GLEE", "FESTIVITY", "MIRTH"] },
      "BOOKED FOR A WEDDING": {
        level: 1,
        members: ["BAND", "CATERER", "FLORIST", "OFFICIANT"],
      },
      RHYMES: { level: 2, members: ["CHOIR", "FIRE", "LIAR", "FRYER"] },
      "___ PIT": {
        level: 3,
        members: ["BARBECUE", "ORCHESTRA", "SNAKE", "TAR"],
      },
    },
    startingBoard: [
      ["CHOIR", "FLORIST", "GLEE", "TAR"],
      ["ORCHESTRA", "FIRE", "BAND", "SNAKE"],
      ["CATERER", "BARBECUE", "FESTIVITY", "FRYER"],
      ["CHEER", "LIAR", "OFFICIANT", "MIRTH"],
    ],
  },
  {
    id: "235",
    name: "Connections #235",
    createdAt: "2024-02-01T00:00:00.000Z",
    board: {
      "MAKE SHORTER": { level: 0, members: ["CLIP", "CUT", "PARE", "TRIM"] },
      MUSCULAR: { level: 1, members: ["BUILT", "JACKED", "RIPPED", "SWOLE"] },
      ENTHUSIAST: { level: 2, members: ["BUFF", "FAN", "LOVER", "NUT"] },
      "WRINKLY THINGS": {
        level: 3,
        members: ["BRAIN", "PRUNE", "PUG", "WALNUT"],
      },
    },
    startingBoard: [
      ["PUG", "LOVER", "BUILT", "BRAIN"],
      ["BUFF", "CUT", "NUT", "RIPPED"],
      ["PARE", "PRUNE", "JACKED", "WALNUT"],
      ["SWOLE", "TRIM", "FAN", "CLIP"],
    ],
  },
  {
    id: "236",
    name: "Connections #236",
    createdAt: "2024-02-02T00:00:00.000Z",
    board: {
      "TIME OFF": {
        level: 0,
        members: ["BREAK", "HOLIDAY", "LEAVE", "RECESS"],
      },
      "FEATURES OF A BELT": {
        level: 1,
        members: ["BUCKLE", "HOLE", "LOOP", "STRAP"],
      },
      HOMOPHONES: { level: 2, members: ["HOLEY", "HOLI", "HOLY", "WHOLLY"] },
      ___WOOD: { level: 3, members: ["DOG", "DRIFT", "HOLLY", "SANDAL"] },
    },
    startingBoard: [
      ["DRIFT", "LEAVE", "BUCKLE", "BREAK"],
      ["LOOP", "HOLE", "HOLIDAY", "HOLI"],
      ["STRAP", "HOLY", "SANDAL", "HOLEY"],
      ["HOLLY", "WHOLLY", "DOG", "RECESS"],
    ],
  },
  {
    id: "237",
    name: "Connections #237",
    createdAt: "2024-02-03T00:00:00.000Z",
    board: {
      "COMMERCIAL ORGANIZATION": {
        level: 0,
        members: ["AGENCY", "COMPANY", "ENTERPRISE", "FIRM"],
      },
      "FARM FIXTURES": { level: 1, members: ["COOP", "PEN", "STABLE", "STY"] },
      "CLASSIC DOG NAMES": {
        level: 2,
        members: ["FLUFFY", "REX", "ROVER", "SPOT"],
      },
      "COLORS MINUS THEIR FIRST LETTERS": {
        level: 3,
        members: ["INK", "LACK", "OLD", "RANGE"],
      },
    },
    startingBoard: [
      ["PEN", "INK", "SPOT", "AGENCY"],
      ["STABLE", "FIRM", "COMPANY", "COOP"],
      ["OLD", "STY", "REX", "LACK"],
      ["RANGE", "ROVER", "ENTERPRISE", "FLUFFY"],
    ],
  },
  {
    id: "238",
    name: "Connections #238",
    createdAt: "2024-02-04T00:00:00.000Z",
    board: {
      "DRINKS WITH CAFFEINE": {
        level: 0,
        members: ["COCOA", "COFFEE", "MATE", "TEA"],
      },
      UNEXCITING: {
        level: 1,
        members: ["BORING", "DULL", "MUNDANE", "VANILLA"],
      },
      "COMEDIAN’S PERFORMANCE": {
        level: 2,
        members: ["ACT", "BIT", "ROUTINE", "SET"],
      },
      "MARTINI SPECIFICATIONS": {
        level: 3,
        members: ["DIRTY", "DRY", "TWIST", "UP"],
      },
    },
    startingBoard: [
      ["COFFEE", "MATE", "SET", "UP"],
      ["DRY", "VANILLA", "ACT", "BORING"],
      ["ROUTINE", "TWIST", "COCOA", "MUNDANE"],
      ["DULL", "TEA", "BIT", "DIRTY"],
    ],
  },
  {
    id: "239",
    name: "Connections #239",
    createdAt: "2024-02-05T00:00:00.000Z",
    board: {
      '"GIVE ME A BREAK!"': {
        level: 0,
        members: ["BROTHER", "LORD", "PLEASE", "SHEESH"],
      },
      "ECCLESIASTICAL TITLES": {
        level: 1,
        members: ["BISHOP", "CARDINAL", "PASTOR", "PRIOR"],
      },
      "ROCK & ROLL HALL OF FAME INDUCTEES": {
        level: 2,
        members: ["HEART", "MADONNA", "PRINCE", "QUEEN"],
      },
      "CITY HOMOPHONES": {
        level: 3,
        members: ["DELI", "NIECE", "ROAM", "SOUL"],
      },
    },
    startingBoard: [
      ["BISHOP", "BROTHER", "QUEEN", "DELI"],
      ["HEART", "NIECE", "SOUL", "PRINCE"],
      ["CARDINAL", "LORD", "MADONNA", "PRIOR"],
      ["PASTOR", "ROAM", "SHEESH", "PLEASE"],
    ],
  },
  {
    id: "240",
    name: "Connections #240",
    createdAt: "2024-02-06T00:00:00.000Z",
    board: {
      "OSTENTATIOUS, AS AN OUTFIT": {
        level: 0,
        members: ["BRIGHT", "FLASHY", "GARISH", "LOUD"],
      },
      "EUPHEMISMS FOR FLATULENCE": {
        level: 1,
        members: ["GAS", "STINKER", "TOOT", "WIND"],
      },
      "KINDS OF BLOND": {
        level: 2,
        members: ["DIRTY", "HONEY", "PLATINUM", "STRAWBERRY"],
      },
      "WHAT “O” MIGHT MEAN": {
        level: 3,
        members: ["HUG", "OF", "OXYGEN", "ZERO"],
      },
    },
    startingBoard: [
      ["HONEY", "WIND", "PLATINUM", "LOUD"],
      ["HUG", "BRIGHT", "OXYGEN", "STRAWBERRY"],
      ["GARISH", "GAS", "OF", "ZERO"],
      ["TOOT", "DIRTY", "FLASHY", "STINKER"],
    ],
  },
  {
    id: "241",
    name: "Connections #241",
    createdAt: "2024-02-07T00:00:00.000Z",
    board: {
      "SEA CREATURES": {
        level: 0,
        members: ["CRAB", "RAY", "SPONGE", "SQUID"],
      },
      "BASIC TWO-DIMENSIONAL SHAPES": {
        level: 1,
        members: ["CIRCLE", "DIAMOND", "SQUARE", "TRIANGLE"],
      },
      "BOXING MANEUVERS": {
        level: 2,
        members: ["BOB", "CROSS", "HOOK", "WEAVE"],
      },
      "FANCY ___": { level: 3, members: ["FEAST", "FREE", "PANTS", "THAT"] },
    },
    startingBoard: [
      ["SPONGE", "BOB", "SQUARE", "PANTS"],
      ["HOOK", "FREE", "THAT", "CIRCLE"],
      ["RAY", "DIAMOND", "CROSS", "CRAB"],
      ["TRIANGLE", "SQUID", "WEAVE", "FEAST"],
    ],
  },
  {
    id: "242",
    name: "Connections #242",
    createdAt: "2024-02-08T00:00:00.000Z",
    board: {
      "ARCHERY EQUIPMENT": {
        level: 0,
        members: ["ARROW", "BOW", "QUIVER", "TARGET"],
      },
      "CARD GAMES": { level: 1, members: ["BRIDGE", "GIN", "SPIT", "WAR"] },
      WALLOP: { level: 2, members: ["BELT", "CLOCK", "DECK", "SLUG"] },
      "CLASSIC TATTOOS": {
        level: 3,
        members: ["ANCHOR", "DRAGON", "HEART", "ROSE"],
      },
    },
    startingBoard: [
      ["HEART", "BOW", "CLOCK", "BRIDGE"],
      ["DECK", "SPIT", "ANCHOR", "TARGET"],
      ["DRAGON", "ARROW", "BELT", "GIN"],
      ["WAR", "SLUG", "ROSE", "QUIVER"],
    ],
  },
  {
    id: "243",
    name: "Connections #243",
    createdAt: "2024-02-09T00:00:00.000Z",
    board: {
      "MUSIC PLAYER BUTTONS": {
        level: 0,
        members: ["REWIND", "SHUFFLE", "SKIP", "STOP"],
      },
      BROADCAST: { level: 1, members: ["AIR", "RUN", "SCREEN", "SHOW"] },
      "THINGS YOU CAN DRAW": {
        level: 2,
        members: ["BATH", "CARD", "CURTAIN", "PICTURE"],
      },
      "NUMBER ANAGRAMS": { level: 3, members: ["EON", "ETHER", "NET", "TOW"] },
    },
    startingBoard: [
      ["ETHER", "NET", "CARD", "RUN"],
      ["PICTURE", "SKIP", "AIR", "EON"],
      ["STOP", "BATH", "CURTAIN", "SHUFFLE"],
      ["SCREEN", "TOW", "REWIND", "SHOW"],
    ],
  },
  {
    id: "244",
    name: "Connections #244",
    createdAt: "2024-02-10T00:00:00.000Z",
    board: {
      "STOOL PIGEON": {
        level: 0,
        members: ["CANARY", "FINK", "RAT", "SNITCH"],
      },
      "CRAM INTO A TIGHT SPACE": {
        level: 1,
        members: ["JAM", "PACK", "SQUEEZE", "STUFF"],
      },
      "YOGA POSES": {
        level: 2,
        members: ["CAT", "COW", "MOUNTAIN", "TRIANGLE"],
      },
      ___FLY: { level: 3, members: ["BUTTER", "DRAGON", "FIRE", "HORSE"] },
    },
    startingBoard: [
      ["PACK", "RAT", "DRAGON", "MOUNTAIN"],
      ["CAT", "BUTTER", "HORSE", "JAM"],
      ["CANARY", "COW", "STUFF", "TRIANGLE"],
      ["SQUEEZE", "SNITCH", "FIRE", "FINK"],
    ],
  },
  {
    id: "245",
    name: "Connections #245",
    createdAt: "2024-02-11T00:00:00.000Z",
    board: {
      "MONOTONOUS SOUNDS": {
        level: 0,
        members: ["BUZZ", "DRONE", "HUM", "PURR"],
      },
      BOATS: { level: 1, members: ["BARGE", "DORY", "SCOW", "SLOOP"] },
      CAPTAINS: { level: 2, members: ["AMERICA", "HOOK", "MORGAN", "NEMO"] },
      "PREFIXES WITH -CRACY": {
        level: 3,
        members: ["AUTO", "BUREAU", "DEMO", "PLUTO"],
      },
    },
    startingBoard: [
      ["PLUTO", "DORY", "PURR", "AUTO"],
      ["NEMO", "DEMO", "BUZZ", "BARGE"],
      ["BUREAU", "AMERICA", "SCOW", "HOOK"],
      ["DRONE", "SLOOP", "MORGAN", "HUM"],
    ],
  },
  {
    id: "246",
    name: "Connections #246",
    createdAt: "2024-02-12T00:00:00.000Z",
    board: {
      "BAD THINGS FOR A VIDEO CALL TO DO": {
        level: 0,
        members: ["DROP", "ECHO", "FREEZE", "LAG"],
      },
      "COSTUMES WITH STRIPED SHIRTS": {
        level: 1,
        members: ["MIME", "PRISONER", "REFEREE", "SAILOR"],
      },
      "SEEN IN “ALADDIN”": {
        level: 2,
        members: ["GENIE", "MONKEY", "PARROT", "PRINCESS"],
      },
      "MOVIES MINUS NUMBERS": {
        level: 3,
        members: ["APOLLO", "CANDLES", "FANTASTIC", "SAMURAI"],
      },
    },
    startingBoard: [
      ["MIME", "APOLLO", "PARROT", "FREEZE"],
      ["MONKEY", "FANTASTIC", "ECHO", "PRINCESS"],
      ["SAILOR", "GENIE", "REFEREE", "SAMURAI"],
      ["DROP", "CANDLES", "LAG", "PRISONER"],
    ],
  },
  {
    id: "247",
    name: "Connections #247",
    createdAt: "2024-02-13T00:00:00.000Z",
    board: {
      'ENCOURAGE, WITH "ON"': {
        level: 0,
        members: ["EGG", "GOAD", "SPUR", "URGE"],
      },
      "SPHERICAL FOODS": {
        level: 1,
        members: ["JAWBREAKER", "MEATBALL", "MOZZARELLA", "ORANGE"],
      },
      "GROCERY STORE AISLES": {
        level: 2,
        members: ["DAIRY", "FROZEN", "PRODUCE", "SNACK"],
      },
      "GO ___": { level: 3, members: ["BANANAS", "FIGURE", "FISH", "STEADY"] },
    },
    startingBoard: [
      ["PRODUCE", "ORANGE", "EGG", "FIGURE"],
      ["STEADY", "MEATBALL", "DAIRY", "FISH"],
      ["MOZZARELLA", "GOAD", "BANANAS", "SNACK"],
      ["SPUR", "FROZEN", "JAWBREAKER", "URGE"],
    ],
  },
  {
    id: "248",
    name: "Connections #248",
    createdAt: "2024-02-14T00:00:00.000Z",
    board: {
      "TOUCH LIGHTLY": {
        level: 0,
        members: ["BRUSH", "GRAZE", "KISS", "SKIM"],
      },
      "KINDS OF NUMBERS": {
        level: 1,
        members: ["ODD", "PERFECT", "PRIME", "WHOLE"],
      },
      "SAUCES IN CHINESE CUISINE": {
        level: 2,
        members: ["OYSTER", "PLUM", "SOY", "XO"],
      },
      "BEAR ___": { level: 3, members: ["CLAW", "FRUIT", "HUG", "WITNESS"] },
    },
    startingBoard: [
      ["PLUM", "KISS", "WHOLE", "CLAW"],
      ["SKIM", "PERFECT", "HUG", "SOY"],
      ["OYSTER", "FRUIT", "ODD", "BRUSH"],
      ["WITNESS", "XO", "GRAZE", "PRIME"],
    ],
  },
  {
    id: "249",
    name: "Connections #249",
    createdAt: "2024-02-15T00:00:00.000Z",
    board: {
      "FOLLOW ATTENTIVELY": {
        level: 0,
        members: ["MONITOR", "SURVEY", "TRACK", "WATCH"],
      },
      "WHERE YOU MIGHT FIND SAND": {
        level: 1,
        members: ["BEACH", "DESERT", "HOURGLASS", "PLAYGROUND"],
      },
      "OVEN BUTTONS": {
        level: 2,
        members: ["BAKE", "BROIL", "LIGHT", "TIMER"],
      },
      "BRITPOP BANDS": {
        level: 3,
        members: ["BLUR", "OASIS", "PULP", "SUEDE"],
      },
    },
    startingBoard: [
      ["LIGHT", "DESERT", "BAKE", "WATCH"],
      ["OASIS", "HOURGLASS", "MONITOR", "BLUR"],
      ["BEACH", "TIMER", "PULP", "TRACK"],
      ["BROIL", "SURVEY", "PLAYGROUND", "SUEDE"],
    ],
  },
  {
    id: "250",
    name: "Connections #250",
    createdAt: "2024-02-16T00:00:00.000Z",
    board: {
      "COMFY SHOES": {
        level: 0,
        members: ["CROC", "LOAFER", "MOCCASIN", "SLIPPER"],
      },
      "THINGS MADE WITH FEATHERS": {
        level: 1,
        members: ["BOA", "HEADDRESS", "PILLOW", "SHUTTLECOCK"],
      },
      "PROGRAMMING LANGUAGES": {
        level: 2,
        members: ["BASIC", "JAVA", "PYTHON", "RUBY"],
      },
      "THINGS THAT CAN STRIKE": {
        level: 3,
        members: ["COBRA", "INSPIRATION", "LIGHTNING", "UNION"],
      },
    },
    startingBoard: [
      ["PILLOW", "RUBY", "COBRA", "CROC"],
      ["LIGHTNING", "SHUTTLECOCK", "MOCCASIN", "BOA"],
      ["PYTHON", "HEADDRESS", "BASIC", "SLIPPER"],
      ["LOAFER", "INSPIRATION", "JAVA", "UNION"],
    ],
  },
  {
    id: "251",
    name: "Connections #251",
    createdAt: "2024-02-17T00:00:00.000Z",
    board: {
      "BIT OF HAIR": {
        level: 0,
        members: ["CURL", "LOCK", "RINGLET", "TRESS"],
      },
      "MEDIA ATTENTION": {
        level: 1,
        members: ["COVERAGE", "EXPOSURE", "PRESS", "PUBLICITY"],
      },
      "NOUN SUFFIXES": { level: 2, members: ["DOM", "ION", "NESS", "SHIP"] },
      "___ CIRCUS": {
        level: 3,
        members: ["FAMILY", "FLEA", "FLYING", "MEDIA"],
      },
    },
    startingBoard: [
      ["FAMILY", "SHIP", "LOCK", "NESS"],
      ["ION", "PRESS", "FLEA", "CURL"],
      ["FLYING", "MEDIA", "TRESS", "EXPOSURE"],
      ["COVERAGE", "DOM", "PUBLICITY", "RINGLET"],
    ],
  },
  {
    id: "252",
    name: "Connections #252",
    createdAt: "2024-02-18T00:00:00.000Z",
    board: {
      "EAT A LITTLE": {
        level: 0,
        members: ["GRAZE", "NIBBLE", "PECK", "SNACK"],
      },
      PURSUE: { level: 1, members: ["HUNT", "TRACK", "TRAIL", "STALK"] },
      "INGREDIENTS IN MINESTRONE": {
        level: 2,
        members: ["BEANS", "PASTA", "STOCK", "VEGETABLES"],
      },
      ___CAST: { level: 3, members: ["BROAD", "FORE", "POD", "TYPE"] },
    },
    startingBoard: [
      ["STALK", "STOCK", "HUNT", "SNACK"],
      ["BEANS", "POD", "PECK", "TYPE"],
      ["NIBBLE", "TRACK", "BROAD", "PASTA"],
      ["FORE", "GRAZE", "VEGETABLES", "TRAIL"],
    ],
  },
  {
    id: "253",
    name: "Connections #253",
    createdAt: "2024-02-19T00:00:00.000Z",
    board: {
      "USED IN BUILDING A FIRE": {
        level: 0,
        members: ["KINDLING", "LOG", "MATCH", "TINDER"],
      },
      "MESS UP": { level: 1, members: ["BLOW", "BUMBLE", "FLUFF", "SPOIL"] },
      "WORKSHOP TOOLS": {
        level: 2,
        members: ["DRILL", "GRINDER", "ROUTER", "SAW"],
      },
      "PARTS OF A DOOR": {
        level: 3,
        members: ["FRAME", "HANDLE", "HINGE", "LOCK"],
      },
    },
    startingBoard: [
      ["HINGE", "SPOIL", "DRILL", "MATCH"],
      ["LOCK", "TINDER", "HANDLE", "BUMBLE"],
      ["GRINDER", "FRAME", "SAW", "LOG"],
      ["FLUFF", "KINDLING", "BLOW", "ROUTER"],
    ],
  },
  {
    id: "254",
    name: "Connections #254",
    createdAt: "2024-02-20T00:00:00.000Z",
    board: {
      "PARTY POOPER": { level: 0, members: ["BORE", "DRAG", "DRIP", "DUD"] },
      "MUSICAL SECTIONS": {
        level: 1,
        members: ["BRASS", "RHYTHM", "STRING", "WIND"],
      },
      "BIT OF LIQUID": { level: 2, members: ["BEAD", "DROP", "GLOB", "TEAR"] },
      "VEGETABLE HOMOPHONES": {
        level: 3,
        members: ["BEAT", "CHARRED", "LEAK", "PEE"],
      },
    },
    startingBoard: [
      ["LEAK", "WIND", "DRAG", "DROP"],
      ["STRING", "DRIP", "BEAT", "TEAR"],
      ["BORE", "RHYTHM", "BEAD", "BRASS"],
      ["CHARRED", "GLOB", "PEE", "DUD"],
    ],
  },
  {
    id: "255",
    name: "Connections #255",
    createdAt: "2024-02-21T00:00:00.000Z",
    board: {
      PESTERS: { level: 0, members: ["BADGERS", "BUGS", "HOUNDS", "NAGS"] },
      "TONY WINNERS FOR BEST MUSICAL": {
        level: 1,
        members: ["ANNIE", "CABARET", "CATS", "COMPANY"],
      },
      "THEY HAVE KEYS": {
        level: 2,
        members: ["COMPUTER", "PIANO", "SUPER", "TESTS"],
      },
      "SCHOOL OF ___": {
        level: 3,
        members: ["FISH", "HARD KNOCKS", "ROCK", "THOUGHT"],
      },
    },
    startingBoard: [
      ["SUPER", "COMPUTER", "BUGS", "COMPANY"],
      ["HOUNDS", "CATS", "FISH", "BADGERS"],
      ["HARD KNOCKS", "PIANO", "CABARET", "ROCK"],
      ["ANNIE", "THOUGHT", "TESTS", "NAGS"],
    ],
  },
  {
    id: "256",
    name: "Connections #256",
    createdAt: "2024-02-22T00:00:00.000Z",
    board: {
      "DOG SOUNDS": { level: 0, members: ["BARK", "GROWL", "HOWL", "WHINE"] },
      DEPARTMENT: { level: 1, members: ["ARM", "BRANCH", "CHAPTER", "WING"] },
      ORIGIN: { level: 2, members: ["CRADLE", "FONT", "ROOT", "SOURCE"] },
      "COLORS WITH THEIR FIRST LETTERS CHANGED": {
        level: 3,
        members: ["CLUE", "FROWN", "MELLOW", "PREEN"],
      },
    },
    startingBoard: [
      ["CLUE", "ROOT", "WHINE", "WING"],
      ["CRADLE", "BRANCH", "FROWN", "BARK"],
      ["PREEN", "GROWL", "ARM", "FONT"],
      ["HOWL", "MELLOW", "SOURCE", "CHAPTER"],
    ],
  },
  {
    id: "257",
    name: "Connections #257",
    createdAt: "2024-02-23T00:00:00.000Z",
    board: {
      PROCESSION: {
        level: 0,
        members: ["CARAVAN", "FLEET", "PARADE", "TRAIN"],
      },
      "SHADES OF GREEN": {
        level: 1,
        members: ["OLIVE", "FOREST", "LIME", "MINT"],
      },
      "WHAT “BLUE” MIGHT MEAN": {
        level: 2,
        members: ["DEMOCRATIC", "EROTIC", "NOBLE", "SAD"],
      },
      "THINGS WITH SPINES": {
        level: 3,
        members: ["BOOK", "CACTUS", "HEDGEHOG", "SKELETON"],
      },
    },
    startingBoard: [
      ["FOREST", "PARADE", "EROTIC", "SKELETON"],
      ["TRAIN", "HEDGEHOG", "OLIVE", "BOOK"],
      ["MINT", "DEMOCRATIC", "CACTUS", "FLEET"],
      ["NOBLE", "CARAVAN", "SAD", "LIME"],
    ],
  },
  {
    id: "258",
    name: "Connections #258",
    createdAt: "2024-02-24T00:00:00.000Z",
    board: {
      "MANUFACTURING LOCATIONS": {
        level: 0,
        members: ["FACTORY", "MILL", "PLANT", "SHOP"],
      },
      "WIN + LETTER": { level: 1, members: ["WIND", "WINE", "WING", "WINK"] },
      "PARTS OF FRUIT YOU MIGHT NOT EAT": {
        level: 2,
        members: ["CORE", "RIND", "SEED", "STEM"],
      },
      "WEIGHTS IN BOXING": {
        level: 3,
        members: ["FEATHER", "HEAVY", "LIGHT", "MIDDLE"],
      },
    },
    startingBoard: [
      ["CORE", "FEATHER", "WIND", "MILL"],
      ["MIDDLE", "WING", "SEED", "LIGHT"],
      ["WINE", "STEM", "PLANT", "SHOP"],
      ["RIND", "FACTORY", "HEAVY", "WINK"],
    ],
  },
  {
    id: "259",
    name: "Connections #259",
    createdAt: "2024-02-25T00:00:00.000Z",
    board: {
      "WALK HEAVILY": {
        level: 0,
        members: ["LUMBER", "PLOD", "STOMP", "TRUDGE"],
      },
      FLEXIBLE: {
        level: 1,
        members: ["ELASTIC", "LIMBER", "PLASTIC", "SUPPLE"],
      },
      "FENCING EQUIPMENT": {
        level: 2,
        members: ["FOIL", "GLOVE", "JACKET", "MASK"],
      },
      "WORDS BEGINNING WITH INSTRUMENTS": {
        level: 3,
        members: ["BASSINET", "CELLOPHANE", "HARPOON", "ORGANISM"],
      },
    },
    startingBoard: [
      ["PLASTIC", "FOIL", "CELLOPHANE", "LUMBER"],
      ["ORGANISM", "HARPOON", "TRUDGE", "LIMBER"],
      ["STOMP", "ELASTIC", "GLOVE", "BASSINET"],
      ["MASK", "PLOD", "JACKET", "SUPPLE"],
    ],
  },
  {
    id: "260",
    name: "Connections #260",
    createdAt: "2024-02-26T00:00:00.000Z",
    board: {
      "BASIC TASTES": {
        level: 0,
        members: ["BITTER", "SALTY", "SOUR", "SWEET"],
      },
      "STAND UP TO, AS A CHALLENGE": {
        level: 1,
        members: ["BRAVE", "CONFRONT", "FACE", "MEET"],
      },
      ILK: { level: 2, members: ["KIND", "SORT", "TYPE", "VARIETY"] },
      "ART MOVEMENTS, WITH -ISM": {
        level: 3,
        members: ["EXPRESSION", "MANNER", "ROMANTIC", "SURREAL"],
      },
    },
    startingBoard: [
      ["ROMANTIC", "TYPE", "BRAVE", "FACE"],
      ["KIND", "EXPRESSION", "SOUR", "SURREAL"],
      ["BITTER", "SWEET", "VARIETY", "MEET"],
      ["SORT", "CONFRONT", "SALTY", "MANNER"],
    ],
  },
  {
    id: "261",
    name: "Connections #261",
    createdAt: "2024-02-27T00:00:00.000Z",
    board: {
      "'80S FASHION TRENDS": {
        level: 0,
        members: ["HEADBAND", "MULLET", "NEON", "SPANDEX"],
      },
      "GYMNASTICS POSITIONS": {
        level: 1,
        members: ["PIKE", "SPLIT", "STRADDLE", "TUCK"],
      },
      "KINDS OF CRACKERS": {
        level: 2,
        members: ["ANIMAL", "GOLDFISH", "OYSTER", "RITZ"],
      },
      "___ LADDER": {
        level: 3,
        members: ["CORPORATE", "ROPE", "SALMON", "WORD"],
      },
    },
    startingBoard: [
      ["ANIMAL", "SPLIT", "NEON", "SALMON"],
      ["ROPE", "MULLET", "TUCK", "WORD"],
      ["PIKE", "GOLDFISH", "CORPORATE", "HEADBAND"],
      ["SPANDEX", "RITZ", "OYSTER", "STRADDLE"],
    ],
  },
  {
    id: "262",
    name: "Connections #262",
    createdAt: "2024-02-28T00:00:00.000Z",
    board: {
      "CHEESES, FAMILIARLY": {
        level: 0,
        members: ["AMERICAN", "BLUE", "JACK", "SWISS"],
      },
      "TRACK AND FIELD EQUIPMENT": {
        level: 1,
        members: ["HAMMER", "HURDLE", "JAVELIN", "POLE"],
      },
      "KINDS OF HEELS": {
        level: 2,
        members: ["CUBAN", "KITTEN", "STILETTO", "WEDGE"],
      },
      "DOUBLE ___": {
        level: 3,
        members: ["DATE", "DUTCH", "JEOPARDY", "SPACE"],
      },
    },
    startingBoard: [
      ["BLUE", "POLE", "CUBAN", "SPACE"],
      ["AMERICAN", "KITTEN", "DUTCH", "WEDGE"],
      ["JEOPARDY", "HURDLE", "SWISS", "DATE"],
      ["JACK", "HAMMER", "STILETTO", "JAVELIN"],
    ],
  },
  {
    id: "263",
    name: "Connections #263",
    createdAt: "2024-02-29T00:00:00.000Z",
    board: {
      "PROPEL INTO THE AIR": {
        level: 0,
        members: ["HOP", "JUMP", "LEAP", "SPRING"],
      },
      "PLACE TO STORE VALUABLES": {
        level: 1,
        members: ["CHEST", "COFFER", "SAFE", "VAULT"],
      },
      PERIOD: { level: 2, members: ["AGE", "DAY", "ERA", "TIME"] },
      "ANIMALS BACKWARD": {
        level: 3,
        members: ["DRIB", "FLOW", "REED", "TANG"],
      },
    },
    startingBoard: [
      ["LEAP", "DAY", "SAFE", "TANG"],
      ["FLOW", "VAULT", "AGE", "JUMP"],
      ["SPRING", "TIME", "DRIB", "CHEST"],
      ["ERA", "COFFER", "HOP", "REED"],
    ],
  },
  {
    id: "264",
    name: "Connections #264",
    createdAt: "2024-03-01T00:00:00.000Z",
    board: {
      "GARLIC BREAD INGREDIENTS": {
        level: 0,
        members: ["BREAD", "BUTTER", "GARLIC", "PARSLEY"],
      },
      WAGER: { level: 1, members: ["BET", "GAMBLE", "RISK", "STAKE"] },
      "DISNEYLAND LANDS": {
        level: 2,
        members: ["ADVENTURE", "FANTASY", "FRONTIER", "TOMORROW"],
      },
      "___ BAT": {
        level: 3,
        members: ["BASEBALL", "CRICKET", "FRUIT", "VAMPIRE"],
      },
    },
    startingBoard: [
      ["BUTTER", "FRUIT", "FANTASY", "BASEBALL"],
      ["TOMORROW", "GARLIC", "CRICKET", "VAMPIRE"],
      ["STAKE", "FRONTIER", "BET", "BREAD"],
      ["PARSLEY", "RISK", "ADVENTURE", "GAMBLE"],
    ],
  },
  {
    id: "265",
    name: "Connections #265",
    createdAt: "2024-03-02T00:00:00.000Z",
    board: {
      "INTELLIGENCE OPERATIVE": {
        level: 0,
        members: ["AGENT", "ASSET", "MOLE", "SLEEPER"],
      },
      "UNITS IN POETRY": {
        level: 1,
        members: ["FOOT", "LINE", "METER", "VERSE"],
      },
      "EXPRESS INDIRECTLY": {
        level: 2,
        members: ["COUCH", "IMPLY", "INTIMATE", "SUGGEST"],
      },
      "WHAT “K” MIGHT MEAN": {
        level: 3,
        members: ["KELVIN", "OKAY", "POTASSIUM", "THOUSAND"],
      },
    },
    startingBoard: [
      ["OKAY", "COUCH", "FOOT", "MOLE"],
      ["INTIMATE", "SLEEPER", "KELVIN", "VERSE"],
      ["SUGGEST", "THOUSAND", "LINE", "ASSET"],
      ["METER", "AGENT", "POTASSIUM", "IMPLY"],
    ],
  },
  {
    id: "266",
    name: "Connections #266",
    createdAt: "2024-03-03T00:00:00.000Z",
    board: {
      "LARGE AMOUNT": { level: 0, members: ["MASS", "SEA", "SLEW", "TON"] },
      "FALL IN UNDER PRESSURE": {
        level: 1,
        members: ["BUCKLE", "CAVE", "COLLAPSE", "GIVE"],
      },
      "WAYS TO GET ATTENTION": {
        level: 2,
        members: ["SHOUT", "SNAP", "WAVE", "WHISTLE"],
      },
      "BELLY ___": { level: 3, members: ["BUTTON", "DANCE", "FLOP", "LAUGH"] },
    },
    startingBoard: [
      ["WAVE", "DANCE", "SEA", "CAVE"],
      ["TON", "BUCKLE", "FLOP", "SNAP"],
      ["BUTTON", "WHISTLE", "MASS", "SHOUT"],
      ["GIVE", "LAUGH", "COLLAPSE", "SLEW"],
    ],
  },
  {
    id: "267",
    name: "Connections #267",
    createdAt: "2024-03-04T00:00:00.000Z",
    board: {
      "ROOMS IN THE GAME CLUE": {
        level: 0,
        members: ["HALL", "LIBRARY", "LOUNGE", "STUDY"],
      },
      COLLEAGUE: {
        level: 1,
        members: ["ASSOCIATE", "FELLOW", "PARTNER", "PEER"],
      },
      "SEEN DURING EASTER": {
        level: 2,
        members: ["BUNNY", "EGG", "JELLY BEAN", "PEEP"],
      },
      "WHAT A MOLE CAN BE": {
        level: 3,
        members: ["ANIMAL", "BIRTHMARK", "SPY", "UNIT"],
      },
    },
    startingBoard: [
      ["FELLOW", "SPY", "PEEP", "BIRTHMARK"],
      ["STUDY", "ANIMAL", "PEER", "UNIT"],
      ["BUNNY", "HALL", "ASSOCIATE", "EGG"],
      ["LOUNGE", "JELLY BEAN", "LIBRARY", "PARTNER"],
    ],
  },
  {
    id: "268",
    name: "Connections #268",
    createdAt: "2024-03-05T00:00:00.000Z",
    board: {
      "POP MEGASTARS": {
        level: 0,
        members: ["GRANDE", "MARS", "STYLES", "SWIFT"],
      },
      METHOD: { level: 1, members: ["CHANNEL", "MEANS", "MEDIUM", "VEHICLE"] },
      "UNLIKELY, AS CHANCES": {
        level: 2,
        members: ["OUTSIDE", "REMOTE", "SLIM", "SMALL"],
      },
      "LIVING ___": { level: 3, members: ["LARGE", "LEGEND", "PROOF", "ROOM"] },
    },
    startingBoard: [
      ["SWIFT", "VEHICLE", "LARGE", "LEGEND"],
      ["SMALL", "MEANS", "MEDIUM", "MARS"],
      ["OUTSIDE", "ROOM", "GRANDE", "SLIM"],
      ["PROOF", "STYLES", "REMOTE", "CHANNEL"],
    ],
  },
  {
    id: "269",
    name: "Connections #269",
    createdAt: "2024-03-06T00:00:00.000Z",
    board: {
      "PARTS OF AN AIRPORT": {
        level: 0,
        members: ["HANGAR", "RUNWAY", "TARMAC", "TERMINAL"],
      },
      "LEGAL TERMS": {
        level: 1,
        members: ["ACTION", "CLAIM", "COMPLAINT", "LAWSUIT"],
      },
      "THINGS A JUGGLER JUGGLES": {
        level: 2,
        members: ["BEANBAG", "CLUB", "RING", "TORCH"],
      },
      "WORDS ENDING IN CLOTHING": {
        level: 3,
        members: ["FOXGLOVE", "GUMSHOE", "TURNCOAT", "WINDSOCK"],
      },
    },
    startingBoard: [
      ["CLUB", "WINDSOCK", "RUNWAY", "BEANBAG"],
      ["TURNCOAT", "LAWSUIT", "TORCH", "FOXGLOVE"],
      ["CLAIM", "TERMINAL", "GUMSHOE", "COMPLAINT"],
      ["HANGAR", "RING", "ACTION", "TARMAC"],
    ],
  },
  {
    id: "270",
    name: "Connections #270",
    createdAt: "2024-03-07T00:00:00.000Z",
    board: {
      SHARED: {
        level: 0,
        members: ["COLLECTIVE", "COMMON", "JOINT", "MUTUAL"],
      },
      "RID OF CONTENTS": {
        level: 1,
        members: ["CLEAR", "DRAIN", "EMPTY", "FLUSH"],
      },
      "ASSOCIATED WITH “STUB”": {
        level: 2,
        members: ["CIGARETTE", "PENCIL", "TICKET", "TOE"],
      },
      "___ DREAM": {
        level: 3,
        members: ["AMERICAN", "FEVER", "LUCID", "PIPE"],
      },
    },
    startingBoard: [
      ["TOE", "JOINT", "PIPE", "FLUSH"],
      ["CIGARETTE", "DRAIN", "COMMON", "FEVER"],
      ["CLEAR", "PENCIL", "AMERICAN", "TICKET"],
      ["COLLECTIVE", "LUCID", "EMPTY", "MUTUAL"],
    ],
  },
  {
    id: "271",
    name: "Connections #271",
    createdAt: "2024-03-08T00:00:00.000Z",
    board: {
      "THINGS TO SEW": { level: 0, members: ["DART", "HEM", "PLEAT", "SEAM"] },
      "WAYS TO PRESERVE FOOD": {
        level: 1,
        members: ["CAN", "CURE", "DRY", "FREEZE"],
      },
      "SHARP QUALITY": {
        level: 2,
        members: ["BITE", "EDGE", "PUNCH", "SPICE"],
      },
      "BIRDS MINUS LAST LETTER": {
        level: 3,
        members: ["CONDO", "HAW", "HERO", "LOO"],
      },
    },
    startingBoard: [
      ["DART", "CAN", "PUNCH", "HEM"],
      ["HAW", "DRY", "LOO", "EDGE"],
      ["CONDO", "SPICE", "FREEZE", "PLEAT"],
      ["BITE", "HERO", "SEAM", "CURE"],
    ],
  },
  {
    id: "272",
    name: "Connections #272",
    createdAt: "2024-03-09T00:00:00.000Z",
    board: {
      "EAT VORACIOUSLY": {
        level: 0,
        members: ["DOWN", "INHALE", "SCARF", "WOLF"],
      },
      "AREAS OF ACADEMIC FOCUS": {
        level: 1,
        members: ["CONCENTRATION", "DEGREE", "MAJOR", "MINOR"],
      },
      UNIVERSAL: {
        level: 2,
        members: ["BLANKET", "BROAD", "GENERAL", "SWEEPING"],
      },
      "SPACE ___": { level: 3, members: ["BAR", "CADET", "HEATER", "STATION"] },
    },
    startingBoard: [
      ["BLANKET", "CADET", "BAR", "SCARF"],
      ["MAJOR", "HEATER", "GENERAL", "STATION"],
      ["WOLF", "DEGREE", "DOWN", "CONCENTRATION"],
      ["BROAD", "INHALE", "MINOR", "SWEEPING"],
    ],
  },
  {
    id: "273",
    name: "Connections #273",
    createdAt: "2024-03-10T00:00:00.000Z",
    board: {
      "THINGS A DOG CAN FETCH": {
        level: 0,
        members: ["BALL", "BONE", "FRISBEE", "STICK"],
      },
      CONCEAL: { level: 1, members: ["BLOCK", "COVER", "HIDE", "OBSCURE"] },
      "MAC KEYBOARD KEYS": {
        level: 2,
        members: ["COMMAND", "CONTROL", "OPTION", "SHIFT"],
      },
      "EXPERIENCE A MEMORY LAPSE": {
        level: 3,
        members: ["BLANK", "FLAKE", "FORGET", "SPACE"],
      },
    },
    startingBoard: [
      ["STICK", "SHIFT", "BONE", "HIDE"],
      ["BLANK", "BLOCK", "SPACE", "BALL"],
      ["OBSCURE", "COMMAND", "FLAKE", "COVER"],
      ["CONTROL", "FORGET", "FRISBEE", "OPTION"],
    ],
  },
  {
    id: "274",
    name: "Connections #274",
    createdAt: "2024-03-11T00:00:00.000Z",
    board: {
      "TREAT WITH EXCESSIVE CARE": {
        level: 0,
        members: ["BABY", "MOTHER", "PAMPER", "SPOIL"],
      },
      BACKSIDE: { level: 1, members: ["BOOTY", "BUM", "CAN", "REAR"] },
      "THINGS IN A SPA LOCKER ROOM": {
        level: 2,
        members: ["ROBE", "SLIPPERS", "TOWEL", "WASHCLOTH"],
      },
      "CAT’S ___": { level: 3, members: ["CRADLE", "EYE", "MEOW", "PAJAMAS"] },
    },
    startingBoard: [
      ["BABY", "CRADLE", "CAN", "MEOW"],
      ["BOOTY", "TOWEL", "PAJAMAS", "MOTHER"],
      ["SPOIL", "EYE", "SLIPPERS", "REAR"],
      ["ROBE", "PAMPER", "BUM", "WASHCLOTH"],
    ],
  },
  {
    id: "275",
    name: "Connections #275",
    createdAt: "2024-03-12T00:00:00.000Z",
    board: {
      SECTION: { level: 0, members: ["CLASS", "DIVISION", "RANK", "TIER"] },
      INCLUDING: { level: 1, members: ["AND", "ALSO", "PLUS", "WITH"] },
      "DOG BREEDS, INFORMALLY": {
        level: 2,
        members: ["BOSTON", "GOLDEN", "LAB", "PIT"],
      },
      "FAMOUS POEMS": { level: 3, members: ["DADDY", "HARLEM", "HOWL", "IF"] },
    },
    startingBoard: [
      ["GOLDEN", "HOWL", "RANK", "PIT"],
      ["IF", "BOSTON", "AND", "HARLEM"],
      ["PLUS", "CLASS", "WITH", "DIVISION"],
      ["TIER", "DADDY", "LAB", "ALSO"],
    ],
  },
  {
    id: "276",
    name: "Connections #276",
    createdAt: "2024-03-13T00:00:00.000Z",
    board: {
      "HALLOWEEN PURCHASES": {
        level: 0,
        members: ["CANDY", "COSTUME", "DECORATIONS", "PUMPKIN"],
      },
      "PLANTS WITH SIMILAR FLAVORS": {
        level: 1,
        members: ["ANISE", "FENNEL", "LICORICE", "TARRAGON"],
      },
      "FOOD SLANG FOR HEAD": {
        level: 2,
        members: ["BEAN", "MELON", "NOODLE", "NUT"],
      },
      "GEMSTONE CUTS": {
        level: 3,
        members: ["BAGUETTE", "EMERALD", "PRINCESS", "RADIANT"],
      },
    },
    startingBoard: [
      ["PRINCESS", "CANDY", "BEAN", "LICORICE"],
      ["PUMPKIN", "MELON", "BAGUETTE", "EMERALD"],
      ["RADIANT", "COSTUME", "NOODLE", "FENNEL"],
      ["TARRAGON", "NUT", "ANISE", "DECORATIONS"],
    ],
  },
  {
    id: "277",
    name: "Connections #277",
    createdAt: "2024-03-14T00:00:00.000Z",
    board: {
      "BOX OFFICE VICTORY": {
        level: 0,
        members: ["HIT", "SMASH", "SUCCESS", "WINNER"],
      },
      "VOLLEYBALL MOVES": {
        level: 1,
        members: ["BUMP", "SERVE", "SET", "SPIKE"],
      },
      "HOMOPHONES OF GREEK LETTERS": {
        level: 2,
        members: ["MOO", "NEW", "PIE", "ROW"],
      },
      "___-O": { level: 3, members: ["DADDY", "DAY", "JACKIE", "JELL"] },
    },
    startingBoard: [
      ["PIE", "DAY", "NEW", "WINNER"],
      ["SPIKE", "ROW", "HIT", "JELL"],
      ["SUCCESS", "BUMP", "JACKIE", "SET"],
      ["DADDY", "MOO", "SERVE", "SMASH"],
    ],
  },
  {
    id: "278",
    name: "Connections #278",
    createdAt: "2024-03-15T00:00:00.000Z",
    board: {
      CRITICIZE: { level: 0, members: ["BLAST", "KNOCK", "SLAM", "TRASH"] },
      "“MY MISTAKE!”": {
        level: 1,
        members: ["APOLOGIES", "OOPS", "PARDON", "SORRY"],
      },
      ALIBI: { level: 2, members: ["DEFENSE", "EXCUSE", "OUT", "REASON"] },
      "PLAY ___": { level: 3, members: ["DATE", "DEAD", "DIRTY", "DOH"] },
    },
    startingBoard: [
      ["DIRTY", "SORRY", "TRASH", "DATE"],
      ["KNOCK", "OUT", "OOPS", "EXCUSE"],
      ["DOH", "BLAST", "APOLOGIES", "DEAD"],
      ["DEFENSE", "PARDON", "SLAM", "REASON"],
    ],
  },
  {
    id: "279",
    name: "Connections #279",
    createdAt: "2024-03-16T00:00:00.000Z",
    board: {
      "GET SMALLER": {
        level: 0,
        members: ["CONTRACT", "LESSEN", "REDUCE", "SHRINK"],
      },
      "AIRLINE CLASSES": {
        level: 1,
        members: ["BUSINESS", "COACH", "FIRST", "PREMIUM"],
      },
      "EXAMINE, AS AN APPLICANT": {
        level: 2,
        members: ["CHECK", "REVIEW", "SCREEN", "VET"],
      },
      "NOTABLE TV EPISODES": {
        level: 3,
        members: ["FINALE", "PILOT", "PREMIERE", "SPECIAL"],
      },
    },
    startingBoard: [
      ["SHRINK", "PILOT", "BUSINESS", "CONTRACT"],
      ["COACH", "VET", "SPECIAL", "PREMIUM"],
      ["REVIEW", "PREMIERE", "REDUCE", "SCREEN"],
      ["FINALE", "CHECK", "FIRST", "LESSEN"],
    ],
  },
  {
    id: "280",
    name: "Connections #280",
    createdAt: "2024-03-17T00:00:00.000Z",
    board: {
      FOOLISHNESS: {
        level: 0,
        members: ["ABSURDITY", "FOLLY", "MADNESS", "NONSENSE"],
      },
      "MOVE FORWARD": {
        level: 1,
        members: ["ADVANCE", "MARCH", "PROGRESS", "PUSH"],
      },
      "THINGS THAT MIGHT STINK": {
        level: 2,
        members: ["CHEESE", "FEET", "GARBAGE", "SKUNK"],
      },
      "WORDS AFTER “DEEP”": {
        level: 3,
        members: ["CUT", "FAKE", "FREEZE", "SIX"],
      },
    },
    startingBoard: [
      ["MARCH", "MADNESS", "FREEZE", "FEET"],
      ["SIX", "FAKE", "FOLLY", "PUSH"],
      ["NONSENSE", "CHEESE", "GARBAGE", "PROGRESS"],
      ["SKUNK", "CUT", "ADVANCE", "ABSURDITY"],
    ],
  },
  {
    id: "281",
    name: "Connections #281",
    createdAt: "2024-03-18T00:00:00.000Z",
    board: {
      "SEGMENT OF A PROCESS": {
        level: 0,
        members: ["CYCLE", "PHASE", "ROUND", "STAGE"],
      },
      CONSTELLATIONS: {
        level: 1,
        members: ["CYGNUS", "GEMINI", "ORION", "PEGASUS"],
      },
      "SPIRALS IN NATURE": {
        level: 2,
        members: ["CYCLONE", "GALAXY", "SNAIL", "SUNFLOWER"],
      },
      "ASSOCIATED WITH “ONE”": {
        level: 3,
        members: ["CYCLOPS", "MONOLOGUE", "SOLITAIRE", "UNICYCLE"],
      },
    },
    startingBoard: [
      ["SUNFLOWER", "SOLITAIRE", "STAGE", "SNAIL"],
      ["CYCLE", "CYCLONE", "CYCLOPS", "CYGNUS"],
      ["UNICYCLE", "ORION", "ROUND", "GALAXY"],
      ["PEGASUS", "PHASE", "MONOLOGUE", "GEMINI"],
    ],
  },
  {
    id: "282",
    name: "Connections #282",
    createdAt: "2024-03-19T00:00:00.000Z",
    board: {
      "MOVIE SUMMARY INFO": {
        level: 0,
        members: ["CAST", "GENRE", "PLOT", "TITLE"],
      },
      PRETENSE: { level: 1, members: ["AFFECT", "AIRS", "CHARADE", "FRONT"] },
      "FAMOUS GUITARISTS": {
        level: 2,
        members: ["BERRY", "KING", "PAGE", "WATERS"],
      },
      "SECOND ___": {
        level: 3,
        members: ["FIDDLE", "GUESS", "NATURE", "WIND"],
      },
    },
    startingBoard: [
      ["GUESS", "CHARADE", "KING", "WIND"],
      ["NATURE", "PLOT", "FIDDLE", "BERRY"],
      ["FRONT", "PAGE", "TITLE", "AIRS"],
      ["WATERS", "CAST", "AFFECT", "GENRE"],
    ],
  },
  {
    id: "283",
    name: "Connections #283",
    createdAt: "2024-03-20T00:00:00.000Z",
    board: {
      "SEEN AT A SPORTS STADIUM": {
        level: 0,
        members: ["ASTROTURF", "JUMBOTRON", "SCOREBOARD", "SKYBOX"],
      },
      "CAMERA BRANDS": {
        level: 1,
        members: ["FUJIFILM", "HASSELBLAD", "OLYMPUS", "POLAROID"],
      },
      "ITALIAN DEMONYMS": {
        level: 2,
        members: ["BOLOGNESE", "NEAPOLITAN", "PARMESAN", "VENETIAN"],
      },
      "STARTING WITH ROCK BANDS": {
        level: 3,
        members: ["CREAMSICLE", "JOURNEYMAN", "KISSCAM", "RUSHMORE"],
      },
    },
    startingBoard: [
      ["RUSHMORE", "PARMESAN", "OLYMPUS", "ASTROTURF"],
      ["JUMBOTRON", "JOURNEYMAN", "KISSCAM", "BOLOGNESE"],
      ["CREAMSICLE", "FUJIFILM", "NEAPOLITAN", "SKYBOX"],
      ["HASSELBLAD", "VENETIAN", "SCOREBOARD", "POLAROID"],
    ],
  },
  {
    id: "284",
    name: "Connections #284",
    createdAt: "2024-03-21T00:00:00.000Z",
    board: {
      "CHAT, INFORMALLY": { level: 0, members: ["GAB", "JAW", "YAK", "YAP"] },
      "FEMALE ANIMALS": { level: 1, members: ["COW", "DOE", "EWE", "HEN"] },
      PALINDROMES: { level: 2, members: ["BIB", "EYE", "GAG", "POP"] },
      "STARTS OF PLANET NAMES": {
        level: 3,
        members: ["EAR", "MAR", "MER", "SAT"],
      },
    },
    startingBoard: [
      ["POP", "EYE", "COW", "GAG"],
      ["EAR", "YAK", "EWE", "JAW"],
      ["DOE", "MAR", "YAP", "BIB"],
      ["SAT", "HEN", "MER", "GAB"],
    ],
  },
  {
    id: "285",
    name: "Connections #285",
    createdAt: "2024-03-22T00:00:00.000Z",
    board: {
      "JUMPING ANIMALS": {
        level: 0,
        members: ["CRICKET", "FROG", "HARE", "KANGAROO"],
      },
      "APPLY PRESSURE TO": {
        level: 1,
        members: ["CRUSH", "MASH", "PRESS", "SQUASH"],
      },
      "OLYMPIC SPORTS": {
        level: 2,
        members: ["BREAKING", "HOCKEY", "SKELETON", "TRAMPOLINE"],
      },
      "THINGS YOU CAN SET": {
        level: 3,
        members: ["MOOD", "RECORD", "TABLE", "VOLLEYBALL"],
      },
    },
    startingBoard: [
      ["VOLLEYBALL", "SQUASH", "TABLE", "HOCKEY"],
      ["RECORD", "BREAKING", "CRICKET", "PRESS"],
      ["FROG", "SKELETON", "MOOD", "CRUSH"],
      ["TRAMPOLINE", "KANGAROO", "MASH", "HARE"],
    ],
  },
  {
    id: "286",
    name: "Connections #286",
    createdAt: "2024-03-23T00:00:00.000Z",
    board: {
      KUDOS: { level: 0, members: ["CREDIT", "GLORY", "PRAISE", "PROPS"] },
      "BECOME AWARE OF": {
        level: 1,
        members: ["DISCOVER", "FIND", "LEARN", "REALIZE"],
      },
      PURSUE: { level: 2, members: ["CHASE", "TAIL", "TRACK", "SHADOW"] },
      "SEEN IN A PASSPORT": {
        level: 3,
        members: ["NAME", "PHOTO", "STAMP", "VISA"],
      },
    },
    startingBoard: [
      ["SHADOW", "NAME", "VISA", "TRACK"],
      ["DISCOVER", "PHOTO", "GLORY", "STAMP"],
      ["CHASE", "PROPS", "LEARN", "CREDIT"],
      ["TAIL", "FIND", "PRAISE", "REALIZE"],
    ],
  },
  {
    id: "287",
    name: "Connections #287",
    createdAt: "2024-03-24T00:00:00.000Z",
    board: {
      "YELLOW-BROWN SHADES": {
        level: 0,
        members: ["BEIGE", "CAMEL", "KHAKI", "TAN"],
      },
      "FAIL TO ATTEND": { level: 1, members: ["CUT", "DITCH", "MISS", "SKIP"] },
      "DECISIVE VICTORY": {
        level: 2,
        members: ["BLOWOUT", "ROMP", "ROUT", "SWEEP"],
      },
      "___ WHEEL": {
        level: 3,
        members: ["CHEESE", "COLOR", "HAMSTER", "PRAYER"],
      },
    },
    startingBoard: [
      ["SKIP", "CAMEL", "BEIGE", "ROMP"],
      ["COLOR", "CUT", "BLOWOUT", "HAMSTER"],
      ["CHEESE", "SWEEP", "DITCH", "TAN"],
      ["PRAYER", "KHAKI", "MISS", "ROUT"],
    ],
  },
  {
    id: "288",
    name: "Connections #288",
    createdAt: "2024-03-25T00:00:00.000Z",
    board: {
      "HOW FAST SOMETHING IS GOING": {
        level: 0,
        members: ["CLIP", "PACE", "RATE", "SPEED"],
      },
      '"STEP ON IT!"': { level: 1, members: ["FASTER", "GO", "HURRY", "MOVE"] },
      "N.B.A. TEAM PLAYER": {
        level: 2,
        members: ["CLIPPER", "PACER", "ROCKET", "SPUR"],
      },
      TELE___: {
        level: 3,
        members: ["COMMUTE", "MEDICINE", "PROMPTER", "VISION"],
      },
    },
    startingBoard: [
      ["PACE", "CLIPPER", "MOVE", "MEDICINE"],
      ["FASTER", "PROMPTER", "ROCKET", "SPEED"],
      ["GO", "SPUR", "COMMUTE", "HURRY"],
      ["RATE", "VISION", "CLIP", "PACER"],
    ],
  },
  {
    id: "289",
    name: "Connections #289",
    createdAt: "2024-03-26T00:00:00.000Z",
    board: {
      "MUSICAL INSTRUMENTS": {
        level: 0,
        members: ["BASS", "BASSOON", "HARP", "RECORDER"],
      },
      "PLANT GROWTHS": {
        level: 1,
        members: ["BLOOM", "BUD", "SHOOT", "SPROUT"],
      },
      "BRING UP": { level: 2, members: ["FOSTER", "NURSE", "RAISE", "REAR"] },
      "SOLAR EMANATIONS": {
        level: 3,
        members: ["CORONA", "FLARE", "LIGHT", "RADIATION"],
      },
    },
    startingBoard: [
      ["BUD", "LIGHT", "HARP", "SHOOT"],
      ["CORONA", "BASS", "FLARE", "REAR"],
      ["FOSTER", "BLOOM", "NURSE", "RECORDER"],
      ["BASSOON", "RAISE", "SPROUT", "RADIATION"],
    ],
  },
  {
    id: "290",
    name: "Connections #290",
    createdAt: "2024-03-27T00:00:00.000Z",
    board: {
      "UPDATE FOR ACCURACY": {
        level: 0,
        members: ["AMEND", "CORRECT", "FIX", "REVISE"],
      },
      QUARREL: { level: 1, members: ["FIGHT", "ROW", "SCRAP", "TIFF"] },
      "GAMES OF CHANCE": {
        level: 2,
        members: ["BINGO", "LOTTERY", "ROULETTE", "WAR"],
      },
      "___ CHIP": {
        level: 3,
        members: ["BLUE", "COMPUTER", "POKER", "POTATO"],
      },
    },
    startingBoard: [
      ["BINGO", "ROW", "CORRECT", "COMPUTER"],
      ["FIGHT", "AMEND", "BLUE", "POTATO"],
      ["FIX", "TIFF", "POKER", "ROULETTE"],
      ["REVISE", "LOTTERY", "SCRAP", "WAR"],
    ],
  },
  {
    id: "291",
    name: "Connections #291",
    createdAt: "2024-03-28T00:00:00.000Z",
    board: {
      EXITED: { level: 0, members: ["DEPARTED", "LEFT", "SPLIT", "WENT"] },
      "ONE FLYING AN AIRPLANE": {
        level: 1,
        members: ["ACE", "AVIATOR", "FLIER", "PILOT"],
      },
      "KINDS OF WHALES": {
        level: 2,
        members: ["BLUE", "FIN", "GRAY", "RIGHT"],
      },
      "THINGS WITH SLOTS": {
        level: 3,
        members: ["ATM", "CASINO", "SCHEDULE", "SPATULA"],
      },
    },
    startingBoard: [
      ["BLUE", "CASINO", "GRAY", "SPATULA"],
      ["DEPARTED", "RIGHT", "AVIATOR", "LEFT"],
      ["ACE", "SPLIT", "ATM", "FLIER"],
      ["WENT", "SCHEDULE", "PILOT", "FIN"],
    ],
  },
  {
    id: "292",
    name: "Connections #292",
    createdAt: "2024-03-29T00:00:00.000Z",
    board: {
      ESPECIALLY: { level: 0, members: ["MIGHTY", "PRETTY", "REALLY", "VERY"] },
      "DISNEY CHARACTERS": {
        level: 1,
        members: ["DAISY", "GOOFY", "HAPPY", "LADY"],
      },
      "KINDS OF BLUE": {
        level: 2,
        members: ["BABY", "NAVY", "SKY", "TIFFANY"],
      },
      'BODY PARTS PLUS "Y"': {
        level: 3,
        members: ["ARMY", "COLONY", "LIVERY", "SHINY"],
      },
    },
    startingBoard: [
      ["HAPPY", "PRETTY", "SHINY", "SKY"],
      ["BABY", "LADY", "ARMY", "NAVY"],
      ["TIFFANY", "LIVERY", "COLONY", "REALLY"],
      ["MIGHTY", "DAISY", "VERY", "GOOFY"],
    ],
  },
  {
    id: "293",
    name: "Connections #293",
    createdAt: "2024-03-30T00:00:00.000Z",
    board: {
      "BREATHES HEAVILY": {
        level: 0,
        members: ["GASPS", "HUFFS", "PANTS", "PUFFS"],
      },
      "PRESERVES, AS MEAT": {
        level: 1,
        members: ["CANS", "CURES", "SALTS", "SMOKES"],
      },
      PREDICAMENTS: {
        level: 2,
        members: ["BINDS", "JAMS", "PICKLES", "SPOTS"],
      },
      "THINGS IN “MY FAVORITE THINGS”": {
        level: 3,
        members: ["KETTLES", "MITTENS", "RAINDROPS", "WHISKERS"],
      },
    },
    startingBoard: [
      ["SMOKES", "JAMS", "CANS", "MITTENS"],
      ["PUFFS", "KETTLES", "SPOTS", "SALTS"],
      ["RAINDROPS", "PANTS", "PICKLES", "WHISKERS"],
      ["GASPS", "CURES", "BINDS", "HUFFS"],
    ],
  },
  {
    id: "294",
    name: "Connections #294",
    createdAt: "2024-03-31T00:00:00.000Z",
    board: {
      "TAKE A TUMBLE": { level: 0, members: ["FALL", "SLIP", "SPILL", "TRIP"] },
      "KINDS OF WATER": {
        level: 1,
        members: ["MINERAL", "SPRING", "STILL", "TAP"],
      },
      "THINGS THAT ARE CINCHED IN THE MIDDLE": {
        level: 2,
        members: ["CORSET", "DIABOLO", "HOURGLASS", "WASP"],
      },
      "___ BEAR": { level: 3, members: ["BOO-BOO", "BROWN", "HONEY", "TEDDY"] },
    },
    startingBoard: [
      ["HONEY", "BROWN", "CORSET", "MINERAL"],
      ["SPRING", "SLIP", "TEDDY", "WASP"],
      ["FALL", "HOURGLASS", "TAP", "BOO-BOO"],
      ["STILL", "SPILL", "DIABOLO", "TRIP"],
    ],
  },
  {
    id: "295",
    name: "Connections #295",
    createdAt: "2024-04-01T00:00:00.000Z",
    board: {
      "FOOD SLANG FOR MONEY": { level: 0, members: ["🥓", "🍞", "🥬", "🧀"] },
      "WORDS THAT RHYME": { level: 1, members: ["🧠", "✈️", "🌧️", "🚂"] },
      "HORROR MOVIES": { level: 2, members: ["👽", "🧛", "🪚", "😱"] },
      "LETTER HOMOPHONES": { level: 3, members: ["🐝", "🐑", "👁️", "🫖"] },
    },
    startingBoard: [
      ["🍞", "🧠", "🫖", "🪚"],
      ["😱", "🐑", "🥬", "🚂"],
      ["👽", "🧀", "🌧️", "👁️"],
      ["🥓", "✈️", "🐝", "🧛"],
    ],
  },
  {
    id: "296",
    name: "Connections #296",
    createdAt: "2024-04-02T00:00:00.000Z",
    board: {
      THRUST: { level: 0, members: ["JAB", "POKE", "PROD", "STICK"] },
      "KINDS OF SNAKES": {
        level: 1,
        members: ["ADDER", "BOA", "MAMBA", "MOCCASIN"],
      },
      "SEEN IN “CINDERELLA”": {
        level: 2,
        members: ["BALL", "PRINCE", "PUMPKIN", "SLIPPER"],
      },
      "PASTA SHAPES": {
        level: 3,
        members: ["BOWTIE", "ELBOW", "TUBE", "WHEEL"],
      },
    },
    startingBoard: [
      ["MOCCASIN", "PRINCE", "POKE", "BALL"],
      ["SLIPPER", "ELBOW", "BOA", "BOWTIE"],
      ["STICK", "TUBE", "WHEEL", "PROD"],
      ["MAMBA", "JAB", "PUMPKIN", "ADDER"],
    ],
  },
  {
    id: "297",
    name: "Connections #297",
    createdAt: "2024-04-03T00:00:00.000Z",
    board: {
      BENCHMARK: {
        level: 0,
        members: ["BENCHMARK", "GAUGE", "STANDARD", "YARDSTICK"],
      },
      "POKER ACTIONS": { level: 1, members: ["BET", "CALL", "CHECK", "FOLD"] },
      "SKIN TYPES": {
        level: 2,
        members: ["COMBINATION", "DRY", "NORMAL", "OILY"],
      },
      "STARTS OF U.S. STATES": {
        level: 3,
        members: ["KENT", "MARY", "MASS", "WASH"],
      },
    },
    startingBoard: [
      ["MASS", "MARY", "NORMAL", "WASH"],
      ["STANDARD", "DRY", "YARDSTICK", "FOLD"],
      ["OILY", "CHECK", "GAUGE", "COMBINATION"],
      ["CALL", "KENT", "BENCHMARK", "BET"],
    ],
  },
  {
    id: "298",
    name: "Connections #298",
    createdAt: "2024-04-04T00:00:00.000Z",
    board: {
      "WAYS TO PREPARE EGGS": {
        level: 0,
        members: ["BOIL", "FRY", "POACH", "SCRAMBLE"],
      },
      EXHILARATION: { level: 1, members: ["BUZZ", "KICK", "RUSH", "THRILL"] },
      "THROWN IN TARGET GAMES": {
        level: 2,
        members: ["AXE", "DART", "HORSESHOE", "RING"],
      },
      "___ WRAP": { level: 3, members: ["BODY", "BUBBLE", "GIFT", "SHRINK"] },
    },
    startingBoard: [
      ["BUZZ", "GIFT", "SHRINK", "DART"],
      ["SCRAMBLE", "AXE", "RUSH", "RING"],
      ["BUBBLE", "HORSESHOE", "BOIL", "KICK"],
      ["BODY", "FRY", "THRILL", "POACH"],
    ],
  },
  {
    id: "299",
    name: "Connections #299",
    createdAt: "2024-04-05T00:00:00.000Z",
    board: {
      "PIECES OF FURNITURE": {
        level: 0,
        members: ["BED", "CHAIR", "COUCH", "TABLE"],
      },
      "CARRY, AS A FEELING": {
        level: 1,
        members: ["BEAR", "HARBOR", "HOLD", "MAINTAIN"],
      },
      "WINE TASTING DESCRIPTORS": {
        level: 2,
        members: ["BALANCED", "DRY", "FULL", "SWEET"],
      },
      "STARTING WITH METALS": {
        level: 3,
        members: ["GOLDILOCKS", "IRONIC", "LEADERSHIP", "TINDER"],
      },
    },
    startingBoard: [
      ["SWEET", "BEAR", "TINDER", "DRY"],
      ["HARBOR", "CHAIR", "GOLDILOCKS", "LEADERSHIP"],
      ["MAINTAIN", "IRONIC", "BALANCED", "BED"],
      ["TABLE", "HOLD", "COUCH", "FULL"],
    ],
  },
  {
    id: "300",
    name: "Connections #300",
    createdAt: "2024-04-06T00:00:00.000Z",
    board: {
      "INTRINSIC MOTIVATORS": {
        level: 0,
        members: ["DESIRE", "DRIVE", "RESOLVE", "WILL"],
      },
      "SUMMER GEAR": {
        level: 1,
        members: ["HAT", "SHORTS", "SUNGLASSES", "TEE"],
      },
      COLLECTION: { level: 2, members: ["ARRAY", "BATTERY", "SET", "SERIES"] },
      HORSE___: { level: 3, members: ["FLY", "POWER", "RADISH", "SHOE"] },
    },
    startingBoard: [
      ["POWER", "DRIVE", "WILL", "SHORTS"],
      ["SHOE", "SERIES", "TEE", "FLY"],
      ["BATTERY", "SUNGLASSES", "SET", "RADISH"],
      ["DESIRE", "ARRAY", "HAT", "RESOLVE"],
    ],
  },
  {
    id: "301",
    name: "Connections #301",
    createdAt: "2024-04-07T00:00:00.000Z",
    board: {
      "DISORDERLY PLACE": {
        level: 0,
        members: ["DUMP", "MESS", "PIGPEN", "STY"],
      },
      STURDY: { level: 1, members: ["FIRM", "SOLID", "SOUND", "STABLE"] },
      "FOUND IN CRACKER JACKS": {
        level: 2,
        members: ["CARAMEL", "PEANUTS", "POPCORN", "PRIZE"],
      },
      "___ HORSE": { level: 3, members: ["CHARLEY", "CRAZY", "DARK", "GIFT"] },
    },
    startingBoard: [
      ["CRAZY", "PEANUTS", "PRIZE", "FIRM"],
      ["PIGPEN", "SOUND", "GIFT", "CHARLEY"],
      ["STABLE", "STY", "DARK", "CARAMEL"],
      ["DUMP", "POPCORN", "SOLID", "MESS"],
    ],
  },
  {
    id: "302",
    name: "Connections #302",
    createdAt: "2024-04-08T00:00:00.000Z",
    board: {
      "BRIEF MOMENT": {
        level: 0,
        members: ["FLASH", "HEARTBEAT", "JIFF", "WINK"],
      },
      DISPUTE: { level: 1, members: ["CLASH", "SCRAP", "TANGLE", "TIFF"] },
      "SLANG FOR ZERO": { level: 2, members: ["JACK", "LOVE", "SQUAT", "ZIP"] },
      "ACCESSORIES FOR MR. PEANUT": {
        level: 3,
        members: ["CANE", "MONOCLE", "SPAT", "TOP HAT"],
      },
    },
    startingBoard: [
      ["FLASH", "CLASH", "WINK", "SPAT"],
      ["ZIP", "CANE", "LOVE", "HEARTBEAT"],
      ["TIFF", "SQUAT", "SCRAP", "MONOCLE"],
      ["TANGLE", "TOP HAT", "JIFF", "JACK"],
    ],
  },
  {
    id: "303",
    name: "Connections #303",
    createdAt: "2024-04-09T00:00:00.000Z",
    board: {
      BREADTH: { level: 0, members: ["EXTENT", "RANGE", "REACH", "SCOPE"] },
      "HAIR TOOLS": { level: 1, members: ["BRUSH", "COMB", "DRYER", "IRON"] },
      "HERALDRY TERMS": {
        level: 2,
        members: ["ARMS", "COAT", "CREST", "SHIELD"],
      },
      "WORDS BEFORE “DRUM”": {
        level: 3,
        members: ["EAR", "KETTLE", "OIL", "STEEL"],
      },
    },
    startingBoard: [
      ["EAR", "SCOPE", "IRON", "OIL"],
      ["CREST", "BRUSH", "ARMS", "REACH"],
      ["KETTLE", "RANGE", "COMB", "STEEL"],
      ["DRYER", "COAT", "SHIELD", "EXTENT"],
    ],
  },
  {
    id: "304",
    name: "Connections #304",
    createdAt: "2024-04-10T00:00:00.000Z",
    board: {
      "PERSON IN CHARGE": {
        level: 0,
        members: ["CHAIR", "CHIEF", "DIRECTOR", "HEAD"],
      },
      "GRASSY AREA": {
        level: 1,
        members: ["FIELD", "GREEN", "GROUNDS", "LAWN"],
      },
      "WORDS BEFORE “NUT”": {
        level: 2,
        members: ["CHEST", "COCO", "HAZEL", "PEA"],
      },
      "SECOND WORDS IN TARANTINO MOVIES": {
        level: 3,
        members: ["BROWN", "DOGS", "FICTION", "UNCHAINED"],
      },
    },
    startingBoard: [
      ["PEA", "CHEST", "BROWN", "GROUNDS"],
      ["HAZEL", "HEAD", "GREEN", "FICTION"],
      ["LAWN", "CHAIR", "COCO", "DIRECTOR"],
      ["CHIEF", "DOGS", "FIELD", "UNCHAINED"],
    ],
  },
  {
    id: "305",
    name: "Connections #305",
    createdAt: "2024-04-11T00:00:00.000Z",
    board: {
      "HAIRCUTS, WITH “CUT”": {
        level: 0,
        members: ["BOWL", "BUZZ", "CREW", "PIXIE"],
      },
      "MEASURING INSTRUMENTS": {
        level: 1,
        members: ["COMPASS", "RULER", "SCALE", "WATCH"],
      },
      "WATER AND GAS CONDUITS": {
        level: 2,
        members: ["CHANNEL", "LINE", "MAIN", "PIPE"],
      },
      "FAST FOOD MASCOTS": {
        level: 3,
        members: ["CLOWN", "COLONEL", "KING", "MERMAID"],
      },
    },
    startingBoard: [
      ["MERMAID", "PIXIE", "MAIN", "RULER"],
      ["KING", "PIPE", "BUZZ", "BOWL"],
      ["COMPASS", "CLOWN", "CHANNEL", "CREW"],
      ["SCALE", "LINE", "WATCH", "COLONEL"],
    ],
  },
  {
    id: "306",
    name: "Connections #306",
    createdAt: "2024-04-12T00:00:00.000Z",
    board: {
      ORDERLY: { level: 0, members: ["CLEAN", "NEAT", "TIDY", "TRIM"] },
      "AUGMENTATIVE PREFIXES": {
        level: 1,
        members: ["HYPER", "SUPER", "UBER", "ULTRA"],
      },
      "BECOME LARGER": {
        level: 2,
        members: ["BALLOON", "MUSHROOM", "SNOWBALL", "SWELL"],
      },
      "ITEMS IN CLASSIC KIDS’ GAMES": {
        level: 3,
        members: ["DOMINO", "JACK", "MARBLE", "STICK"],
      },
    },
    startingBoard: [
      ["SUPER", "BALLOON", "STICK", "SWELL"],
      ["DOMINO", "JACK", "NEAT", "UBER"],
      ["HYPER", "SNOWBALL", "MARBLE", "CLEAN"],
      ["TIDY", "ULTRA", "MUSHROOM", "TRIM"],
    ],
  },
  {
    id: "307",
    name: "Connections #307",
    createdAt: "2024-04-13T00:00:00.000Z",
    board: {
      "SEEN AT THE CIRCUS": {
        level: 0,
        members: ["CLOWN", "RING", "TENT", "TRAPEZE"],
      },
      "“THE WIZARD OF OZ” FIGURES": {
        level: 1,
        members: ["LION", "SCARECROW", "WITCH", "WIZARD"],
      },
      "FILM DEPARTMENTS": {
        level: 2,
        members: ["HAIR", "MAKEUP", "PROPS", "WARDROBE"],
      },
      "“I’M A ___” (LYRICS IN “THE JOKER”)": {
        level: 3,
        members: ["JOKER", "LOVER", "SINNER", "SMOKER"],
      },
    },
    startingBoard: [
      ["JOKER", "HAIR", "RING", "WITCH"],
      ["LION", "CLOWN", "SINNER", "WARDROBE"],
      ["TENT", "SCARECROW", "MAKEUP", "WIZARD"],
      ["PROPS", "SMOKER", "TRAPEZE", "LOVER"],
    ],
  },
  {
    id: "308",
    name: "Connections #308",
    createdAt: "2024-04-14T00:00:00.000Z",
    board: {
      "PULL USING FORCE": {
        level: 0,
        members: ["RIP", "TEAR", "WRENCH", "YANK"],
      },
      "BIT OF REPETITIVE TRAINING": {
        level: 1,
        members: ["DRILL", "EXERCISE", "PRACTICE", "ROUTINE"],
      },
      "U.S.-BASED AIRLINES": {
        level: 2,
        members: ["AMERICAN", "FRONTIER", "SPIRIT", "UNITED"],
      },
      "BEGINNING WITH DAY ABBREVIATIONS": {
        level: 3,
        members: ["FRIAR", "MONKEY", "SUNDRY", "WEDDING"],
      },
    },
    startingBoard: [
      ["WEDDING", "SPIRIT", "DRILL", "FRIAR"],
      ["AMERICAN", "SUNDRY", "MONKEY", "WRENCH"],
      ["ROUTINE", "YANK", "UNITED", "EXERCISE"],
      ["TEAR", "FRONTIER", "PRACTICE", "RIP"],
    ],
  },
  {
    id: "309",
    name: "Connections #309",
    createdAt: "2024-04-15T00:00:00.000Z",
    board: {
      "INVENT AS YOU GO": {
        level: 0,
        members: ["AD-LIB", "FREESTYLE", "IMPROV", "MAKE UP"],
      },
      "THINGS BABIES DO": {
        level: 1,
        members: ["BABBLE", "COO", "CRAWL", "NURSE"],
      },
      SUPERFICIAL: {
        level: 2,
        members: ["COSMETIC", "EXTERNAL", "SHALLOW", "SURFACE"],
      },
      "___ EFFECT": {
        level: 3,
        members: ["BUTTERFLY", "DOMINO", "PLACEBO", "SIDE"],
      },
    },
    startingBoard: [
      ["SIDE", "SURFACE", "BUTTERFLY", "DOMINO"],
      ["FREESTYLE", "PLACEBO", "MAKE UP", "CRAWL"],
      ["COSMETIC", "BABBLE", "EXTERNAL", "AD-LIB"],
      ["COO", "IMPROV", "SHALLOW", "NURSE"],
    ],
  },
  {
    id: "310",
    name: "Connections #310",
    createdAt: "2024-04-16T00:00:00.000Z",
    board: {
      FLABBERGAST: {
        level: 0,
        members: ["FLOOR", "ROCK", "SHOCK", "SURPRISE"],
      },
      "BIT OF JOURNALISM": {
        level: 1,
        members: ["ARTICLE", "FEATURE", "REPORT", "STORY"],
      },
      "ON THE SAME PLANE": {
        level: 2,
        members: ["EVEN", "FLAT", "FLUSH", "LEVEL"],
      },
      "THEATER SECTIONS": {
        level: 3,
        members: ["BALCONY", "BOX", "ORCHESTRA", "STAGE"],
      },
    },
    startingBoard: [
      ["SURPRISE", "BOX", "STORY", "STAGE"],
      ["LEVEL", "ROCK", "ORCHESTRA", "FLOOR"],
      ["BALCONY", "FEATURE", "REPORT", "FLAT"],
      ["FLUSH", "SHOCK", "EVEN", "ARTICLE"],
    ],
  },
  {
    id: "311",
    name: "Connections #311",
    createdAt: "2024-04-17T00:00:00.000Z",
    board: {
      "UPRIGHT SUPPORT": {
        level: 0,
        members: ["COLUMN", "PILLAR", "POLE", "POST"],
      },
      "HEED, AS RULES": {
        level: 1,
        members: ["FOLLOW", "MIND", "OBSERVE", "REGARD"],
      },
      ALLOTMENT: {
        level: 2,
        members: ["INTEREST", "PERCENTAGE", "SHARE", "STAKE"],
      },
      "GATHERED BY SPIES": {
        level: 3,
        members: ["DIRT", "INFORMATION", "INTELLIGENCE", "SECRETS"],
      },
    },
    startingBoard: [
      ["DIRT", "MIND", "SHARE", "REGARD"],
      ["POST", "INTELLIGENCE", "FOLLOW", "STAKE"],
      ["OBSERVE", "INTEREST", "COLUMN", "SECRETS"],
      ["POLE", "INFORMATION", "PERCENTAGE", "PILLAR"],
    ],
  },
  {
    id: "312",
    name: "Connections #312",
    createdAt: "2024-04-18T00:00:00.000Z",
    board: {
      "SIDEWALK SIGHTS": {
        level: 0,
        members: ["CURB", "GRATE", "GUTTER", "MANHOLE"],
      },
      "HAVE IN MIND": { level: 1, members: ["AIM", "INTEND", "MEAN", "PLAN"] },
      "UNIT ABBREVIATIONS": { level: 2, members: ["CAL", "GAL", "IN", "OZ"] },
      "GOLDEN ___": {
        level: 3,
        members: ["FLEECE", "GIRLS", "PARACHUTE", "RULE"],
      },
    },
    startingBoard: [
      ["MEAN", "GIRLS", "IN", "OZ"],
      ["CURB", "PLAN", "PARACHUTE", "GUTTER"],
      ["GAL", "RULE", "GRATE", "FLEECE"],
      ["AIM", "CAL", "INTEND", "MANHOLE"],
    ],
  },
  {
    id: "313",
    name: "Connections #313",
    createdAt: "2024-04-19T00:00:00.000Z",
    board: {
      "ATTACH WITH ADHESIVE": {
        level: 0,
        members: ["ADHERE", "GLUE", "PASTE", "STICK"],
      },
      "PUBLISHED LINES": {
        level: 1,
        members: ["COPY", "TEXT", "WORDS", "WRITING"],
      },
      "DIAMOND QUALITIES": {
        level: 2,
        members: ["CARAT", "CLARITY", "COLOR", "CUT"],
      },
      "A-___": { level: 3, members: ["LIST", "OK", "PLUS", "ROD"] },
    },
    startingBoard: [
      ["GLUE", "STICK", "CUT", "WORDS"],
      ["ROD", "COPY", "PLUS", "LIST"],
      ["PASTE", "COLOR", "TEXT", "CLARITY"],
      ["OK", "WRITING", "CARAT", "ADHERE"],
    ],
  },
  {
    id: "314",
    name: "Connections #314",
    createdAt: "2024-04-20T00:00:00.000Z",
    board: {
      BALDERDASH: {
        level: 0,
        members: ["BUNK", "CROCK", "HOGWASH", "HORSEFEATHERS"],
      },
      "TRACK AND FIELD EQUIPMENT": {
        level: 1,
        members: ["BATON", "HAMMER", "HURDLE", "POLE"],
      },
      "PARTS OF A DEVIL COSTUME": {
        level: 2,
        members: ["GOATEE", "HORNS", "PITCHFORK", "TAIL"],
      },
      "TYPES OF KNOTS": {
        level: 3,
        members: ["BEND", "BOWLINE", "HITCH", "SHEEPSHANK"],
      },
    },
    startingBoard: [
      ["GOATEE", "HAMMER", "HURDLE", "HITCH"],
      ["HOGWASH", "PITCHFORK", "TAIL", "BEND"],
      ["BUNK", "SHEEPSHANK", "HORNS", "HORSEFEATHERS"],
      ["POLE", "CROCK", "BOWLINE", "BATON"],
    ],
  },
  {
    id: "315",
    name: "Connections #315",
    createdAt: "2024-04-21T00:00:00.000Z",
    board: {
      EMBODIMENT: {
        level: 0,
        members: ["EXAMPLE", "IDEAL", "MODEL", "SYMBOL"],
      },
      "RELATED TO TRAINS": {
        level: 1,
        members: ["CAR", "CONDUCTOR", "STATION", "TRACK"],
      },
      "STARTING WITH THE SAME SOUND": {
        level: 2,
        members: ["CYMBAL", "SCIMITAR", "SIMMER", "SYMPHONY"],
      },
      EAR___: { level: 3, members: ["DRUM", "MARK", "WAX", "WIG"] },
    },
    startingBoard: [
      ["DRUM", "TRACK", "SYMPHONY", "WIG"],
      ["CONDUCTOR", "WAX", "CYMBAL", "IDEAL"],
      ["CAR", "MODEL", "MARK", "SIMMER"],
      ["EXAMPLE", "SCIMITAR", "STATION", "SYMBOL"],
    ],
  },
  {
    id: "316",
    name: "Connections #316",
    createdAt: "2024-04-22T00:00:00.000Z",
    board: {
      "SLANG FOR FRIEND": { level: 0, members: ["BUD", "CHUM", "MATE", "PAL"] },
      "ADJECTIVES FOR A BASEMENT": {
        level: 1,
        members: ["COLD", "DANK", "DARK", "MUSTY"],
      },
      STUBBLE: { level: 2, members: ["FUZZ", "SCRUFF", "SHADOW", "WHISKERS"] },
      "COLLECTION OF MONEY": {
        level: 3,
        members: ["FUND", "KITTY", "POOL", "POT"],
      },
    },
    startingBoard: [
      ["SHADOW", "BUD", "KITTY", "FUZZ"],
      ["DARK", "WHISKERS", "POT", "COLD"],
      ["POOL", "DANK", "MATE", "FUND"],
      ["CHUM", "SCRUFF", "MUSTY", "PAL"],
    ],
  },
  {
    id: "317",
    name: "Connections #317",
    createdAt: "2024-04-23T00:00:00.000Z",
    board: {
      "THROW OUT": { level: 0, members: ["BOOT", "BOUNCE", "EJECT", "TOSS"] },
      "TERRA FIRMA": { level: 1, members: ["EARTH", "GROUND", "LAND", "SOIL"] },
      SEAS: { level: 2, members: ["BALTIC", "BLACK", "PHILIPPINE", "RED"] },
      "TOM HANKS MOVIES": {
        level: 3,
        members: ["BIG", "PHILADELPHIA", "SPLASH", "SULLY"],
      },
    },
    startingBoard: [
      ["BOUNCE", "BIG", "RED", "BOOT"],
      ["BLACK", "SOIL", "TOSS", "SPLASH"],
      ["SULLY", "LAND", "BALTIC", "EARTH"],
      ["PHILIPPINE", "PHILADELPHIA", "GROUND", "EJECT"],
    ],
  },
  {
    id: "318",
    name: "Connections #318",
    createdAt: "2024-04-24T00:00:00.000Z",
    board: {
      "TACO TOPPINGS": {
        level: 0,
        members: ["CILANTRO", "LIME", "ONION", "SALSA"],
      },
      "METRIC PREFIXES": {
        level: 1,
        members: ["KILO", "MEGA", "MICRO", "PICO"],
      },
      "KINDS OF SKIRTS": {
        level: 2,
        members: ["MINI", "PENCIL", "POODLE", "WRAP"],
      },
      "WORDS WITH “HILL”": {
        level: 3,
        members: ["CAPITOL", "FAITH", "FOOT", "MOLE"],
      },
    },
    startingBoard: [
      ["MINI", "LIME", "FAITH", "MOLE"],
      ["SALSA", "POODLE", "PICO", "FOOT"],
      ["PENCIL", "MICRO", "ONION", "WRAP"],
      ["MEGA", "CILANTRO", "KILO", "CAPITOL"],
    ],
  },
  {
    id: "319",
    name: "Connections #319",
    createdAt: "2024-04-25T00:00:00.000Z",
    board: {
      "LAB EQUIPMENT": {
        level: 0,
        members: ["BEAKER", "DROPPER", "GOGGLES", "MICROSCOPE"],
      },
      NEXUS: { level: 1, members: ["CENTER", "HEART", "HUB", "NUCLEUS"] },
      "SPREADSHEET TERMS": {
        level: 2,
        members: ["CELL", "FORMULA", "SHEET", "SORT"],
      },
      "___ LANGUAGE": {
        level: 3,
        members: ["BODY", "LOVE", "ROMANCE", "SIGN"],
      },
    },
    startingBoard: [
      ["BODY", "MICROSCOPE", "SIGN", "SHEET"],
      ["HEART", "CELL", "BEAKER", "LOVE"],
      ["DROPPER", "NUCLEUS", "ROMANCE", "FORMULA"],
      ["CENTER", "SORT", "GOGGLES", "HUB"],
    ],
  },
  {
    id: "320",
    name: "Connections #320",
    createdAt: "2024-04-26T00:00:00.000Z",
    board: {
      "REFINED SENSIBILITY": {
        level: 0,
        members: ["ELEGANCE", "GRACE", "STYLE", "TASTE"],
      },
      "CATCH SOME RAYS": { level: 1, members: ["BAKE", "BASK", "SUN", "TAN"] },
      "EMOTIONALLY SWAY ": {
        level: 2,
        members: ["AFFECT", "IMPACT", "MOVE", "TOUCH"],
      },
      "NUMBERS WITH FIRST LETTERS REPLACED BY “S”": {
        level: 3,
        members: ["SEN", "SIGHT", "SINE", "SOUR"],
      },
    },
    startingBoard: [
      ["SINE", "SEN", "SUN", "TAN"],
      ["MOVE", "TASTE", "SOUR", "SIGHT"],
      ["BAKE", "TOUCH", "GRACE", "AFFECT"],
      ["STYLE", "IMPACT", "BASK", "ELEGANCE"],
    ],
  },
  {
    id: "321",
    name: "Connections #321",
    createdAt: "2024-04-27T00:00:00.000Z",
    board: {
      "TRUST AS REAL": {
        level: 0,
        members: ["ACCEPT", "BELIEVE", "BUY", "SWALLOW"],
      },
      "POWER ISSUES": {
        level: 1,
        members: ["OUTAGE", "SHORT", "SPIKE", "SURGE"],
      },
      SUMMARY: {
        level: 2,
        members: ["ABSTRACT", "BRIEF", "DIGEST", "OUTLINE"],
      },
      "NAME HOMOPHONES": {
        level: 3,
        members: ["CURT", "HAIRY", "KNEEL", "WANE"],
      },
    },
    startingBoard: [
      ["BUY", "SHORT", "SPIKE", "SWALLOW"],
      ["DIGEST", "CURT", "HAIRY", "OUTLINE"],
      ["BELIEVE", "BRIEF", "SURGE", "WANE"],
      ["ABSTRACT", "ACCEPT", "KNEEL", "OUTAGE"],
    ],
  },
  {
    id: "322",
    name: "Connections #322",
    createdAt: "2024-04-28T00:00:00.000Z",
    board: {
      "PASSIONATE, AS A FEELING": {
        level: 0,
        members: ["DEEP", "EXTREME", "FIERCE", "INTENSE"],
      },
      "BANG INTO": { level: 1, members: ["BUMP", "BUTT", "KNOCK", "RAM"] },
      "ANALOG TV INTERFERENCE": {
        level: 2,
        members: ["FUZZ", "NOISE", "SNOW", "STATIC"],
      },
      "___ MARY": { level: 3, members: ["BLOODY", "HAIL", "PROUD", "VIRGIN"] },
    },
    startingBoard: [
      ["SNOW", "RAM", "FIERCE", "PROUD"],
      ["VIRGIN", "HAIL", "BLOODY", "NOISE"],
      ["DEEP", "BUMP", "FUZZ", "INTENSE"],
      ["BUTT", "STATIC", "EXTREME", "KNOCK"],
    ],
  },
  {
    id: "323",
    name: "Connections #323",
    createdAt: "2024-04-29T00:00:00.000Z",
    board: {
      EXERCISES: { level: 0, members: ["BRIDGE", "CRUNCH", "DIP", "SQUAT"] },
      "FEATURED IN WESTERNS": {
        level: 1,
        members: ["BOUNTY", "COWBOY", "DUEL", "SALOON"],
      },
      "LEADERS WHO RECEIVED THE NOBEL PEACE PRIZE": {
        level: 2,
        members: ["CARTER", "GORE", "KING", "TUTU"],
      },
      "___ BEE": { level: 3, members: ["BUSY", "HONEY", "QUEEN", "SPELLING"] },
    },
    startingBoard: [
      ["BRIDGE", "QUEEN", "COWBOY", "CARTER"],
      ["HONEY", "BOUNTY", "KING", "CRUNCH"],
      ["BUSY", "DUEL", "SQUAT", "TUTU"],
      ["SALOON", "SPELLING", "GORE", "DIP"],
    ],
  },
  {
    id: "324",
    name: "Connections #324",
    createdAt: "2024-04-30T00:00:00.000Z",
    board: {
      "DIPPING SAUCES": {
        level: 0,
        members: ["AIOLI", "BARBECUE", "MARINARA", "RANCH"],
      },
      INTERROGATE: {
        level: 1,
        members: ["EXAMINE", "GRILL", "PROBE", "QUESTION"],
      },
      "TRANSACTION RECORD": {
        level: 2,
        members: ["BILL", "INVOICE", "RECEIPT", "STATEMENT"],
      },
      "WHAT “STOCK” MIGHT MEAN": {
        level: 3,
        members: ["ANCESTRY", "BROTH", "CATTLE", "MERCHANDISE"],
      },
    },
    startingBoard: [
      ["RANCH", "STATEMENT", "CATTLE", "BROTH"],
      ["QUESTION", "BARBECUE", "GRILL", "BILL"],
      ["ANCESTRY", "EXAMINE", "RECEIPT", "MARINARA"],
      ["PROBE", "AIOLI", "MERCHANDISE", "INVOICE"],
    ],
  },
  {
    id: "325",
    name: "Connections #325",
    createdAt: "2024-05-01T00:00:00.000Z",
    board: {
      "FEATURES ON A PAIR OF JEANS": {
        level: 0,
        members: ["BUTTON", "FLY", "POCKET", "RIVET"],
      },
      "OBJECTS IN 0-, 1-, 2- AND 3-DIMENSIONAL SPACE": {
        level: 1,
        members: ["LINE", "PLANE", "POINT", "SOLID"],
      },
      "WEB BROWSER MENUS": {
        level: 2,
        members: ["FILE", "HISTORY", "VIEW", "WINDOW"],
      },
      "MEMBER OF A ’60S BAND": {
        level: 3,
        members: ["ANIMAL", "DOOR", "KINK", "SUPREME"],
      },
    },
    startingBoard: [
      ["VIEW", "ANIMAL", "PLANE", "WINDOW"],
      ["FLY", "POINT", "POCKET", "DOOR"],
      ["HISTORY", "KINK", "RIVET", "LINE"],
      ["SOLID", "FILE", "SUPREME", "BUTTON"],
    ],
  },
  {
    id: "326",
    name: "Connections #326",
    createdAt: "2024-05-02T00:00:00.000Z",
    board: {
      "HIGHLY SKILLED": {
        level: 0,
        members: ["ACE", "CRACKERJACK", "EXPERT", "HOTSHOT"],
      },
      "USED TO FIX A FLAT": {
        level: 1,
        members: ["CHOCK", "JACK", "TIRE", "WRENCH"],
      },
      "JOAQUIN PHOENIX MOVIES": {
        level: 2,
        members: ["GLADIATOR", "HER", "JOKER", "SIGNS"],
      },
      "WORDS STARTING WITH MUSIC GENRES": {
        level: 3,
        members: ["POPCORN", "RAPTURE", "ROCKETRY", "SOULMATE"],
      },
    },
    startingBoard: [
      ["ACE", "POPCORN", "JOKER", "RAPTURE"],
      ["CRACKERJACK", "JACK", "SOULMATE", "WRENCH"],
      ["HER", "ROCKETRY", "HOTSHOT", "SIGNS"],
      ["TIRE", "EXPERT", "GLADIATOR", "CHOCK"],
    ],
  },
  {
    id: "327",
    name: "Connections #327",
    createdAt: "2024-05-03T00:00:00.000Z",
    board: {
      NIGHTSPOTS: { level: 0, members: ["BAR", "CLUB", "DISCO", "LOUNGE"] },
      "CAST OFF": { level: 1, members: ["DITCH", "DROP", "LOSE", "SHED"] },
      "UNITS OF LENGTH": {
        level: 2,
        members: ["FATHOM", "FOOT", "LEAGUE", "YARD"],
      },
      "___ SALE": {
        level: 3,
        members: ["BAKE", "CLEARANCE", "GARAGE", "SAMPLE"],
      },
    },
    startingBoard: [
      ["GARAGE", "SHED", "YARD", "DISCO"],
      ["LOUNGE", "CLEARANCE", "SAMPLE", "LEAGUE"],
      ["DITCH", "FATHOM", "BAKE", "CLUB"],
      ["FOOT", "LOSE", "BAR", "DROP"],
    ],
  },
  {
    id: "328",
    name: "Connections #328",
    createdAt: "2024-05-04T00:00:00.000Z",
    board: {
      ENJOY: { level: 0, members: ["FANCY", "LOVE", "RELISH", "SAVOR"] },
      "FILLER WORDS": {
        level: 1,
        members: ["LIKE", "LITERALLY", "UM", "WELL"],
      },
      "COMPONENTS OF A LOCK": {
        level: 2,
        members: ["CYLINDER", "PIN", "SPRING", "TUMBLER"],
      },
      "HOMOPHONES OF UNITS OF MEASURE": {
        level: 3,
        members: ["CARROT", "HURTS", "JEWEL", "OM"],
      },
    },
    startingBoard: [
      ["SPRING", "LOVE", "PIN", "WELL"],
      ["FANCY", "JEWEL", "LIKE", "CARROT"],
      ["CYLINDER", "HURTS", "LITERALLY", "RELISH"],
      ["UM", "OM", "SAVOR", "TUMBLER"],
    ],
  },
  {
    id: "329",
    name: "Connections #329",
    createdAt: "2024-05-05T00:00:00.000Z",
    board: {
      "SOMETHING GAINED FROM HARD WORK": {
        level: 0,
        members: ["BENEFIT", "FRUIT", "RETURN", "REWARD"],
      },
      "KINDS OF BAGELS": {
        level: 1,
        members: ["EGG", "EVERYTHING", "PLAIN", "POPPY"],
      },
      "CONTRIBUTE TO A MOVIE": {
        level: 2,
        members: ["ACT", "DIRECT", "PRODUCE", "WRITE"],
      },
      "STARTS OF MONSTERS": {
        level: 3,
        members: ["FRANK", "MUM", "VAMP", "WERE"],
      },
    },
    startingBoard: [
      ["FRANK", "FRUIT", "EGG", "DIRECT"],
      ["PLAIN", "PRODUCE", "WRITE", "MUM"],
      ["RETURN", "ACT", "REWARD", "EVERYTHING"],
      ["VAMP", "POPPY", "WERE", "BENEFIT"],
    ],
  },
  {
    id: "330",
    name: "Connections #330",
    createdAt: "2024-05-06T00:00:00.000Z",
    board: {
      CONNECT: { level: 0, members: ["COUPLE", "JOIN", "LINK", "TIE"] },
      NUISANCE: { level: 1, members: ["BOTHER", "HANDFUL", "PAIN", "PEST"] },
      "QUANTITY WORDS": {
        level: 2,
        members: ["FEW", "MANY", "SEVERAL", "SOME"],
      },
      "TAROT CARDS, WITH “THE”": {
        level: 3,
        members: ["FOOL", "LOVERS", "MAGICIAN", "TOWER"],
      },
    },
    startingBoard: [
      ["SOME", "LOVERS", "FOOL", "MANY"],
      ["COUPLE", "JOIN", "MAGICIAN", "HANDFUL"],
      ["TOWER", "FEW", "BOTHER", "TIE"],
      ["PAIN", "LINK", "SEVERAL", "PEST"],
    ],
  },
  {
    id: "331",
    name: "Connections #331",
    createdAt: "2024-05-07T00:00:00.000Z",
    board: {
      "DELI BREAD OPTIONS": {
        level: 0,
        members: ["BUN", "HERO", "ROLL", "WRAP"],
      },
      "SLANG FOR MOUTH": {
        level: 1,
        members: ["CHOPS", "KISSER", "TRAP", "YAP"],
      },
      "KEEP RHYTHM WITH MUSIC": {
        level: 2,
        members: ["BOB", "CLAP", "SNAP", "TAP"],
      },
      "ROUND OF ___": {
        level: 3,
        members: ["APPLAUSE", "DRINKS", "FUNDING", "GOLF"],
      },
    },
    startingBoard: [
      ["SNAP", "WRAP", "TRAP", "CLAP"],
      ["BOB", "BUN", "YAP", "TAP"],
      ["APPLAUSE", "GOLF", "DRINKS", "CHOPS"],
      ["HERO", "KISSER", "FUNDING", "ROLL"],
    ],
  },
  {
    id: "332",
    name: "Connections #332",
    createdAt: "2024-05-08T00:00:00.000Z",
    board: {
      "SHADES OF RED": {
        level: 0,
        members: ["BRICK", "CHERRY", "ROSE", "RUBY"],
      },
      "LITTLE BIT OF A BEVERAGE": {
        level: 1,
        members: ["DROP", "SPLASH", "SPOT", "SPRINKLE"],
      },
      CHOICEST: { level: 2, members: ["BEST", "CREAM", "PICK", "TOP"] },
      "___ BATH": { level: 3, members: ["BIRD", "BUBBLE", "MUD", "SPONGE"] },
    },
    startingBoard: [
      ["SPRINKLE", "SPONGE", "BIRD", "ROSE"],
      ["PICK", "CHERRY", "DROP", "CREAM"],
      ["MUD", "BUBBLE", "TOP", "SPOT"],
      ["RUBY", "BEST", "SPLASH", "BRICK"],
    ],
  },
  {
    id: "333",
    name: "Connections #333",
    createdAt: "2024-05-09T00:00:00.000Z",
    board: {
      "CONTAINER CLOSURES": {
        level: 0,
        members: ["CAP", "CORK", "LID", "TAB"],
      },
      DURATION: { level: 1, members: ["PERIOD", "SPELL", "STRETCH", "TIME"] },
      REGULATE: { level: 2, members: ["CHECK", "CONTAIN", "CURB", "LIMIT"] },
      "TRADEMARKS OF A PLATYPUS": {
        level: 3,
        members: ["BILL", "EGG", "FUR", "VENOM"],
      },
    },
    startingBoard: [
      ["SPELL", "CHECK", "EGG", "BILL"],
      ["PERIOD", "TAB", "TIME", "LIMIT"],
      ["FUR", "CAP", "CONTAIN", "VENOM"],
      ["CORK", "CURB", "STRETCH", "LID"],
    ],
  },
  {
    id: "334",
    name: "Connections #334",
    createdAt: "2024-05-10T00:00:00.000Z",
    board: {
      CHUTZPAH: { level: 0, members: ["BRASS", "CHEEK", "GALL", "NERVE"] },
      "ACCESSORIES FOR DOG WALKING": {
        level: 1,
        members: ["COLLAR", "HALTER", "HARNESS", "LEAD"],
      },
      "THINGS THAT SPIN": {
        level: 2,
        members: ["CAROUSEL", "GLOBE", "RECORD", "TOP"],
      },
      "LEAD SINGERS OF ’70S ROCK BANDS": {
        level: 3,
        members: ["FERRY", "MERCURY", "NICKS", "PLANT"],
      },
    },
    startingBoard: [
      ["GLOBE", "MERCURY", "TOP", "RECORD"],
      ["LEAD", "FERRY", "HARNESS", "BRASS"],
      ["CAROUSEL", "CHEEK", "PLANT", "HALTER"],
      ["NERVE", "NICKS", "COLLAR", "GALL"],
    ],
  },
  {
    id: "335",
    name: "Connections #335",
    createdAt: "2024-05-11T00:00:00.000Z",
    board: {
      "ONE WITH TOP BILLING": {
        level: 0,
        members: ["HEADLINER", "LEAD", "PRINCIPAL", "STAR"],
      },
      "VAMPIRE VULNERABILITIES": {
        level: 1,
        members: ["CROSS", "GARLIC", "SILVER", "SUN"],
      },
      "SATIRICAL PUBLICATIONS, FAMILIARLY": {
        level: 2,
        members: ["CRACKED", "LAMPOON", "MAD", "ONION"],
      },
      "CLUB ___": { level: 3, members: ["MED", "MUSIC", "SANDWICH", "SODA"] },
    },
    startingBoard: [
      ["SILVER", "MUSIC", "STAR", "CROSS"],
      ["MAD", "MED", "SUN", "LEAD"],
      ["GARLIC", "SANDWICH", "ONION", "SODA"],
      ["LAMPOON", "PRINCIPAL", "CRACKED", "HEADLINER"],
    ],
  },
  {
    id: "336",
    name: "Connections #336",
    createdAt: "2024-05-12T00:00:00.000Z",
    board: {
      "PLAYFULLY POKE FUN AT": {
        level: 0,
        members: ["KID", "NEEDLE", "RIB", "TEASE"],
      },
      "CUTS OF BEEF": {
        level: 1,
        members: ["CHUCK", "FLANK", "LOIN", "ROUND"],
      },
      ACRONYMS: { level: 2, members: ["MIA", "OMG", "PIN", "RAM"] },
      "COCKTAILS MINUS PLACE NAMES": {
        level: 3,
        members: ["LIBRE", "MAMA", "MULE", "SLING"],
      },
    },
    startingBoard: [
      ["MAMA", "MIA", "OMG", "KID"],
      ["MULE", "PIN", "ROUND", "SLING"],
      ["NEEDLE", "CHUCK", "RAM", "RIB"],
      ["FLANK", "TEASE", "LIBRE", "LOIN"],
    ],
  },
  {
    id: "337",
    name: "Connections #337",
    createdAt: "2024-05-13T00:00:00.000Z",
    board: {
      "FASHION DESIGNER'S OUTPUT": {
        level: 0,
        members: ["BRAND", "COLLECTION", "LABEL", "LINE"],
      },
      "PLAYGROUND VERBS": {
        level: 1,
        members: ["DODGE", "HIDE", "HOP", "TAG"],
      },
      "LOONEY TUNES FIGURES": {
        level: 2,
        members: ["BUNNY", "DUCK", "MARTIAN", "PIG"],
      },
      "HOMOPHONES OF MUSICALS": {
        level: 3,
        members: ["GREECE", "HARE", "KATZ", "MAIM"],
      },
    },
    startingBoard: [
      ["TAG", "LINE", "BUNNY", "HOP"],
      ["GREECE", "LABEL", "DODGE", "DUCK"],
      ["HIDE", "PIG", "HARE", "COLLECTION"],
      ["BRAND", "KATZ", "MARTIAN", "MAIM"],
    ],
  },
  {
    id: "338",
    name: "Connections #338",
    createdAt: "2024-05-14T00:00:00.000Z",
    board: {
      "EARLY ITERATION": {
        level: 0,
        members: ["DRAFT", "OUTLINE", "PLAN", "SKETCH"],
      },
      "ENJOY A MEAL": { level: 1, members: ["DINE", "FEAST", "FEED", "SUP"] },
      "SPANISH PRONOUNS": { level: 2, members: ["ELLA", "ME", "SUS", "YO"] },
      "SLIM ___": { level: 3, members: ["FIT", "JIM", "PICKINGS", "SHADY"] },
    },
    startingBoard: [
      ["YO", "JIM", "SKETCH", "SUP"],
      ["SHADY", "PLAN", "FEAST", "SUS"],
      ["FIT", "ME", "DRAFT", "FEED"],
      ["ELLA", "OUTLINE", "DINE", "PICKINGS"],
    ],
  },
  {
    id: "339",
    name: "Connections #339",
    createdAt: "2024-05-15T00:00:00.000Z",
    board: {
      "BIT OF LEGISLATION": {
        level: 0,
        members: ["ACT", "BILL", "MEASURE", "RESOLUTION"],
      },
      GRASSLAND: {
        level: 1,
        members: ["MEADOW", "PLAIN", "PRAIRIE", "SAVANNA"],
      },
      FORTHRIGHT: {
        level: 2,
        members: ["DIRECT", "FRANK", "OPEN", "STRAIGHT"],
      },
      "CAR COMPANIES MINUS LETTER": {
        level: 3,
        members: ["AURA", "BUCK", "DOGE", "HODA"],
      },
    },
    startingBoard: [
      ["OPEN", "AURA", "HODA", "SAVANNA"],
      ["PLAIN", "MEASURE", "ACT", "DIRECT"],
      ["DOGE", "FRANK", "BUCK", "BILL"],
      ["PRAIRIE", "RESOLUTION", "STRAIGHT", "MEADOW"],
    ],
  },
  {
    id: "340",
    name: "Connections #340",
    createdAt: "2024-05-16T00:00:00.000Z",
    board: {
      PHOTO: { level: 0, members: ["PIC", "SHOT", "SNAP", "STILL"] },
      "ASSURE, AS A VICTORY": {
        level: 1,
        members: ["CINCH", "ICE", "LOCK", "SECURE"],
      },
      "MOVE IN AN EFFORTLESS WAY": {
        level: 2,
        members: ["BREEZE", "COAST", "GLIDE", "SAIL"],
      },
      "___ BLANKET": {
        level: 3,
        members: ["PICNIC", "SECURITY", "THROW", "WET"],
      },
    },
    startingBoard: [
      ["ICE", "COAST", "STILL", "WET"],
      ["SECURITY", "LOCK", "BREEZE", "SHOT"],
      ["SECURE", "PICNIC", "THROW", "SAIL"],
      ["SNAP", "GLIDE", "CINCH", "PIC"],
    ],
  },
  {
    id: "341",
    name: "Connections #341",
    createdAt: "2024-05-17T00:00:00.000Z",
    board: {
      CORRUPT: { level: 0, members: ["BASE", "DIRTY", "LOW", "VILE"] },
      "REACH OUT TO": {
        level: 1,
        members: ["CONTACT", "MESSAGE", "PING", "TEXT"],
      },
      "CLASSIC STILL LIFE COMPONENTS": {
        level: 2,
        members: ["FRUIT", "PITCHER", "SKULL", "TABLECLOTH"],
      },
      "BEER ___": { level: 3, members: ["BATTER", "CAN", "GARDEN", "PONG"] },
    },
    startingBoard: [
      ["PING", "PONG", "DIRTY", "TEXT"],
      ["GARDEN", "FRUIT", "BATTER", "CAN"],
      ["BASE", "CONTACT", "PITCHER", "LOW"],
      ["TABLECLOTH", "VILE", "SKULL", "MESSAGE"],
    ],
  },
  {
    id: "342",
    name: "Connections #342",
    createdAt: "2024-05-18T00:00:00.000Z",
    board: {
      "ANIMALS WHOSE NAMES ARE TWO ANIMALS": {
        level: 0,
        members: ["BULLDOG", "CATFISH", "HORSEFLY", "TURTLEDOVE"],
      },
      "SHARP TURNS": {
        level: 1,
        members: ["DOGLEG", "HAIRPIN", "SWITCHBACK", "ZAG"],
      },
      "CLASSIC PARTY GAMES": {
        level: 2,
        members: ["CATEGORIES", "CHARADES", "FISHBOWL", "WEREWOLF"],
      },
      "THINGS WITH SPRING/S": {
        level: 3,
        members: ["CLOCK", "MATTRESS", "MOUSETRAP", "TRAMPOLINE"],
      },
    },
    startingBoard: [
      ["CATFISH", "HAIRPIN", "FISHBOWL", "TRAMPOLINE"],
      ["MOUSETRAP", "WEREWOLF", "BULLDOG", "SWITCHBACK"],
      ["DOGLEG", "MATTRESS", "HORSEFLY", "CATEGORIES"],
      ["TURTLEDOVE", "CHARADES", "CLOCK", "ZAG"],
    ],
  },
  {
    id: "343",
    name: "Connections #343",
    createdAt: "2024-05-19T00:00:00.000Z",
    board: {
      AFFLUENT: { level: 0, members: ["FLUSH", "LOADED", "RICH", "WEALTHY"] },
      "CUT INTO PIECES": {
        level: 1,
        members: ["CHOP", "CUBE", "DICE", "MINCE"],
      },
      "OLD-FASHIONED": {
        level: 2,
        members: ["SQUARE", "STRAIGHT", "STUFFY", "TRADITIONAL"],
      },
      "FRUIT HOMOPHONES": {
        level: 3,
        members: ["BURY", "CURRENT", "LEACHY", "PAIR"],
      },
    },
    startingBoard: [
      ["SQUARE", "PAIR", "LOADED", "DICE"],
      ["FLUSH", "BURY", "CUBE", "CURRENT"],
      ["STRAIGHT", "LEACHY", "STUFFY", "CHOP"],
      ["RICH", "MINCE", "TRADITIONAL", "WEALTHY"],
    ],
  },
  {
    id: "344",
    name: "Connections #344",
    createdAt: "2024-05-20T00:00:00.000Z",
    board: {
      "SORCERER’S OUTPUT": {
        level: 0,
        members: ["CHARM", "HEX", "MAGIC", "SPELL"],
      },
      "ONE BEING MANIPULATED": {
        level: 1,
        members: ["INSTRUMENT", "PAWN", "PUPPET", "TOOL"],
      },
      "CLASSIC SUPERHERO WEAR": {
        level: 2,
        members: ["CAPE", "MASK", "TIGHTS", "UNDERWEAR"],
      },
      "ACTION MOVIE DIRECTORS": {
        level: 3,
        members: ["BAY", "CARPENTER", "SCOTT", "WOO"],
      },
    },
    startingBoard: [
      ["CARPENTER", "PUPPET", "MAGIC", "UNDERWEAR"],
      ["TOOL", "WOO", "CAPE", "BAY"],
      ["CHARM", "PAWN", "MASK", "INSTRUMENT"],
      ["TIGHTS", "SPELL", "SCOTT", "HEX"],
    ],
  },
  {
    id: "345",
    name: "Connections #345",
    createdAt: "2024-05-21T00:00:00.000Z",
    board: {
      SMIDGEN: { level: 0, members: ["BIT", "DASH", "PINCH", "TOUCH"] },
      BARGAIN: { level: 1, members: ["BUY", "DEAL", "STEAL", "VALUE"] },
      "BILLIARDS EQUIPMENT": {
        level: 2,
        members: ["BALL", "CHALK", "CUE", "RACK"],
      },
      "___BOOK (THAT’S NOT A BOOK)": {
        level: 3,
        members: ["FACE", "MAC", "MATCH", "POCKET"],
      },
    },
    startingBoard: [
      ["PINCH", "CHALK", "MATCH", "DEAL"],
      ["RACK", "TOUCH", "BUY", "STEAL"],
      ["FACE", "VALUE", "POCKET", "BALL"],
      ["DASH", "CUE", "MAC", "BIT"],
    ],
  },
  {
    id: "346",
    name: "Connections #346",
    createdAt: "2024-05-22T00:00:00.000Z",
    board: {
      "BODY PARTS IN “HEAD, SHOULDERS, KNEES AND TOES”": {
        level: 0,
        members: ["HEAD", "KNEES", "SHOULDERS", "TOES"],
      },
      "CAR, INFORMALLY": {
        level: 1,
        members: ["AUTO", "RIDE", "WHEELS", "WHIP"],
      },
      "REMOVES THE COVERING OF": {
        level: 2,
        members: ["PARES", "PEELS", "SHELLS", "SHUCKS"],
      },
      "“BUZZY” THINGS": {
        level: 3,
        members: ["BEES", "CAFFEINE", "GOSSIP", "INTERCOMS"],
      },
    },
    startingBoard: [
      ["WHEELS", "PEELS", "BEES", "KNEES"],
      ["SHELLS", "GOSSIP", "SHOULDERS", "RIDE"],
      ["HEAD", "WHIP", "SHUCKS", "CAFFEINE"],
      ["AUTO", "INTERCOMS", "TOES", "PARES"],
    ],
  },
  {
    id: "347",
    name: "Connections #347",
    createdAt: "2024-05-23T00:00:00.000Z",
    board: {
      "TAKE ADVANTAGE OF": {
        level: 0,
        members: ["EXPLOIT", "LEVERAGE", "MILK", "USE"],
      },
      "FINISHED, AS TIME": {
        level: 1,
        members: ["DONE", "OVER", "THROUGH", "UP"],
      },
      "NEWSPAPER DESKS": {
        level: 2,
        members: ["CITY", "COPY", "CULTURE", "SPORTS"],
      },
      "WORDS BEGINNING WITH GREETINGS": {
        level: 3,
        members: ["HEYDAY", "HIJINKS", "SUPPER", "YOGURT"],
      },
    },
    startingBoard: [
      ["CULTURE", "HEYDAY", "SPORTS", "HIJINKS"],
      ["USE", "UP", "YOGURT", "MILK"],
      ["COPY", "EXPLOIT", "OVER", "SUPPER"],
      ["LEVERAGE", "DONE", "THROUGH", "CITY"],
    ],
  },
  {
    id: "348",
    name: "Connections #348",
    createdAt: "2024-05-24T00:00:00.000Z",
    board: {
      "CONDUITS FOR WATER REMOVAL": {
        level: 0,
        members: ["DRAIN", "DUCT", "PIPE", "SEWER"],
      },
      "FOOD PRODUCTS ASSOCIATED WITH SENTIMENTALITY": {
        level: 1,
        members: ["CHEESE", "CORN", "SAP", "SCHMALTZ"],
      },
      "THINGS TO CRACK": {
        level: 2,
        members: ["EGG", "KNUCKLES", "SMILE", "WINDOW"],
      },
      "___ CHANGE": { level: 3, members: ["CHUMP", "CLIMATE", "LOOSE", "SEA"] },
    },
    startingBoard: [
      ["SEA", "SMILE", "EGG", "CORN"],
      ["CHEESE", "CHUMP", "PIPE", "SAP"],
      ["DRAIN", "KNUCKLES", "LOOSE", "DUCT"],
      ["SCHMALTZ", "CLIMATE", "SEWER", "WINDOW"],
    ],
  },
  {
    id: "349",
    name: "Connections #349",
    createdAt: "2024-05-25T00:00:00.000Z",
    board: {
      "ADVERTISING FORMAT": {
        level: 0,
        members: ["BANNER", "BILLBOARD", "POSTER", "SIGN"],
      },
      INAUGURAL: {
        level: 1,
        members: ["FIRST", "INITIAL", "MAIDEN", "PREMIER"],
      },
      "ADVOCATE FOR": {
        level: 2,
        members: ["BACK", "CHAMPION", "ENDORSE", "SUPPORT"],
      },
      "PRONOUN PLUS “E”": {
        level: 3,
        members: ["HERE", "THEME", "USE", "WEE"],
      },
    },
    startingBoard: [
      ["INITIAL", "HERE", "WEE", "THEME"],
      ["ENDORSE", "MAIDEN", "PREMIER", "CHAMPION"],
      ["SIGN", "SUPPORT", "BANNER", "USE"],
      ["FIRST", "POSTER", "BACK", "BILLBOARD"],
    ],
  },
  {
    id: "350",
    name: "Connections #350",
    createdAt: "2024-05-26T00:00:00.000Z",
    board: {
      "FOUND ON A STOVE TOP": {
        level: 0,
        members: ["GRIDDLE", "KETTLE", "PAN", "POT"],
      },
      "ORNAMENTAL BORDER": {
        level: 1,
        members: ["FRILL", "FRINGE", "RUFFLE", "TRIM"],
      },
      "DEPOSIT, WITH “DOWN”": {
        level: 2,
        members: ["LAY", "PLACE", "PUT", "SET"],
      },
      "WORDS THAT SOUNDS LIKE PLURAL LETTERS": {
        level: 3,
        members: ["GEEZ", "SEIZE", "TEASE", "WISE"],
      },
    },
    startingBoard: [
      ["RUFFLE", "PAN", "TEASE", "WISE"],
      ["LAY", "TRIM", "KETTLE", "SET"],
      ["FRINGE", "PLACE", "GEEZ", "POT"],
      ["PUT", "SEIZE", "GRIDDLE", "FRILL"],
    ],
  },
  {
    id: "351",
    name: "Connections #351",
    createdAt: "2024-05-27T00:00:00.000Z",
    board: {
      "AGENCY IN DECISIONMAKING": {
        level: 0,
        members: ["CHOICE", "SAY", "VOICE", "VOTE"],
      },
      "DOG COMMANDS": { level: 1, members: ["DOWN", "HEEL", "SHAKE", "SPEAK"] },
      "KINDS OF NOTES": {
        level: 2,
        members: ["FLAT", "NATURAL", "QUARTER", "WHOLE"],
      },
      "___ IRON": { level: 3, members: ["PUMP", "STEAM", "TIRE", "WAFFLE"] },
    },
    startingBoard: [
      ["FLAT", "TIRE", "DOWN", "VOTE"],
      ["PUMP", "SHAKE", "QUARTER", "HEEL"],
      ["NATURAL", "CHOICE", "SAY", "SPEAK"],
      ["WAFFLE", "STEAM", "WHOLE", "VOICE"],
    ],
  },
  {
    id: "352",
    name: "Connections #352",
    createdAt: "2024-05-28T00:00:00.000Z",
    board: {
      AMENABLE: {
        level: 0,
        members: ["EASY", "FLEXIBLE", "OPEN", "RECEPTIVE"],
      },
      ANAGRAMS: { level: 1, members: ["EVIL", "LIVE", "VEIL", "VILE"] },
      "SPELLING BEE RANKS": {
        level: 2,
        members: ["AMAZING", "BEGINNER", "GENIUS", "SOLID"],
      },
      "ADJECTIVES FOR A CANDLE": {
        level: 3,
        members: ["LIT", "SCENTED", "WAXY", "WICKED"],
      },
    },
    startingBoard: [
      ["WAXY", "SOLID", "EVIL", "GENIUS"],
      ["VILE", "FLEXIBLE", "LIT", "WICKED"],
      ["EASY", "BEGINNER", "OPEN", "LIVE"],
      ["AMAZING", "SCENTED", "VEIL", "RECEPTIVE"],
    ],
  },
  {
    id: "353",
    name: "Connections #353",
    createdAt: "2024-05-29T00:00:00.000Z",
    board: {
      FOOD: { level: 0, members: ["CHOW", "EATS", "FARE", "GRUB"] },
      PILOT: { level: 1, members: ["DIRECT", "GUIDE", "LEAD", "STEER"] },
      INTIMIDATE: { level: 2, members: ["BULLY", "COW", "DAUNT", "RATTLE"] },
      "___ MARKET": { level: 3, members: ["BULL", "FLEA", "MEAT", "STOCK"] },
    },
    startingBoard: [
      ["BULLY", "BULL", "EATS", "MEAT"],
      ["STOCK", "STEER", "RATTLE", "GUIDE"],
      ["FARE", "FLEA", "COW", "CHOW"],
      ["LEAD", "GRUB", "DIRECT", "DAUNT"],
    ],
  },
  {
    id: "354",
    name: "Connections #354",
    createdAt: "2024-05-30T00:00:00.000Z",
    board: {
      PLUNDER: { level: 0, members: ["LOOT", "RAID", "ROB", "SACK"] },
      INFLUENCE: { level: 1, members: ["CLOUT", "PULL", "SWAY", "WEIGHT"] },
      HAIRSTYLES: { level: 2, members: ["BOB", "CROP", "FADE", "SHAG"] },
      "___ PIN": { level: 3, members: ["BOBBY", "HAIR", "PUSH", "SAFETY"] },
    },
    startingBoard: [
      ["SAFETY", "SWAY", "SACK", "BOB"],
      ["PUSH", "PULL", "WEIGHT", "ROB"],
      ["CROP", "LOOT", "FADE", "BOBBY"],
      ["CLOUT", "SHAG", "RAID", "HAIR"],
    ],
  },
  {
    id: "355",
    name: "Connections #355",
    createdAt: "2024-05-31T00:00:00.000Z",
    board: {
      CORPUS: { level: 0, members: ["BODY", "CANON", "OEUVRE", "WORKS"] },
      "MOUNT ___": {
        level: 1,
        members: ["FUJI", "HOOD", "OLYMPUS", "WHITNEY"],
      },
      "COMPONENTS OF AN LP": {
        level: 2,
        members: ["INSERT", "JACKET", "RECORD", "SLEEVE"],
      },
      "THINGS PEOPLE SHAKE": {
        level: 3,
        members: ["HANDS", "MARACA", "POLAROID", "SNOWGLOBE"],
      },
    },
    startingBoard: [
      ["BODY", "MARACA", "JACKET", "HOOD"],
      ["SLEEVE", "FUJI", "CANON", "HANDS"],
      ["INSERT", "POLAROID", "OLYMPUS", "WORKS"],
      ["WHITNEY", "SNOWGLOBE", "OEUVRE", "RECORD"],
    ],
  },
  {
    id: "356",
    name: "Connections #356",
    createdAt: "2024-06-01T00:00:00.000Z",
    board: {
      "“DON’T DELAY!”": {
        level: 0,
        members: ["HURRY", "NOW", "PRONTO", "STAT"],
      },
      "OCEAN PHENOMENA": {
        level: 1,
        members: ["CURRENT", "DRIFT", "TIDE", "WAVE"],
      },
      "DUMBBELL EXERCISES": {
        level: 2,
        members: ["CURL", "FLY", "PRESS", "ROW"],
      },
      "PHILOSOPHER HOMOPHONES": {
        level: 3,
        members: ["LOCK", "MARKS", "PANE", "RUSTLE"],
      },
    },
    startingBoard: [
      ["PRESS", "LOCK", "HURRY", "WAVE"],
      ["PANE", "FLY", "CURRENT", "CURL"],
      ["NOW", "ROW", "STAT", "MARKS"],
      ["DRIFT", "PRONTO", "RUSTLE", "TIDE"],
    ],
  },
  {
    id: "357",
    name: "Connections #357",
    createdAt: "2024-06-02T00:00:00.000Z",
    board: {
      CONFORMISTS: {
        level: 0,
        members: ["FOLLOWERS", "LEMMINGS", "PUPPETS", "SHEEP"],
      },
      "COMPANY OWNERSHIP OFFERS": {
        level: 1,
        members: ["EQUITY", "OPTIONS", "SHARES", "STOCKS"],
      },
      "U.S. CITIES": {
        level: 2,
        members: ["BILLINGS", "BUFFALO", "MOBILE", "PHOENIX"],
      },
      "WHAT “DIGS” MIGHT MEAN": {
        level: 3,
        members: ["APARTMENT", "INSULTS", "LIKES", "SHOVELS"],
      },
    },
    startingBoard: [
      ["MOBILE", "FOLLOWERS", "SHOVELS", "BUFFALO"],
      ["LIKES", "INSULTS", "SHARES", "SHEEP"],
      ["APARTMENT", "BILLINGS", "PUPPETS", "OPTIONS"],
      ["EQUITY", "PHOENIX", "STOCKS", "LEMMINGS"],
    ],
  },
  {
    id: "358",
    name: "Connections #358",
    createdAt: "2024-06-03T00:00:00.000Z",
    board: {
      "REMOVE, AS BODY HAIR": {
        level: 0,
        members: ["LASER", "PLUCK", "THREAD", "WAX"],
      },
      "TWIST AROUND": { level: 1, members: ["COIL", "SPOOL", "WIND", "WRAP"] },
      "THINGS MADE OF CELLS": {
        level: 2,
        members: ["HONEYCOMB", "ORGANISM", "SOLAR PANEL", "SPREADSHEET"],
      },
      "B-___": { level: 3, members: ["BALL", "MOVIE", "SCHOOL", "VITAMIN"] },
    },
    startingBoard: [
      ["SCHOOL", "SPOOL", "WAX", "SOLAR PANEL"],
      ["MOVIE", "THREAD", "HONEYCOMB", "WIND"],
      ["LASER", "BALL", "WRAP", "VITAMIN"],
      ["COIL", "SPREADSHEET", "ORGANISM", "PLUCK"],
    ],
  },
  {
    id: "359",
    name: "Connections #359",
    createdAt: "2024-06-04T00:00:00.000Z",
    board: {
      "TAKE HOME, AS INCOME": {
        level: 0,
        members: ["CLEAR", "EARN", "MAKE", "NET"],
      },
      "PARTS OF A WIZARD COSTUME": {
        level: 1,
        members: ["BEARD", "HAT", "ROBE", "STAFF"],
      },
      "FOUND ON A SHIP": {
        level: 2,
        members: ["BRIDGE", "DECK", "HATCH", "KEEL"],
      },
      "C-___": { level: 3, members: ["CLEF", "SECTION", "SPAN", "SUITE"] },
    },
    startingBoard: [
      ["STAFF", "HAT", "MAKE", "BRIDGE"],
      ["HATCH", "NET", "ROBE", "SPAN"],
      ["CLEAR", "KEEL", "CLEF", "SECTION"],
      ["SUITE", "BEARD", "DECK", "EARN"],
    ],
  },
  {
    id: "360",
    name: "Connections #360",
    createdAt: "2024-06-05T00:00:00.000Z",
    board: {
      "“AWESOME!”": { level: 0, members: ["COOL", "NICE", "SICK", "SWEET"] },
      VARIETY: { level: 1, members: ["KIND", "SORT", "STYLE", "TYPE"] },
      GIST: { level: 2, members: ["DRIFT", "IDEA", "MESSAGE", "POINT"] },
      "FRIED APPETIZER, INFORMALLY": {
        level: 3,
        members: ["RING", "STICK", "TENDER", "WING"],
      },
    },
    startingBoard: [
      ["NICE", "RING", "STYLE", "POINT"],
      ["KIND", "STICK", "TENDER", "MESSAGE"],
      ["SWEET", "TYPE", "DRIFT", "SICK"],
      ["SORT", "WING", "COOL", "IDEA"],
    ],
  },
  {
    id: "361",
    name: "Connections #361",
    createdAt: "2024-06-06T00:00:00.000Z",
    board: {
      "MOVE TO ACTION": {
        level: 0,
        members: ["DRIVE", "PROMPT", "PROPEL", "PUSH"],
      },
      "UNO CARDS": { level: 1, members: ["DRAW", "REVERSE", "SKIP", "WILD"] },
      "HAIL SIZE COMPARISONS": {
        level: 2,
        members: ["BASEBALL", "GRAPEFRUIT", "MARBLE", "PEA"],
      },
      "PLACES WITH BENCHES": {
        level: 3,
        members: ["COURTROOM", "DUGOUT", "GYM", "PARK"],
      },
    },
    startingBoard: [
      ["MARBLE", "BASEBALL", "DRIVE", "WILD"],
      ["REVERSE", "PUSH", "GYM", "PARK"],
      ["PROMPT", "PEA", "DRAW", "DUGOUT"],
      ["SKIP", "PROPEL", "GRAPEFRUIT", "COURTROOM"],
    ],
  },
  {
    id: "362",
    name: "Connections #362",
    createdAt: "2024-06-07T00:00:00.000Z",
    board: {
      "DREAM UP": {
        level: 0,
        members: ["CONCEIVE", "ENVISION", "IMAGINE", "PICTURE"],
      },
      "THIN COVERING": { level: 1, members: ["COAT", "FILM", "LAYER", "SKIN"] },
      "REMOVE, AS CRUMBS": {
        level: 2,
        members: ["BRUSH", "FLICK", "SWEEP", "WIPE"],
      },
      "VERBS FOR A SOFTWARE ENGINEER": {
        level: 3,
        members: ["CODE", "DEVELOP", "HACK", "PROGRAM"],
      },
    },
    startingBoard: [
      ["COAT", "BRUSH", "DEVELOP", "FILM"],
      ["SWEEP", "PICTURE", "SKIN", "FLICK"],
      ["IMAGINE", "LAYER", "PROGRAM", "CODE"],
      ["WIPE", "CONCEIVE", "HACK", "ENVISION"],
    ],
  },
  {
    id: "363",
    name: "Connections #363",
    createdAt: "2024-06-08T00:00:00.000Z",
    board: {
      "GRAB ONE’S ATTENTION": {
        level: 0,
        members: ["ABSORB", "ENGROSS", "HOLD", "RIVET"],
      },
      "DOCUMENT WITH VIDEO": {
        level: 1,
        members: ["FILM", "RECORD", "SHOOT", "TAPE"],
      },
      ANAGRAMS: { level: 2, members: ["PASTEL", "PETALS", "PLEATS", "STAPLE"] },
      "PRETTY ___": { level: 3, members: ["GOOD", "PENNY", "PLEASE", "WOMAN"] },
    },
    startingBoard: [
      ["PLEATS", "PLEASE", "HOLD", "RECORD"],
      ["WOMAN", "FILM", "GOOD", "PASTEL"],
      ["PENNY", "STAPLE", "TAPE", "RIVET"],
      ["ABSORB", "PETALS", "ENGROSS", "SHOOT"],
    ],
  },
  {
    id: "364",
    name: "Connections #364",
    createdAt: "2024-06-09T00:00:00.000Z",
    board: {
      "FEELING SOME TYPE OF WAY": {
        level: 0,
        members: ["BITTER", "SALTY", "SORE", "UPSET"],
      },
      "THROW HERE AND THERE": {
        level: 1,
        members: ["PEPPER", "SCATTER", "SPRINKLE", "STREW"],
      },
      "THINGS WITH LAYERS": {
        level: 2,
        members: ["CAKE", "EARTH", "ONION", "PLYWOOD"],
      },
      "___ POTATO": { level: 3, members: ["BAKED", "COUCH", "HOT", "SWEET"] },
    },
    startingBoard: [
      ["SALTY", "PEPPER", "BAKED", "CAKE"],
      ["SPRINKLE", "ONION", "BITTER", "EARTH"],
      ["SWEET", "SCATTER", "COUCH", "UPSET"],
      ["HOT", "PLYWOOD", "SORE", "STREW"],
    ],
  },
  {
    id: "365",
    name: "Connections #365",
    createdAt: "2024-06-10T00:00:00.000Z",
    board: {
      CORE: { level: 0, members: ["CRUX", "ESSENCE", "HEART", "SUBSTANCE"] },
      COMPLICATED: {
        level: 1,
        members: ["BAROQUE", "COMPLEX", "ELABORATE", "INVOLVED"],
      },
      "SYMBOLS USED IN MAKING LISTS": {
        level: 2,
        members: ["ARROW", "BULLET", "CHECKBOX", "HYPHEN"],
      },
      "WHAT “CROSS” MIGHT MEAN": {
        level: 3,
        members: ["ANGRY", "BETRAY", "CRUCIFIX", "HYBRID"],
      },
    },
    startingBoard: [
      ["ARROW", "CRUCIFIX", "HYPHEN", "HYBRID"],
      ["ANGRY", "COMPLEX", "SUBSTANCE", "CHECKBOX"],
      ["BAROQUE", "CRUX", "INVOLVED", "HEART"],
      ["ESSENCE", "ELABORATE", "BETRAY", "BULLET"],
    ],
  },
  {
    id: "366",
    name: "Connections #366",
    createdAt: "2024-06-11T00:00:00.000Z",
    board: {
      HOMOPHONES: { level: 0, members: ["BI", "BUY", "BY", "BYE"] },
      "MUSCLES, INFORMALLY": {
        level: 1,
        members: ["AB", "PEC", "QUAD", "TRI"],
      },
      "MUSIC GENRES": { level: 2, members: ["DUB", "EMO", "POP", "TRAP"] },
      "SETTINGS ON AN APPLIANCE KNOB": {
        level: 3,
        members: ["HI", "LO", "MED", "OFF"],
      },
    },
    startingBoard: [
      ["HI", "BYE", "TRI", "BI"],
      ["TRAP", "AB", "POP", "OFF"],
      ["DUB", "MED", "BUY", "QUAD"],
      ["LO", "EMO", "PEC", "BY"],
    ],
  },
  {
    id: "367",
    name: "Connections #367",
    createdAt: "2024-06-12T00:00:00.000Z",
    board: {
      "PLACES IN NEW YORK CITY": {
        level: 0,
        members: ["CHINATOWN", "DUMBO", "MANHATTAN", "WALL STREET"],
      },
      "RHYMING TITLES": {
        level: 1,
        members: ["BE KIND REWIND", "E.T.", "FRIGHT NIGHT", "KILL BILL"],
      },
      "ENDING IN UNITS OF MEASUREMENT": {
        level: 2,
        members: [
          "HEDWIG AND THE ANGRY INCH",
          "MY LEFT FOOT",
          "THE GREEN MILE",
          "THE LONGEST YARD",
        ],
      },
      "STARTING WITH ANIMALS": {
        level: 3,
        members: ["BEETLEJUICE", "FOXY BROWN", "DOGMA", "OCTOPUSSY"],
      },
    },
    startingBoard: [
      ["DUMBO", "E.T.", "MY LEFT FOOT", "DOGMA"],
      ["THE GREEN MILE", "BEETLEJUICE", "WALL STREET", "KILL BILL"],
      ["CHINATOWN", "FRIGHT NIGHT", "FOXY BROWN", "HEDWIG AND THE ANGRY INCH"],
      ["OCTOPUSSY", "THE LONGEST YARD", "BE KIND REWIND", "MANHATTAN"],
    ],
  },
  {
    id: "368",
    name: "Connections #368",
    createdAt: "2024-06-13T00:00:00.000Z",
    board: {
      ENJOY: { level: 0, members: ["APPRECIATE", "DIG", "FANCY", "LIKE"] },
      BLOCKBUSTER: {
        level: 1,
        members: ["HIT", "SENSATION", "SMASH", "SUCCESS"],
      },
      "CAMPAIGN SWAG": {
        level: 2,
        members: ["BUTTON", "HAT", "SHIRT", "STICKER"],
      },
      "WORDS AFTER “COPY”": {
        level: 3,
        members: ["CAT", "EDITOR", "PASTE", "THAT"],
      },
    },
    startingBoard: [
      ["SMASH", "THAT", "LIKE", "BUTTON"],
      ["FANCY", "CAT", "SHIRT", "SUCCESS"],
      ["EDITOR", "HAT", "HIT", "DIG"],
      ["APPRECIATE", "STICKER", "PASTE", "SENSATION"],
    ],
  },
  {
    id: "369",
    name: "Connections #369",
    createdAt: "2024-06-14T00:00:00.000Z",
    board: {
      "WRITING ASSIGNMENTS": {
        level: 0,
        members: ["ARTICLE", "ESSAY", "PAPER", "REPORT"],
      },
      "THINGS THAT ARE PINK": {
        level: 1,
        members: ["BUBBLE GUM", "CARNATION", "ERASER", "FLAMINGO"],
      },
      "NATO PHONETIC ALPHABET": {
        level: 2,
        members: ["FOXTROT", "HOTEL", "VICTOR", "YANKEE"],
      },
      "ASSOCIATED WITH #2": {
        level: 3,
        members: ["DEPUTY", "DEREK JETER", "PENCIL", "SILVER MEDAL"],
      },
    },
    startingBoard: [
      ["YANKEE", "PAPER", "DEPUTY", "FLAMINGO"],
      ["ERASER", "SILVER MEDAL", "BUBBLE GUM", "REPORT"],
      ["PENCIL", "VICTOR", "DEREK JETER", "HOTEL"],
      ["ESSAY", "FOXTROT", "CARNATION", "ARTICLE"],
    ],
  },
  {
    id: "370",
    name: "Connections #370",
    createdAt: "2024-06-15T00:00:00.000Z",
    board: {
      "BASKETBALL SHOTS": {
        level: 0,
        members: ["DUNK", "FLOATER", "LAYUP", "THREE"],
      },
      FISH: { level: 1, members: ["PERCH", "PIKE", "SKATE", "SOLE"] },
      "QUALITIES OF THICK HAIR": {
        level: 2,
        members: ["BODY", "BOUNCE", "LIFT", "VOLUME"],
      },
      "___ CHILD": {
        level: 3,
        members: ["FLOWER", "ONLY", "POSTER", "PROBLEM"],
      },
    },
    startingBoard: [
      ["SOLE", "FLOWER", "FLOATER", "BOUNCE"],
      ["THREE", "BODY", "PROBLEM", "POSTER"],
      ["LIFT", "DUNK", "ONLY", "SKATE"],
      ["PERCH", "VOLUME", "LAYUP", "PIKE"],
    ],
  },
  {
    id: "371",
    name: "Connections #371",
    createdAt: "2024-06-16T00:00:00.000Z",
    board: {
      "CURRENT SITUATION": {
        level: 0,
        members: ["CONDITION", "FORM", "SHAPE", "STATE"],
      },
      "REMOTE RURAL AREA": {
        level: 1,
        members: ["BUSH", "COUNTRY", "STICKS", "WOODS"],
      },
      "CLASSIC LAWN ORNAMENTS": {
        level: 2,
        members: ["FLAMINGO", "FOUNTAIN", "GNOME", "PINWHEEL"],
      },
      "___ TALE": { level: 3, members: ["FAIRY", "FISH", "FOLK", "TALL"] },
    },
    startingBoard: [
      ["FISH", "BUSH", "FLAMINGO", "SHAPE"],
      ["FOUNTAIN", "FOLK", "COUNTRY", "FAIRY"],
      ["GNOME", "STATE", "TALL", "STICKS"],
      ["FORM", "WOODS", "PINWHEEL", "CONDITION"],
    ],
  },
  {
    id: "372",
    name: "Connections #372",
    createdAt: "2024-06-17T00:00:00.000Z",
    board: {
      "DELIVER, AS A PACKAGE": {
        level: 0,
        members: ["MAIL", "POST", "SEND", "SHIP"],
      },
      "KINDS OF LIP MAKEUP": {
        level: 1,
        members: ["BALM", "GLOSS", "LINER", "STAIN"],
      },
      PREDICAMENT: { level: 2, members: ["CORNER", "FIX", "HOLE", "SPOT"] },
      "MEASURED IN DEGREES": {
        level: 3,
        members: ["ANGLE", "CRIME", "EDUCATION", "TEMPERATURE"],
      },
    },
    startingBoard: [
      ["FIX", "SHIP", "HOLE", "STAIN"],
      ["TEMPERATURE", "LINER", "ANGLE", "SPOT"],
      ["BALM", "EDUCATION", "SEND", "CRIME"],
      ["MAIL", "CORNER", "GLOSS", "POST"],
    ],
  },
  {
    id: "373",
    name: "Connections #373",
    createdAt: "2024-06-18T00:00:00.000Z",
    board: {
      "REMOTE CONTROL BUTTONS": {
        level: 0,
        members: ["CHANNEL", "MENU", "POWER", "VOLUME"],
      },
      "HIDE FROM VIEW": {
        level: 1,
        members: ["BLOCK", "COVER", "SCREEN", "SHIELD"],
      },
      "DRINK GARNISHES": {
        level: 2,
        members: ["CHERRY", "OLIVE", "SWORD", "UMBRELLA"],
      },
      "FIRST WORD IN BOND MOVIE TITLES": {
        level: 3,
        members: ["CASINO", "DIAMONDS", "QUANTUM", "TOMORROW"],
      },
    },
    startingBoard: [
      ["POWER", "CASINO", "UMBRELLA", "CHERRY"],
      ["DIAMONDS", "SWORD", "SHIELD", "TOMORROW"],
      ["OLIVE", "MENU", "QUANTUM", "SCREEN"],
      ["BLOCK", "VOLUME", "COVER", "CHANNEL"],
    ],
  },
  {
    id: "374",
    name: "Connections #374",
    createdAt: "2024-06-19T00:00:00.000Z",
    board: {
      "POSITIONS IN FAVOR": { level: 0, members: ["AYE", "FOR", "PRO", "YEA"] },
      "GO OUT WITH": { level: 1, members: ["COURT", "DATE", "SEE", "WOO"] },
      MULTITUDE: { level: 2, members: ["DROVE", "HOST", "PACK", "SEA"] },
      "THINGS READ IN DIVINATION": {
        level: 3,
        members: ["AURA", "PALM", "TAROT", "TEA"],
      },
    },
    startingBoard: [
      ["SEA", "AYE", "SEE", "TEA"],
      ["COURT", "PRO", "DROVE", "DATE"],
      ["PACK", "FOR", "PALM", "WOO"],
      ["TAROT", "HOST", "AURA", "YEA"],
    ],
  },
  {
    id: "375",
    name: "Connections #375",
    createdAt: "2024-06-20T00:00:00.000Z",
    board: {
      "BITS OF HARDWARE": {
        level: 0,
        members: ["NAIL", "NUT", "SCREW", "WASHER"],
      },
      "FISHING GEAR": { level: 1, members: ["FLY", "HOOK", "LINE", "SINKER"] },
      "HAIR SALON FIXTURES": {
        level: 2,
        members: ["CHAIR", "DRYER", "MIRROR", "SINK"],
      },
      "LIGHTNING ___": { level: 3, members: ["BOLT", "BUG", "ROD", "STRIKE"] },
    },
    startingBoard: [
      ["FLY", "NAIL", "SINK", "SINKER"],
      ["WASHER", "DRYER", "BUG", "SCREW"],
      ["MIRROR", "BOLT", "LINE", "CHAIR"],
      ["HOOK", "STRIKE", "NUT", "ROD"],
    ],
  },
  {
    id: "376",
    name: "Connections #376",
    createdAt: "2024-06-21T00:00:00.000Z",
    board: {
      "AMUSEMENT PARK RIDES": {
        level: 0,
        members: [
          "FERRIS WHEEL",
          "MERRY-GO-ROUND",
          "ROLLER COASTER",
          "TILT-A-WHIRL",
        ],
      },
      APPROVAL: {
        level: 1,
        members: ["CLEARANCE", "GO-AHEAD", "GREEN LIGHT", "THUMBS-UP"],
      },
      "TYPES OF COME-FROM-BEHIND STORIES": {
        level: 2,
        members: [
          "CINDERELLA",
          "DAVID-AND-GOLIATH",
          "RAGS-TO-RICHES",
          "UNDERDOG",
        ],
      },
      "BEGINNING WITH SYNONYMS FOR REAR END": {
        level: 3,
        members: [
          "BUMPER-TO-BUMPER",
          "BUTTERMILK",
          "RUMPELSTILTSKIN",
          "TAILGATE",
        ],
      },
    },
    startingBoard: [
      ["CINDERELLA", "TAILGATE", "GREEN LIGHT", "RUMPELSTILTSKIN"],
      ["FERRIS WHEEL", "BUMPER-TO-BUMPER", "DAVID-AND-GOLIATH", "THUMBS-UP"],
      ["BUTTERMILK", "RAGS-TO-RICHES", "MERRY-GO-ROUND", "CLEARANCE"],
      ["UNDERDOG", "TILT-A-WHIRL", "GO-AHEAD", "ROLLER COASTER"],
    ],
  },
  {
    id: "377",
    name: "Connections #377",
    createdAt: "2024-06-22T00:00:00.000Z",
    board: {
      "ONE THING AFTER ANOTHER": {
        level: 0,
        members: ["CHAIN", "TRAIN", "SERIES", "STRING"],
      },
      "KINDS OF GOLF CLUBS": {
        level: 1,
        members: ["DRIVER", "IRON", "WEDGE", "WOOD"],
      },
      "HORROR MOVIES, WITH “THE”": {
        level: 2,
        members: ["BIRDS", "FOG", "OMEN", "RING"],
      },
      "WORDS FOR SAUSAGE": {
        level: 3,
        members: ["BRAT", "DOG", "FRANK", "LINK"],
      },
    },
    startingBoard: [
      ["FRANK", "STRING", "WOOD", "RING"],
      ["DOG", "FOG", "TRAIN", "BIRDS"],
      ["CHAIN", "LINK", "IRON", "BRAT"],
      ["DRIVER", "OMEN", "SERIES", "WEDGE"],
    ],
  },
  {
    id: "378",
    name: "Connections #378",
    createdAt: "2024-06-23T00:00:00.000Z",
    board: {
      "“SETTLE DOWN!”": {
        level: 0,
        members: ["EASY", "ENOUGH", "RELAX", "QUIET"],
      },
      "MINOR AILMENTS": {
        level: 1,
        members: ["BUG", "CHILL", "COLD", "COUGH"],
      },
      "WHAT HUMPBACK WHALES DO": {
        level: 2,
        members: ["BREACH", "DIVE", "SING", "SPOUT"],
      },
      "___ CITY NICKNAMES": {
        level: 3,
        members: ["MAGIC", "MOTOR", "SIN", "WINDY"],
      },
    },
    startingBoard: [
      ["QUIET", "MAGIC", "COLD", "SIN"],
      ["BUG", "BREACH", "EASY", "ENOUGH"],
      ["SING", "WINDY", "DIVE", "MOTOR"],
      ["RELAX", "COUGH", "SPOUT", "CHILL"],
    ],
  },
  {
    id: "379",
    name: "Connections #379",
    createdAt: "2024-06-24T00:00:00.000Z",
    board: {
      "SORE TO THE TOUCH": {
        level: 0,
        members: ["DELICATE", "RAW", "SENSITIVE", "TENDER"],
      },
      "RESTAURANT COURSES": {
        level: 1,
        members: ["DESSERT", "MAIN", "SIDE", "STARTER"],
      },
      "ANIMAL HOMOPHONES": {
        level: 2,
        members: ["BARE", "DEAR", "MOUSSE", "NEW"],
      },
      "RED ___": { level: 3, members: ["CARPET", "DELICIOUS", "MEAT", "TAPE"] },
    },
    startingBoard: [
      ["BARE", "CARPET", "RAW", "MEAT"],
      ["NEW", "DELICATE", "DELICIOUS", "MOUSSE"],
      ["DEAR", "DESSERT", "SENSITIVE", "SIDE"],
      ["STARTER", "TAPE", "MAIN", "TENDER"],
    ],
  },
  {
    id: "380",
    name: "Connections #380",
    createdAt: "2024-06-25T00:00:00.000Z",
    board: {
      "DIVULGE, AS PRIVATE INFORMATION": {
        level: 0,
        members: ["DISH", "SPILL", "TALK", "TELL"],
      },
      DIVIDE: { level: 1, members: ["BRANCH", "FORK", "PART", "SPLIT"] },
      "SILENT “K”": {
        level: 2,
        members: ["DOORKNOB", "KNIFE", "TOPKNOT", "UNKNOWN"],
      },
      "KEY TO SUCCESS, SO TO SPEAK": {
        level: 3,
        members: ["FORMULA", "RECIPE", "SECRET", "TICKET"],
      },
    },
    startingBoard: [
      ["UNKNOWN", "FORMULA", "DOORKNOB", "KNIFE"],
      ["TALK", "FORK", "RECIPE", "DISH"],
      ["TOPKNOT", "PART", "TELL", "SECRET"],
      ["SPLIT", "TICKET", "BRANCH", "SPILL"],
    ],
  },
  {
    id: "381",
    name: "Connections #381",
    createdAt: "2024-06-26T00:00:00.000Z",
    board: {
      "ARMY RANKS": {
        level: 0,
        members: ["CAPTAIN", "GENERAL", "MAJOR", "PRIVATE"],
      },
      "PLACE TO PLUG SOMETHING IN": {
        level: 1,
        members: ["JACK", "OUTLET", "PORT", "SOCKET"],
      },
      "CONSUMER DESIRE, COLLECTIVELY": {
        level: 2,
        members: ["APPETITE", "AUDIENCE", "DEMAND", "MARKET"],
      },
      "___ AD": { level: 3, members: ["ATTACK", "PERSONAL", "POP-UP", "WANT"] },
    },
    startingBoard: [
      ["PERSONAL", "PORT", "MAJOR", "OUTLET"],
      ["PRIVATE", "DEMAND", "POP-UP", "MARKET"],
      ["AUDIENCE", "WANT", "CAPTAIN", "JACK"],
      ["GENERAL", "APPETITE", "SOCKET", "ATTACK"],
    ],
  },
  {
    id: "382",
    name: "Connections #382",
    createdAt: "2024-06-27T00:00:00.000Z",
    board: {
      PURSUIT: { level: 0, members: ["CHASE", "HUNT", "QUEST", "SEARCH"] },
      "ROMANTIC LETTER SIGN-OFFS": {
        level: 1,
        members: ["ALWAYS", "KISSES", "LOVE", "YOURS"],
      },
      "GROUP WITHIN A GROUP": {
        level: 2,
        members: ["CAMP", "PARTY", "SIDE", "WING"],
      },
      "GOLD ___": { level: 3, members: ["BOND", "LEAF", "MINE", "RUSH"] },
    },
    startingBoard: [
      ["BOND", "WING", "RUSH", "KISSES"],
      ["HUNT", "LEAF", "SEARCH", "PARTY"],
      ["ALWAYS", "CAMP", "YOURS", "MINE"],
      ["CHASE", "SIDE", "QUEST", "LOVE"],
    ],
  },
  {
    id: "383",
    name: "Connections #383",
    createdAt: "2024-06-28T00:00:00.000Z",
    board: {
      "TYPES OF BAGS": {
        level: 0,
        members: ["CLUTCH", "MESSENGER", "SATCHEL", "TOTE"],
      },
      "WIGGLE ROOM": {
        level: 1,
        members: ["FREEDOM", "LATITUDE", "LICENSE", "SLACK"],
      },
      "INDICATION TO PROCEED": {
        level: 2,
        members: ["CUE", "PROMPT", "SIGNAL", "WORD"],
      },
      "UNDERWEAR IN THE SINGULAR": {
        level: 3,
        members: ["BOXER", "BRIEF", "DRAWER", "SHORT"],
      },
    },
    startingBoard: [
      ["BRIEF", "WORD", "MESSENGER", "LICENSE"],
      ["PROMPT", "SLACK", "SIGNAL", "CLUTCH"],
      ["SHORT", "DRAWER", "BOXER", "FREEDOM"],
      ["TOTE", "LATITUDE", "SATCHEL", "CUE"],
    ],
  },
  {
    id: "384",
    name: "Connections #384",
    createdAt: "2024-06-29T00:00:00.000Z",
    board: {
      HOMOPHONES: { level: 0, members: ["TO", "TOO", "TUE", "TWO"] },
      CONNECT: { level: 1, members: ["COUPLE", "TIE", "UNITE", "WED"] },
      "PLACED DOWN": { level: 2, members: ["LAID", "PLACED", "PUT", "SAT"] },
      ___FLOWER: { level: 3, members: ["MAY", "SUN", "WALL", "WILD"] },
    },
    startingBoard: [
      ["SAT", "MAY", "TO", "SUN"],
      ["WALL", "WED", "PUT", "COUPLE"],
      ["TWO", "TIE", "TUE", "LAID"],
      ["TOO", "WILD", "PLACED", "UNITE"],
    ],
  },
  {
    id: "385",
    name: "Connections #385",
    createdAt: "2024-06-30T00:00:00.000Z",
    board: {
      "OLD SAYING": {
        level: 0,
        members: ["ADAGE", "CHESTNUT", "MAXIM", "SAW"],
      },
      "GRILL FUEL SOURCES": {
        level: 1,
        members: ["CHARCOAL", "ELECTRIC", "GAS", "WOOD"],
      },
      TREES: { level: 2, members: ["ASH", "CHERRY", "EBONY", "GUM"] },
      "HOT TUB COMPONENTS": {
        level: 3,
        members: ["FILTER", "HEATER", "JET", "PUMP"],
      },
    },
    startingBoard: [
      ["ASH", "ELECTRIC", "SAW", "JET"],
      ["GAS", "CHESTNUT", "FILTER", "GUM"],
      ["EBONY", "MAXIM", "WOOD", "HEATER"],
      ["PUMP", "CHERRY", "CHARCOAL", "ADAGE"],
    ],
  },
  {
    id: "386",
    name: "Connections #386",
    createdAt: "2024-07-01T00:00:00.000Z",
    board: {
      "SHOW THE WAY": {
        level: 0,
        members: ["DIRECT", "GUIDE", "LEAD", "USHER"],
      },
      SCHEME: { level: 1, members: ["CON", "HUSTLE", "RACKET", "STING"] },
      "SEEN ON A U.S. DOLLAR BILL": {
        level: 2,
        members: ["EAGLE", "PYRAMID", "SEAL", "WASHINGTON"],
      },
      "FIRST WORDS OF CANADIAN PROVINCES/TERRITORIES": {
        level: 3,
        members: ["BRITISH", "NORTHWEST", "NOVA", "PRINCE"],
      },
    },
    startingBoard: [
      ["PYRAMID", "PRINCE", "BRITISH", "SEAL"],
      ["STING", "WASHINGTON", "NOVA", "USHER"],
      ["NORTHWEST", "RACKET", "LEAD", "EAGLE"],
      ["CON", "DIRECT", "HUSTLE", "GUIDE"],
    ],
  },
  {
    id: "387",
    name: "Connections #387",
    createdAt: "2024-07-02T00:00:00.000Z",
    board: {
      "PACK (AWAY) FOR FUTURE USE": {
        level: 0,
        members: ["SQUIRREL", "STASH", "STORE", "STOW"],
      },
      "ADJECTIVES FOR ASSETS": {
        level: 1,
        members: ["FIXED", "FROZEN", "LIQUID", "TOXIC"],
      },
      "LATIN WORDS": { level: 2, members: ["CAVEAT", "ERGO", "QUID", "VOX"] },
      "___ GAME": {
        level: 3,
        members: ["ARCADE", "BLAME", "NUMBERS", "SQUID"],
      },
    },
    startingBoard: [
      ["LIQUID", "SQUID", "CAVEAT", "STORE"],
      ["FIXED", "ARCADE", "TOXIC", "SQUIRREL"],
      ["QUID", "STASH", "FROZEN", "NUMBERS"],
      ["STOW", "VOX", "BLAME", "ERGO"],
    ],
  },
  {
    id: "388",
    name: "Connections #388",
    createdAt: "2024-07-03T00:00:00.000Z",
    board: {
      "DEVELOP, AS IDEAS": {
        level: 0,
        members: ["BRAINSTORM", "IDEATE", "SPITBALL", "WORKSHOP"],
      },
      TANGIBLE: {
        level: 1,
        members: ["CONCRETE", "MATERIAL", "REAL", "SOLID"],
      },
      "KINDS OF CAKE": {
        level: 2,
        members: ["BIRTHDAY", "CRUMB", "MARBLE", "POUND"],
      },
      "THINGS YOU CAN THROW, IN METAPHORS": {
        level: 3,
        members: ["CURVEBALL", "PARTY", "TANTRUM", "WRENCH"],
      },
    },
    startingBoard: [
      ["BIRTHDAY", "MARBLE", "WRENCH", "CONCRETE"],
      ["CURVEBALL", "WORKSHOP", "PARTY", "POUND"],
      ["SPITBALL", "MATERIAL", "REAL", "TANTRUM"],
      ["SOLID", "BRAINSTORM", "CRUMB", "IDEATE"],
    ],
  },
  {
    id: "389",
    name: "Connections #389",
    createdAt: "2024-07-04T00:00:00.000Z",
    board: {
      "ROMANTIC RAPPORT": {
        level: 0,
        members: ["ATTRACTION", "CHEMISTRY", "FIREWORKS", "SPARKS"],
      },
      "THINGS STORED BY A WEB BROWSER": {
        level: 1,
        members: ["CACHE", "COOKIES", "DATA", "HISTORY"],
      },
      "SINGLE ROTATION": {
        level: 2,
        members: ["CYCLE", "LAP", "TURN", "REVOLUTION"],
      },
      "WORDS BEFORE “BELL”": {
        level: 3,
        members: ["BAR", "DINNER", "LIBERTY", "TINKER"],
      },
    },
    startingBoard: [
      ["FIREWORKS", "LIBERTY", "COOKIES", "DINNER"],
      ["HISTORY", "CHEMISTRY", "REVOLUTION", "TINKER"],
      ["DATA", "BAR", "SPARKS", "LAP"],
      ["CYCLE", "CACHE", "TURN", "ATTRACTION"],
    ],
  },
  {
    id: "390",
    name: "Connections #390",
    createdAt: "2024-07-05T00:00:00.000Z",
    board: {
      YEARN: { level: 0, members: ["DESIRE", "LONG", "PINE", "YEN"] },
      MAGAZINES: { level: 1, members: ["FORTUNE", "MAD", "NATURE", "O"] },
      "CHARACTERS IN BOND MOVIES": {
        level: 2,
        members: ["BOND", "M", "MONEYPENNY", "Q"],
      },
      "WORDS THAT PRECEDE “POP” IN MUSIC GENRES": {
        level: 3,
        members: ["BUBBLEGUM", "EURO", "K", "POWER"],
      },
    },
    startingBoard: [
      ["YEN", "BOND", "MAD", "POWER"],
      ["EURO", "O", "Q", "FORTUNE"],
      ["LONG", "M", "K", "PINE"],
      ["BUBBLEGUM", "NATURE", "DESIRE", "MONEYPENNY"],
    ],
  },
  {
    id: "391",
    name: "Connections #391",
    createdAt: "2024-07-06T00:00:00.000Z",
    board: {
      "BIOLOGICAL BUILDING BLOCKS": {
        level: 0,
        members: ["ATOM", "CELL", "MOLECULE", "PROTEIN"],
      },
      "PURCHASES FOR A BABY": {
        level: 1,
        members: ["BOTTLE", "CRIB", "MOBILE", "RATTLE"],
      },
      "OBJECTS PLAYED AS INSTRUMENTS": {
        level: 2,
        members: ["JUG", "SAW", "SPOONS", "WASHBOARD"],
      },
      "___ TAG": { level: 3, members: ["DOG", "FREEZE", "PHONE", "PRICE"] },
    },
    startingBoard: [
      ["SAW", "DOG", "JUG", "BOTTLE"],
      ["PHONE", "FREEZE", "CELL", "SPOONS"],
      ["MOBILE", "PROTEIN", "RATTLE", "ATOM"],
      ["WASHBOARD", "PRICE", "MOLECULE", "CRIB"],
    ],
  },
  {
    id: "392",
    name: "Connections #392",
    createdAt: "2024-07-07T00:00:00.000Z",
    board: {
      "CHANGE STATES OF MATTER": {
        level: 0,
        members: ["CONDENSE", "FREEZE", "MELT", "VAPORIZE"],
      },
      REPLACEMENT: {
        level: 1,
        members: ["ALTERNATE", "BACKUP", "COVER", "SUB"],
      },
      "SLANGY NAMES FOR PROFESSIONS": {
        level: 2,
        members: ["COPPER", "HACK", "SHRINK", "SUIT"],
      },
      "MARIAH CAREY NUMBER ONE HITS": {
        level: 3,
        members: ["FANTASY", "HERO", "HONEY", "SOMEDAY"],
      },
    },
    startingBoard: [
      ["COPPER", "HONEY", "COVER", "MELT"],
      ["SUB", "SHRINK", "HERO", "CONDENSE"],
      ["FREEZE", "HACK", "BACKUP", "SOMEDAY"],
      ["ALTERNATE", "FANTASY", "VAPORIZE", "SUIT"],
    ],
  },
  {
    id: "393",
    name: "Connections #393",
    createdAt: "2024-07-08T00:00:00.000Z",
    board: {
      "BIT OF ADVICE": {
        level: 0,
        members: ["POINTER", "SUGGESTION", "TIP", "TRICK"],
      },
      FORTITUDE: { level: 1, members: ["GRIT", "RESOLVE", "SPIRIT", "WILL"] },
      "SPEND TIME AT": {
        level: 2,
        members: ["FREQUENT", "HAUNT", "PATRONIZE", "VISIT"],
      },
      "WORDS ENDING IN NUMBERS": {
        level: 3,
        members: ["CANINE", "FREIGHT", "OFTEN", "OZONE"],
      },
    },
    startingBoard: [
      ["CANINE", "TRICK", "SPIRIT", "OZONE"],
      ["OFTEN", "POINTER", "WILL", "VISIT"],
      ["FREQUENT", "RESOLVE", "HAUNT", "TIP"],
      ["GRIT", "SUGGESTION", "FREIGHT", "PATRONIZE"],
    ],
  },
  {
    id: "394",
    name: "Connections #394",
    createdAt: "2024-07-09T00:00:00.000Z",
    board: {
      CHRONICLE: {
        level: 0,
        members: ["JOURNAL", "LOG", "RECORD", "REGISTER"],
      },
      "MESS OF HAIR": { level: 1, members: ["MANE", "MOP", "SHOCK", "TANGLE"] },
      "TV SHOWS MINUS “S”": {
        level: 2,
        members: ["CHEER", "FRIEND", "SCRUB", "WEED"],
      },
      "WORDS AFTER “HEDGE”": {
        level: 3,
        members: ["FUND", "HOG", "MAZE", "TRIMMER"],
      },
    },
    startingBoard: [
      ["SCRUB", "MAZE", "REGISTER", "SHOCK"],
      ["HOG", "LOG", "MOP", "CHEER"],
      ["TANGLE", "WEED", "RECORD", "FUND"],
      ["FRIEND", "MANE", "TRIMMER", "JOURNAL"],
    ],
  },
  {
    id: "395",
    name: "Connections #395",
    createdAt: "2024-07-10T00:00:00.000Z",
    board: {
      "FUTURE LIKELIHOOD": {
        level: 0,
        members: ["CHANCE", "FORECAST", "OUTLOOK", "PROSPECT"],
      },
      "BACK TALK": { level: 1, members: ["ATTITUDE", "CHEEK", "LIP", "SASS"] },
      FISH: { level: 2, members: ["BASS", "FLUKE", "PERCH", "PIKE"] },
      "COMPONENTS OF EYEGLASSES": {
        level: 3,
        members: ["BRIDGE", "LENS", "RIM", "TEMPLE"],
      },
    },
    startingBoard: [
      ["BASS", "TEMPLE", "LIP", "RIM"],
      ["SASS", "CHANCE", "BRIDGE", "FLUKE"],
      ["OUTLOOK", "CHEEK", "PERCH", "ATTITUDE"],
      ["FORECAST", "PIKE", "LENS", "PROSPECT"],
    ],
  },
  {
    id: "396",
    name: "Connections #396",
    createdAt: "2024-07-11T00:00:00.000Z",
    board: {
      "SCHOOL SUPPLIES": {
        level: 0,
        members: ["PEN", "RULER", "SCISSORS", "TAPE"],
      },
      FUNDAMENTAL: {
        level: 1,
        members: ["ESSENTIAL", "KEY", "PRINCIPAL", "STAPLE"],
      },
      TRANSFER: { level: 2, members: ["GIVE", "HAND", "PASS", "SEND"] },
      "LIGHT-UP SIGNS": {
        level: 3,
        members: ["APPLAUSE", "EXIT", "RECORDING", "WALK"],
      },
    },
    startingBoard: [
      ["TAPE", "RECORDING", "HAND", "SEND"],
      ["APPLAUSE", "KEY", "PASS", "PRINCIPAL"],
      ["RULER", "WALK", "STAPLE", "PEN"],
      ["ESSENTIAL", "SCISSORS", "GIVE", "EXIT"],
    ],
  },
  {
    id: "397",
    name: "Connections #397",
    createdAt: "2024-07-12T00:00:00.000Z",
    board: {
      "SCHOOL FACILITIES": {
        level: 0,
        members: ["AUDITORIUM", "GYM", "LAB", "LIBRARY"],
      },
      "ROULETTE BETS": { level: 1, members: ["BLACK", "EVEN", "ODD", "RED"] },
      "ASSOCIATED WITH “DOVE”": {
        level: 2,
        members: ["CHOCOLATE", "PEACE", "PIGEON", "SOAP"],
      },
      "___ GOOSE": { level: 3, members: ["GREY", "GOLDEN", "MOTHER", "SILLY"] },
    },
    startingBoard: [
      ["ODD", "LIBRARY", "CHOCOLATE", "SOAP"],
      ["PIGEON", "MOTHER", "RED", "LAB"],
      ["BLACK", "GREY", "GYM", "PEACE"],
      ["GOLDEN", "EVEN", "SILLY", "AUDITORIUM"],
    ],
  },
  {
    id: "398",
    name: "Connections #398",
    createdAt: "2024-07-13T00:00:00.000Z",
    board: {
      ENORMOUS: {
        level: 0,
        members: ["GIANT", "MAMMOTH", "MONSTER", "TITANIC"],
      },
      EMBODIMENT: {
        level: 1,
        members: ["AVATAR", "CHARACTER", "FIGURE", "PERSONA"],
      },
      "COME ACROSS AS": {
        level: 2,
        members: ["APPEAR", "LOOK", "SEEM", "SOUND"],
      },
      "SILENT “T”": {
        level: 3,
        members: ["CASTLE", "HUSTLE", "LISTEN", "WITCH"],
      },
    },
    startingBoard: [
      ["LISTEN", "SOUND", "WITCH", "TITANIC"],
      ["AVATAR", "GIANT", "LOOK", "HUSTLE"],
      ["MONSTER", "FIGURE", "CASTLE", "APPEAR"],
      ["PERSONA", "SEEM", "MAMMOTH", "CHARACTER"],
    ],
  },
  {
    id: "399",
    name: "Connections #399",
    createdAt: "2024-07-14T00:00:00.000Z",
    board: {
      "SLENDER PROJECTIONS": {
        level: 0,
        members: ["POINT", "PRONG", "TINE", "TIP"],
      },
      "CONDITIONS FOR COLLECTIBLES": {
        level: 1,
        members: ["FAIR", "FINE", "GOOD", "MINT"],
      },
      PROFESSION: { level: 2, members: ["BUSINESS", "FIELD", "LINE", "TRADE"] },
      "WORDS BEFORE “NUT”": {
        level: 3,
        members: ["BRAZIL", "BUTTER", "DOUGH", "PINE"],
      },
    },
    startingBoard: [
      ["FINE", "BUTTER", "MINT", "DOUGH"],
      ["POINT", "LINE", "FAIR", "TRADE"],
      ["BRAZIL", "PINE", "FIELD", "PRONG"],
      ["BUSINESS", "TIP", "GOOD", "TINE"],
    ],
  },
  {
    id: "400",
    name: "Connections #400",
    createdAt: "2024-07-15T00:00:00.000Z",
    board: {
      "REGARD AS TRUE": {
        level: 0,
        members: ["ACCEPT", "BELIEVE", "BUY", "TRUST"],
      },
      FACADE: { level: 1, members: ["BLUFF", "FRONT", "SHAM", "SHOW"] },
      "WAYS TO SECURE A TV": {
        level: 2,
        members: ["BASE", "BRACKET", "MOUNT", "STAND"],
      },
      "LIQUOR BOTTLE SIZES": {
        level: 3,
        members: ["FIFTH", "HANDLE", "LITER", "PINT"],
      },
    },
    startingBoard: [
      ["BELIEVE", "HANDLE", "MOUNT", "SHOW"],
      ["BASE", "BLUFF", "ACCEPT", "STAND"],
      ["FRONT", "FIFTH", "BRACKET", "TRUST"],
      ["PINT", "BUY", "SHAM", "LITER"],
    ],
  },
  {
    id: "401",
    name: "Connections #401",
    createdAt: "2024-07-16T00:00:00.000Z",
    board: {
      "IN A BAD MOOD": {
        level: 0,
        members: ["CROSS", "SHORT", "SURLY", "TESTY"],
      },
      EXPERIMENTAL: {
        level: 1,
        members: ["EXPLORATORY", "PILOT", "PRELIMINARY", "TRIAL"],
      },
      "STARTS OF BROADWAY MUSICALS": {
        level: 2,
        members: ["FIDDLER", "JERSEY", "KINKY", "MERRILY"],
      },
      "PETER ___": { level: 3, members: ["PAN", "PARKER", "PIPER", "RABBIT"] },
    },
    startingBoard: [
      ["PAN", "PILOT", "SHORT", "RABBIT"],
      ["CROSS", "PARKER", "KINKY", "TRIAL"],
      ["PIPER", "FIDDLER", "TESTY", "EXPLORATORY"],
      ["MERRILY", "SURLY", "PRELIMINARY", "JERSEY"],
    ],
  },
  {
    id: "402",
    name: "Connections #402",
    createdAt: "2024-07-17T00:00:00.000Z",
    board: {
      "BUILDINGS AROUND TOWN": {
        level: 0,
        members: ["BANK", "LAUNDROMAT", "POST OFFICE", "SUPERMARKET"],
      },
      HINDER: { level: 1, members: ["CHECK", "CURB", "HAMPER", "INHIBIT"] },
      "ANIMAL GROUP NAMES": {
        level: 2,
        members: ["PACK", "PRIDE", "SCHOOL", "SWARM"],
      },
      "STARTS OF U.S. PRESIDENTS": {
        level: 3,
        members: ["BIDE", "CART", "NIX", "WASHING"],
      },
    },
    startingBoard: [
      ["PACK", "CART", "CHECK", "HAMPER"],
      ["BANK", "WASHING", "SCHOOL", "LAUNDROMAT"],
      ["BIDE", "PRIDE", "CURB", "NIX"],
      ["POST OFFICE", "INHIBIT", "SUPERMARKET", "SWARM"],
    ],
  },
  {
    id: "403",
    name: "Connections #403",
    createdAt: "2024-07-18T00:00:00.000Z",
    board: {
      "OPEN SPACE": { level: 0, members: ["COURT", "PLAZA", "SQUARE", "YARD"] },
      "BOXING UNIT": {
        level: 1,
        members: ["BOUT", "CONTEST", "MATCH", "ROUND"],
      },
      GLITZINESS: { level: 2, members: ["DAZZLE", "FLASH", "POMP", "RITZ"] },
      EMOJI: { level: 3, members: ["FIRE", "HEART", "SKULL", "SPARKLES"] },
    },
    startingBoard: [
      ["HEART", "FLASH", "MATCH", "SQUARE"],
      ["ROUND", "PLAZA", "RITZ", "FIRE"],
      ["SPARKLES", "DAZZLE", "COURT", "CONTEST"],
      ["YARD", "SKULL", "BOUT", "POMP"],
    ],
  },
  {
    id: "404",
    name: "Connections #404",
    createdAt: "2024-07-19T00:00:00.000Z",
    board: {
      "ROMANTIC PARTNER": {
        level: 0,
        members: ["FLAME", "LOVER", "STEADY", "SWEETHEART"],
      },
      INSULT: { level: 1, members: ["BURN", "DIG", "JAB", "SLIGHT"] },
      "GAS PUMP OPTIONS": {
        level: 2,
        members: ["DIESEL", "PLUS", "PREMIUM", "REGULAR"],
      },
      "___ TABLE": {
        level: 3,
        members: ["COFFEE", "PERIODIC", "POOL", "WATER"],
      },
    },
    startingBoard: [
      ["REGULAR", "COFFEE", "PLUS", "WATER"],
      ["STEADY", "SLIGHT", "POOL", "FLAME"],
      ["BURN", "PERIODIC", "DIESEL", "DIG"],
      ["LOVER", "PREMIUM", "JAB", "SWEETHEART"],
    ],
  },
  {
    id: "405",
    name: "Connections #405",
    createdAt: "2024-07-20T00:00:00.000Z",
    board: {
      EFFORTLESS: {
        level: 0,
        members: ["FLUID", "GRACEFUL", "NATURAL", "SMOOTH"],
      },
      EXERTION: { level: 1, members: ["EFFORT", "LABOR", "SWEAT", "WORK"] },
      "ENERGY FOR AN ELECTRONIC DEVICE": {
        level: 2,
        members: ["BATTERY", "CHARGE", "JUICE", "POWER"],
      },
      "WHAT “POP” MIGHT MEAN": {
        level: 3,
        members: ["BURST", "DAD", "MAINSTREAM", "SODA"],
      },
    },
    startingBoard: [
      ["NATURAL", "JUICE", "MAINSTREAM", "DAD"],
      ["SWEAT", "FLUID", "BURST", "CHARGE"],
      ["SODA", "BATTERY", "SMOOTH", "LABOR"],
      ["WORK", "POWER", "GRACEFUL", "EFFORT"],
    ],
  },
  {
    id: "406",
    name: "Connections #406",
    createdAt: "2024-07-21T00:00:00.000Z",
    board: {
      "WAYS TO SUPPORT A CANDIDATE": {
        level: 0,
        members: ["CAMPAIGN", "CANVASS", "ORGANIZE", "STUMP"],
      },
      CONSTITUTION: {
        level: 1,
        members: ["COMPOSITION", "FABRIC", "MAKEUP", "STRUCTURE"],
      },
      "CARPENTRY TOOLS": {
        level: 2,
        members: ["CLAMP", "FILE", "LEVEL", "SAW"],
      },
      "MATH ABBREVIATIONS": { level: 3, members: ["LOG", "MAX", "MOD", "TAN"] },
    },
    startingBoard: [
      ["MAKEUP", "LEVEL", "TAN", "STUMP"],
      ["LOG", "STRUCTURE", "SAW", "FILE"],
      ["FABRIC", "CLAMP", "CANVASS", "MOD"],
      ["ORGANIZE", "CAMPAIGN", "MAX", "COMPOSITION"],
    ],
  },
  {
    id: "407",
    name: "Connections #407",
    createdAt: "2024-07-22T00:00:00.000Z",
    board: {
      "REALM OF EXPERTISE": {
        level: 0,
        members: ["AREA", "DOMAIN", "FIELD", "SPHERE"],
      },
      "MUSICAL INSTRUMENTS": {
        level: 1,
        members: ["FIDDLE", "HORN", "RECORDER", "TRIANGLE"],
      },
      "USED TO REDIRECT TRAFFIC": {
        level: 2,
        members: ["BARRIER", "CONE", "FLAG", "FLARE"],
      },
      "FOOD ___": {
        level: 3,
        members: ["CHAIN", "FIGHT", "PROCESSOR", "PYRAMID"],
      },
    },
    startingBoard: [
      ["PYRAMID", "HORN", "CONE", "CHAIN"],
      ["FIGHT", "FLAG", "FIELD", "FLARE"],
      ["SPHERE", "PROCESSOR", "RECORDER", "BARRIER"],
      ["TRIANGLE", "DOMAIN", "FIDDLE", "AREA"],
    ],
  },
  {
    id: "408",
    name: "Connections #408",
    createdAt: "2024-07-23T00:00:00.000Z",
    board: {
      IMPOSTOR: { level: 0, members: ["CHARLATAN", "FRAUD", "QUACK", "SHAM"] },
      UTTERANCE: { level: 1, members: ["NOISE", "PEEP", "SOUND", "WORD"] },
      "ONE WHO LIKES SHOWING OFF": {
        level: 2,
        members: ["HAM", "HOT DOG", "PEACOCK", "SHOWBOAT"],
      },
      "LOONEY TUNES CHARACTERS MINUS A LETTER": {
        level: 3,
        members: ["BUG", "PORK", "SPEED", "TWEET"],
      },
    },
    startingBoard: [
      ["HOT DOG", "WORD", "BUG", "TWEET"],
      ["PEEP", "PORK", "PEACOCK", "QUACK"],
      ["HAM", "SHAM", "SPEED", "SOUND"],
      ["FRAUD", "NOISE", "SHOWBOAT", "CHARLATAN"],
    ],
  },
  {
    id: "409",
    name: "Connections #409",
    createdAt: "2024-07-24T00:00:00.000Z",
    board: {
      "JOKE AROUND WITH": {
        level: 0,
        members: ["KID", "RAZZ", "RIB", "TEASE"],
      },
      "POULTRY CUTS": {
        level: 1,
        members: ["BREAST", "TENDER", "THIGH", "WING"],
      },
      "BABY ANIMALS": { level: 2, members: ["CALF", "CUB", "FAWN", "KIT"] },
      "PUSH THROUGH A CROWD": {
        level: 3,
        members: ["BARGE", "JOSTLE", "MUSCLE", "SHOULDER"],
      },
    },
    startingBoard: [
      ["KID", "CALF", "THIGH", "KIT"],
      ["TENDER", "SHOULDER", "MUSCLE", "RIB"],
      ["FAWN", "TEASE", "JOSTLE", "CUB"],
      ["BREAST", "BARGE", "RAZZ", "WING"],
    ],
  },
  {
    id: "410",
    name: "Connections #410",
    createdAt: "2024-07-25T00:00:00.000Z",
    board: {
      "ANCIENT WRITING SURFACES": {
        level: 0,
        members: ["CLAY", "PAPYRUS", "PARCHMENT", "WAX"],
      },
      "LEAD, AS A TV PROGRAM": {
        level: 1,
        members: ["ANCHOR", "HOST", "MODERATE", "PRESENT"],
      },
      "NATURAL ABILITY": {
        level: 2,
        members: ["FACULTY", "FLAIR", "INSTINCT", "TALENT"],
      },
      "WRAPPED THINGS": {
        level: 3,
        members: ["BURRITO", "GIFT", "MUMMY", "SPRAIN"],
      },
    },
    startingBoard: [
      ["WAX", "MUMMY", "GIFT", "ANCHOR"],
      ["BURRITO", "PRESENT", "CLAY", "PAPYRUS"],
      ["SPRAIN", "FLAIR", "MODERATE", "TALENT"],
      ["INSTINCT", "PARCHMENT", "HOST", "FACULTY"],
    ],
  },
  {
    id: "411",
    name: "Connections #411",
    createdAt: "2024-07-26T00:00:00.000Z",
    board: {
      "BASIC DIRECTIONS": {
        level: 0,
        members: ["DOWN", "LEFT", "RIGHT", "UP"],
      },
      "ADVOCATE FOR": {
        level: 1,
        members: ["BACK", "CHAMPION", "ENDORSE", "SUPPORT"],
      },
      DRAWBACK: { level: 2, members: ["CON", "DING", "MINUS", "STRIKE"] },
      "INSTRUMENT HOMOPHONES": {
        level: 3,
        members: ["BASE", "LIAR", "LOOT", "SYMBOL"],
      },
    },
    startingBoard: [
      ["LIAR", "CON", "BACK", "DOWN"],
      ["SUPPORT", "SYMBOL", "MINUS", "LOOT"],
      ["CHAMPION", "STRIKE", "DING", "RIGHT"],
      ["BASE", "UP", "ENDORSE", "LEFT"],
    ],
  },
  {
    id: "412",
    name: "Connections #412",
    createdAt: "2024-07-27T00:00:00.000Z",
    board: {
      "OFF-TOPIC REMARKS": {
        level: 0,
        members: ["ASIDE", "DETOUR", "DIGRESSION", "TANGENT"],
      },
      "CREATE, AS RESULTS": {
        level: 1,
        members: ["BEAR", "GENERATE", "PRODUCE", "YIELD"],
      },
      HOTTIE: { level: 2, members: ["BABE", "FOX", "SNACK", "TEN"] },
      'WORDS REPRESENTED BY THE LETTER "R"': {
        level: 3,
        members: ["ARE", "RADIUS", "REVERSE", "RIGHT"],
      },
    },
    startingBoard: [
      ["BEAR", "DETOUR", "RADIUS", "YIELD"],
      ["FOX", "TANGENT", "REVERSE", "SNACK"],
      ["TEN", "GENERATE", "DIGRESSION", "RIGHT"],
      ["PRODUCE", "ASIDE", "ARE", "BABE"],
    ],
  },
  {
    id: "413",
    name: "Connections #413",
    createdAt: "2024-07-28T00:00:00.000Z",
    board: {
      "PARTS OF A BOOK": {
        level: 0,
        members: ["COVER", "JACKET", "PAGE", "SPINE"],
      },
      "CAT COAT PATTERNS": {
        level: 1,
        members: ["CALICO", "TABBY", "TORTOISESHELL", "TUXEDO"],
      },
      "NERVOUSNESS, IN THE SINGULAR": {
        level: 2,
        members: ["BUTTERFLY", "JITTER", "NERVE", "WILLY"],
      },
      "STARTING WITH VEGETABLES": {
        level: 3,
        members: ["BEETHOVEN", "CORNUCOPIA", "KALEIDOSCOPE", "PEACOCK"],
      },
    },
    startingBoard: [
      ["BUTTERFLY", "TUXEDO", "PEACOCK", "NERVE"],
      ["BEETHOVEN", "SPINE", "WILLY", "JACKET"],
      ["CORNUCOPIA", "KALEIDOSCOPE", "TORTOISESHELL", "JITTER"],
      ["CALICO", "COVER", "TABBY", "PAGE"],
    ],
  },
  {
    id: "414",
    name: "Connections #414",
    createdAt: "2024-07-29T00:00:00.000Z",
    board: {
      STADIUMS: { level: 0, members: ["ARENA", "BOWL", "COLISEUM", "DOME"] },
      "STREET SUFFIXES": {
        level: 1,
        members: ["ALLEY", "COURT", "DRIVE", "LANE"],
      },
      "ASSOCIATED WITH SCALES": {
        level: 2,
        members: ["FISH", "JUSTICE", "LIBRA", "SOLFEGE"],
      },
      "THINGS WITH SPOUTS": {
        level: 3,
        members: ["FOUNTAIN", "GUTTER", "TEAPOT", "WHALE"],
      },
    },
    startingBoard: [
      ["GUTTER", "WHALE", "TEAPOT", "DOME"],
      ["FISH", "BOWL", "JUSTICE", "ALLEY"],
      ["SOLFEGE", "COURT", "FOUNTAIN", "LANE"],
      ["COLISEUM", "LIBRA", "DRIVE", "ARENA"],
    ],
  },
  {
    id: "415",
    name: "Connections #415",
    createdAt: "2024-07-30T00:00:00.000Z",
    board: {
      "PEACHY KEEN": { level: 0, members: ["NEAT", "NIFTY", "SUPER", "SWELL"] },
      "PROVIDE MORE DETAILS": {
        level: 1,
        members: ["ELABORATE", "EXPAND", "EXPLAIN", "SPECIFY"],
      },
      "ABILITY TO DO SOMETHING WELL": {
        level: 2,
        members: ["FACILITY", "FLAIR", "GIFT", "KNACK"],
      },
      "GROUP OF BUILDINGS": {
        level: 3,
        members: ["BLOCK", "COMPLEX", "COMPOUND", "DEVELOPMENT"],
      },
    },
    startingBoard: [
      ["SUPER", "COMPLEX", "EXPAND", "FACILITY"],
      ["ELABORATE", "SWELL", "GIFT", "BLOCK"],
      ["COMPOUND", "FLAIR", "NEAT", "EXPLAIN"],
      ["KNACK", "DEVELOPMENT", "SPECIFY", "NIFTY"],
    ],
  },
  {
    id: "416",
    name: "Connections #416",
    createdAt: "2024-07-31T00:00:00.000Z",
    board: {
      RASPY: { level: 0, members: ["GRUFF", "HOARSE", "HUSKY", "ROUGH"] },
      FINGERS: { level: 1, members: ["LITTLE", "MIDDLE", "POINTER", "RING"] },
      "ALE STYLES": { level: 2, members: ["AMBER", "PORTER", "SOUR", "STOUT"] },
      "FRENCH ___": { level: 3, members: ["BULLDOG", "FRY", "HORN", "KISS"] },
    },
    startingBoard: [
      ["LITTLE", "BULLDOG", "SOUR", "KISS"],
      ["HUSKY", "RING", "STOUT", "GRUFF"],
      ["POINTER", "HORN", "ROUGH", "AMBER"],
      ["PORTER", "HOARSE", "MIDDLE", "FRY"],
    ],
  },
  {
    id: "417",
    name: "Connections #417",
    createdAt: "2024-08-01T00:00:00.000Z",
    board: {
      PROMOTE: { level: 0, members: ["HYPE", "MARKET", "PITCH", "SELL"] },
      THROW: { level: 1, members: ["CAST", "CHUCK", "FLING", "HURL"] },
      "BOOKSTORE SECTIONS": {
        level: 2,
        members: ["FICTION", "HUMOR", "ROMANCE", "TRAVEL"],
      },
      "___ SOCKS": { level: 3, members: ["ANKLE", "CREW", "SWEAT", "TUBE"] },
    },
    startingBoard: [
      ["FLING", "ROMANCE", "TUBE", "CHUCK"],
      ["CAST", "CREW", "PITCH", "SWEAT"],
      ["TRAVEL", "MARKET", "HYPE", "FICTION"],
      ["SELL", "HUMOR", "ANKLE", "HURL"],
    ],
  },
  {
    id: "418",
    name: "Connections #418",
    createdAt: "2024-08-02T00:00:00.000Z",
    board: {
      "STRETCH, AS ONE’S PATIENCE": {
        level: 0,
        members: ["STRAIN", "TAX", "TEST", "TRY"],
      },
      "THINGS A DJ DOES": {
        level: 1,
        members: ["MIX", "SAMPLE", "SCRATCH", "SPIN"],
      },
      "ADJECTIVES USED IN GRAMMAR": {
        level: 2,
        members: ["DIRECT", "IRREGULAR", "POSSESSIVE", "PRESENT"],
      },
      "WHAT “GREEN” MIGHT MEAN": {
        level: 3,
        members: ["ECOLOGICAL", "JEALOUS", "LUSH", "NAUSEOUS"],
      },
    },
    startingBoard: [
      ["PRESENT", "SAMPLE", "JEALOUS", "TRY"],
      ["TAX", "MIX", "LUSH", "POSSESSIVE"],
      ["DIRECT", "TEST", "SCRATCH", "NAUSEOUS"],
      ["SPIN", "IRREGULAR", "ECOLOGICAL", "STRAIN"],
    ],
  },
  {
    id: "419",
    name: "Connections #419",
    createdAt: "2024-08-03T00:00:00.000Z",
    board: {
      "BIT OF EXCITEMENT": {
        level: 0,
        members: ["HIGH", "KICK", "RUSH", "THRILL"],
      },
      TOLERATE: { level: 1, members: ["BEAR", "STAND", "STOMACH", "TAKE"] },
      NONSENSE: { level: 2, members: ["BALONEY", "BULL", "BUNK", "TRIPE"] },
      "THINGS TO CLICK": {
        level: 3,
        members: ["HEELS", "MOUSE", "REMOTE", "TONGUE"],
      },
    },
    startingBoard: [
      ["BULL", "RUSH", "KICK", "STAND"],
      ["BEAR", "TONGUE", "TRIPE", "STOMACH"],
      ["HIGH", "HEELS", "THRILL", "MOUSE"],
      ["BALONEY", "REMOTE", "TAKE", "BUNK"],
    ],
  },
  {
    id: "420",
    name: "Connections #420",
    createdAt: "2024-08-04T00:00:00.000Z",
    board: {
      KIDDO: { level: 0, members: ["BUDDY", "CHAMP", "SPORT", "TIGER"] },
      "UP FOR IT": {
        level: 1,
        members: ["AMENABLE", "DOWN", "GAME", "WILLING"],
      },
      "BEGINNING WITH DOUBLE LETTERS": {
        level: 2,
        members: ["AARDVARK", "EERIE", "LLAMA", "OOZE"],
      },
      "NICKNAMES FOR THE SEA, WITH “THE”": {
        level: 3,
        members: ["BLUE", "BRINY", "DEEP", "DRINK"],
      },
    },
    startingBoard: [
      ["SPORT", "DRINK", "BLUE", "OOZE"],
      ["DOWN", "LLAMA", "TIGER", "GAME"],
      ["DEEP", "CHAMP", "BRINY", "EERIE"],
      ["AMENABLE", "AARDVARK", "BUDDY", "WILLING"],
    ],
  },
  {
    id: "421",
    name: "Connections #421",
    createdAt: "2024-08-05T00:00:00.000Z",
    board: {
      SURVIVE: {
        level: 0,
        members: ["GET BY", "HACK IT", "MAKE DO", "MANAGE"],
      },
      "KINDS OF GREETING CARDS": {
        level: 1,
        members: ["BIRTHDAY", "CONGRATULATIONS", "GET WELL", "THANK YOU"],
      },
      "ARE WE CLEAR?": {
        level: 2,
        members: ["CAPISCE", "GET IT", "SEE", "UNDERSTAND"],
      },
      "WORDS AFTER “EYE”": {
        level: 3,
        members: ["CANDY", "CONTACT", "SHADOW", "WITNESS"],
      },
    },
    startingBoard: [
      ["BIRTHDAY", "CANDY", "GET IT", "THANK YOU"],
      ["CONTACT", "WITNESS", "HACK IT", "SEE"],
      ["SHADOW", "MAKE DO", "GET WELL", "UNDERSTAND"],
      ["MANAGE", "CAPISCE", "GET BY", "CONGRATULATIONS"],
    ],
  },
  {
    id: "422",
    name: "Connections #422",
    createdAt: "2024-08-06T00:00:00.000Z",
    board: {
      "FLUFFY WHITE THINGS": {
        level: 0,
        members: ["CLOUD", "COTTON BALL", "DANDELION", "SHEEP"],
      },
      "ONE IN A RESEARCH STUDY": {
        level: 1,
        members: ["GUINEA PIG", "PARTICIPANT", "SUBJECT", "VOLUNTEER"],
      },
      "TAKE ISSUE": {
        level: 2,
        members: ["DISAPPROVE", "MIND", "OBJECT", "PROTEST"],
      },
      ___HORN: { level: 3, members: ["BULL", "FOG", "MATTER", "SHOE"] },
    },
    startingBoard: [
      ["CLOUD", "SHOE", "SUBJECT", "OBJECT"],
      ["BULL", "GUINEA PIG", "COTTON BALL", "FOG"],
      ["DANDELION", "MIND", "MATTER", "VOLUNTEER"],
      ["PROTEST", "PARTICIPANT", "SHEEP", "DISAPPROVE"],
    ],
  },
  {
    id: "423",
    name: "Connections #423",
    createdAt: "2024-08-07T00:00:00.000Z",
    board: {
      CRAM: { level: 0, members: ["JAM", "PACK", "RAM", "STUFF"] },
      "RESTAURANT JOBS": {
        level: 1,
        members: ["COOK", "DISHWASHER", "HOST", "SERVER"],
      },
      "ELECTROMAGNETIC SPECTRUM": {
        level: 2,
        members: ["MICROWAVE", "RADIO", "VISIBLE", "X-RAY"],
      },
      "THINGS WITH BITS": {
        level: 3,
        members: ["BRIDLE", "BYTE", "COMEDIAN", "DRILL"],
      },
    },
    startingBoard: [
      ["X-RAY", "BYTE", "RADIO", "DRILL"],
      ["DISHWASHER", "RAM", "MICROWAVE", "SERVER"],
      ["COMEDIAN", "COOK", "STUFF", "HOST"],
      ["PACK", "VISIBLE", "BRIDLE", "JAM"],
    ],
  },
  {
    id: "424",
    name: "Connections #424",
    createdAt: "2024-08-08T00:00:00.000Z",
    board: {
      "SPLASHY WAYS TO ENTER A POOL": {
        level: 0,
        members: ["BACKFLIP", "BELLYFLOP", "CANNONBALL", "JACKKNIFE"],
      },
      REITERATE: { level: 1, members: ["ECHO", "PARROT", "REPEAT", "QUOTE"] },
      MAINSTAY: {
        level: 2,
        members: ["ANCHOR", "BACKBONE", "CORNERSTONE", "PILLAR"],
      },
      "___ RADIO": {
        level: 3,
        members: ["HAM", "PIRATE", "SATELLITE", "TALK"],
      },
    },
    startingBoard: [
      ["TALK", "PIRATE", "PILLAR", "PARROT"],
      ["HAM", "QUOTE", "CANNONBALL", "ANCHOR"],
      ["SATELLITE", "ECHO", "CORNERSTONE", "JACKKNIFE"],
      ["BACKFLIP", "BACKBONE", "BELLYFLOP", "REPEAT"],
    ],
  },
  {
    id: "425",
    name: "Connections #425",
    createdAt: "2024-08-09T00:00:00.000Z",
    board: {
      "NOT PRESENT": {
        level: 0,
        members: ["ABSENT", "ELSEWHERE", "GONE", "MIA"],
      },
      SUPPORTER: {
        level: 1,
        members: ["ADVOCATE", "CHAMPION", "CHEERLEADER", "EXPONENT"],
      },
      "ROCK GENRES": { level: 2, members: ["GLAM", "GOTH", "METAL", "PUNK"] },
      "SHOCK ___": { level: 3, members: ["HORROR", "JOCK", "VALUE", "WAVE"] },
    },
    startingBoard: [
      ["HORROR", "CHEERLEADER", "PUNK", "JOCK"],
      ["MIA", "GOTH", "WAVE", "GLAM"],
      ["CHAMPION", "ELSEWHERE", "VALUE", "EXPONENT"],
      ["GONE", "METAL", "ADVOCATE", "ABSENT"],
    ],
  },
  {
    id: "426",
    name: "Connections #426",
    createdAt: "2024-08-10T00:00:00.000Z",
    board: {
      "THINGS THAT ARE RED": {
        level: 0,
        members: ["DEVIL", "MARS", "ROSE", "STRAWBERRY"],
      },
      "BE IN COMMISSION": {
        level: 1,
        members: ["FUNCTION", "OPERATE", "RUN", "WORK"],
      },
      "MICROSOFT PRODUCTS": {
        level: 2,
        members: ["EDGE", "OFFICE", "TEAMS", "WINDOWS"],
      },
      BIOPICS: { level: 3, members: ["BLONDE", "JOBS", "MILK", "VICE"] },
    },
    startingBoard: [
      ["STRAWBERRY", "MILK", "OFFICE", "RUN"],
      ["BLONDE", "ROSE", "WORK", "TEAMS"],
      ["JOBS", "FUNCTION", "EDGE", "MARS"],
      ["WINDOWS", "VICE", "DEVIL", "OPERATE"],
    ],
  },
  {
    id: "427",
    name: "Connections #427",
    createdAt: "2024-08-11T00:00:00.000Z",
    board: {
      "LARGE BOAT": { level: 0, members: ["BARGE", "CRAFT", "SHIP", "VESSEL"] },
      "ALL-TIME GREAT": {
        level: 1,
        members: ["BEST", "CHAMP", "GOAT", "LEGEND"],
      },
      REGARDING: { level: 2, members: ["ABOUT", "CONCERNING", "ON", "TOWARD"] },
      "HOMOPHONES OF BODY FEATURES": {
        level: 3,
        members: ["HARE", "I", "MUSSEL", "NAVAL"],
      },
    },
    startingBoard: [
      ["CHAMP", "I", "ON", "SHIP"],
      ["BEST", "CRAFT", "MUSSEL", "GOAT"],
      ["HARE", "LEGEND", "ABOUT", "NAVAL"],
      ["BARGE", "TOWARD", "CONCERNING", "VESSEL"],
    ],
  },
  {
    id: "428",
    name: "Connections #428",
    createdAt: "2024-08-12T00:00:00.000Z",
    board: {
      "METAL ELEMENTS": {
        level: 0,
        members: ["GOLD", "LEAD", "MERCURY", "TIN"],
      },
      "MATTRESS SIZES": {
        level: 1,
        members: ["FULL", "KING", "QUEEN", "TWIN"],
      },
      "SLANG FOR TOILET": {
        level: 2,
        members: ["CAN", "HEAD", "JOHN", "THRONE"],
      },
      "KINDS OF KNIVES": {
        level: 3,
        members: ["BOWIE", "BUTCHER", "BUTTER", "BUTTERFLY"],
      },
    },
    startingBoard: [
      ["BOWIE", "HEAD", "FULL", "BUTTER"],
      ["LEAD", "THRONE", "MERCURY", "KING"],
      ["QUEEN", "BUTTERFLY", "JOHN", "GOLD"],
      ["BUTCHER", "TWIN", "TIN", "CAN"],
    ],
  },
  {
    id: "429",
    name: "Connections #429",
    createdAt: "2024-08-13T00:00:00.000Z",
    board: {
      STATED: { level: 0, members: ["SAID", "SPOKE", "TOLD", "VOICED"] },
      NICKNAME: {
        level: 1,
        members: ["DESIGNATION", "HANDLE", "MONIKER", "SOBRIQUET"],
      },
      OBVIOUS: {
        level: 2,
        members: ["CLEAR", "MARKED", "PRONOUNCED", "STRIKING"],
      },
      "___HOUSE (THAT AREN’T HOUSES)": {
        level: 3,
        members: ["PORTER", "POWER", "ROUGH", "WHEEL"],
      },
    },
    startingBoard: [
      ["MARKED", "SAID", "SPOKE", "WHEEL"],
      ["CLEAR", "HANDLE", "PORTER", "PRONOUNCED"],
      ["DESIGNATION", "ROUGH", "STRIKING", "MONIKER"],
      ["TOLD", "SOBRIQUET", "POWER", "VOICED"],
    ],
  },
  {
    id: "430",
    name: "Connections #430",
    createdAt: "2024-08-14T00:00:00.000Z",
    board: {
      BLUNDER: { level: 0, members: ["BOO-BOO", "FLUB", "GAFFE", "GOOF"] },
      FLOWERS: { level: 1, members: ["DAISY", "JASMINE", "PETUNIA", "POPPY"] },
      "THINGS BEES DO": {
        level: 2,
        members: ["BUZZ", "DANCE", "POLLINATE", "STING"],
      },
      "FIRST NAMES OF YANKEES LEGENDS": {
        level: 3,
        members: ["BABE", "LOU", "MICKEY", "YOGI"],
      },
    },
    startingBoard: [
      ["BABE", "BUZZ", "BOO-BOO", "DAISY"],
      ["JASMINE", "MICKEY", "DANCE", "YOGI"],
      ["GOOF", "STING", "PETUNIA", "FLUB"],
      ["POPPY", "LOU", "GAFFE", "POLLINATE"],
    ],
  },
  {
    id: "431",
    name: "Connections #431",
    createdAt: "2024-08-15T00:00:00.000Z",
    board: {
      BREADTH: { level: 0, members: ["EXTENT", "RANGE", "REACH", "SCOPE"] },
      "OTHER HALF": {
        level: 1,
        members: ["COMPLEMENT", "MATCH", "MATE", "PARTNER"],
      },
      "BEERS, FAMILIARLY": {
        level: 2,
        members: ["BUD", "NATTY", "SIERRA", "STELLA"],
      },
      "WORDS AFTER “PAY”": {
        level: 3,
        members: ["CHECK", "DIRT", "PAL", "PHONE"],
      },
    },
    startingBoard: [
      ["MATCH", "PHONE", "BUD", "RANGE"],
      ["SIERRA", "DIRT", "MATE", "PAL"],
      ["REACH", "CHECK", "NATTY", "SCOPE"],
      ["COMPLEMENT", "STELLA", "EXTENT", "PARTNER"],
    ],
  },
  {
    id: "432",
    name: "Connections #432",
    createdAt: "2024-08-16T00:00:00.000Z",
    board: {
      MEH: { level: 0, members: ["AVERAGE", "FAIR", "OK", "SO-SO"] },
      "U.S. STATE ABBREVIATIONS": {
        level: 1,
        members: ["HI", "MA", "OR", "PA"],
      },
      "KINDS OF BOOTS": {
        level: 2,
        members: ["ANKLE", "COWBOY", "GO-GO", "THIGH-HIGH"],
      },
      "THINGS THAT GO UP AND DOWN": {
        level: 3,
        members: ["ELEVATOR", "SUN", "TIDE", "YO-YO"],
      },
    },
    startingBoard: [
      ["OK", "COWBOY", "ANKLE", "SUN"],
      ["HI", "TIDE", "YO-YO", "MA"],
      ["FAIR", "GO-GO", "AVERAGE", "ELEVATOR"],
      ["PA", "SO-SO", "OR", "THIGH-HIGH"],
    ],
  },
  {
    id: "433",
    name: "Connections #433",
    createdAt: "2024-08-17T00:00:00.000Z",
    board: {
      "SPOKEN COMMUNICATION": {
        level: 0,
        members: ["DIALECT", "LANGUAGE", "SPEECH", "TONGUE"],
      },
      CANOODLE: { level: 1, members: ["FRENCH", "KISS", "MAKE OUT", "NECK"] },
      "FIRST AID KIT ITEMS": {
        level: 2,
        members: ["BANDAGE", "DRESSING", "SCISSORS", "TAPE"],
      },
      "HOUSE STYLES": {
        level: 3,
        members: ["COTTAGE", "CRAFTSMAN", "PRAIRIE", "RANCH"],
      },
    },
    startingBoard: [
      ["TONGUE", "TAPE", "RANCH", "NECK"],
      ["FRENCH", "LANGUAGE", "DRESSING", "COTTAGE"],
      ["BANDAGE", "CRAFTSMAN", "MAKE OUT", "SCISSORS"],
      ["SPEECH", "KISS", "PRAIRIE", "DIALECT"],
    ],
  },
  {
    id: "434",
    name: "Connections #434",
    createdAt: "2024-08-18T00:00:00.000Z",
    board: {
      "ALARM CLOCK BUTTONS": {
        level: 0,
        members: ["ALARM", "HOUR", "SNOOZE", "TIME SET"],
      },
      "“HERE’S A THOUGHT ...”": {
        level: 1,
        members: ["PERHAPS", "SAY", "SUPPOSE", "WHAT IF"],
      },
      "CANDY PIECES": {
        level: 2,
        members: ["KISS", "NERD", "RUNT", "WHOPPER"],
      },
      "SEVEN DWARFS MINUS LAST LETTER": {
        level: 3,
        members: ["DO", "DOPE", "GRUMP", "SLEEP"],
      },
    },
    startingBoard: [
      ["NERD", "GRUMP", "SNOOZE", "WHAT IF"],
      ["SAY", "DO", "DOPE", "RUNT"],
      ["SLEEP", "KISS", "SUPPOSE", "ALARM"],
      ["HOUR", "PERHAPS", "TIME SET", "WHOPPER"],
    ],
  },
  {
    id: "435",
    name: "Connections #435",
    createdAt: "2024-08-19T00:00:00.000Z",
    board: {
      "MUSIC GENRES": {
        level: 0,
        members: ["BLUES", "COUNTRY", "FOLK", "ROCK"],
      },
      "BRATWURST GO-WITHS": {
        level: 1,
        members: ["BRAT", "BUN", "MUSTARD", "SAUERKRAUT"],
      },
      "YOGA POSES": {
        level: 2,
        members: ["CHAIR", "MOUNTAIN", "TREE", "WARRIOR"],
      },
      "STARTING WITH PIXAR MOVIES": {
        level: 3,
        members: ["COCONUT", "SOULMATE", "UPDO", "WALLET"],
      },
    },
    startingBoard: [
      ["FOLK", "WARRIOR", "COCONUT", "TREE"],
      ["SOULMATE", "ROCK", "CHAIR", "BUN"],
      ["MOUNTAIN", "MUSTARD", "COUNTRY", "UPDO"],
      ["SAUERKRAUT", "WALLET", "BLUES", "BRAT"],
    ],
  },
  {
    id: "436",
    name: "Connections #436",
    createdAt: "2024-08-20T00:00:00.000Z",
    board: {
      "RUSH OF WIND": { level: 0, members: ["BLOW", "DRAFT", "GUST", "PUFF"] },
      ROTATE: { level: 1, members: ["CRANK", "REEL", "TURN", "WIND"] },
      "ZODIAC SYMBOLS": { level: 2, members: ["BULL", "CRAB", "LION", "RAM"] },
      "DR. SEUSS TITLE FIGURES": {
        level: 3,
        members: ["CAT", "GRINCH", "POP", "TURTLE"],
      },
    },
    startingBoard: [
      ["CAT", "CRANK", "BLOW", "POP"],
      ["LION", "GRINCH", "WIND", "TURTLE"],
      ["CRAB", "REEL", "DRAFT", "RAM"],
      ["PUFF", "BULL", "TURN", "GUST"],
    ],
  },
  {
    id: "437",
    name: "Connections #437",
    createdAt: "2024-08-21T00:00:00.000Z",
    board: {
      "COVER WITH A THICK LAYER": {
        level: 0,
        members: ["CAKE", "COAT", "PLASTER", "SMEAR"],
      },
      "THINGS THAT ARE INFLATED": {
        level: 1,
        members: ["BALLOON", "BASKETBALL", "FLOATIE", "TIRE"],
      },
      "KINDS OF CHARTS": {
        level: 2,
        members: ["BAR", "BUBBLE", "LINE", "PIE"],
      },
      "CLASSIC COCKTAIL TYPES": {
        level: 3,
        members: ["FIZZ", "PUNCH", "SLING", "SOUR"],
      },
    },
    startingBoard: [
      ["BALLOON", "BAR", "CAKE", "FIZZ"],
      ["PIE", "BUBBLE", "TIRE", "COAT"],
      ["SLING", "SMEAR", "PUNCH", "LINE"],
      ["FLOATIE", "SOUR", "PLASTER", "BASKETBALL"],
    ],
  },
  {
    id: "438",
    name: "Connections #438",
    createdAt: "2024-08-22T00:00:00.000Z",
    board: {
      "CLASSIC MOVIE THEATER EQUIPMENT": {
        level: 0,
        members: ["PROJECTOR", "REEL", "SCREEN", "SPEAKER"],
      },
      TIER: { level: 1, members: ["DECK", "FLOOR", "LEVEL", "STORY"] },
      "NEWSPAPER NAMES": {
        level: 2,
        members: ["GLOBE", "MIRROR", "POST", "SUN"],
      },
      "PRANK VERBS": {
        level: 3,
        members: ["EGG", "MOON", "STREAK", "TOILET PAPER"],
      },
    },
    startingBoard: [
      ["EGG", "STORY", "SUN", "SCREEN"],
      ["MOON", "REEL", "STREAK", "POST"],
      ["GLOBE", "DECK", "SPEAKER", "FLOOR"],
      ["TOILET PAPER", "MIRROR", "LEVEL", "PROJECTOR"],
    ],
  },
  {
    id: "439",
    name: "Connections #439",
    createdAt: "2024-08-23T00:00:00.000Z",
    board: {
      "VISUAL INTERFACE": {
        level: 0,
        members: ["DISPLAY", "MONITOR", "SCREEN", "TERMINAL"],
      },
      "BURLESQUE WEAR": {
        level: 1,
        members: ["BOA", "CORSET", "FAN", "GLOVES"],
      },
      "BEIGE SHADES": { level: 2, members: ["BUFF", "CREAM", "FAWN", "TAN"] },
      "LANGUAGE HOMOPHONES": {
        level: 3,
        members: ["BASK", "CHECK", "FINISH", "TIE"],
      },
    },
    startingBoard: [
      ["TIE", "TAN", "FAN", "FAWN"],
      ["CHECK", "FINISH", "MONITOR", "BUFF"],
      ["BOA", "SCREEN", "CREAM", "BASK"],
      ["TERMINAL", "CORSET", "DISPLAY", "GLOVES"],
    ],
  },
  {
    id: "440",
    name: "Connections #440",
    createdAt: "2024-08-24T00:00:00.000Z",
    board: {
      HEARSAY: {
        level: 0,
        members: ["RUMBLING", "SPECULATION", "TALK", "WHISPERS"],
      },
      "MOVE STEALTHILY": {
        level: 1,
        members: ["CREEP", "SLIP", "STEAL", "TIPTOE"],
      },
      "CAR RENTAL COMPANIES": {
        level: 2,
        members: ["BUDGET", "ENTERPRISE", "NATIONAL", "THRIFTY"],
      },
      "ENDING WITH CHEMICAL ELEMENTS": {
        level: 3,
        members: ["ENVIRON", "JARGON", "LATIN", "PLEAD"],
      },
    },
    startingBoard: [
      ["NATIONAL", "TALK", "SLIP", "LATIN"],
      ["JARGON", "STEAL", "BUDGET", "TIPTOE"],
      ["WHISPERS", "ENVIRON", "PLEAD", "ENTERPRISE"],
      ["CREEP", "SPECULATION", "THRIFTY", "RUMBLING"],
    ],
  },
  {
    id: "441",
    name: "Connections #441",
    createdAt: "2024-08-25T00:00:00.000Z",
    board: {
      "HOPPING MAD": {
        level: 0,
        members: ["BOILING", "FUMING", "LIVID", "STEAMING"],
      },
      STATUS: {
        level: 1,
        members: ["POSITION", "RANKING", "STANDING", "STATION"],
      },
      "WORDS THAT MAKE UP THE ACRONYM “HVAC”": {
        level: 2,
        members: ["AIR", "CONDITIONING", "HEATING", "VENTILATION"],
      },
      "ACTIVITIES THAT INVOLVE FOLDING": {
        level: 3,
        members: ["BAKING", "LAUNDRY", "ORIGAMI", "POKER"],
      },
    },
    startingBoard: [
      ["STEAMING", "POKER", "AIR", "BAKING"],
      ["LAUNDRY", "RANKING", "BOILING", "STATION"],
      ["HEATING", "ORIGAMI", "POSITION", "FUMING"],
      ["STANDING", "VENTILATION", "LIVID", "CONDITIONING"],
    ],
  },
  {
    id: "442",
    name: "Connections #442",
    createdAt: "2024-08-26T00:00:00.000Z",
    board: {
      "OFFICIAL SANCTIONING": {
        level: 0,
        members: ["APPROVAL", "BLESSING", "CONSENT", "SUPPORT"],
      },
      "TORUS-SHAPED THINGS": {
        level: 1,
        members: ["BAGEL", "LIFESAVER", "TIRE", "WREATH"],
      },
      "BAD GOLF SHOTS": {
        level: 2,
        members: ["HOOK", "SHANK", "SLICE", "WHIFF"],
      },
      "FOOTWEAR MINUS “ER” SOUND": {
        level: 3,
        members: ["LOAF", "SLIP", "SNEAK", "WADE"],
      },
    },
    startingBoard: [
      ["SLICE", "SNEAK", "TIRE", "SUPPORT"],
      ["BAGEL", "SLIP", "LOAF", "WHIFF"],
      ["BLESSING", "WADE", "LIFESAVER", "CONSENT"],
      ["WREATH", "HOOK", "APPROVAL", "SHANK"],
    ],
  },
  {
    id: "443",
    name: "Connections #443",
    createdAt: "2024-08-27T00:00:00.000Z",
    board: {
      "EXPLOSIVE SOUND": {
        level: 0,
        members: ["BOOM", "CRASH", "ROAR", "THUNDER"],
      },
      "CHILI PEPPER QUALITY": {
        level: 1,
        members: ["FIRE", "HEAT", "KICK", "SPICE"],
      },
      "CLASSIC BARBERSHOP SUPPLIES": {
        level: 2,
        members: ["BRUSH", "CAPE", "CLIPPERS", "GEL"],
      },
      "KINDS OF CARDS": {
        level: 3,
        members: ["BASEBALL", "MAGIC", "SET", "TAROT"],
      },
    },
    startingBoard: [
      ["KICK", "THUNDER", "BRUSH", "HEAT"],
      ["GEL", "SET", "MAGIC", "FIRE"],
      ["CLIPPERS", "ROAR", "CAPE", "TAROT"],
      ["BOOM", "SPICE", "BASEBALL", "CRASH"],
    ],
  },
  {
    id: "444",
    name: "Connections #444",
    createdAt: "2024-08-28T00:00:00.000Z",
    board: {
      "PLAYGROUND EQUIPMENT": {
        level: 0,
        members: ["MONKEY BARS", "SLIDE", "SWINGS", "TEETER-TOTTER"],
      },
      "FOUND AT THE END OF A STRING/CORD": {
        level: 1,
        members: ["PENDULUM", "TEA BAG", "TETHERBALL", "YO-YO"],
      },
      "DESCRIBED AS DRY": {
        level: 2,
        members: ["DESERT", "HUMOR", "MARTINI", "TEETOTALER"],
      },
      "BABY ___": { level: 3, members: ["BLUES", "BOOMER", "STEPS", "TEETH"] },
    },
    startingBoard: [
      ["MARTINI", "TEETH", "HUMOR", "PENDULUM"],
      ["STEPS", "TEA BAG", "MONKEY BARS", "TETHERBALL"],
      ["TEETOTALER", "SLIDE", "BOOMER", "DESERT"],
      ["SWINGS", "YO-YO", "TEETER-TOTTER", "BLUES"],
    ],
  },
  {
    id: "445",
    name: "Connections #445",
    createdAt: "2024-08-29T00:00:00.000Z",
    board: {
      "KINDS OF PIANOS": {
        level: 0,
        members: ["ELECTRONIC", "GRAND", "PLAYER", "UPRIGHT"],
      },
      DEEM: { level: 1, members: ["CONSIDER", "COUNT", "JUDGE", "REGARD"] },
      "U.S. COLLEGES/UNIVERSITIES": {
        level: 2,
        members: ["BROWN", "DUKE", "HOWARD", "SMITH"],
      },
      "SECOND NAMES IN COMPANIES WITH AMPERSANDS": {
        level: 3,
        members: ["GAMBLE", "JOHNSON", "NOBLE", "YOUNG"],
      },
    },
    startingBoard: [
      ["PLAYER", "GAMBLE", "BROWN", "YOUNG"],
      ["COUNT", "SMITH", "NOBLE", "DUKE"],
      ["UPRIGHT", "CONSIDER", "GRAND", "JUDGE"],
      ["ELECTRONIC", "REGARD", "HOWARD", "JOHNSON"],
    ],
  },
  {
    id: "446",
    name: "Connections #446",
    createdAt: "2024-08-30T00:00:00.000Z",
    board: {
      "SPARKLING THINGS": {
        level: 0,
        members: ["DIAMOND", "GLITTER", "GOLD", "SEQUIN"],
      },
      "PARTICIPATE IN SUMMER OLYMPIC EVENTS": {
        level: 1,
        members: ["BOX", "DIVE", "FENCE", "ROW"],
      },
      "WONDERS OF THE WORLD": {
        level: 2,
        members: ["GARDENS", "LIGHTHOUSE", "PYRAMID", "TEMPLE"],
      },
      "ICE ___": { level: 3, members: ["CREAM", "CUBE", "MACHINE", "STORM"] },
    },
    startingBoard: [
      ["GOLD", "CUBE", "TEMPLE", "FENCE"],
      ["MACHINE", "BOX", "SEQUIN", "CREAM"],
      ["DIAMOND", "LIGHTHOUSE", "ROW", "PYRAMID"],
      ["DIVE", "STORM", "GLITTER", "GARDENS"],
    ],
  },
  {
    id: "447",
    name: "Connections #447",
    createdAt: "2024-08-31T00:00:00.000Z",
    board: {
      "NEWSPAPER SECTIONS": {
        level: 0,
        members: ["ARTS", "BUSINESS", "COMICS", "SPORTS"],
      },
      "TREE FEATURES": {
        level: 1,
        members: ["BARK", "CROWN", "RINGS", "ROOTS"],
      },
      "KINDS OF SALAD": {
        level: 2,
        members: ["CHEF", "GARDEN", "GREEK", "WEDGE"],
      },
      "SEEN ON BACKS OF U.S. COINS": {
        level: 3,
        members: ["EAGLE", "MONTICELLO", "SHIELD", "TORCH"],
      },
    },
    startingBoard: [
      ["GREEK", "CHEF", "CROWN", "SPORTS"],
      ["MONTICELLO", "RINGS", "GARDEN", "EAGLE"],
      ["BUSINESS", "ROOTS", "TORCH", "WEDGE"],
      ["BARK", "ARTS", "SHIELD", "COMICS"],
    ],
  },
  {
    id: "448",
    name: "Connections #448",
    createdAt: "2024-09-01T00:00:00.000Z",
    board: {
      "COOK IN A PAN": {
        level: 0,
        members: ["BROWN", "CHAR", "GRILL", "SEAR"],
      },
      "PARTS OF THE EAR": {
        level: 1,
        members: ["ANVIL", "CANAL", "DRUM", "HAMMER"],
      },
      "SHADES OF BLACK": {
        level: 2,
        members: ["CHARCOAL", "JET", "RAVEN", "SABLE"],
      },
      "WHERE YOU MIGHT FIND “A DRIVER”": {
        level: 3,
        members: ["GOLF BAG", "LIMOUSINE", "MOVIE SET", "TOOLBOX"],
      },
    },
    startingBoard: [
      ["CHARCOAL", "HAMMER", "GOLF BAG", "GRILL"],
      ["TOOLBOX", "RAVEN", "LIMOUSINE", "JET"],
      ["BROWN", "DRUM", "SABLE", "CHAR"],
      ["ANVIL", "MOVIE SET", "SEAR", "CANAL"],
    ],
  },
  {
    id: "449",
    name: "Connections #449",
    createdAt: "2024-09-02T00:00:00.000Z",
    board: {
      PECULIAR: { level: 0, members: ["CURIOUS", "FUNNY", "OFF", "WEIRD"] },
      ASSIGNMENT: { level: 1, members: ["JOB", "POSITION", "POST", "STATION"] },
      "CLASSIC COLLECTION ITEMS": {
        level: 2,
        members: ["COIN", "COMIC", "RECORD", "STAMP"],
      },
      "CHAIN ___": {
        level: 3,
        members: ["LETTER", "MAIL", "REACTION", "STORE"],
      },
    },
    startingBoard: [
      ["RECORD", "STORE", "WEIRD", "REACTION"],
      ["STAMP", "STATION", "LETTER", "COMIC"],
      ["FUNNY", "MAIL", "COIN", "POST"],
      ["OFF", "POSITION", "CURIOUS", "JOB"],
    ],
  },
  {
    id: "450",
    name: "Connections #450",
    createdAt: "2024-09-03T00:00:00.000Z",
    board: {
      ABSOLVE: { level: 0, members: ["EXCUSE", "PARDON", "SAVE", "SPARE"] },
      EXCESSIVELY: { level: 1, members: ["BEYOND", "EXTRA", "OVER", "TOO"] },
      "GLOBAL CURRENCIES": {
        level: 2,
        members: ["POUND", "REAL", "WON", "YEN"],
      },
      ___HEAD: { level: 3, members: ["ARROW", "BLOCK", "FORE", "KNUCKLE"] },
    },
    startingBoard: [
      ["TOO", "REAL", "FORE", "SPARE"],
      ["WON", "ARROW", "EXTRA", "POUND"],
      ["KNUCKLE", "EXCUSE", "OVER", "BLOCK"],
      ["SAVE", "BEYOND", "PARDON", "YEN"],
    ],
  },
  {
    id: "451",
    name: "Connections #451",
    createdAt: "2024-09-04T00:00:00.000Z",
    board: {
      "VERY SMALL AMOUNT": {
        level: 0,
        members: ["HINT", "TOUCH", "TRACE", "SHRED"],
      },
      "PUPPY PURCHASES": {
        level: 1,
        members: ["BED", "BOWL", "COLLAR", "CRATE"],
      },
      "HELP PUT ON A PARTY": {
        level: 2,
        members: ["CATER", "HOST", "THROW", "PLAN"],
      },
      "SYMBOLS ON A KEYBOARD": {
        level: 3,
        members: ["BRACE", "CARET", "HASH", "STAR"],
      },
    },
    startingBoard: [
      ["CATER", "BOWL", "THROW", "STAR"],
      ["CARET", "TRACE", "CRATE", "HASH"],
      ["SHRED", "BED", "BRACE", "TOUCH"],
      ["PLAN", "HINT", "COLLAR", "HOST"],
    ],
  },
  {
    id: "452",
    name: "Connections #452",
    createdAt: "2024-09-05T00:00:00.000Z",
    board: {
      "HAIR SALON OFFERINGS": {
        level: 0,
        members: ["BLOWOUT", "COLOR", "CUT", "TRIM"],
      },
      CRITICIZE: { level: 1, members: ["BASH", "BLAST", "PAN", "SLAM"] },
      OBTAIN: { level: 2, members: ["BAG", "LAND", "SCORE", "SNAG"] },
      "MEASURED IN FOOTBALL STATS": {
        level: 3,
        members: ["ATTEMPT", "RECEPTION", "SACK", "YARD"],
      },
    },
    startingBoard: [
      ["BASH", "BAG", "COLOR", "SACK"],
      ["RECEPTION", "BLOWOUT", "LAND", "PAN"],
      ["CUT", "BLAST", "YARD", "SCORE"],
      ["SLAM", "SNAG", "TRIM", "ATTEMPT"],
    ],
  },
  {
    id: "453",
    name: "Connections #453",
    createdAt: "2024-09-06T00:00:00.000Z",
    board: {
      QUANTITY: { level: 0, members: ["AMOUNT", "COUNT", "NUMBER", "TOTAL"] },
      INCIDENT: { level: 1, members: ["AFFAIR", "EPISODE", "EVENT", "MATTER"] },
      "THINGS RECEIVED IN THE MAIL": {
        level: 2,
        members: ["BILL", "CARD", "CATALOG", "LETTER"],
      },
      "WHAT “SPRING” MIGHT REFER TO": {
        level: 3,
        members: ["BOUNCE", "COIL", "GEYSER", "SEASON"],
      },
    },
    startingBoard: [
      ["CATALOG", "EPISODE", "LETTER", "COIL"],
      ["COUNT", "SEASON", "MATTER", "NUMBER"],
      ["BOUNCE", "BILL", "GEYSER", "AFFAIR"],
      ["TOTAL", "EVENT", "CARD", "AMOUNT"],
    ],
  },
  {
    id: "454",
    name: "Connections #454",
    createdAt: "2024-09-07T00:00:00.000Z",
    board: {
      "WAYS TO TRANSFORM AN IMAGE": {
        level: 0,
        members: ["CROP", "FLIP", "ROTATE", "SCALE"],
      },
      "THINGS USED IN GOLF": {
        level: 1,
        members: ["BALL", "DRIVER", "GLOVE", "TEE"],
      },
      "AQUARIUM PURCHASES": {
        level: 2,
        members: ["FILTER", "PUMP", "ROCKS", "TANK"],
      },
      "LOGOS WITH HORSES": {
        level: 3,
        members: ["COACH", "GODIVA", "MUSTANG", "POLO"],
      },
    },
    startingBoard: [
      ["TANK", "GLOVE", "SCALE", "TEE"],
      ["COACH", "ROCKS", "POLO", "CROP"],
      ["FILTER", "BALL", "ROTATE", "MUSTANG"],
      ["GODIVA", "FLIP", "PUMP", "DRIVER"],
    ],
  },
  {
    id: "455",
    name: "Connections #455",
    createdAt: "2024-09-08T00:00:00.000Z",
    board: {
      "VERBS IN A CAKE RECIPE": {
        level: 0,
        members: ["BAKE", "BEAT", "FROST", "PREHEAT"],
      },
      "WHAT A HEART DOES WHEN EXCITED": {
        level: 1,
        members: ["POUND", "PUMP", "RACE", "THROB"],
      },
      "ECCLESIASTICAL TITLES": {
        level: 2,
        members: ["BISHOP", "PASTOR", "PRIOR", "POPE"],
      },
      "___ BOYS": { level: 3, members: ["BAD", "BEACH", "HARDY", "PET SHOP"] },
    },
    startingBoard: [
      ["FROST", "BEACH", "PUMP", "POPE"],
      ["RACE", "BISHOP", "PET SHOP", "POUND"],
      ["HARDY", "BEAT", "PRIOR", "BAKE"],
      ["THROB", "BAD", "PREHEAT", "PASTOR"],
    ],
  },
  {
    id: "456",
    name: "Connections #456",
    createdAt: "2024-09-09T00:00:00.000Z",
    board: {
      "GET RED IN THE FACE": {
        level: 0,
        members: ["BLUSH", "BURN", "FLUSH", "GLOW"],
      },
      CONTINUOUS: {
        level: 1,
        members: ["CONSECUTIVE", "NONSTOP", "SOLID", "STRAIGHT"],
      },
      "FLAVOR ASSORTMENT": {
        level: 2,
        members: ["FLIGHT", "PLATTER", "SAMPLER", "TASTING"],
      },
      SITCOMS: {
        level: 3,
        members: ["BLOSSOM", "COACH", "COMMUNITY", "FULL HOUSE"],
      },
    },
    startingBoard: [
      ["COACH", "FLUSH", "NONSTOP", "FLIGHT"],
      ["SOLID", "PLATTER", "FULL HOUSE", "GLOW"],
      ["BURN", "STRAIGHT", "SAMPLER", "BLOSSOM"],
      ["COMMUNITY", "TASTING", "CONSECUTIVE", "BLUSH"],
    ],
  },
  {
    id: "457",
    name: "Connections #457",
    createdAt: "2024-09-10T00:00:00.000Z",
    board: {
      VARIETIES: { level: 0, members: ["KINDS", "SORTS", "STRIPES", "TYPES"] },
      TRANSFER: { level: 1, members: ["DELIVER", "HAND", "GIVE", "PASS"] },
      "RATINGS SYSTEMS": {
        level: 2,
        members: ["A-F", "PERCENTAGE", "STARS", "THUMBS"],
      },
      "THINGS WITH KINGS": {
        level: 3,
        members: ["CHECKERS", "DECK OF CARDS", "MONARCHY", "NHL"],
      },
    },
    startingBoard: [
      ["STARS", "STRIPES", "HAND", "DELIVER"],
      ["SORTS", "DECK OF CARDS", "THUMBS", "MONARCHY"],
      ["PASS", "TYPES", "NHL", "A-F"],
      ["PERCENTAGE", "CHECKERS", "GIVE", "KINDS"],
    ],
  },
  {
    id: "458",
    name: "Connections #458",
    createdAt: "2024-09-11T00:00:00.000Z",
    board: {
      "LARGE AMOUNT OF MONEY": {
        level: 0,
        members: ["BUNDLE", "FORTUNE", "MINT", "PILE"],
      },
      "BITS OF WISDOM": {
        level: 1,
        members: ["KERNEL", "NUGGET", "PEARL", "TIDBIT"],
      },
      "FEATURED IN “JURASSIC PARK”": {
        level: 2,
        members: ["AMBER", "DINOSAUR", "PALEONTOLOGIST", "MOSQUITO"],
      },
      "THINGS THAT ARE PURPLE": {
        level: 3,
        members: ["AMETHYST", "EGGPLANT", "GRIMACE", "LAVENDER"],
      },
    },
    startingBoard: [
      ["DINOSAUR", "PEARL", "EGGPLANT", "MINT"],
      ["LAVENDER", "AMBER", "NUGGET", "PILE"],
      ["TIDBIT", "AMETHYST", "FORTUNE", "MOSQUITO"],
      ["BUNDLE", "PALEONTOLOGIST", "GRIMACE", "KERNEL"],
    ],
  },
  {
    id: "459",
    name: "Connections #459",
    createdAt: "2024-09-12T00:00:00.000Z",
    board: {
      "MARK ONLINE FOR LATER": {
        level: 0,
        members: ["BOOKMARK", "FAVORITE", "LIKE", "SAVE"],
      },
      BEHALF: {
        level: 1,
        members: ["ADVANTAGE", "BENEFIT", "INTEREST", "SAKE"],
      },
      "NBA LEGENDS, FAMILIARLY": {
        level: 2,
        members: ["BIRD", "CURRY", "KOBE", "MAGIC"],
      },
      "ENDING WITH GREEK LETTERS": {
        level: 3,
        members: ["BIOTA", "FETA", "MOCHI", "PEPSI"],
      },
    },
    startingBoard: [
      ["SAKE", "SAVE", "PEPSI", "MOCHI"],
      ["CURRY", "FETA", "BIRD", "BIOTA"],
      ["LIKE", "MAGIC", "ADVANTAGE", "KOBE"],
      ["FAVORITE", "INTEREST", "BOOKMARK", "BENEFIT"],
    ],
  },
  {
    id: "460",
    name: "Connections #460",
    createdAt: "2024-09-13T00:00:00.000Z",
    board: {
      VITALITY: { level: 0, members: ["ENERGY", "JUICE", "LIFE", "ZIP"] },
      "PALINDROMES FEATURING “E”": {
        level: 1,
        members: ["LEVEL", "PEP", "REFER", "TENET"],
      },
      "FEATURED IN “JACK AND THE BEANSTALK”": {
        level: 2,
        members: ["BEANS", "COW", "GIANT", "JACK"],
      },
      "CAR MODELS": { level: 3, members: ["BEETLE", "CIVIC", "FOCUS", "VOLT"] },
    },
    startingBoard: [
      ["BEETLE", "JUICE", "ENERGY", "LEVEL"],
      ["COW", "PEP", "FOCUS", "BEANS"],
      ["ZIP", "JACK", "LIFE", "TENET"],
      ["GIANT", "VOLT", "CIVIC", "REFER"],
    ],
  },
  {
    id: "461",
    name: "Connections #461",
    createdAt: "2024-09-14T00:00:00.000Z",
    board: {
      "WINE BOTTLE INFO": {
        level: 0,
        members: ["GRAPE", "REGION", "VINTAGE", "WINERY"],
      },
      "CONSOLE INPUTS": {
        level: 1,
        members: ["BUTTON", "KNOB", "SLIDER", "SWITCH"],
      },
      PREFIXES: { level: 2, members: ["PRO", "RETRO", "SUB", "SUPER"] },
      "___ KING": {
        level: 3,
        members: ["BURGER", "CALIFORNIA", "LION", "PROM"],
      },
    },
    startingBoard: [
      ["LION", "SWITCH", "RETRO", "BURGER"],
      ["VINTAGE", "SUB", "PROM", "SLIDER"],
      ["SUPER", "GRAPE", "BUTTON", "CALIFORNIA"],
      ["REGION", "KNOB", "PRO", "WINERY"],
    ],
  },
  {
    id: "462",
    name: "Connections #462",
    createdAt: "2024-09-15T00:00:00.000Z",
    board: {
      RESIDE: { level: 0, members: ["DWELL", "INHABIT", "LIVE", "STAY"] },
      DECREASE: { level: 1, members: ["DECLINE", "DROP", "DWINDLE", "EBB"] },
      DOOFUS: { level: 2, members: ["CLOWN", "DWEEB", "SAP", "TURKEY"] },
      "MEMBER OF A SEPTET": {
        level: 3,
        members: ["DWARF", "SEA", "SIN", "WONDER"],
      },
    },
    startingBoard: [
      ["CLOWN", "DWELL", "TURKEY", "SEA"],
      ["WONDER", "SAP", "DWINDLE", "STAY"],
      ["DECLINE", "DWEEB", "EBB", "LIVE"],
      ["SIN", "INHABIT", "DWARF", "DROP"],
    ],
  },
  {
    id: "463",
    name: "Connections #463",
    createdAt: "2024-09-16T00:00:00.000Z",
    board: {
      FOREMOST: {
        level: 0,
        members: ["CHIEF", "PREMIER", "PRINCIPAL", "SUPREME"],
      },
      "SPIKY THINGS": {
        level: 1,
        members: ["CACTUS", "HEDGEHOG", "MACE", "PINEAPPLE"],
      },
      "OVERLY SENTIMENTAL WORK": {
        level: 2,
        members: ["CHEESE", "CORN", "MUSH", "PAP"],
      },
      "THINGS THAT ARE CAPPED": {
        level: 3,
        members: ["BOTTLE", "GRADUATE", "MUSHROOM", "SALARY"],
      },
    },
    startingBoard: [
      ["CACTUS", "BOTTLE", "MUSHROOM", "CHEESE"],
      ["SUPREME", "GRADUATE", "HEDGEHOG", "PINEAPPLE"],
      ["CORN", "SALARY", "PAP", "PRINCIPAL"],
      ["CHIEF", "MACE", "PREMIER", "MUSH"],
    ],
  },
  {
    id: "464",
    name: "Connections #464",
    createdAt: "2024-09-17T00:00:00.000Z",
    board: {
      'GET EXCITED, WITH "UP"': {
        level: 0,
        members: ["AMP", "FIRE", "HYPE", "PSYCH"],
      },
      "KINDS OF SHOES": {
        level: 1,
        members: ["FLAT", "MULE", "PUMP", "SLIDE"],
      },
      "LEGISLATIVE ROLES": {
        level: 2,
        members: ["CHAIR", "LEADER", "SPEAKER", "WHIP"],
      },
      "NAME HOMOPHONES": { level: 3, members: ["DUG", "MATTE", "MIC", "PEAT"] },
    },
    startingBoard: [
      ["PUMP", "SPEAKER", "FIRE", "MATTE"],
      ["MIC", "CHAIR", "FLAT", "AMP"],
      ["WHIP", "DUG", "HYPE", "SLIDE"],
      ["PEAT", "PSYCH", "MULE", "LEADER"],
    ],
  },
  {
    id: "465",
    name: "Connections #465",
    createdAt: "2024-09-18T00:00:00.000Z",
    board: {
      "GATHERING SPOT OUTSIDE A RESIDENCE": {
        level: 0,
        members: ["DECK", "PORCH", "STOOP", "YARD"],
      },
      LOWDOWN: { level: 1, members: ["DISH", "DOPE", "INFO", "SCOOP"] },
      "KINDS OF REELS": {
        level: 2,
        members: ["BLOOPER", "DEMO", "HIGHLIGHT", "SIZZLE"],
      },
      "CARTOON DOGS MINUS “Y”": {
        level: 3,
        members: ["DROOP", "GOOF", "LAD", "SNOOP"],
      },
    },
    startingBoard: [
      ["DROOP", "DEMO", "STOOP", "GOOF"],
      ["BLOOPER", "SNOOP", "DOPE", "SCOOP"],
      ["DECK", "DISH", "HIGHLIGHT", "LAD"],
      ["SIZZLE", "YARD", "INFO", "PORCH"],
    ],
  },
  {
    id: "466",
    name: "Connections #466",
    createdAt: "2024-09-19T00:00:00.000Z",
    board: {
      "PREFIX MEANING “VERY”": {
        level: 0,
        members: ["EXTRA", "HYPER", "OVER", "SUPER"],
      },
      "KINDS OF PARTIES": {
        level: 1,
        members: ["BIRTHDAY", "COCKTAIL", "DINNER", "SURPRISE"],
      },
      "PBS SHOWS": {
        level: 2,
        members: ["FRONTLINE", "NATURE", "NOVA", "MASTERPIECE"],
      },
      "PLACES IN FRANCE": {
        level: 3,
        members: ["ANGERS", "CHAMPAGNE", "NICE", "REUNION"],
      },
    },
    startingBoard: [
      ["CHAMPAGNE", "SUPER", "NOVA", "REUNION"],
      ["BIRTHDAY", "NATURE", "NICE", "COCKTAIL"],
      ["ANGERS", "EXTRA", "SURPRISE", "MASTERPIECE"],
      ["HYPER", "FRONTLINE", "OVER", "DINNER"],
    ],
  },
  {
    id: "467",
    name: "Connections #467",
    createdAt: "2024-09-20T00:00:00.000Z",
    board: {
      PRESUME: { level: 0, members: ["FIGURE", "IMAGINE", "SUSPECT", "THINK"] },
      SOMEBODY: {
        level: 1,
        members: ["CHARACTER", "INDIVIDUAL", "PARTY", "PERSON"],
      },
      'CHARACTERS IN “THE EMPIRE STRIKES BACK," FAMILIARLY': {
        level: 2,
        members: ["BOBA", "CHEWY", "EMPEROR", "SOLO"],
      },
      "WORDS AFTER “KITTY”": {
        level: 3,
        members: ["CAT", "CORNER", "HAWK", "LITTER"],
      },
    },
    startingBoard: [
      ["CAT", "PERSON", "SOLO", "HAWK"],
      ["CHEWY", "FIGURE", "INDIVIDUAL", "CORNER"],
      ["CHARACTER", "BOBA", "IMAGINE", "PARTY"],
      ["SUSPECT", "EMPEROR", "LITTER", "THINK"],
    ],
  },
  {
    id: "468",
    name: "Connections #468",
    createdAt: "2024-09-21T00:00:00.000Z",
    board: {
      CLAIRVOYANT: {
        level: 0,
        members: ["MEDIUM", "MYSTIC", "ORACLE", "PSYCHIC"],
      },
      "SPECIAL EDITION ADJECTIVES": {
        level: 1,
        members: ["COLLECTIBLE", "EXCLUSIVE", "LIMITED", "RARE"],
      },
      "“GREAT JOB!”": {
        level: 2,
        members: ["IMPRESSIVE", "NICE", "PROPS", "WELL DONE"],
      },
      EXTREMELY: { level: 3, members: ["AWFUL", "BLOODY", "REAL", "WAY"] },
    },
    startingBoard: [
      ["REAL", "MEDIUM", "IMPRESSIVE", "EXCLUSIVE"],
      ["NICE", "RARE", "AWFUL", "MYSTIC"],
      ["WAY", "WELL DONE", "BLOODY", "LIMITED"],
      ["ORACLE", "PROPS", "COLLECTIBLE", "PSYCHIC"],
    ],
  },
  {
    id: "469",
    name: "Connections #469",
    createdAt: "2024-09-22T00:00:00.000Z",
    board: {
      "COLOR TYPES": {
        level: 0,
        members: ["GRAYSCALE", "NEON", "NEUTRAL", "PASTEL"],
      },
      "FILE MENU OPTIONS": {
        level: 1,
        members: ["NEW", "OPEN", "PRINT", "SAVE"],
      },
      "CHANCE TO WIN A PRIZE": {
        level: 2,
        members: ["DRAWING", "LOTTERY", "POOL", "RAFFLE"],
      },
      "WHAT “BRONZE” MIGHT MEAN": {
        level: 3,
        members: ["ALLOY", "SCULPTURE", "SUNTAN", "THIRD"],
      },
    },
    startingBoard: [
      ["PASTEL", "POOL", "SUNTAN", "SCULPTURE"],
      ["PRINT", "THIRD", "NEUTRAL", "DRAWING"],
      ["NEW", "ALLOY", "OPEN", "NEON"],
      ["LOTTERY", "SAVE", "GRAYSCALE", "RAFFLE"],
    ],
  },
  {
    id: "470",
    name: "Connections #470",
    createdAt: "2024-09-23T00:00:00.000Z",
    board: {
      "NOT SMOOTH, AS TERRAIN": {
        level: 0,
        members: ["BUMPY", "ROUGH", "RUGGED", "UNEVEN"],
      },
      "BIT OF LAND FOR GROWING": {
        level: 1,
        members: ["BED", "PARCEL", "PATCH", "PLOT"],
      },
      "MEMBER OF A CARTOON DUO": {
        level: 2,
        members: ["CHIP", "ROCKY", "SCRATCHY", "STITCH"],
      },
      "___ PARK": {
        level: 3,
        members: ["AMUSEMENT", "NATIONAL", "PARALLEL", "SOUTH"],
      },
    },
    startingBoard: [
      ["CHIP", "BED", "ROUGH", "PATCH"],
      ["ROCKY", "STITCH", "PARALLEL", "UNEVEN"],
      ["RUGGED", "SOUTH", "AMUSEMENT", "PLOT"],
      ["NATIONAL", "PARCEL", "SCRATCHY", "BUMPY"],
    ],
  },
  {
    id: "471",
    name: "Connections #471",
    createdAt: "2024-09-24T00:00:00.000Z",
    board: {
      INSPIRED: {
        level: 0,
        members: ["CREATIVE", "FRESH", "NOVEL", "ORIGINAL"],
      },
      "PROCURE IN ADVANCE": {
        level: 1,
        members: ["BOOK", "CHARTER", "RESERVE", "SECURE"],
      },
      "BIT OF PARTY DECORATION": {
        level: 2,
        members: ["BALLOON", "BANNER", "CONFETTI", "GARLAND"],
      },
      "ONLINE PERSONALITY": {
        level: 3,
        members: ["AMBASSADOR", "INFLUENCER", "MODEL", "STREAMER"],
      },
    },
    startingBoard: [
      ["BALLOON", "BOOK", "MODEL", "BANNER"],
      ["NOVEL", "AMBASSADOR", "CONFETTI", "STREAMER"],
      ["SECURE", "CREATIVE", "RESERVE", "FRESH"],
      ["ORIGINAL", "GARLAND", "INFLUENCER", "CHARTER"],
    ],
  },
  {
    id: "472",
    name: "Connections #472",
    createdAt: "2024-09-25T00:00:00.000Z",
    board: {
      "TRIO OF SPORTS ACHIEVEMENTS": {
        level: 0,
        members: ["HAT TRICK", "THREEPEAT", "TRIFECTA", "TRIPLE CROWN"],
      },
      "NEEDS FOR PAINTING A ROOM": {
        level: 1,
        members: ["DROP CLOTH", "PAINT", "ROLLER", "TAPE"],
      },
      "FOOD NAMED AFTER CITIES": {
        level: 2,
        members: ["BROIL", "CHEESESTEAK", "SPROUTS", "WINGS"],
      },
      "___ DERBY": {
        level: 3,
        members: ["DEMOLITION", "HOME RUN", "KENTUCKY", "SOAP BOX"],
      },
    },
    startingBoard: [
      ["HAT TRICK", "HOME RUN", "BROIL", "PAINT"],
      ["SOAP BOX", "TRIPLE CROWN", "DROP CLOTH", "WINGS"],
      ["ROLLER", "KENTUCKY", "SPROUTS", "TRIFECTA"],
      ["DEMOLITION", "TAPE", "THREEPEAT", "CHEESESTEAK"],
    ],
  },
  {
    id: "473",
    name: "Connections #473",
    createdAt: "2024-09-26T00:00:00.000Z",
    board: {
      "DECORATIVE EDGE": {
        level: 0,
        members: ["BORDER", "FRILL", "FRINGE", "TRIM"],
      },
      "INCREASE, IN A WAY": {
        level: 1,
        members: ["GROW", "MOUNT", "SWELL", "WAX"],
      },
      "SPECIFICATIONS FOR A BARTENDER": {
        level: 2,
        members: ["DRY", "NEAT", "STRAIGHT", "VIRGIN"],
      },
      "STRING ___": {
        level: 3,
        members: ["BEAN", "BIKINI", "CHEESE", "THEORY"],
      },
    },
    startingBoard: [
      ["SWELL", "FRILL", "BIKINI", "WAX"],
      ["TRIM", "CHEESE", "NEAT", "BORDER"],
      ["GROW", "DRY", "BEAN", "VIRGIN"],
      ["THEORY", "STRAIGHT", "FRINGE", "MOUNT"],
    ],
  },
  {
    id: "474",
    name: "Connections #474",
    createdAt: "2024-09-27T00:00:00.000Z",
    board: {
      "AREA OF HIGH GROUND": {
        level: 0,
        members: ["BANK", "DUNE", "HILL", "MOUND"],
      },
      SIGNIFICANCE: {
        level: 1,
        members: ["GRAVITY", "IMPORT", "SUBSTANCE", "WEIGHT"],
      },
      "ACTIONS IN FANTASY SPORTS": {
        level: 2,
        members: ["BENCH", "DRAFT", "START", "TRADE"],
      },
      "SCI-FI MOVIES, WITH “THE”": {
        level: 3,
        members: ["ABYSS", "FLY", "MATRIX", "THING"],
      },
    },
    startingBoard: [
      ["IMPORT", "THING", "GRAVITY", "START"],
      ["BANK", "TRADE", "MATRIX", "DUNE"],
      ["WEIGHT", "ABYSS", "DRAFT", "MOUND"],
      ["HILL", "BENCH", "FLY", "SUBSTANCE"],
    ],
  },
  {
    id: "475",
    name: "Connections #475",
    createdAt: "2024-09-28T00:00:00.000Z",
    board: {
      COMPOSITE: {
        level: 0,
        members: ["BLEND", "COMPOUND", "CROSS", "HYBRID"],
      },
      EMBED: { level: 1, members: ["LODGE", "PLANT", "STICK", "WEDGE"] },
      "ITEMS IN A MONOPOLY BOX": {
        level: 2,
        members: ["DEED", "HOTEL", "HOUSE", "TOKEN"],
      },
      "___ CONTROL": {
        level: 3,
        members: ["BIRTH", "CRUISE", "QUALITY", "REMOTE"],
      },
    },
    startingBoard: [
      ["QUALITY", "BIRTH", "HOUSE", "PLANT"],
      ["REMOTE", "LODGE", "HYBRID", "COMPOUND"],
      ["CROSS", "CRUISE", "STICK", "HOTEL"],
      ["TOKEN", "BLEND", "WEDGE", "DEED"],
    ],
  },
  {
    id: "476",
    name: "Connections #476",
    createdAt: "2024-09-29T00:00:00.000Z",
    board: {
      "MAKE GOOD ON, AS A PROMISE": {
        level: 0,
        members: ["FULFILL", "HONOR", "KEEP", "UPHOLD"],
      },
      BEDDING: { level: 1, members: ["BLANKET", "SHAM", "SHEET", "THROW"] },
      "ACTIONS IN CARD GAMES": {
        level: 2,
        members: ["DISCARD", "DRAW", "PASS", "PLAY"],
      },
      "CABINET DEPARTMENTS": {
        level: 3,
        members: ["ENERGY", "JUSTICE", "LABOR", "STATE"],
      },
    },
    startingBoard: [
      ["PLAY", "JUSTICE", "THROW", "ENERGY"],
      ["HONOR", "PASS", "KEEP", "SHAM"],
      ["DISCARD", "SHEET", "STATE", "FULFILL"],
      ["BLANKET", "LABOR", "UPHOLD", "DRAW"],
    ],
  },
  {
    id: "477",
    name: "Connections #477",
    createdAt: "2024-09-30T00:00:00.000Z",
    board: {
      "COOK WITH HEAT AND WATER": {
        level: 0,
        members: ["BLANCH", "BOIL", "POACH", "STEAM"],
      },
      "COMMON PERFUME INGREDIENTS": {
        level: 1,
        members: ["AMBERGRIS", "MUSK", "ROSE", "VANILLA"],
      },
      "CHARACTERS WITH PET DOGS": {
        level: 2,
        members: ["CHARLIE", "DOROTHY", "SHAGGY", "WALLACE"],
      },
      "CAPITAL CITY HOMOPHONES": {
        level: 3,
        members: ["KETO", "ROAM", "SOPHIA", "SOUL"],
      },
    },
    startingBoard: [
      ["DOROTHY", "ROAM", "ROSE", "STEAM"],
      ["VANILLA", "SOPHIA", "SHAGGY", "BLANCH"],
      ["CHARLIE", "BOIL", "KETO", "MUSK"],
      ["AMBERGRIS", "WALLACE", "SOUL", "POACH"],
    ],
  },
  {
    id: "478",
    name: "Connections #478",
    createdAt: "2024-10-01T00:00:00.000Z",
    board: {
      "FLUSTERED STATE": {
        level: 0,
        members: ["LATHER", "STEW", "SWEAT", "TIZZY"],
      },
      FITNESS: { level: 1, members: ["CONDITION", "FORM", "HEALTH", "SHAPE"] },
      "FAST-MOVING WATER": {
        level: 2,
        members: ["CASCADE", "CURRENT", "RAPID", "WAVE"],
      },
      "DISHWASHER CYCLES": {
        level: 3,
        members: ["NORMAL", "QUICK", "RINSE", "SANITIZE"],
      },
    },
    startingBoard: [
      ["QUICK", "LATHER", "CURRENT", "CONDITION"],
      ["RAPID", "RINSE", "HEALTH", "SWEAT"],
      ["NORMAL", "WAVE", "FORM", "SANITIZE"],
      ["STEW", "SHAPE", "CASCADE", "TIZZY"],
    ],
  },
  {
    id: "479",
    name: "Connections #479",
    createdAt: "2024-10-02T00:00:00.000Z",
    board: {
      "PUT ON THE LINE": {
        level: 0,
        members: ["BET", "CHANCE", "GAMBLE", "RISK"],
      },
      "USE A KITCHEN KNIFE": {
        level: 1,
        members: ["CUBE", "DICE", "JULIENNE", "SLICE"],
      },
      "ROBERT DE NIRO FILMS": {
        level: 2,
        members: ["CASINO", "HEAT", "JOKER", "TAXI DRIVER"],
      },
      "DISTINCTIVE NUMBER OF ARMS (OR LACK THEREOF)": {
        level: 3,
        members: ["OCTOPUS", "SHIVA", "SLOT MACHINE", "VENUS DE MILO"],
      },
    },
    startingBoard: [
      ["JOKER", "DICE", "CHANCE", "CASINO"],
      ["OCTOPUS", "SLOT MACHINE", "CUBE", "GAMBLE"],
      ["SLICE", "BET", "SHIVA", "JULIENNE"],
      ["HEAT", "VENUS DE MILO", "RISK", "TAXI DRIVER"],
    ],
  },
  {
    id: "480",
    name: "Connections #480",
    createdAt: "2024-10-03T00:00:00.000Z",
    board: {
      BEVERAGES: { level: 0, members: ["JUICE", "MILK", "PUNCH", "SODA"] },
      "CARE FOR A PLANT": {
        level: 1,
        members: ["FERTILIZE", "POT", "PRUNE", "WATER"],
      },
      "ITEM SOLD IN PAIRS": {
        level: 2,
        members: ["BOOKEND", "EARBUD", "SKI", "SOCK"],
      },
      "BUGS PLUS STARTING LETTER": {
        level: 3,
        members: ["BLOUSE", "PANT", "SMITE", "STICK"],
      },
    },
    startingBoard: [
      ["SKI", "PANT", "PRUNE", "JUICE"],
      ["PUNCH", "POT", "MILK", "SMITE"],
      ["SOCK", "BLOUSE", "EARBUD", "WATER"],
      ["STICK", "SODA", "FERTILIZE", "BOOKEND"],
    ],
  },
  {
    id: "481",
    name: "Connections #481",
    createdAt: "2024-10-04T00:00:00.000Z",
    board: {
      CONCAVITY: { level: 0, members: ["DENT", "DIMPLE", "DING", "DIVOT"] },
      "SMALL AMOUNT": { level: 1, members: ["DAB", "DASH", "DOLLOP", "DROP"] },
      "DISNEY CHARACTERS": {
        level: 2,
        members: ["DAISY", "DALE", "DOC", "DORY"],
      },
      "___ DATE": { level: 3, members: ["DELIVERY", "DINNER", "DREAM", "DUE"] },
    },
    startingBoard: [
      ["DROP", "DASH", "DAISY", "DREAM"],
      ["DING", "DOC", "DINNER", "DAB"],
      ["DALE", "DUE", "DIMPLE", "DELIVERY"],
      ["DENT", "DOLLOP", "DORY", "DIVOT"],
    ],
  },
  {
    id: "482",
    name: "Connections #482",
    createdAt: "2024-10-05T00:00:00.000Z",
    board: {
      "STEAK CUTS": {
        level: 0,
        members: ["FILET", "HANGER", "SKIRT", "T-BONE"],
      },
      "KINDS OF UNDERWEAR": {
        level: 1,
        members: ["BIKINI", "G-STRING", "HIPSTER", "THONG"],
      },
      "INVOLVED IN A DENTIST VISIT": {
        level: 2,
        members: ["DRILL", "SINK", "TOOTHBRUSH", "X-RAY"],
      },
      "BRANDS THAT HAVE BECOME GENERIC TERMS": {
        level: 3,
        members: ["CHAPSTICK", "JACUZZI", "Q-TIP", "XEROX"],
      },
    },
    startingBoard: [
      ["JACUZZI", "BIKINI", "HANGER", "X-RAY"],
      ["Q-TIP", "TOOTHBRUSH", "G-STRING", "CHAPSTICK"],
      ["T-BONE", "XEROX", "HIPSTER", "SKIRT"],
      ["DRILL", "FILET", "SINK", "THONG"],
    ],
  },
  {
    id: "483",
    name: "Connections #483",
    createdAt: "2024-10-06T00:00:00.000Z",
    board: {
      "TURN TAIL": {
        level: 0,
        members: ["FLEE", "LEAVE", "RETREAT", "WITHDRAW"],
      },
      "THINGS CATS DO": {
        level: 1,
        members: ["KNEAD", "PURR", "SCRATCH", "SHED"],
      },
      "PAGES ON A WEBSITE": {
        level: 2,
        members: ["ABOUT", "CONTACT", "HOME", "LOGIN"],
      },
      "___ CHEESE": {
        level: 3,
        members: ["COTTAGE", "CREAM", "GOAT", "STRING"],
      },
    },
    startingBoard: [
      ["SHED", "CREAM", "RETREAT", "ABOUT"],
      ["COTTAGE", "LOGIN", "HOME", "SCRATCH"],
      ["KNEAD", "GOAT", "LEAVE", "STRING"],
      ["FLEE", "PURR", "CONTACT", "WITHDRAW"],
    ],
  },
  {
    id: "484",
    name: "Connections #484",
    createdAt: "2024-10-07T00:00:00.000Z",
    board: {
      KNUCKLEHEAD: {
        level: 0,
        members: ["DING-DONG", "DODO", "YAHOO", "YO-YO"],
      },
      "CAR ONOMATOPOEIA": {
        level: 1,
        members: ["BEEP BEEP", "PURR", "SKRRT", "VROOM"],
      },
      "SOUNDS OF LAUGHTER": {
        level: 2,
        members: ["HAR-HAR", "HOOT", "WHOOP", "YUK"],
      },
      "FAMOUS PRIMATES": {
        level: 3,
        members: ["BUBBLES", "GEORGE", "KING KONG", "KOKO"],
      },
    },
    startingBoard: [
      ["KING KONG", "WHOOP", "BEEP BEEP", "YAHOO"],
      ["DING-DONG", "HAR-HAR", "KOKO", "HOOT"],
      ["SKRRT", "BUBBLES", "DODO", "PURR"],
      ["YUK", "YO-YO", "VROOM", "GEORGE"],
    ],
  },
  {
    id: "485",
    name: "Connections #485",
    createdAt: "2024-10-08T00:00:00.000Z",
    board: {
      "HALLOWEEN SYMBOLS": {
        level: 0,
        members: ["BAT", "PUMPKIN", "SPIDER", "WITCH"],
      },
      PROHIBIT: { level: 1, members: ["BAN", "BLOCK", "DENY", "FORBID"] },
      "FOUND ON SHEET MUSIC": {
        level: 2,
        members: ["ACCIDENTAL", "NOTE", "REST", "STAFF"],
      },
      "CANDY ___": { level: 3, members: ["APPLE", "BAR", "CANE", "CORN"] },
    },
    startingBoard: [
      ["CANE", "BLOCK", "ACCIDENTAL", "SPIDER"],
      ["BAR", "STAFF", "APPLE", "NOTE"],
      ["BAT", "BAN", "PUMPKIN", "CORN"],
      ["FORBID", "WITCH", "REST", "DENY"],
    ],
  },
  {
    id: "486",
    name: "Connections #486",
    createdAt: "2024-10-09T00:00:00.000Z",
    board: {
      EFFERVESCENCE: {
        level: 0,
        members: ["BUBBLES", "FIZZ", "FOAM", "FROTH"],
      },
      BURGEON: {
        level: 1,
        members: ["BLOSSOM", "DEVELOP", "MATURE", "PROGRESS"],
      },
      "MUSIC PUBLICATIONS": {
        level: 2,
        members: ["BILLBOARD", "MOJO", "PITCHFORK", "SPIN"],
      },
      "ENDING WITH TABLEWARE": {
        level: 3,
        members: ["BOILERPLATE", "BUTTERCUP", "JACKKNIFE", "WITHERSPOON"],
      },
    },
    startingBoard: [
      ["SPIN", "JACKKNIFE", "BUBBLES", "PROGRESS"],
      ["BUTTERCUP", "FIZZ", "BLOSSOM", "PITCHFORK"],
      ["MOJO", "MATURE", "FOAM", "BOILERPLATE"],
      ["WITHERSPOON", "BILLBOARD", "DEVELOP", "FROTH"],
    ],
  },
  {
    id: "487",
    name: "Connections #487",
    createdAt: "2024-10-10T00:00:00.000Z",
    board: {
      "BODY PARTS": { level: 0, members: ["ARM", "EYE", "HIP", "LEG"] },
      "COOL, IN ’80S SLANG": {
        level: 1,
        members: ["BAD", "FLY", "ILL", "RAD"],
      },
      MOVIES: { level: 2, members: ["BIG", "ELF", "HER", "SAW"] },
      "WORDS IN “DO-RE-MI”": {
        level: 3,
        members: ["DOE", "FAR", "SEW", "TEA"],
      },
    },
    startingBoard: [
      ["HIP", "TEA", "BIG", "BAD"],
      ["EYE", "FLY", "SEW", "SAW"],
      ["ILL", "FAR", "ELF", "LEG"],
      ["HER", "RAD", "ARM", "DOE"],
    ],
  },
  {
    id: "488",
    name: "Connections #488",
    createdAt: "2024-10-11T00:00:00.000Z",
    board: {
      CHERISH: { level: 0, members: ["RELISH", "SAVOR", "TREASURE", "VALUE"] },
      "QUICK JUMP IN THE POOL": {
        level: 1,
        members: ["DIP", "DIVE", "SPLASH", "SWIM"],
      },
      "ADDITIONAL BENEFIT": {
        level: 2,
        members: ["BONUS", "EXTRA", "FROSTING", "GRAVY"],
      },
      BRASHNESS: { level: 3, members: ["BRASS", "CHEEK", "NERVE", "SAUCE"] },
    },
    startingBoard: [
      ["NERVE", "SPLASH", "EXTRA", "RELISH"],
      ["GRAVY", "TREASURE", "SAUCE", "DIP"],
      ["DIVE", "BONUS", "VALUE", "BRASS"],
      ["FROSTING", "CHEEK", "SWIM", "SAVOR"],
    ],
  },
  {
    id: "489",
    name: "Connections #489",
    createdAt: "2024-10-12T00:00:00.000Z",
    board: {
      "DRAPED ACCESSORIES": {
        level: 0,
        members: ["SCARF", "SHAWL", "STOLE", "WRAP"],
      },
      TOLERATE: { level: 1, members: ["BEAR", "STAND", "SWALLOW", "TAKE"] },
      "BIRD ONOMATOPOEIA": {
        level: 2,
        members: ["COO", "GOBBLE", "HONK", "HOOT"],
      },
      "STARTS OF CELL PHONE MAKERS": {
        level: 3,
        members: ["APP", "GOO", "MOTOR", "SAM"],
      },
    },
    startingBoard: [
      ["GOO", "COO", "APP", "WRAP"],
      ["SWALLOW", "MOTOR", "HONK", "BEAR"],
      ["GOBBLE", "SCARF", "STAND", "SAM"],
      ["STOLE", "TAKE", "HOOT", "SHAWL"],
    ],
  },
  {
    id: "490",
    name: "Connections #490",
    createdAt: "2024-10-13T00:00:00.000Z",
    board: {
      "MADE OF KERATIN": {
        level: 0,
        members: ["CLAW", "HOOF", "HORN", "NAIL"],
      },
      "ROAD RUNNER CARTOON STAPLES": {
        level: 1,
        members: ["ANVIL", "BOULDER", "COYOTE", "TNT"],
      },
      "KINDS OF PANTS": {
        level: 2,
        members: ["CAPRI", "CARGO", "HAMMER", "STIRRUP"],
      },
      "___ ROLL": { level: 3, members: ["CALIFORNIA", "DRUM", "EGG", "HONOR"] },
    },
    startingBoard: [
      ["CARGO", "BOULDER", "CLAW", "HAMMER"],
      ["ANVIL", "HORN", "CALIFORNIA", "COYOTE"],
      ["EGG", "STIRRUP", "DRUM", "TNT"],
      ["CAPRI", "HOOF", "HONOR", "NAIL"],
    ],
  },
  {
    id: "491",
    name: "Connections #491",
    createdAt: "2024-10-14T00:00:00.000Z",
    board: {
      RUMMAGE: { level: 0, members: ["COMB", "DIG", "ROOT", "SIFT"] },
      "SOUNDS OF THUNDER": {
        level: 1,
        members: ["CLAP", "PEAL", "ROLL", "RUMBLE"],
      },
      "WAYS TO WEAR YOUR HAIR UP": {
        level: 2,
        members: ["BUN", "BRAID", "PONY", "TWIST"],
      },
      "THINGS THAT CAN HAVE LEAVES": {
        level: 3,
        members: ["BOOK", "SALAD", "TABLE", "TREE"],
      },
    },
    startingBoard: [
      ["PONY", "ROLL", "COMB", "BOOK"],
      ["ROOT", "TREE", "CLAP", "TABLE"],
      ["BUN", "SALAD", "DIG", "RUMBLE"],
      ["SIFT", "TWIST", "PEAL", "BRAID"],
    ],
  },
  {
    id: "492",
    name: "Connections #492",
    createdAt: "2024-10-15T00:00:00.000Z",
    board: {
      "FOOTBALL POSITIONS": {
        level: 0,
        members: ["CENTER", "GUARD", "QUARTERBACK", "SAFETY"],
      },
      "CABLE CHANNELS": {
        level: 1,
        members: ["DISCOVERY", "HISTORY", "NICKELODEON", "OXYGEN"],
      },
      "FICTIONAL CLOWNS": {
        level: 2,
        members: ["HOMEY", "JOKER", "PENNYWISE", "RONALD"],
      },
      "WHAT “D” MIGHT STAND FOR": {
        level: 3,
        members: ["DEFENSE", "DEMOCRAT", "DIMENSIONAL", "DRIVE"],
      },
    },
    startingBoard: [
      ["DRIVE", "PENNYWISE", "SAFETY", "NICKELODEON"],
      ["QUARTERBACK", "HISTORY", "DIMENSIONAL", "HOMEY"],
      ["DEFENSE", "GUARD", "JOKER", "DISCOVERY"],
      ["OXYGEN", "DEMOCRAT", "CENTER", "RONALD"],
    ],
  },
  {
    id: "493",
    name: "Connections #493",
    createdAt: "2024-10-16T00:00:00.000Z",
    board: {
      "AT SOME FUTURE POINT": {
        level: 0,
        members: ["EVENTUALLY", "LATER", "NEXT", "SOON"],
      },
      "PARTS OF A TOURNAMENT SETUP": {
        level: 1,
        members: ["BRACKET", "BYE", "ROUND", "SEED"],
      },
      "BIT OF BREAKFAST CEREAL": {
        level: 2,
        members: ["CHEERIO", "FLAKE", "PEBBLE", "PUFF"],
      },
      "WHAT THE OUTSTRETCHED INDEX AND MIDDLE FINGERS CAN REPRESENT": {
        level: 3,
        members: ["PEACE", "SCISSORS", "TWO", "VICTORY"],
      },
    },
    startingBoard: [
      ["PEACE", "PEBBLE", "LATER", "SCISSORS"],
      ["ROUND", "CHEERIO", "BYE", "FLAKE"],
      ["NEXT", "BRACKET", "SOON", "SEED"],
      ["VICTORY", "PUFF", "TWO", "EVENTUALLY"],
    ],
  },
  {
    id: "494",
    name: "Connections #494",
    createdAt: "2024-10-17T00:00:00.000Z",
    board: {
      "GRASSY AREA": { level: 0, members: ["GREEN", "LAWN", "PARK", "YARD"] },
      "DEAL WITH": {
        level: 1,
        members: ["ADDRESS", "ANSWER", "FIELD", "HANDLE"],
      },
      "MOVIES WITH “S” REMOVED": {
        level: 2,
        members: ["CAR", "GOODFELLA", "JAW", "SWINGER"],
      },
      "___ LAW": {
        level: 3,
        members: ["CRIMINAL", "HARVARD", "LEMON", "NATURAL"],
      },
    },
    startingBoard: [
      ["PARK", "CAR", "HARVARD", "YARD"],
      ["ADDRESS", "GREEN", "JAW", "LEMON"],
      ["NATURAL", "CRIMINAL", "FIELD", "SWINGER"],
      ["HANDLE", "GOODFELLA", "ANSWER", "LAWN"],
    ],
  },
  {
    id: "495",
    name: "Connections #495",
    createdAt: "2024-10-18T00:00:00.000Z",
    board: {
      CLUNKER: { level: 0, members: ["BUST", "DUD", "FLOP", "MISS"] },
      OPPORTUNITY: { level: 1, members: ["CHANCE", "SHOT", "TIME", "TURN"] },
      "NON-CASH WAY TO PAY": {
        level: 2,
        members: ["CARD", "CHARGE", "CREDIT", "PLASTIC"],
      },
      "AMAZON ___": {
        level: 3,
        members: ["KINDLE", "PRIME", "RAINFOREST", "RIVER"],
      },
    },
    startingBoard: [
      ["FLOP", "CHARGE", "PLASTIC", "TURN"],
      ["TIME", "RIVER", "CHANCE", "CARD"],
      ["MISS", "PRIME", "BUST", "SHOT"],
      ["RAINFOREST", "CREDIT", "DUD", "KINDLE"],
    ],
  },
  {
    id: "496",
    name: "Connections #496",
    createdAt: "2024-10-19T00:00:00.000Z",
    board: {
      "BRING ABOUT": {
        level: 0,
        members: ["GENERATE", "INSPIRE", "PROMPT", "PROVOKE"],
      },
      "THINGS THAT ARE OFTEN SCENTED": {
        level: 1,
        members: ["CANDLE", "INCENSE", "LOTION", "SOAP"],
      },
      "THINGS THAT MIGHT STING": {
        level: 2,
        members: ["INSULT", "JELLYFISH", "NETTLE", "WASP"],
      },
      "VIDEO GAME FRANCHISES": {
        level: 3,
        members: ["CIVILIZATION", "HALO", "MADDEN", "METROID"],
      },
    },
    startingBoard: [
      ["PROVOKE", "SOAP", "NETTLE", "CANDLE"],
      ["INSULT", "INCENSE", "INSPIRE", "MADDEN"],
      ["JELLYFISH", "CIVILIZATION", "PROMPT", "LOTION"],
      ["HALO", "GENERATE", "WASP", "METROID"],
    ],
  },
  {
    id: "497",
    name: "Connections #497",
    createdAt: "2024-10-20T00:00:00.000Z",
    board: {
      "BIT OF NEWSPAPER WRITING": {
        level: 0,
        members: ["ARTICLE", "COLUMN", "FEATURE", "STORY"],
      },
      "NOISY DISTURBANCE": {
        level: 1,
        members: ["CLATTER", "RACKET", "ROW", "RUCKUS"],
      },
      "TABLE TENNIS NEEDS": {
        level: 2,
        members: ["BALL", "NET", "PADDLE", "TABLE"],
      },
      "HOMOPHONES OF COORDINATING CONJUNCTIONS": {
        level: 3,
        members: ["BUTT", "FORE", "OAR", "SEW"],
      },
    },
    startingBoard: [
      ["PADDLE", "SEW", "ROW", "STORY"],
      ["OAR", "FORE", "COLUMN", "RACKET"],
      ["NET", "BUTT", "FEATURE", "BALL"],
      ["CLATTER", "TABLE", "RUCKUS", "ARTICLE"],
    ],
  },
  {
    id: "498",
    name: "Connections #498",
    createdAt: "2024-10-21T00:00:00.000Z",
    board: {
      "KINDS OF BEANS": {
        level: 0,
        members: ["KIDNEY", "MUNG", "NAVY", "PINTO"],
      },
      ATTRACT: { level: 1, members: ["DRAW", "GRAB", "HOOK", "PULL"] },
      "AUTOMATIC GEAR SHIFTER POSITIONS": {
        level: 2,
        members: ["DRIVE", "LOW", "NEUTRAL", "REVERSE"],
      },
      ___POOL: { level: 3, members: ["CAR", "DEAD", "LIVER", "WHIRL"] },
    },
    startingBoard: [
      ["WHIRL", "DRAW", "NAVY", "LIVER"],
      ["CAR", "KIDNEY", "HOOK", "DRIVE"],
      ["PINTO", "PULL", "NEUTRAL", "DEAD"],
      ["LOW", "MUNG", "GRAB", "REVERSE"],
    ],
  },
  {
    id: "499",
    name: "Connections #499",
    createdAt: "2024-10-22T00:00:00.000Z",
    board: {
      "BRAND-NAME": {
        level: 0,
        members: ["DESIGNER", "HAUTE", "HIGH-END", "LUXURY"],
      },
      DEVISE: {
        level: 1,
        members: ["CONCOCT", "ENGINEER", "HATCH", "MASTERMIND"],
      },
      "NASA SPACECRAFT": {
        level: 2,
        members: ["GALILEO", "PIONEER", "VIKING", "VOYAGER"],
      },
      "GAMES WHERE YOU SAY THE GAME’S NAME": {
        level: 3,
        members: ["BINGO", "MARCO POLO", "TAG", "UNO"],
      },
    },
    startingBoard: [
      ["DESIGNER", "ENGINEER", "HATCH", "TAG"],
      ["GALILEO", "MARCO POLO", "MASTERMIND", "VIKING"],
      ["BINGO", "PIONEER", "LUXURY", "CONCOCT"],
      ["HAUTE", "VOYAGER", "UNO", "HIGH-END"],
    ],
  },
  {
    id: "500",
    name: "Connections #500",
    createdAt: "2024-10-23T00:00:00.000Z",
    board: {
      "YELLOW ___": {
        level: 0,
        members: ["CAB", "JACKET", "JOURNALISM", "PAGES"],
      },
      "GREEN ___": { level: 1, members: ["BERET", "GOBLIN", "SALAD", "THUMB"] },
      "BLUE ___": { level: 2, members: ["JAY", "JEANS", "MOON", "WHALE"] },
      "PURPLE ___": { level: 3, members: ["HAZE", "HEART", "PROSE", "RAIN"] },
    },
    startingBoard: [
      ["JEANS", "JACKET", "RAIN", "HAZE"],
      ["GOBLIN", "JAY", "BERET", "CAB"],
      ["MOON", "PAGES", "HEART", "THUMB"],
      ["PROSE", "SALAD", "WHALE", "JOURNALISM"],
    ],
  },
  {
    id: "501",
    name: "Connections #501",
    createdAt: "2024-10-24T00:00:00.000Z",
    board: {
      LINEUP: { level: 0, members: ["BILL", "PROGRAM", "SCHEDULE", "SLATE"] },
      "NYT OFFERINGS": {
        level: 1,
        members: ["AUDIO", "COOKING", "GAMES", "NEWS"],
      },
      "THINGS MADE BY FOLDING PAPER": {
        level: 2,
        members: ["AIRPLANE", "CRANE", "FAN", "FORTUNE TELLER"],
      },
      "FRENCH WORDS": {
        level: 3,
        members: ["ADIEU", "BELLE", "PAIN", "TEMPS"],
      },
    },
    startingBoard: [
      ["ADIEU", "FORTUNE TELLER", "SLATE", "CRANE"],
      ["AUDIO", "TEMPS", "AIRPLANE", "GAMES"],
      ["PROGRAM", "NEWS", "FAN", "PAIN"],
      ["COOKING", "SCHEDULE", "BELLE", "BILL"],
    ],
  },
  {
    id: "502",
    name: "Connections #502",
    createdAt: "2024-10-25T00:00:00.000Z",
    board: {
      "•": { level: 0, members: ["DOT", "PERIOD", "POINT", "TITTLE"] },
      "EVENT WITH DANCING": {
        level: 1,
        members: ["BALL", "FORMAL", "HOP", "RAVE"],
      },
      "IPHONE MESSAGE TAPBACK RESPONSES": {
        level: 2,
        members: ["EXCLAMATION POINTS", "HEART", "QUESTION MARK", "THUMBS UP"],
      },
      "“PAN”": {
        level: 3,
        members: ["BAD REVIEW", "CAMERA MOVEMENT", "COOKWARE", "SATYR"],
      },
    },
    startingBoard: [
      ["FORMAL", "COOKWARE", "QUESTION MARK", "RAVE"],
      ["PERIOD", "THUMBS UP", "BALL", "DOT"],
      ["BAD REVIEW", "HOP", "EXCLAMATION POINTS", "SATYR"],
      ["POINT", "CAMERA MOVEMENT", "HEART", "TITTLE"],
    ],
  },
  {
    id: "503",
    name: "Connections #503",
    createdAt: "2024-10-26T00:00:00.000Z",
    board: {
      FLUSTER: { level: 0, members: ["FAZE", "RATTLE", "RUFFLE", "THROW"] },
      "SERIES OF MESSAGES": {
        level: 1,
        members: ["CHAIN", "CHAT", "CONVERSATION", "THREAD"],
      },
      "PLACES TO LIE/SIT THAT MOVE": {
        level: 2,
        members: ["CRADLE", "HAMMOCK", "ROCKER", "SWING"],
      },
      "CYLINDER-SHAPED THINGS": {
        level: 3,
        members: ["CAN", "ROLLER", "SILO", "SPOOL"],
      },
    },
    startingBoard: [
      ["SWING", "THROW", "ROCKER", "ROLLER"],
      ["RATTLE", "THREAD", "CRADLE", "SPOOL"],
      ["CAN", "RUFFLE", "CHAT", "HAMMOCK"],
      ["CONVERSATION", "SILO", "CHAIN", "FAZE"],
    ],
  },
  {
    id: "504",
    name: "Connections #504",
    createdAt: "2024-10-27T00:00:00.000Z",
    board: {
      SASSY: { level: 0, members: ["CUTE", "FRESH", "SMART", "WISE"] },
      AMBIENCE: { level: 1, members: ["AIR", "MOOD", "FEELING", "QUALITY"] },
      UNITS: { level: 2, members: ["BAR", "BEL", "LUX", "MOLE"] },
      "THE LITTLE ___": {
        level: 3,
        members: ["MERMAID", "PRINCE", "RASCALS", "TRAMP"],
      },
    },
    startingBoard: [
      ["FRESH", "PRINCE", "BEL", "AIR"],
      ["QUALITY", "BAR", "CUTE", "MERMAID"],
      ["LUX", "WISE", "TRAMP", "MOOD"],
      ["FEELING", "SMART", "MOLE", "RASCALS"],
    ],
  },
  {
    id: "505",
    name: "Connections #505",
    createdAt: "2024-10-28T00:00:00.000Z",
    board: {
      "AUDIO APPS": {
        level: 0,
        members: ["AUDIBLE", "PANDORA", "SHAZAM", "TIDAL"],
      },
      INDICATE: { level: 1, members: ["MEAN", "SIGNIFY", "SPELL", "SUGGEST"] },
      "CHURCH OF ENGLAND WEDDING VOW VERBS": {
        level: 2,
        members: ["CHERISH", "HAVE", "HOLD", "LOVE"],
      },
      "MAGIC WORDS": {
        level: 3,
        members: ["ABRACADABRA", "PLEASE", "PRESTO", "THANK YOU"],
      },
    },
    startingBoard: [
      ["SPELL", "LOVE", "PLEASE", "HOLD"],
      ["PRESTO", "MEAN", "THANK YOU", "SHAZAM"],
      ["AUDIBLE", "ABRACADABRA", "SIGNIFY", "TIDAL"],
      ["SUGGEST", "HAVE", "PANDORA", "CHERISH"],
    ],
  },
  {
    id: "506",
    name: "Connections #506",
    createdAt: "2024-10-29T00:00:00.000Z",
    board: {
      "IN PRISTINE CONDITION": {
        level: 0,
        members: ["MINT", "NEW", "ORIGINAL", "UNUSED"],
      },
      "MEDICAL ROLES": {
        level: 1,
        members: ["ATTENDING", "FELLOW", "INTERN", "RESIDENT"],
      },
      "SINGULAR NOUN IN A FAMOUS “JULIUS CAESAR” LINE": {
        level: 2,
        members: ["COUNTRYMAN", "EAR", "FRIEND", "ROMAN"],
      },
      "___ SQUARE": {
        level: 3,
        members: ["PERFECT", "POCKET", "TIMES", "TOWN"],
      },
    },
    startingBoard: [
      ["TIMES", "NEW", "ROMAN", "TOWN"],
      ["POCKET", "EAR", "FRIEND", "FELLOW"],
      ["ATTENDING", "ORIGINAL", "PERFECT", "RESIDENT"],
      ["MINT", "COUNTRYMAN", "INTERN", "UNUSED"],
    ],
  },
  {
    id: "507",
    name: "Connections #507",
    createdAt: "2024-10-30T00:00:00.000Z",
    board: {
      UPSWING: { level: 0, members: ["BOOM", "RISE", "SPIKE", "SURGE"] },
      "THINGS WITH WHEELS": {
        level: 1,
        members: ["DOLLY", "ROLLERBLADE", "SKATEBOARD", "WAGON"],
      },
      "KINDS OF TAPE": {
        level: 2,
        members: ["DUCT", "ELECTRICAL", "GAFFER", "PACKING"],
      },
      "RETAIL CHAINS WITH A LETTER CHANGED": {
        level: 3,
        members: ["BEST BOY", "IDEA", "KRONER", "STABLES"],
      },
    },
    startingBoard: [
      ["IDEA", "BOOM", "PACKING", "DOLLY"],
      ["SKATEBOARD", "GAFFER", "WAGON", "BEST BOY"],
      ["DUCT", "SPIKE", "ELECTRICAL", "STABLES"],
      ["RISE", "ROLLERBLADE", "KRONER", "SURGE"],
    ],
  },
  {
    id: "508",
    name: "Connections #508",
    createdAt: "2024-10-31T00:00:00.000Z",
    board: {
      "TERMS OF ENDEARMENT": {
        level: 0,
        members: ["DARLING", "LOVE", "PUMPKIN", "TREASURE"],
      },
      "THINGS YOU CAN DO WITH YOUR EYELIDS": {
        level: 1,
        members: ["BAT", "BLINK", "FLUTTER", "WINK"],
      },
      "SPORTS CARS": {
        level: 2,
        members: ["DIABLO", "MUSTANG", "SPIDER", "VIPER"],
      },
      "___ HUNT": { level: 3, members: ["EGG", "JOB", "SCAVENGER", "WITCH"] },
    },
    startingBoard: [
      ["BAT", "EGG", "LOVE", "WITCH"],
      ["PUMPKIN", "SPIDER", "BLINK", "JOB"],
      ["DIABLO", "FLUTTER", "TREASURE", "VIPER"],
      ["SCAVENGER", "MUSTANG", "WINK", "DARLING"],
    ],
  },
  {
    id: "509",
    name: "Connections #509",
    createdAt: "2024-11-01T00:00:00.000Z",
    board: {
      "PROGRESS SLOWLY": {
        level: 0,
        members: ["CRAWL", "CREEP", "DRAG", "INCH"],
      },
      "WAYS TO ORDER A BEER": {
        level: 1,
        members: ["BOTTLE", "CAN", "DRAFT", "TAP"],
      },
      "CHEESY CORN SNACK UNIT": {
        level: 2,
        members: ["BALL", "CURL", "DOODLE", "PUFF"],
      },
      "___ EFFECT": {
        level: 3,
        members: ["BUTTERFLY", "DOMINO", "HALO", "PLACEBO"],
      },
    },
    startingBoard: [
      ["DRAG", "DRAFT", "DOODLE", "DOMINO"],
      ["BALL", "BUTTERFLY", "CURL", "CRAWL"],
      ["PUFF", "INCH", "HALO", "BOTTLE"],
      ["TAP", "PLACEBO", "CAN", "CREEP"],
    ],
  },
  {
    id: "510",
    name: "Connections #510",
    createdAt: "2024-11-02T00:00:00.000Z",
    board: {
      "SEEN IN A KITCHEN": {
        level: 0,
        members: ["COUNTER", "FRIDGE", "RANGE", "SINK"],
      },
      "GROUP OF ADVISORS": {
        level: 1,
        members: ["BOARD", "CABINET", "COUNCIL", "PANEL"],
      },
      "CORE EXERCISES": {
        level: 2,
        members: ["BOAT", "CRUNCH", "MOUNTAIN CLIMBER", "PLANK"],
      },
      "KINDS OF EARRINGS": {
        level: 3,
        members: ["CHANDELIER", "DROP", "HOOP", "STUD"],
      },
    },
    startingBoard: [
      ["BOARD", "DROP", "PLANK", "SINK"],
      ["RANGE", "PANEL", "STUD", "BOAT"],
      ["CHANDELIER", "COUNTER", "CABINET", "CRUNCH"],
      ["COUNCIL", "MOUNTAIN CLIMBER", "FRIDGE", "HOOP"],
    ],
  },
  {
    id: "511",
    name: "Connections #511",
    createdAt: "2024-11-03T00:00:00.000Z",
    board: {
      HEARTWARMING: {
        level: 0,
        members: ["MOVING", "SWEET", "TENDER", "TOUCHING"],
      },
      "SNEAKING SUSPICION": {
        level: 1,
        members: ["FEELING", "HUNCH", "IMPRESSION", "SENSE"],
      },
      "LEGAL SESSION": {
        level: 2,
        members: ["HEARING", "INQUIRY", "PROCEEDING", "TRIAL"],
      },
      "EASY ___": {
        level: 3,
        members: ["CHAIR", "LISTENING", "MONEY", "STREET"],
      },
    },
    startingBoard: [
      ["STREET", "SENSE", "MOVING", "MONEY"],
      ["TENDER", "FEELING", "HEARING", "LISTENING"],
      ["PROCEEDING", "TOUCHING", "CHAIR", "INQUIRY"],
      ["SWEET", "HUNCH", "TRIAL", "IMPRESSION"],
    ],
  },
  {
    id: "512",
    name: "Connections #512",
    createdAt: "2024-11-04T00:00:00.000Z",
    board: {
      EQUIP: { level: 0, members: ["FURNISH", "OUTFIT", "PROVISION", "STOCK"] },
      INDIVIDUALITY: {
        level: 1,
        members: ["BEING", "CHARACTER", "EGO", "SELF"],
      },
      FURNITURE: {
        level: 2,
        members: ["CHEST", "CONSOLE", "VANITY", "WARDROBE"],
      },
      "WORDS WITH APOSTROPHES REMOVED": {
        level: 3,
        members: ["CANT", "ID", "SHELL", "WERE"],
      },
    },
    startingBoard: [
      ["SHELL", "VANITY", "OUTFIT", "ID"],
      ["WARDROBE", "CANT", "CONSOLE", "EGO"],
      ["STOCK", "CHARACTER", "BEING", "CHEST"],
      ["SELF", "PROVISION", "WERE", "FURNISH"],
    ],
  },
  {
    id: "513",
    name: "Connections #513",
    createdAt: "2024-11-05T00:00:00.000Z",
    board: {
      "THINGS THAT ARE FUZZY": {
        level: 0,
        members: ["CATERPILLAR", "FLEECE", "PEACH", "PIPE CLEANER"],
      },
      "THINGS WITH SHELLS": {
        level: 1,
        members: ["CLAM", "EGG", "NUT", "TURTLE"],
      },
      "FIGURES IN “SHREK”": {
        level: 2,
        members: ["DONKEY", "DRAGON", "OGRE", "PRINCESS"],
      },
      "MAGIC ___": {
        level: 3,
        members: ["CARPET", "KINGDOM", "MARKER", "MUSHROOM"],
      },
    },
    startingBoard: [
      ["CATERPILLAR", "CLAM", "MUSHROOM", "KINGDOM"],
      ["TURTLE", "PEACH", "EGG", "PIPE CLEANER"],
      ["PRINCESS", "MARKER", "DONKEY", "CARPET"],
      ["NUT", "DRAGON", "FLEECE", "OGRE"],
    ],
  },
  {
    id: "514",
    name: "Connections #514",
    createdAt: "2024-11-06T00:00:00.000Z",
    board: {
      "DVR BUTTONS": { level: 0, members: ["PAUSE", "PLAY", "RECORD", "STOP"] },
      GROUNDBREAKING: {
        level: 1,
        members: ["DIFFERENT", "NEW", "NOVEL", "ORIGINAL"],
      },
      "COMMUNICATE THROUGH WRITING": {
        level: 2,
        members: ["CORRESPOND", "MESSAGE", "TEXT", "WRITE"],
      },
      "THINGS WITH FEET": {
        level: 3,
        members: ["BIPED", "FURNITURE", "POEM", "YARDSTICK"],
      },
    },
    startingBoard: [
      ["STOP", "POEM", "DIFFERENT", "MESSAGE"],
      ["NEW", "NOVEL", "YARDSTICK", "FURNITURE"],
      ["PLAY", "TEXT", "BIPED", "RECORD"],
      ["CORRESPOND", "ORIGINAL", "PAUSE", "WRITE"],
    ],
  },
  {
    id: "515",
    name: "Connections #515",
    createdAt: "2024-11-07T00:00:00.000Z",
    board: {
      "FOOD-RELATED JUMBLES": {
        level: 0,
        members: ["HASH", "SALAD", "SCRAMBLE", "STEW"],
      },
      "PUBLIC STANDING": {
        level: 1,
        members: ["CHARACTER", "IMAGE", "NAME", "REPUTATION"],
      },
      "INFO ON A MUSEUM PLACARD": {
        level: 2,
        members: ["ARTIST", "MEDIUM", "TITLE", "YEAR"],
      },
      "ANAGRAMS OF FAMOUS PAINTERS": {
        level: 3,
        members: ["DIAL", "EGADS", "MONTE", "YOGA"],
      },
    },
    startingBoard: [
      ["EGADS", "SCRAMBLE", "ARTIST", "NAME"],
      ["SALAD", "YEAR", "YOGA", "CHARACTER"],
      ["MEDIUM", "DIAL", "IMAGE", "STEW"],
      ["MONTE", "REPUTATION", "HASH", "TITLE"],
    ],
  },
  {
    id: "516",
    name: "Connections #516",
    createdAt: "2024-11-08T00:00:00.000Z",
    board: {
      ESCAPADE: { level: 0, members: ["ANTIC", "CAPER", "EXPLOIT", "STUNT"] },
      "KINDS OF PICKLES": {
        level: 1,
        members: ["DILL", "KOSHER", "SOUR", "SWEET"],
      },
      RISQUÉ: { level: 2, members: ["ADULT", "BLUE", "SPICY", "SUGGESTIVE"] },
      "CUT THE ___": {
        level: 3,
        members: ["CHEESE", "CORD", "DECK", "MUSTARD"],
      },
    },
    startingBoard: [
      ["BLUE", "CHEESE", "SPICY", "MUSTARD"],
      ["SWEET", "CAPER", "DILL", "DECK"],
      ["EXPLOIT", "SOUR", "ADULT", "ANTIC"],
      ["SUGGESTIVE", "STUNT", "KOSHER", "CORD"],
    ],
  },
  {
    id: "517",
    name: "Connections #517",
    createdAt: "2024-11-09T00:00:00.000Z",
    board: {
      CONTORTED: { level: 0, members: ["BENT", "GNARLY", "TWISTED", "WARPED"] },
      "SMALLEST AMOUNT": {
        level: 1,
        members: ["LICK", "OUNCE", "SHRED", "TRACE"],
      },
      "ALGEBRA TERMS": {
        level: 2,
        members: ["EXPONENT", "POWER", "RADICAL", "ROOT"],
      },
      "WORDS BEFORE “ROOM” TO MEAN LAVATORY": {
        level: 3,
        members: ["BATH", "POWDER", "REST", "THRONE"],
      },
    },
    startingBoard: [
      ["THRONE", "SHRED", "GNARLY", "POWDER"],
      ["RADICAL", "BATH", "LICK", "POWER"],
      ["TWISTED", "ROOT", "REST", "BENT"],
      ["TRACE", "WARPED", "EXPONENT", "OUNCE"],
    ],
  },
  {
    id: "518",
    name: "Connections #518",
    createdAt: "2024-11-10T00:00:00.000Z",
    board: {
      "BARREL-SHAPED CONTAINER": {
        level: 0,
        members: ["CASK", "CYLINDER", "DRUM", "TANK"],
      },
      GUIDE: { level: 1, members: ["PILOT", "USHER", "SHEPHERD", "STEER"] },
      "N.F.L. TEAM MEMBER": {
        level: 2,
        members: ["COWBOY", "JET", "RAM", "RAVEN"],
      },
      "THINGS THAT SWING": {
        level: 3,
        members: ["GOLFER", "PENDULUM", "SALOON DOORS", "SWING"],
      },
    },
    startingBoard: [
      ["RAVEN", "GOLFER", "PILOT", "PENDULUM"],
      ["DRUM", "USHER", "SALOON DOORS", "CASK"],
      ["COWBOY", "CYLINDER", "STEER", "JET"],
      ["TANK", "RAM", "SWING", "SHEPHERD"],
    ],
  },
  {
    id: "519",
    name: "Connections #519",
    createdAt: "2024-11-11T00:00:00.000Z",
    board: {
      "CHOCOLATE BARS": {
        level: 0,
        members: ["CRUNCH", "DOVE", "MARS", "PAYDAY"],
      },
      GIST: { level: 1, members: ["CORE", "MEAT", "SUBSTANCE", "THRUST"] },
      "KINDS OF BRAS": {
        level: 2,
        members: ["DEMI", "PUSH-UP", "SPORTS", "WIRELESS"],
      },
      "___ BIRD": { level: 3, members: ["BIG", "EARLY", "LADY", "SUE"] },
    },
    startingBoard: [
      ["CRUNCH", "SUBSTANCE", "DEMI", "SUE"],
      ["BIG", "THRUST", "SPORTS", "PUSH-UP"],
      ["MARS", "MEAT", "EARLY", "PAYDAY"],
      ["CORE", "DOVE", "LADY", "WIRELESS"],
    ],
  },
  {
    id: "520",
    name: "Connections #520",
    createdAt: "2024-11-12T00:00:00.000Z",
    board: {
      COMPLAIN: { level: 0, members: ["BELLYACHE", "CARP", "CRAB", "GRUMBLE"] },
      "VEGETABLE UNITS": {
        level: 1,
        members: ["CLOVE", "FLORET", "SPEAR", "STALK"],
      },
      "LAPTOP SPECS": {
        level: 2,
        members: ["RAM", "RESOLUTION", "SPEED", "STORAGE"],
      },
      "FEATURES OF JUSTICE PERSONIFIED": {
        level: 3,
        members: ["BLINDFOLD", "ROBE", "SCALES", "SWORD"],
      },
    },
    startingBoard: [
      ["RAM", "ROBE", "CLOVE", "CRAB"],
      ["SWORD", "SPEED", "SCALES", "SPEAR"],
      ["BELLYACHE", "BLINDFOLD", "STORAGE", "CARP"],
      ["STALK", "GRUMBLE", "RESOLUTION", "FLORET"],
    ],
  },
  {
    id: "521",
    name: "Connections #521",
    createdAt: "2024-11-13T00:00:00.000Z",
    board: {
      "THINGS THAT ARE YELLOW": {
        level: 0,
        members: ["CANARY", "LEMON", "MINION", "MUSTARD"],
      },
      "BUILDING ADD-ONS": {
        level: 1,
        members: ["ADDITION", "ANNEX", "EXTENSION", "WING"],
      },
      "CONCERNS FOR A DENTIST": {
        level: 2,
        members: ["CALCULUS", "CAVITY", "PLAQUE", "TARTAR"],
      },
      "WORDS THAT SEEM LONGER WRITTEN THAN SPOKEN": {
        level: 3,
        members: ["COLONEL", "PHARAOH", "WEDNESDAY", "WORCESTERSHIRE"],
      },
    },
    startingBoard: [
      ["MUSTARD", "WING", "WEDNESDAY", "WORCESTERSHIRE"],
      ["COLONEL", "TARTAR", "LEMON", "MINION"],
      ["CALCULUS", "CANARY", "ADDITION", "PLAQUE"],
      ["EXTENSION", "PHARAOH", "CAVITY", "ANNEX"],
    ],
  },
  {
    id: "522",
    name: "Connections #522",
    createdAt: "2024-11-14T00:00:00.000Z",
    board: {
      DEPLETE: { level: 0, members: ["DRAIN", "EMPTY", "EXHAUST", "SAP"] },
      "PLAY MUSIC WITH PASSION": {
        level: 1,
        members: ["GROOVE", "JAM", "ROCK", "SHRED"],
      },
      "WORDS ON A RESTAURANT RECEIPT": {
        level: 2,
        members: ["TAX", "TIP", "TOTAL", "SIGNATURE"],
      },
      "FORMS OF SUGAR": {
        level: 3,
        members: ["CUBE", "GRAIN", "POWDER", "SYRUP"],
      },
    },
    startingBoard: [
      ["GRAIN", "DRAIN", "TOTAL", "CUBE"],
      ["SYRUP", "SHRED", "SIGNATURE", "SAP"],
      ["JAM", "TAX", "POWDER", "ROCK"],
      ["EMPTY", "GROOVE", "TIP", "EXHAUST"],
    ],
  },
  {
    id: "523",
    name: "Connections #523",
    createdAt: "2024-11-15T00:00:00.000Z",
    board: {
      FISSURE: { level: 0, members: ["CRACK", "HOLE", "LEAK", "PUNCTURE"] },
      "ELEMENTS OF WRITING": {
        level: 1,
        members: ["LETTER", "PHRASE", "SENTENCE", "WORD"],
      },
      "INSTRUMENTS YOU BLOW INTO": {
        level: 2,
        members: ["JUG", "PIPE", "RECORDER", "WHISTLE"],
      },
      "___ OF TIME": {
        level: 3,
        members: ["NICK", "PASSAGE", "SANDS", "WASTE"],
      },
    },
    startingBoard: [
      ["PIPE", "PHRASE", "JUG", "PASSAGE"],
      ["LEAK", "LETTER", "WASTE", "WHISTLE"],
      ["NICK", "CRACK", "RECORDER", "WORD"],
      ["HOLE", "SANDS", "SENTENCE", "PUNCTURE"],
    ],
  },
  {
    id: "524",
    name: "Connections #524",
    createdAt: "2024-11-16T00:00:00.000Z",
    board: {
      "THINGS THAT PREVENT LEAKS": {
        level: 0,
        members: ["CAP", "COVER", "PLUG", "SEAL"],
      },
      "KINDS OF HATS": {
        level: 1,
        members: ["BERET", "DERBY", "PILLBOX", "SNAPBACK"],
      },
      "COLLEGE FOOTBALL TEAM MEMBERS": {
        level: 2,
        members: ["GATOR", "SOONER", "VOLUNTEER", "WOLVERINE"],
      },
      "GO ___": {
        level: 3,
        members: ["BANANAS", "COMMANDO", "FIGURE", "ROGUE"],
      },
    },
    startingBoard: [
      ["ROGUE", "CAP", "GATOR", "SEAL"],
      ["BERET", "WOLVERINE", "COMMANDO", "FIGURE"],
      ["VOLUNTEER", "DERBY", "PILLBOX", "COVER"],
      ["PLUG", "SNAPBACK", "SOONER", "BANANAS"],
    ],
  },
  {
    id: "525",
    name: "Connections #525",
    createdAt: "2024-11-17T00:00:00.000Z",
    board: {
      ALLIANCE: {
        level: 0,
        members: ["ASSOCIATION", "GUILD", "LEAGUE", "UNION"],
      },
      "CLOSE-FITTING ": {
        level: 1,
        members: ["CLINGY", "SLEEK", "SLINKY", "SNUG"],
      },
      "OCCASIONS WHEN ONE MIGHT KNEEL": {
        level: 2,
        members: ["APOLOGY", "DUBBING", "PRAYER", "PROPOSAL"],
      },
      "WHAT AN APOSTROPHE MIGHT INDICATE": {
        level: 3,
        members: ["CONTRACTION", "FOOT", "POSSESSIVE", "QUOTATION"],
      },
    },
    startingBoard: [
      ["APOLOGY", "QUOTATION", "ASSOCIATION", "CONTRACTION"],
      ["CLINGY", "UNION", "POSSESSIVE", "SLINKY"],
      ["PROPOSAL", "SNUG", "PRAYER", "LEAGUE"],
      ["GUILD", "DUBBING", "FOOT", "SLEEK"],
    ],
  },
  {
    id: "526",
    name: "Connections #526",
    createdAt: "2024-11-18T00:00:00.000Z",
    board: {
      "USED IN HAIR CARE": {
        level: 0,
        members: ["COMB", "DRYER", "HAIRSPRAY", "ROLLERS"],
      },
      "MONTHLY EXPENSES": {
        level: 1,
        members: ["GAS", "INTERNET", "PHONE", "RENT"],
      },
      "THINGS WITH SPOTS": {
        level: 2,
        members: ["DALMATIAN", "DIE", "DOMINO", "LADYBUG"],
      },
      "___ CRAB": {
        level: 3,
        members: ["FIDDLER", "HERMIT", "HORSESHOE", "SPIDER"],
      },
    },
    startingBoard: [
      ["DOMINO", "DRYER", "FIDDLER", "LADYBUG"],
      ["INTERNET", "HORSESHOE", "SPIDER", "RENT"],
      ["HAIRSPRAY", "GAS", "DALMATIAN", "COMB"],
      ["PHONE", "HERMIT", "ROLLERS", "DIE"],
    ],
  },
  {
    id: "527",
    name: "Connections #527",
    createdAt: "2024-11-19T00:00:00.000Z",
    board: {
      "AREA OF EXPERTISE": {
        level: 0,
        members: ["CONCENTRATION", "FIELD", "FOCUS", "SPECIALTY"],
      },
      "WAYS TO UNLOCK A DEVICE": {
        level: 1,
        members: ["FACE", "FINGERPRINT", "PASSWORD", "PIN"],
      },
      "PASTA SHAPES": {
        level: 2,
        members: ["EAR", "ELBOW", "RIBBON", "WHEEL"],
      },
      "DOUBLE ___": {
        level: 3,
        members: ["AGENT", "DRIBBLE", "JEOPARDY", "STANDARD"],
      },
    },
    startingBoard: [
      ["FOCUS", "FACE", "FIELD", "JEOPARDY"],
      ["RIBBON", "PIN", "WHEEL", "EAR"],
      ["PASSWORD", "AGENT", "CONCENTRATION", "FINGERPRINT"],
      ["STANDARD", "ELBOW", "SPECIALTY", "DRIBBLE"],
    ],
  },
  {
    id: "528",
    name: "Connections #528",
    createdAt: "2024-11-20T00:00:00.000Z",
    board: {
      "SOUND LIKE A DOG": {
        level: 0,
        members: ["BARK", "BAY", "HOWL", "SNARL"],
      },
      "BROADCAST, AS ONLINE MEDIA": {
        level: 1,
        members: ["AIR", "PLAY", "RUN", "STREAM"],
      },
      "COCKTAIL-MAKING VERBS": {
        level: 2,
        members: ["GARNISH", "MUDDLE", "STIR", "STRAIN"],
      },
      "ORGANIZATIONAL STRUCTURES, METAPHORICALLY": {
        level: 3,
        members: ["CHAIN", "LADDER", "PYRAMID", "TREE"],
      },
    },
    startingBoard: [
      ["PLAY", "BAY", "STIR", "CHAIN"],
      ["TREE", "STREAM", "BARK", "RUN"],
      ["HOWL", "GARNISH", "AIR", "PYRAMID"],
      ["MUDDLE", "LADDER", "SNARL", "STRAIN"],
    ],
  },
  {
    id: "529",
    name: "Connections #529",
    createdAt: "2024-11-21T00:00:00.000Z",
    board: {
      "KINDS OF SHIRTS": {
        level: 0,
        members: ["FLANNEL", "OXFORD", "POLO", "TEE"],
      },
      "SPHERES IN MILK TEA": {
        level: 1,
        members: ["BOBA", "BUBBLE", "PEARL", "TAPIOCA"],
      },
      "MARINE INVERTEBRATES, FAMILIARLY": {
        level: 2,
        members: ["CORAL", "JELLY", "SPONGE", "STAR"],
      },
      "STARTS OF PASTA NAMES": {
        level: 3,
        members: ["FETT", "PENN", "TORTE", "ZIT"],
      },
    },
    startingBoard: [
      ["BOBA", "FETT", "POLO", "STAR"],
      ["OXFORD", "SPONGE", "BUBBLE", "PENN"],
      ["PEARL", "TORTE", "CORAL", "TEE"],
      ["ZIT", "JELLY", "FLANNEL", "TAPIOCA"],
    ],
  },
  {
    id: "530",
    name: "Connections #530",
    createdAt: "2024-11-22T00:00:00.000Z",
    board: {
      PUBLICITY: {
        level: 0,
        members: ["ATTENTION", "COVERAGE", "EXPOSURE", "PRESS"],
      },
      "POINT OF VIEW": {
        level: 1,
        members: ["ANGLE", "LENS", "PERSPECTIVE", "POSITION"],
      },
      "WORK COMMUNICATION PLATFORMS": {
        level: 2,
        members: ["MEET", "SLACK", "TEAMS", "ZOOM"],
      },
      "“___ ISLAND”": {
        level: 3,
        members: ["FANTASY", "LOVE", "SHUTTER", "TREASURE"],
      },
    },
    startingBoard: [
      ["FANTASY", "TEAMS", "LOVE", "ATTENTION"],
      ["LENS", "EXPOSURE", "POSITION", "MEET"],
      ["ZOOM", "SHUTTER", "PRESS", "ANGLE"],
      ["TREASURE", "COVERAGE", "PERSPECTIVE", "SLACK"],
    ],
  },
  {
    id: "531",
    name: "Connections #531",
    createdAt: "2024-11-23T00:00:00.000Z",
    board: {
      "TELLING OF EVENTS": {
        level: 0,
        members: ["ACCOUNT", "CHRONICLE", "DESCRIPTION", "STORY"],
      },
      "SECRETED BY TREES": {
        level: 1,
        members: ["GUM", "LATEX", "RESIN", "SAP"],
      },
      "THINGS ON STICKS": {
        level: 2,
        members: ["BALL-IN-CUP", "CORN DOG", "COTTON SWAB", "LOLLIPOP"],
      },
      "BLACK OR RED": {
        level: 3,
        members: ["BALANCE SHEET", "CHECKERS", "LICORICE", "ROULETTE"],
      },
    },
    startingBoard: [
      ["BALL-IN-CUP", "BALANCE SHEET", "LATEX", "LOLLIPOP"],
      ["ACCOUNT", "CHECKERS", "COTTON SWAB", "LICORICE"],
      ["GUM", "CORN DOG", "STORY", "SAP"],
      ["CHRONICLE", "RESIN", "ROULETTE", "DESCRIPTION"],
    ],
  },
  {
    id: "532",
    name: "Connections #532",
    createdAt: "2024-11-24T00:00:00.000Z",
    board: {
      CAREEN: { level: 0, members: ["HEAVE", "LURCH", "PITCH", "REEL"] },
      "WHAT A NOUN MIGHT BE": {
        level: 1,
        members: ["IDEA", "PERSON", "PLACE", "THING"],
      },
      "ELECTRONIC DANCE MUSIC GENRES": {
        level: 2,
        members: ["AMBIENT", "HOUSE", "JUNGLE", "TRANCE"],
      },
      "WORDS AFTER “ASH”": {
        level: 3,
        members: ["BLOND", "TRAY", "TREE", "WEDNESDAY"],
      },
    },
    startingBoard: [
      ["LURCH", "TRANCE", "TREE", "THING"],
      ["TRAY", "REEL", "WEDNESDAY", "JUNGLE"],
      ["PITCH", "IDEA", "HEAVE", "PERSON"],
      ["BLOND", "HOUSE", "AMBIENT", "PLACE"],
    ],
  },
  {
    id: "533",
    name: "Connections #533",
    createdAt: "2024-11-25T00:00:00.000Z",
    board: {
      ATTAIN: { level: 0, members: ["EARN", "LAND", "SCORE", "WIN"] },
      "LARGE GROUP": { level: 1, members: ["CROWD", "FLOCK", "HOST", "SEA"] },
      "PARTS OF A SHIP": {
        level: 2,
        members: ["ANCHOR", "BOW", "BRIDGE", "DECK"],
      },
      "ASSOCIATED PRINCIPLES IN CHINESE PHILOSOPHY": {
        level: 3,
        members: ["EXPANSIVE", "LIGHT", "MASCULINE", "YANG"],
      },
    },
    startingBoard: [
      ["LIGHT", "SCORE", "LAND", "SEA"],
      ["HOST", "BOW", "WIN", "YANG"],
      ["ANCHOR", "MASCULINE", "FLOCK", "DECK"],
      ["EXPANSIVE", "BRIDGE", "EARN", "CROWD"],
    ],
  },
  {
    id: "534",
    name: "Connections #534",
    createdAt: "2024-11-26T00:00:00.000Z",
    board: {
      "GOOD THINGS TO GET AT WORK": {
        level: 0,
        members: ["BONUS", "EQUITY", "PROMOTION", "RAISE"],
      },
      DISREGARD: {
        level: 1,
        members: ["DISCOUNT", "FORGET", "IGNORE", "OVERLOOK"],
      },
      "KINDS OF CRACKERS": {
        level: 2,
        members: ["ANIMAL", "CLUB", "GOLDFISH", "RITZ"],
      },
      "FEATURED IN “ELOISE”": {
        level: 3,
        members: ["ELOISE", "PLAZA", "PUG", "TURTLE"],
      },
    },
    startingBoard: [
      ["PLAZA", "OVERLOOK", "BONUS", "DISCOUNT"],
      ["CLUB", "PROMOTION", "RITZ", "ANIMAL"],
      ["RAISE", "TURTLE", "GOLDFISH", "FORGET"],
      ["PUG", "IGNORE", "EQUITY", "ELOISE"],
    ],
  },
  {
    id: "535",
    name: "Connections #535",
    createdAt: "2024-11-27T00:00:00.000Z",
    board: {
      "NOT WORKING RELIABLY": {
        level: 0,
        members: ["BUGGY", "ERRATIC", "GLITCHY", "SPOTTY"],
      },
      "CAR PARTS": { level: 1, members: ["BUMPER", "GRILLE", "MIRROR", "RIM"] },
      "WHAT A SITTER MIGHT SIT": {
        level: 2,
        members: ["BABY", "HOUSE", "PET", "PLANT"],
      },
      "___ BAND": {
        level: 3,
        members: ["BOY", "RUBBER", "TRIBUTE", "WEDDING"],
      },
    },
    startingBoard: [
      ["RUBBER", "BABY", "BUGGY", "BUMPER"],
      ["HOUSE", "MIRROR", "ERRATIC", "TRIBUTE"],
      ["SPOTTY", "PLANT", "PET", "WEDDING"],
      ["BOY", "GRILLE", "GLITCHY", "RIM"],
    ],
  },
  {
    id: "536",
    name: "Connections #536",
    createdAt: "2024-11-28T00:00:00.000Z",
    board: {
      APPRECIATION: {
        level: 0,
        members: ["CREDIT", "PRAISE", "RECOGNITION", "THANKS"],
      },
      FRAUDSTER: { level: 1, members: ["CHEAT", "CON", "FAKE", "QUACK"] },
      "EAT VORACIOUSLY": {
        level: 2,
        members: ["BOLT", "DOWN", "GOBBLE", "SCARF"],
      },
      "___ TUESDAY": { level: 3, members: ["FAT", "GIVING", "SUPER", "TACO"] },
    },
    startingBoard: [
      ["QUACK", "GOBBLE", "THANKS", "GIVING"],
      ["FAT", "TACO", "BOLT", "PRAISE"],
      ["SUPER", "CREDIT", "CON", "DOWN"],
      ["CHEAT", "SCARF", "FAKE", "RECOGNITION"],
    ],
  },
  {
    id: "537",
    name: "Connections #537",
    createdAt: "2024-11-29T00:00:00.000Z",
    board: {
      UNDERTAKING: {
        level: 0,
        members: ["ENDEAVOR", "ENTERPRISE", "PROJECT", "VENTURE"],
      },
      UNITS: { level: 1, members: ["HERTZ", "MOLE", "SECOND", "VOLT"] },
      "M.L.B. TEAM MEMBER": {
        level: 2,
        members: ["NATIONAL", "RAY", "TIGER", "TWIN"],
      },
      "FIRST WORDS OF HBO SHOWS": {
        level: 3,
        members: ["BOARDWALK", "CURB", "GAME", "SILICON"],
      },
    },
    startingBoard: [
      ["ENDEAVOR", "CURB", "NATIONAL", "BOARDWALK"],
      ["HERTZ", "TWIN", "MOLE", "ENTERPRISE"],
      ["SILICON", "PROJECT", "TIGER", "VOLT"],
      ["GAME", "RAY", "SECOND", "VENTURE"],
    ],
  },
  {
    id: "538",
    name: "Connections #538",
    createdAt: "2024-11-30T00:00:00.000Z",
    board: {
      "DANCE STYLES": { level: 0, members: ["JAZZ", "MODERN", "SWING", "TAP"] },
      STEAL: { level: 1, members: ["LIFT", "PALM", "POCKET", "SWIPE"] },
      "PERFORM WELL ON": {
        level: 2,
        members: ["ACE", "CRUSH", "NAIL", "ROCK"],
      },
      "___BALL PITCHES": {
        level: 3,
        members: ["CURVE", "FAST", "KNUCKLE", "SCREW"],
      },
    },
    startingBoard: [
      ["ROCK", "PALM", "FAST", "MODERN"],
      ["NAIL", "SWING", "SCREW", "KNUCKLE"],
      ["POCKET", "ACE", "TAP", "SWIPE"],
      ["CURVE", "JAZZ", "LIFT", "CRUSH"],
    ],
  },
  {
    id: "539",
    name: "Connections #539",
    createdAt: "2024-12-01T00:00:00.000Z",
    board: {
      SANCTUARY: { level: 0, members: ["HAVEN", "PORT", "RETREAT", "SHELTER"] },
      "FOOTBALL GEAR": {
        level: 1,
        members: ["CLEATS", "HELMET", "JERSEY", "PADS"],
      },
      "CANDY NAMES": {
        level: 2,
        members: ["CHARMS", "KINDER", "WONKA", "YORK"],
      },
      "“FREE ___”": { level: 3, members: ["BIRD", "FALLIN’", "SOLO", "WILLY"] },
    },
    startingBoard: [
      ["SOLO", "JERSEY", "WILLY", "WONKA"],
      ["YORK", "HAVEN", "KINDER", "BIRD"],
      ["PADS", "CHARMS", "PORT", "HELMET"],
      ["RETREAT", "FALLIN’", "CLEATS", "SHELTER"],
    ],
  },
  {
    id: "540",
    name: "Connections #540",
    createdAt: "2024-12-02T00:00:00.000Z",
    board: {
      ANNOUNCE: {
        level: 0,
        members: ["BROADCAST", "DECLARE", "HERALD", "TRUMPET"],
      },
      "THINGS INVOLVING MALLETS": {
        level: 1,
        members: ["CARPENTRY", "CROQUET", "WHAC-A-MOLE", "XYLOPHONE"],
      },
      "ICON EMBROIDERED ON A POLO SHIRT": {
        level: 2,
        members: ["CROCODILE", "LAUREL", "POLO PLAYER", "SWOOSH"],
      },
      "___ CLIP": {
        level: 3,
        members: ["ALLIGATOR", "HAIR", "PAPER", "VIDEO"],
      },
    },
    startingBoard: [
      ["TRUMPET", "CROQUET", "CROCODILE", "PAPER"],
      ["ALLIGATOR", "HAIR", "WHAC-A-MOLE", "HERALD"],
      ["POLO PLAYER", "BROADCAST", "LAUREL", "XYLOPHONE"],
      ["CARPENTRY", "VIDEO", "SWOOSH", "DECLARE"],
    ],
  },
  {
    id: "541",
    name: "Connections #541",
    createdAt: "2024-12-03T00:00:00.000Z",
    board: {
      SOPRANOS: { level: 0, members: ["CARMELA", "JUNIOR", "MEADOW", "TONY"] },
      "FAMILIAL NICKNAMES": {
        level: 1,
        members: ["CUZ", "GRAMMY", "MUMMY", "POP"],
      },
      "“SESAME STREET” CHARACTERS": {
        level: 2,
        members: ["COOKIE", "COUNT", "OSCAR", "SNUFFY"],
      },
      "NAMES THAT SOUND LIKE TWO LETTERS": {
        level: 3,
        members: ["CECE", "EDIE", "EMMY", "KATIE"],
      },
    },
    startingBoard: [
      ["COOKIE", "EMMY", "GRAMMY", "KATIE"],
      ["JUNIOR", "OSCAR", "TONY", "POP"],
      ["CECE", "MUMMY", "COUNT", "MEADOW"],
      ["SNUFFY", "CUZ", "CARMELA", "EDIE"],
    ],
  },
  {
    id: "542",
    name: "Connections #542",
    createdAt: "2024-12-04T00:00:00.000Z",
    board: {
      STEER: { level: 0, members: ["DIRECT", "GUIDE", "LEAD", "SHEPHERD"] },
      "THINGS WITH NEEDLE/S": {
        level: 1,
        members: ["COMPASS", "PINE TREE", "SEWING KIT", "TURNTABLE"],
      },
      "FIGURES IN GREEK MYTH": {
        level: 2,
        members: ["ATLAS", "ECHO", "HELEN", "PAN"],
      },
      "STARTING WITH SYNONYMS FOR LAVATORY": {
        level: 3,
        members: ["CANDLE", "LOOFAH", "JOHNSON", "TOILETRIES"],
      },
    },
    startingBoard: [
      ["PAN", "PINE TREE", "LEAD", "CANDLE"],
      ["COMPASS", "LOOFAH", "TURNTABLE", "SHEPHERD"],
      ["ATLAS", "TOILETRIES", "ECHO", "GUIDE"],
      ["SEWING KIT", "HELEN", "DIRECT", "JOHNSON"],
    ],
  },
  {
    id: "543",
    name: "Connections #543",
    createdAt: "2024-12-05T00:00:00.000Z",
    board: {
      APTITUDE: { level: 0, members: ["FLAIR", "GIFT", "INSTINCT", "NOSE"] },
      EXTERIOR: { level: 1, members: ["FACE", "FRONT", "OUTSIDE", "SURFACE"] },
      "TECH COMPANIES": {
        level: 2,
        members: ["AMAZON", "APPLE", "INTUIT", "ORACLE"],
      },
      ___STONE: { level: 3, members: ["BRIM", "LIME", "RHINE", "YELLOW"] },
    },
    startingBoard: [
      ["APPLE", "LIME", "YELLOW", "FACE"],
      ["NOSE", "FRONT", "RHINE", "AMAZON"],
      ["SURFACE", "GIFT", "ORACLE", "BRIM"],
      ["INSTINCT", "INTUIT", "OUTSIDE", "FLAIR"],
    ],
  },
];
