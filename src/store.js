import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from './plugins/SaveState'

import assign from 'lodash.assign'

Vue.use(Vuex)

function uuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

const helpers = {
  update_practise(state,update) {
      Vue.set(state.study_sets.sets[update.uuid],'practise',JSON.parse(JSON.stringify(state.study_sets.sets[update.uuid].set)))
  }
}


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
              practise: {
                  "7dff3ffa-f03a-ed2b-f902-336f23c071ce": {
                        "word": "Activation energy",
                        "def": "the amount of energy or energy barrier that reactants must overcome to achieve a chemical reaction. (Enzymes essentially lower this)",
                        "star": false,
                        "correctness": 0
                    },
                    "9bdd391f-5b40-53ad-f28c-84a77c97d7e5": {
                        "word": "active transport",
                        "def": "A process of transport that involves ATP energy input to move substances against diffusion involving protein transport.",
                        "star": false,
                        "correctness": 0
                    },
                    "f4eea8d9-9218-663c-27c8-e9dfb2274987": {
                        "word": "alimentary canal",
                        "def": "the tube in the body where digestion takes place",
                        "star": false,
                        "correctness": 0
                    },
                    "8d269869-7b21-a5e2-f842-2c14704efb80": {
                        "word": "amino acid",
                        "def": "the monomer for protein; 20 different amino acids combine to produce unique proteins of varying sizes and shapes",
                        "star": false,
                        "correctness": 0
                    }
              },
              set: {
                  "7dff3ffa-f03a-ed2b-f902-336f23c071ce": {
                        "word": "Activation energy",
                        "def": "the amount of energy or energy barrier that reactants must overcome to achieve a chemical reaction. (Enzymes essentially lower this)",
                        "star": false,
                        "correctness": 0
                    },
                    "9bdd391f-5b40-53ad-f28c-84a77c97d7e5": {
                        "word": "active transport",
                        "def": "A process of transport that involves ATP energy input to move substances against diffusion involving protein transport.",
                        "star": false,
                        "correctness": 0
                    },
                    "f4eea8d9-9218-663c-27c8-e9dfb2274987": {
                        "word": "alimentary canal",
                        "def": "the tube in the body where digestion takes place",
                        "star": false,
                        "correctness": 0
                    },
                    "8d269869-7b21-a5e2-f842-2c14704efb80": {
                        "word": "amino acid",
                        "def": "the monomer for protein; 20 different amino acids combine to produce unique proteins of varying sizes and shapes",
                        "star": false,
                        "correctness": 0
                    }
              }            
            },
            '0b55e668-10ea-d648-43ed-230a164b5754': {
              image: 6,
              description: 'This set helps you learn country names.',
              name: 'country names',
              practise: {},
              set: {}            
            },
            "18ae2004-7ca3-3741-497f-7ce23d00880c": {
                "image": 4,
                "description": "bio",
                "name": "bio",
                practise: {
                    "7dff3ffa-f03a-ed2b-f902-336f23c071ce": {
                        "word": "Activation energy",
                        "def": "the amount of energy or energy barrier that reactants must overcome to achieve a chemical reaction. (Enzymes essentially lower this)",
                        "star": false,
                        "correctness": 0
                    },
                    "9bdd391f-5b40-53ad-f28c-84a77c97d7e5": {
                        "word": "active transport",
                        "def": "A process of transport that involves ATP energy input to move substances against diffusion involving protein transport.",
                        "star": false,
                        "correctness": 0
                    },
                    "f4eea8d9-9218-663c-27c8-e9dfb2274987": {
                        "word": "alimentary canal",
                        "def": "the tube in the body where digestion takes place",
                        "star": false,
                        "correctness": 0
                    },
                    "8d269869-7b21-a5e2-f842-2c14704efb80": {
                        "word": "amino acid",
                        "def": "the monomer for protein; 20 different amino acids combine to produce unique proteins of varying sizes and shapes",
                        "star": false,
                        "correctness": 0
                    },
                    "bd9c96af-8fb6-3c86-9427-3da49ddf7b74": {
                        "word": "Amygdala",
                        "def": "the center for emotions, emotional behavior, and motivation.",
                        "star": false,
                        "correctness": 0
                    },
                    "33b3ab1e-e2d6-18be-d93c-c9bcf613586e": {
                        "word": "anatomy",
                        "def": "Deals with the structure (morphology- shape) of the body and its parts, in other words, what things are called and what they look like",
                        "star": false,
                        "correctness": 0
                    },
                    "8b076d3f-20b6-216e-607d-64d3e1c10271": {
                        "word": "anion",
                        "def": "ions with a negative charge that results when electrons are GAINED",
                        "star": false,
                        "correctness": 0
                    },
                    "a1322b84-e571-bd59-d2f0-95f625c0c7ff": {
                        "word": "atomic number",
                        "def": "consists of the total number of protons in the nucleus of an atom",
                        "star": false,
                        "correctness": 0
                    },
                    "278dcbf3-a669-a5df-73a5-695a53145ee4": {
                        "word": "autonomic nervous system",
                        "def": "the motor neurons of this system carry signals from the CNS to organs such as heart, intestines and glands; mostly involuntatry control.",
                        "star": false,
                        "correctness": 0
                    },
                    "012cdc6c-2276-cdb7-ce85-199236883126": {
                        "word": "bile",
                        "def": "contains no enzymes, but is a chemical substance (similar to a detergent) that separates small fat molecules and prevents them from clumping; increases rate of digestion.",
                        "star": false,
                        "correctness": 0
                    },
                    "7ab09700-5d0d-14d1-6cc4-f21c2a43a5ee": {
                        "word": "Bohr Model",
                        "def": "shows the predicted location of electrons orbiting the nucleus",
                        "star": false,
                        "correctness": 0
                    },
                    "312fb382-bb68-dbcd-9350-708e66c44ab0": {
                        "word": "Bolus",
                        "def": "chewed up clump of food about to be swallowed.",
                        "star": false,
                        "correctness": 0
                    },
                    "db8e96ff-7bfc-dc03-bf8e-8301590d62d4": {
                        "word": "Carbohydrate",
                        "def": "contains C, H, O and mainly functions as energy sources.",
                        "star": false,
                        "correctness": 0
                    },
                    "3d822ab2-ab23-290e-2a42-755720d5041b": {
                        "word": "cardiac muscle",
                        "def": "Involuntary muscle tissue that is used to keep your heart pumping",
                        "star": false,
                        "correctness": 0
                    },
                    "3daf299a-69de-41dd-ef9b-67b78bd36e0f": {
                        "word": "cartilage",
                        "def": "A type of connective tissue that lubricates bones and provides cushion",
                        "star": false,
                        "correctness": 0
                    },
                    "be6a782e-8188-d2ad-ac98-5906669c844f": {
                        "word": "catalyst",
                        "def": "Anything that speeds up a rate. In this case, an enzyme is a catalyst",
                        "star": false,
                        "correctness": 0
                    },
                    "79c6bdf4-90ab-e89b-5814-5a7ec31836e9": {
                        "word": "cation",
                        "def": "ions with a positive charge that results when electrons are LOST",
                        "star": false,
                        "correctness": 0
                    },
                    "d8997328-a530-c035-4b01-3fdb078006e1": {
                        "word": "cell theory",
                        "def": "Three statements about the origin of cells and the basis of all living things.",
                        "star": false,
                        "correctness": 0
                    },
                    "c64212c4-5fb6-9dfa-a7a2-28f6f0cad680": {
                        "word": "cell wall",
                        "def": "The outer layer surrounding cells. In plants it is made of cellulose, in bacteria it is made of another substance. It's function is to give structural support.",
                        "star": false,
                        "correctness": 0
                    },
                    "6c912ee1-c85b-5cf8-2752-2bd01cc00a06": {
                        "word": "cellulose",
                        "def": "a polysaccharide that is composed of long compacted chains of glucose; not digested in humans",
                        "star": false,
                        "correctness": 0
                    },
                    "55cd2a0f-6082-94bc-e66e-dfa494dad5cd": {
                        "word": "Cerebellum",
                        "def": "located below the cerebrum near the top of the spinal cord; coordinates body movements.",
                        "star": false,
                        "correctness": 0
                    },
                    "4ad83175-46c4-1c8c-8c34-15bb862a557d": {
                        "word": "Cerebral cortex",
                        "def": "The outer region of the cerebrum' contains 10 billion neurons and is divided into different lobes controlling different functions.",
                        "star": false,
                        "correctness": 0
                    },
                    "6960cb42-c5ce-0e34-c5f2-11e55d026f59": {
                        "word": "Cerebrum",
                        "def": "largest and most complex part of the brain; divided into two halves.",
                        "star": false,
                        "correctness": 0
                    },
                    "d0b239fe-7d88-19b3-8609-3cdc9aa09bb1": {
                        "word": "Chemical digestion",
                        "def": "The action of enzymes breaking down macromolecules into smaller units and/or monomers.",
                        "star": false,
                        "correctness": 0
                    },
                    "f3d89726-ff04-9633-ab75-ae424ef2d4a5": {
                        "word": "chloroplast",
                        "def": "Green, oval structure inside any cell that photosynthesizes. (the site of the process)",
                        "star": false,
                        "correctness": 0
                    },
                    "a5cd0b7d-714e-8cb6-27ff-61c3a690b6b9": {
                        "word": "Circulatory system",
                        "def": "Delivers oxygen and nutrients to body cells and transports waste products to excretory organs",
                        "star": false,
                        "correctness": 0
                    },
                    "f1bc9f29-0fba-4840-fd12-db1043aac5cc": {
                        "word": "CNS",
                        "def": "Central nervous system composed of the brain and spinal cord.",
                        "star": false,
                        "correctness": 0
                    },
                    "5176fbc0-a918-ba37-b2f4-0a4bb18abfc9": {
                        "word": "coefficient",
                        "def": "a number found in front of a chemical formula indicates the number of molecules",
                        "star": false,
                        "correctness": 0
                    },
                    "93bf9c2f-cdf6-79e8-3aaf-10550cc18aa3": {
                        "word": "connective tissue",
                        "def": "This tissue holds together and supports other tissues; also cushions, insulates and connects organs",
                        "star": false,
                        "correctness": 0
                    },
                    "d78c821e-5ef8-6d25-c3af-eeb6446bdbec": {
                        "word": "Corpus Callosum",
                        "def": "a band of more than 100 million nerve fibers that connect the right and left hemispheres of the brain and supports communication between the two hemispheres.",
                        "star": false,
                        "correctness": 0
                    },
                    "36486341-ca5e-58d8-c992-a080b04c0873": {
                        "word": "covalent bond",
                        "def": "the sharing of electrons between two or more atoms",
                        "star": false,
                        "correctness": 0
                    },
                    "c770ac4b-5681-f132-8425-4a87a1268861": {
                        "word": "decomposition",
                        "def": "When an enzyme is used to break apart a macromolecule into smaller subunits (possibly into monomers)",
                        "star": false,
                        "correctness": 0
                    },
                    "c66cbb49-75e8-91ab-c278-d271b612d4c9": {
                        "word": "dehydration synthesis",
                        "def": "a reaction in which two monomers are linked together by a bond that involves losing an H+ and an OH- group to form water.",
                        "star": false,
                        "correctness": 0
                    },
                    "75ad3b78-26d5-1ee5-b606-39e7d5dfb95f": {
                        "word": "denature",
                        "def": "This is when the 3D shape of a protein is destroyed due to an environmental factor such as acids and bases or temperature.",
                        "star": false,
                        "correctness": 0
                    },
                    "416de144-c3fd-0022-93ec-fc3f586cd275": {
                        "word": "diffusion",
                        "def": "A process where particles/atoms/ions/molecules move around and eventually reach even distribution within an environment. Moving from high to low concentration.",
                        "star": false,
                        "correctness": 0
                    },
                    "d8612e7d-add7-25b0-31fd-4b6f339f0f10": {
                        "word": "Digestive system",
                        "def": "Ingests food, breaks it down into smaller chemical units for use by the body, and eliminates undigested material",
                        "star": false,
                        "correctness": 0
                    },
                    "ea8d9ff5-6b8f-a568-ee1d-e006a9e6f987": {
                        "word": "disaccharide",
                        "def": "two units of monosaccharides bonded together such as lactose or sucrose",
                        "star": false,
                        "correctness": 0
                    },
                    "b1958abf-7c4c-45a6-d414-a574b150f144": {
                        "word": "dopamine",
                        "def": "a neurotransmitter found in the brain involved in chemical communication between neurons at the synapse",
                        "star": false,
                        "correctness": 0
                    },
                    "450fbcbd-cb26-4dfb-5a8f-3444c3ae5137": {
                        "word": "Effector",
                        "def": "an organ or cell that acts in response to a stimulus.",
                        "star": false,
                        "correctness": 0
                    },
                    "6c703b29-ad23-fbec-7264-7acaf6242241": {
                        "word": "electron",
                        "def": "atomic particle with a negative charge orbiting the nucleus",
                        "star": false,
                        "correctness": 0
                    },
                    "63722fa9-217f-86f5-c59e-07392dd6abfd": {
                        "word": "elimination",
                        "def": "the removal of all undigested material from the large intestines (as feces)",
                        "star": false,
                        "correctness": 0
                    },
                    "d5292e2c-eb16-e924-f485-427441c5962d": {
                        "word": "Endocrine system",
                        "def": "Secretes hormones that affect the functions of target cells, and thereby regulates the activities of the other organ systems",
                        "star": false,
                        "correctness": 0
                    },
                    "a5285d77-500f-adf1-cb66-60c3e0789d18": {
                        "word": "endocytosis",
                        "def": "A process requiring ATP that involves the cell membrane wrapping around substances and creating a vesicle. \"Cell eating\" or \"bulk movement into the cell\"",
                        "star": false,
                        "correctness": 0
                    },
                    "376b4a8c-d9f8-d11f-e252-9b88cf154191": {
                        "word": "endoplasmic reticulum",
                        "def": "An organelle that coordinates the movement of protein within the cell's cytoplasm.",
                        "star": false,
                        "correctness": 0
                    },
                    "53295fe4-b105-636d-029f-47b8f0ca5eca": {
                        "word": "enzyme",
                        "def": "a protein molecule that lowers activation energy required for chemical reactions to take place by de-stabilizing bonds or by bringing molecules closer together.",
                        "star": false,
                        "correctness": 0
                    },
                    "cff3c1f8-c914-86ed-9ed0-51ec3cb4748f": {
                        "word": "epidermis",
                        "def": "the outermost layer of skin composed of various types of specialised cells; constant renewal of these cells as they die",
                        "star": false,
                        "correctness": 0
                    },
                    "ca60d5b1-9fe6-2156-5dee-1ef267ebb12d": {
                        "word": "epithelial tissue",
                        "def": "Sheets of cells that are closely packed and cover the entire surface of your body and form the lining of your internal organs",
                        "star": false,
                        "correctness": 0
                    },
                    "2186fb0d-e11c-10b6-0deb-f16a3c018c1e": {
                        "word": "esophagus",
                        "def": "the long tube that connects the mouth with the stomach; carries out peristalsis.",
                        "star": false,
                        "correctness": 0
                    },
                    "1e7e46de-3737-716c-88c9-6d269b702ebc": {
                        "word": "eukaryotic",
                        "def": "Refers to a cell that has a nucleus and various organelles. Examples are plant and animal cells.",
                        "star": false,
                        "correctness": 0
                    },
                    "1bde9358-c2f5-4e36-8c4d-8c43c8e14c7d": {
                        "word": "Excretory system",
                        "def": "Removes waste products from the body and regulates the chemical makeup of the blood",
                        "star": false,
                        "correctness": 0
                    },
                    "e83dd7c3-6b49-e47b-52a1-47abdc3f0e40": {
                        "word": "exocytosis",
                        "def": "A process requiring ATP that involves the cell membrane fusing with a vesicle inside the cell and releasing the contents out of the cell. \"bulk movement out of the cell\"",
                        "star": false,
                        "correctness": 0
                    },
                    "785cd289-8d66-2d7c-4799-68d4b9ee8cc8": {
                        "word": "facilitated diffusion",
                        "def": "A process of transport into a cell involving passage through a transport or channel protein.",
                        "star": false,
                        "correctness": 0
                    },
                    "f899fb8b-4e85-5c5c-02cb-6fbdf694fb4e": {
                        "word": "feedback loop",
                        "def": "A negative response to return conditions back to normal; negative meaning the response is in the opposite direction of the change",
                        "star": false,
                        "correctness": 0
                    },
                    "fb1408ee-1084-08a4-055b-a6c6304d40d8": {
                        "word": "gallbladder",
                        "def": "stores bile and releases it into the small intestine",
                        "star": false,
                        "correctness": 0
                    },
                    "49960463-0837-11a5-dc11-c5dd87dc7158": {
                        "word": "glucagon",
                        "def": "targets muscle and liver cells and communicates to break down glycogen and release glucose into the bloodstream",
                        "star": false,
                        "correctness": 0
                    },
                    "6100eefe-519a-cd4e-2ee8-1a6791efaf7c": {
                        "word": "glycogen",
                        "def": "a branched polysaccharide composed of glucose and the main storage for glucose in animals",
                        "star": false,
                        "correctness": 0
                    },
                    "97694f48-faab-cca1-37d8-f1fe17f40d56": {
                        "word": "golgi body/apparatus",
                        "def": "An organelle that performs changes to and transport of proteins.",
                        "star": false,
                        "correctness": 0
                    },
                    "8de4484f-8754-bfe0-7744-3db3f639d4bd": {
                        "word": "Hippocampus",
                        "def": "is associated mainly with memory, in particular long-term memory.",
                        "star": false,
                        "correctness": 0
                    },
                    "a79819a4-4ff0-0139-f963-dee6ba304f74": {
                        "word": "homeostasis",
                        "def": "maintaining a stable internal environment",
                        "star": false,
                        "correctness": 0
                    },
                    "61c8992d-5951-6111-35aa-0004cab30956": {
                        "word": "hormone",
                        "def": "A messenger molecule that is released from certain cells and will target other cells in order to cause changes within those cells.",
                        "star": false,
                        "correctness": 0
                    },
                    "c60d5843-c1f0-0c84-c9d7-185a67c61577": {
                        "word": "Hydrolysis",
                        "def": "a reaction in which a bond between two monomers is broken by the addition of water (H+ and OH-).",
                        "star": false,
                        "correctness": 0
                    },
                    "916e90b0-9669-83fd-9ad6-9f615d2ba074": {
                        "word": "hydrophilic",
                        "def": "Any molecule that can bond with water. These are polar, having a charge.",
                        "star": false,
                        "correctness": 0
                    },
                    "06500efd-5042-8fb7-8b67-99bde2d9e14d": {
                        "word": "hydrophobic",
                        "def": "Any molcule that repels water. A long chain of carbon bonded only with hydrogen is an example.",
                        "star": false,
                        "correctness": 0
                    },
                    "508c2acd-e033-7cba-1a14-477b36f82104": {
                        "word": "hypertonic",
                        "def": "A solution that contains a very high concentration of a solute (in comparison to another solution, such as a cell)",
                        "star": false,
                        "correctness": 0
                    },
                    "60e0a9db-cc63-a9cd-06a7-73b1af2b3e04": {
                        "word": "hypothalamus",
                        "def": "part of the brain that helps to regulate body temperature, blood pressure, hunger, thirst and emotions.",
                        "star": false,
                        "correctness": 0
                    },
                    "357a4e05-c0aa-1ab3-12d6-0c5a53720411": {
                        "word": "hypotonic",
                        "def": "A solution that contains a lower concentration of a solute compared to that of another solution.",
                        "star": false,
                        "correctness": 0
                    },
                    "0972096c-827d-3e58-e7b0-b53dfa953887": {
                        "word": "Immune system",
                        "def": "Defends body against infections and cancer cells",
                        "star": false,
                        "correctness": 0
                    },
                    "d4edd788-c827-9555-55d8-b42f66aedb80": {
                        "word": "ingestion",
                        "def": "The act of eating or drinking",
                        "star": false,
                        "correctness": 0
                    },
                    "389c28da-321d-60ce-17c7-e901962c38bf": {
                        "word": "insulin",
                        "def": "targets muscle and liver cells and communicates to absorb/remove glucose from the bloodstream",
                        "star": false,
                        "correctness": 0
                    },
                    "a94e53ee-2873-f4f0-1770-00d5b5673120": {
                        "word": "Integration",
                        "def": "occurs when the CNS interprets the sensory neurons through coordination within interneurons and relays this to the motor neurons.",
                        "star": false,
                        "correctness": 0
                    },
                    "43de6e01-f036-d353-cf5f-3e3ec7c2c2b9": {
                        "word": "Integumentary system",
                        "def": "Covers the body and protects it from injury, infection, excessive heat or cold and drying out",
                        "star": false,
                        "correctness": 0
                    },
                    "d4fde82a-7178-4b0a-63c8-3ccda2e0b5fd": {
                        "word": "Interneurons",
                        "def": "neurons located only within the CNS",
                        "star": false,
                        "correctness": 0
                    },
                    "a7b6a86e-e6f9-d5b5-787a-8c31b0f74667": {
                        "word": "interstitial fluid",
                        "def": "an aqueous solution that makes up th internal environment surrounding cells/tissues",
                        "star": false,
                        "correctness": 0
                    },
                    "9f0afa52-6ad7-c078-890f-143edfdc14d9": {
                        "word": "ionic bond",
                        "def": "results when atoms which have lost or gained electrons become charged and attracted to one another",
                        "star": false,
                        "correctness": 0
                    },
                    "c4564271-88b4-cbc9-14a4-ea11ad4a40b0": {
                        "word": "isotonic",
                        "def": "A solution that contains an equal amount solute as compared to another solution.",
                        "star": false,
                        "correctness": 0
                    },
                    "f60cca72-e084-37df-9727-116809e058b1": {
                        "word": "Lewis dot diagram",
                        "def": "a diagram that shows ONLY the valence electrons of an atom",
                        "star": false,
                        "correctness": 0
                    },
                    "ee559b3a-b350-d2ff-ffbf-0884fa806cbf": {
                        "word": "lipid bilayer",
                        "def": "The structure of the cell membrane enclosing all living cells; including bacteria. It is a two layer 'sandwich' of phospholipids.",
                        "star": false,
                        "correctness": 0
                    },
                    "a73694b5-e30b-c537-aa82-8d07bdf9e343": {
                        "word": "lipid",
                        "def": "class of molecules that is water insoluble and stores a great amount of energy.",
                        "star": false,
                        "correctness": 0
                    },
                    "bb95e760-5c88-a8fe-414b-e84693800a49": {
                        "word": "Lymphatic system",
                        "def": "Supports function of the circulatory system by returning fluid to blood vessels near the heart; also functions as part of the immune system",
                        "star": false,
                        "correctness": 0
                    },
                    "7bca8114-96fe-2c60-bf4f-56a2fdd3e882": {
                        "word": "Lysosome",
                        "def": "A vesicle in the cytoplasm that contains digestive enzymes to break down invading cells or worn out cell parts.",
                        "star": false,
                        "correctness": 0
                    },
                    "4a235c55-c698-1aa4-518f-91666d3ab57b": {
                        "word": "Mechanical digestion",
                        "def": "Also known as mastication- chewing of food to break into down into smaller pieces with greater surface area.",
                        "star": false,
                        "correctness": 0
                    },
                    "2f48e555-2d90-5242-a475-f94e996e304c": {
                        "word": "medulla oblangata",
                        "def": "part of the brain stem which controls breathing and regulated sleep",
                        "star": false,
                        "correctness": 0
                    },
                    "f8406e1f-faa5-b2e0-c4e0-e31e2e5c88dd": {
                        "word": "Minerals",
                        "def": "inorganic nutrients that play various roles in the body. examples include iron, iodine and calcium",
                        "star": false,
                        "correctness": 0
                    },
                    "ef4d28d2-8a0c-2112-c7de-251f2791dc95": {
                        "word": "mitochondria",
                        "def": "An organelle where cellular respiration takes place.",
                        "star": false,
                        "correctness": 0
                    },
                    "31a93832-1b12-59a4-a975-bbbaead0dd00": {
                        "word": "mitosis",
                        "def": "A four step process that separates the chromosomes in the nucleus of a cell during cell division.",
                        "star": false,
                        "correctness": 0
                    },
                    "569c1d4e-47d5-4cfc-2d44-c020a0aea886": {
                        "word": "monomer",
                        "def": "single unit",
                        "star": false,
                        "correctness": 0
                    },
                    "bf5cc8b7-bdeb-2e03-f2e7-3e2aa9f6bd89": {
                        "word": "monosaccharide",
                        "def": "single sugar such as glucose, galactose or fructose",
                        "star": false,
                        "correctness": 0
                    },
                    "833c8e4e-c2c2-fc9e-a739-7dd0af2facf9": {
                        "word": "Motor neurons",
                        "def": "neurons that carry signals away from the CNS to a muscle or gland",
                        "star": false,
                        "correctness": 0
                    },
                    "ed15d269-ced7-ce8e-2553-17fd22b5dd4a": {
                        "word": "multicellular",
                        "def": "an organisms composed of more than one cell. As the organism becomes more complex the cells are organised into tissues.",
                        "star": false,
                        "correctness": 0
                    },
                    "53d9af1f-84de-78f6-4b09-8b7e3b7b0bc1": {
                        "word": "Muscular system",
                        "def": "Enables body movement and facial expressions essential to human communication",
                        "star": false,
                        "correctness": 0
                    },
                    "2c774bf9-ec83-cf02-9501-dd9d3944b516": {
                        "word": "Nervous system",
                        "def": "Coordinates body's activities by detecting stimuli and directing the body's responses",
                        "star": false,
                        "correctness": 0
                    },
                    "6eb58665-9250-9d41-0bf6-326dbee53b5d": {
                        "word": "nervous tissue",
                        "def": "Tissue that forms the communication system that makes the behavior possible",
                        "star": false,
                        "correctness": 0
                    },
                    "f1dc5b79-6901-d29e-6891-09d94afbe483": {
                        "word": "neutron",
                        "def": "atomic particle without a charge, found in the nucleus of an atom",
                        "star": false,
                        "correctness": 0
                    },
                    "480cfa81-b2c6-68a5-4bcf-bc7bfe429875": {
                        "word": "nucleus",
                        "def": "An organelle that houses DNA",
                        "star": false,
                        "correctness": 0
                    },
                    "365f6577-d114-11cc-7cf2-c47c00e6634d": {
                        "word": "Occipital Lobe",
                        "def": "lobe associated with vision",
                        "star": false,
                        "correctness": 0
                    },
                    "e8a4e008-8e94-cc82-be74-a6b5acb35bab": {
                        "word": "orbital",
                        "def": "a location where electrons are found; a pattern surrounding the nucleus; associated with energy of the electron",
                        "star": false,
                        "correctness": 0
                    },
                    "32fed770-a9b3-be41-cdc4-63e748c44437": {
                        "word": "organ system",
                        "def": "Consists of multiple organs that together perform a vital body function",
                        "star": false,
                        "correctness": 0
                    },
                    "894e68ef-4e95-d55a-3afa-dfc147f527c4": {
                        "word": "organ",
                        "def": "Consists of several tissues that together perform a specific task",
                        "star": false,
                        "correctness": 0
                    },
                    "f9772ab2-8394-c9da-c7a5-8f64de37bd5b": {
                        "word": "Organic molecule",
                        "def": "composed of carbon as a backbone bonded with hydrogen and possibly oxygen and nitrogen attached.",
                        "star": false,
                        "correctness": 0
                    },
                    "35b5e5e8-55d0-9c6e-d2f7-cc947f9cc59e": {
                        "word": "osmosis",
                        "def": "The process where water spreads out into the environment. Water will move from areas of high concentration to low concentration.",
                        "star": false,
                        "correctness": 0
                    },
                    "230b43bf-63f5-3a0d-e9b6-9e7da13a1482": {
                        "word": "pancreas",
                        "def": "organ that is important for both regulating blood sugars (hormones) and secreting digestive enzymes (lipase, amylase, protease)",
                        "star": false,
                        "correctness": 0
                    },
                    "031db7ff-fe6c-8fdb-ea1d-8e1d285fac09": {
                        "word": "parasympathetic division",
                        "def": "division of the autonomic system that decreases the activity or relaxes the body",
                        "star": false,
                        "correctness": 0
                    },
                    "5d3cb027-f6d8-6e03-6556-afe10edfb2a2": {
                        "word": "Parietal Lobe",
                        "def": "lobe associated with taste, reading skills, sense of touch",
                        "star": false,
                        "correctness": 0
                    },
                    "726cafe8-1e06-089a-ebce-eaac538d4666": {
                        "word": "Peristalsis",
                        "def": "series of muscle contractions that push the bolus down the esophagus and continue to move digested food through the intestines.",
                        "star": false,
                        "correctness": 0
                    },
                    "6812b36d-5893-0c1f-7937-52f7a53cafb3": {
                        "word": "permeability",
                        "def": "The ability of something to \"permeate\" or pass through.",
                        "star": false,
                        "correctness": 0
                    },
                    "4c3358e8-d811-30f7-f9b3-fefaf1c8bdf4": {
                        "word": "pharynx",
                        "def": "the upper portion of the throat",
                        "star": false,
                        "correctness": 0
                    },
                    "33485866-3052-a1e4-987b-588d29a18b32": {
                        "word": "phospholipid",
                        "def": "makes up the structure of the cell membrane",
                        "star": false,
                        "correctness": 0
                    },
                    "3fe7763f-2cda-ba10-412d-aed24d5e4aa4": {
                        "word": "photosynthesis",
                        "def": "A biochemical reaction involving the conversion of carbon dioxide and water into glucose and oxygen.",
                        "star": false,
                        "correctness": 0
                    },
                    "10a6199f-818a-b183-45fb-a36438d4bb01": {
                        "word": "Physiology",
                        "def": "Studies the function of anatomical parts or asks the question, \"how do organs work\"? What is their job?",
                        "star": false,
                        "correctness": 0
                    },
                    "4a48ee70-8671-155c-f984-0ea2f271680f": {
                        "word": "PNS",
                        "def": "Peripheral nervous system composed of sensory and motor neurons.",
                        "star": false,
                        "correctness": 0
                    },
                    "c2bf416b-f49d-3d31-363d-a1679407160a": {
                        "word": "polarity",
                        "def": "A molecule having a negative end and a positive end due to unequal sharing of electrons.",
                        "star": false,
                        "correctness": 0
                    },
                    "fada0fd0-db1d-16ae-40a5-6fa829475610": {
                        "word": "polymer",
                        "def": "many units (often repeating)",
                        "star": false,
                        "correctness": 0
                    },
                    "2ac6c75b-30be-bffd-40b7-7b55d9510bd6": {
                        "word": "polymerization",
                        "def": "the process of building a polymer from monomers. Example would be to build a protein from amino acids.",
                        "star": false,
                        "correctness": 0
                    },
                    "8df1ed54-174d-d4b9-f642-dc0736450384": {
                        "word": "polysaccharide",
                        "def": "long chains of monosaccharides (glucose) stored in a water insoluble form for energy storage or structural purposes.",
                        "star": false,
                        "correctness": 0
                    },
                    "d52f633a-ce9e-4be7-8887-1cbb24def215": {
                        "word": "Prefrontal cortex",
                        "def": "located at the front of the frontal lobe; associated with planning, and greatly contributes to personality development.",
                        "star": false,
                        "correctness": 0
                    },
                    "552c3b70-12cd-eaff-7e9f-efc860074560": {
                        "word": "prokaryotic",
                        "def": "Refers to a bacterium.",
                        "star": false,
                        "correctness": 0
                    },
                    "3f6382ca-634c-d875-7206-1a848746c9f1": {
                        "word": "protein synthesis",
                        "def": "The process of producing protein involving DNA, RNA, amino acids and ribosomes.",
                        "star": false,
                        "correctness": 0
                    },
                    "bf60d41f-7e4e-bcbf-1904-64997c73c7ce": {
                        "word": "Proton",
                        "def": "atomic particle with a positive charge, found in the nucleus of an atom",
                        "star": false,
                        "correctness": 0
                    },
                    "e96f6889-03fa-f705-0960-14a1e22434f9": {
                        "word": "Receptor",
                        "def": "collects information from the internal and external environment (pain, thermo, chemo, and photo are examples)",
                        "star": false,
                        "correctness": 0
                    },
                    "ee4f7f56-dcd9-c943-939d-b27b622b479a": {
                        "word": "Reflex arc",
                        "def": "receptor to sensory neuron to interneuron to motor neuron (pathway)",
                        "star": false,
                        "correctness": 0
                    },
                    "e6bd8f91-2b16-4a48-ed88-282ae3174498": {
                        "word": "Reproductive system",
                        "def": "Produces gametes; the female system also provides the organs needed to support a developing embryo",
                        "star": false,
                        "correctness": 0
                    },
                    "8247cbdb-ed2c-fdf7-0372-ca06ad5bbfc1": {
                        "word": "Respiratory system",
                        "def": "Exchanges gases with the environment",
                        "star": false,
                        "correctness": 0
                    },
                    "7c732181-ae3b-11ac-baf7-d8802f0c991a": {
                        "word": "ribosome",
                        "def": "An organelle found in all cells that is the site for protein production/synthesis.",
                        "star": false,
                        "correctness": 0
                    },
                    "f339015c-1161-11bc-dbdd-5af5a7b3706e": {
                        "word": "saturated fat",
                        "def": "a fatty acid (chain) that is composed of single bonds between carbon with a maximum # of hydrogen atoms bonded; solid at room temperature and found in animals.",
                        "star": false,
                        "correctness": 0
                    },
                    "6115dda4-545a-7eda-3b11-435f615e511e": {
                        "word": "Sensory neurons",
                        "def": "neurons that carry information about stimuli to the CNS",
                        "star": false,
                        "correctness": 0
                    },
                    "4728d73d-e208-4b13-e7bd-4ab40a0a292c": {
                        "word": "serotonin",
                        "def": "a neurotransmitter found in the brain that is associated with sleep",
                        "star": false,
                        "correctness": 0
                    },
                    "621d9ff3-b93e-fb18-0d03-967159efead2": {
                        "word": "skeletal muscle",
                        "def": "Voluntary muscle tissue that is attached to bone and allows movement of the body",
                        "star": false,
                        "correctness": 0
                    },
                    "d73c0f25-fb27-71a9-1dba-9b2b2c109dca": {
                        "word": "Skeletal system",
                        "def": "Provides the body support, protects certain organs such as the brain and lungs, and works with the muscular system in body movements",
                        "star": false,
                        "correctness": 0
                    },
                    "983851b7-83e9-a9e0-789e-1affee9fc864": {
                        "word": "smooth muscle",
                        "def": "Involuntary muscle tissue that provide support and movement within organs",
                        "star": false,
                        "correctness": 0
                    },
                    "03b51a77-d611-b821-ce42-6275d688055a": {
                        "word": "somatic nervous system",
                        "def": "the motor neurons of this system carry signals from the CNS to the skeletal muscles; mostly voluntary control.",
                        "star": false,
                        "correctness": 0
                    },
                    "0fd05806-85ab-48e3-9465-6d0e254cb882": {
                        "word": "starch",
                        "def": "a branched polysaccharide composed of glucose and the main storage for glucose in plants",
                        "star": false,
                        "correctness": 0
                    },
                    "49cf9321-1728-850e-17ce-ce967b54ef10": {
                        "word": "steroids",
                        "def": "ring structured lipids that serve various functions including hormones and cholesterol",
                        "star": false,
                        "correctness": 0
                    },
                    "ecac7d7d-cd8e-c932-78f7-7f97e95b839b": {
                        "word": "Stimulus",
                        "def": "Information about an environmental change; collected by various receptors.",
                        "star": false,
                        "correctness": 0
                    },
                    "959a808d-c048-28dd-dd06-1bf1778fa35f": {
                        "word": "subscript",
                        "def": "a number found at the base of the element symbol which indicates the total number of atoms of that element in a chemical formula",
                        "star": false,
                        "correctness": 0
                    },
                    "63b81e6b-8c2a-0fe0-fde0-800fa3f71004": {
                        "word": "substrate",
                        "def": "the molecule (s) that come in contact with an enzyme. These are specific to each enzyme.",
                        "star": false,
                        "correctness": 0
                    },
                    "45f2cb7f-f0d6-19dc-2b02-deebf982f646": {
                        "word": "surface area",
                        "def": "The total surface that surrounds an object. In a cell the surface area would be represented by the cell membrane enclosing the cell.",
                        "star": false,
                        "correctness": 0
                    },
                    "74ccc2c6-fb7f-53d2-e4bd-914604a77fd0": {
                        "word": "sympathetic division",
                        "def": "division of the autonomic system that increases the general level of activity in the body",
                        "star": false,
                        "correctness": 0
                    },
                    "a7fdbdc5-ab9d-4bff-7f30-ac273a22b60e": {
                        "word": "synthesis",
                        "def": "When an enzyme is used to assemble two substrate molecules.",
                        "star": false,
                        "correctness": 0
                    },
                    "82473f7a-3bfe-0a9b-0cd9-06cd8069ae43": {
                        "word": "Temporal Lobe",
                        "def": "lobe associated with hearing and smell",
                        "star": false,
                        "correctness": 0
                    },
                    "30f1412a-c59c-f11d-05e7-fa741738514e": {
                        "word": "Thalamus",
                        "def": "located in the middle of the brain, regulated and sorts information going to and coming from the cerebral cortex",
                        "star": false,
                        "correctness": 0
                    },
                    "adf5dbc7-2ba0-7445-0881-4020c7903121": {
                        "word": "thermoreceptor",
                        "def": "found in the skin and certain internal organs which detects heat and cold",
                        "star": false,
                        "correctness": 0
                    },
                    "9f3ee3fc-005a-bc68-e7bf-f804b0e64a15": {
                        "word": "tissue",
                        "def": "A group of similar cells that are attached and perform a specific function.",
                        "star": false,
                        "correctness": 0
                    },
                    "568145cf-56fb-7b11-7986-069b6a305c89": {
                        "word": "triglyceride",
                        "def": "composed of glycerol (3 carbons) and 3 chains of fatty acids. Triglycerides are hydrophobic.",
                        "star": false,
                        "correctness": 0
                    },
                    "6f583f21-338e-0b22-81ac-718e47b0d944": {
                        "word": "unicellular",
                        "def": "a single celled organism.",
                        "star": false,
                        "correctness": 0
                    },
                    "96948a4e-e1a4-cd89-b438-e084a9e5ab90": {
                        "word": "unsaturated fat",
                        "def": "a fatty acid (chain) that is composed of one or more double bonds between carbon; liquid at room temperature and found in plant sources.",
                        "star": false,
                        "correctness": 0
                    },
                    "0da9f235-1bbe-9a42-c7e6-48dcb064eef9": {
                        "word": "vacuole",
                        "def": "A defined space within a cell. In plants, a central vacuole is important for storing water.",
                        "star": false,
                        "correctness": 0
                    },
                    "ec67e316-8a1d-0d25-e72a-170c3fd788de": {
                        "word": "valence electron",
                        "def": "outer most electrons that are associated with bonding",
                        "star": false,
                        "correctness": 0
                    },
                    "a54263da-5279-2e96-d0c8-69c67da86dc9": {
                        "word": "villi",
                        "def": "the folds of the small intestines; used to create greater surface area for absorption of digested nutrients.",
                        "star": false,
                        "correctness": 0
                    },
                    "38a43b77-1328-6f77-000e-5fd8a7666a1f": {
                        "word": "vitamins",
                        "def": "organic molecules that play a role in many processes in the body such as metabolism of food (assists enzymes work better).",
                        "star": false,
                        "correctness": 0
                    }
                },
                "set": {
                    "7dff3ffa-f03a-ed2b-f902-336f23c071ce": {
                        "word": "Activation energy",
                        "def": "the amount of energy or energy barrier that reactants must overcome to achieve a chemical reaction. (Enzymes essentially lower this)",
                        "star": false,
                        "correctness": 0
                    },
                    "9bdd391f-5b40-53ad-f28c-84a77c97d7e5": {
                        "word": "active transport",
                        "def": "A process of transport that involves ATP energy input to move substances against diffusion involving protein transport.",
                        "star": false,
                        "correctness": 0
                    },
                    "f4eea8d9-9218-663c-27c8-e9dfb2274987": {
                        "word": "alimentary canal",
                        "def": "the tube in the body where digestion takes place",
                        "star": false,
                        "correctness": 0
                    },
                    "8d269869-7b21-a5e2-f842-2c14704efb80": {
                        "word": "amino acid",
                        "def": "the monomer for protein; 20 different amino acids combine to produce unique proteins of varying sizes and shapes",
                        "star": false,
                        "correctness": 0
                    },
                    "bd9c96af-8fb6-3c86-9427-3da49ddf7b74": {
                        "word": "Amygdala",
                        "def": "the center for emotions, emotional behavior, and motivation.",
                        "star": false,
                        "correctness": 0
                    },
                    "33b3ab1e-e2d6-18be-d93c-c9bcf613586e": {
                        "word": "anatomy",
                        "def": "Deals with the structure (morphology- shape) of the body and its parts, in other words, what things are called and what they look like",
                        "star": false,
                        "correctness": 0
                    },
                    "8b076d3f-20b6-216e-607d-64d3e1c10271": {
                        "word": "anion",
                        "def": "ions with a negative charge that results when electrons are GAINED",
                        "star": false,
                        "correctness": 0
                    },
                    "a1322b84-e571-bd59-d2f0-95f625c0c7ff": {
                        "word": "atomic number",
                        "def": "consists of the total number of protons in the nucleus of an atom",
                        "star": false,
                        "correctness": 0
                    },
                    "278dcbf3-a669-a5df-73a5-695a53145ee4": {
                        "word": "autonomic nervous system",
                        "def": "the motor neurons of this system carry signals from the CNS to organs such as heart, intestines and glands; mostly involuntatry control.",
                        "star": false,
                        "correctness": 0
                    },
                    "012cdc6c-2276-cdb7-ce85-199236883126": {
                        "word": "bile",
                        "def": "contains no enzymes, but is a chemical substance (similar to a detergent) that separates small fat molecules and prevents them from clumping; increases rate of digestion.",
                        "star": false,
                        "correctness": 0
                    },
                    "7ab09700-5d0d-14d1-6cc4-f21c2a43a5ee": {
                        "word": "Bohr Model",
                        "def": "shows the predicted location of electrons orbiting the nucleus",
                        "star": false,
                        "correctness": 0
                    },
                    "312fb382-bb68-dbcd-9350-708e66c44ab0": {
                        "word": "Bolus",
                        "def": "chewed up clump of food about to be swallowed.",
                        "star": false,
                        "correctness": 0
                    },
                    "db8e96ff-7bfc-dc03-bf8e-8301590d62d4": {
                        "word": "Carbohydrate",
                        "def": "contains C, H, O and mainly functions as energy sources.",
                        "star": false,
                        "correctness": 0
                    },
                    "3d822ab2-ab23-290e-2a42-755720d5041b": {
                        "word": "cardiac muscle",
                        "def": "Involuntary muscle tissue that is used to keep your heart pumping",
                        "star": false,
                        "correctness": 0
                    },
                    "3daf299a-69de-41dd-ef9b-67b78bd36e0f": {
                        "word": "cartilage",
                        "def": "A type of connective tissue that lubricates bones and provides cushion",
                        "star": false,
                        "correctness": 0
                    },
                    "be6a782e-8188-d2ad-ac98-5906669c844f": {
                        "word": "catalyst",
                        "def": "Anything that speeds up a rate. In this case, an enzyme is a catalyst",
                        "star": false,
                        "correctness": 0
                    },
                    "79c6bdf4-90ab-e89b-5814-5a7ec31836e9": {
                        "word": "cation",
                        "def": "ions with a positive charge that results when electrons are LOST",
                        "star": false,
                        "correctness": 0
                    },
                    "d8997328-a530-c035-4b01-3fdb078006e1": {
                        "word": "cell theory",
                        "def": "Three statements about the origin of cells and the basis of all living things.",
                        "star": false,
                        "correctness": 0
                    },
                    "c64212c4-5fb6-9dfa-a7a2-28f6f0cad680": {
                        "word": "cell wall",
                        "def": "The outer layer surrounding cells. In plants it is made of cellulose, in bacteria it is made of another substance. It's function is to give structural support.",
                        "star": false,
                        "correctness": 0
                    },
                    "6c912ee1-c85b-5cf8-2752-2bd01cc00a06": {
                        "word": "cellulose",
                        "def": "a polysaccharide that is composed of long compacted chains of glucose; not digested in humans",
                        "star": false,
                        "correctness": 0
                    },
                    "55cd2a0f-6082-94bc-e66e-dfa494dad5cd": {
                        "word": "Cerebellum",
                        "def": "located below the cerebrum near the top of the spinal cord; coordinates body movements.",
                        "star": false,
                        "correctness": 0
                    },
                    "4ad83175-46c4-1c8c-8c34-15bb862a557d": {
                        "word": "Cerebral cortex",
                        "def": "The outer region of the cerebrum' contains 10 billion neurons and is divided into different lobes controlling different functions.",
                        "star": false,
                        "correctness": 0
                    },
                    "6960cb42-c5ce-0e34-c5f2-11e55d026f59": {
                        "word": "Cerebrum",
                        "def": "largest and most complex part of the brain; divided into two halves.",
                        "star": false,
                        "correctness": 0
                    },
                    "d0b239fe-7d88-19b3-8609-3cdc9aa09bb1": {
                        "word": "Chemical digestion",
                        "def": "The action of enzymes breaking down macromolecules into smaller units and/or monomers.",
                        "star": false,
                        "correctness": 0
                    },
                    "f3d89726-ff04-9633-ab75-ae424ef2d4a5": {
                        "word": "chloroplast",
                        "def": "Green, oval structure inside any cell that photosynthesizes. (the site of the process)",
                        "star": false,
                        "correctness": 0
                    },
                    "a5cd0b7d-714e-8cb6-27ff-61c3a690b6b9": {
                        "word": "Circulatory system",
                        "def": "Delivers oxygen and nutrients to body cells and transports waste products to excretory organs",
                        "star": false,
                        "correctness": 0
                    },
                    "f1bc9f29-0fba-4840-fd12-db1043aac5cc": {
                        "word": "CNS",
                        "def": "Central nervous system composed of the brain and spinal cord.",
                        "star": false,
                        "correctness": 0
                    },
                    "5176fbc0-a918-ba37-b2f4-0a4bb18abfc9": {
                        "word": "coefficient",
                        "def": "a number found in front of a chemical formula indicates the number of molecules",
                        "star": false,
                        "correctness": 0
                    },
                    "93bf9c2f-cdf6-79e8-3aaf-10550cc18aa3": {
                        "word": "connective tissue",
                        "def": "This tissue holds together and supports other tissues; also cushions, insulates and connects organs",
                        "star": false,
                        "correctness": 0
                    },
                    "d78c821e-5ef8-6d25-c3af-eeb6446bdbec": {
                        "word": "Corpus Callosum",
                        "def": "a band of more than 100 million nerve fibers that connect the right and left hemispheres of the brain and supports communication between the two hemispheres.",
                        "star": false,
                        "correctness": 0
                    },
                    "36486341-ca5e-58d8-c992-a080b04c0873": {
                        "word": "covalent bond",
                        "def": "the sharing of electrons between two or more atoms",
                        "star": false,
                        "correctness": 0
                    },
                    "c770ac4b-5681-f132-8425-4a87a1268861": {
                        "word": "decomposition",
                        "def": "When an enzyme is used to break apart a macromolecule into smaller subunits (possibly into monomers)",
                        "star": false,
                        "correctness": 0
                    },
                    "c66cbb49-75e8-91ab-c278-d271b612d4c9": {
                        "word": "dehydration synthesis",
                        "def": "a reaction in which two monomers are linked together by a bond that involves losing an H+ and an OH- group to form water.",
                        "star": false,
                        "correctness": 0
                    },
                    "75ad3b78-26d5-1ee5-b606-39e7d5dfb95f": {
                        "word": "denature",
                        "def": "This is when the 3D shape of a protein is destroyed due to an environmental factor such as acids and bases or temperature.",
                        "star": false,
                        "correctness": 0
                    },
                    "416de144-c3fd-0022-93ec-fc3f586cd275": {
                        "word": "diffusion",
                        "def": "A process where particles/atoms/ions/molecules move around and eventually reach even distribution within an environment. Moving from high to low concentration.",
                        "star": false,
                        "correctness": 0
                    },
                    "d8612e7d-add7-25b0-31fd-4b6f339f0f10": {
                        "word": "Digestive system",
                        "def": "Ingests food, breaks it down into smaller chemical units for use by the body, and eliminates undigested material",
                        "star": false,
                        "correctness": 0
                    },
                    "ea8d9ff5-6b8f-a568-ee1d-e006a9e6f987": {
                        "word": "disaccharide",
                        "def": "two units of monosaccharides bonded together such as lactose or sucrose",
                        "star": false,
                        "correctness": 0
                    },
                    "b1958abf-7c4c-45a6-d414-a574b150f144": {
                        "word": "dopamine",
                        "def": "a neurotransmitter found in the brain involved in chemical communication between neurons at the synapse",
                        "star": false,
                        "correctness": 0
                    },
                    "450fbcbd-cb26-4dfb-5a8f-3444c3ae5137": {
                        "word": "Effector",
                        "def": "an organ or cell that acts in response to a stimulus.",
                        "star": false,
                        "correctness": 0
                    },
                    "6c703b29-ad23-fbec-7264-7acaf6242241": {
                        "word": "electron",
                        "def": "atomic particle with a negative charge orbiting the nucleus",
                        "star": false,
                        "correctness": 0
                    },
                    "63722fa9-217f-86f5-c59e-07392dd6abfd": {
                        "word": "elimination",
                        "def": "the removal of all undigested material from the large intestines (as feces)",
                        "star": false,
                        "correctness": 0
                    },
                    "d5292e2c-eb16-e924-f485-427441c5962d": {
                        "word": "Endocrine system",
                        "def": "Secretes hormones that affect the functions of target cells, and thereby regulates the activities of the other organ systems",
                        "star": false,
                        "correctness": 0
                    },
                    "a5285d77-500f-adf1-cb66-60c3e0789d18": {
                        "word": "endocytosis",
                        "def": "A process requiring ATP that involves the cell membrane wrapping around substances and creating a vesicle. \"Cell eating\" or \"bulk movement into the cell\"",
                        "star": false,
                        "correctness": 0
                    },
                    "376b4a8c-d9f8-d11f-e252-9b88cf154191": {
                        "word": "endoplasmic reticulum",
                        "def": "An organelle that coordinates the movement of protein within the cell's cytoplasm.",
                        "star": false,
                        "correctness": 0
                    },
                    "53295fe4-b105-636d-029f-47b8f0ca5eca": {
                        "word": "enzyme",
                        "def": "a protein molecule that lowers activation energy required for chemical reactions to take place by de-stabilizing bonds or by bringing molecules closer together.",
                        "star": false,
                        "correctness": 0
                    },
                    "cff3c1f8-c914-86ed-9ed0-51ec3cb4748f": {
                        "word": "epidermis",
                        "def": "the outermost layer of skin composed of various types of specialised cells; constant renewal of these cells as they die",
                        "star": false,
                        "correctness": 0
                    },
                    "ca60d5b1-9fe6-2156-5dee-1ef267ebb12d": {
                        "word": "epithelial tissue",
                        "def": "Sheets of cells that are closely packed and cover the entire surface of your body and form the lining of your internal organs",
                        "star": false,
                        "correctness": 0
                    },
                    "2186fb0d-e11c-10b6-0deb-f16a3c018c1e": {
                        "word": "esophagus",
                        "def": "the long tube that connects the mouth with the stomach; carries out peristalsis.",
                        "star": false,
                        "correctness": 0
                    },
                    "1e7e46de-3737-716c-88c9-6d269b702ebc": {
                        "word": "eukaryotic",
                        "def": "Refers to a cell that has a nucleus and various organelles. Examples are plant and animal cells.",
                        "star": false,
                        "correctness": 0
                    },
                    "1bde9358-c2f5-4e36-8c4d-8c43c8e14c7d": {
                        "word": "Excretory system",
                        "def": "Removes waste products from the body and regulates the chemical makeup of the blood",
                        "star": false,
                        "correctness": 0
                    },
                    "e83dd7c3-6b49-e47b-52a1-47abdc3f0e40": {
                        "word": "exocytosis",
                        "def": "A process requiring ATP that involves the cell membrane fusing with a vesicle inside the cell and releasing the contents out of the cell. \"bulk movement out of the cell\"",
                        "star": false,
                        "correctness": 0
                    },
                    "785cd289-8d66-2d7c-4799-68d4b9ee8cc8": {
                        "word": "facilitated diffusion",
                        "def": "A process of transport into a cell involving passage through a transport or channel protein.",
                        "star": false,
                        "correctness": 0
                    },
                    "f899fb8b-4e85-5c5c-02cb-6fbdf694fb4e": {
                        "word": "feedback loop",
                        "def": "A negative response to return conditions back to normal; negative meaning the response is in the opposite direction of the change",
                        "star": false,
                        "correctness": 0
                    },
                    "fb1408ee-1084-08a4-055b-a6c6304d40d8": {
                        "word": "gallbladder",
                        "def": "stores bile and releases it into the small intestine",
                        "star": false,
                        "correctness": 0
                    },
                    "49960463-0837-11a5-dc11-c5dd87dc7158": {
                        "word": "glucagon",
                        "def": "targets muscle and liver cells and communicates to break down glycogen and release glucose into the bloodstream",
                        "star": false,
                        "correctness": 0
                    },
                    "6100eefe-519a-cd4e-2ee8-1a6791efaf7c": {
                        "word": "glycogen",
                        "def": "a branched polysaccharide composed of glucose and the main storage for glucose in animals",
                        "star": false,
                        "correctness": 0
                    },
                    "97694f48-faab-cca1-37d8-f1fe17f40d56": {
                        "word": "golgi body/apparatus",
                        "def": "An organelle that performs changes to and transport of proteins.",
                        "star": false,
                        "correctness": 0
                    },
                    "8de4484f-8754-bfe0-7744-3db3f639d4bd": {
                        "word": "Hippocampus",
                        "def": "is associated mainly with memory, in particular long-term memory.",
                        "star": false,
                        "correctness": 0
                    },
                    "a79819a4-4ff0-0139-f963-dee6ba304f74": {
                        "word": "homeostasis",
                        "def": "maintaining a stable internal environment",
                        "star": false,
                        "correctness": 0
                    },
                    "61c8992d-5951-6111-35aa-0004cab30956": {
                        "word": "hormone",
                        "def": "A messenger molecule that is released from certain cells and will target other cells in order to cause changes within those cells.",
                        "star": false,
                        "correctness": 0
                    },
                    "c60d5843-c1f0-0c84-c9d7-185a67c61577": {
                        "word": "Hydrolysis",
                        "def": "a reaction in which a bond between two monomers is broken by the addition of water (H+ and OH-).",
                        "star": false,
                        "correctness": 0
                    },
                    "916e90b0-9669-83fd-9ad6-9f615d2ba074": {
                        "word": "hydrophilic",
                        "def": "Any molecule that can bond with water. These are polar, having a charge.",
                        "star": false,
                        "correctness": 0
                    },
                    "06500efd-5042-8fb7-8b67-99bde2d9e14d": {
                        "word": "hydrophobic",
                        "def": "Any molcule that repels water. A long chain of carbon bonded only with hydrogen is an example.",
                        "star": false,
                        "correctness": 0
                    },
                    "508c2acd-e033-7cba-1a14-477b36f82104": {
                        "word": "hypertonic",
                        "def": "A solution that contains a very high concentration of a solute (in comparison to another solution, such as a cell)",
                        "star": false,
                        "correctness": 0
                    },
                    "60e0a9db-cc63-a9cd-06a7-73b1af2b3e04": {
                        "word": "hypothalamus",
                        "def": "part of the brain that helps to regulate body temperature, blood pressure, hunger, thirst and emotions.",
                        "star": false,
                        "correctness": 0
                    },
                    "357a4e05-c0aa-1ab3-12d6-0c5a53720411": {
                        "word": "hypotonic",
                        "def": "A solution that contains a lower concentration of a solute compared to that of another solution.",
                        "star": false,
                        "correctness": 0
                    },
                    "0972096c-827d-3e58-e7b0-b53dfa953887": {
                        "word": "Immune system",
                        "def": "Defends body against infections and cancer cells",
                        "star": false,
                        "correctness": 0
                    },
                    "d4edd788-c827-9555-55d8-b42f66aedb80": {
                        "word": "ingestion",
                        "def": "The act of eating or drinking",
                        "star": false,
                        "correctness": 0
                    },
                    "389c28da-321d-60ce-17c7-e901962c38bf": {
                        "word": "insulin",
                        "def": "targets muscle and liver cells and communicates to absorb/remove glucose from the bloodstream",
                        "star": false,
                        "correctness": 0
                    },
                    "a94e53ee-2873-f4f0-1770-00d5b5673120": {
                        "word": "Integration",
                        "def": "occurs when the CNS interprets the sensory neurons through coordination within interneurons and relays this to the motor neurons.",
                        "star": false,
                        "correctness": 0
                    },
                    "43de6e01-f036-d353-cf5f-3e3ec7c2c2b9": {
                        "word": "Integumentary system",
                        "def": "Covers the body and protects it from injury, infection, excessive heat or cold and drying out",
                        "star": false,
                        "correctness": 0
                    },
                    "d4fde82a-7178-4b0a-63c8-3ccda2e0b5fd": {
                        "word": "Interneurons",
                        "def": "neurons located only within the CNS",
                        "star": false,
                        "correctness": 0
                    },
                    "a7b6a86e-e6f9-d5b5-787a-8c31b0f74667": {
                        "word": "interstitial fluid",
                        "def": "an aqueous solution that makes up th internal environment surrounding cells/tissues",
                        "star": false,
                        "correctness": 0
                    },
                    "9f0afa52-6ad7-c078-890f-143edfdc14d9": {
                        "word": "ionic bond",
                        "def": "results when atoms which have lost or gained electrons become charged and attracted to one another",
                        "star": false,
                        "correctness": 0
                    },
                    "c4564271-88b4-cbc9-14a4-ea11ad4a40b0": {
                        "word": "isotonic",
                        "def": "A solution that contains an equal amount solute as compared to another solution.",
                        "star": false,
                        "correctness": 0
                    },
                    "f60cca72-e084-37df-9727-116809e058b1": {
                        "word": "Lewis dot diagram",
                        "def": "a diagram that shows ONLY the valence electrons of an atom",
                        "star": false,
                        "correctness": 0
                    },
                    "ee559b3a-b350-d2ff-ffbf-0884fa806cbf": {
                        "word": "lipid bilayer",
                        "def": "The structure of the cell membrane enclosing all living cells; including bacteria. It is a two layer 'sandwich' of phospholipids.",
                        "star": false,
                        "correctness": 0
                    },
                    "a73694b5-e30b-c537-aa82-8d07bdf9e343": {
                        "word": "lipid",
                        "def": "class of molecules that is water insoluble and stores a great amount of energy.",
                        "star": false,
                        "correctness": 0
                    },
                    "bb95e760-5c88-a8fe-414b-e84693800a49": {
                        "word": "Lymphatic system",
                        "def": "Supports function of the circulatory system by returning fluid to blood vessels near the heart; also functions as part of the immune system",
                        "star": false,
                        "correctness": 0
                    },
                    "7bca8114-96fe-2c60-bf4f-56a2fdd3e882": {
                        "word": "Lysosome",
                        "def": "A vesicle in the cytoplasm that contains digestive enzymes to break down invading cells or worn out cell parts.",
                        "star": false,
                        "correctness": 0
                    },
                    "4a235c55-c698-1aa4-518f-91666d3ab57b": {
                        "word": "Mechanical digestion",
                        "def": "Also known as mastication- chewing of food to break into down into smaller pieces with greater surface area.",
                        "star": false,
                        "correctness": 0
                    },
                    "2f48e555-2d90-5242-a475-f94e996e304c": {
                        "word": "medulla oblangata",
                        "def": "part of the brain stem which controls breathing and regulated sleep",
                        "star": false,
                        "correctness": 0
                    },
                    "f8406e1f-faa5-b2e0-c4e0-e31e2e5c88dd": {
                        "word": "Minerals",
                        "def": "inorganic nutrients that play various roles in the body. examples include iron, iodine and calcium",
                        "star": false,
                        "correctness": 0
                    },
                    "ef4d28d2-8a0c-2112-c7de-251f2791dc95": {
                        "word": "mitochondria",
                        "def": "An organelle where cellular respiration takes place.",
                        "star": false,
                        "correctness": 0
                    },
                    "31a93832-1b12-59a4-a975-bbbaead0dd00": {
                        "word": "mitosis",
                        "def": "A four step process that separates the chromosomes in the nucleus of a cell during cell division.",
                        "star": false,
                        "correctness": 0
                    },
                    "569c1d4e-47d5-4cfc-2d44-c020a0aea886": {
                        "word": "monomer",
                        "def": "single unit",
                        "star": false,
                        "correctness": 0
                    },
                    "bf5cc8b7-bdeb-2e03-f2e7-3e2aa9f6bd89": {
                        "word": "monosaccharide",
                        "def": "single sugar such as glucose, galactose or fructose",
                        "star": false,
                        "correctness": 0
                    },
                    "833c8e4e-c2c2-fc9e-a739-7dd0af2facf9": {
                        "word": "Motor neurons",
                        "def": "neurons that carry signals away from the CNS to a muscle or gland",
                        "star": false,
                        "correctness": 0
                    },
                    "ed15d269-ced7-ce8e-2553-17fd22b5dd4a": {
                        "word": "multicellular",
                        "def": "an organisms composed of more than one cell. As the organism becomes more complex the cells are organised into tissues.",
                        "star": false,
                        "correctness": 0
                    },
                    "53d9af1f-84de-78f6-4b09-8b7e3b7b0bc1": {
                        "word": "Muscular system",
                        "def": "Enables body movement and facial expressions essential to human communication",
                        "star": false,
                        "correctness": 0
                    },
                    "2c774bf9-ec83-cf02-9501-dd9d3944b516": {
                        "word": "Nervous system",
                        "def": "Coordinates body's activities by detecting stimuli and directing the body's responses",
                        "star": false,
                        "correctness": 0
                    },
                    "6eb58665-9250-9d41-0bf6-326dbee53b5d": {
                        "word": "nervous tissue",
                        "def": "Tissue that forms the communication system that makes the behavior possible",
                        "star": false,
                        "correctness": 0
                    },
                    "f1dc5b79-6901-d29e-6891-09d94afbe483": {
                        "word": "neutron",
                        "def": "atomic particle without a charge, found in the nucleus of an atom",
                        "star": false,
                        "correctness": 0
                    },
                    "480cfa81-b2c6-68a5-4bcf-bc7bfe429875": {
                        "word": "nucleus",
                        "def": "An organelle that houses DNA",
                        "star": false,
                        "correctness": 0
                    },
                    "365f6577-d114-11cc-7cf2-c47c00e6634d": {
                        "word": "Occipital Lobe",
                        "def": "lobe associated with vision",
                        "star": false,
                        "correctness": 0
                    },
                    "e8a4e008-8e94-cc82-be74-a6b5acb35bab": {
                        "word": "orbital",
                        "def": "a location where electrons are found; a pattern surrounding the nucleus; associated with energy of the electron",
                        "star": false,
                        "correctness": 0
                    },
                    "32fed770-a9b3-be41-cdc4-63e748c44437": {
                        "word": "organ system",
                        "def": "Consists of multiple organs that together perform a vital body function",
                        "star": false,
                        "correctness": 0
                    },
                    "894e68ef-4e95-d55a-3afa-dfc147f527c4": {
                        "word": "organ",
                        "def": "Consists of several tissues that together perform a specific task",
                        "star": false,
                        "correctness": 0
                    },
                    "f9772ab2-8394-c9da-c7a5-8f64de37bd5b": {
                        "word": "Organic molecule",
                        "def": "composed of carbon as a backbone bonded with hydrogen and possibly oxygen and nitrogen attached.",
                        "star": false,
                        "correctness": 0
                    },
                    "35b5e5e8-55d0-9c6e-d2f7-cc947f9cc59e": {
                        "word": "osmosis",
                        "def": "The process where water spreads out into the environment. Water will move from areas of high concentration to low concentration.",
                        "star": false,
                        "correctness": 0
                    },
                    "230b43bf-63f5-3a0d-e9b6-9e7da13a1482": {
                        "word": "pancreas",
                        "def": "organ that is important for both regulating blood sugars (hormones) and secreting digestive enzymes (lipase, amylase, protease)",
                        "star": false,
                        "correctness": 0
                    },
                    "031db7ff-fe6c-8fdb-ea1d-8e1d285fac09": {
                        "word": "parasympathetic division",
                        "def": "division of the autonomic system that decreases the activity or relaxes the body",
                        "star": false,
                        "correctness": 0
                    },
                    "5d3cb027-f6d8-6e03-6556-afe10edfb2a2": {
                        "word": "Parietal Lobe",
                        "def": "lobe associated with taste, reading skills, sense of touch",
                        "star": false,
                        "correctness": 0
                    },
                    "726cafe8-1e06-089a-ebce-eaac538d4666": {
                        "word": "Peristalsis",
                        "def": "series of muscle contractions that push the bolus down the esophagus and continue to move digested food through the intestines.",
                        "star": false,
                        "correctness": 0
                    },
                    "6812b36d-5893-0c1f-7937-52f7a53cafb3": {
                        "word": "permeability",
                        "def": "The ability of something to \"permeate\" or pass through.",
                        "star": false,
                        "correctness": 0
                    },
                    "4c3358e8-d811-30f7-f9b3-fefaf1c8bdf4": {
                        "word": "pharynx",
                        "def": "the upper portion of the throat",
                        "star": false,
                        "correctness": 0
                    },
                    "33485866-3052-a1e4-987b-588d29a18b32": {
                        "word": "phospholipid",
                        "def": "makes up the structure of the cell membrane",
                        "star": false,
                        "correctness": 0
                    },
                    "3fe7763f-2cda-ba10-412d-aed24d5e4aa4": {
                        "word": "photosynthesis",
                        "def": "A biochemical reaction involving the conversion of carbon dioxide and water into glucose and oxygen.",
                        "star": false,
                        "correctness": 0
                    },
                    "10a6199f-818a-b183-45fb-a36438d4bb01": {
                        "word": "Physiology",
                        "def": "Studies the function of anatomical parts or asks the question, \"how do organs work\"? What is their job?",
                        "star": false,
                        "correctness": 0
                    },
                    "4a48ee70-8671-155c-f984-0ea2f271680f": {
                        "word": "PNS",
                        "def": "Peripheral nervous system composed of sensory and motor neurons.",
                        "star": false,
                        "correctness": 0
                    },
                    "c2bf416b-f49d-3d31-363d-a1679407160a": {
                        "word": "polarity",
                        "def": "A molecule having a negative end and a positive end due to unequal sharing of electrons.",
                        "star": false,
                        "correctness": 0
                    },
                    "fada0fd0-db1d-16ae-40a5-6fa829475610": {
                        "word": "polymer",
                        "def": "many units (often repeating)",
                        "star": false,
                        "correctness": 0
                    },
                    "2ac6c75b-30be-bffd-40b7-7b55d9510bd6": {
                        "word": "polymerization",
                        "def": "the process of building a polymer from monomers. Example would be to build a protein from amino acids.",
                        "star": false,
                        "correctness": 0
                    },
                    "8df1ed54-174d-d4b9-f642-dc0736450384": {
                        "word": "polysaccharide",
                        "def": "long chains of monosaccharides (glucose) stored in a water insoluble form for energy storage or structural purposes.",
                        "star": false,
                        "correctness": 0
                    },
                    "d52f633a-ce9e-4be7-8887-1cbb24def215": {
                        "word": "Prefrontal cortex",
                        "def": "located at the front of the frontal lobe; associated with planning, and greatly contributes to personality development.",
                        "star": false,
                        "correctness": 0
                    },
                    "552c3b70-12cd-eaff-7e9f-efc860074560": {
                        "word": "prokaryotic",
                        "def": "Refers to a bacterium.",
                        "star": false,
                        "correctness": 0
                    },
                    "3f6382ca-634c-d875-7206-1a848746c9f1": {
                        "word": "protein synthesis",
                        "def": "The process of producing protein involving DNA, RNA, amino acids and ribosomes.",
                        "star": false,
                        "correctness": 0
                    },
                    "bf60d41f-7e4e-bcbf-1904-64997c73c7ce": {
                        "word": "Proton",
                        "def": "atomic particle with a positive charge, found in the nucleus of an atom",
                        "star": false,
                        "correctness": 0
                    },
                    "e96f6889-03fa-f705-0960-14a1e22434f9": {
                        "word": "Receptor",
                        "def": "collects information from the internal and external environment (pain, thermo, chemo, and photo are examples)",
                        "star": false,
                        "correctness": 0
                    },
                    "ee4f7f56-dcd9-c943-939d-b27b622b479a": {
                        "word": "Reflex arc",
                        "def": "receptor to sensory neuron to interneuron to motor neuron (pathway)",
                        "star": false,
                        "correctness": 0
                    },
                    "e6bd8f91-2b16-4a48-ed88-282ae3174498": {
                        "word": "Reproductive system",
                        "def": "Produces gametes; the female system also provides the organs needed to support a developing embryo",
                        "star": false,
                        "correctness": 0
                    },
                    "8247cbdb-ed2c-fdf7-0372-ca06ad5bbfc1": {
                        "word": "Respiratory system",
                        "def": "Exchanges gases with the environment",
                        "star": false,
                        "correctness": 0
                    },
                    "7c732181-ae3b-11ac-baf7-d8802f0c991a": {
                        "word": "ribosome",
                        "def": "An organelle found in all cells that is the site for protein production/synthesis.",
                        "star": false,
                        "correctness": 0
                    },
                    "f339015c-1161-11bc-dbdd-5af5a7b3706e": {
                        "word": "saturated fat",
                        "def": "a fatty acid (chain) that is composed of single bonds between carbon with a maximum # of hydrogen atoms bonded; solid at room temperature and found in animals.",
                        "star": false,
                        "correctness": 0
                    },
                    "6115dda4-545a-7eda-3b11-435f615e511e": {
                        "word": "Sensory neurons",
                        "def": "neurons that carry information about stimuli to the CNS",
                        "star": false,
                        "correctness": 0
                    },
                    "4728d73d-e208-4b13-e7bd-4ab40a0a292c": {
                        "word": "serotonin",
                        "def": "a neurotransmitter found in the brain that is associated with sleep",
                        "star": false,
                        "correctness": 0
                    },
                    "621d9ff3-b93e-fb18-0d03-967159efead2": {
                        "word": "skeletal muscle",
                        "def": "Voluntary muscle tissue that is attached to bone and allows movement of the body",
                        "star": false,
                        "correctness": 0
                    },
                    "d73c0f25-fb27-71a9-1dba-9b2b2c109dca": {
                        "word": "Skeletal system",
                        "def": "Provides the body support, protects certain organs such as the brain and lungs, and works with the muscular system in body movements",
                        "star": false,
                        "correctness": 0
                    },
                    "983851b7-83e9-a9e0-789e-1affee9fc864": {
                        "word": "smooth muscle",
                        "def": "Involuntary muscle tissue that provide support and movement within organs",
                        "star": false,
                        "correctness": 0
                    },
                    "03b51a77-d611-b821-ce42-6275d688055a": {
                        "word": "somatic nervous system",
                        "def": "the motor neurons of this system carry signals from the CNS to the skeletal muscles; mostly voluntary control.",
                        "star": false,
                        "correctness": 0
                    },
                    "0fd05806-85ab-48e3-9465-6d0e254cb882": {
                        "word": "starch",
                        "def": "a branched polysaccharide composed of glucose and the main storage for glucose in plants",
                        "star": false,
                        "correctness": 0
                    },
                    "49cf9321-1728-850e-17ce-ce967b54ef10": {
                        "word": "steroids",
                        "def": "ring structured lipids that serve various functions including hormones and cholesterol",
                        "star": false,
                        "correctness": 0
                    },
                    "ecac7d7d-cd8e-c932-78f7-7f97e95b839b": {
                        "word": "Stimulus",
                        "def": "Information about an environmental change; collected by various receptors.",
                        "star": false,
                        "correctness": 0
                    },
                    "959a808d-c048-28dd-dd06-1bf1778fa35f": {
                        "word": "subscript",
                        "def": "a number found at the base of the element symbol which indicates the total number of atoms of that element in a chemical formula",
                        "star": false,
                        "correctness": 0
                    },
                    "63b81e6b-8c2a-0fe0-fde0-800fa3f71004": {
                        "word": "substrate",
                        "def": "the molecule (s) that come in contact with an enzyme. These are specific to each enzyme.",
                        "star": false,
                        "correctness": 0
                    },
                    "45f2cb7f-f0d6-19dc-2b02-deebf982f646": {
                        "word": "surface area",
                        "def": "The total surface that surrounds an object. In a cell the surface area would be represented by the cell membrane enclosing the cell.",
                        "star": false,
                        "correctness": 0
                    },
                    "74ccc2c6-fb7f-53d2-e4bd-914604a77fd0": {
                        "word": "sympathetic division",
                        "def": "division of the autonomic system that increases the general level of activity in the body",
                        "star": false,
                        "correctness": 0
                    },
                    "a7fdbdc5-ab9d-4bff-7f30-ac273a22b60e": {
                        "word": "synthesis",
                        "def": "When an enzyme is used to assemble two substrate molecules.",
                        "star": false,
                        "correctness": 0
                    },
                    "82473f7a-3bfe-0a9b-0cd9-06cd8069ae43": {
                        "word": "Temporal Lobe",
                        "def": "lobe associated with hearing and smell",
                        "star": false,
                        "correctness": 0
                    },
                    "30f1412a-c59c-f11d-05e7-fa741738514e": {
                        "word": "Thalamus",
                        "def": "located in the middle of the brain, regulated and sorts information going to and coming from the cerebral cortex",
                        "star": false,
                        "correctness": 0
                    },
                    "adf5dbc7-2ba0-7445-0881-4020c7903121": {
                        "word": "thermoreceptor",
                        "def": "found in the skin and certain internal organs which detects heat and cold",
                        "star": false,
                        "correctness": 0
                    },
                    "9f3ee3fc-005a-bc68-e7bf-f804b0e64a15": {
                        "word": "tissue",
                        "def": "A group of similar cells that are attached and perform a specific function.",
                        "star": false,
                        "correctness": 0
                    },
                    "568145cf-56fb-7b11-7986-069b6a305c89": {
                        "word": "triglyceride",
                        "def": "composed of glycerol (3 carbons) and 3 chains of fatty acids. Triglycerides are hydrophobic.",
                        "star": false,
                        "correctness": 0
                    },
                    "6f583f21-338e-0b22-81ac-718e47b0d944": {
                        "word": "unicellular",
                        "def": "a single celled organism.",
                        "star": false,
                        "correctness": 0
                    },
                    "96948a4e-e1a4-cd89-b438-e084a9e5ab90": {
                        "word": "unsaturated fat",
                        "def": "a fatty acid (chain) that is composed of one or more double bonds between carbon; liquid at room temperature and found in plant sources.",
                        "star": false,
                        "correctness": 0
                    },
                    "0da9f235-1bbe-9a42-c7e6-48dcb064eef9": {
                        "word": "vacuole",
                        "def": "A defined space within a cell. In plants, a central vacuole is important for storing water.",
                        "star": false,
                        "correctness": 0
                    },
                    "ec67e316-8a1d-0d25-e72a-170c3fd788de": {
                        "word": "valence electron",
                        "def": "outer most electrons that are associated with bonding",
                        "star": false,
                        "correctness": 0
                    },
                    "a54263da-5279-2e96-d0c8-69c67da86dc9": {
                        "word": "villi",
                        "def": "the folds of the small intestines; used to create greater surface area for absorption of digested nutrients.",
                        "star": false,
                        "correctness": 0
                    },
                    "38a43b77-1328-6f77-000e-5fd8a7666a1f": {
                        "word": "vitamins",
                        "def": "organic molecules that play a role in many processes in the body such as metabolism of food (assists enzymes work better).",
                        "star": false,
                        "correctness": 0
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
    state.study_sets.ids.unshift(update.uuid)
  },
  delete_study_set(state, update) {
    let index = state.study_sets.ids.indexOf(update.uuid)
    if (index >= 0) {
        state.study_sets.ids.splice(index,1)
        Vue.delete(state.study_sets.sets,update.uuid)
    }
    
  },
  delete_term(state, update) {
    // update {
    //  uuid: set id
    //  tuuid: term id       
    //}
    Vue.delete(state.study_sets.sets[update.uuid].set,update.tuuid)
    helpers.update_practise(state,update)
  },
  add_term(state, update) {
    // update {
    //  uuid: set id
    //  words: [
    //      {word:'',def:''}
    //      ...
    //  ]        
    //}
    let n_d = {}
    let n_w = [...update.words].map((each) => {
        let tuuid = uuid()
        while (uuid in state.study_sets.sets[update.uuid].set || uuid in n_d) tuuid = uuid()
        n_d[tuuid] = {
            ...each,
            star: false,
            correctness: 0
        }
    })
    state.study_sets.sets[update.uuid].set = {...n_d, ...state.study_sets.sets[update.uuid].set};
    helpers.update_practise(state,update)
  },
  change_term(state, update) {
    // update {
    //  uuid: set id
    //  tuuid: term id
    //  terms: {
    //      word:
    //      def:  
    //      star:
    //      correctness:
    //  }        
    //}
    state.study_sets.sets[update.uuid].set = {...state.study_sets.sets[update.uuid].set, [update.tuuid]: update.terms}
    helpers.update_practise(state,update)
  },
  star_term(state, update) {
    // update {
    //  uuid: set id
    //  tuuid: term id       
    //}
    Vue.set(state.study_sets.sets[update.uuid].set[update.tuuid],'star',true)
    helpers.update_practise(state,update)
  },
  finish_practise_term(state, update) {
    Vue.delete(state.study_sets.sets[update.uuid].practise,update.tuuid)
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
//   plugins: [createPersistedState()]
})