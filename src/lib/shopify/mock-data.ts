import { Product, Collection } from './types';

export const UNIVERSITY_LIST = [
  { code: "UE", name: "University of the East", handle: "ue", color: "Red & White", motto: "Tomorrow Begins in the East" },
  { code: "FEU", name: "Far Eastern University", handle: "feu", color: "Green & Gold", motto: "Fortitude, Excellence, Uprightness" },
  { code: "UST", name: "University of Santo Tomas", handle: "ust", color: "Gold, Black & White", motto: "Veritas in Caritate" },
  { code: "DLSU", name: "De La Salle University", handle: "dlsu", color: "Green & White", motto: "Religio, Mores, Cultura" },
  { code: "ADU", name: "Adamson University", handle: "adu", color: "Blue & White", motto: "Veritas in Caritate" },
  { code: "ADMU", name: "Ateneo de Manila University", handle: "admu", color: "Blue & White", motto: "Lux in Domino" },
  { code: "UP", name: "University of the Philippines", handle: "up", color: "Maroon & Forest Green", motto: "Honor and Excellence" },
  { code: "NU", name: "National University", handle: "nu", color: "Navy Blue & Gold", motto: "Education that works" },
];

export const CATEGORY_LIST = [
  { name: "Shirt", handle: "shirt", tag: "Shirt", description: "100% Premium carded cotton collegiate graphic t-shirts" },
  { name: "Hoodie", handle: "hoodie", tag: "Hoodie", description: "400GSM Heavyweight brushed fleece pullover and zip Sweatshirts" },
  { name: "Cap", handle: "cap", tag: "Cap", description: "Structured 6-panel wool blend and twill snapbacks" },
  { name: "Jersey", handle: "jersey", tag: "Jersey", description: "Authentic breathable athletic mesh varsity jerseys" },
  { name: "Lanyard", handle: "lanyard", tag: "Lanyard", description: "High-density woven ID lanyards with metal swivel clips" },
];

export const UNIVERSITY_COLLECTIONS: Collection[] = [
  ...UNIVERSITY_LIST.map((u) => ({
    id: `col-${u.handle}`,
    handle: u.handle,
    title: `${u.code} - ${u.name}`,
    description: `Official campus merchandise, apparel, Sweatshirts, and accessories for ${u.name} (${u.code}). Colors: ${u.color}.`,
  })),
  {
    id: "col-shirt",
    handle: "shirt",
    title: "University T-Shirts",
    description: "Premium combed cotton t-shirts featuring university typography and collegiate crests.",
  },
  {
    id: "col-hoodie",
    handle: "hoodie",
    title: "Heavyweight Hoodies",
    description: "Ultra-comfortable 400GSM heavyweight cotton fleece campus hoodies.",
  },
  {
    id: "col-cap",
    handle: "cap",
    title: "Campus Caps & Headwear",
    description: "Embroidered 3D monogram snapbacks and dad caps.",
  },
  {
    id: "col-jersey",
    handle: "jersey",
    title: "Varsity Sports Jerseys",
    description: "Breathable dual-mesh jerseys built for athletic events and game days.",
  },
  {
    id: "col-lanyard",
    handle: "lanyard",
    title: "University Lanyards",
    description: "Premium satin and woven ID lanyards with heavy-duty metal clasps and breakaway buckles.",
  },
];

