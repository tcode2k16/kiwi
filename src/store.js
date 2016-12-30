import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from './plugins/SaveState'

import assign from 'lodash.assign'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
        app_name: "Kiwi",
        routes: {
            names: ['Menu','My Sets','My Activities', 'My Study Plan'],
            icon: "./assets/logo.png",
        },
        menu: {
          todos: [
            { name: "eat stuff", done: false },
            { name: "read stuff", done: true }
          ],
          num_streak: 1000,
          drag_grid: [
            ['Welcome','Train','Activities'],
            ['Todo']
          ]
        },
        activities: [
          {name: 'how to kill ebarbs', action: 'add', time: '2016.12.29'},
          {name: 'how to kill ebarbs', action: 'edit', time: '2016.12.29'},
          {name: 'how to kill ebarbs', action: 'delete', time: '2016.12.30'}
        ],
        drag_op: {
          group:'widgets',
          disabled: false
        },
        study_sets: {
          sets: {
            '25c7d217-712a-7e57-c7dc-b384a0bf0be0': {
              image: 1,
              description: 'This set helps you learn how to kill ebarbs.',
              name: 'how to kill ebarbs',
              set: {}            
            },
            '0b55e668-10ea-d648-43ed-230a164b5754': {
              image: 6,
              description: 'This set helps you learn country names.',
              name: 'country names',
              set: {}            
            },
            "18ae2004-7ca3-3741-497f-7ce23d00880c": {
                "image": 4,
                "description": "bio",
                "name": "bio",
                "set": {
                    "470116bc-8f94-59a5-a73e-f1bcf224faf2": {
                        "word": "Proton",
                        "def": "atomic particle with a positive charge, found in the nucleus of an atom"
                    },
                    "692f7c5b-9e7e-17c4-add8-3fe2b2d3daab": {
                        "word": "electron",
                        "def": "atomic particle with a negative charge orbiting the nucleus"
                    },
                    "546bf384-38a2-afaa-7e75-d692e264ef80": {
                        "word": "neutron",
                        "def": "atomic particle without a charge, found in the nucleus of an atom"
                    },
                    "35eccf00-ad5a-ecad-1f8d-0b28c8fd4d2b": {
                        "word": "Bohr Model",
                        "def": "shows the predicted location of electrons orbiting the nucleus"
                    },
                    "25cbb7fe-1700-9b08-54b8-f2051afca6c5": {
                        "word": "atomic number",
                        "def": "consists of the total number of protons in the nucleus of an atom"
                    },
                    "26c7fe42-d6be-83e7-989d-bf9fd92ff9be": {
                        "word": "subscript",
                        "def": "a number found at the base of the element symbol which indicates the total number of atoms of that element in a chemical formula"
                    },
                    "04b6896c-072b-d65d-b8a6-ee669ee88e2c": {
                        "word": "coefficient",
                        "def": "a number found in front of a chemical formula indicates the number of molecules"
                    },
                    "30ffd009-d55f-4769-8ff8-a0565cf18ca5": {
                        "word": "orbital",
                        "def": "a location where electrons are found; a pattern surrounding the nucleus; associated with energy of the electron"
                    },
                    "47d50345-f372-bb04-8433-2033adff6043": {
                        "word": "valence electron",
                        "def": "outer most electrons that are associated with bonding"
                    },
                    "c7a38249-d9fb-24e3-5af5-f5ea1efbb294": {
                        "word": "Lewis dot diagram",
                        "def": "a diagram that shows ONLY the valence electrons of an atom"
                    },
                    "768a388b-b79d-19e5-dffb-a079f38751ab": {
                        "word": "ionic bond",
                        "def": "results when atoms which have lost or gained electrons become charged and attracted to one another"
                    },
                    "f550fcdd-b624-88b8-289d-3ab540d5275e": {
                        "word": "cation",
                        "def": "ions with a positive charge that results when electrons are LOST"
                    },
                    "2d43895d-100d-8831-b8af-ac2673323b79": {
                        "word": "anion",
                        "def": "ions with a negative charge that results when electrons are GAINED"
                    },
                    "6f2bd5f5-e884-e428-f3fb-1cd87cd6f9de": {
                        "word": "covalent bond",
                        "def": "the sharing of electrons between two or more atoms"
                    },
                    "a415d058-a4e5-d4ac-0fe4-2ff2bfb5885c": {
                        "word": "Organic molecule",
                        "def": "composed of carbon as a backbone bonded with hydrogen and possibly oxygen and nitrogen attached."
                    },
                    "160abbef-5ce3-a144-5eef-25083b7536e5": {
                        "word": "Carbohydrate",
                        "def": "contains C, H, O and mainly functions as energy sources."
                    },
                    "5d0e1d9e-2a57-609e-0d88-595653be3c89": {
                        "word": "lipid",
                        "def": "class of molecules that is water insoluble and stores a great amount of energy."
                    },
                    "74a50a5d-443f-37cd-3132-7ef5d3315103": {
                        "word": "triglyceride",
                        "def": "composed of glycerol (3 carbons) and 3 chains of fatty acids. Triglycerides are hydrophobic."
                    },
                    "9ab84a4d-33a9-2d92-4713-3931c50423ae": {
                        "word": "monosaccharide",
                        "def": "single sugar such as glucose, galactose or fructose"
                    },
                    "bc8469db-d21d-3fb3-a0aa-2dc9083f55fc": {
                        "word": "disaccharide",
                        "def": "two units of monosaccharides bonded together such as lactose or sucrose"
                    },
                    "8a68ddb5-2898-2635-0f9f-cd341de730aa": {
                        "word": "polysaccharide",
                        "def": "long chains of monosaccharides (glucose) stored in a water insoluble form for energy storage or structural purposes."
                    },
                    "c726cac7-87a9-3e70-f0ea-a9e66ebaca5b": {
                        "word": "steroids",
                        "def": "ring structured lipids that serve various functions including hormones and cholesterol"
                    },
                    "6a3cf056-9af5-92a5-43dd-ab34a0fb0c0a": {
                        "word": "monomer",
                        "def": "single unit"
                    },
                    "86eba5dd-f7b6-e9b9-68d5-e4934d19b95f": {
                        "word": "polymer",
                        "def": "many units (often repeating)"
                    },
                    "c201dfd1-0464-5c02-b534-2f8b0a496ede": {
                        "word": "polymerization",
                        "def": "the process of building a polymer from monomers. Example would be to build a protein from amino acids."
                    },
                    "40bdbc6b-21d0-3bd5-f936-eeda5f6b911d": {
                        "word": "dehydration synthesis",
                        "def": "a reaction in which two monomers are linked together by a bond that involves losing an H+ and an OH- group to form water."
                    },
                    "790706ad-ce40-87cf-2563-13333781be92": {
                        "word": "Hydrolysis",
                        "def": "a reaction in which a bond between two monomers is broken by the addition of water (H+ and OH-)."
                    },
                    "17da42f7-b12c-e121-865b-ff7d4def2ac2": {
                        "word": "cellulose",
                        "def": "a polysaccharide that is composed of long compacted chains of glucose; not digested in humans"
                    },
                    "8f38665f-b7b6-dfca-92b0-dab8a9f06eaa": {
                        "word": "glycogen",
                        "def": "a branched polysaccharide composed of glucose and the main storage for glucose in animals"
                    },
                    "3dfe6b79-71f6-047e-950b-68a6f78fc0b2": {
                        "word": "starch",
                        "def": "a branched polysaccharide composed of glucose and the main storage for glucose in plants"
                    },
                    "3d0146f1-e629-a274-5b4a-e76668b8f7df": {
                        "word": "saturated fat",
                        "def": "a fatty acid (chain) that is composed of single bonds between carbon with a maximum # of hydrogen atoms bonded; solid at room temperature and found in animals."
                    },
                    "f76c4a91-8584-5b5d-aa27-3715ce724750": {
                        "word": "unsaturated fat",
                        "def": "a fatty acid (chain) that is composed of one or more double bonds between carbon; liquid at room temperature and found in plant sources."
                    },
                    "13eb4498-b9f5-c82b-cbb9-0ab696750186": {
                        "word": "phospholipid",
                        "def": "makes up the structure of the cell membrane"
                    },
                    "9f37d9cc-f520-6d49-8e8b-6e9eeffd4bdf": {
                        "word": "amino acid",
                        "def": "the monomer for protein; 20 different amino acids combine to produce unique proteins of varying sizes and shapes"
                    },
                    "78dfadba-f1cc-c3e0-d7f1-fcba6106c870": {
                        "word": "enzyme",
                        "def": "a protein molecule that lowers activation energy required for chemical reactions to take place by de-stabilizing bonds or by bringing molecules closer together."
                    },
                    "088e47e4-cfb7-fdbd-79ec-3143ec8d9c20": {
                        "word": "Activation energy",
                        "def": "the amount of energy or energy barrier that reactants must overcome to achieve a chemical reaction. (Enzymes essentially lower this)"
                    },
                    "bd115453-c8e4-b29c-b6e4-02f3efd7464a": {
                        "word": "decomposition",
                        "def": "When an enzyme is used to break apart a macromolecule into smaller subunits (possibly into monomers)"
                    },
                    "0fc9418a-c820-c591-5822-29f19ee60db1": {
                        "word": "synthesis",
                        "def": "When an enzyme is used to assemble two substrate molecules."
                    },
                    "4b55fd9c-5385-41be-6c34-0fd16c44895e": {
                        "word": "substrate",
                        "def": "the molecule (s) that come in contact with an enzyme. These are specific to each enzyme."
                    },
                    "6c974932-c024-39ad-2837-70fa2ee42183": {
                        "word": "catalyst",
                        "def": "Anything that speeds up a rate. In this case, an enzyme is a catalyst"
                    },
                    "aebd4b6f-9ad4-8c50-a723-2c832aa040ae": {
                        "word": "denature",
                        "def": "This is when the 3D shape of a protein is destroyed due to an environmental factor such as acids and bases or temperature."
                    },
                    "329c6ce2-10fb-469f-adc9-1925e6f3517c": {
                        "word": "unicellular",
                        "def": "a single celled organism."
                    },
                    "200b2bb1-e469-908c-f07f-006763cb96fb": {
                        "word": "multicellular",
                        "def": "an organisms composed of more than one cell. As the organism becomes more complex the cells are organised into tissues."
                    },
                    "d16194a1-a0b5-c3a5-2b74-b13019a0b637": {
                        "word": "prokaryotic",
                        "def": "Refers to a bacterium."
                    },
                    "d2a199fd-443b-6298-1f3e-8dfdba1f16be": {
                        "word": "eukaryotic",
                        "def": "Refers to a cell that has a nucleus and various organelles. Examples are plant and animal cells."
                    },
                    "69e1d852-e85a-c0ac-a2ae-1153a3b9234f": {
                        "word": "chloroplast",
                        "def": "Green, oval structure inside any cell that photosynthesizes. (the site of the process)"
                    },
                    "6de0e93e-0593-2754-c3c5-6684fdcde2aa": {
                        "word": "photosynthesis",
                        "def": "A biochemical reaction involving the conversion of carbon dioxide and water into glucose and oxygen."
                    },
                    "3d2f744d-7a6a-bceb-de20-cddd5b808eb2": {
                        "word": "cell wall",
                        "def": "The outer layer surrounding cells. In plants it is made of cellulose, in bacteria it is made of another substance. It's function is to give structural support."
                    },
                    "227aa25a-a63c-8bdf-f831-2f9e2b848c7a": {
                        "word": "vacuole",
                        "def": "A defined space within a cell. In plants, a central vacuole is important for storing water."
                    },
                    "3f7ff392-4562-a125-6ab1-e48d970bfb2d": {
                        "word": "tissue",
                        "def": "A group of similar cells that are attached and perform a specific function."
                    },
                    "a6997650-d318-650d-7f09-0443a050abe7": {
                        "word": "cell theory",
                        "def": "Three statements about the origin of cells and the basis of all living things."
                    },
                    "a8648fce-4649-1eba-9429-b40ab2f32a31": {
                        "word": "mitosis",
                        "def": "A four step process that separates the chromosomes in the nucleus of a cell during cell division."
                    },
                    "ca836833-5bef-114c-dd5f-f269b39756b3": {
                        "word": "lipid bilayer",
                        "def": "The structure of the cell membrane enclosing all living cells; including bacteria. It is a two layer 'sandwich' of phospholipids."
                    },
                    "53c4fa88-e16e-4ca0-a685-42a746d78ed0": {
                        "word": "hydrophilic",
                        "def": "Any molecule that can bond with water. These are polar, having a charge."
                    },
                    "a12f1cbb-6c1e-1989-425e-4583d2fbfb96": {
                        "word": "hydrophobic",
                        "def": "Any molcule that repels water. A long chain of carbon bonded only with hydrogen is an example."
                    },
                    "9ea75e7d-b642-33be-d559-9cf6e4e9b22d": {
                        "word": "permeability",
                        "def": "The ability of something to \"permeate\" or pass through."
                    },
                    "dd02c231-1536-5c73-ff9a-75638ec765d1": {
                        "word": "polarity",
                        "def": "A molecule having a negative end and a positive end due to unequal sharing of electrons."
                    },
                    "4d4c468d-f164-872d-3138-70a993668c29": {
                        "word": "diffusion",
                        "def": "A process where particles/atoms/ions/molecules move around and eventually reach even distribution within an environment. Moving from high to low concentration."
                    },
                    "71f716a7-9178-c957-6a8c-36050fb4c6e4": {
                        "word": "surface area",
                        "def": "The total surface that surrounds an object. In a cell the surface area would be represented by the cell membrane enclosing the cell."
                    },
                    "9a997007-83bf-f8b9-0873-ca8440df9966": {
                        "word": "osmosis",
                        "def": "The process where water spreads out into the environment. Water will move from areas of high concentration to low concentration."
                    },
                    "d9702364-0d2d-24f4-b825-d71e012ff783": {
                        "word": "hypertonic",
                        "def": "A solution that contains a very high concentration of a solute (in comparison to another solution, such as a cell)"
                    },
                    "5caf7c74-1f08-83bd-75db-23595ce55b97": {
                        "word": "hypotonic",
                        "def": "A solution that contains a lower concentration of a solute compared to that of another solution."
                    },
                    "2c389ffa-71be-cdbe-a51b-79cb263b5baa": {
                        "word": "isotonic",
                        "def": "A solution that contains an equal amount solute as compared to another solution."
                    },
                    "c81bb783-43c8-0658-fae9-dbed97f84e72": {
                        "word": "facilitated diffusion",
                        "def": "A process of transport into a cell involving passage through a transport or channel protein."
                    },
                    "df090755-5df8-a256-70d9-1acdea1cefe3": {
                        "word": "active transport",
                        "def": "A process of transport that involves ATP energy input to move substances against diffusion involving protein transport."
                    },
                    "036b76d3-fc58-0b59-6839-3a4fd388be96": {
                        "word": "endocytosis",
                        "def": "A process requiring ATP that involves the cell membrane wrapping around substances and creating a vesicle. \"Cell eating\" or \"bulk movement into the cell\""
                    },
                    "3ac37e11-a1d1-8d20-8e4e-f17d4119076e": {
                        "word": "exocytosis",
                        "def": "A process requiring ATP that involves the cell membrane fusing with a vesicle inside the cell and releasing the contents out of the cell. \"bulk movement out of the cell\""
                    },
                    "d70c1daf-9a10-f0ab-9aa6-8d7eadb4b5b7": {
                        "word": "nucleus",
                        "def": "An organelle that houses DNA"
                    },
                    "69885c98-86e2-2e27-f515-a784c4b457fe": {
                        "word": "mitochondria",
                        "def": "An organelle where cellular respiration takes place."
                    },
                    "43f37220-27a4-2bd4-1a63-655c028d76f9": {
                        "word": "endoplasmic reticulum",
                        "def": "An organelle that coordinates the movement of protein within the cell's cytoplasm."
                    },
                    "730df535-fcc4-72f3-87b8-2ea4cf54488c": {
                        "word": "protein synthesis",
                        "def": "The process of producing protein involving DNA, RNA, amino acids and ribosomes."
                    },
                    "3bf2f8f8-f5f0-9e23-54b9-7ec72e70409a": {
                        "word": "golgi body/apparatus",
                        "def": "An organelle that performs changes to and transport of proteins."
                    },
                    "74d3bb93-c660-e47f-61ca-33352900ab2c": {
                        "word": "hormone",
                        "def": "A messenger molecule that is released from certain cells and will target other cells in order to cause changes within those cells."
                    },
                    "ea993e76-d046-d08e-c9fc-d08528abb61e": {
                        "word": "ribosome",
                        "def": "An organelle found in all cells that is the site for protein production/synthesis."
                    },
                    "0b949abb-d233-da33-76c2-2a8ef4de23a5": {
                        "word": "Lysosome",
                        "def": "A vesicle in the cytoplasm that contains digestive enzymes to break down invading cells or worn out cell parts."
                    },
                    "3b002143-5df1-4b4d-df6a-485d84e18661": {
                        "word": "anatomy",
                        "def": "Deals with the structure (morphology- shape) of the body and its parts, in other words, what things are called and what they look like"
                    },
                    "ecaf431b-7cfa-25d2-8eee-539787e4004c": {
                        "word": "Physiology",
                        "def": "Studies the function of anatomical parts or asks the question, \"how do organs work\"? What is their job?"
                    },
                    "96b5b11e-7c9f-9e66-2057-ce34bab8c35c": {
                        "word": "organ",
                        "def": "Consists of several tissues that together perform a specific task"
                    },
                    "cf63b74a-40f0-61cb-b047-b0f53668701d": {
                        "word": "organ system",
                        "def": "Consists of multiple organs that together perform a vital body function"
                    },
                    "5df56de2-d177-e689-58e0-a9cadb6c3f98": {
                        "word": "Integumentary system",
                        "def": "Covers the body and protects it from injury, infection, excessive heat or cold and drying out"
                    },
                    "65f0dd53-a545-7fe4-fee9-56da56ae2e87": {
                        "word": "Skeletal system",
                        "def": "Provides the body support, protects certain organs such as the brain and lungs, and works with the muscular system in body movements"
                    },
                    "2fb9175e-a1f4-6656-e7a7-405607a209c8": {
                        "word": "Muscular system",
                        "def": "Enables body movement and facial expressions essential to human communication"
                    },
                    "edf40f6f-7ca8-86ea-5e78-b93dd635e2ea": {
                        "word": "Nervous system",
                        "def": "Coordinates body's activities by detecting stimuli and directing the body's responses"
                    },
                    "9e3d268d-803a-f3f7-f6a4-d9c904954f3b": {
                        "word": "Digestive system",
                        "def": "Ingests food, breaks it down into smaller chemical units for use by the body, and eliminates undigested material"
                    },
                    "38259a7d-fc35-99bb-581a-8c2aef851979": {
                        "word": "Circulatory system",
                        "def": "Delivers oxygen and nutrients to body cells and transports waste products to excretory organs"
                    },
                    "b895f38b-3c46-91fb-f63e-fba5d1305b75": {
                        "word": "Respiratory system",
                        "def": "Exchanges gases with the environment"
                    },
                    "4c80e91d-32d3-2819-0d57-53159b24ee19": {
                        "word": "Endocrine system",
                        "def": "Secretes hormones that affect the functions of target cells, and thereby regulates the activities of the other organ systems"
                    },
                    "fc5404df-cb4d-d1c3-c4e9-a3f03a428e37": {
                        "word": "Lymphatic system",
                        "def": "Supports function of the circulatory system by returning fluid to blood vessels near the heart; also functions as part of the immune system"
                    },
                    "31b95b85-b62d-b56f-c48b-ca0372cac77b": {
                        "word": "Immune system",
                        "def": "Defends body against infections and cancer cells"
                    },
                    "3b687701-2e56-f066-0e6a-d001456d6ca1": {
                        "word": "Excretory system",
                        "def": "Removes waste products from the body and regulates the chemical makeup of the blood"
                    },
                    "7f36b18d-5a8f-443c-cf00-7695326e7c5a": {
                        "word": "Reproductive system",
                        "def": "Produces gametes; the female system also provides the organs needed to support a developing embryo"
                    },
                    "d18edee7-0329-2a27-9969-807af61bd3a8": {
                        "word": "epithelial tissue",
                        "def": "Sheets of cells that are closely packed and cover the entire surface of your body and form the lining of your internal organs"
                    },
                    "75df7117-2c58-cb17-ad65-bc9e0a599ba4": {
                        "word": "connective tissue",
                        "def": "This tissue holds together and supports other tissues; also cushions, insulates and connects organs"
                    },
                    "42d2a6b1-5b7b-11a2-b442-36076efe0066": {
                        "word": "cartilage",
                        "def": "A type of connective tissue that lubricates bones and provides cushion"
                    },
                    "8b677885-a82b-8856-b4cd-891e38f6576a": {
                        "word": "nervous tissue",
                        "def": "Tissue that forms the communication system that makes the behavior possible"
                    },
                    "94516ba9-7a49-34a8-ea23-755b6542fa36": {
                        "word": "skeletal muscle",
                        "def": "Voluntary muscle tissue that is attached to bone and allows movement of the body"
                    },
                    "db1505ad-d803-7058-b9d4-9b1e8006f37e": {
                        "word": "cardiac muscle",
                        "def": "Involuntary muscle tissue that is used to keep your heart pumping"
                    },
                    "aee6384f-fa41-c9be-fdc7-faffacb6d9dd": {
                        "word": "smooth muscle",
                        "def": "Involuntary muscle tissue that provide support and movement within organs"
                    },
                    "7a8d0c3a-32b1-8b81-e3a5-5d38f8af7796": {
                        "word": "homeostasis",
                        "def": "maintaining a stable internal environment"
                    },
                    "284ddcad-4834-8c2b-4447-9311989ac31e": {
                        "word": "interstitial fluid",
                        "def": "an aqueous solution that makes up th internal environment surrounding cells/tissues"
                    },
                    "65aa0b78-3760-cf7c-2939-06d12c0dc6a5": {
                        "word": "epidermis",
                        "def": "the outermost layer of skin composed of various types of specialised cells; constant renewal of these cells as they die"
                    },
                    "8c7fea65-f323-cba7-4b46-ad0b5dd1c8f6": {
                        "word": "glucagon",
                        "def": "targets muscle and liver cells and communicates to break down glycogen and release glucose into the bloodstream"
                    },
                    "a1512ed6-7d65-f1fd-1b94-2a6b3d57b3cc": {
                        "word": "insulin",
                        "def": "targets muscle and liver cells and communicates to absorb/remove glucose from the bloodstream"
                    },
                    "34af1eb4-91f3-72a9-3c7b-ea599cc52ba2": {
                        "word": "feedback loop",
                        "def": "A negative response to return conditions back to normal; negative meaning the response is in the opposite direction of the change"
                    },
                    "df20248a-2df3-3102-456c-a27beec5629b": {
                        "word": "CNS",
                        "def": "Central nervous system composed of the brain and spinal cord."
                    },
                    "ed6ee451-9544-f342-2f98-18d6825f229c": {
                        "word": "PNS",
                        "def": "Peripheral nervous system composed of sensory and motor neurons."
                    },
                    "9feb448b-7adc-19ec-438f-961766f8f208": {
                        "word": "Stimulus",
                        "def": "Information about an environmental change; collected by various receptors."
                    },
                    "9ee5b3e2-964b-a118-4701-8e578234081c": {
                        "word": "Receptor",
                        "def": "collects information from the internal and external environment (pain, thermo, chemo, and photo are examples)"
                    },
                    "2418455a-115d-94b2-903c-342c13eddc5d": {
                        "word": "Effector",
                        "def": "an organ or cell that acts in response to a stimulus."
                    },
                    "b46f55e2-31c0-fc6d-f994-3bc212c268d7": {
                        "word": "Sensory neurons",
                        "def": "neurons that carry information about stimuli to the CNS"
                    },
                    "f69fe706-b0ae-b7f5-e5cc-dbedbe1974b1": {
                        "word": "Integration",
                        "def": "occurs when the CNS interprets the sensory neurons through coordination within interneurons and relays this to the motor neurons."
                    },
                    "4ed2c489-f8db-a34a-392a-994dda483fc2": {
                        "word": "Interneurons",
                        "def": "neurons located only within the CNS"
                    },
                    "8f1138c1-b773-8a79-6415-b8638078a2b4": {
                        "word": "Motor neurons",
                        "def": "neurons that carry signals away from the CNS to a muscle or gland"
                    },
                    "bedc4e93-bdc8-d173-dbd8-9512a5b3e6ab": {
                        "word": "Reflex arc",
                        "def": "receptor to sensory neuron to interneuron to motor neuron (pathway)"
                    },
                    "5b1fed75-3d91-8984-63ab-cb2366373008": {
                        "word": "thermoreceptor",
                        "def": "found in the skin and certain internal organs which detects heat and cold"
                    },
                    "ca414634-5e1e-c9ce-7e7f-5b010375b8f9": {
                        "word": "dopamine",
                        "def": "a neurotransmitter found in the brain involved in chemical communication between neurons at the synapse"
                    },
                    "f1507b8f-d996-f55b-b201-5565213e9632": {
                        "word": "serotonin",
                        "def": "a neurotransmitter found in the brain that is associated with sleep"
                    },
                    "0a23baec-7b71-edd1-fbe3-aa2acaac22a8": {
                        "word": "somatic nervous system",
                        "def": "the motor neurons of this system carry signals from the CNS to the skeletal muscles; mostly voluntary control."
                    },
                    "3a001eba-2e6f-5979-109c-51bef84e6c57": {
                        "word": "autonomic nervous system",
                        "def": "the motor neurons of this system carry signals from the CNS to organs such as heart, intestines and glands; mostly involuntatry control."
                    },
                    "2f6a86db-b348-48ce-2e08-9926d889f4c8": {
                        "word": "sympathetic division",
                        "def": "division of the autonomic system that increases the general level of activity in the body"
                    },
                    "b8efc615-aede-aeaa-4005-4a0feeca7a54": {
                        "word": "parasympathetic division",
                        "def": "division of the autonomic system that decreases the activity or relaxes the body"
                    },
                    "a83f1d2f-3a20-9db9-e735-efb98f8da869": {
                        "word": "Cerebrum",
                        "def": "largest and most complex part of the brain; divided into two halves."
                    },
                    "28fb4632-8f57-450e-7c8a-e646cab86d0c": {
                        "word": "Cerebellum",
                        "def": "located below the cerebrum near the top of the spinal cord; coordinates body movements."
                    },
                    "db568e99-a16c-665b-4ca2-c5337e8055ca": {
                        "word": "Thalamus",
                        "def": "located in the middle of the brain, regulated and sorts information going to and coming from the cerebral cortex"
                    },
                    "f0652499-2e4d-5182-43b2-5f4654cc3db9": {
                        "word": "Cerebral cortex",
                        "def": "The outer region of the cerebrum' contains 10 billion neurons and is divided into different lobes controlling different functions."
                    },
                    "d77b0c88-97a1-4466-912b-eedbb5ef32b3": {
                        "word": "medulla oblangata",
                        "def": "part of the brain stem which controls breathing and regulated sleep"
                    },
                    "0631861d-2969-fcaa-bc59-90e9435c8597": {
                        "word": "Hippocampus",
                        "def": "is associated mainly with memory, in particular long-term memory."
                    },
                    "6145e62a-78e6-160d-2685-ac6dd1156fc0": {
                        "word": "Prefrontal cortex",
                        "def": "located at the front of the frontal lobe; associated with planning, and greatly contributes to personality development."
                    },
                    "7a4386d1-4220-b8e3-61e8-af8560b7f2ac": {
                        "word": "Temporal Lobe",
                        "def": "lobe associated with hearing and smell"
                    },
                    "e0403007-fc31-8b0c-f928-6b5e3485278e": {
                        "word": "Parietal Lobe",
                        "def": "lobe associated with taste, reading skills, sense of touch"
                    },
                    "29c3304a-f4f7-65f1-aeb8-27a8d3a84e29": {
                        "word": "Occipital Lobe",
                        "def": "lobe associated with vision"
                    },
                    "fe007040-f1d8-bdfa-4b4d-118e728f02e3": {
                        "word": "Corpus Callosum",
                        "def": "a band of more than 100 million nerve fibers that connect the right and left hemispheres of the brain and supports communication between the two hemispheres."
                    },
                    "cbad0769-3fbd-deed-886d-ce5dcd51928e": {
                        "word": "Amygdala",
                        "def": "the center for emotions, emotional behavior, and motivation."
                    },
                    "87c1254e-65de-c60c-223f-5ef53c377b49": {
                        "word": "hypothalamus",
                        "def": "part of the brain that helps to regulate body temperature, blood pressure, hunger, thirst and emotions."
                    },
                    "90f072fc-f979-d8d5-ef76-39d551b877ea": {
                        "word": "Peristalsis",
                        "def": "series of muscle contractions that push the bolus down the esophagus and continue to move digested food through the intestines."
                    },
                    "6e381a95-3705-e6f1-0126-8be7a26cb986": {
                        "word": "Bolus",
                        "def": "chewed up clump of food about to be swallowed."
                    },
                    "16c93844-2d6d-b940-5888-b547e8d2315e": {
                        "word": "Mechanical digestion",
                        "def": "Also known as mastication- chewing of food to break into down into smaller pieces with greater surface area."
                    },
                    "e24f459c-0a03-3b38-8979-2cec36108ac1": {
                        "word": "Chemical digestion",
                        "def": "The action of enzymes breaking down macromolecules into smaller units and/or monomers."
                    },
                    "45a2d600-f99b-d984-1154-73224277c2d5": {
                        "word": "ingestion",
                        "def": "The act of eating or drinking"
                    },
                    "b5a59c59-eae2-133a-da1b-0b36ec519b5c": {
                        "word": "elimination",
                        "def": "the removal of all undigested material from the large intestines (as feces)"
                    },
                    "34003cc6-2923-ec90-7bb4-fed7f7344584": {
                        "word": "alimentary canal",
                        "def": "the tube in the body where digestion takes place"
                    },
                    "21bdb0fa-afd5-6981-094a-2fd6e81b3a72": {
                        "word": "pharynx",
                        "def": "the upper portion of the throat"
                    },
                    "9ad4e70b-c353-f00c-8f6d-8b9284e12f74": {
                        "word": "esophagus",
                        "def": "the long tube that connects the mouth with the stomach; carries out peristalsis."
                    },
                    "7aa7fe13-d203-11f3-4f64-d30b5f6b5916": {
                        "word": "villi",
                        "def": "the folds of the small intestines; used to create greater surface area for absorption of digested nutrients."
                    },
                    "58e952d7-0468-e29b-5a72-3e4ec72e0703": {
                        "word": "pancreas",
                        "def": "organ that is important for both regulating blood sugars (hormones) and secreting digestive enzymes (lipase, amylase, protease)"
                    },
                    "31ae2551-4583-aa02-f1cd-2462976a1497": {
                        "word": "gallbladder",
                        "def": "stores bile and releases it into the small intestine"
                    },
                    "e2e512aa-63eb-36c7-31a7-acb898c41480": {
                        "word": "bile",
                        "def": "contains no enzymes, but is a chemical substance (similar to a detergent) that separates small fat molecules and prevents them from clumping; increases rate of digestion."
                    },
                    "31556a0c-7b21-210f-a1bb-ba0c7a09775e": {
                        "word": "vitamins",
                        "def": "organic molecules that play a role in many processes in the body such as metabolism of food (assists enzymes work better)."
                    },
                    "c85fafb1-3554-88f1-4a69-67a88fe5340e": {
                        "word": "Minerals",
                        "def": "inorganic nutrients that play various roles in the body. examples include iron, iodine and calcium"
                    }
                }
            }
          },
          ids: ['25c7d217-712a-7e57-c7dc-b384a0bf0be0','0b55e668-10ea-d648-43ed-230a164b5754','18ae2004-7ca3-3741-497f-7ce23d00880c']
        },
        default_image: 7,
        img_num: 7
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  change_todo (state, update) {
    state.menu.todos = update
  },
  add_streak(state) {
    state.menu.num_streak++
  },
  toggle_drag(state) {
    let new_op = !state.drag_op.disabled
    state.drag_op = {...state.drag_op, disabled: new_op}
  },
  set_drag_grid(state, update) {
    state.menu.drag_grid = JSON.parse(JSON.stringify(update))
  },
  add_study_set(state, update) {
    state.study_sets.sets = {...state.study_sets.sets, [update.uuid]: update.set}
    state.study_sets.ids.push(update.uuid)
  },
  change_set(state, update) {
    state.study_sets.sets[update.uuid].set = {...update.words};
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  // increment: ({ commit }) => commit('increment'),
  // decrement: ({ commit }) => commit('decrement'),
  // incrementIfOdd ({ commit, state }) {
  //   if ((state.count + 1) % 2 === 0) {
  //     commit('increment')
  //   }
  // },
  // incrementAsync ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       commit('increment')
  //       resolve()
  //     }, 1000)
  //   })
  // }
}

// getters are functions
const getters = {
  // evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
})