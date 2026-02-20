/**
 * IGCSE Study Hub - Search Index
 * Pre-built index of all content pages for client-side search
 */

const SEARCH_INDEX = [
    // Biology Block 1
    {
        title: "Cells",
        subject: "biology",
        block: 1,
        code: "B1.1.1",
        url: "subjects/biology/block-1/01-cells.html",
        keywords: ["cell", "nucleus", "cytoplasm", "membrane", "mitochondria", "ribosome", "chloroplast", "vacuole", "cell wall", "organelle", "eukaryotic", "animal cell", "plant cell"],
        excerpt: "All living organisms are made up of cells. Cells are the basic structural and functional units of life."
    },
    {
        title: "Specialised Cells",
        subject: "biology",
        block: 1,
        code: "B1.2.1",
        url: "subjects/biology/block-1/02-specialised-cells.html",
        keywords: ["specialised", "differentiation", "red blood cell", "nerve cell", "muscle cell", "root hair", "sperm", "egg", "ciliated"],
        excerpt: "Cells become specialised to perform specific functions through differentiation."
    },
    {
        title: "Magnification",
        subject: "biology",
        block: 1,
        code: "B1.3.1",
        url: "subjects/biology/block-1/03-magnification.html",
        keywords: ["magnification", "microscope", "eyepiece", "objective", "image size", "actual size", "resolution"],
        excerpt: "Magnification is how much larger an image appears compared to the actual size of the object."
    },
    {
        title: "Living Organisms",
        subject: "biology",
        block: 1,
        code: "B1.4.1",
        url: "subjects/biology/block-1/04-living-organisms.html",
        keywords: ["MRS GREN", "movement", "respiration", "sensitivity", "growth", "reproduction", "excretion", "nutrition", "characteristics of life"],
        excerpt: "All living organisms share seven characteristics: movement, respiration, sensitivity, growth, reproduction, excretion, and nutrition."
    },
    {
        title: "Prokaryotic Cells",
        subject: "biology",
        block: 1,
        code: "B1.5.1",
        url: "subjects/biology/block-1/05-prokaryotic-cells.html",
        keywords: ["prokaryotic", "bacteria", "plasmid", "flagellum", "cell wall", "no nucleus", "binary fission"],
        excerpt: "Prokaryotic cells are simpler cells without a nucleus, found in bacteria."
    },

    // Biology Block 2
    {
        title: "Size of Cells",
        subject: "biology",
        block: 2,
        code: "B2.1.1",
        url: "subjects/biology/block-2/01-size-of-cells.html",
        keywords: ["cell size", "micrometres", "surface area", "volume", "ratio"],
        excerpt: "Cells are very small and measured in micrometres. Surface area to volume ratio affects cell size."
    },
    {
        title: "Diffusion",
        subject: "biology",
        block: 2,
        code: "B2.2.1",
        url: "subjects/biology/block-2/02-diffusion.html",
        keywords: ["diffusion", "concentration gradient", "passive", "particles", "net movement", "high to low"],
        excerpt: "Diffusion is the net movement of particles from high to low concentration."
    },
    {
        title: "Osmosis",
        subject: "biology",
        block: 2,
        code: "B2.3.1",
        url: "subjects/biology/block-2/03-osmosis.html",
        keywords: ["osmosis", "water", "partially permeable", "membrane", "water potential", "turgid", "plasmolysis"],
        excerpt: "Osmosis is the movement of water molecules through a partially permeable membrane."
    },
    {
        title: "Osmosis Practical",
        subject: "biology",
        block: 2,
        code: "B2.4.1",
        url: "subjects/biology/block-2/04-osmosis-practical.html",
        keywords: ["osmosis practical", "potato", "mass change", "percentage change", "investigation"],
        excerpt: "Investigating osmosis using potato cylinders in different concentrations of sucrose solution."
    },
    {
        title: "Investigating Diffusion",
        subject: "biology",
        block: 2,
        code: "B2.5.1",
        url: "subjects/biology/block-2/05-active-transport.html",
        keywords: ["diffusion", "investigation", "jelly cube", "variables", "independent variable", "dependent variable", "control variable", "prediction", "temperature", "concentration gradient", "permeable"],
        excerpt: "Investigating factors that affect diffusion using jelly cubes in acid, including scientific variables and predictions."
    },

    // Biology Block 3
    {
        title: "Biological Molecules",
        subject: "biology",
        block: 3,
        code: "B3.1.1",
        url: "subjects/biology/block-3/01-biological-molecules.html",
        keywords: ["carbohydrates", "proteins", "lipids", "glucose", "starch", "amino acids", "fatty acids", "glycerol", "food tests", "Benedict's", "iodine", "biuret"],
        excerpt: "Living organisms are made of biological molecules: carbohydrates, proteins, lipids, and nucleic acids."
    },
    {
        title: "The Digestive System",
        subject: "biology",
        block: 3,
        code: "B3.2.1",
        url: "subjects/biology/block-3/02-digestive-system.html",
        keywords: ["digestion", "stomach", "intestine", "enzymes", "bile", "liver", "pancreas", "absorption", "gut", "oesophagus"],
        excerpt: "The digestive system breaks down large food molecules into smaller, soluble molecules for absorption."
    },
    {
        title: "Enzymes",
        subject: "biology",
        block: 3,
        code: "B3.3.1",
        url: "subjects/biology/block-3/03-enzymes.html",
        keywords: ["enzyme", "catalyst", "active site", "substrate", "lock and key", "denaturation", "temperature", "pH", "optimum"],
        excerpt: "Enzymes are biological catalysts made of protein. They speed up reactions without being used up."
    },
    {
        title: "Enzymes Continued",
        subject: "biology",
        block: 3,
        code: "B3.4.1",
        url: "subjects/biology/block-3/04-enzymes-continued.html",
        keywords: ["enzyme specificity", "lock and key", "carbohydrase", "protease", "lipase", "denaturation", "metabolism", "optimum temperature", "optimum pH"],
        excerpt: "Enzyme specificity explained using the lock and key model. Carbohydrases, proteases, and lipases break down different substrates."
    },
    {
        title: "Balanced Diet",
        subject: "biology",
        block: 3,
        code: "B3.5.1",
        url: "subjects/biology/block-3/05-balanced-diet.html",
        keywords: ["balanced diet", "food groups", "carbohydrates", "proteins", "lipids", "fats", "vitamins", "minerals", "fibre", "water", "iron", "calcium", "vitamin C", "vitamin D", "eatwell guide", "saturated", "unsaturated", "nutrition", "nutrients"],
        excerpt: "A balanced diet contains the right proportions of carbohydrates, proteins, lipids, vitamins, minerals, fibre, and water. Nutritional needs vary with age and activity level."
    },

    // Chemistry Block 1
    {
        title: "Atoms, Elements and Compounds",
        subject: "chemistry",
        block: 1,
        code: "C1.1.1",
        url: "subjects/chemistry/block-1/01-atoms-elements-compounds.html",
        keywords: ["atom", "element", "compound", "molecule", "periodic table", "symbol", "formula"],
        excerpt: "Atoms are the smallest particles of an element. Elements combine to form compounds."
    },
    {
        title: "States of Matter",
        subject: "chemistry",
        block: 1,
        code: "C1.2.1",
        url: "subjects/chemistry/block-1/02-states-of-matter.html",
        keywords: ["solid", "liquid", "gas", "particles", "arrangement", "movement", "energy"],
        excerpt: "The three states of matter are solid, liquid, and gas, differing in particle arrangement and movement."
    },
    {
        title: "Atomic Structure",
        subject: "chemistry",
        block: 1,
        code: "C1.3.1",
        url: "subjects/chemistry/block-1/03-atomic-structure.html",
        keywords: ["proton", "neutron", "electron", "nucleus", "atomic number", "mass number", "subatomic"],
        excerpt: "Atoms contain protons and neutrons in the nucleus, with electrons orbiting around it."
    },
    {
        title: "Electron Shells",
        subject: "chemistry",
        block: 1,
        code: "C1.4.1",
        url: "subjects/chemistry/block-1/04-electron-shells.html",
        keywords: ["electron shell", "electron configuration", "energy level", "2,8,8", "outer shell", "valence"],
        excerpt: "Electrons are arranged in shells around the nucleus. The first shell holds 2, the next hold 8."
    },
    {
        title: "Ions and Isotopes",
        subject: "chemistry",
        block: 1,
        code: "C1.5.1",
        url: "subjects/chemistry/block-1/05-ions-isotopes.html",
        keywords: ["ion", "isotope", "cation", "anion", "charge", "mass number", "relative atomic mass"],
        excerpt: "Ions are charged atoms. Isotopes are atoms with the same proton number but different neutron numbers."
    },

    // Chemistry Block 2
    {
        title: "State Changes and Diffusion",
        subject: "chemistry",
        block: 2,
        code: "C2.1.1",
        url: "subjects/chemistry/block-2/01-state-changes.html",
        keywords: ["melting", "freezing", "boiling", "condensation", "evaporation", "sublimation", "state change", "diffusion", "kinetic theory", "concentration", "melting point", "boiling point", "gallium", "bromine"],
        excerpt: "State changes and diffusion explained using kinetic theory. Includes melting/boiling point data for common substances."
    },
    {
        title: "Ionic Bonding",
        subject: "chemistry",
        block: 2,
        code: "C2.2.1",
        url: "subjects/chemistry/block-2/02-ionic-bonding.html",
        keywords: ["ionic bond", "electrostatic", "metal", "non-metal", "electron transfer", "lattice", "sodium chloride"],
        excerpt: "Ionic bonding occurs when electrons are transferred from metals to non-metals, forming charged ions."
    },
    {
        title: "Covalent Bonding",
        subject: "chemistry",
        block: 2,
        code: "C2.3.1",
        url: "subjects/chemistry/block-2/03-covalent-bonding.html",
        keywords: ["covalent bond", "shared electrons", "molecule", "non-metal", "double bond", "triple bond"],
        excerpt: "Covalent bonding involves sharing electrons between non-metal atoms."
    },
    {
        title: "Metallic Bonding",
        subject: "chemistry",
        block: 2,
        code: "C2.4.1",
        url: "subjects/chemistry/block-2/04-metallic-bonding.html",
        keywords: ["metallic bond", "delocalised electrons", "sea of electrons", "conductor", "malleable", "ductile"],
        excerpt: "Metallic bonding involves positive metal ions in a sea of delocalised electrons."
    },
    {
        title: "Giant Covalent Structures",
        subject: "chemistry",
        block: 2,
        code: "C2.5.1",
        url: "subjects/chemistry/block-2/05-giant-covalent.html",
        keywords: ["giant covalent", "diamond", "graphite", "silicon dioxide", "macromolecule", "high melting point"],
        excerpt: "Giant covalent structures like diamond and graphite have atoms bonded in large networks."
    },

    // Chemistry Block 3
    {
        title: "Conservation of Mass",
        subject: "chemistry",
        block: 3,
        code: "C3.1.1",
        url: "subjects/chemistry/block-3/01-conservation-of-mass.html",
        keywords: ["conservation of mass", "reactants", "products", "closed system", "atoms rearranged"],
        excerpt: "Mass is neither created nor destroyed in a chemical reaction. Total mass of reactants equals products."
    },
    {
        title: "Conservation of Mass Calculations",
        subject: "chemistry",
        block: 3,
        code: "C3.2.1",
        url: "subjects/chemistry/block-3/02-conservation-calculations.html",
        keywords: ["mass calculation", "unknown mass", "reactants", "products"],
        excerpt: "Using conservation of mass to calculate unknown masses in chemical reactions."
    },
    {
        title: "Representing Reactions",
        subject: "chemistry",
        block: 3,
        code: "C3.3.1",
        url: "subjects/chemistry/block-3/03-representing-reactions.html",
        keywords: ["word equation", "symbol equation", "state symbols", "formula", "reactants", "products"],
        excerpt: "Chemical reactions can be represented using word equations and symbol equations with state symbols."
    },
    {
        title: "Balancing Symbol Equations",
        subject: "chemistry",
        block: 3,
        code: "C3.4.1",
        url: "subjects/chemistry/block-3/04-balancing-equations.html",
        keywords: ["balancing equations", "coefficients", "atoms", "balanced equation"],
        excerpt: "Symbol equations must be balanced so the same number of each atom appears on both sides."
    },
    {
        title: "RAM and RFM",
        subject: "chemistry",
        block: 3,
        code: "C3.5.1",
        url: "subjects/chemistry/block-3/05-ram-rfm.html",
        keywords: ["relative atomic mass", "relative formula mass", "Ar", "Mr", "RFM", "molar mass", "periodic table", "calculations"],
        excerpt: "Relative atomic mass (Ar) and relative formula mass (Mr/RFM) calculations using the periodic table."
    },

    // Physics Block 1
    {
        title: "Speed, Distance and Time",
        subject: "physics",
        block: 1,
        code: "P1.1.1",
        url: "subjects/physics/block-1/01-speed-distance-time.html",
        keywords: ["speed", "distance", "time", "velocity", "average speed", "m/s", "km/h"],
        excerpt: "Speed is the distance travelled per unit time. Speed = distance / time."
    },
    {
        title: "Distance-Time Graphs",
        subject: "physics",
        block: 1,
        code: "P1.2.1",
        url: "subjects/physics/block-1/02-distance-time-graphs.html",
        keywords: ["distance-time graph", "gradient", "stationary", "constant speed", "acceleration"],
        excerpt: "Distance-time graphs show how distance changes with time. The gradient represents speed."
    },
    {
        title: "Velocity-Time Graphs",
        subject: "physics",
        block: 1,
        code: "P1.3.1",
        url: "subjects/physics/block-1/03-velocity-time-graphs.html",
        keywords: ["velocity-time graph", "acceleration", "deceleration", "gradient", "area under graph"],
        excerpt: "Velocity-time graphs show how velocity changes. The gradient is acceleration, area is distance."
    },
    {
        title: "Gravitational Force",
        subject: "physics",
        block: 1,
        code: "P1.4.1",
        url: "subjects/physics/block-1/04-gravitational-force.html",
        keywords: ["gravity", "weight", "mass", "gravitational field strength", "g", "N/kg"],
        excerpt: "Weight is the force of gravity on an object. Weight = mass x gravitational field strength."
    },
    {
        title: "Work Done",
        subject: "physics",
        block: 1,
        code: "P1.5.1",
        url: "subjects/physics/block-1/05-work-done.html",
        keywords: ["work done", "energy transfer", "force", "distance", "joules"],
        excerpt: "Work is done when a force moves an object. Work done = force x distance."
    },

    // Physics Block 2
    {
        title: "Density",
        subject: "physics",
        block: 2,
        code: "P2.1.1",
        url: "subjects/physics/block-2/01-density.html",
        keywords: ["density", "mass", "volume", "kg/m³", "g/cm³", "floating", "sinking"],
        excerpt: "Density is mass per unit volume. Density = mass / volume."
    },
    {
        title: "Forces",
        subject: "physics",
        block: 2,
        code: "P2.2.1",
        url: "subjects/physics/block-2/02-forces.html",
        keywords: ["force", "newton", "contact force", "non-contact force", "friction", "gravity", "tension"],
        excerpt: "Forces are pushes or pulls measured in newtons. They can be contact or non-contact forces."
    },
    {
        title: "Resultant Forces",
        subject: "physics",
        block: 2,
        code: "P2.3.1",
        url: "subjects/physics/block-2/03-resultant-forces.html",
        keywords: ["resultant force", "balanced", "unbalanced", "equilibrium", "net force"],
        excerpt: "The resultant force is the single force that has the same effect as all forces combined."
    },
    {
        title: "Moments",
        subject: "physics",
        block: 2,
        code: "P2.4.1",
        url: "subjects/physics/block-2/04-moments.html",
        keywords: ["moment", "pivot", "turning effect", "lever", "principle of moments", "equilibrium"],
        excerpt: "A moment is the turning effect of a force. Moment = force x perpendicular distance from pivot."
    },
    {
        title: "Newton's Second Law",
        subject: "physics",
        block: 2,
        code: "P2.5.1",
        url: "subjects/physics/block-2/05-newtons-second-law.html",
        keywords: ["F=ma", "Newton's second law", "force", "mass", "acceleration", "resultant"],
        excerpt: "Newton's second law: Force = mass x acceleration. Larger force means larger acceleration."
    },

    // Physics Block 3
    {
        title: "Energy Stores",
        subject: "physics",
        block: 3,
        code: "P3.1.1",
        url: "subjects/physics/block-3/01-energy-stores.html",
        keywords: ["energy", "kinetic", "gravitational potential", "elastic", "chemical", "thermal", "nuclear", "conservation"],
        excerpt: "Energy is stored in different stores: kinetic, gravitational potential, elastic, chemical, thermal, and more."
    },
    {
        title: "Calculating Efficiency",
        subject: "physics",
        block: 3,
        code: "P3.2.1",
        url: "subjects/physics/block-3/02-calculating-efficiency.html",
        keywords: ["efficiency", "useful output", "total input", "wasted energy", "dissipated", "percentage", "joules", "closed system"],
        excerpt: "Efficiency measures how much energy is usefully transferred compared to total input. Calculated as useful output / total input."
    },
    {
        title: "Energy Resources",
        subject: "physics",
        block: 3,
        code: "P3.3.1",
        url: "subjects/physics/block-3/03-energy-resources.html",
        keywords: ["renewable", "non-renewable", "fossil fuels", "solar", "wind", "nuclear", "hydroelectric", "geothermal", "tidal", "wave", "biofuel", "carbon neutral", "generator", "turbine", "barrage", "dam"],
        excerpt: "Energy resources are renewable (won't run out) or non-renewable (will run out). About 30% of UK electricity comes from wind."
    },
    {
        title: "Conservation of Energy Calculations",
        subject: "physics",
        block: 3,
        code: "P3.4.1",
        url: "subjects/physics/block-3/04-energy-calculations.html",
        keywords: ["conservation", "energy", "GPE", "KE", "kinetic", "gravitational potential", "calculation", "height", "speed", "velocity", "efficiency"],
        excerpt: "Using conservation of energy to calculate speed from height and height from speed by equating GPE and KE."
    },

    // Separate Biology Block 1
    {
        title: "Features of Organisms",
        subject: "separate-biology",
        block: 1,
        code: "SB1.1.1",
        url: "subjects/separate-biology/block-1/01-features-of-organisms.html",
        keywords: ["features", "organisms", "classification", "kingdoms", "vertebrates", "invertebrates", "arthropods", "insects", "arachnids", "crustaceans", "mammals", "birds", "reptiles", "amphibians", "fish", "exoskeleton"],
        excerpt: "Living organisms are classified into five kingdoms. Animals are vertebrates or invertebrates. Vertebrate classes and arthropod groups."
    },
    {
        title: "Species and Binomial Names",
        subject: "separate-biology",
        block: 1,
        code: "SB1.2.1",
        url: "subjects/separate-biology/block-1/02-species-binomial.html",
        keywords: ["species", "binomial", "nomenclature", "genus", "Linnaeus", "Latin names", "hybrid", "liger", "tigon", "zorse", "geep", "fertile offspring", "Panthera", "classification hierarchy"],
        excerpt: "Species are named using binomial nomenclature. Hybrids like ligers and zorses prove parents are different species."
    },
    {
        title: "Evolutionary Trees and Gene Sequencing",
        subject: "separate-biology",
        block: 1,
        code: "SB1.3.1",
        url: "subjects/separate-biology/block-1/03-evolutionary-trees.html",
        keywords: ["evolutionary tree", "common ancestor", "gene sequencing", "DNA comparison", "hominidae", "whale", "hippo", "classification"],
        excerpt: "Evolutionary trees show how species are related through common ancestors. Gene sequencing compares DNA to determine relationships."
    },
    {
        title: "Dichotomous Keys",
        subject: "separate-biology",
        block: 1,
        code: "SB1.4.1",
        url: "subjects/separate-biology/block-1/04-dichotomous-keys.html",
        keywords: ["dichotomous key", "identification", "classification key", "vertebrate", "penguin", "bat", "whale", "crab", "crustacean", "arthropod", "observable features"],
        excerpt: "Dichotomous keys use paired questions to classify organisms. Includes vertebrate classification and crab identification exercises."
    },
    {
        title: "Plant Classification",
        subject: "separate-biology",
        block: 1,
        code: "SB1.5.1",
        url: "subjects/separate-biology/block-1/05-plant-classification.html",
        keywords: ["plant classification", "flowering", "non-flowering", "ferns", "mosses", "conifers"],
        excerpt: "Plants are classified into groups including flowering plants, conifers, ferns, and mosses."
    },
    // Extra Learning pages
    {
        title: "Extra Learning - Transport",
        subject: "biology",
        block: 2,
        code: "B2.EL",
        url: "subjects/biology/block-2/extra-learning.html",
        keywords: ["active transport", "carrier proteins", "ATP", "diffusion", "osmosis", "comparison", "surface area", "villi", "alveoli", "root hair cells"],
        excerpt: "Additional content beyond the slides: active transport, comparing transport methods, and adaptations to increase surface area."
    },
    {
        title: "Extra Learning - Classification",
        subject: "separate-biology",
        block: 1,
        code: "SB1.EL",
        url: "subjects/separate-biology/block-1/extra-learning.html",
        keywords: ["kingdom features", "binomial advantages", "phylogenetic tree", "dichotomous key example", "conifers", "gymnosperms", "vascular tissue", "monocot", "dicot"],
        excerpt: "Additional content beyond the slides: kingdom details, binomial system advantages, evolutionary tree reading, dichotomous key examples, and plant classification detail."
    }
];
