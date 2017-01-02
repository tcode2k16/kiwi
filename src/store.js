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
      Vue.set(state.study_sets.sets[update.uuid].practise,'all',Object.keys(state.study_sets.sets[update.uuid].set))
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
            "sets": {
                "a5d669cc-5c2b-5b77-46fc-bb909f3ee653": {
                    "image": 4,
                    "description": "abc",
                    "name": "abc",
                    "practise": {
                        "wrong": [],
                        "all": []
                    },
                    "set": {}
                },
                "1c5194eb-a5e8-a495-c395-683a28f2a233": {
                    "image": 0,
                    "description": "bio",
                    "name": "bio",
                    "practise": {
                        "wrong": [],
                        "all": [
                            "2778bc8b-4760-728c-6c52-75bdeec45d06",
                            "da2b1d2f-2cbe-9b05-aa36-08698981881b",
                            "08cdcb88-a92b-c426-575f-78fe1c29a817",
                            "57132b62-b393-f981-8ccd-ac6634b523c7",
                            "750581e9-82a3-5205-5f5b-7eb82da8eedb",
                            "e7bdf645-fa44-ba68-4233-50eedc0d2453",
                            "d6592cab-9008-6d4e-dd04-d35552b9b6a6",
                            "d10fd46b-7518-f603-aea1-3351d42d585e",
                            "adac9ac9-9820-52ea-44a8-bbc2c7377ccc",
                            "7f547c70-9b36-6752-5456-c8e6df5b0444",
                            "7f68a267-f55d-cd9b-cc22-9fbacfc0d56f",
                            "4778bfed-4367-4d08-28dc-95eebd1dd79f",
                            "236e9734-d0c4-b15a-b5cb-6957466d4b06",
                            "94bcf2d9-e227-0fac-7998-cd3c047bedf5",
                            "fbf00c2b-0186-07b3-0040-ff73290739e3",
                            "dc3bda3e-2ee7-2966-4336-8a669403e021",
                            "4b071b58-cad1-aace-c805-db3cc28fa18a",
                            "bfc56370-13e7-5c73-95c7-5d77149ba49b",
                            "671b2c3f-66bd-f1ac-fdee-95f852a3941c",
                            "510592dd-05b2-c6cd-903f-bfb2f25de67d",
                            "173a9e0e-c6fe-dcc7-3ac3-83b4fbec8d8c",
                            "8d1f9ded-3530-a849-f12d-9193dc5fce0c",
                            "ddfe9cf0-76d0-034b-d759-c3c938da9439",
                            "ed6ccdb9-6682-035f-8224-a3f8033c015d",
                            "eff57e4a-1638-487a-83f5-fbfdeb350ed7",
                            "e5a89f1f-b6ab-2007-cae4-2887cc174098",
                            "8fab0f1e-56d4-10ea-fa05-10da0068e54c",
                            "8b822a8a-e38d-204e-cb7f-17b9f5b907c8",
                            "8a20e2b4-0dab-424e-5ced-2347f659fb6e",
                            "ac06d04b-28da-4bed-2acc-a9aac5cbfb02",
                            "9ad8caa3-fa78-e62b-38a4-abe2a4de4c73",
                            "6e0f8382-4cb6-3c7f-3b87-dba0feb7508e",
                            "00e35c69-c831-d9fb-112f-c9eac641c1f5",
                            "08abc82f-71b8-9f93-a8a3-e600b2421d9e",
                            "88f12e15-dc62-8775-e8b4-3f281d605999",
                            "3650cf7f-ce88-a202-ef44-ef30f86c2e9b",
                            "3459840c-4646-660b-83a9-0394f045f1ec",
                            "e62db025-cc71-cb28-46b7-8b260b981865",
                            "3f94e6e8-7221-c8b0-ebdb-fe8211716830",
                            "4270b88e-cb14-5b87-a5e5-8057560a1212",
                            "7634a3d2-a828-c75e-d56a-eeb71bf27a85",
                            "b9313b49-9e90-a1fd-f739-6c7729f085ba",
                            "9b776508-571d-69ae-fb56-8489e45a2b88",
                            "50318798-69e5-9efd-b325-a829ce0fe131",
                            "ced124f1-a423-5073-13f2-73d83da23272",
                            "2a8b9a4f-2ad4-5c71-0748-5d7d4c4e0cee",
                            "96162ff2-153d-8789-bfef-dc9e8460e4c2",
                            "bec27f55-5793-c613-bba2-4761637c4a63",
                            "d6738d4b-3869-f47d-c5d3-a98440372022",
                            "d1ae2b6b-12bf-2c27-fe33-28e36809d22b",
                            "07970f03-a670-1e1f-0d25-160089ac87f5",
                            "fa181a77-d380-9159-8170-616dde6d562c",
                            "0d5fcc59-7141-7375-3556-aaa3d69a8a52",
                            "64f6e27c-67cf-ba13-9926-b456e0b8ed07",
                            "60afacf5-7662-6dcb-3887-e2a15897e5c7",
                            "290bf901-ff6c-9e4b-dd3a-e409a5ed4369",
                            "54bcaaaa-9403-9b59-b651-a2f8660d14a5",
                            "8378c60e-f3eb-1628-e067-3d9007d237a0",
                            "5b1c9c7e-6989-b209-0939-d965815f9dfa",
                            "345e1a60-b1a1-bdcc-38cb-d7f10c162a33",
                            "d5167076-300d-02a4-fed7-1e2d614b811e",
                            "f09a7beb-f114-e297-6b9a-622185ca4bca",
                            "609e7e07-5349-22d5-c150-50ec9a3efc7a",
                            "8f41d03b-15ee-3d71-82fb-b221df65475e",
                            "2182cf8e-39de-465e-7571-580905065748",
                            "90d33b81-067d-4474-8ca6-6ae49ae53283",
                            "7f904c4a-0f5d-21db-4d9f-2f83ea4c25e1",
                            "98a2ad8c-3f54-b777-92e4-5ac28247a0ec",
                            "8cbe9221-91b2-3fbe-6249-d0f6c0d67f3f",
                            "c5d2f5a4-ea08-79d9-ab58-c726ad6ecde9",
                            "437ab961-cbc4-0186-a841-9f0f454d68e2",
                            "b6f43770-8318-9c46-79dc-60a046f138b0",
                            "6ca29f00-10cb-9b97-2afc-d287e6a0a0ba",
                            "21766be4-aa82-5630-2fc4-adef316a5190",
                            "57c18d58-d0e3-e655-7ae4-895f89355fe0",
                            "3aee7ed5-348c-0a25-47db-5257612dcdfd",
                            "f2869c61-15ee-8915-a02e-171e924c1ed7",
                            "fe7fdfe2-5eac-4ff4-a6ad-d1a563c03bac",
                            "ddf37f75-b4ed-e582-b099-fe377645f140",
                            "d4e7fb72-c44f-5542-1850-2bf88d666b5d",
                            "c60f71b7-9ed5-10f6-9d77-4532955eee14",
                            "0c527ef1-c350-ee1d-83b9-f9b68408d98e",
                            "6ed53ae1-6639-ff68-d068-ab03cd28d485",
                            "212b3b17-129c-5a60-7f4e-68015ae2e6ba",
                            "57bf2964-99c0-fb90-2d2d-aca04c5ccca2",
                            "d30a8447-3ffd-6a6d-8f6e-cff4fe8e512b",
                            "73bb1cf9-a5ce-95cd-9c47-164130f8650e",
                            "190aaa5e-5a5c-79dc-0f7d-c8251dc6af57",
                            "92642a3a-613c-1638-10ec-64badae609df",
                            "97be75fc-e249-4a58-92c8-15ef80b44652",
                            "f0f932be-0d96-00a9-bbf2-8e752c8c2f50",
                            "43828051-8b6b-3b3b-7938-ae979fb701a5",
                            "b6e67345-f463-f616-1087-fe957f218213",
                            "1d446910-508a-6db3-9dc1-7766eb699490",
                            "930187cb-cba5-3bbd-a902-ffe5b372fbd3",
                            "f2750771-2368-1c34-2175-4acd80d3c877",
                            "0d4422f3-4663-255a-993e-0342b9f0551e",
                            "247a93cd-4e14-be18-9194-dfc049f446e6",
                            "e846222b-d944-fadd-4960-52cde5274ebb",
                            "44906d0b-22d3-0b69-0b7f-4c1fd12791c0",
                            "d8fef15c-85d9-93ef-79ac-f5600e51ef43",
                            "1aa6ade0-f15f-bf7e-298d-f6cbc88160cf",
                            "44f01aac-4a91-2bba-53fe-76e72670932f",
                            "b8a67f2f-231f-0278-bebc-74bf4cb46f0e",
                            "006e155c-0dd9-4a6e-f92d-6e5719d3eb91",
                            "54f724b9-1be6-0738-79af-930707e77e58",
                            "75dc1f3a-58aa-4590-589f-9ddc1f596c88",
                            "8f8dd65a-d679-67d1-b3cc-af378baef20a",
                            "c0180431-470d-febd-51b2-5a4efde768e5",
                            "04a738f1-621d-2ade-5e23-2a16051dcf1f",
                            "7045faf4-b589-b5b3-8975-e12472b16845",
                            "90f32361-c96c-faba-a783-518c90dba8ed",
                            "5189d47f-d773-e2ee-ca10-48d30e03275b",
                            "7977f773-6212-ebba-6b8f-399bf7341524",
                            "d40930ca-eb76-b090-cca1-f02f9094b341",
                            "30b9577c-ca1d-33e7-d5a2-4949fa6ae72a",
                            "f1573ea0-8944-11d5-e78a-8c521d3c20d0",
                            "3a95fb5f-73f4-4c1f-09c2-64becc836c3f",
                            "443b8007-6b05-e613-6700-e5d3f9c9127f",
                            "36132914-d0c0-406c-0baa-71727a49c9e5",
                            "e8db5983-bf04-19dd-5e9d-c51cde60cce9",
                            "76ee1c41-c835-d21e-66b0-e0f6cac0609f",
                            "4b119cd0-6fe1-8174-e814-60d702d1a926",
                            "8d710103-b640-3bb3-2861-442f35070986",
                            "30e2e1fb-3ce4-9019-d46f-8d2b39efcd36",
                            "b1da0a82-9e68-3f4d-9bc8-82197ec147b6",
                            "5403a1ab-901a-e78d-30a3-697f7900ee5b",
                            "2aa3b58a-7921-fe7c-f6bd-0e45e06dcc5c",
                            "16d2ef65-df2f-535b-6025-881ca2086180",
                            "78a3a841-35ef-3759-78e2-a893022a0e76",
                            "5cacb258-49dd-83d8-30a3-f5d53bb8cdd0",
                            "c82fa744-c537-4dbc-702a-16101f30aac7",
                            "46f03cb8-7d78-038b-786f-6ace0d95bf81",
                            "0abfddf2-3ca4-bd1d-d970-3a1ed86e2bca",
                            "3e8adac1-29ad-f274-4e9c-64beaae9c9ac",
                            "647d2544-897a-13f8-bc4e-9f74f3f0594d",
                            "b666c3e9-d26d-8076-4dd1-6b6e86937e2e",
                            "1e88be3a-b74e-afa8-fe8e-6f42b270e201",
                            "667cb574-9173-a1b7-06db-69655633caa7",
                            "c6b10532-95ba-ec95-894e-37c50b340491",
                            "e726e836-494a-f0a7-1538-c523403e8c6d",
                            "4cd02fb2-59ab-efa7-0186-5c5aa3be0f4d",
                            "e7ff33db-af72-1150-9233-acebebf50efc",
                            "abcd16c4-1a36-df37-242d-ce7f6d887a6e",
                            "d1abdfa0-08a6-51ac-ff4c-0ec9a641e114",
                            "d24f426f-ab51-23b5-9369-22e843afcfef",
                            "6a16ff33-2a6f-8a07-6fe6-8dfb2c47f924",
                            "6a6381cc-3dac-5123-4d5b-b35f5b230ec8",
                            "bb406dff-c3f6-3f34-6911-f7a82134fdf2"
                        ]
                    },
                    "set": {
                        "2778bc8b-4760-728c-6c52-75bdeec45d06": {
                            "word": "Activation energy",
                            "def": "the amount of energy or energy barrier that reactants must overcome to achieve a chemical reaction. (Enzymes essentially lower this)",
                            "star": false,
                            "correctness": 0
                        },
                        "da2b1d2f-2cbe-9b05-aa36-08698981881b": {
                            "word": "active transport",
                            "def": "A process of transport that involves ATP energy input to move substances against diffusion involving protein transport.",
                            "star": false,
                            "correctness": 0
                        },
                        "08cdcb88-a92b-c426-575f-78fe1c29a817": {
                            "word": "alimentary canal",
                            "def": "the tube in the body where digestion takes place",
                            "star": false,
                            "correctness": 0
                        },
                        "57132b62-b393-f981-8ccd-ac6634b523c7": {
                            "word": "amino acid",
                            "def": "the monomer for protein; 20 different amino acids combine to produce unique proteins of varying sizes and shapes",
                            "star": false,
                            "correctness": 0
                        },
                        "750581e9-82a3-5205-5f5b-7eb82da8eedb": {
                            "word": "Amygdala",
                            "def": "the center for emotions, emotional behavior, and motivation.",
                            "star": false,
                            "correctness": 0
                        },
                        "e7bdf645-fa44-ba68-4233-50eedc0d2453": {
                            "word": "anatomy",
                            "def": "Deals with the structure (morphology- shape) of the body and its parts, in other words, what things are called and what they look like",
                            "star": false,
                            "correctness": 0
                        },
                        "d6592cab-9008-6d4e-dd04-d35552b9b6a6": {
                            "word": "anion",
                            "def": "ions with a negative charge that results when electrons are GAINED",
                            "star": false,
                            "correctness": 0
                        },
                        "d10fd46b-7518-f603-aea1-3351d42d585e": {
                            "word": "atomic number",
                            "def": "consists of the total number of protons in the nucleus of an atom",
                            "star": false,
                            "correctness": 0
                        },
                        "adac9ac9-9820-52ea-44a8-bbc2c7377ccc": {
                            "word": "autonomic nervous system",
                            "def": "the motor neurons of this system carry signals from the CNS to organs such as heart, intestines and glands; mostly involuntatry control.",
                            "star": false,
                            "correctness": 0
                        },
                        "7f547c70-9b36-6752-5456-c8e6df5b0444": {
                            "word": "bile",
                            "def": "contains no enzymes, but is a chemical substance (similar to a detergent) that separates small fat molecules and prevents them from clumping; increases rate of digestion.",
                            "star": false,
                            "correctness": 0
                        },
                        "7f68a267-f55d-cd9b-cc22-9fbacfc0d56f": {
                            "word": "Bohr Model",
                            "def": "shows the predicted location of electrons orbiting the nucleus",
                            "star": false,
                            "correctness": 0
                        },
                        "4778bfed-4367-4d08-28dc-95eebd1dd79f": {
                            "word": "Bolus",
                            "def": "chewed up clump of food about to be swallowed.",
                            "star": false,
                            "correctness": 0
                        },
                        "236e9734-d0c4-b15a-b5cb-6957466d4b06": {
                            "word": "Carbohydrate",
                            "def": "contains C, H, O and mainly functions as energy sources.",
                            "star": false,
                            "correctness": 0
                        },
                        "94bcf2d9-e227-0fac-7998-cd3c047bedf5": {
                            "word": "cardiac muscle",
                            "def": "Involuntary muscle tissue that is used to keep your heart pumping",
                            "star": false,
                            "correctness": 0
                        },
                        "fbf00c2b-0186-07b3-0040-ff73290739e3": {
                            "word": "cartilage",
                            "def": "A type of connective tissue that lubricates bones and provides cushion",
                            "star": false,
                            "correctness": 0
                        },
                        "dc3bda3e-2ee7-2966-4336-8a669403e021": {
                            "word": "catalyst",
                            "def": "Anything that speeds up a rate. In this case, an enzyme is a catalyst",
                            "star": false,
                            "correctness": 0
                        },
                        "4b071b58-cad1-aace-c805-db3cc28fa18a": {
                            "word": "cation",
                            "def": "ions with a positive charge that results when electrons are LOST",
                            "star": false,
                            "correctness": 0
                        },
                        "bfc56370-13e7-5c73-95c7-5d77149ba49b": {
                            "word": "cell theory",
                            "def": "Three statements about the origin of cells and the basis of all living things.",
                            "star": false,
                            "correctness": 0
                        },
                        "671b2c3f-66bd-f1ac-fdee-95f852a3941c": {
                            "word": "cell wall",
                            "def": "The outer layer surrounding cells. In plants it is made of cellulose, in bacteria it is made of another substance. It's function is to give structural support.",
                            "star": false,
                            "correctness": 0
                        },
                        "510592dd-05b2-c6cd-903f-bfb2f25de67d": {
                            "word": "cellulose",
                            "def": "a polysaccharide that is composed of long compacted chains of glucose; not digested in humans",
                            "star": false,
                            "correctness": 0
                        },
                        "173a9e0e-c6fe-dcc7-3ac3-83b4fbec8d8c": {
                            "word": "Cerebellum",
                            "def": "located below the cerebrum near the top of the spinal cord; coordinates body movements.",
                            "star": false,
                            "correctness": 0
                        },
                        "8d1f9ded-3530-a849-f12d-9193dc5fce0c": {
                            "word": "Cerebral cortex",
                            "def": "The outer region of the cerebrum' contains 10 billion neurons and is divided into different lobes controlling different functions.",
                            "star": false,
                            "correctness": 0
                        },
                        "ddfe9cf0-76d0-034b-d759-c3c938da9439": {
                            "word": "Cerebrum",
                            "def": "largest and most complex part of the brain; divided into two halves.",
                            "star": false,
                            "correctness": 0
                        },
                        "ed6ccdb9-6682-035f-8224-a3f8033c015d": {
                            "word": "Chemical digestion",
                            "def": "The action of enzymes breaking down macromolecules into smaller units and/or monomers.",
                            "star": false,
                            "correctness": 0
                        },
                        "eff57e4a-1638-487a-83f5-fbfdeb350ed7": {
                            "word": "chloroplast",
                            "def": "Green, oval structure inside any cell that photosynthesizes. (the site of the process)",
                            "star": false,
                            "correctness": 0
                        },
                        "e5a89f1f-b6ab-2007-cae4-2887cc174098": {
                            "word": "Circulatory system",
                            "def": "Delivers oxygen and nutrients to body cells and transports waste products to excretory organs",
                            "star": false,
                            "correctness": 0
                        },
                        "8fab0f1e-56d4-10ea-fa05-10da0068e54c": {
                            "word": "CNS",
                            "def": "Central nervous system composed of the brain and spinal cord.",
                            "star": false,
                            "correctness": 0
                        },
                        "8b822a8a-e38d-204e-cb7f-17b9f5b907c8": {
                            "word": "coefficient",
                            "def": "a number found in front of a chemical formula indicates the number of molecules",
                            "star": false,
                            "correctness": 0
                        },
                        "8a20e2b4-0dab-424e-5ced-2347f659fb6e": {
                            "word": "connective tissue",
                            "def": "This tissue holds together and supports other tissues; also cushions, insulates and connects organs",
                            "star": false,
                            "correctness": 0
                        },
                        "ac06d04b-28da-4bed-2acc-a9aac5cbfb02": {
                            "word": "Corpus Callosum",
                            "def": "a band of more than 100 million nerve fibers that connect the right and left hemispheres of the brain and supports communication between the two hemispheres.",
                            "star": false,
                            "correctness": 0
                        },
                        "9ad8caa3-fa78-e62b-38a4-abe2a4de4c73": {
                            "word": "covalent bond",
                            "def": "the sharing of electrons between two or more atoms",
                            "star": false,
                            "correctness": 0
                        },
                        "6e0f8382-4cb6-3c7f-3b87-dba0feb7508e": {
                            "word": "decomposition",
                            "def": "When an enzyme is used to break apart a macromolecule into smaller subunits (possibly into monomers)",
                            "star": false,
                            "correctness": 0
                        },
                        "00e35c69-c831-d9fb-112f-c9eac641c1f5": {
                            "word": "dehydration synthesis",
                            "def": "a reaction in which two monomers are linked together by a bond that involves losing an H+ and an OH- group to form water.",
                            "star": false,
                            "correctness": 0
                        },
                        "08abc82f-71b8-9f93-a8a3-e600b2421d9e": {
                            "word": "denature",
                            "def": "This is when the 3D shape of a protein is destroyed due to an environmental factor such as acids and bases or temperature.",
                            "star": false,
                            "correctness": 0
                        },
                        "88f12e15-dc62-8775-e8b4-3f281d605999": {
                            "word": "diffusion",
                            "def": "A process where particles/atoms/ions/molecules move around and eventually reach even distribution within an environment. Moving from high to low concentration.",
                            "star": false,
                            "correctness": 0
                        },
                        "3650cf7f-ce88-a202-ef44-ef30f86c2e9b": {
                            "word": "Digestive system",
                            "def": "Ingests food, breaks it down into smaller chemical units for use by the body, and eliminates undigested material",
                            "star": false,
                            "correctness": 0
                        },
                        "3459840c-4646-660b-83a9-0394f045f1ec": {
                            "word": "disaccharide",
                            "def": "two units of monosaccharides bonded together such as lactose or sucrose",
                            "star": false,
                            "correctness": 0
                        },
                        "e62db025-cc71-cb28-46b7-8b260b981865": {
                            "word": "dopamine",
                            "def": "a neurotransmitter found in the brain involved in chemical communication between neurons at the synapse",
                            "star": false,
                            "correctness": 0
                        },
                        "3f94e6e8-7221-c8b0-ebdb-fe8211716830": {
                            "word": "Effector",
                            "def": "an organ or cell that acts in response to a stimulus.",
                            "star": false,
                            "correctness": 0
                        },
                        "4270b88e-cb14-5b87-a5e5-8057560a1212": {
                            "word": "electron",
                            "def": "atomic particle with a negative charge orbiting the nucleus",
                            "star": false,
                            "correctness": 0
                        },
                        "7634a3d2-a828-c75e-d56a-eeb71bf27a85": {
                            "word": "elimination",
                            "def": "the removal of all undigested material from the large intestines (as feces)",
                            "star": false,
                            "correctness": 0
                        },
                        "b9313b49-9e90-a1fd-f739-6c7729f085ba": {
                            "word": "Endocrine system",
                            "def": "Secretes hormones that affect the functions of target cells, and thereby regulates the activities of the other organ systems",
                            "star": false,
                            "correctness": 0
                        },
                        "9b776508-571d-69ae-fb56-8489e45a2b88": {
                            "word": "endocytosis",
                            "def": "A process requiring ATP that involves the cell membrane wrapping around substances and creating a vesicle. \"Cell eating\" or \"bulk movement into the cell\"",
                            "star": false,
                            "correctness": 0
                        },
                        "50318798-69e5-9efd-b325-a829ce0fe131": {
                            "word": "endoplasmic reticulum",
                            "def": "An organelle that coordinates the movement of protein within the cell's cytoplasm.",
                            "star": false,
                            "correctness": 0
                        },
                        "ced124f1-a423-5073-13f2-73d83da23272": {
                            "word": "enzyme",
                            "def": "a protein molecule that lowers activation energy required for chemical reactions to take place by de-stabilizing bonds or by bringing molecules closer together.",
                            "star": false,
                            "correctness": 0
                        },
                        "2a8b9a4f-2ad4-5c71-0748-5d7d4c4e0cee": {
                            "word": "epidermis",
                            "def": "the outermost layer of skin composed of various types of specialised cells; constant renewal of these cells as they die",
                            "star": false,
                            "correctness": 0
                        },
                        "96162ff2-153d-8789-bfef-dc9e8460e4c2": {
                            "word": "epithelial tissue",
                            "def": "Sheets of cells that are closely packed and cover the entire surface of your body and form the lining of your internal organs",
                            "star": false,
                            "correctness": 0
                        },
                        "bec27f55-5793-c613-bba2-4761637c4a63": {
                            "word": "esophagus",
                            "def": "the long tube that connects the mouth with the stomach; carries out peristalsis.",
                            "star": false,
                            "correctness": 0
                        },
                        "d6738d4b-3869-f47d-c5d3-a98440372022": {
                            "word": "eukaryotic",
                            "def": "Refers to a cell that has a nucleus and various organelles. Examples are plant and animal cells.",
                            "star": false,
                            "correctness": 0
                        },
                        "d1ae2b6b-12bf-2c27-fe33-28e36809d22b": {
                            "word": "Excretory system",
                            "def": "Removes waste products from the body and regulates the chemical makeup of the blood",
                            "star": false,
                            "correctness": 0
                        },
                        "07970f03-a670-1e1f-0d25-160089ac87f5": {
                            "word": "exocytosis",
                            "def": "A process requiring ATP that involves the cell membrane fusing with a vesicle inside the cell and releasing the contents out of the cell. \"bulk movement out of the cell\"",
                            "star": false,
                            "correctness": 0
                        },
                        "fa181a77-d380-9159-8170-616dde6d562c": {
                            "word": "facilitated diffusion",
                            "def": "A process of transport into a cell involving passage through a transport or channel protein.",
                            "star": false,
                            "correctness": 0
                        },
                        "0d5fcc59-7141-7375-3556-aaa3d69a8a52": {
                            "word": "feedback loop",
                            "def": "A negative response to return conditions back to normal; negative meaning the response is in the opposite direction of the change",
                            "star": false,
                            "correctness": 0
                        },
                        "64f6e27c-67cf-ba13-9926-b456e0b8ed07": {
                            "word": "gallbladder",
                            "def": "stores bile and releases it into the small intestine",
                            "star": false,
                            "correctness": 0
                        },
                        "60afacf5-7662-6dcb-3887-e2a15897e5c7": {
                            "word": "glucagon",
                            "def": "targets muscle and liver cells and communicates to break down glycogen and release glucose into the bloodstream",
                            "star": false,
                            "correctness": 0
                        },
                        "290bf901-ff6c-9e4b-dd3a-e409a5ed4369": {
                            "word": "glycogen",
                            "def": "a branched polysaccharide composed of glucose and the main storage for glucose in animals",
                            "star": false,
                            "correctness": 0
                        },
                        "54bcaaaa-9403-9b59-b651-a2f8660d14a5": {
                            "word": "golgi body/apparatus",
                            "def": "An organelle that performs changes to and transport of proteins.",
                            "star": false,
                            "correctness": 0
                        },
                        "8378c60e-f3eb-1628-e067-3d9007d237a0": {
                            "word": "Hippocampus",
                            "def": "is associated mainly with memory, in particular long-term memory.",
                            "star": false,
                            "correctness": 0
                        },
                        "5b1c9c7e-6989-b209-0939-d965815f9dfa": {
                            "word": "homeostasis",
                            "def": "maintaining a stable internal environment",
                            "star": false,
                            "correctness": 0
                        },
                        "345e1a60-b1a1-bdcc-38cb-d7f10c162a33": {
                            "word": "hormone",
                            "def": "A messenger molecule that is released from certain cells and will target other cells in order to cause changes within those cells.",
                            "star": false,
                            "correctness": 0
                        },
                        "d5167076-300d-02a4-fed7-1e2d614b811e": {
                            "word": "Hydrolysis",
                            "def": "a reaction in which a bond between two monomers is broken by the addition of water (H+ and OH-).",
                            "star": false,
                            "correctness": 0
                        },
                        "f09a7beb-f114-e297-6b9a-622185ca4bca": {
                            "word": "hydrophilic",
                            "def": "Any molecule that can bond with water. These are polar, having a charge.",
                            "star": false,
                            "correctness": 0
                        },
                        "609e7e07-5349-22d5-c150-50ec9a3efc7a": {
                            "word": "hydrophobic",
                            "def": "Any molcule that repels water. A long chain of carbon bonded only with hydrogen is an example.",
                            "star": false,
                            "correctness": 0
                        },
                        "8f41d03b-15ee-3d71-82fb-b221df65475e": {
                            "word": "hypertonic",
                            "def": "A solution that contains a very high concentration of a solute (in comparison to another solution, such as a cell)",
                            "star": false,
                            "correctness": 0
                        },
                        "2182cf8e-39de-465e-7571-580905065748": {
                            "word": "hypothalamus",
                            "def": "part of the brain that helps to regulate body temperature, blood pressure, hunger, thirst and emotions.",
                            "star": false,
                            "correctness": 0
                        },
                        "90d33b81-067d-4474-8ca6-6ae49ae53283": {
                            "word": "hypotonic",
                            "def": "A solution that contains a lower concentration of a solute compared to that of another solution.",
                            "star": false,
                            "correctness": 0
                        },
                        "7f904c4a-0f5d-21db-4d9f-2f83ea4c25e1": {
                            "word": "Immune system",
                            "def": "Defends body against infections and cancer cells",
                            "star": false,
                            "correctness": 0
                        },
                        "98a2ad8c-3f54-b777-92e4-5ac28247a0ec": {
                            "word": "ingestion",
                            "def": "The act of eating or drinking",
                            "star": false,
                            "correctness": 0
                        },
                        "8cbe9221-91b2-3fbe-6249-d0f6c0d67f3f": {
                            "word": "insulin",
                            "def": "targets muscle and liver cells and communicates to absorb/remove glucose from the bloodstream",
                            "star": false,
                            "correctness": 0
                        },
                        "c5d2f5a4-ea08-79d9-ab58-c726ad6ecde9": {
                            "word": "Integration",
                            "def": "occurs when the CNS interprets the sensory neurons through coordination within interneurons and relays this to the motor neurons.",
                            "star": false,
                            "correctness": 0
                        },
                        "437ab961-cbc4-0186-a841-9f0f454d68e2": {
                            "word": "Integumentary system",
                            "def": "Covers the body and protects it from injury, infection, excessive heat or cold and drying out",
                            "star": false,
                            "correctness": 0
                        },
                        "b6f43770-8318-9c46-79dc-60a046f138b0": {
                            "word": "Interneurons",
                            "def": "neurons located only within the CNS",
                            "star": false,
                            "correctness": 0
                        },
                        "6ca29f00-10cb-9b97-2afc-d287e6a0a0ba": {
                            "word": "interstitial fluid",
                            "def": "an aqueous solution that makes up th internal environment surrounding cells/tissues",
                            "star": false,
                            "correctness": 0
                        },
                        "21766be4-aa82-5630-2fc4-adef316a5190": {
                            "word": "ionic bond",
                            "def": "results when atoms which have lost or gained electrons become charged and attracted to one another",
                            "star": false,
                            "correctness": 0
                        },
                        "57c18d58-d0e3-e655-7ae4-895f89355fe0": {
                            "word": "isotonic",
                            "def": "A solution that contains an equal amount solute as compared to another solution.",
                            "star": false,
                            "correctness": 0
                        },
                        "3aee7ed5-348c-0a25-47db-5257612dcdfd": {
                            "word": "Lewis dot diagram",
                            "def": "a diagram that shows ONLY the valence electrons of an atom",
                            "star": false,
                            "correctness": 0
                        },
                        "f2869c61-15ee-8915-a02e-171e924c1ed7": {
                            "word": "lipid bilayer",
                            "def": "The structure of the cell membrane enclosing all living cells; including bacteria. It is a two layer 'sandwich' of phospholipids.",
                            "star": false,
                            "correctness": 0
                        },
                        "fe7fdfe2-5eac-4ff4-a6ad-d1a563c03bac": {
                            "word": "lipid",
                            "def": "class of molecules that is water insoluble and stores a great amount of energy.",
                            "star": false,
                            "correctness": 0
                        },
                        "ddf37f75-b4ed-e582-b099-fe377645f140": {
                            "word": "Lymphatic system",
                            "def": "Supports function of the circulatory system by returning fluid to blood vessels near the heart; also functions as part of the immune system",
                            "star": false,
                            "correctness": 0
                        },
                        "d4e7fb72-c44f-5542-1850-2bf88d666b5d": {
                            "word": "Lysosome",
                            "def": "A vesicle in the cytoplasm that contains digestive enzymes to break down invading cells or worn out cell parts.",
                            "star": false,
                            "correctness": 0
                        },
                        "c60f71b7-9ed5-10f6-9d77-4532955eee14": {
                            "word": "Mechanical digestion",
                            "def": "Also known as mastication- chewing of food to break into down into smaller pieces with greater surface area.",
                            "star": false,
                            "correctness": 0
                        },
                        "0c527ef1-c350-ee1d-83b9-f9b68408d98e": {
                            "word": "medulla oblangata",
                            "def": "part of the brain stem which controls breathing and regulated sleep",
                            "star": false,
                            "correctness": 0
                        },
                        "6ed53ae1-6639-ff68-d068-ab03cd28d485": {
                            "word": "Minerals",
                            "def": "inorganic nutrients that play various roles in the body. examples include iron, iodine and calcium",
                            "star": false,
                            "correctness": 0
                        },
                        "212b3b17-129c-5a60-7f4e-68015ae2e6ba": {
                            "word": "mitochondria",
                            "def": "An organelle where cellular respiration takes place.",
                            "star": false,
                            "correctness": 0
                        },
                        "57bf2964-99c0-fb90-2d2d-aca04c5ccca2": {
                            "word": "mitosis",
                            "def": "A four step process that separates the chromosomes in the nucleus of a cell during cell division.",
                            "star": false,
                            "correctness": 0
                        },
                        "d30a8447-3ffd-6a6d-8f6e-cff4fe8e512b": {
                            "word": "monomer",
                            "def": "single unit",
                            "star": false,
                            "correctness": 0
                        },
                        "73bb1cf9-a5ce-95cd-9c47-164130f8650e": {
                            "word": "monosaccharide",
                            "def": "single sugar such as glucose, galactose or fructose",
                            "star": false,
                            "correctness": 0
                        },
                        "190aaa5e-5a5c-79dc-0f7d-c8251dc6af57": {
                            "word": "Motor neurons",
                            "def": "neurons that carry signals away from the CNS to a muscle or gland",
                            "star": false,
                            "correctness": 0
                        },
                        "92642a3a-613c-1638-10ec-64badae609df": {
                            "word": "multicellular",
                            "def": "an organisms composed of more than one cell. As the organism becomes more complex the cells are organised into tissues.",
                            "star": false,
                            "correctness": 0
                        },
                        "97be75fc-e249-4a58-92c8-15ef80b44652": {
                            "word": "Muscular system",
                            "def": "Enables body movement and facial expressions essential to human communication",
                            "star": false,
                            "correctness": 0
                        },
                        "f0f932be-0d96-00a9-bbf2-8e752c8c2f50": {
                            "word": "Nervous system",
                            "def": "Coordinates body's activities by detecting stimuli and directing the body's responses",
                            "star": false,
                            "correctness": 0
                        },
                        "43828051-8b6b-3b3b-7938-ae979fb701a5": {
                            "word": "nervous tissue",
                            "def": "Tissue that forms the communication system that makes the behavior possible",
                            "star": false,
                            "correctness": 0
                        },
                        "b6e67345-f463-f616-1087-fe957f218213": {
                            "word": "neutron",
                            "def": "atomic particle without a charge, found in the nucleus of an atom",
                            "star": false,
                            "correctness": 0
                        },
                        "1d446910-508a-6db3-9dc1-7766eb699490": {
                            "word": "nucleus",
                            "def": "An organelle that houses DNA",
                            "star": false,
                            "correctness": 0
                        },
                        "930187cb-cba5-3bbd-a902-ffe5b372fbd3": {
                            "word": "Occipital Lobe",
                            "def": "lobe associated with vision",
                            "star": false,
                            "correctness": 0
                        },
                        "f2750771-2368-1c34-2175-4acd80d3c877": {
                            "word": "orbital",
                            "def": "a location where electrons are found; a pattern surrounding the nucleus; associated with energy of the electron",
                            "star": false,
                            "correctness": 0
                        },
                        "0d4422f3-4663-255a-993e-0342b9f0551e": {
                            "word": "organ system",
                            "def": "Consists of multiple organs that together perform a vital body function",
                            "star": false,
                            "correctness": 0
                        },
                        "247a93cd-4e14-be18-9194-dfc049f446e6": {
                            "word": "organ",
                            "def": "Consists of several tissues that together perform a specific task",
                            "star": false,
                            "correctness": 0
                        },
                        "e846222b-d944-fadd-4960-52cde5274ebb": {
                            "word": "Organic molecule",
                            "def": "composed of carbon as a backbone bonded with hydrogen and possibly oxygen and nitrogen attached.",
                            "star": false,
                            "correctness": 0
                        },
                        "44906d0b-22d3-0b69-0b7f-4c1fd12791c0": {
                            "word": "osmosis",
                            "def": "The process where water spreads out into the environment. Water will move from areas of high concentration to low concentration.",
                            "star": false,
                            "correctness": 0
                        },
                        "d8fef15c-85d9-93ef-79ac-f5600e51ef43": {
                            "word": "pancreas",
                            "def": "organ that is important for both regulating blood sugars (hormones) and secreting digestive enzymes (lipase, amylase, protease)",
                            "star": false,
                            "correctness": 0
                        },
                        "1aa6ade0-f15f-bf7e-298d-f6cbc88160cf": {
                            "word": "parasympathetic division",
                            "def": "division of the autonomic system that decreases the activity or relaxes the body",
                            "star": false,
                            "correctness": 0
                        },
                        "44f01aac-4a91-2bba-53fe-76e72670932f": {
                            "word": "Parietal Lobe",
                            "def": "lobe associated with taste, reading skills, sense of touch",
                            "star": false,
                            "correctness": 0
                        },
                        "b8a67f2f-231f-0278-bebc-74bf4cb46f0e": {
                            "word": "Peristalsis",
                            "def": "series of muscle contractions that push the bolus down the esophagus and continue to move digested food through the intestines.",
                            "star": false,
                            "correctness": 0
                        },
                        "006e155c-0dd9-4a6e-f92d-6e5719d3eb91": {
                            "word": "permeability",
                            "def": "The ability of something to \"permeate\" or pass through.",
                            "star": false,
                            "correctness": 0
                        },
                        "54f724b9-1be6-0738-79af-930707e77e58": {
                            "word": "pharynx",
                            "def": "the upper portion of the throat",
                            "star": false,
                            "correctness": 0
                        },
                        "75dc1f3a-58aa-4590-589f-9ddc1f596c88": {
                            "word": "phospholipid",
                            "def": "makes up the structure of the cell membrane",
                            "star": false,
                            "correctness": 0
                        },
                        "8f8dd65a-d679-67d1-b3cc-af378baef20a": {
                            "word": "photosynthesis",
                            "def": "A biochemical reaction involving the conversion of carbon dioxide and water into glucose and oxygen.",
                            "star": false,
                            "correctness": 0
                        },
                        "c0180431-470d-febd-51b2-5a4efde768e5": {
                            "word": "Physiology",
                            "def": "Studies the function of anatomical parts or asks the question, \"how do organs work\"? What is their job?",
                            "star": false,
                            "correctness": 0
                        },
                        "04a738f1-621d-2ade-5e23-2a16051dcf1f": {
                            "word": "PNS",
                            "def": "Peripheral nervous system composed of sensory and motor neurons.",
                            "star": false,
                            "correctness": 0
                        },
                        "7045faf4-b589-b5b3-8975-e12472b16845": {
                            "word": "polarity",
                            "def": "A molecule having a negative end and a positive end due to unequal sharing of electrons.",
                            "star": false,
                            "correctness": 0
                        },
                        "90f32361-c96c-faba-a783-518c90dba8ed": {
                            "word": "polymer",
                            "def": "many units (often repeating)",
                            "star": false,
                            "correctness": 0
                        },
                        "5189d47f-d773-e2ee-ca10-48d30e03275b": {
                            "word": "polymerization",
                            "def": "the process of building a polymer from monomers. Example would be to build a protein from amino acids.",
                            "star": false,
                            "correctness": 0
                        },
                        "7977f773-6212-ebba-6b8f-399bf7341524": {
                            "word": "polysaccharide",
                            "def": "long chains of monosaccharides (glucose) stored in a water insoluble form for energy storage or structural purposes.",
                            "star": false,
                            "correctness": 0
                        },
                        "d40930ca-eb76-b090-cca1-f02f9094b341": {
                            "word": "Prefrontal cortex",
                            "def": "located at the front of the frontal lobe; associated with planning, and greatly contributes to personality development.",
                            "star": false,
                            "correctness": 0
                        },
                        "30b9577c-ca1d-33e7-d5a2-4949fa6ae72a": {
                            "word": "prokaryotic",
                            "def": "Refers to a bacterium.",
                            "star": false,
                            "correctness": 0
                        },
                        "f1573ea0-8944-11d5-e78a-8c521d3c20d0": {
                            "word": "protein synthesis",
                            "def": "The process of producing protein involving DNA, RNA, amino acids and ribosomes.",
                            "star": false,
                            "correctness": 0
                        },
                        "3a95fb5f-73f4-4c1f-09c2-64becc836c3f": {
                            "word": "Proton",
                            "def": "atomic particle with a positive charge, found in the nucleus of an atom",
                            "star": false,
                            "correctness": 0
                        },
                        "443b8007-6b05-e613-6700-e5d3f9c9127f": {
                            "word": "Receptor",
                            "def": "collects information from the internal and external environment (pain, thermo, chemo, and photo are examples)",
                            "star": false,
                            "correctness": 0
                        },
                        "36132914-d0c0-406c-0baa-71727a49c9e5": {
                            "word": "Reflex arc",
                            "def": "receptor to sensory neuron to interneuron to motor neuron (pathway)",
                            "star": false,
                            "correctness": 0
                        },
                        "e8db5983-bf04-19dd-5e9d-c51cde60cce9": {
                            "word": "Reproductive system",
                            "def": "Produces gametes; the female system also provides the organs needed to support a developing embryo",
                            "star": false,
                            "correctness": 0
                        },
                        "76ee1c41-c835-d21e-66b0-e0f6cac0609f": {
                            "word": "Respiratory system",
                            "def": "Exchanges gases with the environment",
                            "star": false,
                            "correctness": 0
                        },
                        "4b119cd0-6fe1-8174-e814-60d702d1a926": {
                            "word": "ribosome",
                            "def": "An organelle found in all cells that is the site for protein production/synthesis.",
                            "star": false,
                            "correctness": 0
                        },
                        "8d710103-b640-3bb3-2861-442f35070986": {
                            "word": "saturated fat",
                            "def": "a fatty acid (chain) that is composed of single bonds between carbon with a maximum # of hydrogen atoms bonded; solid at room temperature and found in animals.",
                            "star": false,
                            "correctness": 0
                        },
                        "30e2e1fb-3ce4-9019-d46f-8d2b39efcd36": {
                            "word": "Sensory neurons",
                            "def": "neurons that carry information about stimuli to the CNS",
                            "star": false,
                            "correctness": 0
                        },
                        "b1da0a82-9e68-3f4d-9bc8-82197ec147b6": {
                            "word": "serotonin",
                            "def": "a neurotransmitter found in the brain that is associated with sleep",
                            "star": false,
                            "correctness": 0
                        },
                        "5403a1ab-901a-e78d-30a3-697f7900ee5b": {
                            "word": "skeletal muscle",
                            "def": "Voluntary muscle tissue that is attached to bone and allows movement of the body",
                            "star": false,
                            "correctness": 0
                        },
                        "2aa3b58a-7921-fe7c-f6bd-0e45e06dcc5c": {
                            "word": "Skeletal system",
                            "def": "Provides the body support, protects certain organs such as the brain and lungs, and works with the muscular system in body movements",
                            "star": false,
                            "correctness": 0
                        },
                        "16d2ef65-df2f-535b-6025-881ca2086180": {
                            "word": "smooth muscle",
                            "def": "Involuntary muscle tissue that provide support and movement within organs",
                            "star": false,
                            "correctness": 0
                        },
                        "78a3a841-35ef-3759-78e2-a893022a0e76": {
                            "word": "somatic nervous system",
                            "def": "the motor neurons of this system carry signals from the CNS to the skeletal muscles; mostly voluntary control.",
                            "star": false,
                            "correctness": 0
                        },
                        "5cacb258-49dd-83d8-30a3-f5d53bb8cdd0": {
                            "word": "starch",
                            "def": "a branched polysaccharide composed of glucose and the main storage for glucose in plants",
                            "star": false,
                            "correctness": 0
                        },
                        "c82fa744-c537-4dbc-702a-16101f30aac7": {
                            "word": "steroids",
                            "def": "ring structured lipids that serve various functions including hormones and cholesterol",
                            "star": false,
                            "correctness": 0
                        },
                        "46f03cb8-7d78-038b-786f-6ace0d95bf81": {
                            "word": "Stimulus",
                            "def": "Information about an environmental change; collected by various receptors.",
                            "star": false,
                            "correctness": 0
                        },
                        "0abfddf2-3ca4-bd1d-d970-3a1ed86e2bca": {
                            "word": "subscript",
                            "def": "a number found at the base of the element symbol which indicates the total number of atoms of that element in a chemical formula",
                            "star": false,
                            "correctness": 0
                        },
                        "3e8adac1-29ad-f274-4e9c-64beaae9c9ac": {
                            "word": "substrate",
                            "def": "the molecule (s) that come in contact with an enzyme. These are specific to each enzyme.",
                            "star": false,
                            "correctness": 0
                        },
                        "647d2544-897a-13f8-bc4e-9f74f3f0594d": {
                            "word": "surface area",
                            "def": "The total surface that surrounds an object. In a cell the surface area would be represented by the cell membrane enclosing the cell.",
                            "star": false,
                            "correctness": 0
                        },
                        "b666c3e9-d26d-8076-4dd1-6b6e86937e2e": {
                            "word": "sympathetic division",
                            "def": "division of the autonomic system that increases the general level of activity in the body",
                            "star": false,
                            "correctness": 0
                        },
                        "1e88be3a-b74e-afa8-fe8e-6f42b270e201": {
                            "word": "synthesis",
                            "def": "When an enzyme is used to assemble two substrate molecules.",
                            "star": false,
                            "correctness": 0
                        },
                        "667cb574-9173-a1b7-06db-69655633caa7": {
                            "word": "Temporal Lobe",
                            "def": "lobe associated with hearing and smell",
                            "star": false,
                            "correctness": 0
                        },
                        "c6b10532-95ba-ec95-894e-37c50b340491": {
                            "word": "Thalamus",
                            "def": "located in the middle of the brain, regulated and sorts information going to and coming from the cerebral cortex",
                            "star": false,
                            "correctness": 0
                        },
                        "e726e836-494a-f0a7-1538-c523403e8c6d": {
                            "word": "thermoreceptor",
                            "def": "found in the skin and certain internal organs which detects heat and cold",
                            "star": false,
                            "correctness": 0
                        },
                        "4cd02fb2-59ab-efa7-0186-5c5aa3be0f4d": {
                            "word": "tissue",
                            "def": "A group of similar cells that are attached and perform a specific function.",
                            "star": false,
                            "correctness": 0
                        },
                        "e7ff33db-af72-1150-9233-acebebf50efc": {
                            "word": "triglyceride",
                            "def": "composed of glycerol (3 carbons) and 3 chains of fatty acids. Triglycerides are hydrophobic.",
                            "star": false,
                            "correctness": 0
                        },
                        "abcd16c4-1a36-df37-242d-ce7f6d887a6e": {
                            "word": "unicellular",
                            "def": "a single celled organism.",
                            "star": false,
                            "correctness": 0
                        },
                        "d1abdfa0-08a6-51ac-ff4c-0ec9a641e114": {
                            "word": "unsaturated fat",
                            "def": "a fatty acid (chain) that is composed of one or more double bonds between carbon; liquid at room temperature and found in plant sources.",
                            "star": false,
                            "correctness": 0
                        },
                        "d24f426f-ab51-23b5-9369-22e843afcfef": {
                            "word": "vacuole",
                            "def": "A defined space within a cell. In plants, a central vacuole is important for storing water.",
                            "star": false,
                            "correctness": 0
                        },
                        "6a16ff33-2a6f-8a07-6fe6-8dfb2c47f924": {
                            "word": "valence electron",
                            "def": "outer most electrons that are associated with bonding",
                            "star": false,
                            "correctness": 0
                        },
                        "6a6381cc-3dac-5123-4d5b-b35f5b230ec8": {
                            "word": "villi",
                            "def": "the folds of the small intestines; used to create greater surface area for absorption of digested nutrients.",
                            "star": false,
                            "correctness": 0
                        },
                        "bb406dff-c3f6-3f34-6911-f7a82134fdf2": {
                            "word": "vitamins",
                            "def": "organic molecules that play a role in many processes in the body such as metabolism of food (assists enzymes work better).",
                            "star": false,
                            "correctness": 0
                        }
                    }
                }
            },
            "ids": [
                "1c5194eb-a5e8-a495-c395-683a28f2a233",
                "a5d669cc-5c2b-5b77-46fc-bb909f3ee653"
            ]
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
    let index = state.study_sets.sets[update.uuid].practise.all.indexOf(update.tuuid)
    if (index < 0) return -1
    state.study_sets.sets[update.uuid].practise.all.splice(index,1)
  },
  add_wrong_term(state, update) {
    state.study_sets.sets[update.uuid].practise.wrong.push(this.tuuid)
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