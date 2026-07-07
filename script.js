const passages = {
    10: [
      "the bright sun warms the quiet garden beside the house",
      "small birds sing while children walk slowly through the park",
      "fresh bread smells sweet when the kitchen fills with warmth",
      "tiny clouds drift over hills as evening breeze moves softly",
      "calm water reflects the sky near the old wooden bridge",
      "soft music plays while the family gathers around the table",
      "green leaves shimmer in the breeze near the open window",
      "the little lamp glows warmly in the corner of the room",
      "dusty books rest neatly on the shelf by the door",
      "gently falling rain taps lightly on the roof tonight",
    ],
    25: [ 
      "students gathered in the classroom before sunrise sharing notes discussing lessons and waiting patiently for their teacher to begin the day with clear guidance today",
      "the children played outside near the garden chasing butterflies laughing together and enjoying the warm sunshine that made their afternoon feel bright and peaceful today",
      "birds flew gracefully across the clear blue sky singing sweet melodies while the gentle breeze carried their songs through the quiet valley below for hours",
      "friends walked along the riverbank talking about dreams sharing stories and watching the water flow while the sunset painted the horizon with gold and glow",
      "the library remained quiet and peaceful as students read carefully turned pages softly and discovered new ideas that made the silence feel welcoming for everyone",
      "during the festival the town square filled with music laughter and bright decorations while families gathered together to celebrate the season with joy for all",
      "travelers rested beside the station watching evening lights and listening to distant voices while waiting for the next train to arrive at the platform soon",
      "the garden behind the house grew flowers herbs and vegetables that supplied color scent and fresh food for the family through every season for years",
      "after the storm the streets looked washed clean and the air felt cool as people stepped outside to enjoy the calm and peaceful weather again",
      "careful hands arranged the papers neatly on the desk before the meeting began and every detail seemed ready for review by the committee members there"
    ],
    50: [
      "the programmer sat quietly at his desk typing lines of code fixing errors and testing functions while the screen glowed bright with progress and patience guided each step as creativity turned simple ideas into useful solutions for many people across different projects and busy teams every day in the world",
      "the office was busy with employees working on reports answering messages and attending meetings while keyboards clicked phones rang and conversations filled the air and teamwork kept everything organized despite the rush and pressure of the day for every department and every important deadline ahead for everyone involved that morning",
      "the gamer focused intensely on the glowing monitor pressing keys quickly moving the character across the battlefield while sound effects echoed through the room and strategy reflexes and patience blended into every thrilling match against skilled opponents online during long evenings filled with excitement and friendly competition for everyone nearby",
      "the student opened his laptop searching for information reading articles and writing notes for the upcoming exam while the quiet room encouraged concentration and the ticking clock reminded him that steady effort and patience would eventually bring knowledge to life through practice and determination every single day for him too",
      "careful planning and steady practice help new developers solve problems with patience and confidence while their skills grow through experience and thoughtful feedback from peers during real projects and team discussions that sharpen judgment strengthen communication and inspire lasting progress over time in every challenge they face together everyday now",
      "the workshop became lively as makers tested tools shared ideas and discussed designs that could improve everyday objects with clever solutions and practical improvements for users during collaborative sessions where curiosity patience and experimentation guided each decision and helped teams build better products for communities and homes everywhere each day",
      "scientists recorded observations with precision and compared results carefully because accurate data guided every conclusion and future experiment through long hours of patient research in quiet laboratories where questions shaped methods and discoveries slowly emerged from repeated trials thoughtful notes and steady collaboration between experts and students alike over time",
      "during the long journey the crew maintained discipline prepared supplies and remained calm as changing weather tested their endurance resolve and teamwork under pressure while distant horizons challenged their confidence and each difficult mile reminded them that patience preparation and trust would carry them safely toward home at last again",
      "artists and writers gathered in the studio to exchange ideas stories and sketches while quiet inspiration shaped their next ambitious project with lasting meaning and each new conversation sparked fresh imagination encouraging bold experiments thoughtful revisions and deeper emotional connections between every creator and every audience they hoped to reach",
      "the city woke early as buses hummed through streets and people hurried toward work carrying coffee and papers while the morning light revealed ambitious plans and hopes for the day ahead and every doorway seemed to hold stories waiting for someone ready to notice them through noise of noon arrived"
    ],
    100: [
      "the quiet library held a warm glow as readers moved slowly between shelves searching for stories that would carry them away into distant lands and gentle moments the air smelled faintly of paper and coffee while sunlight filtered through high windows casting soft beams across wooden tables chairs and scattered notebooks every person there seemed absorbed in a world of words as time slowed down and each page turned with quiet focus it felt like a place where thoughts could breathe and imagination could grow without hurry or distraction for anyone who loved to read and write and share stories",
      "the forest path stretched endlessly with soft leaves crunching under each step birds sang above while sunlight flickered through branches painting golden patterns across the ground the air smelled fresh and earthy carrying hints of pine and wildflowers a gentle breeze brushed against skin bringing calm and clarity every sound felt alive from distant streams to rustling bushes where small creatures moved unseen walking there felt like entering a world untouched by rush or noise where time slowed and thoughts softened it was a place to breathe deeply to listen closely and to remember how simple beauty can heal the spirit",
      "the student sat at a wooden desk surrounded by notebooks pens and a glowing lamp the room was quiet except for the faint scratch of pencil across paper each word written carried weight and purpose as concentration grew stronger the air felt heavy with focus yet calm with determination pages filled slowly with notes diagrams and reminders each line building toward understanding and mastery the clock ticked steadily marking progress without distraction it was a moment where learning felt alive where effort turned into clarity and where the mind stretched beyond limits to grasp new ideas and prepare for tomorrow",
      "the day began with the aroma of fresh coffee drifting through the small kitchen sunlight poured gently across the counter warming the ceramic mug waiting to be filled steam rose slowly as the first sip brought comfort and energy the world outside stirred with faint sounds of traffic and birds but inside everything felt calm and steady the warmth of the drink carried hope for the hours ahead each moment seemed lighter with caffeine flowing through veins it was a ritual of peace and renewal a reminder that even simple routines can bring strength and joy to face the day",
      "waves rolled gently onto the shore leaving trails of foam across the sand the horizon stretched wide and endless painted in shades of blue and gold the air carried salt and freshness filling lungs with clarity footsteps pressed softly into wet sand fading quickly as water returned seagulls circled above calling faintly against the rhythm of the ocean sitting there felt timeless as if the sea held secrets older than memory each sound blended into harmony soothing the mind and heart it was a place where silence spoke louder than words and where peace flowed with every tide returning",
      "the desk glowed with the light of a monitor lines of code filled the screen in neat rows waiting to be tested and refined a keyboard clicked steadily as ideas turned into commands the hum of a computer fan blended with quiet focus cables stretched across the table connecting devices that powered creation the air smelled faintly of coffee and determination each error fixed brought satisfaction each success carried momentum it felt like building something alive from logic and patience a space where technology met imagination and where persistence shaped progress one keystroke at a time toward completion and growth",
      "raindrops tapped gently against the window forming patterns that blurred the view outside the sky hung heavy with gray clouds while the air carried a cool dampness inside the room a soft blanket and warm drink created comfort as the sound of rain became music pages of a book turned slowly each word blending with the rhythm of falling water time felt slower softer calmer as if the world paused to breathe it was a moment where nature and quiet joined together where peace arrived without effort and where the heart found rest in the steady song of rain",
      "the trail rose steeply across rocky ground each step demanding strength and balance the air grew thinner cooler sharper as altitude increased clouds drifted close brushing against skin while peaks towered above in silent majesty the sound of boots against stone echoed faintly across valleys birds soared freely in the distance reminding of resilience and freedom reaching higher felt like chasing the sky each pause brought breathtaking views of forests rivers and endless horizons it was a journey of effort and reward where struggle met beauty and where the summit promised not just height but clarity strength and triumph",
      "students filled the room with chatter and laughter as notebooks opened and pens clicked the teacher stood at the front ready to guide lessons across the board sunlight streamed through tall windows casting brightness across desks the air carried a mix of excitement and curiosity each question asked sparked thought each answer shared built understanding together the room felt alive with learning and connection time moved quickly as ideas flowed freely it was a place where knowledge grew where friendships formed and where every moment carried the promise of discovery and growth shaping minds for challenges yet to come",
      "the room glowed with the soft light of a monitor as midnight passed quietly outside the keyboard clicked steadily each line of code building toward something new the air carried silence broken only by the hum of electronics coffee sat nearby cooling slowly while focus remained sharp errors appeared and vanished as persistence shaped progress the world outside slept but inside creation thrived each moment felt alive with possibility it was a space where imagination met logic where patience turned into achievement and where the night became a canvas for ideas flowing freely until dawn arrived with promise of success",
    ]
  };

  let state = {
    diff: '10', chars: [], input: '',
    started: false, finished: false,
    timer: 60, interval: null, startTime: null,
    maxTimer: 60,
  };

  const passageEl  = document.getElementById('passage-display');
  const inputEl    = document.getElementById('typing-input');
  const wpmEl      = document.getElementById('wpm-display');
  const accEl      = document.getElementById('acc-display');
  const timerEl    = document.getElementById('timer-display');
  const timerRing  = document.getElementById('timer-ring');
  const mainArea   = document.getElementById('main-area');
  const resultArea = document.getElementById('result-area');
  const C = 2 * Math.PI * 18;

  function pickPassage() {
    const pool = passages[state.diff];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function renderPassage() {
    const chars = state.chars;
    const typed = state.input;

    // Group chars into words + spaces.
    // Each word is wrapped in white-space:nowrap so the browser
    // only breaks at spaces, never mid-word.
    let html = '';
    let i = 0;
    while (i < chars.length) {
      if (chars[i] === ' ') {
        const cls = i < typed.length
          ? (typed[i] === ' ' ? 'correct' : 'wrong')
          : i === typed.length ? 'cursor' : 'pending';
        html += `<span class="char word-space ${cls}"> </span>`;
        i++;
      } else {
        let wordHtml = '<span class="word">';
        while (i < chars.length && chars[i] !== ' ') {
          const cls = i < typed.length
            ? (typed[i] === chars[i] ? 'correct' : 'wrong')
            : i === typed.length ? 'cursor' : 'pending';
          wordHtml += `<span class="char ${cls}">${chars[i]}</span>`;
          i++;
        }
        wordHtml += '</span>';
        html += wordHtml;
      }
    }
    passageEl.innerHTML = html;
  }

// ── Sound engine ──────────────────────────────────────────────────────────
let audioCtx = null;
let soundBuffers = {};   // filename → AudioBuffer
let soundReady = false;
let volume = 0.8; // Controlled by the slider

const allSounds = ['altpitch.mp3', 'extrapitch.mp3', 'highpitch.mp3', 'lowpitch.mp3', 'midpitch.mp3', 'spacebar.mp3'];

// Filtered array specifically for general/alphabet keys so spacebar.mp3 is skipped
const generalSounds = ['altpitch.mp3', 'extrapitch.mp3', 'highpitch.mp3', 'lowpitch.mp3', 'midpitch.mp3'];

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// Load files silently on load
async function autoLoadSounds() {
  console.log("Loading keyboard sounds...");
  let loadedCount = 0;

  for (const name of allSounds) {
    try {
      const response = await fetch(name);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const arrayBuffer = await response.arrayBuffer();
      const ctx = getAudioCtx();
      
      soundBuffers[name] = await ctx.decodeAudioData(arrayBuffer);
      loadedCount++;
    } catch (error) {
      console.error(`Failed to automatically load sound file: ${name}`, error);
    }
  }

  if (loadedCount > 0) {
    soundReady = true;
    console.log(`Sound engine ready: ${loadedCount}/${allSounds.length} sounds loaded.`);
  }
}

function playSound(filename) {
  if (!soundReady || !soundBuffers[filename]) return;
  
  const ctx = getAudioCtx();
  const source = ctx.createBufferSource();
  source.buffer = soundBuffers[filename];
  
  const gain = ctx.createGain();
  gain.gain.value = volume; // Applies current volume level here
  
  source.connect(gain);
  gain.connect(ctx.destination);
  source.start(0);
}

// ── Key mapping logic ──────────────────────────────────────────────────────
function getSoundForKey(key, code) {
  // 1. Explicitly handle Spacebar
  if (code === 'Space' || key === ' ') {
    return soundBuffers['spacebar.mp3'] ? 'spacebar.mp3' : 'midpitch.mp3';
  }
  
  // 2. Explicitly handle Backspace
  if (code === 'Backspace' || key === 'Backspace') {
    return soundBuffers['midpitch.mp3'] ? 'midpitch.mp3' : null;
  }
  
  // 3. Handle A-Z keys (using generalSounds instead of allSounds)
  const upperKey = key.toUpperCase();
  if (upperKey >= 'A' && upperKey <= 'Z' && upperKey.length === 1) {
    const index = (upperKey.charCodeAt(0) - 65) % generalSounds.length;
    const mapped = generalSounds[index];
    if (soundBuffers[mapped]) return mapped;
  }

  // 4. Fallback for other keys
  if (soundBuffers['midpitch.mp3']) return 'midpitch.mp3';
  return null;
}

// ── Play sound on keydown ─────────────────────────────────────────────────
const typingInput = document.getElementById('typing-input');

if (typingInput) {
  typingInput.addEventListener('keydown', async e => {
    const ctx = getAudioCtx();
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    if (!soundReady) return;
    
    const snd = getSoundForKey(e.key, e.code);
    if (snd) {
      playSound(snd);
    }
  });
}

// ── Volume slider handler ──────────────────────────────────────────────────
const volSlider = document.getElementById('vol-slider');
const volValue = document.getElementById('vol-value');

if (volSlider && volValue) {
  volSlider.addEventListener('input', e => {
    volume = parseFloat(e.target.value);
    volValue.textContent = `${Math.round(volume * 100)}%`;
  });
}

// Kick off file loading automatically
autoLoadSounds();


  function calcWPM() {
    if (!state.startTime || !state.input.length) return 0;
    const mins = (Date.now() - state.startTime) / 60000;
    const correct = [...state.input].filter((c, i) => c === state.chars[i]).length;
    return Math.round((correct / 5) / mins) || 0;
  }

  function calcAcc() {
    if (!state.input.length) return 100;
    const correct = [...state.input].filter((c, i) => c === state.chars[i]).length;
    return Math.round((correct / state.input.length) * 100);
  }

  function updateRing(t) {
    timerRing.style.strokeDashoffset = C * (1 - t / state.maxTimer);
  }

  function startTimer() {
    state.startTime = Date.now();
    state.interval = setInterval(() => {
      state.timer--;
      timerEl.textContent = state.timer;
      updateRing(state.timer);
      wpmEl.textContent = calcWPM();
      accEl.textContent = calcAcc() + '%';
      if (state.timer <= 0) finish();
    }, 1000);
  }

  function finish() {
    clearInterval(state.interval);
    state.finished = true;
    inputEl.disabled = true;
    const wpm = calcWPM();
    const acc = calcAcc();
    const correct = [...state.input].filter((c, i) => c === state.chars[i]).length;
    document.getElementById('r-wpm').textContent = wpm;
    document.getElementById('r-acc').textContent = acc + '%';
    document.getElementById('r-chars').textContent = correct;
    const titles = wpm >= 80
      ? ['Above Average!', 'Lightning fast!']
      : wpm >= 50
      ? ['Good job!', 'Nice speed!']
      : ['Keep practicing.', 'You can improve.'];
    const sub = wpm >= 80
      ? 'Your typing speed is excellent and shows strong skill.'
      : wpm >= 50
      ? 'A solid performance, keep building consistency and accuracy.'
      : 'Every expert started slow, keep practicing and you will improve.';
    document.getElementById('result-title').textContent = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById('result-sub').textContent = sub;
    mainArea.style.display = 'none';
    resultArea.style.display = 'flex';
  }

  function init() {
    clearInterval(state.interval);
    const passage = pickPassage();
    state = {
      ...state,
      chars: passage.split(''),
      input: '',
      started: false,
      finished: false,
      timer: state.maxTimer,
      interval: null,
      startTime: null,
    };
    inputEl.value = '';
    inputEl.disabled = false;
    timerEl.textContent = String(state.maxTimer);
    wpmEl.textContent = '–';
    accEl.textContent = '–';
    updateRing(state.maxTimer);
    mainArea.style.display = 'block';
    resultArea.style.display = 'none';
    renderPassage();
    inputEl.focus();
  }

  inputEl.addEventListener('input', e => {
    if (state.finished) return;
    const val = e.target.value;
    if (!state.started && val.length > 0) {
      state.started = true;
      startTimer();
    }
    state.input = val;
    wpmEl.textContent = calcWPM() || '–';
    accEl.textContent = state.input.length ? calcAcc() + '%' : '–';
    renderPassage();
    if (val.length >= state.chars.length) finish();
  });

  document.getElementById('reset-btn').addEventListener('click', init);
  document.getElementById('retry-btn').addEventListener('click', init);

  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && state.finished) {
      init();
    }
  });

  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.diff = btn.dataset.diff;
      init();
    });
  });

  document.querySelectorAll('.timer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.timer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.maxTimer = Number(btn.dataset.timer);
      init();
    });
  });

  //THEME LOGIC
  const themeSelect = document.getElementById('theme-select');
  const savedTheme = localStorage.getItem('theme') || 'cozy-dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeSelect) {
    themeSelect.value = savedTheme;
    themeSelect.addEventListener('change', (e) => {
      const selectedTheme = e.target.value;
      document.documentElement.setAttribute('data-theme', selectedTheme);
      localStorage.setItem('theme', selectedTheme);
    });
  }

  init();