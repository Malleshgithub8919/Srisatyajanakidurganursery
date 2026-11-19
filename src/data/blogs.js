export const blogCategories = [
  'Gardening Tips',
  'Indoor Plant Care',
  'Outdoor Plant Care',
  'Flowering Plants',
  'Fruit Plants',
  'Organic Gardening',
  'Terrace Gardening',
  'Landscaping Ideas',
  'Soil & Fertilizers',
  'Plant Watering Guide',
]

export const blogs = [
  {
    slug: 'top-10-indoor-plants-for-your-home',
    title: 'Top 10 Indoor Plants for Your Home',
    category: 'Indoor Plant Care',
    relatedCategories: ['Gardening Tips'],
    publishedAt: '2026-11-18',
    author: 'Sri Satyajanaki Durga Nursery Gardens',
    readingTime: '6 min read',
    featured: true,
    image: '/gallery/nursery-9.png',
    imageAlt: 'Green foliage plants displayed at the nursery',
    description: 'Explore ten popular foliage plants and how to match them to the light and care conditions in your home.',
    introduction: 'Indoor plants can bring texture and greenery to a room, but no plant thrives in every corner. Before choosing one, observe the available light, airflow and space, then match the plant to those conditions.',
    sections: [
      {
        heading: 'Ten plants to consider',
        paragraphs: ['These commonly grown foliage plants offer a range of shapes and care needs. Check the exact variety and its growing instructions before bringing it home.'],
        bullets: [
          'Snake plant (Dracaena trifasciata) — upright leaves; allow the potting mix to dry between waterings.',
          'Golden pothos (Epipremnum aureum) — trailing growth; provide bright, indirect light for stronger growth.',
          'ZZ plant (Zamioculcas zamiifolia) — glossy foliage; avoid keeping its soil continuously wet.',
          'Peace lily (Spathiphyllum species) — prefers evenly moist, well-drained mix and indirect light.',
          'Spider plant (Chlorophytum comosum) — arching leaves; bright, indirect light suits it well.',
          'Areca palm (Dypsis lutescens) — needs bright light and room for its spreading fronds.',
          'Rubber plant (Ficus elastica) — give it bright light and space to grow upright.',
          'Heartleaf philodendron (Philodendron hederaceum) — a trailing plant for bright, indirect light.',
          'Aglaonema (Aglaonema species) — choose a variety suited to the light available in your room.',
          'Dracaena (Dracaena species) — select a suitable variety and keep it away from harsh, sudden sun.',
        ],
      },
      {
        heading: 'Choose for your room, not just the label',
        paragraphs: [
          '“Low light” does not mean no light. If a room is dim, place plants near the brightest suitable window and rotate them occasionally so growth stays balanced.',
          'Use a pot with drainage holes and a growing mix appropriate for the plant. Water according to the mix and plant condition rather than a fixed calendar; never leave the pot standing in collected water.',
        ],
      },
      {
        heading: 'Keep people and pets in mind',
        paragraphs: [
          'Some popular houseplants can irritate or be toxic if chewed. Snake plant, pothos, ZZ plant, peace lily, philodendron and dracaena are examples that should be kept out of reach of children and pets. Verify the plant species and consult a veterinarian or poison-control service if ingestion occurs.',
        ],
      },
    ],
    relatedSlugs: ['how-to-water-plants-correctly', 'how-to-create-a-beautiful-terrace-garden'],
  },
  {
    slug: 'how-to-water-plants-correctly',
    title: 'How to Water Plants Correctly',
    category: 'Plant Watering Guide',
    relatedCategories: ['Outdoor Plant Care', 'Gardening Tips'],
    publishedAt: '2026-11-12',
    author: 'Sri Satyajanaki Durga Nursery Gardens',
    readingTime: '5 min read',
    image: '/gardening/potted-garden.png',
    imageAlt: 'Potted plants arranged in rows at the nursery',
    description: 'Learn to check soil moisture, water the root zone and avoid common watering problems in pots and garden beds.',
    introduction: 'Plants need water, but the right amount and frequency depend on the plant, pot, growing mix, weather and season. Checking the soil is more reliable than following a rigid daily schedule.',
    sections: [
      {
        heading: 'Check before you water',
        paragraphs: [
          'Feel the growing mix a little below the surface. If it is still damp, wait and check again later; if it is dry to the depth appropriate for that plant, it may be time to water.',
          'Small pots, fast-draining mixes, wind and hot weather can dry out sooner. Large containers, shade and cool or rainy weather may keep the mix wet longer.',
        ],
      },
      {
        heading: 'Water thoroughly and let excess drain',
        bullets: [
          'Apply water slowly around the root area so the mix can absorb it.',
          'For containers, water until excess begins to leave the drainage holes, then empty any saucer.',
          'For garden beds, direct water toward the soil around the roots rather than relying on a light surface spray.',
          'Use a watering can or gentle flow that does not wash soil away or damage young plants.',
        ],
      },
      {
        heading: 'Avoid common problems',
        paragraphs: [
          'Frequent small splashes can leave deeper roots dry, while constantly saturated soil can deprive roots of air and encourage rot. A pot needs working drainage holes, and its growing mix should suit the plant.',
          'Adjust your routine after rainfall and seasonal changes. Wilting can have several causes, including both dry and waterlogged roots, so check the soil before adding more water.',
        ],
      },
    ],
    relatedSlugs: ['best-soil-and-organic-fertilizers-for-plants', 'top-10-indoor-plants-for-your-home'],
  },
  {
    slug: 'best-soil-and-organic-fertilizers-for-plants',
    title: 'Best Soil and Organic Fertilizers for Plants',
    category: 'Soil & Fertilizers',
    relatedCategories: ['Organic Gardening', 'Gardening Tips'],
    publishedAt: '2026-11-08',
    author: 'Sri Satyajanaki Durga Nursery Gardens',
    readingTime: '6 min read',
    image: '/gardening/nursery-seedlings.png',
    imageAlt: 'Young nursery plants growing under shade netting',
    description: 'Understand drainage, growing mixes and careful use of mature compost and organic fertilizers.',
    introduction: 'Healthy roots need a growing medium that holds some moisture while allowing excess water and air to move through. The right mix depends on whether a plant grows in a pot, a garden bed or a specialized container.',
    sections: [
      {
        heading: 'Start with drainage and texture',
        paragraphs: [
          'For container plants, use a clean, purpose-suited potting mix rather than dense garden soil alone. A heavy mix can compact in a pot and drain poorly. Choose a container with drainage holes.',
          'For garden beds, observe how water moves through the soil. Adding mature organic matter can improve soil structure, but avoid placing fresh, uncomposted material directly against roots.',
        ],
      },
      {
        heading: 'Use compost thoughtfully',
        bullets: [
          'Use mature, well-decomposed compost from a reliable source.',
          'Mix it into garden soil in moderation; do not assume every plant needs the same amount.',
          'For pots, use compost only as part of a suitable container mix and maintain good drainage.',
          'Keep compost away from stems and follow local guidance for safe handling.',
        ],
      },
      {
        heading: 'Fertilize according to the plant',
        paragraphs: [
          'Organic fertilizers vary in nutrient content and release rate. Follow the product label, account for the plant’s growth stage and avoid applying more in an attempt to speed growth.',
          'Do not fertilize a severely stressed or recently repotted plant without checking its needs. Excess fertilizer can harm roots and contribute to unwanted nutrient runoff.',
        ],
      },
    ],
    relatedSlugs: ['how-to-water-plants-correctly', 'growing-fruit-plants-at-home'],
  },
  {
    slug: 'how-to-create-a-beautiful-terrace-garden',
    title: 'How to Create a Beautiful Terrace Garden',
    category: 'Terrace Gardening',
    relatedCategories: ['Landscaping Ideas', 'Outdoor Plant Care'],
    publishedAt: '2026-11-03',
    author: 'Sri Satyajanaki Durga Nursery Gardens',
    readingTime: '6 min read',
    image: '/gallery/nursery-4.png',
    imageAlt: 'Potted ornamental plants displayed in rows',
    description: 'Plan a terrace garden around safe loading, drainage, sunlight, suitable containers and manageable plant groupings.',
    introduction: 'A terrace garden works best when it is planned around the building and the conditions on site. Before buying containers or plants, check that the terrace can safely support the intended loads and that water can drain without damaging the structure.',
    sections: [
      {
        heading: 'Check the space before setting up',
        bullets: [
          'Ask a qualified building professional about safe load limits, especially before adding large planters, water features or raised beds.',
          'Confirm that waterproofing and drainage are in good condition; keep outlets clear.',
          'Notice where direct sun, shade and wind occur at different times of day.',
          'Keep paths, doors and access to drains clear.',
        ],
      },
      {
        heading: 'Choose containers and plants carefully',
        paragraphs: [
          'Select stable containers with drainage holes and use potting mixes suitable for containers. Lightweight pots can reduce load, but secure them where wind could move them.',
          'Group plants with similar light and watering needs. Start with a manageable number, then add plants after you understand how the space behaves through the seasons.',
        ],
      },
      {
        heading: 'Make maintenance practical',
        paragraphs: [
          'Place frequently watered plants where they are easy to reach. Use saucers only when appropriate and empty standing water; do not block roof drains.',
          'Check containers after heavy rain and during hot, windy weather. A simple layout with safe access is usually easier to maintain than a crowded terrace.',
        ],
      },
    ],
    relatedSlugs: ['tips-for-growing-healthy-flowering-plants', 'how-to-water-plants-correctly'],
  },
  {
    slug: 'tips-for-growing-healthy-flowering-plants',
    title: 'Tips for Growing Healthy Flowering Plants',
    category: 'Flowering Plants',
    relatedCategories: ['Outdoor Plant Care', 'Gardening Tips'],
    publishedAt: '2026-10-28',
    author: 'Sri Satyajanaki Durga Nursery Gardens',
    readingTime: '5 min read',
    image: '/about/flowering-plants.png',
    imageAlt: 'Flowering plants available at the nursery',
    description: 'Choose flowering plants for your light and season, then support them with suitable watering, soil and maintenance.',
    introduction: 'Flowering plants differ in their light, temperature and care needs. Healthy growth starts by choosing a variety suited to your location and following care instructions for that plant rather than applying one routine to every flower.',
    sections: [
      {
        heading: 'Match the plant to its growing conditions',
        paragraphs: [
          'Check whether the variety needs full sun, partial shade or filtered light. Observe the planting area through the day, and consider seasonal heat and rain when selecting plants.',
          'Use a well-drained growing medium and a pot or bed with enough room for mature growth. Newly purchased plants may need gradual adjustment to stronger outdoor light.',
        ],
      },
      {
        heading: 'Support steady growth',
        bullets: [
          'Check soil moisture before watering and allow excess water to drain.',
          'Use a fertilizer suitable for the plant and follow the label; more fertilizer does not guarantee more flowers.',
          'Remove spent flowers only when appropriate for the variety, using clean tools.',
          'Inspect leaves and stems regularly for pests or signs of stress.',
        ],
      },
      {
        heading: 'Be patient with flowering cycles',
        paragraphs: [
          'Flowering can depend on the plant’s maturity, season and growing conditions. Some plants bloom in cycles or rest between flowering periods.',
          'If a plant is not flowering, review light, watering, root space and recent feeding before making several changes at once. Ask for variety-specific advice when needed.',
        ],
      },
    ],
    relatedSlugs: ['how-to-create-a-beautiful-terrace-garden', 'growing-fruit-plants-at-home'],
  },
  {
    slug: 'growing-fruit-plants-at-home',
    title: 'Growing Fruit Plants at Home',
    category: 'Fruit Plants',
    relatedCategories: ['Outdoor Plant Care', 'Gardening Tips'],
    publishedAt: '2026-10-22',
    author: 'Sri Satyajanaki Durga Nursery Gardens',
    readingTime: '6 min read',
    image: '/gallery/nursery-7.png',
    imageAlt: 'Potted plants arranged at the nursery',
    description: 'Select fruit plants for your climate and space, and learn about sunlight, pollination, containers and ongoing care.',
    introduction: 'Fruit plants can grow in gardens or, for some varieties, in containers. Before choosing one, check the variety’s climate suitability, mature size, sunlight needs and whether it requires a compatible pollinator.',
    sections: [
      {
        heading: 'Choose a suitable plant and location',
        paragraphs: [
          'Ask about the plant’s expected mature size, local suitability and fruiting requirements. A plant that fits a small pot when young may eventually need a larger space.',
          'Most fruiting plants need ample light, but exact requirements vary. Choose a location that meets the variety’s needs and has enough room for its canopy and roots.',
        ],
      },
      {
        heading: 'Plant with healthy roots in mind',
        bullets: [
          'Use a container with drainage holes and a mix suited to the selected fruit plant, or prepare a well-drained garden location.',
          'Avoid burying the stem or graft union; follow instructions for the specific plant.',
          'Water after planting and check moisture regularly while the plant establishes.',
          'Support the plant if needed and protect young growth from damage.',
        ],
      },
      {
        heading: 'Set realistic expectations',
        paragraphs: [
          'The time to fruit depends on the species, variety, propagation method, age and care. A seed-grown plant may differ from its parent and may take longer to fruit than a grafted plant.',
          'Pruning, feeding and pollination needs vary. Ask for care instructions for the exact variety, and avoid using pesticides on flowering plants unless the product is appropriate and its label directions are followed.',
        ],
      },
    ],
    relatedSlugs: ['best-soil-and-organic-fertilizers-for-plants', 'tips-for-growing-healthy-flowering-plants'],
  },
]
