var light =
    {
        "id": "thinkgeo-world-streets-light",
        "version": 1.3,
        "owner": "ThinkGeo LLC",
        "time": "2018/06/09",
        "background": "#aac6ee",
        "variables": {
            "@naturalAndSports": "#439c3c",
            "@tourism": "#7d5e48",
            "@transportation": "#30b7d9",
            "@cultural": "#5d869b",
            "@industrial": "#544757",
            "@shop": "#15b959",
            "@eat": "#ff8845",
            "@entertainment": "#49a940",
            "@medical": "#f77171",
            "@commonService": "#bc61c7",
            "@agriculture": "#e1e3d2",
            "@ice": "#ffffff",
            "@wood": "#d4e7cc",
            "@grassland": "#e5f1c9",
            "@scrub": "#cbe5bd",
            "@rock": "#ded6bc",
            "@wetland": "#d4ece1",
            "@park": "rgba(167, 218, 122, 0.35)",
            "@pitch": "#c1dcb9",
            "@swimmingPool": "#aadaff",
            "@sand": "#f1ebd1",
            "@cemetery": "#dff6d2",
            "@sand_opacity07": "rgba(241, 235, 209, 0.7)",
            "@sand_opacity05": "rgba(241, 235, 209, 0.5)",
            "@sand_opacity02": "rgba(241, 235, 209, 0.2)",
            "@crops": "#c9e4bb",
            "@crops_opacity07": "rgba(201, 228, 187, 0.7)",
            "@crops_opacity05": "rgba(201, 228, 187, 0.5)",
            "@crops_opacity02": "rgba(201, 228, 187, 0.2)",
            "@grass_opacity07": "rgba(229, 241, 201, 0.7)",
            "@grass_opacity05": "rgba(229, 241, 201, 0.5)",
            "@grass_opacity02": "rgba(229, 241, 201, 0.2)",
            "@swamps": "#dde7c2",
            "@swamps_opacity07": "rgba(221, 231, 194, 0.7)",
            "@swamps_opacity05": "rgba(221, 231, 194, 0.5)",
            "@swamps_opacity02": "rgba(221, 231, 194, 0.2)",
            "@trees": "#b8d7b5",
            "@trees_opacity07": "rgba(184, 215, 181, 0.7)",
            "@trees_opacity05": "rgba(184, 215, 181, 0.5)",
            "@trees_opacity02": "rgba(184, 215, 181, 0.2)",
            "@tundra": "#e4ecce",
            "@tundra_opacity07": "rgba(228, 236, 206, 0.7)",
            "@tundra_opacity05": "rgba(228, 236, 206, 0.5)",
            "@tundra_opacity02": "rgba(228, 236, 206, 0.2)",
            "@countryFill": "#f0eee8",
            "@urbanArea": "#e9e6de",
            "@water": "#aac6ee",
            "@waterLabels": "#496588",
            "@farmLabels": "#3cb40e",
            "@roadFill": "#ffffff",
            "@roadOutline": "#e5e5e5",
            "@motorwayFill": "#febd80",
            "@motorwayOutline": "#e9aa6f",
            "@motorwayFillTunnel": "#ddd",
            "@motorwayTunnelOutline": "#b3b3b3",
            "@primaryFill": "#ffffff",
            "@primaryOutline": "#e5e5e5",
            "@trunkFill": "#ffe659",
            "@trunkOutline": "#f0d43a",
            "@linkFill": "#fdc04e",
            "@roadTrack": "#efc14a",
            "@cycleway": "#abd0a7",
            "@roadShieldMotorway": "#f6ce93",
            "@roadShieldTrunk": "#ffe659",
            "@rail": "#cccccc",
            "@railOther": "#00ff00",
            "@railSubway": "#f3759f",
            "@lightRail": "#9ed899",
            "@aerowayLevel1": "#bcc4cd",
            "@aerowayLevel3": "#c5cdd7",
            "@aerowayLevel5": "#e5e5e5",
            "@adminLabelLevel1": "#6a6a69",
            "@adminLabelLevel3": "#8c8b86",
            "@adminLabelLevel5": "#a8a5a2",
            "@adminLabelLevel7": "#c1c1be",
            "@grayLevel0": "#333333",
            "@grayLevel1": "#666666",
            "@grayLevel2": "#737373",
            "@grayLevel3": "#808080",
            "@grayLevel4": "#999999",
            "@grayLevel5": "#cccccc",
            "@grayLevel6": "#cecece",
            "@grayLevel7": "#ffffff",
            "@buildingShadow": "#ccc8bd",
            "@buildingOutline": "#dad6cb",
            "@buildingFill": "#e9e4d8",
            "@buildingName": "#8b8a85",
            "@haloSolid": "#ffffff",
            "@haloTransp50": "rgba(255, 255, 255, 0.5)",
            "@haloTransp35": "rgba(255, 255, 255, 0.35)",
            "@name": "name_en",
            "@roadName": "name"
        },
        "styles": [
            {
                "id": "marine_name",
                "filter": "layerName='marine_name'",
                "text-wrap-width": 20,
                "text-name": "@name",
                "text-fill": "@waterLabels",
                "text-halo-fill": "@haloTransp50",
                "text-halo-radius": 2,
                "style": [
                    {
                        "filter": "class=0",
                        "style": [
                            {
                                "filter": "zoom>=1;zoom<=3",
                                "text-halo-radius": 1,
                                "text-font": "oblique 600 12px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom>=4;zoom<=5",
                                "text-font": "oblique 600 16px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom>=6;zoom<=10",
                                "text-halo-radius": 2,
                                "text-font": "oblique 600 20px Arial, Helvetica, sans-serif"
                            }
                        ]
                    },
                    {
                        "filter": "class='1,2,3,4'",
                        "text-font": "oblique 200 10px Arial, Helvetica, sans-serif",
                        "style": [
                            {
                                "filter": "zoom>=2;zoom<=3",
                                "text-halo-radius": 1,
                                "text-font": "oblique 500 10px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom>=4;zoom<=5",
                                "text-font": "oblique 500 12px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom>=6;zoom<=10",
                                "text-halo-radius": 2,
                                "text-font": "oblique 600 16px Arial, Helvetica, sans-serif"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "country",
                "filter": "layerName='country'",
                "style": [
                    {
                        "filter": "zoom>=0;zoom<=19;",
                        "polygon-fill": "@countryFill"
                    }
                ]
            },
            {
                "id": "urban",
                "filter": "layerName='urban'",
                "style": [
                    {
                        "filter": "zoom>=6;zoom<=9;",
                        "polygon-fill": "@urbanArea"
                    }
                ]
            },
            {
                "id": "water",
                "filter": "layerName='water'",
                "style": [
                    {
                        "filter": "zoom>=0;zoom<=19;",
                        "polygon-fill": "@water"
                    }
                ]
            },
            {
                "id": "country_boundary",
                "filter": "layerName='admin_boundary';admin_level=2",
                "style": [
                    {
                        "filter": "disputed=1",
                        "style": [
                            {
                                "filter": "zoom=1",
                                "line-width": 1,
                                "line-color": "@adminLabelLevel7"
                            },
                            {
                                "filter": "zoom>=2;zoom<=3",
                                "line-width": 3,
                                "line-color": "@haloTransp50",
                                "children": [
                                    {
                                        "line-width": 1,
                                        "line-color": "@adminLabelLevel3"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom>=4;zoom<=19",
                                "line-width": 5,
                                "line-color": "@haloTransp35",
                                "children": [
                                    {
                                        "line-width": 1,
                                        "line-color": "@adminLabelLevel3"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "disputed=0",
                        "line-width": 1,
                        "style": [
                            {
                                "filter": "zoom=1",
                                "line-color": "@adminLabelLevel7"
                            },
                            {
                                "filter": "zoom>=2;zoom<=10",
                                "line-color": "@adminLabelLevel3",
                                "line-dasharray": "3,3"
                            },
                            {
                                "filter": "zoom>=11;zoom<=19",
                                "line-width": 5,
                                "line-color": "@haloTransp35",
                                "children": [
                                    {
                                        "line-width": 3,
                                        "line-color": "@adminLabelLevel5",
                                        "line-dasharray": "8,6"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "province_boundary",
                "filter": "layerName='admin_boundary';admin_level=4",
                "line-width": 1,
                "line-color": "@grayLevel6",
                "style": [
                    {
                        "filter": "scalerank=0",
                        "style": [
                            {
                                "filter": "zoom=3"
                            },
                            {
                                "filter": "zoom>=4;zoom<=8",
                                "line-color": "@adminLabelLevel7"
                            }
                        ]
                    },
                    {
                        "filter": "scalerank=1",
                        "style": [
                            {
                                "filter": "zoom>=4;zoom<=8"
                            }
                        ]
                    },
                    {
                        "filter": "scalerank=2",
                        "style": [
                            {
                                "filter": "zoom>=5;zoom<=8"
                            }
                        ]
                    },
                    {
                        "filter": "zoom>=9",
                        "style": [
                            {
                                "line-color": "@adminLabelLevel7",
                                "line-width": 2,
                                "line-dasharray": "8,4,2,4"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "country_name",
                "filter": "layerName='admin_name'",
                "text-wrap-width": 30,
                "text-halo-fill": "@haloTransp50",
                "text-halo-radius": 2,
                "text-fill": "@adminLabelLevel1",
                "text-spacing": 5,
                "style": [
                    {
                        "filter": "class='country'",
                        "text-name": "@name",
                        "style": [
                            {
                                "filter": "labelrank=0",
                                "text-wrap-width": 100,
                                "style": [
                                    {
                                        "filter": "zoom=1",
                                        "text-font": "600 16px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=2",
                                        "text-font": "600 18px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=3",
                                        "text-font": "600 24px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=4",
                                        "text-fill": "@adminLabelLevel5",
                                        "text-font": "600 30px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=5",
                                        "text-fill": "@adminLabelLevel5",
                                        "text-font": "600 36px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            },
                            {
                                "filter": "labelrank=1",
                                "style": [
                                    {
                                        "filter": "zoom>=1;zoom<=2",
                                        "text-fill": "@adminLabelLevel3",
                                        "text-font": "500 11px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=3",
                                        "text-fill": "@adminLabelLevel3",
                                        "text-font": "600 14px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=4",
                                        "text-font": "600 22px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=5",
                                        "text-fill": "@adminLabelLevel5",
                                        "text-font": "600 30px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            },
                            {
                                "filter": "labelrank=2",
                                "style": [
                                    {
                                        "filter": "zoom=2",
                                        "text-font": "500 11px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=3",
                                        "text-font": "600 12px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=4",
                                        "text-font": "600 15px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=5",
                                        "text-fill": "@adminLabelLevel7",
                                        "text-font": "600 24px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            },
                            {
                                "filter": "labelrank>=3;labelrank<=4",
                                "style": [
                                    {
                                        "filter": "zoom=3",
                                        "text-font": "600 10px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=4",
                                        "text-font": "600 13px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=5",
                                        "text-fill": "@adminLabelLevel7",
                                        "text-font": "600 16px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            },
                            {
                                "filter": "labelrank>=5;labelrank<=6",
                                "style": [
                                    {
                                        "filter": "zoom>=4;zoom<=5",
                                        "text-font": "500 12px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            },
                            {
                                "filter": "labelrank>=7",
                                "style": [
                                    {
                                        "filter": "zoom=5",
                                        "text-font": "500 12px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "visible": true
            },
            {
                "id": "state_name",
                "filter": "layerName='admin_name'",
                "style": [
                    {
                        "filter": "class='state'",
                        "text-name": "@name",
                        "text-fill": "@adminLabelLevel3",
                        "text-wrap-width": 30,
                        "text-halo-fill": "@haloTransp50",
                        "text-halo-radius": 2,
                        "text-spacing": 1,
                        "style": [
                            {
                                "filter": "labelrank=0",
                                "style": [
                                    {
                                        "filter": "zoom=3",
                                        "text-halo-radius": 1,
                                        "text-min-distance": 1,
                                        "text-letter-case": "uppercase",
                                        "text-font": "500 9px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=4",
                                        "text-fill": "@adminLabelLevel3",
                                        "text-letter-case": "uppercase",
                                        "text-font": "500 12px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=5",
                                        "text-fill": "@adminLabelLevel3",
                                        "text-letter-case": "uppercase",
                                        "text-font": "500 18px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom>=6;zoom<=7",
                                        "text-letter-case": "uppercase",
                                        "text-font": "500 26px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            },
                            {
                                "filter": "labelrank=1",
                                "style": [
                                    {
                                        "filter": "zoom=5",
                                        "text-fill": "@adminLabelLevel3",
                                        "text-font": "small-caps 500 12px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom>=6;zoom<=7",
                                        "text-fill": "@adminLabelLevel3",
                                        "text-font": "small-caps 500 18px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            },
                            {
                                "filter": "labelrank=2",
                                "style": [
                                    {
                                        "filter": "zoom=6",
                                        "text-font": "small-caps 500 12px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom=7",
                                        "text-font": "small-caps 500 14px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            },
                            {
                                "filter": "labelrank>=3;labelrank<=4",
                                "style": [
                                    {
                                        "text-font": "small-caps 500 11px Arial, Helvetica, sans-serif",
                                        "filter": "zoom>=6;zoom<=7"
                                    }
                                ]
                            },
                            {
                                "filter": "labelrank>=5",
                                "style": [
                                    {
                                        "filter": "zoom>=6;zoom<=7",
                                        "text-font": "small-caps 500 10px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "aeroway",
                "filter": "layerName='aeroway'",
                "style": [
                    {
                        "filter": "class='aerodrome'",
                        "style": [
                            {
                                "filter": "zoom>=10;zoom<=19;",
                                "polygon-fill": "@aerowayLevel5"
                            }
                        ]
                    },
                    {
                        "filter": "class='runway'",
                        "line-color": "@aerowayLevel1",
                        "style": [
                            {
                                "filter": "zoom>=11;zoom<=13;",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom>=14;zoom<=16;",
                                "line-width": 4
                            },
                            {
                                "filter": "zoom>=17;zoom<=19;",
                                "line-width": 10
                            }
                        ]
                    },
                    {
                        "filter": "class='taxiway'",
                        "style": [
                            {
                                "filter": "zoom>=11;zoom<=13;",
                                "line-color": "@aerowayLevel1",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom>=14;zoom<=19;",
                                "line-color": "@aerowayLevel1",
                                "line-width": 2
                            }
                        ]
                    },
                    {
                        "filter": "class='helipad'",
                        "style": [
                            {
                                "filter": "zoom>=11;zoom<=19;",
                                "polygon-fill": "@aerowayLevel3"
                            }
                        ]
                    },
                    {
                        "filter": "class='apron'",
                        "style": [
                            {
                                "filter": "zoom>=10;zoom<=19;",
                                "polygon-fill": "@aerowayLevel3"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "landcover",
                "filter": "layerName='landcover'",
                "style": [
                    {
                        "filter": "class='agriculture'",
                        "style": [
                            {
                                "filter": "zoom>=13;zoom<=19;",
                                "polygon-fill": "@agriculture"
                            }
                        ]
                    },
                    {
                        "filter": "class='ice'",
                        "style": [
                            {
                                "filter": "zoom>=2;zoom<=19;",
                                "polygon-fill": "@ice"
                            }
                        ]
                    },
                    {
                        "filter": "class='wood'",
                        "style": [
                            {
                                "filter": "zoom>=2;zoom<=19;",
                                "polygon-fill": "@wood"
                            }
                        ]
                    },
                    {
                        "filter": "class='grassland'",
                        "style": [
                            {
                                "filter": "zoom>=2;zoom<=19;",
                                "polygon-fill": "@grassland"
                            }
                        ]
                    },
                    {
                        "filter": "class='scrub'",
                        "style": [
                            {
                                "filter": "zoom>=6;zoom<=19;",
                                "polygon-fill": "@scrub"
                            }
                        ]
                    },
                    {
                        "filter": "class='rock'",
                        "style": [
                            {
                                "filter": "zoom>=6;zoom<=19;",
                                "polygon-fill": "@rock"
                            }
                        ]
                    },
                    {
                        "filter": "class='wetland'",
                        "style": [
                            {
                                "filter": "zoom>=6;zoom<=19;",
                                "polygon-fill": "@wetland"
                            }
                        ]
                    },
                    {
                        "filter": "class='park'",
                        "polygon-fill": "@park",
                        "style": [
                            {
                                "filter": "zoom>=4;zoom<=13;area>4500"
                            },
                            {
                                "filter": "zoom>=14;zoom<=15;area>600"
                            },
                            {
                                "filter": "zoom>=16;zoom<=19"
                            }
                        ]
                    },
                    {
                        "filter": "class='pitch'",
                        "style": [
                            {
                                "filter": "zoom>=16;zoom<=19;subclass='swimming_pool'",
                                "polygon-fill": "@swimmingPool"
                            },
                            {
                                "filter": "zoom>=16;zoom<=19;",
                                "polygon-fill": "@pitch"
                            }
                        ]
                    },
                    {
                        "filter": "class='sand'",
                        "style": [
                            {
                                "filter": "zoom>=1;zoom<=2",
                                "polygon-fill": "@sand"
                            },
                            {
                                "filter": "zoom=3",
                                "polygon-fill": "@sand_opacity07"
                            },
                            {
                                "filter": "zoom=4",
                                "polygon-fill": "@sand_opacity05"
                            },
                            {
                                "filter": "zoom=5",
                                "polygon-fill": "@sand_opacity02"
                            },
                            {
                                "filter": "zoom>=6;zoom<=19",
                                "polygon-fill": "@sand"
                            }
                        ]
                    },
                    {
                        "filter": "class='cemetery'",
                        "style": [
                            {
                                "filter": "zoom>=13;zoom<=19",
                                "polygon-fill": "@cemetery"
                            }
                        ]
                    },
                    {
                        "filter": "class='crops'",
                        "style": [
                            {
                                "filter": "zoom>=1;zoom<=2",
                                "polygon-fill": "@crops"
                            },
                            {
                                "filter": "zoom=3",
                                "polygon-fill": "@crops_opacity07"
                            },
                            {
                                "filter": "zoom=4",
                                "polygon-fill": "@crops_opacity05"
                            },
                            {
                                "filter": "zoom=5",
                                "polygon-fill": "@crops_opacity02"
                            }
                        ]
                    },
                    {
                        "filter": "class='grass'",
                        "style": [
                            {
                                "filter": "zoom>=1;zoom<=2",
                                "polygon-fill": "@grassland"
                            },
                            {
                                "filter": "zoom=3",
                                "polygon-fill": "@grass_opacity07"
                            },
                            {
                                "filter": "zoom=4",
                                "polygon-fill": "@grass_opacity05"
                            },
                            {
                                "filter": "zoom=5",
                                "polygon-fill": "@grass_opacity02"
                            }
                        ]
                    },
                    {
                        "filter": "class='swamps'",
                        "style": [
                            {
                                "filter": "zoom>=1;zoom<=2",
                                "polygon-fill": "@swamps"
                            },
                            {
                                "filter": "zoom=3",
                                "polygon-fill": "@swamps_opacity07"
                            },
                            {
                                "filter": "zoom=4",
                                "polygon-fill": "@swamps_opacity05"
                            },
                            {
                                "filter": "zoom=5",
                                "polygon-fill": "@swamps_opacity02"
                            }
                        ]
                    },
                    {
                        "filter": "class='trees'",
                        "style": [
                            {
                                "filter": "zoom>=1;zoom<=2",
                                "polygon-fill": "@trees"
                            },
                            {
                                "filter": "zoom=3",
                                "polygon-fill": "@trees_opacity07"
                            },
                            {
                                "filter": "zoom=4",
                                "polygon-fill": "@trees_opacity05"
                            },
                            {
                                "filter": "zoom=5",
                                "polygon-fill": "@trees_opacity02"
                            }
                        ]
                    },
                    {
                        "filter": "class='tundra'",
                        "style": [
                            {
                                "filter": "zoom>=1;zoom<=2",
                                "polygon-fill": "@tundra"
                            },
                            {
                                "filter": "zoom=3",
                                "polygon-fill": "@tundra_opacity07"
                            },
                            {
                                "filter": "zoom=4",
                                "polygon-fill": "@tundra_opacity05"
                            },
                            {
                                "filter": "zoom=5",
                                "polygon-fill": "@tundra_opacity02"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "building",
                "filter": "layerName='building'",
                "style": [
                    {
                        "filter": "zoom=14;class='hospital,hotel,castle,university,civic,stadium'",
                        "polygon-fill": "@buildingFill"
                    },
                    {
                        "filter": "zoom=15",
                        "polygon-fill": "@buildingFill"
                    },
                    {
                        "filter": "zoom>=16;zoom<=17",
                        "polygon-fill": "@buildingFill",
                        "polygon-outline-color": "@buildingOutline",
                        "polygon-outline-width": 1,
                        "polygon-shadow-color": "@buildingShadow",
                        "polygon-shadow-dx": 1,
                        "polygon-shadow-dy": -1
                    },
                    {
                        "filter": "zoom=18;",
                        "polygon-fill": "@buildingFill",
                        "polygon-outline-color": "@buildingOutline",
                        "polygon-outline-width": 1,
                        "polygon-shadow-color": "@buildingShadow",
                        "polygon-shadow-dx": 2,
                        "polygon-shadow-dy": -2
                    },
                    {
                        "filter": "zoom=19;",
                        "polygon-fill": "@buildingFill",
                        "polygon-outline-color": "@buildingOutline",
                        "polygon-outline-width": 1,
                        "polygon-shadow-color": "@buildingShadow",
                        "polygon-shadow-dx": 4,
                        "polygon-shadow-dy": -4
                    }
                ]
            },
            {
                "id": "waterway",
                "filter": "layerName='waterway'",
                "line-color": "@water",
                "style": [
                    {
                        "filter": "zoom>=2;zoom<=10",
                        "line-width": 1
                    },
                    {
                        "filter": "zoom>=11;zoom<=13",
                        "line-width": 1
                    },
                    {
                        "filter": "zoom>=14;zoom<=16",
                        "line-width": 2
                    },
                    {
                        "filter": "zoom>=17;zoom<=19",
                        "line-width": 4
                    }
                ]
            },
            {
                "id": "road_number",
                "filter": "layerName='road';ref=~'^((?!;).)*$'",
                "text-name": "ref",
                "text-fill": "@grayLevel0",
                "text-halo-radius": 1,
                "text-force-horizontal-for-line": true,
                "text-mask-outline-width": 1,
                "text-mask-outline-color": "rgba(0,0,0,0)",
                "text-mask-type": "rectangle",
                "text-mask-margin": "1,3,1,3",
                "style": [
                    {
                        "filter": "class='motorway'",
                        "text-font": "bold 10px Arial, Helvetica, sans-serif",
                        "text-mask-color": "@roadShieldMotorway",
                        "text-fill": "@grayLevel0",
                        "style": [
                            {
                                "filter": "zoom>=7;zoom<=12",
                                "text-spacing": 200
                            },
                            {
                                "filter": "zoom>=13;zoom<=16",
                                "text-spacing": 500
                            }
                        ]
                    },
                    {
                        "filter": "class='trunk'",
                        "text-font": "bold 9px Arial, Helvetica, sans-serif",
                        "text-mask-color": "@roadShieldTrunk",
                        "style": [
                            {
                                "filter": "zoom>=7;zoom<=16",
                                "text-spacing": 500
                            }
                        ]
                    }
                ]
            },
            {
                "id": "road",
                "filter": "layerName='road'",
                "z-index": "layer",
                "style": [
                    {
                        "filter": "zoom>=5;zoom<=6",
                        "line-cap": "butt",
                        "line-color": "@motorwayFill",
                        "line-width": 1
                    },
                    {
                        "filter": "class='motorway'",
                        "line-cap": "butt",
                        "line-color": "@motorwayFill",
                        "style": [
                            {
                                "filter": "zoom=7",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom>=8;zoom<=9",
                                "line-width": 2
                            },
                            {
                                "filter": "zoom>=10;zoom<=11",
                                "line-width": 6,
                                "line-color": "@roadFill",
                                "line-opacity": 0.7,
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@motorwayFill"
                                    }
                                ]
                            },
                            {
                                "line-color": "@motorwayOutline",
                                "style": [
                                    {
                                        "filter": "zoom=12",
                                        "line-width": 5,
                                        "style": [
                                            {
                                                "filter": "tunnel=1",
                                                "line-color": "@motorwayTunnelOutline",
                                                "children": [
                                                    {
                                                        "line-width": 4,
                                                        "line-color": "@motorwayFillTunnel"
                                                    }
                                                ]
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "line-width": 3,
                                                        "line-color": "@motorwayFill"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=13;",
                                        "line-width": 6,
                                        "style": [
                                            {
                                                "filter": "tunnel=1",
                                                "line-color": "@motorwayTunnelOutline",
                                                "children": [
                                                    {
                                                        "line-width": 5,
                                                        "line-color": "@motorwayFillTunnel"
                                                    }
                                                ]
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "line-width": 4,
                                                        "line-color": "@motorwayFill"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=14;",
                                        "line-width": 8,
                                        "style": [
                                            {
                                                "filter": "tunnel=1",
                                                "line-color": "@motorwayTunnelOutline",
                                                "children": [
                                                    {
                                                        "line-width": 7,
                                                        "line-color": "@motorwayFillTunnel"
                                                    }
                                                ]
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "line-width": 6,
                                                        "line-color": "@motorwayFill"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=15;",
                                        "line-width": 12,
                                        "style": [
                                            {
                                                "filter": "tunnel=1",
                                                "line-color": "@motorwayTunnelOutline",
                                                "line-opacity": 0.2,
                                                "children": [
                                                    {
                                                        "line-width": 11,
                                                        "line-color": "@motorwayFillTunnel",
                                                        "line-opacity": 0.7
                                                    }
                                                ]
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "line-width": 10,
                                                        "line-color": "@motorwayFill"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=16;",
                                        "line-width": 16,
                                        "style": [
                                            {
                                                "filter": "tunnel=1",
                                                "line-color": "@motorwayTunnelOutline",
                                                "line-opacity": 0.2,
                                                "children": [
                                                    {
                                                        "line-width": 15,
                                                        "line-color": "@motorwayFillTunnel",
                                                        "line-opacity": 0.7
                                                    }
                                                ]
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "line-width": 14,
                                                        "line-color": "@motorwayFill"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=17;",
                                        "line-width": 26,
                                        "style": [
                                            {
                                                "filter": "tunnel=1",
                                                "line-color": "@motorwayTunnelOutline",
                                                "line-opacity": 0.2,
                                                "children": [
                                                    {
                                                        "line-width": 24,
                                                        "line-color": "@motorwayFillTunnel",
                                                        "line-opacity": 0.6
                                                    }
                                                ]
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "line-width": 22,
                                                        "line-color": "@motorwayFill"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=18;",
                                        "line-width": 38,
                                        "style": [
                                            {
                                                "filter": "tunnel=1",
                                                "line-color": "@motorwayTunnelOutline",
                                                "line-opacity": 0.2,
                                                "children": [
                                                    {
                                                        "line-width": 34,
                                                        "line-color": "@motorwayFillTunnel",
                                                        "line-opacity": 0.6
                                                    }
                                                ]
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "line-width": 34,
                                                        "line-color": "@motorwayFill"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=19;",
                                        "line-width": 60,
                                        "style": [
                                            {
                                                "filter": "tunnel=1",
                                                "line-color": "@motorwayTunnelOutline",
                                                "line-opacity": 0.2,
                                                "children": [
                                                    {
                                                        "line-width": 54,
                                                        "line-color": "@motorwayFillTunnel",
                                                        "line-opacity": 0.6
                                                    }
                                                ]
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "line-width": 56,
                                                        "line-color": "@motorwayFill"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='trunk'",
                        "line-cap": "butt",
                        "line-color": "@trunkOutline",
                        "style": [
                            {
                                "filter": "zoom=7",
                                "line-width": 1,
                                "line-color": "@motorwayFill"
                            },
                            {
                                "filter": "zoom>=8;zoom<=9",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom>=10;zoom<=11;",
                                "line-width": 4,
                                "line-color": "@roadFill",
                                "line-opacity": 0.7,
                                "children": [
                                    {
                                        "line-width": 2,
                                        "line-color": "@trunkOutline"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=12",
                                "line-width": 5,
                                "line-color": "@roadFill",
                                "line-opacity": 0.7,
                                "children": [
                                    {
                                        "line-width": 3,
                                        "line-color": "@trunkOutline"
                                    }
                                ]
                            },
                            {
                                "line-color": "@trunkOutline",
                                "style": [
                                    {
                                        "filter": "zoom>=13;zoom<=14",
                                        "line-width": 5,
                                        "children": [
                                            {
                                                "line-width": 3,
                                                "line-color": "@trunkFill"
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=15",
                                        "line-width": 10,
                                        "children": [
                                            {
                                                "line-width": 8,
                                                "line-color": "@trunkFill"
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=16;",
                                        "line-width": 14,
                                        "children": [
                                            {
                                                "line-width": 12,
                                                "line-color": "@trunkFill"
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom=17;",
                                        "line-width": 18,
                                        "children": [
                                            {
                                                "line-width": 14,
                                                "line-color": "@trunkFill"
                                            }
                                        ]
                                    },
                                    {
                                        "filter": "zoom>=18;zoom<=19;",
                                        "line-width": 22,
                                        "children": [
                                            {
                                                "line-width": 18,
                                                "line-color": "@trunkFill"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='primary'",
                        "line-cap": "butt",
                        "line-color": "@primaryOutline",
                        "style": [
                            {
                                "filter": "zoom>=8;zoom<=9",
                                "line-color": "@roadFill",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom>=10;zoom<=11",
                                "line-color": "@roadFill",
                                "line-width": 2
                            },
                            {
                                "filter": "zoom=12",
                                "line-width": 4,
                                "children": [
                                    {
                                        "line-width": 2,
                                        "line-color": "@primaryFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=13",
                                "line-width": 6,
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@primaryFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=14",
                                "line-width": 10,
                                "children": [
                                    {
                                        "line-width": 8,
                                        "line-color": "@primaryFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=15",
                                "line-width": 14,
                                "children": [
                                    {
                                        "line-width": 12,
                                        "line-color": "@primaryFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=16",
                                "line-width": 18,
                                "children": [
                                    {
                                        "line-width": 16,
                                        "line-color": "@primaryFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=17",
                                "line-width": 24,
                                "children": [
                                    {
                                        "line-width": 22,
                                        "line-color": "@primaryFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=18;",
                                "line-width": 28,
                                "children": [
                                    {
                                        "line-width": 26,
                                        "line-color": "@primaryFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=19",
                                "line-width": 36,
                                "children": [
                                    {
                                        "line-width": 32,
                                        "line-color": "@primaryFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='secondary'",
                        "line-cap": "butt",
                        "line-color": "@roadOutline",
                        "style": [
                            {
                                "filter": "zoom=10",
                                "line-color": "@roadFill",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom=11",
                                "line-color": "@roadFill",
                                "line-width": 2
                            },
                            {
                                "filter": "zoom=12",
                                "line-width": 2,
                                "children": [
                                    {
                                        "line-width": 2,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=13",
                                "line-width": 3,
                                "children": [
                                    {
                                        "line-width": 3,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=14",
                                "line-width": 6,
                                "children": [
                                    {
                                        "line-width": 6,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=15",
                                "line-width": 8,
                                "children": [
                                    {
                                        "line-width": 6,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=16;",
                                "line-width": 14,
                                "children": [
                                    {
                                        "line-width": 12,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=17;",
                                "line-width": 22,
                                "children": [
                                    {
                                        "line-width": 20,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=18;",
                                "line-width": 26,
                                "children": [
                                    {
                                        "line-width": 24,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=19",
                                "line-width": 32,
                                "children": [
                                    {
                                        "line-width": 30,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='tertiary'",
                        "line-cap": "butt",
                        "line-color": "@roadOutline",
                        "style": [
                            {
                                "filter": "zoom=11",
                                "line-width": 1,
                                "line-color": "@roadFill",
                                "line-opacity": 0.8
                            },
                            {
                                "filter": "zoom=12;",
                                "line-width": 2,
                                "children": [
                                    {
                                        "line-width": 2,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=13;",
                                "line-width": 3,
                                "children": [
                                    {
                                        "line-width": 3,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=14;",
                                "line-width": 5,
                                "children": [
                                    {
                                        "line-width": 5,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=15;",
                                "line-width": 8,
                                "children": [
                                    {
                                        "line-width": 8,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=16;",
                                "line-width": 12,
                                "children": [
                                    {
                                        "line-width": 10,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=17;",
                                "line-width": 16,
                                "children": [
                                    {
                                        "line-width": 14,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=18;",
                                "line-width": 28,
                                "children": [
                                    {
                                        "line-width": 26,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=19;",
                                "line-width": 48,
                                "children": [
                                    {
                                        "line-width": 46,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='road'",
                        "line-cap": "butt",
                        "line-color": "@roadOutline",
                        "style": [
                            {
                                "filter": "zoom>=5;zoom<=6",
                                "line-color": "@motorwayFill",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom=16;",
                                "line-width": 12,
                                "children": [
                                    {
                                        "line-width": 10,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=17;",
                                "line-width": 16,
                                "children": [
                                    {
                                        "line-width": 14,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=18;",
                                "line-width": 28,
                                "children": [
                                    {
                                        "line-width": 26,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=19",
                                "line-width": 48,
                                "children": [
                                    {
                                        "line-width": 46,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='residential,living_street,unclassified'",
                        "line-cap": "butt",
                        "line-color": "@roadOutline",
                        "style": [
                            {
                                "filter": "zoom=12",
                                "line-width": 1,
                                "line-color": "@roadFill",
                                "line-opacity": 0.7
                            },
                            {
                                "filter": "zoom=13",
                                "line-width": 1,
                                "line-color": "@roadFill"
                            },
                            {
                                "filter": "zoom=14",
                                "line-width": 2,
                                "line-color": "@roadFill"
                            },
                            {
                                "filter": "zoom=15",
                                "line-width": 3,
                                "line-color": "@roadFill"
                            },
                            {
                                "filter": "zoom=16",
                                "line-width": 5,
                                "line-color": "@roadFill"
                            },
                            {
                                "filter": "zoom=17",
                                "line-width": 10,
                                "children": [
                                    {
                                        "line-width": 8,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=18",
                                "line-width": 18,
                                "children": [
                                    {
                                        "line-width": 16,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=19",
                                "line-width": 26,
                                "children": [
                                    {
                                        "line-width": 24,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='service,pedestrian'",
                        "line-cap": "butt",
                        "line-color": "@roadFill",
                        "style": [
                            {
                                "filter": "zoom=13",
                                "line-width": 1,
                                "line-opacity": 0.5
                            },
                            {
                                "filter": "zoom=14",
                                "line-width": 1,
                                "line-opacity": 0.75
                            },
                            {
                                "filter": "zoom>=15;zoom<=16",
                                "line-width": 3,
                                "line-opacity": 0.5,
                                "children": [
                                    {
                                        "line-width": 1,
                                        "line-color": "@roadFill",
                                        "line-opacity": 0
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=17",
                                "line-width": 4,
                                "line-opacity": 0.5,
                                "children": [
                                    {
                                        "line-width": 2,
                                        "line-color": "@roadFill",
                                        "line-opacity": 0
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=18",
                                "line-width": 8,
                                "line-opacity": 0.5,
                                "children": [
                                    {
                                        "line-width": 6,
                                        "line-color": "@roadFill",
                                        "line-opacity": 0
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=19",
                                "line-width": 12,
                                "line-opacity": 0.5,
                                "children": [
                                    {
                                        "line-width": 10,
                                        "line-color": "@roadFill",
                                        "line-opacity": 0
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='track'",
                        "line-cap": "butt",
                        "style": [
                            {
                                "filter": "zoom>=14;zoom<=16;",
                                "line-color": "@roadTrack",
                                "line-dasharray": "8,3,3,3",
                                "line-width": 1.4
                            },
                            {
                                "filter": "zoom>=17",
                                "line-color": "@roadTrack",
                                "line-dasharray": "12,5,5,5",
                                "line-width": 2
                            }
                        ]
                    },
                    {
                        "filter": "class='construction'",
                        "line-cap": "butt",
                        "style": [
                            {
                                "filter": "zoom>=18;zoom<=19;",
                                "line-color": "@grayLevel6",
                                "line-width": 1,
                                "line-dasharray": "10,5"
                            }
                        ]
                    },
                    {
                        "filter": "class='path'",
                        "line-cap": "butt",
                        "style": [
                            {
                                "filter": "zoom>=18;zoom<=19;",
                                "line-color": "@roadOutline",
                                "line-width": 4,
                                "children": [
                                    {
                                        "line-width": 2,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='footway'",
                        "line-cap": "butt",
                        "style": [
                            {
                                "filter": "zoom>=17;zoom<=19;bridge=1",
                                "line-color": "@roadTrack",
                                "line-width": 6,
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@roadFill"
                                    },
                                    {
                                        "line-width": 1,
                                        "line-dasharray": "5,5",
                                        "line-color": "@roadTrack"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom>=17;zoom<=19;tunnel=1",
                                "line-cap": "butt",
                                "line-color": "@roadTrack",
                                "line-dasharray": "10,3",
                                "line-width": 6,
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@roadFill"
                                    },
                                    {
                                        "line-width": 1,
                                        "line-dasharray": "5,5",
                                        "line-color": "@roadTrack"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom>=17;zoom<=19;tunnel=0;bridge=0",
                                "line-cap": "butt",
                                "line-color": "@roadOutline",
                                "line-width": 6,
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='steps'",
                        "line-cap": "butt",
                        "style": [
                            {
                                "filter": "zoom>=18;zoom<=19;",
                                "line-color": "@roadTrack",
                                "line-width": 6,
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@roadFill"
                                    },
                                    {
                                        "line-width": 4,
                                        "line-dasharray": "1,5",
                                        "line-color": "@roadTrack"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='bridleway'",
                        "line-cap": "butt",
                        "style": [
                            {
                                "filter": "zoom>=18;zoom<=19;",
                                "line-color": "@roadTrack",
                                "line-width": 2,
                                "line-dasharray": "5,5"
                            }
                        ]
                    },
                    {
                        "filter": "class='cycleway'",
                        "line-cap": "butt",
                        "style": [
                            {
                                "filter": "zoom>=18;zoom<=19;",
                                "line-color": "@cycleway",
                                "line-width": 1,
                                "line-dasharray": "5,5"
                            }
                        ]
                    },
                    {
                        "filter": "class='raceway'",
                        "line-cap": "butt",
                        "style": [
                            {
                                "filter": "zoom>=18;zoom<=19;",
                                "line-color": "@grayLevel5",
                                "line-width": 6
                            }
                        ]
                    },
                    {
                        "filter": "class='motorway_link'",
                        "line-cap": "butt",
                        "line-color": "@motorwayFill",
                        "style": [
                            {
                                "filter": "zoom>=13;zoom<=14;",
                                "line-width": 2
                            },
                            {
                                "filter": "zoom=15;",
                                "line-color": "@motorwayOutline",
                                "line-width": 6,
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@motorwayFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=16;",
                                "line-color": "@motorwayOutline",
                                "line-width": 8,
                                "children": [
                                    {
                                        "line-width": 6,
                                        "line-color": "@motorwayFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=17;",
                                "line-color": "@motorwayOutline",
                                "line-width": 12,
                                "children": [
                                    {
                                        "line-width": 8,
                                        "line-color": "@motorwayFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom>=18;zoom<=19",
                                "line-color": "@motorwayOutline",
                                "line-width": 14,
                                "children": [
                                    {
                                        "line-width": 10,
                                        "line-color": "@motorwayFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='trunk_link'",
                        "line-cap": "butt",
                        "line-color": "@trunkFill",
                        "style": [
                            {
                                "filter": "zoom=13;",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom=14;",
                                "line-width": 2
                            },
                            {
                                "filter": "zoom=15;",
                                "line-width": 6,
                                "line-color": "@linkFill",
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@trunkFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=16;",
                                "line-width": 8,
                                "line-color": "@linkFill",
                                "children": [
                                    {
                                        "line-width": 6,
                                        "line-color": "@trunkFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=17;",
                                "line-width": 12,
                                "line-color": "@linkFill",
                                "children": [
                                    {
                                        "line-width": 8,
                                        "line-color": "@trunkFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom>=18;zoom<=19",
                                "line-width": 14,
                                "line-color": "@linkFill",
                                "children": [
                                    {
                                        "line-width": 10,
                                        "line-color": "@trunkFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='primary_link'",
                        "line-cap": "butt",
                        "line-color": "@roadOutline",
                        "style": [
                            {
                                "filter": "zoom=14;",
                                "line-width": 2
                            },
                            {
                                "filter": "zoom>=15;zoom<=16",
                                "line-width": 6,
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=17;",
                                "line-width": 10,
                                "children": [
                                    {
                                        "line-width": 8,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom>=18;zoom<=19",
                                "line-width": 12,
                                "children": [
                                    {
                                        "line-width": 10,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='secondary_link, tertiary_link'",
                        "line-cap": "butt",
                        "line-color": "@roadOutline",
                        "style": [
                            {
                                "filter": "zoom=14;",
                                "line-width": 2
                            },
                            {
                                "filter": "zoom>=15;zoom<=16",
                                "line-width": 6,
                                "children": [
                                    {
                                        "line-width": 4,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=17;",
                                "line-width": 10,
                                "children": [
                                    {
                                        "line-width": 8,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            },
                            {
                                "filter": "zoom>=18;zoom<=19",
                                "line-width": 12,
                                "children": [
                                    {
                                        "line-width": 10,
                                        "line-color": "@roadFill"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "housenumber",
                "filter": "layerName='housenumber'",
                "style": [
                    {
                        "filter": "zoom>=18;zoom<=19;",
                        "text-name": "housenumber",
                        "text-fill": "@buildingName",
                        "text-halo-radius": 2,
                        "text-halo-fill": "@haloTransp50",
                        "text-font": "12px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "place_popular",
                "filter": "layerName='place'",
                "text-wrap-width": 50,
                "style": [
                    {
                        "filter": "class='city'",
                        "shield-icon-type": "symbol",
                        "shield-icon-symbol-type": "circle",
                        "shield-icon-color": "@grayLevel0",
                        "shield-name": "@name",
                        "shield-dy": -12,
                        "shield-fill": "@grayLevel0",
                        "shield-halo-fill": "@haloSolid",
                        "shield-halo-radius": 2,
                        "shield-icon-size": 4,
                        "style": [
                            {
                                "filter": "zoom>=3;zoom<=4",
                                "shield-font": "600 12px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom=5",
                                "shield-font": "600 14px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom>=6;zoom<=7",
                                "shield-font": "600 16px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "population>=80000;population<1000000|population=0;",
                                "style": [
                                    {
                                        "filter": "zoom=8",
                                        "shield-font": "600 13px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "text-name": "@name",
                                        "text-fill": "@grayLevel0",
                                        "text-halo-fill": "@haloSolid",
                                        "text-halo-radius": 2,
                                        "style": [
                                            {
                                                "filter": "zoom>=9;zoom<=10",
                                                "text-font": "600 13px Arial, Helvetica, sans-serif"
                                            },
                                            {
                                                "filter": "zoom>=11;zoom<=13",
                                                "text-font": "600 15px Arial, Helvetica, sans-serif"
                                            },
                                            {
                                                "filter": "zoom=14",
                                                "text-font": "600 18px Arial, Helvetica, sans-serif"
                                            },
                                            {
                                                "filter": "zoom>=15;zoom<=16",
                                                "text-font": "600 24px Arial, Helvetica, sans-serif",
                                                "text-opacity": 0.5
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "filter": "population>=1000000",
                                "style": [
                                    {
                                        "filter": "zoom=8",
                                        "shield-font": "600 16px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "text-name": "@name",
                                        "text-fill": "@grayLevel0",
                                        "text-halo-fill": "@haloSolid",
                                        "text-halo-radius": 2,
                                        "style": [
                                            {
                                                "filter": "zoom>=9;zoom<=10",
                                                "text-font": "600 16px Arial, Helvetica, sans-serif"
                                            },
                                            {
                                                "filter": "zoom>=11;zoom<=13",
                                                "text-font": "600 20px Arial, Helvetica, sans-serif"
                                            },
                                            {
                                                "filter": "zoom=14",
                                                "text-font": "600 24px Arial, Helvetica, sans-serif"
                                            },
                                            {
                                                "filter": "zoom=15",
                                                "text-font": "600 32px Arial, Helvetica, sans-serif",
                                                "text-opacity": 0.6
                                            },
                                            {
                                                "filter": "zoom=16",
                                                "text-font": "600 42px Arial, Helvetica, sans-serif",
                                                "text-opacity": 0.2
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='town'",
                        "shield-icon-type": "symbol",
                        "shield-icon-symbol-type": "circle",
                        "shield-icon-color": "@grayLevel0",
                        "shield-name": "@name",
                        "shield-dy": -12,
                        "shield-fill": "@grayLevel1",
                        "shield-halo-fill": "@haloTransp50",
                        "shield-halo-radius": 2,
                        "shield-icon-size": 4,
                        "style": [
                            {
                                "filter": "zoom>=5;zoom<=6;",
                                "shield-font": "600 13px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom=7;",
                                "shield-font": "600 14px Arial, Helvetica, sans-serif"
                            },
                            {
                                "text-name": "@name",
                                "text-fill": "@grayLevel3",
                                "text-halo-fill": "@haloSolid",
                                "style": [
                                    {
                                        "filter": "population>=1000;population<=100000;zoom>=8;zoom<=10|population=0;zoom>=8;zoom<=10",
                                        "text-font": "small-caps 500 12px Arial, Helvetica, sans-serif",
                                        "text-fill": "@adminLabelLevel3"
                                    },
                                    {
                                        "filter": "population>=100;zoom>=11;zoom<=13|population=0;zoom>=11;zoom<=13",
                                        "text-font": "small-caps 500 14px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "place_others",
                "filter": "layerName='place'",
                "text-wrap-width": 50,
                "style": [
                    {
                        "filter": "class='county'",
                        "shield-halo-fill": "@haloTransp50",
                        "shield-halo-radius": 2,
                        "style": [
                            {
                                "filter": "zoom>=5;zoom<=7",
                                "shield-icon-type": "symbol",
                                "shield-icon-symbol-type": "square",
                                "shield-icon-size": 5,
                                "shield-icon-color": "@grayLevel1",
                                "shield-name": "@name",
                                "shield-font": "200 13px Arial, Helvetica, sans-serif",
                                "shield-dy": -12,
                                "shield-fill": "@grayLevel1"
                            },
                            {
                                "filter": "population>=100000;population<=500000|population=0;",
                                "text-name": "@name",
                                "text-fill": "@grayLevel2",
                                "text-halo-fill": "@haloSolid",
                                "style": [
                                    {
                                        "filter": "zoom>=8;zoom<=10",
                                        "text-font": "500 12px Arial, Helvetica, sans-serif"
                                    },
                                    {
                                        "filter": "zoom>=11;zoom<=13",
                                        "text-font": "500 14px Arial, Helvetica, sans-serif"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='suburb';population>=10000;population<=100000|class='suburb';population=0;",
                        "text-name": "@name",
                        "text-halo-fill": "@haloTransp50",
                        "text-halo-radius": 2,
                        "text-fill": "@grayLevel4",
                        "style": [
                            {
                                "filter": "zoom>10;zoom<=12",
                                "text-font": "600 11px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom>=13;zoom<=14",
                                "text-font": "600 13px Arial, Helvetica, sans-serif",
                                "text-fill": "@grayLevel3"
                            }
                        ]
                    },
                    {
                        "filter": "class='farm';zoom>=15",
                        "text-name": "@name",
                        "text-fill": "@farmLabels",
                        "text-halo-fill": "@haloSolid",
                        "text-font": "600 14px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "class='village';population>=200;population<=10000;zoom>=10|class='village';population=0;zoom>=10;",
                        "text-name": "@name",
                        "text-halo-fill": "@haloTransp50",
                        "text-halo-radius": 2,
                        "text-fill": "@adminLabelLevel3",
                        "style": [
                            {
                                "filter": "zoom>10;zoom<=14",
                                "text-font": "small-caps 300 12px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom>14;zoom<=19",
                                "text-font": "small-caps 300 13px Arial, Helvetica, sans-serif"
                            }
                        ]
                    },
                    {
                        "filter": "class='neighbourhood'",
                        "text-name": "@name",
                        "text-halo-fill": "@haloSolid",
                        "text-halo-radius": 2,
                        "text-fill": "@grayLevel3",
                        "style": [
                            {
                                "filter": "zoom>=14;zoom<=15",
                                "text-font": "small-caps 600 16px Arial, Helvetica, sans-serif"
                            },
                            {
                                "filter": "zoom=16",
                                "text-font": "small-caps 600 24px Arial, Helvetica, sans-serif"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "poi_icon",
                "filter": "layerName='poi'",
                "point-type": "glyph",
                "point-glyph": "vectormap-icons",
                "point-fill": "@naturalAndSports",
                "point-size": 22,
                "point-outline-color": "#ffffff",
                "point-outline-width": 3,
                "style": [
                    {
                        "filter": "class='airport'",
                        "style": [
                            {
                                "filter": "zoom>=10;zoom<=13",
                                "point-fill": "@transportation",
                                "point-glyph-name": ""
                            }
                        ]
                    },
                    {
                        "filter": "class='national_park'",
                        "style": [
                            {
                                "filter": "labelrank=0;zoom=10|labelrank<=1;zoom=11|labelrank<=2;zoom=12|labelrank<=3;zoom=13|labelrank<=4;zoom=14|labelrank<=5;zoom=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "point-fill": "@naturalAndSports",
                                "point-glyph-name": ""
                            }
                        ]
                    },
                    {
                        "filter": "class='park'",
                        "style": [
                            {
                                "filter": "labelrank=0;zoom>=10|labelrank<=1;zoom>=11;zoom<=13|labelrank<=2;zoom=14|labelrank<=2;zoom=15|labelrank<=2;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "point-fill": "@naturalAndSports",
                                "point-glyph-name": ""
                            }
                        ]
                    },
                    {
                        "filter": "class='university'",
                        "style": [
                            {
                                "filter": "labelrank<=1;zoom=12|labelrank<=1;zoom=13|labelrank<=3;zoom=14|labelrank<=5;zoom=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "point-fill": "@cultural",
                                "point-glyph-name": ""
                            }
                        ]
                    },
                    {
                        "filter": "class='station'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom=12|labelrank<=3;zoom=13|labelrank<=4;zoom=14|labelrank<=5;zoom=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "point-fill": "@transportation",
                                "point-glyph-name": ""
                            }
                        ]
                    },
                    {
                        "filter": "class='college,arts_centre,theatre,golf_course,golf,sports_centre'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom=13|labelrank<=3;zoom=14|labelrank<=5;zoom=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='college'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='arts_centre'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='theatre'",
                                        "point-fill": "@entertainment",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='golf_course'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='golf'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='sports_centre'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='library'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom=14|labelrank<=4;zoom=15|labelrank<=5;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='library'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='bar,biergarden,cafe,fast_food,restaurant,fuel,bank,hospital,cinema,supermarket,food_court",
                        "style": [
                            {
                                "filter": "labelrank<=3;zoom=14|labelrank<=6;zoom=15|labelrank<=8;zoom=16|labelrank<=9;zoom=17|labelrank<=10;zoom=18|labelrank<=10;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='bar'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='biergarden'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='cafe'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='fast_food'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='food_court'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='restaurant'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bank'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='cinema'",
                                        "point-fill": "@entertainment",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='fuel'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='hospital'",
                                        "point-fill": "@medical",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='supermarket'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='kindergarden,school,taxi,clinic,dentist,pharmacy,social_facility,veterinary,community_centre,courthouse,fire_station,embassy,marketplace,place_of_worship,police,prison,townhall,toilets,garden,miniature_golf,playground,water_park,swimming_pool,fitness_centre,attraction,camp_site,hostel,motel,theme_park,viewpoint,zoo,shelter,pub,fountain,casino,bicycle_rental,car_rental,bicycle_parking,ruins,memorial,monument,castle,battlefield,marina,water_tower,cave_entrance,motorcycle,garden_centre,cricket,climbing,canoebaseball,picnic_site,artwork,coniferous,mixed,deciduous,plant,recycling,post_office,nursing_home,ice_cream,toll_booth,wreck,windmill,crane,estate_agent,video,toys,tobacco,pet,optician,newsagent,musical_instrument,mobile_phone,laundry,kiosk,jewelry,hifi,hearing_aids,hairdresser,gift,greengrocer,florist,doityourself,department_store,copyshop,convenience,confectionery,computer,clothes,car_repair,car_parts,car,butcher,books,bicycle,bakery,alcohol,tennis,soccer,shooting,motor,ice_stock,horse_racing,baseball,gymnastics,archery,chalet,caravan_site,sikh,shinto,jain,muslim,hindu,christian,buddhist,jewish,pizza,mineshaft,hydro,gas,solar,wind,swimming,grave_yard,information'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom=14|labelrank<=2;zoom=15|labelrank<=3;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='kindergarden'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='school'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='taxi'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='clinic'",
                                        "point-fill": "@medical",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='dentist'",
                                        "point-fill": "@medical",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='pharmacy'",
                                        "point-fill": "@medical",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='social_facility'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='veterinary'",
                                        "point-fill": "@medical",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='community_centre'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='courthouse'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='fire_station'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='embassy'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='grave_yard'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='marketplace'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='place_of_worship'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='police'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='prison'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='townhall'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='toilets'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='garden'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='miniature_golf'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='playground'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='water_park'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='swimming_pool'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='fitness_centre'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='attraction'",
                                        "point-fill": "@tourism",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='camp_site'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='hostel'",
                                        "point-fill": "@tourism",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='motel'",
                                        "point-fill": "@tourism",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='theme_park'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='viewpoint'",
                                        "point-fill": "@tourism",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='zoo'",
                                        "point-fill": "@tourism",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='shelter'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='pub'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='fountain'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='casino'",
                                        "point-fill": "@entertainment",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bicycle_rental'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='car_rental'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bicycle_parking'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='ruins'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='memorial'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='monument'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='castle'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='battlefield'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='marina'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='water_tower'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='cave_entrance'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='motorcycle'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='garden_centre'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='cricket'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='climbing'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='canoe'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='baseball'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='picnic_site'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='artwork'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='coniferous'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='mixed'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='deciduous'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='plant'",
                                        "point-fill": "@industrial",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='recycling'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='post_office'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='nursing_home'",
                                        "point-fill": "@medical",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='ice_cream'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='toll_booth'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='wreck'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='windmill'",
                                        "point-fill": "@industrial",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='crane'",
                                        "point-fill": "@industrial",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='estate_agent'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='video'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='toys'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='tobacco'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='pet'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='optician'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='newsagent'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='musical_instrument'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='mobile_phone'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='laundry'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='kiosk'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='jewelry'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='hifi'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='hearing_aids'",
                                        "point-fill": "@medical",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='hairdresser'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='gift'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='greengrocer'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='florist'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='doityourself'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='department_store'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='copyshop'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='convenience'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='confectionery'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='computer'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='clothes'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='car_repair'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='car'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='car_parts'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='butcher'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='books'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bicycle'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bakery'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='alcohol'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='tennis'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='soccer'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='shooting'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='motor'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='ice_stock'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='horse_racing'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='gymnastics'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='archery'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='chalet'",
                                        "point-fill": "@tourism",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='caravan_site'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='sikh'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='shinto'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='jain'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='muslim'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='hindu'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='christian'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='buddhist'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='jewish'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='pizza'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='mineshaft'",
                                        "point-fill": "@industrial",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='hydro'",
                                        "point-fill": "@industrial",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='solar'",
                                        "point-fill": "@industrial",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='gas'",
                                        "point-fill": "@industrial",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='wind'",
                                        "point-fill": "@industrial",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='swimming'",
                                        "point-fill": "@naturalAndSports",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='information'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='parking'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom>=14;zoom<=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "point-fill": "@transportation",
                                "point-glyph-name": ""
                            }
                        ]
                    },
                    {
                        "filter": "class='hotel'",
                        "style": [
                            {
                                "filter": "labelrank<=3;zoom>=14;zoom<=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "point-glyph-name": "",
                                "point-fill": "@tourism"
                            }
                        ]
                    },
                    {
                        "filter": "class='museum,bus_station'",
                        "style": [
                            {
                                "filter": "labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='museum'",
                                        "point-fill": "@cultural",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bus_station'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='private'",
                        "style": [
                            {
                                "filter": "labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "point-fill": "@commonService",
                                "point-glyph-name": ""
                            }
                        ]
                    },
                    {
                        "filter": "class='lighthouse,traffic_signals'",
                        "style": [
                            {
                                "filter": "zoom>=18",
                                "style": [
                                    {
                                        "filter": "class='lighthouse'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='traffic_signals'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='atm,bench,bbq,clock,drinking_water,post_box,telephone,vending_machine,block,bollard,cattle_grid,gate,lift_gate,kissing_gate,stile,anticlockwise,clockwise,guidepost,map,bus_stop,slipway,peak,subway_entrance,tram_stop,weir,sub_station,waste_disposal'",
                        "style": [
                            {
                                "filter": "labelrank=9;zoom>=18;zoom<=19",
                                "style": [
                                    {
                                        "filter": "class='atm'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bench'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bbq'",
                                        "point-fill": "@eat",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='clock'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='drinking_water'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='post_box'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='telephone'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='vending_machine'",
                                        "point-fill": "@shop",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='waste_disposal'",
                                        "point-fill": "@commonService",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='block'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bollard'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='cattle_grid'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='gate'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='lift_gate'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='kissing_gate'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='stile'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='anticlockwise'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='clockwise'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='guidepost'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='map'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='bus_stop'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='slipway'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='peak'",
                                        "point-glyph-name": "",
                                        "point-fill": "@naturalAndSports"
                                    },
                                    {
                                        "filter": "class='subway_entrance'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='tram_stop'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='sub_station'",
                                        "point-fill": "@industrial",
                                        "point-glyph-name": ""
                                    },
                                    {
                                        "filter": "class='weir'",
                                        "point-fill": "@transportation",
                                        "point-glyph-name": ""
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "poi_text",
                "filter": "layerName='poi'",
                "text-name": "@name",
                "text-halo-fill": "@haloSolid",
                "text-halo-radius": 2,
                "text-wrap-width": 50,
                "text-dy": 17,
                "text-base-line": "top",
                "text-font": "500 11px Arial",
                "text-spacing": 0,
                "style": [
                    {
                        "filter": "class='airport'",
                        "style": [
                            {
                                "filter": "zoom>=10;zoom<=13",
                                "text-fill": "@transportation"
                            }
                        ]
                    },
                    {
                        "filter": "class='national_park'",
                        "style": [
                            {
                                "filter": "labelrank=0;zoom=10|labelrank<=1;zoom=11|labelrank<=2;zoom=12|labelrank<=3;zoom=13|labelrank<=4;zoom=14|labelrank<=5;zoom=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "text-fill": "@naturalAndSports"
                            }
                        ]
                    },
                    {
                        "filter": "class='park'",
                        "style": [
                            {
                                "filter": "labelrank=0;zoom>=10|labelrank<=1;zoom>=11;zoom<=13|labelrank<=2;zoom=14|labelrank<=2;zoom=15|labelrank<=2;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "text-fill": "@naturalAndSports"
                            }
                        ]
                    },
                    {
                        "filter": "class='university'",
                        "style": [
                            {
                                "filter": "labelrank<=1;zoom=12|labelrank<=1;zoom=13|labelrank<=3;zoom=14|labelrank<=5;zoom=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "text-fill": "@cultural"
                            }
                        ]
                    },
                    {
                        "filter": "class='station'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom=12|labelrank<=3;zoom=13|labelrank<=4;zoom=14|labelrank<=5;zoom=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "text-fill": "@transportation"
                            }
                        ]
                    },
                    {
                        "filter": "class='college,arts_centre,theatre,golf_course,golf,sports_centre'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom=13|labelrank<=3;zoom=14|labelrank<=5;zoom=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='college,arts_centre'",
                                        "text-fill": "@cultural"
                                    },
                                    {
                                        "filter": "class='golf_course,golf,sports_centre'",
                                        "text-fill": "@naturalAndSports"
                                    },
                                    {
                                        "filter": "class='theatre'",
                                        "text-fill": "@entertainment"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='library'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom=14|labelrank<=4;zoom=15|labelrank<=5;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='library'",
                                        "text-fill": "@cultural"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='bar,biergarden,cafe,fast_food,restaurant,fuel,bank,hospital,cinema,supermarket,food_court'",
                        "style": [
                            {
                                "filter": "labelrank<=3;zoom=14|labelrank<=6;zoom=15|labelrank<=8;zoom=16|labelrank<=9;zoom=17|labelrank<=10;zoom=18|labelrank<=10;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='bar,biergarden,cafe,fast_food,food_court,restaurant'",
                                        "text-fill": "@eat"
                                    },
                                    {
                                        "filter": "class='bank'",
                                        "text-fill": "@commonService"
                                    },
                                    {
                                        "filter": "class='cinema'",
                                        "text-fill": "@entertainment"
                                    },
                                    {
                                        "filter": "class='hospital'",
                                        "text-fill": "@medical"
                                    },
                                    {
                                        "filter": "class='fuel'",
                                        "text-fill": "@transportation"
                                    },
                                    {
                                        "filter": "class='supermarket'",
                                        "text-fill": "@shop"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='kindergarden,school,taxi,clinic,dentist,pharmacy,social_facility,veterinary,community_centre,courthouse,fire_station,embassy,marketplace,place_of_worship,police,prison,townhall,toilets,garden,miniature_golf,playground,water_park,swimming_pool,fitness_centre,attraction,camp_site,hostel,motel,theme_park,viewpoint,zoo,shelter,pub,fountain,casino,bicycle_rental,car_rental,bicycle_parking,ruins,memorial,monument,castle,battlefield,marina,water_tower,cave_entrance,motorcycle,garden_centre,cricket,climbing,canoebaseball,picnic_site,artwork,coniferous,mixed,deciduous,plant,recycling,post_office,nursing_home,ice_cream,toll_booth,wreck,windmill,crane,estate_agent,video,toys,tobacco,pet,optician,newsagent,musical_instrument,mobile_phone,laundry,kiosk,jewelry,hifi,hearing_aids,hairdresser,gift,greengrocer,florist,doityourself,department_store,copyshop,convenience,confectionery,computer,clothes,car_repair,car_parts,car,butcher,books,bicycle,bakery,alcohol,tennis,soccer,shooting,motor,ice_stock,horse_racing,baseball,gymnastics,archery,chalet,caravan_site,sikh,shinto,jain,muslim,hindu,christian,buddhist,jewish,pizza,mineshaft,hydro,gas,solar,wind,swimming,grave_yard,information'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom=14|labelrank<=2;zoom=15|labelrank<=3;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='bar,biergarden,cafe,fast_food,food_court,restaurant,pub,ice_cream,greengrocer,confectionery,butcher,bakery,alcohol,pizza'",
                                        "text-fill": "@eat"
                                    },
                                    {
                                        "filter": "class='kindergarden,school,courthouse,embassy,place_of_worship,police,prison,townhall,ruins,memorial,monument,castle,battlefield,artwork,wreck,books,sikh,shinto,jain,muslim,hindu,christian,buddhist,jewish'",
                                        "text-fill": "@cultural"
                                    },
                                    {
                                        "filter": "class='fuel,taxi,bicycle_rental,car_rental,bicycle_parking,marina,water_tower,motorcycle,canoe,toll_booth,car_repair,car,car_parts,bicycle'",
                                        "text-fill": "@transportation"
                                    },
                                    {
                                        "filter": "class='bank,social_facility,community_centre,fire_station,toilets,shelter,recycling,post_office,optician,newsagent,laundry,kiosk,hairdresser,copyshop,convenience,information'",
                                        "text-fill": "@commonService"
                                    },
                                    {
                                        "filter": "class='hospital,clinic,dentist,pharmacy,veterinary,nursing_home,hearing_aids'",
                                        "text-fill": "@medical"
                                    },
                                    {
                                        "filter": "class='casino'",
                                        "text-fill": "@entertainment"
                                    },
                                    {
                                        "filter": "class='marketplace,estate_agent,video,toys,tobacco,supermarket,pet,musical_instrument,mobile_phone,jewelry,hifi,gift,doityourself,department_store,computer'",
                                        "text-fill": "@shop"
                                    },
                                    {
                                        "filter": "class='garden,grave_yard,miniature_golf,playground,water_park,swimming_pool,fitness_centre,camp_site,theme_park,cave_entrance,garden_centre,cricket,climbing,baseball,picnic_site,coniferous,mixed,deciduous,florist,tennis,soccer,shooting,motor,ice_stock,horse_racing,gymnastics,archery,caravan_site,swimming'",
                                        "text-fill": "@naturalAndSports"
                                    },
                                    {
                                        "filter": "class='attraction,hostel,motel,viewpoint,zoo,fountain,chalet'",
                                        "text-fill": "@tourism"
                                    },
                                    {
                                        "filter": "class='plant,windmill,crane,mineshaft,hydro,solar,gas,wind'",
                                        "text-fill": "@industrial"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='parking'",
                        "style": [
                            {
                                "filter": "labelrank<=2;zoom>=14;zoom<=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "text-fill": "@transportation"
                            }
                        ]
                    },
                    {
                        "filter": "class='hotel'",
                        "style": [
                            {
                                "filter": "labelrank<=3;zoom>=14;zoom<=15|labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "text-fill": "@tourism"
                            }
                        ]
                    },
                    {
                        "filter": "class='museum,bus_station'",
                        "style": [
                            {
                                "filter": "labelrank<=6;zoom=16|labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='museum'",
                                        "text-fill": "@cultural"
                                    },
                                    {
                                        "filter": "class='bus_station'",
                                        "text-fill": "@transportation"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='private'",
                        "style": [
                            {
                                "filter": "labelrank<=7;zoom=17|labelrank<=9;zoom=18|labelrank<=9;zoom=19",
                                "text-fill": "@commonService"
                            }
                        ]
                    },
                    {
                        "filter": "class='lighthouse,traffic_signals'",
                        "style": [
                            {
                                "filter": "zoom>=18",
                                "style": [
                                    {
                                        "filter": "class='lighthouse,traffic_signals'",
                                        "text-fill": "@transportation"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='atm,bench,bbq,clock,drinking_water,post_box,telephone,vending_machine,block,bollard,cattle_grid,gate,lift_gate,kissing_gate,stile,anticlockwise,clockwise,guidepost,map,bus_stop,slipway,peak,subway_entrance,tram_stop,weir,sub_station,waste_disposal'",
                        "style": [
                            {
                                "filter": "labelrank=9;zoom=19",
                                "style": [
                                    {
                                        "filter": "class='atm,bench,clock,drinking_water,post_box,telephone,waste_disposal,'",
                                        "text-fill": "@commonService"
                                    },
                                    {
                                        "filter": "class='bbq'",
                                        "text-fill": "@eat"
                                    },
                                    {
                                        "filter": "class='vending_machine'",
                                        "text-fill": "@shop"
                                    },
                                    {
                                        "filter": "class='block,bollard,cattle_grid,gate,lift_gate,kissing_gate,stile,anticlockwise,clockwise,guidepost,map,bus_stop,slipway,subway_entrance,tram_stop,weir'",
                                        "text-fill": "@transportation"
                                    },
                                    {
                                        "filter": "class='peak'",
                                        "text-fill": "@naturalAndSports"
                                    },
                                    {
                                        "filter": "class='sub_station'",
                                        "text-fill": "@industrial"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "railway",
                "filter": "layerName='railway'",
                "style": [
                    {
                        "filter": "class='rail'",
                        "style": [
                            {
                                "filter": "zoom>=12;zoom<=13",
                                "style": [
                                    {
                                        "line-color": "@rail",
                                        "line-width": 1
                                    }
                                ]
                            },
                            {
                                "filter": "zoom=14;",
                                "style": [
                                    {
                                        "line-width": 1,
                                        "line-color": "@rail",
                                        "children": [
                                            {
                                                "line-width": 6,
                                                "line-cap": "butt",
                                                "line-color": "@rail",
                                                "line-dasharray": "1,20"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "filter": "zoom>=15;zoom<=17",
                                "style": [
                                    {
                                        "line-width": 1,
                                        "line-color": "@rail",
                                        "children": [
                                            {
                                                "line-width": 8,
                                                "line-cap": "butt",
                                                "line-color": "@rail",
                                                "line-dasharray": "2,30"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "filter": "zoom>=18;zoom<=19",
                                "style": [
                                    {
                                        "line-width": 2,
                                        "line-color": "@rail",
                                        "children": [
                                            {
                                                "line-width": 10,
                                                "line-cap": "butt",
                                                "line-color": "@rail",
                                                "line-dasharray": "3,50"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='narrow_gauge'",
                        "style": [
                            {
                                "filter": "zoom>=12;zoom<=19",
                                "style": [
                                    {
                                        "line-width": 3,
                                        "line-color": "@railOther"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "filter": "class='subway'",
                        "line-color": "@railSubway",
                        "style": [
                            {
                                "filter": "zoom>=12;zoom<=16",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom>16",
                                "line-width": 2
                            }
                        ]
                    },
                    {
                        "filter": "class='light_rail'",
                        "line-color": "@lightRail",
                        "style": [
                            {
                                "filter": "zoom>=12;zoom<=16",
                                "line-width": 1
                            },
                            {
                                "filter": "zoom>16",
                                "line-width": 2
                            }
                        ]
                    },
                    {
                        "filter": "class='construction'",
                        "style": [
                            {
                                "filter": "zoom>=14;zoom<=19",
                                "style": [
                                    {
                                        "line-width": 3,
                                        "line-color": "@railOther"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "motorway_name",
                "filter": "layerName='road_name';class='motorway'",
                "text-name": "@roadName",
                "text-fill": "@grayLevel1",
                "text-halo-radius": 2,
                "text-halo-fill": "@haloTransp50",
                "text-max-char-angle": 1,
                "style": [
                    {
                        "filter": "zoom=12",
                        "text-font": "500 11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=13;zoom<=14",
                        "text-font": "500 12px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=15;zoom<=17",
                        "text-halo-radius": 3,
                        "text-font": "500 15px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-halo-radius": 3,
                        "text-font": "500 17px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "trunk_name",
                "filter": "layerName='road_name';class='trunk'",
                "text-name": "@roadName",
                "text-fill": "@grayLevel1",
                "text-halo-radius": 1,
                "text-halo-fill": "@haloTransp50",
                "style": [
                    {
                        "filter": "zoom=12",
                        "text-font": "500 11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=13;zoom<=14",
                        "text-font": "500 12px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=15;zoom<=17",
                        "text-font": "500 15px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-font": "500 15px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "primary_name",
                "filter": "layerName='road_name';class='primary'",
                "text-name": "@roadName",
                "text-fill": "@grayLevel1",
                "text-max-char-angle": 1,
                "style": [
                    {
                        "filter": "zoom=13",
                        "text-halo-radius": 1,
                        "text-halo-fill": "@haloSolid",
                        "text-font": "500 11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=14;zoom<=16",
                        "text-font": "500 13px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom=17",
                        "text-font": "500 14px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-font": "500 16px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "secondary_name",
                "filter": "layerName='road_name';class='secondary'",
                "text-name": "@roadName",
                "text-fill": "@grayLevel1",
                "text-max-char-angle": 1,
                "style": [
                    {
                        "filter": "zoom>=12;zoom<=13",
                        "text-halo-radius": 1,
                        "text-halo-fill": "@haloSolid",
                        "text-font": "500 11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=14;zoom<=16",
                        "text-halo-radius": 1,
                        "text-halo-fill": "@haloSolid",
                        "text-font": "500 12px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=17;zoom<=17",
                        "text-font": "500 13px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-font": "500 15px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "tertiary_name",
                "filter": "layerName='road_name';class='tertiary'",
                "text-name": "@roadName",
                "text-max-char-angle": 0,
                "text-fill": "@grayLevel1",
                "style": [
                    {
                        "filter": "zoom=13",
                        "text-halo-radius": 1,
                        "text-halo-fill": "@haloSolid",
                        "text-fill": "@grayLevel4",
                        "text-font": "500 10px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom=14",
                        "text-halo-radius": 1,
                        "text-halo-fill": "@haloSolid",
                        "text-font": "500 11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=15;zoom<=17",
                        "text-halo-radius": 1,
                        "text-halo-fill": "@haloSolid",
                        "text-font": "12px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-font": "14px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "residential_name",
                "filter": "layerName='road_name';class='residential'",
                "text-name": "@roadName",
                "text-fill": "@grayLevel1",
                "style": [
                    {
                        "filter": "zoom=14",
                        "text-max-char-angle": 0.1,
                        "text-halo-radius": 1,
                        "text-halo-fill": "@haloSolid",
                        "text-fill": "@grayLevel4",
                        "text-font": "10px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=15;zoom<=16",
                        "text-max-char-angle": 0.15,
                        "text-halo-radius": 1,
                        "text-halo-fill": "@haloSolid",
                        "text-fill": "@grayLevel3",
                        "text-font": "11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom=17",
                        "text-max-char-angle": 1,
                        "text-font": "12px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-font": "13px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "pedestrian_name",
                "filter": "layerName='road_name';class='pedestrian'",
                "text-name": "@roadName",
                "text-fill": "@grayLevel1",
                "text-max-char-angle": 1,
                "style": [
                    {
                        "filter": "zoom>=16;zoom<=17",
                        "text-fill": "@grayLevel3",
                        "text-font": "11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-font": "12px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "otherroad_name",
                "filter": "layerName='road_name';class='road,raceway,unclassified,cycleway, bridleway, path, track'",
                "text-name": "@roadName",
                "text-fill": "@grayLevel1",
                "text-max-char-angle": 2,
                "style": [
                    {
                        "filter": "zoom=17;",
                        "text-font": "12px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-font": "14px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "road_oneway",
                "filter": "oneway=1;layerName='road'",
                "style": [
                    {
                        "filter": "zoom=15;class='primary'",
                        "line-oneway-symbol": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAFCAYAAABIHbx0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABOSURBVChTYzAxMSEKX758efulS5essMmBMFZBbPjKlSv/ofgo0FBfdHkUDpJighhoWAOyXhSD8GEkQw5fvXrVCV0ehYMPAw3YjTuMTBgA4r93NU8NzhcAAAAASUVORK5CYII="
                    },
                    {
                        "filter": "zoom>=16;zoom<=19;",
                        "style": [
                            {
                                "filter": "class!='motorway,motorway_link'",
                                "line-oneway-symbol": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAFCAYAAABIHbx0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABOSURBVChTYzAxMSEKX758efulS5essMmBMFZBbPjKlSv/ofgo0FBfdHkUDpJighhoWAOyXhSD8GEkQw5fvXrVCV0ehYMPAw3YjTuMTBgA4r93NU8NzhcAAAAASUVORK5CYII="
                            },
                            {
                                "line-oneway-symbol": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAFCAYAAABIHbx0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABISURBVChTY6ivrycK////fzsQW2GTA2Gsgtgw0BAYOArEvujyKByIOqJBA7JeFIPwYahmEDgMxE7o8igcfBioeTcQ4wijegYAQdC9YX5WhhEAAAAASUVORK5CYII="
                            }
                        ]
                    }
                ]
            },
            {
                "id": "water_name",
                "filter": "layerName='water_name'",
                "text-name": "@name",
                "text-fill": "@waterLabels",
                "text-wrap-width": 30,
                "style": [
                    {
                        "filter": "zoom=10;class=0",
                        "text-halo-radius": 2,
                        "text-halo-fill": "@haloTransp50",
                        "text-font": "oblique 500 10px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=10;zoom<=12;class=0",
                        "text-halo-radius": 2,
                        "text-halo-fill": "@haloTransp50",
                        "text-font": "oblique 500 12px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=13;zoom<=14;class=0",
                        "text-font": "oblique 500 13px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=15;zoom<=17;class=0",
                        "text-font": "oblique 500 15px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-font": "oblique 500 18px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "waterway_name",
                "filter": "layerName='waterway_name'",
                "text-name": "@roadName",
                "text-max-char-angle": 0.4,
                "text-fill": "@waterLabels",
                "style": [
                    {
                        "filter": "zoom>=13;zoom<=15;class=0",
                        "text-halo-radius": 1,
                        "text-halo-fill": "@haloTransp50",
                        "text-font": "500 11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=16;zoom<=17;class=0",
                        "text-font": "500 14px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-font": "16px Arial, Helvetica, sans-serif"
                    }
                ]
            },
            {
                "id": "building_name",
                "filter": "layerName='building_name'",
                "text-name": "@name",
                "text-fill": "@buildingName",
                "text-halo-radius": 2,
                "text-halo-fill": "@haloTransp50",
                "style": [
                    {
                        "filter": "zoom=15;class!='yes'",
                        "text-wrap-width": 40,
                        "text-font": "11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=16;zoom<=17",
                        "text-wrap-width": 40,
                        "text-font": "11px Arial, Helvetica, sans-serif"
                    },
                    {
                        "filter": "zoom>=18;zoom<=19",
                        "text-wrap-width": 60,
                        "text-font": "13px Arial, Helvetica, sans-serif"
                    }
                ]
            }
        ],
        "sources": [
            {
                "id": "worldstreets_source",
                "url": "http://54.177.171.109/v1/world-streets/v2/{z}/{x}/{y}.mvt",
                "type": "MVT"
            },
            {
                "id": "worldstreets_source_test",
                "url": "https://cloud1.thinkgeo.com/api/v1/maps/vector/streets/3857/{z}/{x}/{y}.pbf?apiKey=Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~",
                "type": "MVT"
            }
        ],
        "layers": [
            {
                "id": "worldstreets_layers",
                "source": "worldstreets_source_test",
                "styles": [
                    "country",
                    "urban",
                    "landcover", "water", "waterway", "building", "country_boundary", "province_boundary", "aeroway", "road", "railway", "place_popular", "place_others", "poi_icon", "country_name", "state_name", "marine_name", "poi_text", "road_number", "motorway_name", "trunk_name", "primary_name", "secondary_name", "tertiary_name", "residential_name", "pedestrian_name", "otherroad_name", "road_oneway", "water_name", "waterway_name", "building_name", "housenumber"
                ]
            }
        ]
    }