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
                    "Proton": "atomic particle with a positive charge, found in the nucleus of an atom",
                    "electron": "atomic particle with a negative charge orbiting the nucleus",
                    "neutron": "atomic particle without a charge, found in the nucleus of an atom",
                    "Bohr Model": "shows the predicted location of electrons orbiting the nucleus",
                    "atomic number": "consists of the total number of protons in the nucleus of an atom",
                    "subscript": "a number found at the base of the element symbol which indicates the total number of atoms of that element in a chemical formula",
                    "coefficient": "a number found in front of a chemical formula indicates the number of molecules",
                    "orbital": "a location where electrons are found; a pattern surrounding the nucleus; associated with energy of the electron",
                    "valence electron": "outer most electrons that are associated with bonding",
                    "Lewis dot diagram": "a diagram that shows ONLY the valence electrons of an atom",
                    "ionic bond": "results when atoms which have lost or gained electrons become charged and attracted to one another",
                    "cation": "ions with a positive charge that results when electrons are LOST",
                    "anion": "ions with a negative charge that results when electrons are GAINED",
                    "covalent bond": "the sharing of electrons between two or more atoms",
                    "Organic molecule": "composed of carbon as a backbone bonded with hydrogen and possibly oxygen and nitrogen attached.",
                    "Carbohydrate": "contains C, H, O and mainly functions as energy sources.",
                    "lipid": "class of molecules that is water insoluble and stores a great amount of energy.",
                    "triglyceride": "composed of glycerol (3 carbons) and 3 chains of fatty acids. Triglycerides are hydrophobic.",
                    "monosaccharide": "single sugar such as glucose, galactose or fructose",
                    "disaccharide": "two units of monosaccharides bonded together such as lactose or sucrose",
                    "polysaccharide": "long chains of monosaccharides (glucose) stored in a water insoluble form for energy storage or structural purposes.",
                    "steroids": "ring structured lipids that serve various functions including hormones and cholesterol",
                    "monomer": "single unit",
                    "polymer": "many units (often repeating)",
                    "polymerization": "the process of building a polymer from monomers. Example would be to build a protein from amino acids.",
                    "dehydration synthesis": "a reaction in which two monomers are linked together by a bond that involves losing an H+ and an OH- group to form water.",
                    "Hydrolysis": "a reaction in which a bond between two monomers is broken by the addition of water (H+ and OH-).",
                    "cellulose": "a polysaccharide that is composed of long compacted chains of glucose; not digested in humans",
                    "glycogen": "a branched polysaccharide composed of glucose and the main storage for glucose in animals",
                    "starch": "a branched polysaccharide composed of glucose and the main storage for glucose in plants",
                    "saturated fat": "a fatty acid (chain) that is composed of single bonds between carbon with a maximum # of hydrogen atoms bonded; solid at room temperature and found in animals.",
                    "unsaturated fat": "a fatty acid (chain) that is composed of one or more double bonds between carbon; liquid at room temperature and found in plant sources.",
                    "phospholipid": "makes up the structure of the cell membrane",
                    "amino acid": "the monomer for protein; 20 different amino acids combine to produce unique proteins of varying sizes and shapes",
                    "enzyme": "a protein molecule that lowers activation energy required for chemical reactions to take place by de-stabilizing bonds or by bringing molecules closer together.",
                    "Activation energy": "the amount of energy or energy barrier that reactants must overcome to achieve a chemical reaction. (Enzymes essentially lower this)",
                    "decomposition": "When an enzyme is used to break apart a macromolecule into smaller subunits (possibly into monomers)",
                    "synthesis": "When an enzyme is used to assemble two substrate molecules.",
                    "substrate": "the molecule (s) that come in contact with an enzyme. These are specific to each enzyme.",
                    "catalyst": "Anything that speeds up a rate. In this case, an enzyme is a catalyst",
                    "denature": "This is when the 3D shape of a protein is destroyed due to an environmental factor such as acids and bases or temperature.",
                    "unicellular": "a single celled organism.",
                    "multicellular": "an organisms composed of more than one cell. As the organism becomes more complex the cells are organised into tissues.",
                    "prokaryotic": "Refers to a bacterium.",
                    "eukaryotic": "Refers to a cell that has a nucleus and various organelles. Examples are plant and animal cells.",
                    "chloroplast": "Green, oval structure inside any cell that photosynthesizes. (the site of the process)",
                    "photosynthesis": "A biochemical reaction involving the conversion of carbon dioxide and water into glucose and oxygen.",
                    "cell wall": "The outer layer surrounding cells. In plants it is made of cellulose, in bacteria it is made of another substance. It's function is to give structural support.",
                    "vacuole": "A defined space within a cell. In plants, a central vacuole is important for storing water.",
                    "tissue": "A group of similar cells that are attached and perform a specific function.",
                    "cell theory": "Three statements about the origin of cells and the basis of all living things.",
                    "mitosis": "A four step process that separates the chromosomes in the nucleus of a cell during cell division.",
                    "lipid bilayer": "The structure of the cell membrane enclosing all living cells; including bacteria. It is a two layer 'sandwich' of phospholipids.",
                    "hydrophilic": "Any molecule that can bond with water. These are polar, having a charge.",
                    "hydrophobic": "Any molcule that repels water. A long chain of carbon bonded only with hydrogen is an example.",
                    "permeability": "The ability of something to \"permeate\" or pass through.",
                    "polarity": "A molecule having a negative end and a positive end due to unequal sharing of electrons.",
                    "diffusion": "A process where particles/atoms/ions/molecules move around and eventually reach even distribution within an environment. Moving from high to low concentration.",
                    "surface area": "The total surface that surrounds an object. In a cell the surface area would be represented by the cell membrane enclosing the cell.",
                    "osmosis": "The process where water spreads out into the environment. Water will move from areas of high concentration to low concentration.",
                    "hypertonic": "A solution that contains a very high concentration of a solute (in comparison to another solution, such as a cell)",
                    "hypotonic": "A solution that contains a lower concentration of a solute compared to that of another solution.",
                    "isotonic": "A solution that contains an equal amount solute as compared to another solution.",
                    "facilitated diffusion": "A process of transport into a cell involving passage through a transport or channel protein.",
                    "active transport": "A process of transport that involves ATP energy input to move substances against diffusion involving protein transport.",
                    "endocytosis": "A process requiring ATP that involves the cell membrane wrapping around substances and creating a vesicle. \"Cell eating\" or \"bulk movement into the cell\"",
                    "exocytosis": "A process requiring ATP that involves the cell membrane fusing with a vesicle inside the cell and releasing the contents out of the cell. \"bulk movement out of the cell\"",
                    "nucleus": "An organelle that houses DNA",
                    "mitochondria": "An organelle where cellular respiration takes place.",
                    "endoplasmic reticulum": "An organelle that coordinates the movement of protein within the cell's cytoplasm.",
                    "protein synthesis": "The process of producing protein involving DNA, RNA, amino acids and ribosomes.",
                    "golgi body/apparatus": "An organelle that performs changes to and transport of proteins.",
                    "hormone": "A messenger molecule that is released from certain cells and will target other cells in order to cause changes within those cells.",
                    "ribosome": "An organelle found in all cells that is the site for protein production/synthesis.",
                    "Lysosome": "A vesicle in the cytoplasm that contains digestive enzymes to break down invading cells or worn out cell parts.",
                    "anatomy": "Deals with the structure (morphology- shape) of the body and its parts, in other words, what things are called and what they look like",
                    "Physiology": "Studies the function of anatomical parts or asks the question, \"how do organs work\"? What is their job?",
                    "organ": "Consists of several tissues that together perform a specific task",
                    "organ system": "Consists of multiple organs that together perform a vital body function",
                    "Integumentary system": "Covers the body and protects it from injury, infection, excessive heat or cold and drying out",
                    "Skeletal system": "Provides the body support, protects certain organs such as the brain and lungs, and works with the muscular system in body movements",
                    "Muscular system": "Enables body movement and facial expressions essential to human communication",
                    "Nervous system": "Coordinates body's activities by detecting stimuli and directing the body's responses",
                    "Digestive system": "Ingests food, breaks it down into smaller chemical units for use by the body, and eliminates undigested material",
                    "Circulatory system": "Delivers oxygen and nutrients to body cells and transports waste products to excretory organs",
                    "Respiratory system": "Exchanges gases with the environment",
                    "Endocrine system": "Secretes hormones that affect the functions of target cells, and thereby regulates the activities of the other organ systems",
                    "Lymphatic system": "Supports function of the circulatory system by returning fluid to blood vessels near the heart; also functions as part of the immune system",
                    "Immune system": "Defends body against infections and cancer cells",
                    "Excretory system": "Removes waste products from the body and regulates the chemical makeup of the blood",
                    "Reproductive system": "Produces gametes; the female system also provides the organs needed to support a developing embryo",
                    "epithelial tissue": "Sheets of cells that are closely packed and cover the entire surface of your body and form the lining of your internal organs",
                    "connective tissue": "This tissue holds together and supports other tissues; also cushions, insulates and connects organs",
                    "cartilage": "A type of connective tissue that lubricates bones and provides cushion",
                    "nervous tissue": "Tissue that forms the communication system that makes the behavior possible",
                    "skeletal muscle": "Voluntary muscle tissue that is attached to bone and allows movement of the body",
                    "cardiac muscle": "Involuntary muscle tissue that is used to keep your heart pumping",
                    "smooth muscle": "Involuntary muscle tissue that provide support and movement within organs",
                    "homeostasis": "maintaining a stable internal environment",
                    "interstitial fluid": "an aqueous solution that makes up th internal environment surrounding cells/tissues",
                    "epidermis": "the outermost layer of skin composed of various types of specialised cells; constant renewal of these cells as they die",
                    "glucagon": "targets muscle and liver cells and communicates to break down glycogen and release glucose into the bloodstream",
                    "insulin": "targets muscle and liver cells and communicates to absorb/remove glucose from the bloodstream",
                    "feedback loop": "A negative response to return conditions back to normal; negative meaning the response is in the opposite direction of the change",
                    "CNS": "Central nervous system composed of the brain and spinal cord.",
                    "PNS": "Peripheral nervous system composed of sensory and motor neurons.",
                    "Stimulus": "Information about an environmental change; collected by various receptors.",
                    "Receptor": "collects information from the internal and external environment (pain, thermo, chemo, and photo are examples)",
                    "Effector": "an organ or cell that acts in response to a stimulus.",
                    "Sensory neurons": "neurons that carry information about stimuli to the CNS",
                    "Integration": "occurs when the CNS interprets the sensory neurons through coordination within interneurons and relays this to the motor neurons.",
                    "Interneurons": "neurons located only within the CNS",
                    "Motor neurons": "neurons that carry signals away from the CNS to a muscle or gland",
                    "Reflex arc": "receptor to sensory neuron to interneuron to motor neuron (pathway)",
                    "thermoreceptor": "found in the skin and certain internal organs which detects heat and cold",
                    "dopamine": "a neurotransmitter found in the brain involved in chemical communication between neurons at the synapse",
                    "serotonin": "a neurotransmitter found in the brain that is associated with sleep",
                    "somatic nervous system": "the motor neurons of this system carry signals from the CNS to the skeletal muscles; mostly voluntary control.",
                    "autonomic nervous system": "the motor neurons of this system carry signals from the CNS to organs such as heart, intestines and glands; mostly involuntatry control.",
                    "sympathetic division": "division of the autonomic system that increases the general level of activity in the body",
                    "parasympathetic division": "division of the autonomic system that decreases the activity or relaxes the body",
                    "Cerebrum": "largest and most complex part of the brain; divided into two halves.",
                    "Cerebellum": "located below the cerebrum near the top of the spinal cord; coordinates body movements.",
                    "Thalamus": "located in the middle of the brain, regulated and sorts information going to and coming from the cerebral cortex",
                    "Cerebral cortex": "The outer region of the cerebrum' contains 10 billion neurons and is divided into different lobes controlling different functions.",
                    "medulla oblangata": "part of the brain stem which controls breathing and regulated sleep",
                    "Hippocampus": "is associated mainly with memory, in particular long-term memory.",
                    "Prefrontal cortex": "located at the front of the frontal lobe; associated with planning, and greatly contributes to personality development.",
                    "Temporal Lobe": "lobe associated with hearing and smell",
                    "Parietal Lobe": "lobe associated with taste, reading skills, sense of touch",
                    "Occipital Lobe": "lobe associated with vision",
                    "Corpus Callosum": "a band of more than 100 million nerve fibers that connect the right and left hemispheres of the brain and supports communication between the two hemispheres.",
                    "Amygdala": "the center for emotions, emotional behavior, and motivation.",
                    "hypothalamus": "part of the brain that helps to regulate body temperature, blood pressure, hunger, thirst and emotions.",
                    "Peristalsis": "series of muscle contractions that push the bolus down the esophagus and continue to move digested food through the intestines.",
                    "Bolus": "chewed up clump of food about to be swallowed.",
                    "Mechanical digestion": "Also known as mastication- chewing of food to break into down into smaller pieces with greater surface area.",
                    "Chemical digestion": "The action of enzymes breaking down macromolecules into smaller units and/or monomers.",
                    "ingestion": "The act of eating or drinking",
                    "elimination": "the removal of all undigested material from the large intestines (as feces)",
                    "alimentary canal": "the tube in the body where digestion takes place",
                    "pharynx": "the upper portion of the throat",
                    "esophagus": "the long tube that connects the mouth with the stomach; carries out peristalsis.",
                    "villi": "the folds of the small intestines; used to create greater surface area for absorption of digested nutrients.",
                    "pancreas": "organ that is important for both regulating blood sugars (hormones) and secreting digestive enzymes (lipase, amylase, protease)",
                    "gallbladder": "stores bile and releases it into the small intestine",
                    "bile": "contains no enzymes, but is a chemical substance (similar to a detergent) that separates small fat molecules and prevents them from clumping; increases rate of digestion.",
                    "vitamins": "organic molecules that play a role in many processes in the body such as metabolism of food (assists enzymes work better).",
                    "Minerals": "inorganic nutrients that play various roles in the body. examples include iron, iodine and calcium"
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
  add_word(state, update) {
    state.study_sets.sets[update.uuid].set = assign({},state.study_sets.sets[update.uuid].set,update.words)
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
  // plugins: [createPersistedState()]
})