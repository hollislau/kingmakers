import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AttributeName {
  STABILITY = "STABILITY",
  LOYALTY = "LOYALTY",
  ECONOMY = "ECONOMY",
  UNREST = "UNREST",
  SIZE = "SIZE",
  TREASURY = "TREASURY",
  REVENUE = "REVENUE",
  CONSUMPTION = "CONSUMPTION",
  CORRUPTION = "CORRUPTION",
  CRIME = "CRIME",
  LAW = "LAW",
  LORE = "LORE",
  PRODUCTIVITY = "PRODUCTIVITY",
  SOCIETY = "SOCIETY",
  DEFENSE = "DEFENSE"
}

export enum MainTerrainType {
  DESERT = "DESERT",
  FOREST = "FOREST",
  HILL = "HILL",
  MARSH = "MARSH",
  MOUNTAIN = "MOUNTAIN",
  PLAIN = "PLAIN"
}

export enum TerrainType {
  DESERT = "DESERT",
  FOREST = "FOREST",
  HILL = "HILL",
  MARSH = "MARSH",
  MOUNTAIN = "MOUNTAIN",
  PLAIN = "PLAIN",
  COASTLINE = "COASTLINE",
  RIVER = "RIVER",
  LAKE = "LAKE"
}

export enum ImprovementType {
  AQUEDUCT = "AQUEDUCT",
  CANAL = "CANAL",
  FARM = "FARM",
  FISHERY = "FISHERY",
  FORT = "FORT",
  HIGHWAY = "HIGHWAY",
  MINE = "MINE",
  PAVED_STREET = "PAVED_STREET",
  QUARRY = "QUARRY",
  ROAD = "ROAD",
  SAWMILL = "SAWMILL",
  WATCHTOWER = "WATCHTOWER"
}

export enum LocationType {
  DOMINION = "DOMINION",
  SETTLEMENT = "SETTLEMENT"
}

export enum AlignmentType {
  ETHIC = "ETHIC",
  MORALITY = "MORALITY"
}

export enum ImprovementCostType {
  STATIC = "STATIC",
  PER_LOT_BUILDING = "PER_LOT_BUILDING",
  ROAD_MULTIPLIER = "ROAD_MULTIPLIER",
  FARM = "FARM"
}

export enum BuildingType {
  ACADEMY = "ACADEMY",
  ALCHEMIST_LAB = "ALCHEMIST_LAB",
  ARENA = "ARENA",
  BANK = "BANK",
  BARDIC_COLLEGE = "BARDIC_COLLEGE",
  BARRACKS = "BARRACKS",
  BLACK_MARKET = "BLACK_MARKET",
  BREWERY = "BREWERY",
  BUREAU = "BUREAU",
  CASTERS_TOWER = "CASTERS_TOWER",
  CASTLE = "CASTLE",
  CATHEDRAL = "CATHEDRAL",
  CISTERN = "CISTERN",
  CITY_WALL = "CITY_WALL",
  DUMP = "DUMP",
  EXOTIC_ARTISAN = "EXOTIC_ARTISAN",
  FOREIGN_QUARTER = "FOREIGN_QUARTER",
  FOUNDRY = "FOUNDRY",
  GARRISON = "GARRISON",
  GRANARY = "GRANARY",
  GRAVEYARD = "GRAVEYARD",
  GUILDHALL = "GUILDHALL",
  HERBALIST = "HERBALIST",
  HOSPITAL = "HOSPITAL",
  HOUSE = "HOUSE",
  INN = "INN",
  JAIL = "JAIL",
  LIBRARY = "LIBRARY",
  LUXURY_STORE = "LUXURY_STORE",
  MAGICAL_ACADEMY = "MAGICAL_ACADEMY",
  MANSION = "MANSION",
  MARKET = "MARKET",
  MILL = "MILL",
  MOAT = "MOAT",
  MONASTERY = "MONASTERY",
  MONUMENT = "MONUMENT",
  MUSEUM = "MUSEUM",
  NOBLE_VILLA = "NOBLE_VILLA",
  OBSERVATORY = "OBSERVATORY",
  PALACE = "PALACE",
  PIER = "PIER",
  SHOP = "SHOP",
  SHRINE = "SHRINE",
  SMITHY = "SMITHY",
  STABLE = "STABLE",
  STOCKYARD = "STOCKYARD",
  TANNERY = "TANNERY",
  TAVERN = "TAVERN",
  TEMPLE = "TEMPLE",
  TENEMENT = "TENEMENT",
  THEATER = "THEATER",
  TOWN_HALL = "TOWN_HALL",
  TRADE_SHOP = "TRADE_SHOP",
  UNIVERSITY = "UNIVERSITY",
  WATCHTOWER = "WATCHTOWER",
  WATERFRONT = "WATERFRONT",
  WATERGATE = "WATERGATE",
  WATERWAY = "WATERWAY"
}

