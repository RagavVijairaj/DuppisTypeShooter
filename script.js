
const wordCategories = {
    tech: ['variable', 'function', 'class', 'object', 'array', 'list', 'dictionary', 'loop', 'iteration', 'recursion', 'inheritance', 'polymorphism', 'abstraction', 'encapsulation', 'syntax', 'parameter', 'argument', 'method', 'constructor', 'interface', 'lambda', 'closure', 'callback', 'async', 'await', 'thread', 'process', 'queue', 'stack', 'heap', 'binary', 'decimal', 'hexadecimal', 'bitwise', 'operator', 'expression', 'statement', 'block', 'scope', 'namespace', 'module', 'package', 'import', 'export', 'reference', 'pointer', 'memory', 'byte', 'integer', 'float', 'boolean', 'char', 'string', 'enum', 'struct', 'typedef', 'const', 'mutable', 'static', 'dynamic', 'virtual', 'override', 'super', 'subclass', 'baseclass', 'getter', 'setter', 'property', 'stream', 'buffer', 'threading', 'concurrency', 'parallelism', 'synchronization', 'deadlock', 'racecondition', 'event', 'listener', 'signal', 'slot', 'promise', 'deferred', 'error', 'exception', 'try', 'catch', 'finally', 'throw', 'raise', 'debug', 'trace', 'log', 'compiler', 'interpreter', 'runtime', 'bytecode', 'opcode', 'linker', 'loader', 'build', 'test', 'deploy', 'version', 'repository', 'branch', 'commit', 'merge', 'rebase', 'push', 'pull', 'fork', 'clone', 'staging', 'diff', 'patch', 'hotfix', 'rollback', 'release', 'snapshot', 'container', 'docker', 'kubernetes', 'cloud', 'server', 'client', 'api', 'endpoint', 'request', 'response', 'token', 'authentication', 'authorization', 'session', 'cookie', 'csrf', 'hash', 'encrypt', 'decrypt', 'salt', 'key', 'cert', 'firewall', 'proxy', 'dns', 'ip', 'socket', 'port', 'protocol', 'tcp', 'udp', 'ftp', 'http', 'https', 'json', 'xml', 'yaml', 'parsing', 'encoding', 'decoding', 'serialization', 'deserialization', 'binarytree', 'graph', 'node', 'edge', 'vertex', 'linkedlist', 'deque', 'hashtable', 'hashmap', 'set', 'matrix', 'algorithm', 'search', 'sort', 'divide', 'conquer', 'backtracking', 'greedy', 'dynamicprogramming', 'brute', 'force', 'optimization', 'complexity', 'bigoh', 'notation', 'linear', 'logarithmic', 'quadratic', 'exponential', 'constant', 'recursive', 'iterative', 'sandbox', 'virtualmachine', 'garbagecollection', 'allocation', 'pointerarithmetic', 'dereference', 'null', 'stackoverflow', 'segfault', 'interrupt', 'signal', 'timer', 'handler', 'yield', 'pause', 'suspend', 'resume', 'terminate', 'abort', 'forking', 'threadpool', 'lock', 'mutex', 'semaphore', 'barrier', 'atomic', 'transaction', 'commitlog', 'replication', 'sharding', 'index', 'cache', 'page', 'fault', 'buffering', 'paging', 'swapping', 'blocksize', 'inode', 'filesystem', 'mount', 'unmount', 'partition', 'formatting', 'journaling', 'checksum', 'redundancy', 'parity', 'disk', 'raid', 'sata', 'scsi', 'io', 'input', 'output', 'stdin', 'stdout', 'stderr', 'logging', 'profiling', 'benchmark', 'debugger', 'linting', 'testing', 'unit', 'integration', 'regression', 'smoke', 'mock', 'stubbing', 'dependency', 'inject', 'containerization', 'orchestration', 'blueprint', 'pattern', 'strategy', 'singleton', 'factory', 'builder', 'observer', 'command', 'decorator', 'adapter', 'bridge', 'composite', 'proxy', 'visitor', 'mediator', 'flyweight', 'memento', 'iterator', 'state', 'chain', 'responsibility', 'facade', 'cohesion', 'coupling', 'inversion', 'aggregation', 'composition', 'association', 'cardinality', 'polymorphic', 'staticbinding', 'dynamicbinding', 'reflection', 'meta', 'programming', 'parser', 'lexer', 'grammar', 'tokenizer', 'syntax', 'tree', 'intermediate', 'representation', 'abstract', 'concrete', 'semantic', 'analysis', 'symboltable', 'codegen', 'jit', 'aot', 'optimization', 'constantfolding', 'inlining', 'loopunrolling', 'deadcode', 'elimination', 'peephole', 'registerallocation', 'pipeline', 'branchprediction', 'speculation', 'outoforder', 'execution', 'superscalar', 'multithreading', 'simd', 'mimd', 'gpu', 'shader', 'texture', 'vertex', 'rasterization', 'rendering', 'frustum', 'clipping', 'shading', 'blending', 'compositing', 'anti', 'aliasing', 'sampling', 'filtering', 'postprocessing', 'animation', 'skeleton', 'rigging', 'morphing', 'simulation', 'collision', 'physics', 'pathfinding', 'fuzzylogic', 'neuralnetwork', 'geneticalgorithm', 'machinelearning', 'reinforcement', 'supervised', 'unsupervised', 'clustering', 'classification', 'regression', 'dimensionality', 'reduction', 'feature', 'extraction', 'normalization', 'smoothing', 'histogram', 'segmentation', 'keypoint', 'detection', 'matching', 'pose', 'estimation', 'calibration', 'stereo', 'vision', 'pointcloud', 'triangulation', 'meshing', 'voxelization', 'raytracing', 'raycasting', 'pathtracing', 'denoising', 'lightrays', 'bloom', 'reflection', 'refraction', 'diffraction', 'occlusion', 'shadows', 'softshadow', 'volumetrics', 'caustics', 'subsurface', 'scattering', 'baking', 'normalmaps', 'heightmaps', 'bumpmaps', 'uv', 'mapping', 'unwrapping', 'tiling', 'procedural', 'textures', 'material', 'editor', 'shadergraph', 'scriptable', 'pipeline', 'renderqueue', 'rendertexture', 'renderbuffer', 'cubemap', 'environment', 'probe', 'globalillumination', 'ambient', 'occlusion', 'hdr', 'tone', 'mapping', 'lut', 'colorgrading', 'depth', 'of', 'field', 'motionblur', 'lensflare', 'chromatic', 'aberration', 'vignetting', 'grain', 'edge', 'detection', 'sobel', 'filter', 'canny', 'prewitt', 'hough', 'transform', 'haar', 'cascade', 'hog', 'descriptors', 'sift', 'surf', 'orb', 'brisk', 'brief', 'freak', 'gftt', 'fast', 'akaze', 'lk', 'opticalflow', 'kalman', 'filter', 'pid', 'control', 'fuzzy', 'logic', 'markov', 'montecarlo', 'bayesian', 'decision', 'trees', 'svm', 'logistic', 'regression', 'knn', 'kmeans', 'pca', 'ica', 'lda', 'qda', 'hmm', 'cnn', 'rnn', 'lstm', 'gru', 'transformer', 'bert', 'gpt', 'attention', 'mechanism', 'embedding', 'vector', 'space', 'reduction', 'dimensionality', 'tensors', 'lossfunction', 'gradient', 'descent', 'backpropagation', 'regularization', 'dropout', 'batch', 'normalization', 'augmentation', 'training', 'dataset', 'validation', 'testing', 'epoch', 'iteration', 'learningrate', 'optimizer', 'adam', 'sgd', 'momentum', 'rmsprop', 'adagrad', 'adadelta', 'rectified', 'linear', 'units', 'relu', 'sigmoid', 'tanh', 'softmax', 'crossentropy', 'mean', 'squared', 'error', 'loglikelihood', 'information', 'gain', 'entropy', 'mutual', 'dependency', 'bias', 'variance', 'tradeoff', 'overfitting', 'underfitting', 'cross', 'validation', 'kfold', 'leave', 'out', 'split', 'shuffle', 'sampling', 'stratified', 'bootstrap', 'leaveone', 'probability', 'bayes', 'rule', 'distribution', 'gaussian', 'bernoulli', 'poisson', 'binomial', 'geometric', 'uniform', 'exponential', 'weibull', 'lognormal', 'cauchy', 'chi', 'square', 'studentt', 'hypergeometric', 'kde', 'fourier', 'transform', 'wavelet', 'scipy', 'matplotlib', 'numpy', 'pandas', 'sklearn', 'pytorch', 'tensorflow', 'keras', 'scikit', 'opencv', 'dlib', 'pillow', 'opencv', 'tensorflow', 'r', 'stochastic', 'gradient', 'descent', 'arima', 'tsa', 'boosting', 'random', 'forest', 'adaboost', 'xgboost', 'lightgbm', 'catboost', 'decision', 'tree', 'xgboost', 'linear', 'regression', 'logistic', 'neural', 'network', 'svm', 'kmeans', 'knn', 'generative', 'adversarial', 'network', 'autoencoder', 'reinforcement', 'learning', 'aiclassification'],
  nature: [
'tree', 'flower', 'plant', 'bush', 'grass', 'fern', 'moss', 'algae', 'vine', 'shrub', 'cactus', 'palm', 'oak', 'pine', 'maple', 'cedar', 'birch', 'willow', 'elm', 'spruce', 'redwood', 'sequoia', 'bamboo', 'rose', 'tulip', 'lily', 'daisy', 'orchid', 'sunflower', 'lavender', 'jasmine', 'hibiscus', 'magnolia', 'lotus', 'iris', 'daffodil', 'marigold', 'petunia', 'violet', 'chrysanthemum', 'azalea', 'camellia', 'hydrangea', 'geranium', 'peony', 'dandelion', 'carnation', 'sage', 'thyme', 'basil', 'mint', 'parsley', 'rosemary', 'coriander', 'clover', 'ivy', 'honeysuckle', 'bluebell', 'poppy', 'mimosa', 'acacia', 'heather', 'yucca', 'sedge', 'reed', 'lilac', 'wisteria', 'begonia', 'bougainvillea', 'creeper', 'cycad', 'ginkgo', 'eucalyptus', 'baobab', 'cypress', 'juniper', 'mahogany', 'teak', 'ebony', 'tamarind', 'banyan', 'fig', 'mango', 'apple', 'pear', 'peach', 'plum', 'cherry', 'olive', 'banana', 'papaya', 'coconut', 'kiwi', 'grape', 'berry', 'raspberry', 'blueberry', 'strawberry', 'blackberry', 'cranberry', 'elderberry', 'pineapple', 'guava', 'lychee', 'pomegranate', 'date', 'melon', 'cucumber', 'zucchini', 'pumpkin', 'squash', 'carrot', 'beet', 'radish', 'turnip', 'potato', 'tomato', 'onion', 'garlic', 'ginger', 'pepper', 'chili', 'lettuce', 'cabbage', 'spinach', 'broccoli', 'cauliflower', 'artichoke', 'mushroom', 'fungus', 'lichen', 'mold', 'spore', 'seed', 'pod', 'bulb', 'cone', 'root', 'stem', 'leaf', 'branch', 'twig', 'bark', 'trunk', 'sap', 'pollen', 'nectar', 'petal', 'bud', 'thorn', 'needle', 'frond', 'bract', 'succulent', 'evergreen', 'deciduous', 'annual', 'perennial', 'monocot', 'dicot', 'xylem', 'phloem', 'stamen', 'pistil', 'ovule', 'sepal', 'chlorophyll', 'photosynthesis', 'pollination', 'germination', 'cotyledon', 'embryo', 'hybrid', 'species', 'genus', 'family', 'order', 'class', 'phylum', 'kingdom', 'flora', 'fauna', 'mammal', 'reptile', 'amphibian', 'bird', 'fish', 'insect', 'arachnid', 'crustacean', 'mollusk', 'annelid', 'arthropod', 'echinoderm', 'coral', 'jellyfish', 'starfish', 'sponge', 'snail', 'slug', 'clam', 'oyster', 'scallop', 'squid', 'octopus', 'crab', 'lobster', 'shrimp', 'barnacle', 'ant', 'bee', 'wasp', 'beetle', 'butterfly', 'moth', 'dragonfly', 'grasshopper', 'cricket', 'spider', 'scorpion', 'centipede', 'millipede', 'worm', 'leech', 'frog', 'toad', 'salamander', 'newt', 'lizard', 'snake', 'turtle', 'crocodile', 'alligator', 'gecko', 'iguana', 'chameleon', 'komodo', 'dinosaur', 'sparrow', 'pigeon', 'eagle', 'hawk', 'falcon', 'owl', 'vulture', 'parrot', 'penguin', 'peacock', 'flamingo', 'ostrich', 'duck', 'swan', 'goose', 'chicken', 'turkey', 'robin', 'hummingbird', 'kingfisher', 'woodpecker', 'pelican', 'heron', 'crane', 'swan', 'swallow', 'bat', 'rat', 'mouse', 'squirrel', 'chipmunk', 'beaver', 'otter', 'seal', 'walrus', 'dolphin', 'whale', 'shark', 'trout', 'salmon', 'tuna', 'bass', 'eel', 'ray', 'seahorse', 'jellyfish', 'lamprey', 'platypus', 'kangaroo', 'koala', 'possum', 'wombat', 'fox', 'wolf', 'bear', 'lion', 'tiger', 'leopard', 'cheetah', 'panther', 'jaguar', 'lynx', 'cougar', 'elephant', 'rhinoceros', 'hippopotamus', 'zebra', 'giraffe', 'antelope', 'gazelle', 'buffalo', 'bison', 'yak', 'camel', 'alpaca', 'llama', 'horse', 'donkey', 'mule', 'sheep', 'goat', 'cow', 'bull', 'pig', 'boar', 'rabbit', 'hare', 'porcupine', 'hedgehog', 'badger', 'ferret', 'weasel', 'skunk', 'otter', 'raccoon', 'monkey', 'ape', 'chimpanzee', 'gorilla', 'orangutan', 'lemur', 'baboon', 'mandrill', 'tamarin', 'marmoset', 'pangolin', 'sloth', 'armadillo', 'anteater', 'aardvark', 'platypus', 'opossum', 'porpoise', 'narwhal', 'manatee', 'walrus'],
    food: ['pizza','pasta','burger','sushi','tacos','burrito','quesadilla','enchiladas','ramen','tempura','paella','risotto','lasagna','gnocchi','samosa','biryani','curry','naan','paneer','dumplings','springroll','wonton','pho','banhmi','dimsum','gyoza','miso','kimchi','bibimbap','bulgogi','padthai','satay','rendang','laksa','souvlaki','moussaka','falafel','shawarma','hummus','tabbouleh','baklava','tagine','couscous','ratatouille','fondue','raclette','croissant','baguette','macaron','crepes','omelette','gazpacho','tapas','bruschetta','polenta','fajitas','chili','barbecue','meatloaf','macaroni','cornbread','grits','jambalaya','gumbo','clambake','chowder','bagel','pretzel','strudel','schnitzel','sausage','goulash','borscht','blini','pierogi','stroganoff','ceviche','empanada','arepa','tostones','tamale','poutine','kebab','bangers','mash','toadinthehole','shepherdspie','scotchegg','fishandchips','haggis','cullenskink','blackpudding','bubbleandsqueak','spaghetti','carbonara','fettuccine','alfredo','beefstroganoff','chickentikka','roganjosh','vindaloo','kachori','gulabjamun','jalebi','pavbhaji','uttapam','idli','dosa','poori','vindaye','matoke','ugali','jollof','suya','cassava','malvapudding','bobotie','chakalaka','kofta','dolma','bakso','nasigoreng','soto','ayampenyet','bibingka','adobo','lechon','karekare','sinigang','halohalo','miegoreng','congee','katsu','teriyaki','udon','soba','mochi','taiyaki','takoyaki','yakitori','okonomiyaki','kimbap','tteokbokki','soondae','galbi','naengmyeon','dongchimi','dal','sambar','rasam','panipuri','bhelpuri','paprichaat','dahipuri','sevpuri','cholebhature','rajmachawal','butterchicken','malaikofta','shahipaneer','khichdi','samosachaat','alooparatha','paneertikka','keemanaan','roti','halwa','sheerkhurma','basbousa','kunafa','maamoul','fattoush','zatar','manakish','labneh','kibbeh','foulmoudammas','mujadara','shorba','yakhni','gulai','sayurlodeh','tahugoreng','rojak','kuelapis','otakotak','cendol','roticanai','charkwayteow','rotijohn','hainanesechickenrice','nasilemak','kwaychap','kuih','carpaccio','caponata','ossobuco','cioppino','ziti','braciole','ribollita','zuppa','panzanella','tortilla','pozole','menudo','sopes','elote','carnitas','cochinitapibil','birria','molletes','pambazo','tequilalimechicken','chimichanga','flan','tartetatin','beignets','eclair','clafoutis','galette','profiteroles','madeleine','millefeuille'],
    space: ['planet','star','galaxy','universe','nebula','asteroid','comet','meteor','meteorite','meteoroid','orbit','gravity','blackhole','whitedwarf','redgiant','supernova','quasar','pulsar','constellation','solarsystem','satellite','spacecraft','spaceship','rocket','astronaut','cosmonaut','telescope','observatory','eclipse','lunareclipse','solareclipse','fullmoon','newmoon','crescentmoon','waxingmoon','waningmoon','moon','sun','earth','mars','venus','jupiter','saturn','uranus','neptune','pluto','mercury','dwarfplanet','kuiperbelt','oortcloud','exoplanet','redshift','blueshift','lightyear','parsec','astronomicalunit','cosmicray','darkmatter','darkenergy','eventhorizon','singularity','bigbang','cosmos','spacetime','aurora','auroraborealis','auroraaustralis','spacestation','internationalspacestation','saturnsrings','asteroidbelt','spaceprobe','launchpad','rover','spacewalk','spaceshuttle','module','thruster','ionengine','solarflare','corona','chromosphere','photosphere','sunspot','solarwind','coronalmass ejection','interstellar','intergalactic','deepspace','zerogravity','microgravity','escapevelocity','cosmicmicrowavebackground','orbiting','synchronousorbit','geostationaryorbit','lowearthorbit','trajectory','apogee','perigee','perihelion','aphelion','synodic','sidereal','ellipticalorbit','keplerslaws','dopplereffect','celestialsphere','zenith','nadir','horizon','astronomy','astrophysics','cosmology','astrometry','planetarium','spacetimecontinuum','gravitationallensing','spacedebris','spacejunk','cryovolcano','hydrothermalvent','exobiology','astrobiology','habitablezone','tidallocking','superearth','hotjupiter','icegiant','browndwarf','protoplanetarydisk','binarystar','trinarystar','stellarnursery','darknebula','emissionnebula','reflectionnebula','globularcluster','opencluster','magnetosphere','heliosphere','galacticcore','milkyway','andromeda','orionarm','sagittariusarm','interstellarmedium','hypernova','kilonova','neutronstar','gravitationalwaves','stellarwind','lightcurve','spectroscopy','infrared','ultraviolet','gammaray','xray','radiowave','cosmicdust','plasma','antimatter','tachyon','wormhole','warpdrive','cryogenic','vacuum','hubblespacetelescope','jameswebbspacetelescope','voyager','apollo','sputnik','galileo','cassini','curiosity','perseverance','ingenuity','spaceport','launchvehicle','payload','reentry','splashdown','booster','heatshield','spacetourism','terraforming','colonization','cryosleep','asteroidmining','dysonsphere','ringworld','multiverse','exosphere','ionosphere','mesosphere','stratosphere','troposphere','karmanline','exoplanetarysystem','ringsystem','lunarcrater','lunarmaria','seaoftranquility','tychocrater','craterchain','planetaryring','radiationbelt','vanallenbelt','atmosphere','magnetopause','iontail','dusttail','solarsail','radiotelescope','spaceelevator','spacetether','spacepollution','alien','extraterrestrial','ufology','spacesuit','visor','helmet','oxygentank','commandmodule','lunarmodule','servicemodule','orbiter','lander','launchescapesystem','interplanetary','interstellartravel','astroengineering']
};