export const UNIVERSITY_PRODUCTS: Product[] = [
  {
    "id": "prod-up-1",
    "handle": "up-fleece-hoodie",
    "title": "UP Fighting Maroons Heavyweight 400GSM Fleece Hoodie",
    "description": "Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Hoodie",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons Heavyweight 400GSM Fleece Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-fleece-hoodie-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      },
      {
        "id": "opt-up-fleece-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-fleece-hoodie-default",
            "title": "UP Maroon / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1450.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1750.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-up-2",
    "handle": "up-box-fit-tee",
    "title": "UP Fighting Maroons Heritage Box-Fit Heavyweight Graphic Tee",
    "description": "260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Shirt",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons Heritage Box-Fit Heavyweight Graphic Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-box-fit-tee-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      },
      {
        "id": "opt-up-box-fit-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-box-fit-tee-default",
            "title": "UP Maroon / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "750.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-up-3",
    "handle": "up-mesh-jersey",
    "title": "UP Fighting Maroons Game Day Authentic Athletic Mesh Jersey",
    "description": "Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Jersey",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons Game Day Authentic Athletic Mesh Jersey"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-mesh-jersey-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      },
      {
        "id": "opt-up-mesh-jersey-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-mesh-jersey-default",
            "title": "UP Maroon / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1150.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1350.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-up-4",
    "handle": "up-wool-snapback",
    "title": "UP Fighting Maroons 3D Raised Embroidered Wool Snapback",
    "description": "Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons 3D Raised Embroidered Wool Snapback"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-wool-snapback-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-wool-snapback-default",
            "title": "UP Maroon",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              }
            ],
            "price": {
              "amount": "650.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-up-5",
    "handle": "up-woven-lanyard",
    "title": "UP Fighting Maroons Heavy-Duty Woven Satin ID Lanyard",
    "description": "High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Lanyard",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons Heavy-Duty Woven Satin ID Lanyard"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-woven-lanyard-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-woven-lanyard-default",
            "title": "UP Maroon",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              }
            ],
            "price": {
              "amount": "250.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-up-6",
    "handle": "up-vintage-tee",
    "title": "UP Fighting Maroons Vintage Collegiate Typography Tee",
    "description": "Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons Vintage Collegiate Typography Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-vintage-tee-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      },
      {
        "id": "opt-up-vintage-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-vintage-tee-default",
            "title": "UP Maroon / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "699.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-up-7",
    "handle": "up-letterman-zip-hoodie",
    "title": "UP Fighting Maroons Varsity Letterman Zip-Up Hoodie",
    "description": "Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Hoodie",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons Varsity Letterman Zip-Up Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-letterman-zip-hoodie-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      },
      {
        "id": "opt-up-letterman-zip-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-letterman-zip-hoodie-default",
            "title": "UP Maroon / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1850.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-up-8",
    "handle": "up-campus-ringer-tee",
    "title": "UP Fighting Maroons Classic Campus Ringer T-Shirt",
    "description": "Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons Classic Campus Ringer T-Shirt"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-campus-ringer-tee-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      },
      {
        "id": "opt-up-campus-ringer-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-campus-ringer-tee-default",
            "title": "UP Maroon / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "599.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-up-9",
    "handle": "up-washed-dad-cap",
    "title": "UP Fighting Maroons Unstructured Washed Cotton Dad Cap",
    "description": "Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons Unstructured Washed Cotton Dad Cap"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-washed-dad-cap-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-washed-dad-cap-default",
            "title": "UP Maroon",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              }
            ],
            "price": {
              "amount": "550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-up-10",
    "handle": "up-practice-tank",
    "title": "UP Fighting Maroons Sleeveless Practice Basketball Tank",
    "description": "Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official University of the Philippines (UP) collection item.",
    "descriptionHtml": "<p>Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official University of the Philippines (UP) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UP",
      "Jersey",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UP Fighting Maroons Sleeveless Practice Basketball Tank"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-up-practice-tank-color",
        "name": "Color",
        "values": [
          "UP Maroon",
          "Forest Green",
          "Black"
        ]
      },
      {
        "id": "opt-up-practice-tank-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-up-practice-tank-default",
            "title": "UP Maroon / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "UP Maroon"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "890.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-1",
    "handle": "dlsu-fleece-hoodie",
    "title": "DLSU Green Archers Heavyweight 400GSM Fleece Hoodie",
    "description": "Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Hoodie",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers Heavyweight 400GSM Fleece Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-fleece-hoodie-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-dlsu-fleece-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-fleece-hoodie-default",
            "title": "Emerald Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1450.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1750.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-2",
    "handle": "dlsu-box-fit-tee",
    "title": "DLSU Green Archers Heritage Box-Fit Heavyweight Graphic Tee",
    "description": "260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Shirt",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers Heritage Box-Fit Heavyweight Graphic Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-box-fit-tee-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-dlsu-box-fit-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-box-fit-tee-default",
            "title": "Emerald Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "750.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-3",
    "handle": "dlsu-mesh-jersey",
    "title": "DLSU Green Archers Game Day Authentic Athletic Mesh Jersey",
    "description": "Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Jersey",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers Game Day Authentic Athletic Mesh Jersey"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-mesh-jersey-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-dlsu-mesh-jersey-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-mesh-jersey-default",
            "title": "Emerald Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1150.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1350.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-4",
    "handle": "dlsu-wool-snapback",
    "title": "DLSU Green Archers 3D Raised Embroidered Wool Snapback",
    "description": "Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers 3D Raised Embroidered Wool Snapback"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-wool-snapback-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-wool-snapback-default",
            "title": "Emerald Green",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              }
            ],
            "price": {
              "amount": "650.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-5",
    "handle": "dlsu-woven-lanyard",
    "title": "DLSU Green Archers Heavy-Duty Woven Satin ID Lanyard",
    "description": "High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Lanyard",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers Heavy-Duty Woven Satin ID Lanyard"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-woven-lanyard-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-woven-lanyard-default",
            "title": "Emerald Green",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              }
            ],
            "price": {
              "amount": "250.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-6",
    "handle": "dlsu-vintage-tee",
    "title": "DLSU Green Archers Vintage Collegiate Typography Tee",
    "description": "Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers Vintage Collegiate Typography Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-vintage-tee-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-dlsu-vintage-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-vintage-tee-default",
            "title": "Emerald Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "699.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-7",
    "handle": "dlsu-letterman-zip-hoodie",
    "title": "DLSU Green Archers Varsity Letterman Zip-Up Hoodie",
    "description": "Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Hoodie",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers Varsity Letterman Zip-Up Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-letterman-zip-hoodie-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-dlsu-letterman-zip-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-letterman-zip-hoodie-default",
            "title": "Emerald Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1850.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-8",
    "handle": "dlsu-campus-ringer-tee",
    "title": "DLSU Green Archers Classic Campus Ringer T-Shirt",
    "description": "Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers Classic Campus Ringer T-Shirt"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-campus-ringer-tee-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-dlsu-campus-ringer-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-campus-ringer-tee-default",
            "title": "Emerald Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "599.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-9",
    "handle": "dlsu-washed-dad-cap",
    "title": "DLSU Green Archers Unstructured Washed Cotton Dad Cap",
    "description": "Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers Unstructured Washed Cotton Dad Cap"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-washed-dad-cap-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-washed-dad-cap-default",
            "title": "Emerald Green",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              }
            ],
            "price": {
              "amount": "550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-dlsu-10",
    "handle": "dlsu-practice-tank",
    "title": "DLSU Green Archers Sleeveless Practice Basketball Tank",
    "description": "Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official De La Salle University (DLSU) collection item.",
    "descriptionHtml": "<p>Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official De La Salle University (DLSU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "DLSU",
      "Jersey",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "DLSU Green Archers Sleeveless Practice Basketball Tank"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-dlsu-practice-tank-color",
        "name": "Color",
        "values": [
          "Emerald Green",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-dlsu-practice-tank-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-dlsu-practice-tank-default",
            "title": "Emerald Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Emerald Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "890.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-1",
    "handle": "ust-fleece-hoodie",
    "title": "UST Growling Tigers Heavyweight 400GSM Fleece Hoodie",
    "description": "Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Hoodie",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers Heavyweight 400GSM Fleece Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-fleece-hoodie-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      },
      {
        "id": "opt-ust-fleece-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-fleece-hoodie-default",
            "title": "Tiger Gold / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1450.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1750.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-2",
    "handle": "ust-box-fit-tee",
    "title": "UST Growling Tigers Heritage Box-Fit Heavyweight Graphic Tee",
    "description": "260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Shirt",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers Heritage Box-Fit Heavyweight Graphic Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-box-fit-tee-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      },
      {
        "id": "opt-ust-box-fit-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-box-fit-tee-default",
            "title": "Tiger Gold / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "750.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-3",
    "handle": "ust-mesh-jersey",
    "title": "UST Growling Tigers Game Day Authentic Athletic Mesh Jersey",
    "description": "Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Jersey",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers Game Day Authentic Athletic Mesh Jersey"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-mesh-jersey-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      },
      {
        "id": "opt-ust-mesh-jersey-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-mesh-jersey-default",
            "title": "Tiger Gold / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1150.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1350.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-4",
    "handle": "ust-wool-snapback",
    "title": "UST Growling Tigers 3D Raised Embroidered Wool Snapback",
    "description": "Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers 3D Raised Embroidered Wool Snapback"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-wool-snapback-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-wool-snapback-default",
            "title": "Tiger Gold",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              }
            ],
            "price": {
              "amount": "650.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-5",
    "handle": "ust-woven-lanyard",
    "title": "UST Growling Tigers Heavy-Duty Woven Satin ID Lanyard",
    "description": "High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Lanyard",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers Heavy-Duty Woven Satin ID Lanyard"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-woven-lanyard-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-woven-lanyard-default",
            "title": "Tiger Gold",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              }
            ],
            "price": {
              "amount": "250.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-6",
    "handle": "ust-vintage-tee",
    "title": "UST Growling Tigers Vintage Collegiate Typography Tee",
    "description": "Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers Vintage Collegiate Typography Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-vintage-tee-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      },
      {
        "id": "opt-ust-vintage-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-vintage-tee-default",
            "title": "Tiger Gold / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "699.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-7",
    "handle": "ust-letterman-zip-hoodie",
    "title": "UST Growling Tigers Varsity Letterman Zip-Up Hoodie",
    "description": "Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Hoodie",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers Varsity Letterman Zip-Up Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-letterman-zip-hoodie-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      },
      {
        "id": "opt-ust-letterman-zip-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-letterman-zip-hoodie-default",
            "title": "Tiger Gold / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1850.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-8",
    "handle": "ust-campus-ringer-tee",
    "title": "UST Growling Tigers Classic Campus Ringer T-Shirt",
    "description": "Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers Classic Campus Ringer T-Shirt"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-campus-ringer-tee-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      },
      {
        "id": "opt-ust-campus-ringer-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-campus-ringer-tee-default",
            "title": "Tiger Gold / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "599.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-9",
    "handle": "ust-washed-dad-cap",
    "title": "UST Growling Tigers Unstructured Washed Cotton Dad Cap",
    "description": "Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers Unstructured Washed Cotton Dad Cap"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-washed-dad-cap-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-washed-dad-cap-default",
            "title": "Tiger Gold",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              }
            ],
            "price": {
              "amount": "550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ust-10",
    "handle": "ust-practice-tank",
    "title": "UST Growling Tigers Sleeveless Practice Basketball Tank",
    "description": "Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official University of Santo Tomas (UST) collection item.",
    "descriptionHtml": "<p>Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official University of Santo Tomas (UST) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UST",
      "Jersey",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UST Growling Tigers Sleeveless Practice Basketball Tank"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ust-practice-tank-color",
        "name": "Color",
        "values": [
          "Tiger Gold",
          "Black",
          "Black"
        ]
      },
      {
        "id": "opt-ust-practice-tank-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ust-practice-tank-default",
            "title": "Tiger Gold / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tiger Gold"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "890.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-1",
    "handle": "admu-fleece-hoodie",
    "title": "ADMU Blue Eagles Heavyweight 400GSM Fleece Hoodie",
    "description": "Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Hoodie",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles Heavyweight 400GSM Fleece Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-fleece-hoodie-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-admu-fleece-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-fleece-hoodie-default",
            "title": "Royal Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1450.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1750.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-2",
    "handle": "admu-box-fit-tee",
    "title": "ADMU Blue Eagles Heritage Box-Fit Heavyweight Graphic Tee",
    "description": "260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Shirt",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles Heritage Box-Fit Heavyweight Graphic Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-box-fit-tee-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-admu-box-fit-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-box-fit-tee-default",
            "title": "Royal Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "750.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-3",
    "handle": "admu-mesh-jersey",
    "title": "ADMU Blue Eagles Game Day Authentic Athletic Mesh Jersey",
    "description": "Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Jersey",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles Game Day Authentic Athletic Mesh Jersey"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-mesh-jersey-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-admu-mesh-jersey-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-mesh-jersey-default",
            "title": "Royal Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1150.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1350.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-4",
    "handle": "admu-wool-snapback",
    "title": "ADMU Blue Eagles 3D Raised Embroidered Wool Snapback",
    "description": "Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles 3D Raised Embroidered Wool Snapback"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-wool-snapback-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-wool-snapback-default",
            "title": "Royal Blue",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              }
            ],
            "price": {
              "amount": "650.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-5",
    "handle": "admu-woven-lanyard",
    "title": "ADMU Blue Eagles Heavy-Duty Woven Satin ID Lanyard",
    "description": "High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Lanyard",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles Heavy-Duty Woven Satin ID Lanyard"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-woven-lanyard-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-woven-lanyard-default",
            "title": "Royal Blue",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              }
            ],
            "price": {
              "amount": "250.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-6",
    "handle": "admu-vintage-tee",
    "title": "ADMU Blue Eagles Vintage Collegiate Typography Tee",
    "description": "Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles Vintage Collegiate Typography Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-vintage-tee-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-admu-vintage-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-vintage-tee-default",
            "title": "Royal Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "699.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-7",
    "handle": "admu-letterman-zip-hoodie",
    "title": "ADMU Blue Eagles Varsity Letterman Zip-Up Hoodie",
    "description": "Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Hoodie",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles Varsity Letterman Zip-Up Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-letterman-zip-hoodie-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-admu-letterman-zip-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-letterman-zip-hoodie-default",
            "title": "Royal Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1850.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-8",
    "handle": "admu-campus-ringer-tee",
    "title": "ADMU Blue Eagles Classic Campus Ringer T-Shirt",
    "description": "Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles Classic Campus Ringer T-Shirt"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-campus-ringer-tee-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-admu-campus-ringer-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-campus-ringer-tee-default",
            "title": "Royal Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "599.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-9",
    "handle": "admu-washed-dad-cap",
    "title": "ADMU Blue Eagles Unstructured Washed Cotton Dad Cap",
    "description": "Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles Unstructured Washed Cotton Dad Cap"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-washed-dad-cap-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-washed-dad-cap-default",
            "title": "Royal Blue",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              }
            ],
            "price": {
              "amount": "550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-admu-10",
    "handle": "admu-practice-tank",
    "title": "ADMU Blue Eagles Sleeveless Practice Basketball Tank",
    "description": "Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official Ateneo de Manila University (ADMU) collection item.",
    "descriptionHtml": "<p>Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official Ateneo de Manila University (ADMU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADMU",
      "Jersey",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADMU Blue Eagles Sleeveless Practice Basketball Tank"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-admu-practice-tank-color",
        "name": "Color",
        "values": [
          "Royal Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-admu-practice-tank-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-admu-practice-tank-default",
            "title": "Royal Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Royal Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "890.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-1",
    "handle": "feu-fleece-hoodie",
    "title": "FEU Tamaraws Heavyweight 400GSM Fleece Hoodie",
    "description": "Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Hoodie",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws Heavyweight 400GSM Fleece Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-fleece-hoodie-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-feu-fleece-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-fleece-hoodie-default",
            "title": "Tamaraw Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1450.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1750.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-2",
    "handle": "feu-box-fit-tee",
    "title": "FEU Tamaraws Heritage Box-Fit Heavyweight Graphic Tee",
    "description": "260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Shirt",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws Heritage Box-Fit Heavyweight Graphic Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-box-fit-tee-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-feu-box-fit-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-box-fit-tee-default",
            "title": "Tamaraw Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "750.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-3",
    "handle": "feu-mesh-jersey",
    "title": "FEU Tamaraws Game Day Authentic Athletic Mesh Jersey",
    "description": "Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Jersey",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws Game Day Authentic Athletic Mesh Jersey"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-mesh-jersey-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-feu-mesh-jersey-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-mesh-jersey-default",
            "title": "Tamaraw Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1150.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1350.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-4",
    "handle": "feu-wool-snapback",
    "title": "FEU Tamaraws 3D Raised Embroidered Wool Snapback",
    "description": "Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws 3D Raised Embroidered Wool Snapback"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-wool-snapback-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-wool-snapback-default",
            "title": "Tamaraw Green",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              }
            ],
            "price": {
              "amount": "650.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-5",
    "handle": "feu-woven-lanyard",
    "title": "FEU Tamaraws Heavy-Duty Woven Satin ID Lanyard",
    "description": "High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Lanyard",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws Heavy-Duty Woven Satin ID Lanyard"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-woven-lanyard-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-woven-lanyard-default",
            "title": "Tamaraw Green",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              }
            ],
            "price": {
              "amount": "250.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-6",
    "handle": "feu-vintage-tee",
    "title": "FEU Tamaraws Vintage Collegiate Typography Tee",
    "description": "Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws Vintage Collegiate Typography Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-vintage-tee-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-feu-vintage-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-vintage-tee-default",
            "title": "Tamaraw Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "699.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-7",
    "handle": "feu-letterman-zip-hoodie",
    "title": "FEU Tamaraws Varsity Letterman Zip-Up Hoodie",
    "description": "Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Hoodie",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws Varsity Letterman Zip-Up Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-letterman-zip-hoodie-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-feu-letterman-zip-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-letterman-zip-hoodie-default",
            "title": "Tamaraw Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1850.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-8",
    "handle": "feu-campus-ringer-tee",
    "title": "FEU Tamaraws Classic Campus Ringer T-Shirt",
    "description": "Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws Classic Campus Ringer T-Shirt"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-campus-ringer-tee-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-feu-campus-ringer-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-campus-ringer-tee-default",
            "title": "Tamaraw Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "599.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-9",
    "handle": "feu-washed-dad-cap",
    "title": "FEU Tamaraws Unstructured Washed Cotton Dad Cap",
    "description": "Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws Unstructured Washed Cotton Dad Cap"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-washed-dad-cap-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-washed-dad-cap-default",
            "title": "Tamaraw Green",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              }
            ],
            "price": {
              "amount": "550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-feu-10",
    "handle": "feu-practice-tank",
    "title": "FEU Tamaraws Sleeveless Practice Basketball Tank",
    "description": "Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official Far Eastern University (FEU) collection item.",
    "descriptionHtml": "<p>Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official Far Eastern University (FEU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "FEU",
      "Jersey",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "FEU Tamaraws Sleeveless Practice Basketball Tank"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-feu-practice-tank-color",
        "name": "Color",
        "values": [
          "Tamaraw Green",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-feu-practice-tank-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-feu-practice-tank-default",
            "title": "Tamaraw Green / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Tamaraw Green"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "890.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-1",
    "handle": "ue-fleece-hoodie",
    "title": "UE Red Warriors Heavyweight 400GSM Fleece Hoodie",
    "description": "Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Hoodie",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors Heavyweight 400GSM Fleece Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-fleece-hoodie-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-ue-fleece-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-fleece-hoodie-default",
            "title": "Warrior Red / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1450.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1750.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-2",
    "handle": "ue-box-fit-tee",
    "title": "UE Red Warriors Heritage Box-Fit Heavyweight Graphic Tee",
    "description": "260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Shirt",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors Heritage Box-Fit Heavyweight Graphic Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-box-fit-tee-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-ue-box-fit-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-box-fit-tee-default",
            "title": "Warrior Red / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "750.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-3",
    "handle": "ue-mesh-jersey",
    "title": "UE Red Warriors Game Day Authentic Athletic Mesh Jersey",
    "description": "Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Jersey",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors Game Day Authentic Athletic Mesh Jersey"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-mesh-jersey-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-ue-mesh-jersey-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-mesh-jersey-default",
            "title": "Warrior Red / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1150.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1350.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-4",
    "handle": "ue-wool-snapback",
    "title": "UE Red Warriors 3D Raised Embroidered Wool Snapback",
    "description": "Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors 3D Raised Embroidered Wool Snapback"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-wool-snapback-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-wool-snapback-default",
            "title": "Warrior Red",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              }
            ],
            "price": {
              "amount": "650.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-5",
    "handle": "ue-woven-lanyard",
    "title": "UE Red Warriors Heavy-Duty Woven Satin ID Lanyard",
    "description": "High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Lanyard",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors Heavy-Duty Woven Satin ID Lanyard"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-woven-lanyard-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-woven-lanyard-default",
            "title": "Warrior Red",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              }
            ],
            "price": {
              "amount": "250.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-6",
    "handle": "ue-vintage-tee",
    "title": "UE Red Warriors Vintage Collegiate Typography Tee",
    "description": "Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors Vintage Collegiate Typography Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-vintage-tee-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-ue-vintage-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-vintage-tee-default",
            "title": "Warrior Red / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "699.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-7",
    "handle": "ue-letterman-zip-hoodie",
    "title": "UE Red Warriors Varsity Letterman Zip-Up Hoodie",
    "description": "Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Hoodie",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors Varsity Letterman Zip-Up Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-letterman-zip-hoodie-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-ue-letterman-zip-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-letterman-zip-hoodie-default",
            "title": "Warrior Red / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1850.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-8",
    "handle": "ue-campus-ringer-tee",
    "title": "UE Red Warriors Classic Campus Ringer T-Shirt",
    "description": "Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors Classic Campus Ringer T-Shirt"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-campus-ringer-tee-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-ue-campus-ringer-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-campus-ringer-tee-default",
            "title": "Warrior Red / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "599.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-9",
    "handle": "ue-washed-dad-cap",
    "title": "UE Red Warriors Unstructured Washed Cotton Dad Cap",
    "description": "Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors Unstructured Washed Cotton Dad Cap"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-washed-dad-cap-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-washed-dad-cap-default",
            "title": "Warrior Red",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              }
            ],
            "price": {
              "amount": "550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-ue-10",
    "handle": "ue-practice-tank",
    "title": "UE Red Warriors Sleeveless Practice Basketball Tank",
    "description": "Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official University of the East (UE) collection item.",
    "descriptionHtml": "<p>Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official University of the East (UE) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "UE",
      "Jersey",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "UE Red Warriors Sleeveless Practice Basketball Tank"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-ue-practice-tank-color",
        "name": "Color",
        "values": [
          "Warrior Red",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-ue-practice-tank-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-ue-practice-tank-default",
            "title": "Warrior Red / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Warrior Red"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "890.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-1",
    "handle": "adu-fleece-hoodie",
    "title": "ADU Soaring Falcons Heavyweight 400GSM Fleece Hoodie",
    "description": "Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Hoodie",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons Heavyweight 400GSM Fleece Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-fleece-hoodie-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-adu-fleece-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-fleece-hoodie-default",
            "title": "Falcon Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1450.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1750.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-2",
    "handle": "adu-box-fit-tee",
    "title": "ADU Soaring Falcons Heritage Box-Fit Heavyweight Graphic Tee",
    "description": "260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Shirt",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons Heritage Box-Fit Heavyweight Graphic Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-box-fit-tee-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-adu-box-fit-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-box-fit-tee-default",
            "title": "Falcon Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "750.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-3",
    "handle": "adu-mesh-jersey",
    "title": "ADU Soaring Falcons Game Day Authentic Athletic Mesh Jersey",
    "description": "Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Jersey",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons Game Day Authentic Athletic Mesh Jersey"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-mesh-jersey-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-adu-mesh-jersey-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-mesh-jersey-default",
            "title": "Falcon Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1150.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1350.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-4",
    "handle": "adu-wool-snapback",
    "title": "ADU Soaring Falcons 3D Raised Embroidered Wool Snapback",
    "description": "Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons 3D Raised Embroidered Wool Snapback"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-wool-snapback-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-wool-snapback-default",
            "title": "Falcon Blue",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              }
            ],
            "price": {
              "amount": "650.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-5",
    "handle": "adu-woven-lanyard",
    "title": "ADU Soaring Falcons Heavy-Duty Woven Satin ID Lanyard",
    "description": "High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Lanyard",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons Heavy-Duty Woven Satin ID Lanyard"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-woven-lanyard-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-woven-lanyard-default",
            "title": "Falcon Blue",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              }
            ],
            "price": {
              "amount": "250.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-6",
    "handle": "adu-vintage-tee",
    "title": "ADU Soaring Falcons Vintage Collegiate Typography Tee",
    "description": "Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons Vintage Collegiate Typography Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-vintage-tee-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-adu-vintage-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-vintage-tee-default",
            "title": "Falcon Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "699.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-7",
    "handle": "adu-letterman-zip-hoodie",
    "title": "ADU Soaring Falcons Varsity Letterman Zip-Up Hoodie",
    "description": "Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Hoodie",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons Varsity Letterman Zip-Up Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-letterman-zip-hoodie-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-adu-letterman-zip-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-letterman-zip-hoodie-default",
            "title": "Falcon Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1850.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-8",
    "handle": "adu-campus-ringer-tee",
    "title": "ADU Soaring Falcons Classic Campus Ringer T-Shirt",
    "description": "Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons Classic Campus Ringer T-Shirt"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-campus-ringer-tee-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-adu-campus-ringer-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-campus-ringer-tee-default",
            "title": "Falcon Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "599.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-9",
    "handle": "adu-washed-dad-cap",
    "title": "ADU Soaring Falcons Unstructured Washed Cotton Dad Cap",
    "description": "Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons Unstructured Washed Cotton Dad Cap"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-washed-dad-cap-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-washed-dad-cap-default",
            "title": "Falcon Blue",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              }
            ],
            "price": {
              "amount": "550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-adu-10",
    "handle": "adu-practice-tank",
    "title": "ADU Soaring Falcons Sleeveless Practice Basketball Tank",
    "description": "Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official Adamson University (ADU) collection item.",
    "descriptionHtml": "<p>Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official Adamson University (ADU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "ADU",
      "Jersey",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "ADU Soaring Falcons Sleeveless Practice Basketball Tank"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-adu-practice-tank-color",
        "name": "Color",
        "values": [
          "Falcon Blue",
          "White",
          "Black"
        ]
      },
      {
        "id": "opt-adu-practice-tank-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-adu-practice-tank-default",
            "title": "Falcon Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Falcon Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "890.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-1",
    "handle": "nu-fleece-hoodie",
    "title": "NU Bulldogs Heavyweight 400GSM Fleece Hoodie",
    "description": "Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official National University (NU) collection item.",
    "descriptionHtml": "<p>Signature heavyweight brushed fleece pullover with custom chenille lettering and ribbed cuffs. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Hoodie",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs Heavyweight 400GSM Fleece Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1450.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-fleece-hoodie-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-nu-fleece-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-fleece-hoodie-default",
            "title": "Navy Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1450.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1750.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-2",
    "handle": "nu-box-fit-tee",
    "title": "NU Bulldogs Heritage Box-Fit Heavyweight Graphic Tee",
    "description": "260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official National University (NU) collection item.",
    "descriptionHtml": "<p>260GSM carded cotton drop-shoulder streetwear tee featuring vintage typography and emblems. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Shirt",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs Heritage Box-Fit Heavyweight Graphic Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "750.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-box-fit-tee-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-nu-box-fit-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-box-fit-tee-default",
            "title": "Navy Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "750.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-3",
    "handle": "nu-mesh-jersey",
    "title": "NU Bulldogs Game Day Authentic Athletic Mesh Jersey",
    "description": "Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official National University (NU) collection item.",
    "descriptionHtml": "<p>Breathable dual-mesh varsity jersey with reinforced contrast side panels and heat-pressed lettering. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Jersey",
      "Collegiate",
      "Featured"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs Game Day Authentic Athletic Mesh Jersey"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1150.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1350.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-mesh-jersey-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-nu-mesh-jersey-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-mesh-jersey-default",
            "title": "Navy Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1150.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1350.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-4",
    "handle": "nu-wool-snapback",
    "title": "NU Bulldogs 3D Raised Embroidered Wool Snapback",
    "description": "Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official National University (NU) collection item.",
    "descriptionHtml": "<p>Structured 6-panel wool blend cap with raised 3D monogram and classic green undervisor. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs 3D Raised Embroidered Wool Snapback"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "650.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-wool-snapback-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-wool-snapback-default",
            "title": "Navy Blue",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              }
            ],
            "price": {
              "amount": "650.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-5",
    "handle": "nu-woven-lanyard",
    "title": "NU Bulldogs Heavy-Duty Woven Satin ID Lanyard",
    "description": "High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official National University (NU) collection item.",
    "descriptionHtml": "<p>High-density woven lanyard with matte alloy swivel clasp and breakaway safety clip. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Lanyard",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs Heavy-Duty Woven Satin ID Lanyard"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "250.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-woven-lanyard-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-woven-lanyard-default",
            "title": "Navy Blue",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              }
            ],
            "price": {
              "amount": "250.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-6",
    "handle": "nu-vintage-tee",
    "title": "NU Bulldogs Vintage Collegiate Typography Tee",
    "description": "Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official National University (NU) collection item.",
    "descriptionHtml": "<p>Retro washed 240GSM combed cotton tee with distressed collegiate screenprint. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs Vintage Collegiate Typography Tee"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "699.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-vintage-tee-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-nu-vintage-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-vintage-tee-default",
            "title": "Navy Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "699.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-7",
    "handle": "nu-letterman-zip-hoodie",
    "title": "NU Bulldogs Varsity Letterman Zip-Up Hoodie",
    "description": "Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official National University (NU) collection item.",
    "descriptionHtml": "<p>Full-zip heavyweight fleece jacket with chenille varsity letter patches on chest and sleeve. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Hoodie",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs Varsity Letterman Zip-Up Hoodie"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "1850.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-letterman-zip-hoodie-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-nu-letterman-zip-hoodie-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-letterman-zip-hoodie-default",
            "title": "Navy Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "1550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": {
              "amount": "1850.00",
              "currencyCode": "PHP"
            }
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-8",
    "handle": "nu-campus-ringer-tee",
    "title": "NU Bulldogs Classic Campus Ringer T-Shirt",
    "description": "Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official National University (NU) collection item.",
    "descriptionHtml": "<p>Contrast rib collar and sleeve ringer tee inspired by 90s campus aesthetics. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Shirt",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs Classic Campus Ringer T-Shirt"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "599.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-campus-ringer-tee-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-nu-campus-ringer-tee-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-campus-ringer-tee-default",
            "title": "Navy Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "599.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-9",
    "handle": "nu-washed-dad-cap",
    "title": "NU Bulldogs Unstructured Washed Cotton Dad Cap",
    "description": "Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official National University (NU) collection item.",
    "descriptionHtml": "<p>Low-profile relaxed dad hat with metal buckle strap and micro-embroidered collegiate seal. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Cap",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs Unstructured Washed Cotton Dad Cap"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "550.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-washed-dad-cap-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-washed-dad-cap-default",
            "title": "Navy Blue",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              }
            ],
            "price": {
              "amount": "550.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  },
  {
    "id": "prod-nu-10",
    "handle": "nu-practice-tank",
    "title": "NU Bulldogs Sleeveless Practice Basketball Tank",
    "description": "Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official National University (NU) collection item.",
    "descriptionHtml": "<p>Ultra-lightweight mesh training tank engineered for athletic performance and campus intramurals. Official National University (NU) collection item.</p>",
    "availableForSale": true,
    "vendor": "COLLEGIATE MERCH",
    "tags": [
      "NU",
      "Jersey",
      "Collegiate"
    ],
    "featuredImage": {
      "url": "",
      "altText": "NU Bulldogs Sleeveless Practice Basketball Tank"
    },
    "images": {
      "edges": []
    },
    "priceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "compareAtPriceRange": {
      "minVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      },
      "maxVariantPrice": {
        "amount": "890.00",
        "currencyCode": "PHP"
      }
    },
    "options": [
      {
        "id": "opt-nu-practice-tank-color",
        "name": "Color",
        "values": [
          "Navy Blue",
          "Gold",
          "Black"
        ]
      },
      {
        "id": "opt-nu-practice-tank-size",
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      }
    ],
    "variants": {
      "edges": [
        {
          "node": {
            "id": "var-nu-practice-tank-default",
            "title": "Navy Blue / M",
            "availableForSale": true,
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Navy Blue"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ],
            "price": {
              "amount": "890.00",
              "currencyCode": "PHP"
            },
            "compareAtPrice": null
          }
        }
      ]
    }
  }
];