export enum UnitSize {
  D4 = "D4",
  D6 = "D6",
  D8 = "D8",
  D10 = "D10",
  D12 = "D12"
}

export declare class Turn {
  readonly upkeep: Upkeep;
  readonly construction: Construction;
  readonly attributes: Attributes;
  constructor(init: ModelInit<Turn>);
}

export declare class Upkeep {
  readonly ruler: Character;
  readonly ethic: AlignmentMod;
  readonly morality: AlignmentMod;
  readonly stabilityRoll: number;
  readonly unrestReductionRoll?: number;
  readonly revenueRoll: number;
  readonly revenueModifier?: number;
  constructor(init: ModelInit<Upkeep>);
}

export declare class Character {
  readonly firstName: string;
  readonly lastName?: string;
  readonly strength: number;
  readonly dexterity: number;
  readonly constitution: number;
  readonly intelligence: number;
  readonly wisdom: number;
  readonly charisma: number;
  constructor(init: ModelInit<Character>);
}

export declare class AlignmentMod {
  readonly label: string;
  readonly attributeName: AttributeName | keyof typeof AttributeName;
  readonly modifier: number;
  constructor(init: ModelInit<AlignmentMod>);
}

export declare class Construction {
  readonly leaders: (Character | null)[];
  readonly hexes: Hex[];
  constructor(init: ModelInit<Construction>);
}

export declare class Hex {
  readonly id: string;
  readonly settlement?: Settlement;
  readonly mainTerrain: MainTerrainType | keyof typeof MainTerrainType;
  readonly otherTerrain: (TerrainType | null)[] | keyof typeof TerrainType;
  readonly improvements: (ImprovementType | null)[] | keyof typeof ImprovementType;
  readonly adjacentHexes: string[];
  constructor(init: ModelInit<Hex>);
}

export declare class Settlement {
  readonly id: string;
  readonly name: string;
  readonly ethic: AlignmentMod;
  readonly morality: AlignmentMod;
  constructor(init: ModelInit<Settlement>);
}

export declare class Attributes {
  readonly stability: number;
  readonly loyalty: number;
  readonly economy: number;
  readonly unrest: number;
  readonly size: number;
  readonly treasury: number;
  readonly revenue: number;
  readonly consumption: number;
  readonly corruption: number;
  readonly crime: number;
  readonly law: number;
  readonly lore: number;
  readonly productivity: number;
  readonly society: number;
  readonly defense: number;
  constructor(init: ModelInit<Attributes>);
}

export declare class ImprovementPrerequisites {
  readonly settlementRequired: boolean;
  readonly minDominionSize?: number;
  readonly terrain: (TerrainType | null)[] | keyof typeof TerrainType;
  readonly improvements: (ImprovementType | null)[] | keyof typeof ImprovementType;
  readonly surroundingTerrain: (TerrainType | null)[] | keyof typeof TerrainType;
  readonly surroundingImprovements: (ImprovementType | null)[] | keyof typeof ImprovementType;
  readonly excludedByTerrain: (TerrainType | null)[] | keyof typeof TerrainType;
  readonly excludedByImprovements: (ImprovementType | null)[] | keyof typeof ImprovementType;
  constructor(init: ModelInit<ImprovementPrerequisites>);
}

