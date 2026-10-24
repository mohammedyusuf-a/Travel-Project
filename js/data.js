/* ============================================================
   Life Journey — Real World Destinations & Tour Guide Data
   30 World-Renowned & Domestic Destinations with Complete
   Tour Schedules, "Enga Pora, Enna Pandram, Enna Schedule",
   and Specific Expense Breakdown (Flight, Room, Bus, Food, Photo).
   ============================================================ */

const DESTINATIONS = [
  {
    "id": 1,
    "name": "Santorini",
    "country": "Greece",
    "continent": "Europe",
    "emoji": "🏛️",
    "flag": "🇬🇷",
    "type": [
      "beach",
      "cultural"
    ],
    "rating": 4.9,
    "avgCost": "₹24,500/day",
    "flightCost": 52000,
    "roomCost": 48000,
    "busCost": 7500,
    "foodCost": 18000,
    "photographerCost": 12500,
    "totalPackage": 138000,
    "tags": [
      "Caldera Views",
      "Sunset",
      "Wine",
      "Whitewashed Villages"
    ],
    "image": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Santorini is a volcanic masterpiece in the Aegean Sea, famed for cascading whitewashed cliff villages, sapphire-domed chapels, and breathtaking caldera sunsets in Oia.",
    "highlights": [
      "Watch the world-famous sunset from the Byzantine Castle in Oia",
      "Explore the remarkably preserved prehistoric ruins of Akrotiri",
      "Sip native Assyrtiko wine at cliffside Santo Wines caldera terrace",
      "Sail a luxury catamaran to the volcanic hot springs of Nea Kameni",
      "Hike the scenic 10km caldera rim trail from Fira to Oia"
    ],
    "whereWeGo": [
      "Oia Sunset Castle & Blue Domed Churches",
      "Fira Caldera Panoramic Cliff Walk",
      "Akrotiri Prehistoric Bronze Age Ruins",
      "Red Sand Beach & Perissa Black Sand Coast",
      "Nea Kameni Active Volcanic Island & Hot Springs"
    ],
    "whatWeDo": [
      "Private Golden Hour Sunset Photoshoot with dedicated photographer",
      "Catamaran Luxury Sailing with Greek BBQ & Snorkeling",
      "Cliffside Assyrtiko Wine & Cheese Degustation",
      "Traditional Cycladic Cooking Masterclass in Megalochori",
      "Scenic caldera hiking with cinematic drone video reel capturing"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Caldera Arrival, VIP Check-in & Sunset Welcome",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "VIP Mercedes transfer from Santorini Airport / Port to Cliffside Resort"
          },
          {
            "time": "12:00 PM",
            "activity": "Check-in to Caldera Suite with infinity pool & Mediterranean welcome drink"
          },
          {
            "time": "04:30 PM",
            "activity": "Stroll through Oia alleys for initial golden hour location scouting"
          },
          {
            "time": "07:00 PM",
            "activity": "World-famous Oia Castle sunset gathering & welcome Greek taverna dinner"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Catamaran Sailing & Volcanic Hot Springs",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Gourmet Greek breakfast overlooking the azure Aegean Sea"
          },
          {
            "time": "10:30 AM",
            "activity": "Board luxury sailing catamaran at Ammoudi Bay"
          },
          {
            "time": "01:00 PM",
            "activity": "Fresh grilled seafood lunch on board + swim in Nea Kameni thermal springs"
          },
          {
            "time": "05:30 PM",
            "activity": "Wine tasting session at Santo Wines cliffside terrace"
          },
          {
            "time": "08:30 PM",
            "activity": "Candlelight dinner under the stars in Firostefani"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Dedicated Photoshoot & Hidden Villages",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Exclusive sunrise photoshoot with dedicated personal photographer (DSLR + Drone)"
          },
          {
            "time": "10:00 AM",
            "activity": "Visit Akrotiri prehistoric ruins & Red volcanic beach"
          },
          {
            "time": "03:00 PM",
            "activity": "Explore Pyrgos medieval village & local artisan boutique shopping"
          },
          {
            "time": "07:30 PM",
            "activity": "Farewell champagne toast & transfer for onward departure"
          }
        ]
      }
    ],
    "bestTime": "May–October",
    "currency": "Euro (€)",
    "language": "Greek / English",
    "coordinates": [
      36.3932,
      25.4615
    ],
    "timezone": "GMT+3"
  },
  {
    "id": 2,
    "name": "Kyoto",
    "country": "Japan",
    "continent": "Asia",
    "emoji": "⛩️",
    "flag": "🇯🇵",
    "type": [
      "cultural",
      "city"
    ],
    "rating": 4.9,
    "avgCost": "₹16,500/day",
    "flightCost": 44000,
    "roomCost": 36000,
    "busCost": 6500,
    "foodCost": 14500,
    "photographerCost": 9500,
    "totalPackage": 110500,
    "tags": [
      "Temples",
      "Geisha",
      "Cherry Blossom",
      "Zen Gardens"
    ],
    "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1478436127897-769e00d2c715?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Kyoto, Japan's imperial capital for over a millennium, is the cultural soul of Japan. It holds over 2,000 temples and shrines, peaceful bamboo groves in Arashiyama, and lantern-lit streets in Gion.",
    "highlights": [
      "Walk beneath thousands of vermilion torii gates at Fushimi Inari Shrine",
      "Immerse yourself in the towering bamboo forest of Arashiyama",
      "Marvel at Kinkaku-ji, the majestic Golden Pavilion reflected on the pond",
      "Experience an authentic Japanese matcha tea ceremony with a master"
    ],
    "whereWeGo": [
      "Fushimi Inari Taisha (10,000 Torii Gates)",
      "Arashiyama Sagano Bamboo Forest & Tenryu-ji",
      "Kinkaku-ji (Golden Pavilion Temple)",
      "Gion Historic Geisha District & Hanamikoji Street",
      "Nishiki 400-Year-Old Gourmet Food Market"
    ],
    "whatWeDo": [
      "Kimono wearing experience with professional photographer portrait shoot",
      "Traditional Zen Matcha Tea Ceremony with local master",
      "Fushimi Inari torii gate early-morning photography walk",
      "Authentic Kaiseki multi-course imperial dining & Wagyu tasting",
      "Scenic rickshaw ride along Hozu River in Arashiyama"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Arashiyama Bamboo Grove & Tenryu-ji Zen",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Express Shinkansen train arrival & check-in to historic Ryokan"
          },
          {
            "time": "11:00 AM",
            "activity": "Wander through whispering Arashiyama bamboo forest with DSLR photoshoot"
          },
          {
            "time": "01:30 PM",
            "activity": "Traditional soba noodle & matcha lunch overlooking scenic Togetsukyo Bridge"
          },
          {
            "time": "04:30 PM",
            "activity": "Zen rock garden meditation at Tenryu-ji Temple"
          },
          {
            "time": "07:30 PM",
            "activity": "Multi-course Kaiseki dinner with seasonal Japanese delicacies"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Torii Gates, Golden Pavilion & Gion Evenings",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Early sunrise walk through Fushimi Inari Taisha vermilion gates (drone + gimbal video)"
          },
          {
            "time": "10:30 AM",
            "activity": "Visit gilded Kinkaku-ji Golden Pavilion surrounded by mirror pond"
          },
          {
            "time": "02:00 PM",
            "activity": "Food sampling spree at Nishiki Market (takoyaki, matcha ice cream, wagyu skewers)"
          },
          {
            "time": "05:00 PM",
            "activity": "Kimono styling & lantern-lit walk through Gion historic geisha alleys"
          },
          {
            "time": "08:00 PM",
            "activity": "Traditional tea house dining & sake tasting"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Kiyomizu-dera & Traditional Crafts",
        "timeline": [
          {
            "time": "08:00 AM",
            "activity": "Climb up to Kiyomizu-dera wooden stage with panorama of Kyoto valley"
          },
          {
            "time": "11:30 AM",
            "activity": "Handicrafts & green tea shopping along Ninenzaka & Sannenzaka preserved streets"
          },
          {
            "time": "03:00 PM",
            "activity": "Final photo delivery & departure to next city"
          }
        ]
      }
    ],
    "bestTime": "March–May, Oct–Nov",
    "currency": "Japanese Yen (¥)",
    "language": "Japanese",
    "coordinates": [
      35.0116,
      135.7681
    ],
    "timezone": "GMT+9"
  },
  {
    "id": 3,
    "name": "Bali",
    "country": "Indonesia",
    "continent": "Asia",
    "emoji": "🌺",
    "flag": "🇮🇩",
    "type": [
      "beach",
      "nature",
      "cultural"
    ],
    "rating": 4.8,
    "avgCost": "₹8,500/day",
    "flightCost": 26000,
    "roomCost": 22000,
    "busCost": 4500,
    "foodCost": 9500,
    "photographerCost": 6500,
    "totalPackage": 68500,
    "tags": [
      "Rice Terraces",
      "Temples",
      "Surf",
      "Yoga"
    ],
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Bali, the Island of the Gods, enchantingly merges emerald tiered rice terraces, sacred ocean cliff temples, jungle yoga retreats in Ubud, and boho surf beaches.",
    "highlights": [
      "Witness sunset over the iconic sea temple of Tanah Lot",
      "Wander the UNESCO-listed Tegallalang emerald rice paddies in Ubud",
      "Catch surf breaks and watch the Kecak fire dance at Uluwatu cliffs"
    ],
    "whereWeGo": [
      "Tegallalang Rice Terraces & Bali Jungle Swing",
      "Tanah Lot Sea Temple",
      "Uluwatu Sunset Temple & Clifftop Amphitheatre",
      "Tegenungan Waterfall & Sacred Monkey Forest Ubud",
      "Seminyak Beach & Beach Club sunset strip"
    ],
    "whatWeDo": [
      "Bali Swing flying dress photography session with drone footage",
      "Clifftop Kecak Fire Dance performance during orange sunset",
      "Balinese flower petal bath & rejuvenating spa treatment",
      "Mount Batur sunrise jeep adventure & volcanic hot springs soak",
      "Candlelit seafood dinner on the sand at Jimbaran Bay"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Ubud Jungle Haven & Rice Terraces",
        "timeline": [
          {
            "time": "10:00 AM",
            "activity": "Denpasar Airport pickup & private AC transfer to luxury pool villa in Ubud"
          },
          {
            "time": "01:00 PM",
            "activity": "Floating breakfast / organic smoothie bowl lunch in the jungle villa"
          },
          {
            "time": "03:30 PM",
            "activity": "Tegallalang rice terrace exploration and giant swing photoshoot"
          },
          {
            "time": "07:00 PM",
            "activity": "Traditional Balinese dinner with roasted duck (Bebek Betutu) in Ubud town"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Waterfalls & Sacred Temples",
        "timeline": [
          {
            "time": "08:00 AM",
            "activity": "Tegenungan Waterfall swim & Instagram-worthy spray photos"
          },
          {
            "time": "11:30 AM",
            "activity": "Tirta Empul Holy Water temple purification ritual"
          },
          {
            "time": "03:30 PM",
            "activity": "Drive to Tanah Lot sea temple for sunset photography as tide rises"
          },
          {
            "time": "07:30 PM",
            "activity": "Fresh lobster and grilled fish dinner directly on Jimbaran beach"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Uluwatu Cliffs & Kecak Dance Spectacle",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Relax at Padang Padang surf beach with turquoise waters"
          },
          {
            "time": "02:00 PM",
            "activity": "Visit Uluwatu cliff temple perched 70 meters above crashing waves"
          },
          {
            "time": "06:00 PM",
            "activity": "Mesmerizing Kecak Fire Dance performance against the sunset sky"
          },
          {
            "time": "08:30 PM",
            "activity": "Beach club celebration & cocktail evening in Seminyak"
          }
        ]
      }
    ],
    "bestTime": "April–October",
    "currency": "Indonesian Rupiah (IDR)",
    "language": "Indonesian / Balinese / English",
    "coordinates": [
      -8.3405,
      115.092
    ],
    "timezone": "GMT+8"
  },
  {
    "id": 4,
    "name": "Paris",
    "country": "France",
    "continent": "Europe",
    "emoji": "🗼",
    "flag": "🇫🇷",
    "type": [
      "city",
      "cultural"
    ],
    "rating": 4.8,
    "avgCost": "₹26,800/day",
    "flightCost": 54000,
    "roomCost": 52000,
    "busCost": 8500,
    "foodCost": 22000,
    "photographerCost": 14000,
    "totalPackage": 150500,
    "tags": [
      "Art",
      "Fashion",
      "Cuisine",
      "Romance"
    ],
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520939817895-060bdef4dc1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "The City of Light stands as the world's quintessential capital of romance, gastronomy, and fine arts. Experience the sparkling Eiffel Tower, the Louvre, and charming Parisian sidewalk bistros.",
    "highlights": [
      "Ascend the Eiffel Tower for panoramic 360° vistas of the Paris skyline",
      "Admire the Mona Lisa and Venus de Milo in the historic Louvre Museum",
      "Stroll the cobblestone bohemian alleys of Montmartre up to Sacré-Cœur"
    ],
    "whereWeGo": [
      "Eiffel Tower & Trocadéro Viewpoint",
      "Louvre Museum & Tuileries Garden",
      "Montmartre & Sacré-Cœur Basilica",
      "Champs-Élysées & Arc de Triomphe",
      "Seine River Illuminated Cruise Route"
    ],
    "whatWeDo": [
      "Trocadéro sunrise photoshoot with Eiffel Tower backdrop by personal photographer",
      "Seine River twilight dinner cruise with live accordion & champagne",
      "French bakery tour: fresh croissants, macarons & artisanal cheese tasting",
      "VIP skip-the-line Louvre guided masterpiece discovery",
      "Shopping & perfume crafting in Le Marais district"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Eiffel Magic & Seine River Twilight Cruise",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "CDG Airport transfer to boutique hotel near Champs-Élysées"
          },
          {
            "time": "11:30 AM",
            "activity": "Fresh pain au chocolat & coffee at classic boulevard cafe"
          },
          {
            "time": "03:00 PM",
            "activity": "Walk up to Arc de Triomphe rooftop for city avenue panoramas"
          },
          {
            "time": "07:30 PM",
            "activity": "Seine river glass-canopy dinner cruise with sparkling Eiffel Tower show"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Sunrise Photoshoot & The Grand Louvre",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Exclusive sunrise photoshoot at Place du Trocadéro with dedicated photographer"
          },
          {
            "time": "10:30 AM",
            "activity": "Louvre Museum guided discovery (Mona Lisa, Winged Victory)"
          },
          {
            "time": "02:00 PM",
            "activity": "Stroll through Tuileries Garden & hot chocolate at Angelina"
          },
          {
            "time": "06:00 PM",
            "activity": "Montmartre bohemian painters' square & Sacré-Cœur sunset"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Versailles Royal Palace & Haute Cuisine",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Day excursion to the gilded Hall of Mirrors at Palace of Versailles"
          },
          {
            "time": "02:30 PM",
            "activity": "Return to Paris for boutique shopping in Le Marais"
          },
          {
            "time": "08:00 PM",
            "activity": "Michelin-starred French multi-course celebration dinner"
          }
        ]
      }
    ],
    "bestTime": "April–June, Sept–Nov",
    "currency": "Euro (€)",
    "language": "French / English",
    "coordinates": [
      48.8566,
      2.3522
    ],
    "timezone": "GMT+2"
  },
  {
    "id": 5,
    "name": "Machu Picchu",
    "country": "Peru",
    "continent": "South America",
    "emoji": "🏔️",
    "flag": "🇵🇪",
    "type": [
      "adventure",
      "cultural",
      "mountain"
    ],
    "rating": 4.9,
    "avgCost": "₹12,500/day",
    "flightCost": 92000,
    "roomCost": 28000,
    "busCost": 12000,
    "foodCost": 14000,
    "photographerCost": 11000,
    "totalPackage": 157000,
    "tags": [
      "Inca Empire",
      "Hiking",
      "Ruins",
      "Andes"
    ],
    "image": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Machu Picchu, the fabled Lost City of the Incas, sits perched high in the Peruvian Andes at 2,430 meters. Built with mortarless dry-stone granite walls, it harmonizes incredible engineering with mountain peaks.",
    "highlights": [
      "Enter through the Sun Gate (Inti Punku) as morning mist lifts",
      "Trek along the classic Inca Trail with Andean alpaca encounters",
      "Explore the terraces and colorful artisan markets of the Sacred Valley"
    ],
    "whereWeGo": [
      "Cusco Historic Imperial City & Plaza de Armas",
      "Sacred Valley of the Incas & Ollantaytambo Fortress",
      "Machu Picchu Citadel & Temple of the Sun",
      "Huayna Picchu Peak Trail",
      "Aguas Calientes Hot Springs Town"
    ],
    "whatWeDo": [
      "Panoramic glass-roof Vistadome train ride through the Sacred Valley",
      "Sunrise photography session as Andean clouds part over the lost city",
      "Peruvian ceviche and traditional Andean quinoa culinary dinner",
      "Alpaca & llama portrait photoshoot with our dedicated guide",
      "Local Quechua weaving & textile workshop"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Cusco Acclimatization & Sacred Valley",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Arrival in Cusco & coca tea acclimatization at boutique heritage hotel"
          },
          {
            "time": "01:00 PM",
            "activity": "Scenic coach transfer down to warmer Sacred Valley"
          },
          {
            "time": "04:00 PM",
            "activity": "Explore Ollantaytambo massive stone fortress & ancient granaries"
          },
          {
            "time": "07:30 PM",
            "activity": "Traditional Andean wood-fired dinner under star-filled skies"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "The Lost Citadel of Machu Picchu",
        "timeline": [
          {
            "time": "06:00 AM",
            "activity": "Scenic Vistadome panoramic train through Urubamba river canyon"
          },
          {
            "time": "08:30 AM",
            "activity": "Enter Machu Picchu as morning mists swirl around the ancient ruins"
          },
          {
            "time": "11:00 AM",
            "activity": "Guided photography walk through Intihuatana stone & royal enclosures"
          },
          {
            "time": "02:30 PM",
            "activity": "Buffet lunch at Sanctuary Lodge overlooking Huayna Picchu peak"
          },
          {
            "time": "06:00 PM",
            "activity": "Thermal hot spring bath in Aguas Calientes"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Huayna Picchu & Return Journey",
        "timeline": [
          {
            "time": "07:00 AM",
            "activity": "Hike up Huayna Picchu stairs for bird's-eye views of the full citadel"
          },
          {
            "time": "12:30 PM",
            "activity": "Return train to Cusco & artisan souvenir shopping at San Pedro market"
          },
          {
            "time": "07:00 PM",
            "activity": "Farewell Peruvian dinner with Pisco Sour cocktails"
          }
        ]
      }
    ],
    "bestTime": "May–September",
    "currency": "Peruvian Sol (PEN)",
    "language": "Spanish / Quechua / English",
    "coordinates": [
      -13.1631,
      -72.545
    ],
    "timezone": "GMT-5"
  },
  {
    "id": 6,
    "name": "Safari — Serengeti",
    "country": "Tanzania",
    "continent": "Africa",
    "emoji": "🦁",
    "flag": "🇹🇿",
    "type": [
      "adventure",
      "nature"
    ],
    "rating": 4.9,
    "avgCost": "₹38,500/day",
    "flightCost": 65000,
    "roomCost": 68000,
    "busCost": 22000,
    "foodCost": 24000,
    "photographerCost": 18000,
    "totalPackage": 197000,
    "tags": [
      "Big Five",
      "Wildlife",
      "Migration",
      "Savanna"
    ],
    "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "The vast golden plains of Serengeti National Park host one of earth's greatest wildlife spectacles: the annual Great Migration of millions of wildebeest and predators.",
    "highlights": [
      "Track Africa's Big Five on 4x4 open-top sunrise game drives",
      "Float silently above the acacia savanna in a sunrise hot air balloon",
      "Descend into the adjacent prehistoric Ngorongoro volcanic crater"
    ],
    "whereWeGo": [
      "Serengeti Central Seronera Plains",
      "Grumeti River Crocodile Crossing",
      "Ngorongoro Prehistoric Volcanic Caldera",
      "Maasai Boma Cultural Village",
      "Kopjes Lion Rocks"
    ],
    "whatWeDo": [
      "Sunrise hot air balloon safari with champagne bush breakfast",
      "Telephoto wildlife photography guided by veteran African rangers",
      "4x4 customized pop-up roof safari vehicle game drives",
      "Maasai warrior jumping dance and ancestral storytelling",
      "Luxury tented camp dining under lantern light with sounds of the wild"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Flight into the Bush & Sunset Game Drive",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Bush flight landing on Seronera airstrip inside the Serengeti"
          },
          {
            "time": "12:00 PM",
            "activity": "Check-in to luxury glamping tented lodge with panoramic savanna deck"
          },
          {
            "time": "03:30 PM",
            "activity": "Afternoon 4x4 game drive spotting pride of lions relaxing on granite kopjes"
          },
          {
            "time": "07:30 PM",
            "activity": "Campfire dinner with grilled meats and African stargazing"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Balloon Safari & Great Migration Tracking",
        "timeline": [
          {
            "time": "05:00 AM",
            "activity": "Float aloft at sunrise in hot air balloon over running herds of zebras"
          },
          {
            "time": "08:30 AM",
            "activity": "Champagne full English breakfast set up in the middle of open wilderness"
          },
          {
            "time": "11:00 AM",
            "activity": "Full day tracker game drive to catch river crossings & cheetah hunts"
          },
          {
            "time": "06:30 PM",
            "activity": "Sundowner drinks overlooking endless golden plains"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Ngorongoro Lost World Crater",
        "timeline": [
          {
            "time": "06:00 AM",
            "activity": "Descend 600m into Ngorongoro crater floor for black rhino & flamingo tracking"
          },
          {
            "time": "01:00 PM",
            "activity": "Picnic lunch by hippo pool"
          },
          {
            "time": "05:00 PM",
            "activity": "Transfer to Kilimanjaro airstrip for onward flights"
          }
        ]
      }
    ],
    "bestTime": "Jan–March, July–Sept",
    "currency": "USD / TZS",
    "language": "Swahili / English",
    "coordinates": [
      -2.3333,
      34.8333
    ],
    "timezone": "GMT+3"
  },
  {
    "id": 7,
    "name": "New York City",
    "country": "USA",
    "continent": "North America",
    "emoji": "🗽",
    "flag": "🇺🇸",
    "type": [
      "city"
    ],
    "rating": 4.7,
    "avgCost": "₹28,500/day",
    "flightCost": 68000,
    "roomCost": 58000,
    "busCost": 9000,
    "foodCost": 26000,
    "photographerCost": 15000,
    "totalPackage": 176000,
    "tags": [
      "Manhattan",
      "Broadway",
      "Museums",
      "Nightlife"
    ],
    "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "New York City pulses with unmistakable energy as a global center of culture, Broadway theater, world-class architecture, and culinary brilliance.",
    "highlights": [
      "Take the ferry to the Statue of Liberty and Ellis Island National Museum",
      "Walk across the historic Gothic stone arches of Brooklyn Bridge",
      "Catch an award-winning musical production in the Broadway Theater District"
    ],
    "whereWeGo": [
      "Times Square & Broadway Theater District",
      "Central Park & Bow Bridge",
      "Brooklyn Bridge & DUMBO Waterfront",
      "Statue of Liberty & Battery Park",
      "SUMMIT One Vanderbilt & High Line"
    ],
    "whatWeDo": [
      "DUMBO & Brooklyn Bridge sunrise photoshoot with Manhattan skyline",
      "VIP Broadway musical show with prime orchestra seating",
      "Central Park horse carriage ride & rooftop cocktail lounge",
      "New York classic pastrami, bagel & cheesecake food crawl",
      "High Line elevated railway walk & Hudson Yards Vessel visit"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Manhattan Icons & Times Square Lights",
        "timeline": [
          {
            "time": "10:00 AM",
            "activity": "JFK Airport transfer & check-in to Midtown Manhattan hotel"
          },
          {
            "time": "01:00 PM",
            "activity": "Stroll Central Park Bethesda Fountain & strawberry fields"
          },
          {
            "time": "04:30 PM",
            "activity": "Ride glass elevators up to SUMMIT One Vanderbilt mirrored decks"
          },
          {
            "time": "08:00 PM",
            "activity": "Dazzling neon lights of Times Square & Broadway musical show"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Brooklyn Bridge Sunrise & DUMBO Photoshoot",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Sunrise stroll and professional photoshoot on Brooklyn Bridge & DUMBO"
          },
          {
            "time": "10:00 AM",
            "activity": "Artisanal breakfast & coffee at Brooklyn waterfront cafe"
          },
          {
            "time": "01:30 PM",
            "activity": "Statue of Liberty & Ellis Island private ferry tour"
          },
          {
            "time": "06:30 PM",
            "activity": "High Line sunset walk and dinner at Chelsea Market"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "World Class Art & Rooftop Skyline",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Metropolitan Museum of Art (The Met) masterwork exploration"
          },
          {
            "time": "02:00 PM",
            "activity": "Fifth Avenue luxury flagship shopping"
          },
          {
            "time": "07:00 PM",
            "activity": "Farewell dinner at 60th-floor rooftop restaurant overlooking Manhattan"
          }
        ]
      }
    ],
    "bestTime": "April–June, Sept–Nov",
    "currency": "US Dollar ($)",
    "language": "English",
    "coordinates": [
      40.7128,
      -74.006
    ],
    "timezone": "GMT-4"
  },
  {
    "id": 8,
    "name": "Amalfi Coast",
    "country": "Italy",
    "continent": "Europe",
    "emoji": "🍋",
    "flag": "🇮🇹",
    "type": [
      "beach",
      "cultural"
    ],
    "rating": 4.8,
    "avgCost": "₹27,500/day",
    "flightCost": 52000,
    "roomCost": 54000,
    "busCost": 8500,
    "foodCost": 22000,
    "photographerCost": 14000,
    "totalPackage": 150500,
    "tags": [
      "Cliffside",
      "Mediterranean",
      "Limoncello",
      "Scenic Drive"
    ],
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "The Amalfi Coast is a UNESCO jewel where pastel-hued villages cling to sheer Mediterranean cliffs plunging into azure waters, celebrated for lemon orchards and Positano charm.",
    "highlights": [
      "Drive along dramatic twists of the famous coastal cliff road",
      "Explore Positano's pastel houses, boutiques, and Spiaggia Grande",
      "Take a private wooden gozzo boat tour to Capri and the Blue Grotto"
    ],
    "whereWeGo": [
      "Positano Cliffside Village & Spiaggia Grande",
      "Amalfi Cathedral & Historic Harbor",
      "Ravello Villa Rufolo & Infinity Terrace",
      "Capri Island & Blue Grotto Sea Cave",
      "Fiordo di Furore Hidden Cove"
    ],
    "whatWeDo": [
      "Private vintage wooden boat cruise along Positano cliffs with photoshoot",
      "Chilled authentic Limoncello tasting in a hillside organic lemon grove",
      "Hike the breathtaking Path of the Gods (Sentiero degli Dei)",
      "Capri island swimming in crystal grottos and Faraglioni rocks passage",
      "Fresh handmade pasta & Neapolitan seafood dinner on clifftop terrace"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Positano Magic & Sunset Spritz",
        "timeline": [
          {
            "time": "11:00 AM",
            "activity": "Naples transfer along winding coastal highway to Positano boutique hotel"
          },
          {
            "time": "02:00 PM",
            "activity": "Lunch of gnocchi alla sorrentina with views over cascading pastel villas"
          },
          {
            "time": "05:00 PM",
            "activity": "Golden hour stroll on Spiaggia Grande beach with personal photographer"
          },
          {
            "time": "08:00 PM",
            "activity": "Sunset Aperol Spritz & fresh seafood dinner perched on the cliff"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Private Gozzo Boat to Capri & Blue Grotto",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Board private Italian wooden gozzo boat toward Capri island"
          },
          {
            "time": "11:30 AM",
            "activity": "Rowboat entry into the surreal glowing blue waters of the Blue Grotto"
          },
          {
            "time": "02:00 PM",
            "activity": "Capri town designer shopping and gelato at the Piazzetta"
          },
          {
            "time": "06:00 PM",
            "activity": "Cruise back through Faraglioni rock arches with champagne"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Ravello Gardens & Lemon Groves",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Ascend to Ravello and walk through clifftop gardens of Villa Cimbrone"
          },
          {
            "time": "01:00 PM",
            "activity": "Tour family-owned lemon farm with artisanal Limoncello tasting"
          },
          {
            "time": "05:30 PM",
            "activity": "Visit Amalfi Cathedral and transfer for onward departure"
          }
        ]
      }
    ],
    "bestTime": "May–September",
    "currency": "Euro (€)",
    "language": "Italian / English",
    "coordinates": [
      40.634,
      14.6027
    ],
    "timezone": "GMT+2"
  },
  {
    "id": 9,
    "name": "Queenstown",
    "country": "New Zealand",
    "continent": "Oceania",
    "emoji": "🎿",
    "flag": "🇳🇿",
    "type": [
      "adventure",
      "mountain",
      "nature"
    ],
    "rating": 4.8,
    "avgCost": "₹19,500/day",
    "flightCost": 72000,
    "roomCost": 42000,
    "busCost": 9500,
    "foodCost": 19000,
    "photographerCost": 12000,
    "totalPackage": 154500,
    "tags": [
      "Bungee",
      "Skiing",
      "Fjords",
      "Adrenaline"
    ],
    "image": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1589871135246-83679813295f?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Framed by Lake Wakatipu and the dramatic peaks of The Remarkables, Queenstown is the world's undisputed adventure capital offering bungee jumping, skiing, and Milford Sound cruises.",
    "highlights": [
      "Bungee jump from Kawarau Bridge, the birthplace of commercial bungee",
      "Cruise through the breathtaking towering fjords and waterfalls of Milford Sound",
      "Speed through dramatic river canyons on the Shotover Jet boat"
    ],
    "whereWeGo": [
      "Lake Wakatipu & Queenstown Waterfront",
      "Milford Sound Fjord National Park",
      "Skyline Gondola & Bob's Peak",
      "Kawarau Bridge Bungee Site",
      "Shotover River Canyons"
    ],
    "whatWeDo": [
      "Milford Sound scenic nature cruise with seal & dolphin spotting",
      "Thrilling Shotover Jet boat 360-degree spins through narrow canyons",
      "Skyline Luge downhill gravity racing with Remarkables mountain panorama",
      "World-famous Fergburger gourmet meal by the crystal lake",
      "Central Otago Pinot Noir boutique winery tour & tasting"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Skyline Views & Lake Wakatipu Welcome",
        "timeline": [
          {
            "time": "10:30 AM",
            "activity": "Queenstown Airport pickup with panoramic lake view transfer"
          },
          {
            "time": "01:00 PM",
            "activity": "Famous Fergburger lunch by the scenic Lake Wakatipu shore"
          },
          {
            "time": "03:30 PM",
            "activity": "Ride Skyline Gondola to Bob's Peak & downhill luge racing"
          },
          {
            "time": "07:30 PM",
            "activity": "Stratosphere restaurant buffet dinner overlooking Queenstown city lights"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Milford Sound Eighth Wonder Cruise",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Glass-roof luxury coach through Homer Tunnel to Milford Sound"
          },
          {
            "time": "11:30 AM",
            "activity": "Board catamaran cruise beneath 1,000m sheer waterfalls & Mitre Peak"
          },
          {
            "time": "01:30 PM",
            "activity": "Glacial water spray encounter at Stirling Falls with drone photography"
          },
          {
            "time": "06:00 PM",
            "activity": "Scenic return flight / drive and cozy wood-fire pub dinner"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Adrenaline Shotover Jet & Wineries",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "High-speed Shotover Jet boat ride skimming within inches of canyon walls"
          },
          {
            "time": "11:30 AM",
            "activity": "Visit historic Kawarau Bungee Bridge (jump or watch adrenaline thrill)"
          },
          {
            "time": "02:30 PM",
            "activity": "Gibbston Valley wine cave tour & Pinot Noir tasting"
          },
          {
            "time": "06:30 PM",
            "activity": "Hot pools soak overlooking Shotover canyon before departure"
          }
        ]
      }
    ],
    "bestTime": "Dec–Feb (summer), June–Aug (skiing)",
    "currency": "NZ Dollar (NZD)",
    "language": "English / Māori",
    "coordinates": [
      -45.0312,
      168.6626
    ],
    "timezone": "GMT+12"
  },
  {
    "id": 10,
    "name": "Maldives",
    "country": "Maldives",
    "continent": "Asia",
    "emoji": "🌊",
    "flag": "🇲🇻",
    "type": [
      "beach"
    ],
    "rating": 4.9,
    "avgCost": "₹36,000/day",
    "flightCost": 22000,
    "roomCost": 85000,
    "busCost": 14000,
    "foodCost": 28000,
    "photographerCost": 16000,
    "totalPackage": 165000,
    "tags": [
      "Overwater Bungalows",
      "Coral Reef",
      "Snorkeling",
      "Luxury"
    ],
    "image": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "The Maldives is an archipelago of 1,200 pristine coral islands in the warm Indian Ocean. Known for private overwater villas, crystalline lagoons, and rich marine biodiversity.",
    "highlights": [
      "Wake up to 360° turquoise ocean views in a private overwater villa",
      "Snorkel with gentle giant whale sharks and manta rays in Baa Atoll",
      "Dine in an all-glass underwater restaurant surrounded by swimming marine life"
    ],
    "whereWeGo": [
      "Private Island Overwater Resort Lagoon",
      "Baa Atoll UNESCO Biosphere Reserve",
      "Deserted Sandbank Island",
      "Ithaa Underwater Restaurant / Sea Glass Pavilion",
      "Bioluminescent Glowing Beach Shore"
    ],
    "whatWeDo": [
      "Drone aerial photoshoot over private wooden water villa & turquoise lagoon",
      "Snorkel safari with sea turtles, harmless reef sharks, and vibrant coral",
      "Champagne sunset dolphin cruise on traditional Dhoni yacht",
      "Private candlelit sandbank barbecue isolated in the middle of ocean",
      "Overwater couples spa treatment with glass viewing floor under beds"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Seaplane Arrival & Overwater Villa Check-in",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Thrilling scenic seaplane flight over turquoise atolls landing directly at resort"
          },
          {
            "time": "11:30 AM",
            "activity": "Check-in to private overwater bungalow with direct ocean steps & plunge pool"
          },
          {
            "time": "02:00 PM",
            "activity": "Lunch at open-air barefoot beach grill"
          },
          {
            "time": "05:30 PM",
            "activity": "Sunset dolphin safari on traditional Dhoni with complimentary champagne"
          },
          {
            "time": "08:00 PM",
            "activity": "Multi-cuisine gourmet buffet under swaying coconut palms"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Manta Ray Snorkeling & Sandbank Isolation",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Floating tropical breakfast delivered right to your private villa pool"
          },
          {
            "time": "10:30 AM",
            "activity": "Speedboat ride to Baa Atoll to swim with manta rays and sea turtles"
          },
          {
            "time": "01:30 PM",
            "activity": "Isolated sandbank picnic lunch with drone photography & crystal waters"
          },
          {
            "time": "05:00 PM",
            "activity": "Rejuvenating massage at overwater luxury spa"
          },
          {
            "time": "08:30 PM",
            "activity": "Fine dining 5 meters beneath sea level at underwater restaurant"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Water Sports & Bioluminescent Farewell",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Paddleboarding and transparent glass kayaking in calm lagoon"
          },
          {
            "time": "02:00 PM",
            "activity": "Relaxing sunbathing and cocktail tasting at beachside infinity pool"
          },
          {
            "time": "07:30 PM",
            "activity": "Seafood BBQ dinner on the beach followed by glowing plankton night walk"
          }
        ]
      }
    ],
    "bestTime": "November–April",
    "currency": "USD / MVR",
    "language": "Dhivehi / English",
    "coordinates": [
      3.2028,
      73.2207
    ],
    "timezone": "GMT+5"
  },
  {
    "id": 11,
    "name": "Iceland",
    "country": "Iceland",
    "continent": "Europe",
    "emoji": "🌋",
    "flag": "🇮🇸",
    "type": [
      "nature",
      "adventure"
    ],
    "rating": 4.8,
    "avgCost": "₹24,500/day",
    "flightCost": 58000,
    "roomCost": 46000,
    "busCost": 16000,
    "foodCost": 21000,
    "photographerCost": 15000,
    "totalPackage": 156000,
    "tags": [
      "Northern Lights",
      "Geysers",
      "Waterfalls",
      "Glaciers"
    ],
    "image": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Iceland is the land of fire and ice where active geothermal volcanoes, vast blue ice glaciers, and cascading waterfalls define the otherworldly arctic landscape.",
    "highlights": [
      "Track the Aurora Borealis (Northern Lights) dancing across dark arctic skies",
      "Soak in the geothermal, mineral-rich milky waters of Blue Lagoon",
      "Walk behind the thunderous curtain of water at Seljalandsfoss"
    ],
    "whereWeGo": [
      "Blue Lagoon Geothermal Spa",
      "Golden Circle: Gullfoss, Geysir & Thingvellir",
      "Seljalandsfoss & Skógafoss Waterfalls",
      "Reynisfjara Black Sand Beach & Basalt Columns",
      "Vatnajökull Glacier Crystal Ice Caves"
    ],
    "whatWeDo": [
      "Chasing Northern Lights (Aurora) with night long-exposure photography",
      "Natural sapphire-blue ice cave expedition with crampons and helmet",
      "Relaxing silica mud mask & warm bath at geothermal Blue Lagoon",
      "Super Jeep ride across black volcanic deserts and river crossings",
      "Traditional Icelandic lamb stew and rye bread baked underground"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Blue Lagoon Soak & Reykjavik Capital",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Keflavik Airport pickup and direct transfer to world-famous Blue Lagoon"
          },
          {
            "time": "11:00 AM",
            "activity": "Warm geothermal mineral soak & silica face mask with in-water smoothie"
          },
          {
            "time": "03:00 PM",
            "activity": "Check-in to modern Reykjavik hotel & Hallgrímskirkja church tower view"
          },
          {
            "time": "08:30 PM",
            "activity": "First Aurora Borealis night hunt with expert astrophotographer guide"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Golden Circle & Erupting Geysers",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Walk between North American & Eurasian tectonic plates at Thingvellir"
          },
          {
            "time": "11:30 AM",
            "activity": "Witness Strokkur geyser blast boiling water 30 meters into the air"
          },
          {
            "time": "01:30 PM",
            "activity": "Roaring Gullfoss Golden Waterfall overlook with rainbow mist"
          },
          {
            "time": "06:30 PM",
            "activity": "Geothermal bread bakery tour & authentic Viking dinner"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "South Coast Waterfalls & Black Sands",
        "timeline": [
          {
            "time": "08:00 AM",
            "activity": "Walk directly behind the 60m drop of Seljalandsfoss waterfall"
          },
          {
            "time": "11:30 AM",
            "activity": "Stand beneath towering sea cliffs and basalt columns at Reynisfjara Black Beach"
          },
          {
            "time": "03:00 PM",
            "activity": "Touch crystal blue ice at Katla glacier ice cave before evening departure"
          }
        ]
      }
    ],
    "bestTime": "June–August (Sun), Sept–March (Aurora)",
    "currency": "Icelandic Króna (ISK)",
    "language": "Icelandic / English",
    "coordinates": [
      64.9631,
      -19.0208
    ],
    "timezone": "GMT+0"
  },
  {
    "id": 12,
    "name": "Petra & Wadi Rum",
    "country": "Jordan",
    "continent": "Asia",
    "emoji": "🏺",
    "flag": "🇯🇴",
    "type": [
      "cultural",
      "adventure"
    ],
    "rating": 4.9,
    "avgCost": "₹12,500/day",
    "flightCost": 38000,
    "roomCost": 26000,
    "busCost": 7000,
    "foodCost": 12500,
    "photographerCost": 9000,
    "totalPackage": 92500,
    "tags": [
      "Rose City",
      "Ancient",
      "Nabataean",
      "Wadi Rum"
    ],
    "image": "https://images.unsplash.com/photo-1579606032821-6d4b29bbca09?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1501238295340-c810d3c156d2?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579606032821-6d4b29bbca09?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Carved straight into pink and rose-red sandstone cliffs over two millennia ago by Nabataeans, Petra is one of the New Seven Wonders of the World.",
    "highlights": [
      "Walk through the towering 1.2km Siq canyon to the first glimpse of Al-Khazneh",
      "Hike 800 stone steps to reach Ad Deir (The Monastery) carved in the cliff",
      "Sleep in Bedouin bubble tents under starry desert skies in nearby Wadi Rum"
    ],
    "whereWeGo": [
      "The Siq Narrow Canyon Entrance",
      "Al-Khazneh (The Treasury)",
      "Ad Deir (The Monastery Peak)",
      "Wadi Rum Red Martian Desert",
      "Dead Sea Salt Floating Resort"
    ],
    "whatWeDo": [
      "Petra by Night: Walk Siq illuminated by 1,500 glowing candles with flute music",
      "4x4 open bed truck safari across red sands of Wadi Rum",
      "Traditional Bedouin Zarb feast cooked underground in the desert sands",
      "Float weightlessly on the mineral-rich waters of the Dead Sea",
      "Camel ride and desert sunset photoshoot with personal photographer"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "The Treasury First Glimpse & Petra by Night",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Amman transfer to Petra luxury hotel at gate entrance"
          },
          {
            "time": "11:30 AM",
            "activity": "Walk through dramatic 1.2km towering Siq canyon to the iconic Treasury facade"
          },
          {
            "time": "02:00 PM",
            "activity": "Explore the Royal Tombs & Roman amphitheater"
          },
          {
            "time": "08:30 PM",
            "activity": "Magical Petra by Night candlelit experience in front of the Treasury"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "The Monastery Hike & Wadi Rum Luxury Camp",
        "timeline": [
          {
            "time": "07:00 AM",
            "activity": "Morning climb up 800 mountain steps to the massive Ad Deir Monastery"
          },
          {
            "time": "01:00 PM",
            "activity": "Drive into the red Martian desert landscapes of Wadi Rum"
          },
          {
            "time": "03:30 PM",
            "activity": "4x4 sand dune safari visiting Lawrence of Arabia springs & rock bridges"
          },
          {
            "time": "07:30 PM",
            "activity": "Bedouin Zarb barbecue dinner & sleep in luxury glass dome Martian bubble tent"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Dead Sea Float & Departure",
        "timeline": [
          {
            "time": "08:00 AM",
            "activity": "Desert sunrise camel trek with scenic photo session"
          },
          {
            "time": "12:00 PM",
            "activity": "Transfer to Dead Sea resort for natural mud bath and weightless float"
          },
          {
            "time": "05:00 PM",
            "activity": "Airport transfer to Queen Alia International Airport"
          }
        ]
      }
    ],
    "bestTime": "March–May, Sept–Nov",
    "currency": "Jordanian Dinar (JOD)",
    "language": "Arabic / English",
    "coordinates": [
      30.3285,
      35.4444
    ],
    "timezone": "GMT+3"
  },
  {
    "id": 13,
    "name": "Swiss Alps",
    "country": "Switzerland",
    "continent": "Europe",
    "emoji": "🏔️",
    "flag": "🇨🇭",
    "type": [
      "mountain",
      "nature",
      "adventure"
    ],
    "rating": 4.9,
    "avgCost": "₹31,500/day",
    "flightCost": 56000,
    "roomCost": 58000,
    "busCost": 14500,
    "foodCost": 26000,
    "photographerCost": 15000,
    "totalPackage": 169500,
    "tags": [
      "Matterhorn",
      "Zermatt",
      "Skiing",
      "Scenic Trains"
    ],
    "image": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "The Swiss Alps present one of earth's most iconic mountain panoramas, crowned by the tooth-shaped summit of the Matterhorn in Zermatt and glass-domed panoramic trains.",
    "highlights": [
      "View the legendary pyramidal peak of Matterhorn from Gornergrat railway",
      "Ride the Glacier Express panoramic train through snowy gorges",
      "Ascend to Jungfraujoch 'Top of Europe' railway station at 3,454m"
    ],
    "whereWeGo": [
      "Zermatt Car-Free Alpine Chalet Village",
      "Gornergrat Cogwheel Mountain Railway (3,089m)",
      "Interlaken & Lake Brienz Turquoise Waters",
      "Jungfraujoch 'Top of Europe' Ice Palace",
      "Grindelwald First Cliff Walk"
    ],
    "whatWeDo": [
      "Ride the world-famous Glacier Express with panoramic glass windows",
      "Gornergrat reflection lake photoshoot with the Matterhorn pyramid",
      "Authentic Swiss Gruyère cheese fondue & handmade chocolate masterclass",
      "Grindelwald First cliff walk suspension bridge and mountain flyer",
      "Scenic cruise on the emerald glacial waters of Lake Brienz"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Glacier Express to Zermatt & Matterhorn Sunset",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Board scenic Swiss Travel Pass train through alpine valleys to car-free Zermatt"
          },
          {
            "time": "01:30 PM",
            "activity": "Check-in to wooden alpine chalet with direct Matterhorn balcony view"
          },
          {
            "time": "04:30 PM",
            "activity": "Stroll quaint cobbled village streets and old wooden barns"
          },
          {
            "time": "07:30 PM",
            "activity": "Traditional bubbling cheese fondue dinner with Swiss wine"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Gornergrat Peak & Reflection Lake Photoshoot",
        "timeline": [
          {
            "time": "07:30 AM",
            "activity": "Ride Gornergrat cogwheel train up to 3,089m elevation"
          },
          {
            "time": "10:00 AM",
            "activity": "Hike to Riffelsee lake to capture mirror reflection of Matterhorn peak"
          },
          {
            "time": "01:00 PM",
            "activity": "Alpine lunch at 3100 Kulmhotel with 29 four-thousand-meter peaks surrounding"
          },
          {
            "time": "05:00 PM",
            "activity": "Relax in heated outdoor thermal infinity pool facing snowy peaks"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Jungfraujoch Top of Europe & Interlaken",
        "timeline": [
          {
            "time": "08:00 AM",
            "activity": "Panoramic train to Jungfraujoch ice palace carved inside the glacier"
          },
          {
            "time": "01:30 PM",
            "activity": "Grindelwald First cliff walk high above the valley floor"
          },
          {
            "time": "06:00 PM",
            "activity": "Chocolate boutique shopping in Interlaken before departure"
          }
        ]
      }
    ],
    "bestTime": "Dec–April (Skiing), June–Sept (Hiking)",
    "currency": "Swiss Franc (CHF)",
    "language": "German / French / Italian / English",
    "coordinates": [
      45.9763,
      7.7491
    ],
    "timezone": "GMT+2"
  },
  {
    "id": 14,
    "name": "Rome",
    "country": "Italy",
    "continent": "Europe",
    "emoji": "🏛️",
    "flag": "🇮🇹",
    "type": [
      "cultural",
      "city"
    ],
    "rating": 4.9,
    "avgCost": "₹19,500/day",
    "flightCost": 49000,
    "roomCost": 38000,
    "busCost": 6500,
    "foodCost": 18000,
    "photographerCost": 11000,
    "totalPackage": 122500,
    "tags": [
      "Colosseum",
      "Vatican",
      "Pasta",
      "History"
    ],
    "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Rome, the Eternal City, is an open-air museum where ancient Roman ruins like the Colosseum live side-by-side with Renaissance fountains, lively piazzas, and mouthwatering pasta trattorias.",
    "highlights": [
      "Step inside the Colosseum arena where ancient gladiators once fought",
      "Toss a coin into the Trevi Fountain to guarantee your return to Rome",
      "Tour the Vatican Museums and gaze at Michelangelo's Sistine Chapel"
    ],
    "whereWeGo": [
      "Colosseum Arena & Roman Forum",
      "Trevi Fountain & Spanish Steps",
      "Vatican City & St. Peter's Basilica",
      "The Pantheon 2,000-Year-Old Dome",
      "Trastevere Bohemian Cobblestone Alleys"
    ],
    "whatWeDo": [
      "Trevi Fountain early sunrise photoshoot before crowds arrive",
      "VIP Gladiator arena floor access inside the Colosseum",
      "Italian pasta & tiramisu cooking masterclass with local chef",
      "Vintage Vespa sidecar ride through Roman historic piazzas",
      "Authentic Cacio e Pepe and Carbonara food crawl in Trastevere"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Gladiator Arena & Roman Forum",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Fiumicino airport pickup & hotel check-in near Piazza Navona"
          },
          {
            "time": "11:30 AM",
            "activity": "VIP fast-track Colosseum arena floor and underground gladiator cells"
          },
          {
            "time": "02:30 PM",
            "activity": "Walk through ruins of Roman Forum and Palatine Hill emperors' palaces"
          },
          {
            "time": "07:30 PM",
            "activity": "Authentic Roman Carbonara dinner in atmospheric Trastevere"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Trevi Fountain Sunrise & Vatican Treasures",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Sunrise photoshoot at empty Trevi Fountain & Spanish Steps"
          },
          {
            "time": "09:30 AM",
            "activity": "Espresso & freshly baked cornetto at historic Sant'Eustachio cafe"
          },
          {
            "time": "11:00 AM",
            "activity": "Vatican Museums, Raphael Rooms & Michelangelo's Sistine Chapel"
          },
          {
            "time": "03:30 PM",
            "activity": "Stand beneath open oculus dome of the 2,000-year-old Pantheon"
          },
          {
            "time": "07:30 PM",
            "activity": "Artisanal gelato tasting & candlelit dinner at Piazza Navona"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Castel Sant'Angelo & Culinary Walk",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Walk across marble angel bridge to Castel Sant'Angelo fortress"
          },
          {
            "time": "01:00 PM",
            "activity": "Handmade pasta and pizza making masterclass with wine pairing"
          },
          {
            "time": "06:00 PM",
            "activity": "Sunset view from Pincio terrace overlooking Rome skyline"
          }
        ]
      }
    ],
    "bestTime": "April–June, Sept–Oct",
    "currency": "Euro (€)",
    "language": "Italian / English",
    "coordinates": [
      41.9028,
      12.4964
    ],
    "timezone": "GMT+2"
  },
  {
    "id": 15,
    "name": "Tokyo",
    "country": "Japan",
    "continent": "Asia",
    "emoji": "🗼",
    "flag": "🇯🇵",
    "type": [
      "city",
      "cultural"
    ],
    "rating": 4.9,
    "avgCost": "₹21,500/day",
    "flightCost": 48000,
    "roomCost": 42000,
    "busCost": 8000,
    "foodCost": 19500,
    "photographerCost": 12500,
    "totalPackage": 130000,
    "tags": [
      "Shibuya",
      "Sushi",
      "Technology",
      "Temples"
    ],
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Tokyo is a dizzying, futuristic megalopolis where neon-lit skyscrapers and anime districts coexist effortlessly with ancient shrines and the world's most Michelin-starred restaurants.",
    "highlights": [
      "Cross Shibuya Crossing, the world's busiest pedestrian scramble",
      "Visit Senso-ji, Tokyo's oldest and most venerated Buddhist temple in Asakusa",
      "Immerse yourself in interactive digital art at teamLab Planets"
    ],
    "whereWeGo": [
      "Shibuya Crossing & Hachiko Square",
      "Shinjuku Omoide Yokocho & Neon Alleys",
      "Asakusa Senso-ji Temple & Nakamise Street",
      "teamLab Planets Digital Art Museum",
      "Akihabara Electric Town & Harajuku Takeshita Street"
    ],
    "whatWeDo": [
      "Shibuya Sky rooftop 360-degree glass sunset photoshoot",
      "Omakase Michelin-standard sushi dinner prepared by master chef",
      "Wander teamLab Planets walking through knee-deep water and digital koi",
      "Akihabara retro gaming, anime figurines & maid cafe cultural experience",
      "Harajuku quirky street food: giant rainbow cotton candy & Japanese crepes"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Neon Shibuya & Shinjuku Sky",
        "timeline": [
          {
            "time": "10:00 AM",
            "activity": "Haneda Airport arrival & hotel check-in in vibrant Shinjuku"
          },
          {
            "time": "01:30 PM",
            "activity": "Ramen bowl lunch at Ichiran with private booth ordering"
          },
          {
            "time": "04:30 PM",
            "activity": "Cross bustling Shibuya scramble & view from Shibuya Sky open rooftop"
          },
          {
            "time": "08:00 PM",
            "activity": "Yakitori skewers & draft beer in retro lantern-lit Omoide Yokocho"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Ancient Asakusa & Futuristic teamLab",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Incense purification and temple bell ringing at Senso-ji Temple"
          },
          {
            "time": "11:30 AM",
            "activity": "Street snack tasting on Nakamise Dori (melon pan, dango, matcha)"
          },
          {
            "time": "02:30 PM",
            "activity": "Step barefoot into teamLab Planets immersive infinity rooms"
          },
          {
            "time": "07:30 PM",
            "activity": "Exquisite multi-course Omakase sushi dinner in Ginza"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Harajuku Fashion & Mount Fuji Glimpse",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Peaceful walk through towering cedar trees to Meiji Jingu Shrine"
          },
          {
            "time": "11:30 AM",
            "activity": "Takeshita Street youth fashion and quirky boutique shopping"
          },
          {
            "time": "04:00 PM",
            "activity": "Akihabara electronics exploration & departure transfer"
          }
        ]
      }
    ],
    "bestTime": "March–May, Oct–Nov",
    "currency": "Japanese Yen (¥)",
    "language": "Japanese / English",
    "coordinates": [
      35.6762,
      139.6503
    ],
    "timezone": "GMT+9"
  },
  {
    "id": 16,
    "name": "Barcelona",
    "country": "Spain",
    "continent": "Europe",
    "emoji": "🎨",
    "flag": "🇪🇸",
    "type": [
      "cultural",
      "beach",
      "city"
    ],
    "rating": 4.8,
    "avgCost": "₹18,500/day",
    "flightCost": 48000,
    "roomCost": 36000,
    "busCost": 6000,
    "foodCost": 17500,
    "photographerCost": 11000,
    "totalPackage": 118500,
    "tags": [
      "Gaudí",
      "Sagrada Familia",
      "Tapas",
      "Mediterranean"
    ],
    "image": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Barcelona is the seaside capital of Catalonia, celebrated globally for the whimsical modernist architecture of Antoni Gaudí, sun-drenched beaches, and lively tapas bars.",
    "highlights": [
      "Stand in awe inside Antoni Gaudí's unfinished basilica, the Sagrada Família",
      "Wander through the colorful mosaic wonderland of Park Güell",
      "Taste fresh Jamón Ibérico and seafood tapas at Mercado de La Boqueria"
    ],
    "whereWeGo": [
      "Basílica de la Sagrada Família",
      "Park Güell Fairy Tale Mosaic Terrace",
      "Gothic Quarter (Barri Gòtic)",
      "La Boqueria Food Market & Las Ramblas",
      "Barceloneta Mediterranean Beachfront"
    ],
    "whatWeDo": [
      "Sagrada Família tower climb with personal photographer portrait session",
      "Park Güell mosaic serpentine bench early morning photoshoot",
      "Spanish paella cooking class with sangria making workshop",
      "Sunset catamaran sailing along the Mediterranean coastline",
      "Gothic quarter evening tapas and pintxos tasting tour"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Gaudí Masterpiece & Gothic Quarter",
        "timeline": [
          {
            "time": "10:00 AM",
            "activity": "El Prat airport pickup & check-in to boutique hotel near Passeig de Gràcia"
          },
          {
            "time": "01:00 PM",
            "activity": "VIP skip-the-line tour inside stained-glass wonder of Sagrada Família"
          },
          {
            "time": "04:30 PM",
            "activity": "Wander medieval Gothic Quarter courtyards and Barcelona Cathedral"
          },
          {
            "time": "08:00 PM",
            "activity": "Authentic tapas crawl: patatas bravas, gambas al ajillo, jamón ibérico"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Park Güell Colors & Beach Sunset",
        "timeline": [
          {
            "time": "08:00 AM",
            "activity": "Park Güell mosaic dragon and panoramic city terrace photoshoot"
          },
          {
            "time": "11:30 AM",
            "activity": "Stroll Las Ramblas & fresh fruit juice at Mercado de La Boqueria"
          },
          {
            "time": "03:00 PM",
            "activity": "Sunbathing and relaxation on Barceloneta golden beach sands"
          },
          {
            "time": "06:30 PM",
            "activity": "Sunset catamaran cruise with guitar music along the Mediterranean"
          },
          {
            "time": "09:00 PM",
            "activity": "Traditional seafood paella dinner by the marina"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Casa Batlló & Montjuïc Castle",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Explore the dragon-back roof and whimsical curves of Casa Batlló"
          },
          {
            "time": "01:30 PM",
            "activity": "Montjuïc cable car ride for harbour views before airport departure"
          }
        ]
      }
    ],
    "bestTime": "May–June, Sept–Oct",
    "currency": "Euro (€)",
    "language": "Spanish / Catalan / English",
    "coordinates": [
      41.3879,
      2.1699
    ],
    "timezone": "GMT+2"
  },
  {
    "id": 17,
    "name": "Cairo & Pyramids",
    "country": "Egypt",
    "continent": "Africa",
    "emoji": "🏺",
    "flag": "🇪🇬",
    "type": [
      "cultural",
      "adventure"
    ],
    "rating": 4.8,
    "avgCost": "₹9,800/day",
    "flightCost": 34000,
    "roomCost": 21000,
    "busCost": 5500,
    "foodCost": 11000,
    "photographerCost": 8500,
    "totalPackage": 80000,
    "tags": [
      "Giza Pyramids",
      "Sphinx",
      "Nile",
      "Pharaohs"
    ],
    "image": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Cairo sits alongside the life-giving Nile and stands as guardian to the Great Pyramids of Giza and the Sphinx — the sole surviving wonder of the ancient world.",
    "highlights": [
      "Gaze up at the Great Pyramid of Khufu, standing for over 4,500 years",
      "Come face-to-face with the colossal limestone face of the Great Sphinx",
      "Explore King Tutankhamun's golden treasures at the Grand Egyptian Museum"
    ],
    "whereWeGo": [
      "Great Pyramids of Giza Complex",
      "The Great Sphinx of Giza",
      "Grand Egyptian Museum (GEM)",
      "Khan el-Khalili Ancient Souk",
      "Nile River Sunset Felucca Sail"
    ],
    "whatWeDo": [
      "Camel ride silhouette photoshoot in the Giza desert with photographer",
      "Climb inside the narrow ascending passageway of Khufu's Great Pyramid",
      "Sunset sail on a traditional wooden felucca boat with Egyptian mint tea",
      "Bargaining for copper lanterns, spices, and perfumes in medieval Khan el-Khalili",
      "Authentic Egyptian feast: koshari, grilled kofta, falafel, and sweet baklava"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Giza Pyramids & Sphinx Wonder",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Cairo Airport pickup & check-in to historic Mena House hotel with pyramid view"
          },
          {
            "time": "10:30 AM",
            "activity": "Guided walk around the Great Pyramids of Khufu, Khafre, and Menkaure"
          },
          {
            "time": "02:00 PM",
            "activity": "Camel ride through panoramic desert dunes with dedicated photographer"
          },
          {
            "time": "05:00 PM",
            "activity": "Stand directly before the paws of the Great Sphinx"
          },
          {
            "time": "08:00 PM",
            "activity": "Pyramids sound and light show with Egyptian grilled meats dinner"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Pharaohs' Gold & The Nile River",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Visit the Grand Egyptian Museum to marvel at King Tutankhamun's gold mask"
          },
          {
            "time": "01:30 PM",
            "activity": "Traditional Egyptian Koshari lunch at famous Abou Tarek"
          },
          {
            "time": "04:30 PM",
            "activity": "Traditional wooden felucca sailboat cruise along the tranquil Nile at sunset"
          },
          {
            "time": "08:00 PM",
            "activity": "Lantern-lit stroll through medieval Khan el-Khalili bazaar"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Saladin Citadel & Departure",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Visit the Alabaster Mosque of Muhammad Ali inside Saladin Citadel"
          },
          {
            "time": "01:00 PM",
            "activity": "Panoramic city lunch before airport departure"
          }
        ]
      }
    ],
    "bestTime": "October–April",
    "currency": "Egyptian Pound (EGP)",
    "language": "Arabic / English",
    "coordinates": [
      30.0444,
      31.2357
    ],
    "timezone": "GMT+2"
  },
  {
    "id": 18,
    "name": "Banff National Park",
    "country": "Canada",
    "continent": "North America",
    "emoji": "🌲",
    "flag": "🇨🇦",
    "type": [
      "mountain",
      "nature",
      "adventure"
    ],
    "rating": 4.9,
    "avgCost": "₹22,500/day",
    "flightCost": 78000,
    "roomCost": 44000,
    "busCost": 11000,
    "foodCost": 19500,
    "photographerCost": 13500,
    "totalPackage": 166000,
    "tags": [
      "Lake Louise",
      "Rockies",
      "Moraine Lake",
      "Glaciers"
    ],
    "image": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Banff National Park in the Alberta Rockies presents glowing turquoise glacial waters at Lake Louise and Moraine Lake, dense pine forests, and soaring peaks.",
    "highlights": [
      "Paddle a bright red canoe across turquoise waters of Lake Louise",
      "Witness electric-blue waters of Moraine Lake and Valley of the Ten Peaks",
      "Drive Icefields Parkway, one of earth's most spectacular mountain roads"
    ],
    "whereWeGo": [
      "Lake Louise & Victoria Glacier",
      "Moraine Lake & Valley of the Ten Peaks",
      "Banff Town & Bow Falls",
      "Sulphur Mountain Summit Gondola",
      "Columbia Icefield Skywalk"
    ],
    "whatWeDo": [
      "Iconic red canoe paddle on Lake Louise with professional photographer",
      "Sunrise reflection photoshoot at the Rockpile overlooking Moraine Lake",
      "Ice Explorer all-terrain vehicle ride directly onto Athabasca Glacier ice",
      "Soak in hot natural mineral waters at Banff Upper Hot Springs",
      "Wildlife safari spotting elk, bighorn sheep, and grizzly bears"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Banff Town & Sulphur Mountain Panorama",
        "timeline": [
          {
            "time": "10:30 AM",
            "activity": "Calgary Airport pickup and drive through scenic Canadian Rockies"
          },
          {
            "time": "01:00 PM",
            "activity": "Check-in to mountain lodge & stroll through Banff avenue shops"
          },
          {
            "time": "04:00 PM",
            "activity": "Banff Gondola to Sulphur Mountain boardwalk for 360-degree peak vistas"
          },
          {
            "time": "07:30 PM",
            "activity": "Warm Canadian fondue and bison steak dinner by crackling fireplace"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Lake Louise Canoeing & Moraine Lake Blue",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Sunrise at Moraine Lake as morning sun turns Ten Peaks golden"
          },
          {
            "time": "10:00 AM",
            "activity": "Paddle iconic bright red canoe across turquoise glacial waters of Lake Louise"
          },
          {
            "time": "02:00 PM",
            "activity": "Hike to Lake Agnes historic tea house for fresh scones & tea"
          },
          {
            "time": "06:30 PM",
            "activity": "Soak in Banff Upper Hot Springs overlooking snowy mountain peaks"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Icefields Parkway & Glacier Walk",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Drive scenic Icefields Parkway past weeping walls and glaciers"
          },
          {
            "time": "12:00 PM",
            "activity": "Walk directly on Athabasca Glacier ice & Columbia Icefield glass Skywalk"
          },
          {
            "time": "05:00 PM",
            "activity": "Return drive to Calgary for departure flights"
          }
        ]
      }
    ],
    "bestTime": "June–August (Lakes), Dec–April (Skiing)",
    "currency": "Canadian Dollar (CAD)",
    "language": "English / French",
    "coordinates": [
      51.1784,
      -115.5708
    ],
    "timezone": "GMT-6"
  },
  {
    "id": 19,
    "name": "Taj Mahal — Agra",
    "country": "India",
    "continent": "Asia",
    "emoji": "🕌",
    "flag": "🇮🇳",
    "type": [
      "cultural"
    ],
    "rating": 4.9,
    "avgCost": "₹6,800/day",
    "flightCost": 7500,
    "roomCost": 14000,
    "busCost": 3500,
    "foodCost": 6500,
    "photographerCost": 6500,
    "totalPackage": 38000,
    "tags": [
      "Mughal",
      "Wonder of World",
      "Marble",
      "Heritage"
    ],
    "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1524492417138-4f9cf92ab242?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524492417138-4f9cf92ab242?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "The Taj Mahal in Agra is universally recognized as one of the greatest architectural triumphs in human history. Its ivory-white marble glows pink at dawn and golden under moonlight.",
    "highlights": [
      "Watch the marble dome change color as sunrise breaks across the reflection pool",
      "Admire the intricate pietre dure semi-precious stone inlays and calligraphy",
      "Explore the red sandstone walls and royal halls of Agra Fort"
    ],
    "whereWeGo": [
      "Taj Mahal Complex & Reflection Pools",
      "Agra Fort (Red Fort Royal Residences)",
      "Mehtab Bagh Moonlight Garden across Yamuna",
      "Fatehpur Sikri Imperial City",
      "Kinari Artisan Bazaars"
    ],
    "whatWeDo": [
      "VIP sunrise entry with personal photographer for iconic Diana bench & reflection shots",
      "Pietre Dure marble inlay artisan masterclass demonstration",
      "Sunset view of the Taj Mahal rear silhouette from Mehtab Bagh gardens",
      "Royal Mughlai dining: rich tandoori chicken, biryani, and authentic Agra petha",
      "Guided historical narration of Emperor Shah Jahan and Mumtaz Mahal's love story"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Arrival in Agra & Sunset at Mehtab Bagh",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Express AC train / luxury car arrival from Delhi & check-in to 5-star hotel"
          },
          {
            "time": "01:00 PM",
            "activity": "Sumptuous Mughlai buffet lunch featuring kebabs and dal makhani"
          },
          {
            "time": "03:30 PM",
            "activity": "Explore the massive red sandstone pavilions of Agra Fort"
          },
          {
            "time": "05:30 PM",
            "activity": "Watch the sun set behind the Taj Mahal from Mehtab Bagh across the river"
          },
          {
            "time": "08:00 PM",
            "activity": "Live sitar music and traditional North Indian dinner"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Sunrise Wonder & Marble Artistry",
        "timeline": [
          {
            "time": "05:30 AM",
            "activity": "VIP sunrise gate entry as golden rays light up the pure white marble dome"
          },
          {
            "time": "07:00 AM",
            "activity": "Comprehensive portrait photoshoot with dedicated photographer"
          },
          {
            "time": "10:30 AM",
            "activity": "Breakfast back at hotel and relaxation"
          },
          {
            "time": "02:00 PM",
            "activity": "Visit Fatehpur Sikri, the grand preserved capital of Emperor Akbar"
          },
          {
            "time": "06:30 PM",
            "activity": "Sample legendary sweet Agra Petha & shop for marble crafts"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Heritage Walk & Farewell",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Old Agra heritage walk through spice and sweet markets"
          },
          {
            "time": "01:00 PM",
            "activity": "Farewell lunch and return express transfer"
          }
        ]
      }
    ],
    "bestTime": "October–March",
    "currency": "Indian Rupee (₹)",
    "language": "Hindi / English",
    "coordinates": [
      27.1751,
      78.0421
    ],
    "timezone": "GMT+5:30"
  },
  {
    "id": 20,
    "name": "Sydney",
    "country": "Australia",
    "continent": "Oceania",
    "emoji": "🦘",
    "flag": "🇦🇺",
    "type": [
      "city",
      "beach"
    ],
    "rating": 4.8,
    "avgCost": "₹23,500/day",
    "flightCost": 62000,
    "roomCost": 46000,
    "busCost": 8000,
    "foodCost": 21000,
    "photographerCost": 13000,
    "totalPackage": 150000,
    "tags": [
      "Opera House",
      "Harbour Bridge",
      "Bondi Beach",
      "Coastal"
    ],
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549180030-48bf079fb38a?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Sydney is Australia's shimmering harbour city, famous for the sail-shaped Sydney Opera House, the Sydney Harbour Bridge arch, world-renowned surfing at Bondi, and outdoor sunshine.",
    "highlights": [
      "Admire the architectural sails of the Sydney Opera House from Circular Quay",
      "Climb the arches of the Sydney Harbour Bridge for breathtaking panoramas",
      "Take the dramatic cliffside coastal walk from Bondi to Coogee Beach"
    ],
    "whereWeGo": [
      "Sydney Opera House & Circular Quay",
      "Sydney Harbour Bridge & The Rocks",
      "Bondi Beach & Icebergs Pool",
      "Manly Beach via Scenic Ferry",
      "Barangaroo Waterfront Dining Precinct"
    ],
    "whatWeDo": [
      "Opera House and Harbour Bridge golden hour photoshoot with personal photographer",
      "Climb the Sydney Harbour Bridge arches at twilight",
      "Scenic public ferry ride through the harbour to Manly Beach",
      "Learn to surf lesson at Bondi Beach with certified lifeguards",
      "Seafood platter and Australian wine dinner overlooking Darling Harbour"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Harbour Sails & Bridge Climb",
        "timeline": [
          {
            "time": "10:00 AM",
            "activity": "Kingsford Smith airport pickup and hotel check-in at Circular Quay"
          },
          {
            "time": "01:00 PM",
            "activity": "Waterfront fish and chips lunch overlooking the Sydney Opera House"
          },
          {
            "time": "04:00 PM",
            "activity": "BridgeClimb Sydney experience up the iconic bridge arches at sunset"
          },
          {
            "time": "08:00 PM",
            "activity": "Historic pub dinner and craft beer tasting in The Rocks"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Bondi Coastal Walk & Surf Vibes",
        "timeline": [
          {
            "time": "08:00 AM",
            "activity": "Morning swim & photoshoot at Bondi Icebergs ocean pool"
          },
          {
            "time": "10:30 AM",
            "activity": "Scenic cliffside coastal walk from Bondi to Bronte and Coogee"
          },
          {
            "time": "02:00 PM",
            "activity": "Aussie brunch and acai bowls at vibrant beachside cafe"
          },
          {
            "time": "05:30 PM",
            "activity": "Scenic ferry cruise to Manly Beach catching twilight harbour glow"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Opera House Tour & Botanical Gardens",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "VIP insider architecture tour inside the Sydney Opera House concert halls"
          },
          {
            "time": "01:00 PM",
            "activity": "Picnic lunch at Royal Botanic Garden with Mrs Macquarie's Chair viewpoint"
          },
          {
            "time": "05:30 PM",
            "activity": "Barangaroo waterfront dinner and transfer to airport"
          }
        ]
      }
    ],
    "bestTime": "September–November, March–May",
    "currency": "Australian Dollar (AUD)",
    "language": "English",
    "coordinates": [
      -33.8688,
      151.2093
    ],
    "timezone": "GMT+11"
  },
  {
    "id": 21,
    "name": "Cape Town",
    "country": "South Africa",
    "continent": "Africa",
    "emoji": "🐧",
    "flag": "🇿🇦",
    "type": [
      "nature",
      "beach",
      "adventure"
    ],
    "rating": 4.8,
    "avgCost": "₹14,500/day",
    "flightCost": 52000,
    "roomCost": 31000,
    "busCost": 7500,
    "foodCost": 16000,
    "photographerCost": 10500,
    "totalPackage": 117000,
    "tags": [
      "Table Mountain",
      "Penguins",
      "Cape Point",
      "Winelands"
    ],
    "image": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Framed by the dramatic flat-topped silhouette of Table Mountain and two oceans, Cape Town offers African penguins, Stellenbosch vineyards, and dramatic coastal drives.",
    "highlights": [
      "Ascend to the summit of Table Mountain via rotating cable car",
      "Get up close with wild African penguins waddling at Boulders Beach",
      "Drive Chapman's Peak Drive, one of the world's most scenic roads"
    ],
    "whereWeGo": [
      "Table Mountain Summit & Cableway",
      "Boulders Beach African Penguin Colony",
      "Cape of Good Hope & Cape Point",
      "Chapman's Peak Coastal Scenic Drive",
      "Bo-Kaap Candy-Colored Houses & V&A Waterfront"
    ],
    "whatWeDo": [
      "African penguins close-up photoshoot on sandy boulders with personal photographer",
      "Table Mountain sunset rotating cable car ascent",
      "Stellenbosch wine estate cellar tour & chocolate pairing",
      "Dramatic Chapman's Peak drive in open-top convertible vehicle",
      "Cape Malay curry tasting in colorful historic Bo-Kaap district"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Table Mountain & Colorful Bo-Kaap",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Cape Town Airport pickup & check-in to V&A Waterfront hotel"
          },
          {
            "time": "12:00 PM",
            "activity": "Explore vibrant candy-colored historic houses of Bo-Kaap"
          },
          {
            "time": "03:30 PM",
            "activity": "Ride rotating cable car up to the flat plateau of Table Mountain"
          },
          {
            "time": "07:30 PM",
            "activity": "Seafood dinner with views of the harbour at V&A Waterfront"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Penguins & Cape of Good Hope",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Drive scenic Chapman's Peak cliffside road with ocean lookout stops"
          },
          {
            "time": "11:00 AM",
            "activity": "Walk wooden boardwalks among wild African penguins at Boulders Beach (photoshoot)"
          },
          {
            "time": "02:00 PM",
            "activity": "Stand at the dramatic southwestern tip of Africa at Cape of Good Hope"
          },
          {
            "time": "06:30 PM",
            "activity": "Sundowner drinks overlooking Camps Bay beach sunset"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Stellenbosch Winelands & Departure",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Tour historic Cape Dutch vineyards in Stellenbosch and Franschhoek"
          },
          {
            "time": "01:00 PM",
            "activity": "Gourmet vineyard lunch paired with famous Pinotage wines"
          },
          {
            "time": "05:30 PM",
            "activity": "Return to airport for departure flights"
          }
        ]
      }
    ],
    "bestTime": "November–April",
    "currency": "South African Rand (ZAR)",
    "language": "English / Afrikaans / Xhosa",
    "coordinates": [
      -33.9249,
      18.4241
    ],
    "timezone": "GMT+2"
  },
  {
    "id": 22,
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "continent": "South America",
    "emoji": "🌴",
    "flag": "🇧🇷",
    "type": [
      "beach",
      "city",
      "nature"
    ],
    "rating": 4.8,
    "avgCost": "₹13,500/day",
    "flightCost": 84000,
    "roomCost": 29000,
    "busCost": 7000,
    "foodCost": 16500,
    "photographerCost": 11000,
    "totalPackage": 147500,
    "tags": [
      "Christ Redeemer",
      "Copacabana",
      "Sugarloaf",
      "Samba"
    ],
    "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Rio de Janeiro, the 'Marvelous City', pulsates with samba rhythms between dramatic green granite peaks and crescent golden ocean beaches, crowned by Christ the Redeemer.",
    "highlights": [
      "Stand before the iconic 30-meter Christ the Redeemer statue atop Corcovado",
      "Ride the cable car up Sugarloaf Mountain for sunset views over Guanabara Bay",
      "Bask on the golden sands of world-famous Copacabana and Ipanema beaches"
    ],
    "whereWeGo": [
      "Christ the Redeemer & Corcovado Mountain",
      "Sugarloaf Mountain (Pão de Açúcar)",
      "Copacabana & Ipanema Beaches",
      "Escadaria Selarón Mosaic Steps",
      "Tijuca Tropical Rainforest"
    ],
    "whatWeDo": [
      "Early morning private cog train to Christ the Redeemer for open sky photoshoot",
      "Sunset cable car ascent of Sugarloaf Mountain with caipirinha cocktails",
      "Live authentic samba club dance experience in bohemian Lapa",
      "Sip fresh chilled coconut water on sunny Ipanema beach",
      "Brazilian Rodizio steakhouse unlimited churrascaria feast"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Christ the Redeemer & Selarón Steps",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Galeão Airport pickup and beachfront hotel check-in at Copacabana"
          },
          {
            "time": "11:00 AM",
            "activity": "Cogwheel train through Tijuca forest to the base of Christ the Redeemer (photoshoot)"
          },
          {
            "time": "03:00 PM",
            "activity": "Walk up the colorful 215 ceramic mosaic steps of Escadaria Selarón"
          },
          {
            "time": "07:30 PM",
            "activity": "Live Samba music and dancing at classic Rio bar in Lapa"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Sugarloaf Sunset & Ipanema Vibes",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Relax and swim on golden sands of Ipanema Beach with caipirinha"
          },
          {
            "time": "01:00 PM",
            "activity": "Traditional Brazilian Feijoada stew lunch"
          },
          {
            "time": "04:30 PM",
            "activity": "Ride two-stage cable car up Sugarloaf Mountain for dramatic sunset over the bay"
          },
          {
            "time": "08:00 PM",
            "activity": "All-you-can-eat Brazilian Rodizio steakhouse feast"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Rainforest Adventure & Coastal Cruise",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Open-top jeep tour into the heart of Tijuca rainforest and hidden waterfalls"
          },
          {
            "time": "02:00 PM",
            "activity": "Copacabana promenade souvenir stroll before airport departure"
          }
        ]
      }
    ],
    "bestTime": "December–March (Summer & Carnival)",
    "currency": "Brazilian Real (BRL)",
    "language": "Portuguese / English",
    "coordinates": [
      -22.9068,
      -43.1729
    ],
    "timezone": "GMT-3"
  },
  {
    "id": 23,
    "name": "Dubai",
    "country": "United Arab Emirates",
    "continent": "Asia",
    "emoji": "🏙️",
    "flag": "🇦🇪",
    "type": [
      "city",
      "adventure"
    ],
    "rating": 4.9,
    "avgCost": "₹21,500/day",
    "flightCost": 24000,
    "roomCost": 38000,
    "busCost": 6500,
    "foodCost": 16500,
    "photographerCost": 12000,
    "totalPackage": 97000,
    "tags": [
      "Burj Khalifa",
      "Desert Safari",
      "Luxury Yacht",
      "Shopping"
    ],
    "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Dubai is the world's futuristic oasis of luxury and architectural marvels. Home to Burj Khalifa, Palm Jumeirah, gold souks, and heart-pounding desert red dune safaris.",
    "highlights": [
      "Ascend to the 148th floor of the world's tallest building, Burj Khalifa",
      "Thrill-packed 4x4 red dune bashing desert safari with belly dancing dinner",
      "Private luxury yacht cruise around Palm Jumeirah and Dubai Marina"
    ],
    "whereWeGo": [
      "Burj Khalifa & Dubai Fountain Show",
      "Dubai Marina & JBR Beach Walk",
      "Palm Jumeirah & Atlantis The Royal",
      "Lahbab Red Sand Desert Dunes",
      "Deira Traditional Gold & Spice Souks"
    ],
    "whatWeDo": [
      "Private desert sunset photoshoot on high red dunes with falconry",
      "Luxury private yacht cruise past Atlantis and Burj Al Arab with drone video",
      "At the Top Sky observation deck experience at Burj Khalifa",
      "Belly dancing, Tanoura fire show, and Arabian BBQ feast under desert stars",
      "Abra traditional wooden boat crossing on historic Dubai Creek"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Burj Khalifa Majesty & Dancing Fountains",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Dubai International Airport (DXB) VIP transfer to 5-star Downtown hotel"
          },
          {
            "time": "01:00 PM",
            "activity": "Lunch with views of the soaring Burj Khalifa"
          },
          {
            "time": "04:30 PM",
            "activity": "Ascend to Burj Khalifa 124th/125th floor observation decks"
          },
          {
            "time": "07:30 PM",
            "activity": "Spectacular Dubai Fountain water show & gourmet Middle Eastern dinner"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Red Dunes Safari & Arabian Night",
        "timeline": [
          {
            "time": "10:00 AM",
            "activity": "Explore the glittering Gold Souk and aromatic Spice Souk in Old Deira"
          },
          {
            "time": "02:30 PM",
            "activity": "Pick up in 4x4 Land Cruiser for thrill-filled Lahbab red dune bashing"
          },
          {
            "time": "05:30 PM",
            "activity": "Sandboarding, camel riding, and sunset photoshoot on the golden dunes"
          },
          {
            "time": "07:30 PM",
            "activity": "Bedouin camp buffet dinner with live fire show & belly dancing"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Marina Yacht Cruise & Palm Jumeirah",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Private luxury yacht cruise from Dubai Marina around the Palm with drone reels"
          },
          {
            "time": "02:00 PM",
            "activity": "Luxury shopping at Dubai Mall or relaxing on JBR beach"
          },
          {
            "time": "07:00 PM",
            "activity": "Farewell rooftop dinner overlooking illuminated skyline & airport transfer"
          }
        ]
      }
    ],
    "bestTime": "November–April",
    "currency": "UAE Dirham (AED)",
    "language": "Arabic / English",
    "coordinates": [
      25.2048,
      55.2708
    ],
    "timezone": "GMT+4"
  },
  {
    "id": 24,
    "name": "Manali & Rohtang",
    "country": "India",
    "continent": "Asia",
    "emoji": "❄️",
    "flag": "🇮🇳",
    "type": [
      "mountain",
      "adventure",
      "nature"
    ],
    "rating": 4.8,
    "avgCost": "₹5,500/day",
    "flightCost": 9500,
    "roomCost": 12500,
    "busCost": 3500,
    "foodCost": 5500,
    "photographerCost": 5500,
    "totalPackage": 36500,
    "tags": [
      "Snow Peaks",
      "Solang Valley",
      "Paragliding",
      "Rohtang Pass"
    ],
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Nestled in the Pir Panjal mountains of Himachal Pradesh, Manali is India's beloved snow paradise. Explore high mountain passes, apple orchards, river rafting, and cozy Old Manali cafes.",
    "highlights": [
      "Drive through the engineering marvel of Atal Tunnel to Lahaul Valley",
      "Play in year-round snow and ski at Rohtang Pass (3,978m)",
      "High-flying tandem paragliding over Solang Valley"
    ],
    "whereWeGo": [
      "Solang Valley Adventure Arena",
      "Rohtang Pass & Atal Tunnel Highway",
      "Hadimba Ancient Wooden Temple in Cedar Forest",
      "Old Manali Bohemian Cafes & River Beas",
      "Vashisht Natural Sulphur Hot Springs"
    ],
    "whatWeDo": [
      "Snow suit photography and cinematic drone reel in snow-capped valleys",
      "Tandem paragliding glide above green pine forests with GoPro footage",
      "White water river rafting in the ice-cold rapids of River Beas",
      "Cozy bonfire night with live acoustic guitar and hot Pahadi cuisine",
      "Hot sulphur bath soak in historic Vashisht temple springs"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Pine Forest Welcome & Old Manali Vibe",
        "timeline": [
          {
            "time": "08:30 AM",
            "activity": "Arrival via AC Volvo / flight to Bhuntar & check-in to riverside cedar resort"
          },
          {
            "time": "11:30 AM",
            "activity": "Visit 500-year-old Hadimba Devi temple nestled in towering deodar cedar trees"
          },
          {
            "time": "02:00 PM",
            "activity": "Hot Himachali Siddu & wood-fired pizza lunch in Old Manali"
          },
          {
            "time": "05:00 PM",
            "activity": "Sunset riverside walk along the banks of rushing Beas River"
          },
          {
            "time": "08:00 PM",
            "activity": "Bonfire & stargazing with hot trout fish / vegetarian feast"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Solang Valley Adventures & Atal Tunnel",
        "timeline": [
          {
            "time": "07:30 AM",
            "activity": "Scenic drive through the revolutionary Atal Tunnel under Rohtang Pass"
          },
          {
            "time": "10:00 AM",
            "activity": "Snow activities at Rohtang / Sissu: snowmobiles, skiing, tube rides"
          },
          {
            "time": "01:30 PM",
            "activity": "Steaming hot Pahadi Maggi and chai surrounded by glacier peaks (photoshoot)"
          },
          {
            "time": "03:30 PM",
            "activity": "Tandem paragliding flight over Solang Valley with aerial video"
          },
          {
            "time": "07:30 PM",
            "activity": "Mall Road evening shopping for Kullu shawls and apple cider"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "River Rafting & Hot Springs Soak",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "White-water river rafting in Beas River rapids at Kullu"
          },
          {
            "time": "01:00 PM",
            "activity": "Therapeutic hot mineral bath soak at Vashisht springs"
          },
          {
            "time": "05:00 PM",
            "activity": "Board evening luxury coach for onward journey"
          }
        ]
      }
    ],
    "bestTime": "Oct–June (Snow: Dec–Feb)",
    "currency": "Indian Rupee (₹)",
    "language": "Hindi / Pahadi / English",
    "coordinates": [
      32.2396,
      77.1887
    ],
    "timezone": "GMT+5:30"
  },
  {
    "id": 25,
    "name": "Ooty & Nilgiris",
    "country": "India",
    "continent": "Asia",
    "emoji": "🌿",
    "flag": "🇮🇳",
    "type": [
      "nature",
      "mountain"
    ],
    "rating": 4.8,
    "avgCost": "₹4,800/day",
    "flightCost": 6500,
    "roomCost": 11000,
    "busCost": 3000,
    "foodCost": 4500,
    "photographerCost": 5000,
    "totalPackage": 30000,
    "tags": [
      "Tea Gardens",
      "Toy Train",
      "Misty Hills",
      "Botanical Garden"
    ],
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Known as the Queen of Hill Stations in the Nilgiri blue mountains, Ooty captivates with rolling emerald tea plantations, the historic UNESCO toy train, and misty cool pine valleys.",
    "highlights": [
      "Ride the historic UNESCO Nilgiri Mountain Railway heritage steam toy train",
      "Stroll through endless manicured emerald tea gardens in Coonoor",
      "Boating across serene Pykara Lake surrounded by eucalyptus forests"
    ],
    "whereWeGo": [
      "UNESCO Nilgiri Mountain Railway (Toy Train)",
      "Doddabetta Peak (Highest point in Nilgiris at 2,637m)",
      "Pykara Lake & Cascading Waterfalls",
      "Coonoor Tea Estates & Highfield Tea Factory",
      "Government Botanical Garden & Rose Garden"
    ],
    "whatWeDo": [
      "Emerald tea garden sunrise walk & photoshoot with personal photographer",
      "Historic steam engine toy train ride chugging through mountain tunnels",
      "Tea tasting: fresh Nilgiri green, white, and spiced black teas",
      "Speedboat cruise on misty Pykara lake waters",
      "Sampling homemade Ooty chocolates, fudges, and eucalyptus oil"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Toy Train Journey & Heritage Tea Bungalow",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Coimbatore airport pickup and scenic climb up Nilgiri ghat road"
          },
          {
            "time": "11:30 AM",
            "activity": "Board the UNESCO Toy Train from Mettupalayam / Coonoor through misty gorges"
          },
          {
            "time": "02:00 PM",
            "activity": "Check-in to colonial heritage tea bungalow with fireplace"
          },
          {
            "time": "04:30 PM",
            "activity": "Stroll Botanical Gardens containing rare trees and floral terraces"
          },
          {
            "time": "07:30 PM",
            "activity": "Candlelight South Indian feast & homemade chocolate tasting"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Doddabetta Peak & Tea Factory Tour",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Early morning drive to Doddabetta Peak for sweeping valley views above clouds"
          },
          {
            "time": "10:00 AM",
            "activity": "Tea plucking experience & photo session wearing traditional baskets"
          },
          {
            "time": "01:30 PM",
            "activity": "Factory tour learning orthodox tea processing with fresh tasting"
          },
          {
            "time": "04:00 PM",
            "activity": "Boating on peaceful Ooty Lake surrounded by eucalyptus trees"
          },
          {
            "time": "07:30 PM",
            "activity": "Campfire evening with hot tea and snacks"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Pykara Waterfalls & Return Transfer",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Drive past Toda tribal settlements to scenic Pykara Waterfalls"
          },
          {
            "time": "11:30 AM",
            "activity": "Speedboat ride on Pykara Lake with forested mountain backdrop"
          },
          {
            "time": "02:30 PM",
            "activity": "Shopping for Ooty homemade chocolate & return transfer"
          }
        ]
      }
    ],
    "bestTime": "September–June",
    "currency": "Indian Rupee (₹)",
    "language": "Tamil / Badaga / English",
    "coordinates": [
      11.4102,
      76.695
    ],
    "timezone": "GMT+5:30"
  },
  {
    "id": 26,
    "name": "Singapore",
    "country": "Singapore",
    "continent": "Asia",
    "emoji": "🦁",
    "flag": "🇸🇬",
    "type": [
      "city",
      "cultural"
    ],
    "rating": 4.9,
    "avgCost": "₹18,500/day",
    "flightCost": 28000,
    "roomCost": 38000,
    "busCost": 5500,
    "foodCost": 16000,
    "photographerCost": 11000,
    "totalPackage": 98500,
    "tags": [
      "Marina Bay",
      "Gardens by Bay",
      "Sentosa",
      "Universal Studios"
    ],
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Singapore is the dazzling Lion City where futuristic Supertree vertical gardens meet Michelin-starred street hawker food, luxury waterfront casinos, and tropical Sentosa Island.",
    "highlights": [
      "Walk beneath glowing Supertrees and inside Cloud Forest at Gardens by the Bay",
      "View Singapore from the 57th-floor Skypark at Marina Bay Sands",
      "Explore the cable cars, beaches, and Universal Studios on Sentosa Island"
    ],
    "whereWeGo": [
      "Marina Bay Sands & Helix Bridge",
      "Gardens by the Bay & Cloud Forest Dome",
      "Sentosa Island & Siloso Beach",
      "Chinatown & Little India Heritage Quarters",
      "Jewel Changi Airport Rain Vortex"
    ],
    "whatWeDo": [
      "Supertree Grove evening light and sound show photoshoot with personal photographer",
      "Cocktails at CÉ LA VI rooftop on the 57th floor of Marina Bay Sands",
      "Feast on iconic Singapore Chilli Crab and Hainanese chicken rice",
      "Walk the OCBC Skyway suspension bridge high above lush gardens",
      "Night Safari tram ride spotting nocturnal wildlife in natural habitats"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Marina Bay Icons & Supertree Light Show",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Changi Airport arrival & viewing the 40m indoor waterfall Rain Vortex at Jewel"
          },
          {
            "time": "01:00 PM",
            "activity": "Check-in to Marina Bay waterfront hotel and chicken rice lunch"
          },
          {
            "time": "04:30 PM",
            "activity": "Explore the misty indoor waterfall inside Cloud Forest glass conservatory"
          },
          {
            "time": "07:45 PM",
            "activity": "Watch Garden Rhapsody music & light show under illuminated Supertrees (photoshoot)"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Sentosa Island Thrills & Night Safari",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Cable car ride over harbour waters to tropical Sentosa Island"
          },
          {
            "time": "11:30 AM",
            "activity": "Universal Studios movie-themed rides or relaxing on Palawan beach"
          },
          {
            "time": "03:30 PM",
            "activity": "Singapore Sling cocktail tasting at historic Raffles Hotel"
          },
          {
            "time": "07:30 PM",
            "activity": "World-first Night Safari tram tour observing leopards, lions, and rhinos"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Cultural Quarters & Marina Skyline Rooftop",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Chinatown Buddha Tooth Relic Temple & Little India spice market walk"
          },
          {
            "time": "01:00 PM",
            "activity": "Hawker feast at Maxwell Food Centre (dumplings, laksa, satay)"
          },
          {
            "time": "04:30 PM",
            "activity": "Marina Bay Sands Skypark 360-degree observation deck before departure"
          }
        ]
      }
    ],
    "bestTime": "All Year Round (Tropical)",
    "currency": "Singapore Dollar (SGD)",
    "language": "English / Malay / Mandarin / Tamil",
    "coordinates": [
      1.3521,
      103.8198
    ],
    "timezone": "GMT+8"
  },
  {
    "id": 27,
    "name": "Cappadocia",
    "country": "Turkey",
    "continent": "Europe",
    "emoji": "🎈",
    "flag": "🇹🇷",
    "type": [
      "cultural",
      "adventure"
    ],
    "rating": 4.9,
    "avgCost": "₹17,500/day",
    "flightCost": 46000,
    "roomCost": 32000,
    "busCost": 6000,
    "foodCost": 14000,
    "photographerCost": 13000,
    "totalPackage": 111000,
    "tags": [
      "Hot Air Balloons",
      "Cave Hotels",
      "Fairy Chimneys",
      "Goreme"
    ],
    "image": "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Cappadocia in central Turkey is a dreamscape of honeycombed hills, volcanic fairy chimneys, multi-level underground cities, and skies filled with hundreds of hot air balloons at sunrise.",
    "highlights": [
      "Float high above fairy chimneys in a sunrise hot air balloon flight",
      "Stay in an authentic carved stone cave hotel with panoramic rooftop",
      "Explore Derinkuyu underground city carved 85 meters into volcanic rock"
    ],
    "whereWeGo": [
      "Göreme National Park & Open Air Museum",
      "Love Valley & Pigeon Valley Fairy Chimneys",
      "Derinkuyu 8-Level Underground City",
      "Uchisar Castle High Rock Fortress",
      "Avanos Historic Pottery River Village"
    ],
    "whatWeDo": [
      "Sunrise rooftop photoshoot with flying silk dress as 150 balloons fill the sky",
      "Hot air balloon flight gliding over fairy chimney rock pillars with champagne toast",
      "ATV quad bike safari through Love Valley and Rose Valley sunset canyons",
      "Traditional pottery making on foot-spun kick wheels in Avanos",
      "Turkish night dinner with whirling dervishes and Testi kebab cracked from clay pots"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Cave Hotel Check-in & Sunset ATV Ride",
        "timeline": [
          {
            "time": "10:00 AM",
            "activity": "Kayseri/Nevsehir Airport transfer and check-in to luxury carved cave suite in Göreme"
          },
          {
            "time": "01:00 PM",
            "activity": "Authentic Turkish lunch: fresh gözleme, hummus, and hot apple tea"
          },
          {
            "time": "04:00 PM",
            "activity": "ATV Quad Bike convoy racing through surreal canyons of Love Valley"
          },
          {
            "time": "07:30 PM",
            "activity": "Clay pot Testi Kebab cracked open at your table by local master chef"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Hot Air Balloon Flight & Cave Churches",
        "timeline": [
          {
            "time": "05:00 AM",
            "activity": "Float aloft at sunrise in hot air balloon across Cappadocia's moonscape (drone reel)"
          },
          {
            "time": "08:30 AM",
            "activity": "Champagne landing celebration and hearty Turkish breakfast spread on rooftop terrace"
          },
          {
            "time": "11:00 AM",
            "activity": "Explore Byzantine frescoed rock churches at Göreme Open Air Museum"
          },
          {
            "time": "03:00 PM",
            "activity": "Descend into ancient labyrinth corridors of Derinkuyu Underground City"
          },
          {
            "time": "07:30 PM",
            "activity": "Turkish carpet showroom visit & rooftop wine under starry Anatolian skies"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Rooftop Photoshoot & Pottery Masterclass",
        "timeline": [
          {
            "time": "06:00 AM",
            "activity": "Early morning rooftop photoshoot with colorful balloons drifting close overhead"
          },
          {
            "time": "10:30 AM",
            "activity": "Kick-wheel red clay pottery workshop in Avanos village"
          },
          {
            "time": "02:30 PM",
            "activity": "Climb top of Uchisar Castle fortress before airport departure"
          }
        ]
      }
    ],
    "bestTime": "April–June, Sept–Oct",
    "currency": "Turkish Lira (TRY) / Euro",
    "language": "Turkish / English",
    "coordinates": [
      38.6431,
      34.8289
    ],
    "timezone": "GMT+3"
  },
  {
    "id": 28,
    "name": "Goa & Gokarna",
    "country": "India",
    "continent": "Asia",
    "emoji": "🏖️",
    "flag": "🇮🇳",
    "type": [
      "beach",
      "adventure"
    ],
    "rating": 4.8,
    "avgCost": "₹5,800/day",
    "flightCost": 8000,
    "roomCost": 14500,
    "busCost": 3000,
    "foodCost": 7500,
    "photographerCost": 6000,
    "totalPackage": 39000,
    "tags": [
      "Beach Shacks",
      "Water Sports",
      "Nightlife",
      "Portuguese Churches"
    ],
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Goa is India's sunshine coastal haven where swaying palm trees, golden beaches, Portuguese heritage villas, water sports, and beach shacks unite.",
    "highlights": [
      "Golden hour beach sports and parasailing over Arabian Sea waters",
      "Visit UNESCO-listed Basilica of Bom Jesus and Old Goa churches",
      "Sunset dolphin cruise and beachfront candlelit seafood dinners"
    ],
    "whereWeGo": [
      "Palolem & Agonda Pristine South Goa Beaches",
      "Baga & Calangute Water Sports Hub",
      "Fontainhas Latin Quarter with colorful Portuguese villas",
      "Dudhsagar Cascading 4-Tier Waterfall",
      "Chapora Fort (Dil Chahta Hai viewpoint)"
    ],
    "whatWeDo": [
      "Beach sunset drone video and golden hour photoshoot with personal photographer",
      "Thrilling Jet Ski and parasailing flights over the blue ocean",
      "Vintage scooter / open Thar ride through coconut grove country roads",
      "Fontainhas heritage architecture walk capturing pastel yellow & blue houses",
      "Candlelit beach shack dinner with fresh kingfish curry, prawns, and Goan feni"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Beachfront Villa & Sunset Shack Vibes",
        "timeline": [
          {
            "time": "10:30 AM",
            "activity": "Mopa / Dabolim Airport pickup and check-in to beachfront boutique resort"
          },
          {
            "time": "01:00 PM",
            "activity": "Goan fish thali and coconut curry lunch right on the beach"
          },
          {
            "time": "04:30 PM",
            "activity": "Relax on golden sands of Palolem with ocean kayak session"
          },
          {
            "time": "07:30 PM",
            "activity": "Candlelit seafood dinner with live acoustic music right on the beach"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Latin Quarter Heritage & Water Sports",
        "timeline": [
          {
            "time": "09:00 AM",
            "activity": "Fontainhas Latin Quarter walk capturing colorful Portuguese heritage balconies"
          },
          {
            "time": "12:00 PM",
            "activity": "Visit UNESCO World Heritage Basilica of Bom Jesus in Old Goa"
          },
          {
            "time": "03:30 PM",
            "activity": "Parasailing and banana boat ride at Baga beach"
          },
          {
            "time": "06:00 PM",
            "activity": "Sunset viewpoint at Chapora Fort overlooking Vagator cliff beach"
          },
          {
            "time": "08:30 PM",
            "activity": "Curated beach club night party with DJ music"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Dudhsagar Waterfalls & Spice Plantation",
        "timeline": [
          {
            "time": "08:00 AM",
            "activity": "Jeep safari to thunderous Dudhsagar Waterfalls in Mollem National Park"
          },
          {
            "time": "01:00 PM",
            "activity": "Organic spice plantation tour with traditional lunch on banana leaves"
          },
          {
            "time": "05:00 PM",
            "activity": "Souvenir shopping for cashews and feni before flight departure"
          }
        ]
      }
    ],
    "bestTime": "October–May",
    "currency": "Indian Rupee (₹)",
    "language": "Konkani / English / Hindi",
    "coordinates": [
      15.2993,
      74.124
    ],
    "timezone": "GMT+5:30"
  },
  {
    "id": 29,
    "name": "London",
    "country": "United Kingdom",
    "continent": "Europe",
    "emoji": "💂",
    "flag": "🇬🇧",
    "type": [
      "city",
      "cultural"
    ],
    "rating": 4.8,
    "avgCost": "₹24,500/day",
    "flightCost": 56000,
    "roomCost": 48000,
    "busCost": 7500,
    "foodCost": 21000,
    "photographerCost": 13500,
    "totalPackage": 146000,
    "tags": [
      "Big Ben",
      "Tower Bridge",
      "Buckingham Palace",
      "Cotswolds"
    ],
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "London combines grand royal traditions with modern culture: historic Big Ben, the Tower of London, double-decker red buses, West End theater shows, and picturesque Thames river views.",
    "highlights": [
      "Gaze up at Big Ben clock tower and walk across Westminster Bridge",
      "Watch the Changing of the Guard ceremony at Buckingham Palace",
      "Ride the London Eye glass observation capsule high over the River Thames"
    ],
    "whereWeGo": [
      "Big Ben & Palace of Westminster",
      "Tower Bridge & Tower of London",
      "Buckingham Palace Royal Grounds",
      "London Eye & South Bank Promenade",
      "Covent Garden & West End Theatre District"
    ],
    "whatWeDo": [
      "Tower Bridge & Big Ben sunrise portrait session with personal photographer",
      "Private London Eye glass pod champagne flight overlooking full city panorama",
      "Classic British afternoon high tea with warm scones, clotted cream & finger sandwiches",
      "Historic River Thames high-speed boat cruise past Shakespeare's Globe",
      "Award-winning West End musical production in Covent Garden"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Royal London & Westminster Wonders",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Heathrow Express transfer to luxury central London hotel near Covent Garden"
          },
          {
            "time": "11:00 AM",
            "activity": "Witness Changing of the Guard royal spectacle at Buckingham Palace"
          },
          {
            "time": "02:00 PM",
            "activity": "Walk across Westminster Bridge past newly restored golden Big Ben"
          },
          {
            "time": "05:00 PM",
            "activity": "Ride London Eye 135m in the air at twilight"
          },
          {
            "time": "07:30 PM",
            "activity": "Classic British gastro-pub dinner: fish and chips with mushy peas"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Tower Bridge Sunrise & Afternoon Tea",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Early sunrise photoshoot on iconic Tower Bridge with Thames reflection"
          },
          {
            "time": "09:30 AM",
            "activity": "Explore Crown Jewels inside the historic 1,000-year-old Tower of London"
          },
          {
            "time": "02:00 PM",
            "activity": "Traditional three-tiered royal afternoon tea at Fortnum & Mason"
          },
          {
            "time": "05:00 PM",
            "activity": "Stroll colorful street market at Covent Garden"
          },
          {
            "time": "07:30 PM",
            "activity": "West End theater musical show with prime stalls seating"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Museums & Shard Sky Views",
        "timeline": [
          {
            "time": "09:30 AM",
            "activity": "Visit British Museum to view the Rosetta Stone and Egyptian mummies"
          },
          {
            "time": "02:00 PM",
            "activity": "Sky-high cocktails on the 72nd floor of The Shard building"
          },
          {
            "time": "06:00 PM",
            "activity": "Oxford Street shopping and transfer to Heathrow Airport"
          }
        ]
      }
    ],
    "bestTime": "May–September",
    "currency": "British Pound (£)",
    "language": "English",
    "coordinates": [
      51.5074,
      -0.1278
    ],
    "timezone": "GMT+1"
  },
  {
    "id": 30,
    "name": "Venice & Dolomites",
    "country": "Italy",
    "continent": "Europe",
    "emoji": "🎭",
    "flag": "🇮🇹",
    "type": [
      "cultural",
      "mountain"
    ],
    "rating": 4.9,
    "avgCost": "₹23,500/day",
    "flightCost": 51000,
    "roomCost": 45000,
    "busCost": 9000,
    "foodCost": 19500,
    "photographerCost": 13000,
    "totalPackage": 137500,
    "tags": [
      "Gondola Rides",
      "Grand Canal",
      "St. Mark's",
      "Dolomite Peaks"
    ],
    "image": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80",
    "coverImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Venice, the floating Queen of the Adriatic, is a labyrinth of 118 islands, arched stone bridges, and gondolas gliding along the Grand Canal, paired with nearby alpine peaks of the Dolomites.",
    "highlights": [
      "Glide beneath Bridge of Sighs on a classic hand-carved Venetian gondola",
      "Marvel at golden mosaics inside St. Mark's Basilica and Doge's Palace",
      "Take a boat to the vibrant rainbow-colored fisherman houses of Burano Island"
    ],
    "whereWeGo": [
      "Piazza San Marco & St. Mark's Basilica",
      "Grand Canal & Rialto Bridge",
      "Bridge of Sighs & Doge's Palace",
      "Burano Colorful Island & Murano Glass",
      "Tre Cime di Lavaredo Dolomite Peaks"
    ],
    "whatWeDo": [
      "Private gondola serenade photoshoot drifting through quiet secret canals",
      "St. Mark's Square empty sunrise photography session with pigeon flight",
      "Artisanal glassblowing demonstration by Murano island master",
      "Venetian cicchetti and sparkling Prosecco wine tasting crawl",
      "Day excursion into the jagged limestone spires of the Italian Dolomites"
    ],
    "schedule": [
      {
        "day": "Day 1",
        "title": "Grand Canal Welcome & Gondola Serenade",
        "timeline": [
          {
            "time": "10:30 AM",
            "activity": "Water taxi arrival from Marco Polo Airport directly to canal-side hotel dock"
          },
          {
            "time": "01:00 PM",
            "activity": "Lunch of seafood risotto and Venetian cicchetti near Rialto Bridge"
          },
          {
            "time": "04:30 PM",
            "activity": "Private wooden gondola ride beneath Bridge of Sighs with dedicated photographer"
          },
          {
            "time": "08:00 PM",
            "activity": "Live classical orchestra music at Caffè Florian in St. Mark's Square"
          }
        ]
      },
      {
        "day": "Day 2",
        "title": "Rainbow Burano & Doge's Palace",
        "timeline": [
          {
            "time": "06:30 AM",
            "activity": "Sunrise stroll in empty Piazza San Marco with golden light on basilica"
          },
          {
            "time": "09:30 AM",
            "activity": "Explore secret corridors and golden staircases of Doge's Palace"
          },
          {
            "time": "01:00 PM",
            "activity": "Boat trip to Burano island to photograph bright neon fisherman houses"
          },
          {
            "time": "05:30 PM",
            "activity": "Murano glassblowing live workshop with molten glass sculpting"
          },
          {
            "time": "08:30 PM",
            "activity": "Venetian dinner of squid ink pasta & tiramisu by the canal"
          }
        ]
      },
      {
        "day": "Day 3",
        "title": "Dolomite Alpine Spire Day Trip",
        "timeline": [
          {
            "time": "07:30 AM",
            "activity": "Scenic mountain coach into the UNESCO Dolomites to Lake Braies"
          },
          {
            "time": "11:30 AM",
            "activity": "Gaze at the towering limestone peaks of Tre Cime di Lavaredo"
          },
          {
            "time": "04:00 PM",
            "activity": "Return to Venice for evening departure flights"
          }
        ]
      }
    ],
    "bestTime": "April–June, Sept–Oct",
    "currency": "Euro (€)",
    "language": "Italian / English",
    "coordinates": [
      45.4408,
      12.3155
    ],
    "timezone": "GMT+1"
  }
];

// Weather city coordinates (for Open-Meteo API)
const WEATHER_CITIES = [
  {
    "city": "Paris",
    "country": "France",
    "lat": 48.85,
    "lon": 2.35,
    "flag": "🇫🇷"
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "lat": 35.68,
    "lon": 139.69,
    "flag": "🇯🇵"
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "lat": -8.34,
    "lon": 115.09,
    "flag": "🇮🇩"
  },
  {
    "city": "Dubai",
    "country": "UAE",
    "lat": 25.2,
    "lon": 55.27,
    "flag": "🇦🇪"
  },
  {
    "city": "Manali",
    "country": "India",
    "lat": 32.24,
    "lon": 77.19,
    "flag": "🇮🇳"
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "lat": 1.35,
    "lon": 103.82,
    "flag": "🇸🇬"
  },
  {
    "city": "London",
    "country": "UK",
    "lat": 51.51,
    "lon": -0.13,
    "flag": "🇬🇧"
  },
  {
    "city": "Rome",
    "country": "Italy",
    "lat": 41.9,
    "lon": 12.49,
    "flag": "🇮🇹"
  }
];

const TRAVEL_TIPS = [
  {
    "icon": "📸",
    "title": "Dedicated Travel Photography",
    "text": "Every Life Journey package includes or arranges dedicated photographer sessions. Carry coordinating outfits for morning golden hours, and request high-res RAW + drone video reels for social media."
  },
  {
    "icon": "✈️",
    "title": "Flight & Visa Prep in Rupees",
    "text": "Check visa requirements 4–6 weeks prior. Most destinations like Dubai, Bali, and Sri Lanka offer instant e-Visa / Visa-on-Arrival for Indian passport holders."
  },
  {
    "icon": "💳",
    "title": "UPI & Zero-Forex Cards",
    "text": "Keep your Life Journey wallet topped up with UPI (GPay/PhonePe). For overseas shopping, carry zero-forex debit/credit cards and always choose local currency billing."
  },
  {
    "icon": "🏨",
    "title": "Verified Room & Resort Bookings",
    "text": "Our tour itineraries specify 4-star boutique suites, caldera view rooms, or water villas. Ensure you confirm check-in times and special dietary requests prior to arrival."
  },
  {
    "icon": "🚌",
    "title": "AC Coach & Private Airport Transfers",
    "text": "Never stress over airport taxis in foreign languages. Life Journey schedules seamless AC Volvo coaches, private Mercedes vans, or speedboats directly to your stay."
  },
  {
    "icon": "🍽️",
    "title": "Gourmet Food & Local Dining",
    "text": "From authentic Neapolitan pizza to Japanese Kaiseki and Indian Mughlai feasts, all meals in the guide are carefully vetted for hygiene and culinary excellence."
  },
  {
    "icon": "📱",
    "title": "Instant International eSIM",
    "text": "Activate an international eSIM before landing. You will instantly have 5G data for maps, WhatsApp video calls with loved ones, and instant photo sharing."
  },
  {
    "icon": "🎒",
    "title": "Smart Packing & Weather Alerts",
    "text": "Check live temperature widgets on Life Journey dashboard before packing. Pack layered thermals for Alps/Manali and breezy linen fabrics for Bali/Dubai."
  }
];

// Category icons for itinerary
const CATEGORY_ICONS = {
  "sightseeing": "🏛️",
  "food": "🍽️",
  "transport": "✈️",
  "accommodation": "🏨",
  "adventure": "🎢",
  "shopping": "🛍️",
  "entertainment": "🎭"
};

const EXPENSE_ICONS = {
  "accommodation": "🏨",
  "transport": "✈️",
  "food": "🍽️",
  "sightseeing": "🎡",
  "shopping": "🛍️",
  "other": "📦"
};

const TRIP_EMOJIS = {
  "leisure": "🏖️",
  "adventure": "🧗",
  "business": "💼",
  "cultural": "🏛️",
  "family": "👨‍👩‍👧"
};

// Real Customer Reviews Dataset
const INITIAL_REVIEWS = [
  {
    "id": "rev-1",
    "destId": 1,
    "destName": "Santorini, Greece",
    "userName": "Karthik Raja",
    "userAvatar": "KR",
    "rating": 5,
    "date": "15 Oct 2026",
    "comment": "The Life Journey tour guide schedule was 100% accurate! The dedicated photographer took insane sunset photos in Oia. Paid seamlessly with GPay UPI.",
    "method": "GPay UPI",
    "verified": true
  },
  {
    "id": "rev-2",
    "destId": 23,
    "destName": "Dubai, UAE",
    "userName": "Fathima Noor",
    "userAvatar": "FN",
    "rating": 5,
    "date": "12 Oct 2026",
    "comment": "Red dunes safari & luxury marina yacht were extraordinary! Flight ticket, 5-star hotel, and food breakdown was totally transparent. Highly recommended!",
    "method": "PhonePe UPI",
    "verified": true
  },
  {
    "id": "rev-3",
    "destId": 24,
    "destName": "Manali & Rohtang, India",
    "userName": "Arun & Divya",
    "userAvatar": "AD",
    "rating": 5,
    "date": "08 Oct 2026",
    "comment": "Atal tunnel & Rohtang snow view was heavenly! The drone footage captured by our tour photographer is getting viral on Instagram reels! Super economical budget.",
    "method": "Paytm UPI",
    "verified": true
  },
  {
    "id": "rev-4",
    "destId": 2,
    "destName": "Kyoto, Japan",
    "userName": "Anand Kumar",
    "userAvatar": "AK",
    "rating": 5,
    "date": "04 Oct 2026",
    "comment": "Fushimi Inari and bamboo forest walk in Kimonos was unforgettable. Everything from flight, ryokan stay to food was clearly planned in Rupees.",
    "method": "GPay UPI",
    "verified": true
  },
  {
    "id": "rev-5",
    "destId": 10,
    "destName": "Maldives",
    "userName": "Rahul & Sneha",
    "userAvatar": "RS",
    "rating": 5,
    "date": "28 Sep 2026",
    "comment": "Overwater bungalow with direct plunge pool into the turquoise ocean. The underwater restaurant and manta ray snorkeling schedule was executed flawlessly!",
    "method": "PhonePe QR",
    "verified": true
  },
  {
    "id": "rev-6",
    "destId": 25,
    "destName": "Ooty & Nilgiris, India",
    "userName": "Sanjay Raman",
    "userAvatar": "SR",
    "rating": 5,
    "date": "20 Sep 2026",
    "comment": "Toy train ride through misty hills was a dream. Loved that Life Journey gives the exact cost breakdown for room, bus, food, and photography.",
    "method": "GPay UPI",
    "verified": true
  }
];
