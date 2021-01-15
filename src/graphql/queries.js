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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDominionEthic = /* GraphQL */ `
  query GetDominionEthic($id: ID!) {
    getDominionEthic(id: $id) {
      id
      version
      label
      attribute
      modifier
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listDominionEthics = /* GraphQL */ `
  query ListDominionEthics(
    $filter: ModelDominionEthicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDominionEthics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sortedDominionEthics = /* GraphQL */ `
  query SortedDominionEthics(
    $type: SortType
    $sortOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDominionEthicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortedDominionEthics(
      type: $type
      sortOrder: $sortOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDominionEthicHistory = /* GraphQL */ `
  query GetDominionEthicHistory($id: Ethic!, $version: Int!) {
    getDominionEthicHistory(id: $id, version: $version) {
      id
      version
      label
      attribute
      modifier
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listDominionEthicHistorys = /* GraphQL */ `
  query ListDominionEthicHistorys(
    $id: Ethic
    $version: ModelIntKeyConditionInput
    $filter: ModelDominionEthicHistoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDominionEthicHistorys(
      id: $id
      version: $version
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDominionMorality = /* GraphQL */ `
  query GetDominionMorality($id: ID!) {
    getDominionMorality(id: $id) {
      id
      version
      label
      attribute
      modifier
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listDominionMoralitys = /* GraphQL */ `
  query ListDominionMoralitys(
    $filter: ModelDominionMoralityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDominionMoralitys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sortedDominionMoralities = /* GraphQL */ `
  query SortedDominionMoralities(
    $type: SortType
    $sortOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDominionMoralityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortedDominionMoralities(
      type: $type
      sortOrder: $sortOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDominionMoralityHistory = /* GraphQL */ `
  query GetDominionMoralityHistory($id: Morality!, $version: Int!) {
    getDominionMoralityHistory(id: $id, version: $version) {
      id
      version
      label
      attribute
      modifier
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listDominionMoralityHistorys = /* GraphQL */ `
  query ListDominionMoralityHistorys(
    $id: Morality
    $version: ModelIntKeyConditionInput
    $filter: ModelDominionMoralityHistoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDominionMoralityHistorys(
      id: $id
      version: $version
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSettlementEthic = /* GraphQL */ `
  query GetSettlementEthic($id: ID!) {
    getSettlementEthic(id: $id) {
      id
      version
      label
      attribute
      modifier
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listSettlementEthics = /* GraphQL */ `
  query ListSettlementEthics(
    $filter: ModelSettlementEthicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettlementEthics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sortedSettlementEthics = /* GraphQL */ `
  query SortedSettlementEthics(
    $type: SortType
    $sortOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSettlementEthicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortedSettlementEthics(
      type: $type
      sortOrder: $sortOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSettlementEthicHistory = /* GraphQL */ `
  query GetSettlementEthicHistory($id: Ethic!, $version: Int!) {
    getSettlementEthicHistory(id: $id, version: $version) {
      id
      version
      label
      attribute
      modifier
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listSettlementEthicHistorys = /* GraphQL */ `
  query ListSettlementEthicHistorys(
    $id: Ethic
    $version: ModelIntKeyConditionInput
    $filter: ModelSettlementEthicHistoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSettlementEthicHistorys(
      id: $id
      version: $version
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSettlementMorality = /* GraphQL */ `
  query GetSettlementMorality($id: ID!) {
    getSettlementMorality(id: $id) {
      id
      version
      label
      attribute
      modifier
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listSettlementMoralitys = /* GraphQL */ `
  query ListSettlementMoralitys(
    $filter: ModelSettlementMoralityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettlementMoralitys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sortedSettlementMoralities = /* GraphQL */ `
  query SortedSettlementMoralities(
    $type: SortType
    $sortOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSettlementMoralityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortedSettlementMoralities(
      type: $type
      sortOrder: $sortOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSettlementMoralityHistory = /* GraphQL */ `
  query GetSettlementMoralityHistory($id: Morality!, $version: Int!) {
    getSettlementMoralityHistory(id: $id, version: $version) {
      id
      version
      label
      attribute
      modifier
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listSettlementMoralityHistorys = /* GraphQL */ `
  query ListSettlementMoralityHistorys(
    $id: Morality
    $version: ModelIntKeyConditionInput
    $filter: ModelSettlementMoralityHistoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSettlementMoralityHistorys(
      id: $id
      version: $version
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        version
        label
        attribute
        modifier
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTerrain = /* GraphQL */ `
  query GetTerrain($id: ID!) {
    getTerrain(id: $id) {
      id
      version
      label
      isMain
      sortOrder
      type
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
        version
        label
        isMain
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sortedTerrain = /* GraphQL */ `
  query SortedTerrain(
    $type: SortType
    $sortOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTerrainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortedTerrain(
      type: $type
      sortOrder: $sortOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        isMain
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTerrainHistory = /* GraphQL */ `
  query GetTerrainHistory($id: TerrainType!, $version: Int!) {
    getTerrainHistory(id: $id, version: $version) {
      id
      version
      label
      isMain
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listTerrainHistorys = /* GraphQL */ `
  query ListTerrainHistorys(
    $id: TerrainType
    $version: ModelIntKeyConditionInput
    $filter: ModelTerrainHistoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTerrainHistorys(
      id: $id
      version: $version
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        version
        label
        isMain
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImprovement = /* GraphQL */ `
  query GetImprovement($id: ID!) {
    getImprovement(id: $id) {
      id
      version
      label
      description
      prerequisites {
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
          attribute
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
      type
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
        version
        label
        description
        prerequisites {
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
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sortedImprovements = /* GraphQL */ `
  query SortedImprovements(
    $type: SortType
    $sortOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelImprovementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortedImprovements(
      type: $type
      sortOrder: $sortOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        description
        prerequisites {
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
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImprovementHistory = /* GraphQL */ `
  query GetImprovementHistory($id: ImprovementType!, $version: Int!) {
    getImprovementHistory(id: $id, version: $version) {
      id
      version
      label
      description
      prerequisites {
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
          attribute
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
      type
      createdAt
      updatedAt
    }
  }
`;
export const listImprovementHistorys = /* GraphQL */ `
  query ListImprovementHistorys(
    $id: ImprovementType
    $version: ModelIntKeyConditionInput
    $filter: ModelImprovementHistoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listImprovementHistorys(
      id: $id
      version: $version
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        version
        label
        description
        prerequisites {
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
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCostByTerrain = /* GraphQL */ `
  query GetCostByTerrain($id: ID!) {
    getCostByTerrain(id: $id) {
      id
      version
      label
      farmCost
      roadCost
      sortOrder
      type
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
        version
        label
        farmCost
        roadCost
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sortedCostsByTerrain = /* GraphQL */ `
  query SortedCostsByTerrain(
    $type: SortType
    $sortOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCostByTerrainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortedCostsByTerrain(
      type: $type
      sortOrder: $sortOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        version
        label
        farmCost
        roadCost
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCostByTerrainHistory = /* GraphQL */ `
  query GetCostByTerrainHistory($id: TerrainType!, $version: Int!) {
    getCostByTerrainHistory(id: $id, version: $version) {
      id
      version
      label
      farmCost
      roadCost
      sortOrder
      type
      createdAt
      updatedAt
    }
  }
`;
export const listCostByTerrainHistorys = /* GraphQL */ `
  query ListCostByTerrainHistorys(
    $id: TerrainType
    $version: ModelIntKeyConditionInput
    $filter: ModelCostByTerrainHistoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCostByTerrainHistorys(
      id: $id
      version: $version
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        version
        label
        farmCost
        roadCost
        sortOrder
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
