export const schema = {
    "models": {
        "Dominion": {
            "name": "Dominion",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "turns": {
                    "name": "turns",
                    "isArray": true,
                    "type": {
                        "nonModel": "Turn"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Dominions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "read",
                                    "create",
                                    "update",
                                    "delete"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Administrators"
                                ],
                                "operations": [
                                    "read",
                                    "create",
                                    "update",
                                    "delete"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Users"
                                ],
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Alignment": {
            "name": "Alignment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "locationType": {
                    "name": "locationType",
                    "isArray": false,
                    "type": {
                        "enum": "LocationType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "alignmentType": {
                    "name": "alignmentType",
                    "isArray": false,
                    "type": {
                        "enum": "AlignmentType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "attributeName": {
                    "name": "attributeName",
                    "isArray": false,
                    "type": {
                        "enum": "AttributeName"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "modifier": {
                    "name": "modifier",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "sortOrder": {
                    "name": "sortOrder",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Alignments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Administrators"
                                ],
                                "operations": [
                                    "read",
                                    "create",
                                    "update",
                                    "delete"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Users"
                                ],
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Terrain": {
            "name": "Terrain",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "terrainType": {
                    "name": "terrainType",
                    "isArray": false,
                    "type": {
                        "enum": "TerrainType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "isMain": {
                    "name": "isMain",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "sortOrder": {
                    "name": "sortOrder",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Terrains",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Administrators"
                                ],
                                "operations": [
                                    "read",
                                    "create",
                                    "update",
                                    "delete"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Users"
                                ],
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Improvement": {
            "name": "Improvement",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ImprovementType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "prerequisites": {
                    "name": "prerequisites",
                    "isArray": false,
                    "type": {
                        "nonModel": "ImprovementPrerequisites"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "cost": {
                    "name": "cost",
                    "isArray": false,
                    "type": {
                        "nonModel": "ImprovementCost"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "effects": {
                    "name": "effects",
                    "isArray": false,
                    "type": {
                        "nonModel": "ImprovementEffects"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "upgradeableTo": {
                    "name": "upgradeableTo",
                    "isArray": false,
                    "type": {
                        "enum": "ImprovementType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sortOrder": {
                    "name": "sortOrder",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Improvements",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Administrators"
                                ],
                                "operations": [
                                    "read",
                                    "create",
                                    "update",
                                    "delete"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Users"
                                ],
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CostByTerrain": {
            "name": "CostByTerrain",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "TerrainType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "farmCost": {
                    "name": "farmCost",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "roadCost": {
                    "name": "roadCost",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "sortOrder": {
                    "name": "sortOrder",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CostByTerrains",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Administrators"
                                ],
                                "operations": [
                                    "read",
                                    "create",
                                    "update",
                                    "delete"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Users"
                                ],
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "AttributeName": {
            "name": "AttributeName",
            "values": [
                "STABILITY",
                "LOYALTY",
                "ECONOMY",
                "UNREST",
                "SIZE",
                "TREASURY",
                "REVENUE",
                "CONSUMPTION",
                "CORRUPTION",
                "CRIME",
                "LAW",
                "LORE",
                "PRODUCTIVITY",
                "SOCIETY",
                "DEFENSE"
            ]
        },
        "MainTerrainType": {
            "name": "MainTerrainType",
            "values": [
                "DESERT",
                "FOREST",
                "HILL",
                "MARSH",
                "MOUNTAIN",
                "PLAIN"
            ]
        },
        "TerrainType": {
            "name": "TerrainType",
            "values": [
                "DESERT",
                "FOREST",
                "HILL",
                "MARSH",
                "MOUNTAIN",
                "PLAIN",
                "COASTLINE",
                "RIVER",
                "LAKE"
            ]
        },
        "ImprovementType": {
            "name": "ImprovementType",
            "values": [
                "AQUEDUCT",
                "CANAL",
                "FARM",
                "FISHERY",
                "FORT",
                "HIGHWAY",
                "MINE",
                "PAVED_STREET",
                "QUARRY",
                "ROAD",
                "SAWMILL",
                "WATCHTOWER"
            ]
        },
        "LocationType": {
            "name": "LocationType",
            "values": [
                "DOMINION",
                "SETTLEMENT"
            ]
        },
        "AlignmentType": {
            "name": "AlignmentType",
            "values": [
                "ETHIC",
                "MORALITY"
            ]
        },
        "ImprovementCostType": {
            "name": "ImprovementCostType",
            "values": [
                "STATIC",
                "PER_LOT_BUILDING",
                "ROAD_MULTIPLIER",
                "FARM"
            ]
        },
        "BuildingType": {
            "name": "BuildingType",
            "values": [
                "ACADEMY",
                "ALCHEMIST_LAB",
                "ARENA",
                "BANK",
                "BARDIC_COLLEGE",
                "BARRACKS",
                "BLACK_MARKET",
                "BREWERY",
                "BUREAU",
                "CASTERS_TOWER",
                "CASTLE",
                "CATHEDRAL",
                "CISTERN",
                "CITY_WALL",
                "DUMP",
                "EXOTIC_ARTISAN",
                "FOREIGN_QUARTER",
                "FOUNDRY",
                "GARRISON",
                "GRANARY",
                "GRAVEYARD",
                "GUILDHALL",
                "HERBALIST",
                "HOSPITAL",
                "HOUSE",
                "INN",
                "JAIL",
                "LIBRARY",
                "LUXURY_STORE",
                "MAGICAL_ACADEMY",
                "MANSION",
                "MARKET",
                "MILL",
                "MOAT",
                "MONASTERY",
                "MONUMENT",
                "MUSEUM",
                "NOBLE_VILLA",
                "OBSERVATORY",
                "PALACE",
                "PIER",
                "SHOP",
                "SHRINE",
                "SMITHY",
                "STABLE",
                "STOCKYARD",
                "TANNERY",
                "TAVERN",
                "TEMPLE",
                "TENEMENT",
                "THEATER",
                "TOWN_HALL",
                "TRADE_SHOP",
                "UNIVERSITY",
                "WATCHTOWER",
                "WATERFRONT",
                "WATERGATE",
                "WATERWAY"
            ]
        },
        "UnitSize": {
            "name": "UnitSize",
            "values": [
                "D4",
                "D6",
                "D8",
                "D10",
                "D12"
            ]
        }
    },
    "nonModels": {
        "Turn": {
            "name": "Turn",
            "fields": {
                "upkeep": {
                    "name": "upkeep",
                    "isArray": false,
                    "type": {
                        "nonModel": "Upkeep"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "construction": {
                    "name": "construction",
                    "isArray": false,
                    "type": {
                        "nonModel": "Construction"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "attributes": {
                    "name": "attributes",
                    "isArray": false,
                    "type": {
                        "nonModel": "Attributes"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Upkeep": {
            "name": "Upkeep",
            "fields": {
                "ruler": {
                    "name": "ruler",
                    "isArray": false,
                    "type": {
                        "nonModel": "Character"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "ethic": {
                    "name": "ethic",
                    "isArray": false,
                    "type": {
                        "nonModel": "AlignmentMod"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "morality": {
                    "name": "morality",
                    "isArray": false,
                    "type": {
                        "nonModel": "AlignmentMod"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "stabilityRoll": {
                    "name": "stabilityRoll",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "unrestReductionRoll": {
                    "name": "unrestReductionRoll",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "revenueRoll": {
                    "name": "revenueRoll",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "revenueModifier": {
                    "name": "revenueModifier",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Character": {
            "name": "Character",
            "fields": {
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "strength": {
                    "name": "strength",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "dexterity": {
                    "name": "dexterity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "constitution": {
                    "name": "constitution",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "intelligence": {
                    "name": "intelligence",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "wisdom": {
                    "name": "wisdom",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "charisma": {
                    "name": "charisma",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "AlignmentMod": {
            "name": "AlignmentMod",
            "fields": {
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "attributeName": {
                    "name": "attributeName",
                    "isArray": false,
                    "type": {
                        "enum": "AttributeName"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "modifier": {
                    "name": "modifier",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Construction": {
            "name": "Construction",
            "fields": {
                "leaders": {
                    "name": "leaders",
                    "isArray": true,
                    "type": {
                        "nonModel": "Character"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "hexes": {
                    "name": "hexes",
                    "isArray": true,
                    "type": {
                        "nonModel": "Hex"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                }
            }
        },
        "Hex": {
            "name": "Hex",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "settlement": {
                    "name": "settlement",
                    "isArray": false,
                    "type": {
                        "nonModel": "Settlement"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "mainTerrain": {
                    "name": "mainTerrain",
                    "isArray": false,
                    "type": {
                        "enum": "MainTerrainType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "otherTerrain": {
                    "name": "otherTerrain",
                    "isArray": true,
                    "type": {
                        "enum": "TerrainType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "improvements": {
                    "name": "improvements",
                    "isArray": true,
                    "type": {
                        "enum": "ImprovementType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "adjacentHexes": {
                    "name": "adjacentHexes",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                }
            }
        },
        "Settlement": {
            "name": "Settlement",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ethic": {
                    "name": "ethic",
                    "isArray": false,
                    "type": {
                        "nonModel": "AlignmentMod"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "morality": {
                    "name": "morality",
                    "isArray": false,
                    "type": {
                        "nonModel": "AlignmentMod"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Attributes": {
            "name": "Attributes",
            "fields": {
                "stability": {
                    "name": "stability",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "loyalty": {
                    "name": "loyalty",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "economy": {
                    "name": "economy",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "unrest": {
                    "name": "unrest",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "size": {
                    "name": "size",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "treasury": {
                    "name": "treasury",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "revenue": {
                    "name": "revenue",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "consumption": {
                    "name": "consumption",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "corruption": {
                    "name": "corruption",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "crime": {
                    "name": "crime",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "law": {
                    "name": "law",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "lore": {
                    "name": "lore",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "productivity": {
                    "name": "productivity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "society": {
                    "name": "society",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "defense": {
                    "name": "defense",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ImprovementPrerequisites": {
            "name": "ImprovementPrerequisites",
            "fields": {
                "settlementRequired": {
                    "name": "settlementRequired",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "minDominionSize": {
                    "name": "minDominionSize",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "terrain": {
                    "name": "terrain",
                    "isArray": true,
                    "type": {
                        "enum": "TerrainType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "improvements": {
                    "name": "improvements",
                    "isArray": true,
                    "type": {
                        "enum": "ImprovementType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "surroundingTerrain": {
                    "name": "surroundingTerrain",
                    "isArray": true,
                    "type": {
                        "enum": "TerrainType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "surroundingImprovements": {
                    "name": "surroundingImprovements",
                    "isArray": true,
                    "type": {
                        "enum": "ImprovementType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "excludedByTerrain": {
                    "name": "excludedByTerrain",
                    "isArray": true,
                    "type": {
                        "enum": "TerrainType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "excludedByImprovements": {
                    "name": "excludedByImprovements",
                    "isArray": true,
                    "type": {
                        "enum": "ImprovementType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                }
            }
        },
        "ImprovementCost": {
            "name": "ImprovementCost",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ImprovementCostType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ImprovementEffects": {
            "name": "ImprovementEffects",
            "fields": {
                "modifiers": {
                    "name": "modifiers",
                    "isArray": true,
                    "type": {
                        "nonModel": "ImprovementModifier"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "countsAsBuildings": {
                    "name": "countsAsBuildings",
                    "isArray": true,
                    "type": {
                        "enum": "BuildingType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "countsAsTerrain": {
                    "name": "countsAsTerrain",
                    "isArray": true,
                    "type": {
                        "enum": "TerrainType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "unitHousing": {
                    "name": "unitHousing",
                    "isArray": false,
                    "type": {
                        "enum": "UnitSize"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ImprovementModifier": {
            "name": "ImprovementModifier",
            "fields": {
                "attributeName": {
                    "name": "attributeName",
                    "isArray": false,
                    "type": {
                        "enum": "AttributeName"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "modifier": {
                    "name": "modifier",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "dominionTerrainScaling": {
                    "name": "dominionTerrainScaling",
                    "isArray": false,
                    "type": {
                        "nonModel": "DominionTerrainScaling"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "hexTerrainRequirements": {
                    "name": "hexTerrainRequirements",
                    "isArray": true,
                    "type": {
                        "enum": "TerrainType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "hexImprovementRequirements": {
                    "name": "hexImprovementRequirements",
                    "isArray": true,
                    "type": {
                        "enum": "ImprovementType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "taxationRequired": {
                    "name": "taxationRequired",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "DominionTerrainScaling": {
            "name": "DominionTerrainScaling",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "TerrainType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "forEvery": {
                    "name": "forEvery",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "version": "396f1d5e8638f98c6a5dd1e9b261beee"
};