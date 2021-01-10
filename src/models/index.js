// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AttributeName = {
  "STABILITY": "STABILITY",
  "LOYALTY": "LOYALTY",
  "ECONOMY": "ECONOMY",
  "UNREST": "UNREST",
  "SIZE": "SIZE",
  "TREASURY": "TREASURY",
  "REVENUE": "REVENUE",
  "CONSUMPTION": "CONSUMPTION",
  "CORRUPTION": "CORRUPTION",
  "CRIME": "CRIME",
  "LAW": "LAW",
  "LORE": "LORE",
  "PRODUCTIVITY": "PRODUCTIVITY",
  "SOCIETY": "SOCIETY",
  "DEFENSE": "DEFENSE"
};

const MainTerrainType = {
  "DESERT": "DESERT",
  "FOREST": "FOREST",
  "HILL": "HILL",
  "MARSH": "MARSH",
  "MOUNTAIN": "MOUNTAIN",
  "PLAIN": "PLAIN"
};

const TerrainType = {
  "DESERT": "DESERT",
  "FOREST": "FOREST",
  "HILL": "HILL",
  "MARSH": "MARSH",
  "MOUNTAIN": "MOUNTAIN",
  "PLAIN": "PLAIN",
  "COASTLINE": "COASTLINE",
  "RIVER": "RIVER",
  "LAKE": "LAKE"
};

const ImprovementType = {
  "AQUEDUCT": "AQUEDUCT",
  "CANAL": "CANAL",
  "FARM": "FARM",
  "FISHERY": "FISHERY",
  "FORT": "FORT",
  "HIGHWAY": "HIGHWAY",
  "MINE": "MINE",
  "PAVED_STREET": "PAVED_STREET",
  "QUARRY": "QUARRY",
  "ROAD": "ROAD",
  "SAWMILL": "SAWMILL",
  "WATCHTOWER": "WATCHTOWER"
};

const LocationType = {
  "DOMINION": "DOMINION",
  "SETTLEMENT": "SETTLEMENT"
};

const AlignmentType = {
  "ETHIC": "ETHIC",
  "MORALITY": "MORALITY"
};

const ImprovementCostType = {
  "STATIC": "STATIC",
  "PER_LOT_BUILDING": "PER_LOT_BUILDING",
  "ROAD_MULTIPLIER": "ROAD_MULTIPLIER",
  "FARM": "FARM"
};

const BuildingType = {
  "ACADEMY": "ACADEMY",
  "ALCHEMIST_LAB": "ALCHEMIST_LAB",
  "ARENA": "ARENA",
  "BANK": "BANK",
  "BARDIC_COLLEGE": "BARDIC_COLLEGE",
  "BARRACKS": "BARRACKS",
  "BLACK_MARKET": "BLACK_MARKET",
  "BREWERY": "BREWERY",
  "BUREAU": "BUREAU",
  "CASTERS_TOWER": "CASTERS_TOWER",
  "CASTLE": "CASTLE",
  "CATHEDRAL": "CATHEDRAL",
  "CISTERN": "CISTERN",
  "CITY_WALL": "CITY_WALL",
  "DUMP": "DUMP",
  "EXOTIC_ARTISAN": "EXOTIC_ARTISAN",
  "FOREIGN_QUARTER": "FOREIGN_QUARTER",
  "FOUNDRY": "FOUNDRY",
  "GARRISON": "GARRISON",
  "GRANARY": "GRANARY",
  "GRAVEYARD": "GRAVEYARD",
  "GUILDHALL": "GUILDHALL",
  "HERBALIST": "HERBALIST",
  "HOSPITAL": "HOSPITAL",
  "HOUSE": "HOUSE",
  "INN": "INN",
  "JAIL": "JAIL",
  "LIBRARY": "LIBRARY",
  "LUXURY_STORE": "LUXURY_STORE",
  "MAGICAL_ACADEMY": "MAGICAL_ACADEMY",
  "MANSION": "MANSION",
  "MARKET": "MARKET",
  "MILL": "MILL",
  "MOAT": "MOAT",
  "MONASTERY": "MONASTERY",
  "MONUMENT": "MONUMENT",
  "MUSEUM": "MUSEUM",
  "NOBLE_VILLA": "NOBLE_VILLA",
  "OBSERVATORY": "OBSERVATORY",
  "PALACE": "PALACE",
  "PIER": "PIER",
  "SHOP": "SHOP",
  "SHRINE": "SHRINE",
  "SMITHY": "SMITHY",
  "STABLE": "STABLE",
  "STOCKYARD": "STOCKYARD",
  "TANNERY": "TANNERY",
  "TAVERN": "TAVERN",
  "TEMPLE": "TEMPLE",
  "TENEMENT": "TENEMENT",
  "THEATER": "THEATER",
  "TOWN_HALL": "TOWN_HALL",
  "TRADE_SHOP": "TRADE_SHOP",
  "UNIVERSITY": "UNIVERSITY",
  "WATCHTOWER": "WATCHTOWER",
  "WATERFRONT": "WATERFRONT",
  "WATERGATE": "WATERGATE",
  "WATERWAY": "WATERWAY"
};

const UnitSize = {
  "D4": "D4",
  "D6": "D6",
  "D8": "D8",
  "D10": "D10",
  "D12": "D12"
};

const { Dominion, Alignment, Terrain, Improvement, CostByTerrain, Turn, Upkeep, Character, AlignmentMod, Construction, Hex, Settlement, Attributes, ImprovementPrerequisites, ImprovementCost, ImprovementEffects, ImprovementModifier, DominionTerrainScaling } = initSchema(schema);

export {
  Dominion,
  Alignment,
  Terrain,
  Improvement,
  CostByTerrain,
  AttributeName,
  MainTerrainType,
  TerrainType,
  ImprovementType,
  LocationType,
  AlignmentType,
  ImprovementCostType,
  BuildingType,
  UnitSize,
  Turn,
  Upkeep,
  Character,
  AlignmentMod,
  Construction,
  Hex,
  Settlement,
  Attributes,
  ImprovementPrerequisites,
  ImprovementCost,
  ImprovementEffects,
  ImprovementModifier,
  DominionTerrainScaling
};