let activeWords = [];
let score = 0;
let gameSpeed = 2000;
let isGameOver = false;
let spawnInterval;
let selectedCategory = 'tech';
let selectedDifficulty;
let difficulty = {
    easy: { baseSpeed: 2000, speedIncrease: 25, initialWordCount: 1 },
    normal: { baseSpeed: 1500, speedIncrease: 50, initialWordCount: 2 },
    hard: { baseSpeed: 1000, speedIncrease: 75, initialWordCount: 3 },
    expert: { baseSpeed: 800, speedIncrease: 100, initialWordCount: 4 }
};

const gameContainer = document.getElementById('game-container');
const input = document.getElementById('input');
const scoreElement = document.getElementById('score');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');

function selectDifficulty(level) {
    selectedDifficulty = level;
    gameSpeed = difficulty[level].baseSpeed;
    document.getElementById('difficulty-screen').style.display = 'none';
    document.getElementById('theme-screen').style.display = 'flex';
}

function selectTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    selectedCategory = theme;
    document.getElementById('theme-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    startGame();
}

function createWord() {
    const word = wordCategories[selectedCategory][Math.floor(Math.random() * wordCategories[selectedCategory].length)];
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    wordElement.textContent = word;
    wordElement.style.left = `${Math.random() * (gameContainer.clientWidth - 100)}px`;
    wordElement.style.top = '0px';
    gameContainer.appendChild(wordElement);
    activeWords.push({ element: wordElement, word: word });
}

