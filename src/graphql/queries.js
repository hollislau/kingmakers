/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDominion = /* GraphQL */ `
  query GetDominion($id: ID!) {
    getDominion(id: $id) {
      id
      userId
      turns {
        upkeep {
          stabilityRoll
          unrestReductionRoll
          revenueRoll
          revenueModifier
        }
        attributes {
          stability
          loyalty
          economy
          unrest
          size
          treasury
          revenue
          consumption
          corruption
          crime
          law
          lore
          productivity
          society
          defense
        }
      }
      notes
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listDominions = /* GraphQL */ `
  query ListDominions(
    $filter: ModelDominionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDominions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        notes
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDominions = /* GraphQL */ `
  query SyncDominions(
    $filter: ModelDominionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDominions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        notes
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getAlignment = /* GraphQL */ `
  query GetAlignment($id: ID!) {
    getAlignment(id: $id) {
      id
      label
      locationType
      alignmentType
      attributeName
      modifier
      sortOrder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listAlignments = /* GraphQL */ `
  query ListAlignments(
    $filter: ModelAlignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        locationType
        alignmentType
        attributeName
        modifier
        sortOrder
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAlignments = /* GraphQL */ `
  query SyncAlignments(
    $filter: ModelAlignmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAlignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        label
        locationType
        alignmentType
        attributeName
        modifier
        sortOrder
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTerrain = /* GraphQL */ `
  query GetTerrain($id: ID!) {
    getTerrain(id: $id) {
      id
      label
      terrainType
      isMain
      sortOrder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTerrains = /* GraphQL */ `
  query ListTerrains(
    $filter: ModelTerrainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerrains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        terrainType
        isMain
        sortOrder
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTerrains = /* GraphQL */ `
  query SyncTerrains(
    $filter: ModelTerrainFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTerrains(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        label
        terrainType
        isMain
        sortOrder
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getImprovement = /* GraphQL */ `
  query GetImprovement($id: ID!) {
    getImprovement(id: $id) {
      id
      type
      label
      description
      prerequisites {
        settlementRequired
        minDominionSize
        terrain
        improvements
        surroundingTerrain
        surroundingImprovements
        excludedByTerrain
        excludedByImprovements
      }
      cost {
        type
        value
      }
      effects {
        modifiers {
          attributeName
          modifier
          hexTerrainRequirements
          hexImprovementRequirements
          taxationRequired
        }
        countsAsBuildings
        countsAsTerrain
        unitHousing
      }
      upgradeableTo
      sortOrder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listImprovements = /* GraphQL */ `
  query ListImprovements(
    $filter: ModelImprovementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImprovements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        label
        description
        prerequisites {
          settlementRequired
          minDominionSize
          terrain
          improvements
          surroundingTerrain
          surroundingImprovements
          excludedByTerrain
          excludedByImprovements
        }
        cost {
          type
          value
        }
        effects {
          countsAsBuildings
          countsAsTerrain
          unitHousing
        }
        upgradeableTo
        sortOrder
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncImprovements = /* GraphQL */ `
  query SyncImprovements(
    $filter: ModelImprovementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImprovements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        label
        description
        prerequisites {
          settlementRequired
          minDominionSize
          terrain
          improvements
          surroundingTerrain
          surroundingImprovements
          excludedByTerrain
          excludedByImprovements
        }
        cost {
          type
          value
        }
        effects {
          countsAsBuildings
          countsAsTerrain
          unitHousing
        }
        upgradeableTo
        sortOrder
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCostByTerrain = /* GraphQL */ `
  query GetCostByTerrain($id: ID!) {
    getCostByTerrain(id: $id) {
      id
      type
      label
      farmCost
      roadCost
      sortOrder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCostByTerrains = /* GraphQL */ `
  query ListCostByTerrains(
    $filter: ModelCostByTerrainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCostByTerrains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        label
        farmCost
        roadCost
        sortOrder
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCostByTerrains = /* GraphQL */ `
  query SyncCostByTerrains(
    $filter: ModelCostByTerrainFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCostByTerrains(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        label
        farmCost
        roadCost
        sortOrder
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
