/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDominion = /* GraphQL */ `
  mutation CreateDominion(
    $input: CreateDominionInput!
    $condition: ModelDominionConditionInput
  ) {
    createDominion(input: $input, condition: $condition) {
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
export const updateDominion = /* GraphQL */ `
  mutation UpdateDominion(
    $input: UpdateDominionInput!
    $condition: ModelDominionConditionInput
  ) {
    updateDominion(input: $input, condition: $condition) {
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
export const deleteDominion = /* GraphQL */ `
  mutation DeleteDominion(
    $input: DeleteDominionInput!
    $condition: ModelDominionConditionInput
  ) {
    deleteDominion(input: $input, condition: $condition) {
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
export const createAlignment = /* GraphQL */ `
  mutation CreateAlignment(
    $input: CreateAlignmentInput!
    $condition: ModelAlignmentConditionInput
  ) {
    createAlignment(input: $input, condition: $condition) {
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
export const updateAlignment = /* GraphQL */ `
  mutation UpdateAlignment(
    $input: UpdateAlignmentInput!
    $condition: ModelAlignmentConditionInput
  ) {
    updateAlignment(input: $input, condition: $condition) {
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
export const deleteAlignment = /* GraphQL */ `
  mutation DeleteAlignment(
    $input: DeleteAlignmentInput!
    $condition: ModelAlignmentConditionInput
  ) {
    deleteAlignment(input: $input, condition: $condition) {
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
export const createTerrain = /* GraphQL */ `
  mutation CreateTerrain(
    $input: CreateTerrainInput!
    $condition: ModelTerrainConditionInput
  ) {
    createTerrain(input: $input, condition: $condition) {
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
export const updateTerrain = /* GraphQL */ `
  mutation UpdateTerrain(
    $input: UpdateTerrainInput!
    $condition: ModelTerrainConditionInput
  ) {
    updateTerrain(input: $input, condition: $condition) {
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
export const deleteTerrain = /* GraphQL */ `
  mutation DeleteTerrain(
    $input: DeleteTerrainInput!
    $condition: ModelTerrainConditionInput
  ) {
    deleteTerrain(input: $input, condition: $condition) {
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
export const createImprovement = /* GraphQL */ `
  mutation CreateImprovement(
    $input: CreateImprovementInput!
    $condition: ModelImprovementConditionInput
  ) {
    createImprovement(input: $input, condition: $condition) {
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
export const updateImprovement = /* GraphQL */ `
  mutation UpdateImprovement(
    $input: UpdateImprovementInput!
    $condition: ModelImprovementConditionInput
  ) {
    updateImprovement(input: $input, condition: $condition) {
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
export const deleteImprovement = /* GraphQL */ `
  mutation DeleteImprovement(
    $input: DeleteImprovementInput!
    $condition: ModelImprovementConditionInput
  ) {
    deleteImprovement(input: $input, condition: $condition) {
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
export const createCostByTerrain = /* GraphQL */ `
  mutation CreateCostByTerrain(
    $input: CreateCostByTerrainInput!
    $condition: ModelCostByTerrainConditionInput
  ) {
    createCostByTerrain(input: $input, condition: $condition) {
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
export const updateCostByTerrain = /* GraphQL */ `
  mutation UpdateCostByTerrain(
    $input: UpdateCostByTerrainInput!
    $condition: ModelCostByTerrainConditionInput
  ) {
    updateCostByTerrain(input: $input, condition: $condition) {
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
export const deleteCostByTerrain = /* GraphQL */ `
  mutation DeleteCostByTerrain(
    $input: DeleteCostByTerrainInput!
    $condition: ModelCostByTerrainConditionInput
  ) {
    deleteCostByTerrain(input: $input, condition: $condition) {
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