function updateWords() {
    activeWords.forEach((wordObj, index) => {
        const { element } = wordObj;
        const currentTop = parseInt(element.style.top);
        element.style.top = `${currentTop + 1}px`;
        
        if (currentTop > gameContainer.clientHeight - 50) {
            element.remove();
            activeWords.splice(index, 1);
            if (!isGameOver) {
                gameOver();
            }
        }
    });
}

function shootBullet(startX, startY, endX, endY, targetWord) {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = `${startX}px`;
    bullet.style.top = `${startY}px`;
    gameContainer.appendChild(bullet);

    const animation = bullet.animate([
        { left: `${startX}px`, top: `${startY}px` },
        { left: `${endX}px`, top: `${endY}px` }
    ], {
        duration: 500,
        easing: 'linear'
    });

    animation.onfinish = () => {
        bullet.remove();
        if (activeWords.includes(targetWord)) {
            targetWord.element.remove();
            activeWords = activeWords.filter(w => w !== targetWord);
            score++;
            scoreElement.textContent = `Score: ${score}`;
            gameSpeed -= difficulty[selectedDifficulty].speedIncrease;
            clearInterval(spawnInterval);
            spawnInterval = setInterval(createWord, gameSpeed);
        }
    };
}

function checkInput() {
    const inputValue = input.value.trim().toLowerCase();
    const matchedWord = activeWords.find(wordObj => wordObj.word === inputValue);
    
    if (matchedWord) {
        const rect = matchedWord.element.getBoundingClientRect();
        const startX = window.innerWidth / 2;
        const startY = window.innerHeight - 50;
        const endX = rect.left + rect.width / 2;
        const endY = rect.top + rect.height / 2;

        shootBullet(startX, startY, endX, endY, matchedWord);
        input.value = '';
    }
}

