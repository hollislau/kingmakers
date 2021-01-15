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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDominionEthic = /* GraphQL */ `
  mutation CreateDominionEthic(
    $input: CreateDominionEthicInput!
    $condition: ModelDominionEthicConditionInput
  ) {
    createDominionEthic(input: $input, condition: $condition) {
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
export const updateDominionEthic = /* GraphQL */ `
  mutation UpdateDominionEthic(
    $input: UpdateDominionEthicInput!
    $condition: ModelDominionEthicConditionInput
  ) {
    updateDominionEthic(input: $input, condition: $condition) {
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
export const deleteDominionEthic = /* GraphQL */ `
  mutation DeleteDominionEthic(
    $input: DeleteDominionEthicInput!
    $condition: ModelDominionEthicConditionInput
  ) {
    deleteDominionEthic(input: $input, condition: $condition) {
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
export const createDominionEthicHistory = /* GraphQL */ `
  mutation CreateDominionEthicHistory(
    $input: CreateDominionEthicHistoryInput!
    $condition: ModelDominionEthicHistoryConditionInput
  ) {
    createDominionEthicHistory(input: $input, condition: $condition) {
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
export const updateDominionEthicHistory = /* GraphQL */ `
  mutation UpdateDominionEthicHistory(
    $input: UpdateDominionEthicHistoryInput!
    $condition: ModelDominionEthicHistoryConditionInput
  ) {
    updateDominionEthicHistory(input: $input, condition: $condition) {
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
export const deleteDominionEthicHistory = /* GraphQL */ `
  mutation DeleteDominionEthicHistory(
    $input: DeleteDominionEthicHistoryInput!
    $condition: ModelDominionEthicHistoryConditionInput
  ) {
    deleteDominionEthicHistory(input: $input, condition: $condition) {
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
export const createDominionMorality = /* GraphQL */ `
  mutation CreateDominionMorality(
    $input: CreateDominionMoralityInput!
    $condition: ModelDominionMoralityConditionInput
  ) {
    createDominionMorality(input: $input, condition: $condition) {
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
export const updateDominionMorality = /* GraphQL */ `
  mutation UpdateDominionMorality(
    $input: UpdateDominionMoralityInput!
    $condition: ModelDominionMoralityConditionInput
  ) {
    updateDominionMorality(input: $input, condition: $condition) {
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
export const deleteDominionMorality = /* GraphQL */ `
  mutation DeleteDominionMorality(
    $input: DeleteDominionMoralityInput!
    $condition: ModelDominionMoralityConditionInput
  ) {
    deleteDominionMorality(input: $input, condition: $condition) {
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
export const createDominionMoralityHistory = /* GraphQL */ `
  mutation CreateDominionMoralityHistory(
    $input: CreateDominionMoralityHistoryInput!
    $condition: ModelDominionMoralityHistoryConditionInput
  ) {
    createDominionMoralityHistory(input: $input, condition: $condition) {
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
export const updateDominionMoralityHistory = /* GraphQL */ `
  mutation UpdateDominionMoralityHistory(
    $input: UpdateDominionMoralityHistoryInput!
    $condition: ModelDominionMoralityHistoryConditionInput
  ) {
    updateDominionMoralityHistory(input: $input, condition: $condition) {
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
export const deleteDominionMoralityHistory = /* GraphQL */ `
  mutation DeleteDominionMoralityHistory(
    $input: DeleteDominionMoralityHistoryInput!
    $condition: ModelDominionMoralityHistoryConditionInput
  ) {
    deleteDominionMoralityHistory(input: $input, condition: $condition) {
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
export const createSettlementEthic = /* GraphQL */ `
  mutation CreateSettlementEthic(
    $input: CreateSettlementEthicInput!
    $condition: ModelSettlementEthicConditionInput
  ) {
    createSettlementEthic(input: $input, condition: $condition) {
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
export const updateSettlementEthic = /* GraphQL */ `
  mutation UpdateSettlementEthic(
    $input: UpdateSettlementEthicInput!
    $condition: ModelSettlementEthicConditionInput
  ) {
    updateSettlementEthic(input: $input, condition: $condition) {
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
export const deleteSettlementEthic = /* GraphQL */ `
  mutation DeleteSettlementEthic(
    $input: DeleteSettlementEthicInput!
    $condition: ModelSettlementEthicConditionInput
  ) {
    deleteSettlementEthic(input: $input, condition: $condition) {
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
export const createSettlementEthicHistory = /* GraphQL */ `
  mutation CreateSettlementEthicHistory(
    $input: CreateSettlementEthicHistoryInput!
    $condition: ModelSettlementEthicHistoryConditionInput
  ) {
    createSettlementEthicHistory(input: $input, condition: $condition) {
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
export const updateSettlementEthicHistory = /* GraphQL */ `
  mutation UpdateSettlementEthicHistory(
    $input: UpdateSettlementEthicHistoryInput!
    $condition: ModelSettlementEthicHistoryConditionInput
  ) {
    updateSettlementEthicHistory(input: $input, condition: $condition) {
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
export const deleteSettlementEthicHistory = /* GraphQL */ `
  mutation DeleteSettlementEthicHistory(
    $input: DeleteSettlementEthicHistoryInput!
    $condition: ModelSettlementEthicHistoryConditionInput
  ) {
    deleteSettlementEthicHistory(input: $input, condition: $condition) {
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
export const createSettlementMorality = /* GraphQL */ `
  mutation CreateSettlementMorality(
    $input: CreateSettlementMoralityInput!
    $condition: ModelSettlementMoralityConditionInput
  ) {
    createSettlementMorality(input: $input, condition: $condition) {
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
export const updateSettlementMorality = /* GraphQL */ `
  mutation UpdateSettlementMorality(
    $input: UpdateSettlementMoralityInput!
    $condition: ModelSettlementMoralityConditionInput
  ) {
    updateSettlementMorality(input: $input, condition: $condition) {
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
export const deleteSettlementMorality = /* GraphQL */ `
  mutation DeleteSettlementMorality(
    $input: DeleteSettlementMoralityInput!
    $condition: ModelSettlementMoralityConditionInput
  ) {
    deleteSettlementMorality(input: $input, condition: $condition) {
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
export const createSettlementMoralityHistory = /* GraphQL */ `
  mutation CreateSettlementMoralityHistory(
    $input: CreateSettlementMoralityHistoryInput!
    $condition: ModelSettlementMoralityHistoryConditionInput
  ) {
    createSettlementMoralityHistory(input: $input, condition: $condition) {
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
export const updateSettlementMoralityHistory = /* GraphQL */ `
  mutation UpdateSettlementMoralityHistory(
    $input: UpdateSettlementMoralityHistoryInput!
    $condition: ModelSettlementMoralityHistoryConditionInput
  ) {
    updateSettlementMoralityHistory(input: $input, condition: $condition) {
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
export const deleteSettlementMoralityHistory = /* GraphQL */ `
  mutation DeleteSettlementMoralityHistory(
    $input: DeleteSettlementMoralityHistoryInput!
    $condition: ModelSettlementMoralityHistoryConditionInput
  ) {
    deleteSettlementMoralityHistory(input: $input, condition: $condition) {
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
export const createTerrain = /* GraphQL */ `
  mutation CreateTerrain(
    $input: CreateTerrainInput!
    $condition: ModelTerrainConditionInput
  ) {
    createTerrain(input: $input, condition: $condition) {
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
export const updateTerrain = /* GraphQL */ `
  mutation UpdateTerrain(
    $input: UpdateTerrainInput!
    $condition: ModelTerrainConditionInput
  ) {
    updateTerrain(input: $input, condition: $condition) {
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
export const deleteTerrain = /* GraphQL */ `
  mutation DeleteTerrain(
    $input: DeleteTerrainInput!
    $condition: ModelTerrainConditionInput
  ) {
    deleteTerrain(input: $input, condition: $condition) {
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
export const createTerrainHistory = /* GraphQL */ `
  mutation CreateTerrainHistory(
    $input: CreateTerrainHistoryInput!
    $condition: ModelTerrainHistoryConditionInput
  ) {
    createTerrainHistory(input: $input, condition: $condition) {
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
export const updateTerrainHistory = /* GraphQL */ `
  mutation UpdateTerrainHistory(
    $input: UpdateTerrainHistoryInput!
    $condition: ModelTerrainHistoryConditionInput
  ) {
    updateTerrainHistory(input: $input, condition: $condition) {
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
export const deleteTerrainHistory = /* GraphQL */ `
  mutation DeleteTerrainHistory(
    $input: DeleteTerrainHistoryInput!
    $condition: ModelTerrainHistoryConditionInput
  ) {
    deleteTerrainHistory(input: $input, condition: $condition) {
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
export const createImprovement = /* GraphQL */ `
  mutation CreateImprovement(
    $input: CreateImprovementInput!
    $condition: ModelImprovementConditionInput
  ) {
    createImprovement(input: $input, condition: $condition) {
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
export const updateImprovement = /* GraphQL */ `
  mutation UpdateImprovement(
    $input: UpdateImprovementInput!
    $condition: ModelImprovementConditionInput
  ) {
    updateImprovement(input: $input, condition: $condition) {
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
export const deleteImprovement = /* GraphQL */ `
  mutation DeleteImprovement(
    $input: DeleteImprovementInput!
    $condition: ModelImprovementConditionInput
  ) {
    deleteImprovement(input: $input, condition: $condition) {
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
export const createImprovementHistory = /* GraphQL */ `
  mutation CreateImprovementHistory(
    $input: CreateImprovementHistoryInput!
    $condition: ModelImprovementHistoryConditionInput
  ) {
    createImprovementHistory(input: $input, condition: $condition) {
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
export const updateImprovementHistory = /* GraphQL */ `
  mutation UpdateImprovementHistory(
    $input: UpdateImprovementHistoryInput!
    $condition: ModelImprovementHistoryConditionInput
  ) {
    updateImprovementHistory(input: $input, condition: $condition) {
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
export const deleteImprovementHistory = /* GraphQL */ `
  mutation DeleteImprovementHistory(
    $input: DeleteImprovementHistoryInput!
    $condition: ModelImprovementHistoryConditionInput
  ) {
    deleteImprovementHistory(input: $input, condition: $condition) {
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
export const createCostByTerrain = /* GraphQL */ `
  mutation CreateCostByTerrain(
    $input: CreateCostByTerrainInput!
    $condition: ModelCostByTerrainConditionInput
  ) {
    createCostByTerrain(input: $input, condition: $condition) {
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
export const updateCostByTerrain = /* GraphQL */ `
  mutation UpdateCostByTerrain(
    $input: UpdateCostByTerrainInput!
    $condition: ModelCostByTerrainConditionInput
  ) {
    updateCostByTerrain(input: $input, condition: $condition) {
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
export const deleteCostByTerrain = /* GraphQL */ `
  mutation DeleteCostByTerrain(
    $input: DeleteCostByTerrainInput!
    $condition: ModelCostByTerrainConditionInput
  ) {
    deleteCostByTerrain(input: $input, condition: $condition) {
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
export const createCostByTerrainHistory = /* GraphQL */ `
  mutation CreateCostByTerrainHistory(
    $input: CreateCostByTerrainHistoryInput!
    $condition: ModelCostByTerrainHistoryConditionInput
  ) {
    createCostByTerrainHistory(input: $input, condition: $condition) {
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
export const updateCostByTerrainHistory = /* GraphQL */ `
  mutation UpdateCostByTerrainHistory(
    $input: UpdateCostByTerrainHistoryInput!
    $condition: ModelCostByTerrainHistoryConditionInput
  ) {
    updateCostByTerrainHistory(input: $input, condition: $condition) {
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
export const deleteCostByTerrainHistory = /* GraphQL */ `
  mutation DeleteCostByTerrainHistory(
    $input: DeleteCostByTerrainHistoryInput!
    $condition: ModelCostByTerrainHistoryConditionInput
  ) {
    deleteCostByTerrainHistory(input: $input, condition: $condition) {
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