export declare class ImprovementCost {
  readonly type: ImprovementCostType | keyof typeof ImprovementCostType;
  readonly value?: number;
  constructor(init: ModelInit<ImprovementCost>);
}

export declare class ImprovementEffects {
  readonly modifiers: (ImprovementModifier | null)[];
  readonly countsAsBuildings: (BuildingType | null)[] | keyof typeof BuildingType;
  readonly countsAsTerrain: (TerrainType | null)[] | keyof typeof TerrainType;
  readonly unitHousing?: UnitSize | keyof typeof UnitSize;
  constructor(init: ModelInit<ImprovementEffects>);
}

export declare class ImprovementModifier {
  readonly attributeName: AttributeName | keyof typeof AttributeName;
  readonly modifier: number;
  readonly dominionTerrainScaling?: DominionTerrainScaling;
  readonly hexTerrainRequirements: (TerrainType | null)[] | keyof typeof TerrainType;
  readonly hexImprovementRequirements: (ImprovementType | null)[] | keyof typeof ImprovementType;
  readonly taxationRequired: boolean;
  constructor(init: ModelInit<ImprovementModifier>);
}

export declare class DominionTerrainScaling {
  readonly type: TerrainType | keyof typeof TerrainType;
  readonly forEvery: number;
  constructor(init: ModelInit<DominionTerrainScaling>);
}

export declare class Dominion {
  readonly id: string;
  readonly userId: string;
  readonly turns: (Turn | null)[];
  readonly notes?: string;
  constructor(init: ModelInit<Dominion>);
  static copyOf(source: Dominion, mutator: (draft: MutableModel<Dominion>) => MutableModel<Dominion> | void): Dominion;
}

export declare class Alignment {
  readonly id: string;
  readonly label: string;
  readonly locationType: LocationType | keyof typeof LocationType;
  readonly alignmentType: AlignmentType | keyof typeof AlignmentType;
  readonly attributeName: AttributeName | keyof typeof AttributeName;
  readonly modifier: number;
  readonly sortOrder: number;
  constructor(init: ModelInit<Alignment>);
  static copyOf(source: Alignment, mutator: (draft: MutableModel<Alignment>) => MutableModel<Alignment> | void): Alignment;
}

export declare class Terrain {
  readonly id: string;
  readonly label: string;
  readonly terrainType: TerrainType | keyof typeof TerrainType;
  readonly isMain: boolean;
  readonly sortOrder: number;
  constructor(init: ModelInit<Terrain>);
  static copyOf(source: Terrain, mutator: (draft: MutableModel<Terrain>) => MutableModel<Terrain> | void): Terrain;
}

export declare class Improvement {
  readonly id: string;
  readonly type: ImprovementType | keyof typeof ImprovementType;
  readonly label: string;
  readonly description: string;
  readonly prerequisites: ImprovementPrerequisites;
  readonly cost: ImprovementCost;
  readonly effects: ImprovementEffects;
  readonly upgradeableTo?: ImprovementType | keyof typeof ImprovementType;
  readonly sortOrder: number;
  constructor(init: ModelInit<Improvement>);
  static copyOf(source: Improvement, mutator: (draft: MutableModel<Improvement>) => MutableModel<Improvement> | void): Improvement;
}

export declare class CostByTerrain {
  readonly id: string;
  readonly type: TerrainType | keyof typeof TerrainType;
  readonly label: string;
  readonly farmCost?: number;
  readonly roadCost: number;
  readonly sortOrder: number;
  constructor(init: ModelInit<CostByTerrain>);
  static copyOf(source: CostByTerrain, mutator: (draft: MutableModel<CostByTerrain>) => MutableModel<CostByTerrain> | void): CostByTerrain;
}