function gameOver() {
    isGameOver = true;
    clearInterval(spawnInterval);
    gameOverElement.style.display = 'block';
    finalScoreElement.textContent = score;
    input.disabled = true;
}

function startGame() {
    score = 0;
    isGameOver = false;
    activeWords = [];
    gameContainer.innerHTML = '<button class="back-btn" onclick="goBack()">Back</button>';
    gameContainer.appendChild(scoreElement);
    gameContainer.appendChild(input);
    gameContainer.appendChild(gameOverElement);
    scoreElement.textContent = 'Score: 0';
    input.disabled = false;
    input.value = '';
    gameOverElement.style.display = 'none';
    
    for (let i = 0; i < difficulty[selectedDifficulty].initialWordCount; i++) {
        createWord();
    }
    
    spawnInterval = setInterval(createWord, gameSpeed);
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    if (!isGameOver) {
        updateWords();
        requestAnimationFrame(gameLoop);
    }
}

function goBack() {
    if (document.getElementById('theme-screen').style.display === 'flex') {
        document.getElementById('theme-screen').style.display = 'none';
        document.getElementById('difficulty-screen').style.display = 'flex';
    } else if (document.getElementById('game-container').style.display === 'flex') {
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('theme-screen').style.display = 'flex';
        clearInterval(spawnInterval);
        cancelAnimationFrame(gameLoop);
    }
}

input.addEventListener('input', checkInput);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && isGameOver) {
        event.preventDefault();
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('difficulty-screen').style.display = 'flex';
        document.body.removeAttribute('data-theme');
        isGameOver = false;
    }
});
