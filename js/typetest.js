// Easy word list
var easy = [
    "static",
    "typing",
    "team",
    "player",
    "cross",
    "post",
    "service",
    "worker",
    "uglify",
    "jsx",
    "graph",
    "gulp",
    "remote",
    "procedure",
    "call",
    "commit",
    "github",
    "edge",
    "ecommerce",
    "platform",
    "uglify",
    "cowboy",
    "coding",
    "transpile",
    "css",
    "observer",
    "pattern",
    "promise",
    "legacy",
    "cache",
    "progressive",
    "senior",
    "hashtable",
    "concurrent",
    "firefox",
    "data",
    "store",
    "behavior",
    "driven",
    "cache",
    "imagemagick",
    "functional",
    "programming",
    "dynamic",
    "programming",
    "devops",
    "circle",
    "back",
    "design",
    "linked",
    "list",
    "callback",
    "hell",
    "programmer",
    "developer",
    "avocado",
    "microservices",
    "engineer",
    "native",
    "backend",
    "byzantine",
    "fault",
    "tolerance",
    "degree",
    "website",
    "babel",
    "twitter",
    "linux",
    "pair",
    "programming",
    "dynamic",
    "types",
    "backend",
    "frame",
    "rate",
    "service",
    "worker",
    "bike",
    "shedding",
    "view",
    "model",
    "feed",
    "greedy",
    "algorithm",
    "mechanical",
    "keyboard",
    "backbone",
    "hardcoded",
    "bitwise",
    "operator",
    "little",
    "bobby",
    "tables",
    "github",
    "pair",
    "programming",
    "modern",
    "bundle",
    "responsive",
    "blockchain",
    "module",
    "chrome",
    "design",
    "cowboy",
    "coding",
    "driver",
    "clean",
    "architecture",
    "whiteboard",
    "backend",
    "domain",
    "mutation",
    "observer",
    "agile",
    "parameter",
    "proof",
    "stake",
    "macbook",
    "test",
    "driven",
    "terminal",
    "cowboy",
    "coding",
    "blog",
    "terabyte"
]

// Hard word list
var hard = [
    "lorem",
    "ipsum",
    "dolor",
    "amet,",
    "consectetur",
    "adipiscing",
    "elit.",
    "sed",
    "rhoncus,",
    "porttitor",
    "ligula,",
    "viverra",
    "felis.",
    "nulla",
    "volutpat",
    "rhoncus",
    "arcu,",
    "cursus",
    "nibh",
    "molestie.",
    "nullam",
    "ullamcorper",
    "ligula",
    "vitae",
    "efficitur,",
    "accumsan",
    "lorem",
    "imperdiet.",
    "commodo,",
    "suscipit",
    "dolor",
    "sagittis,",
    "aliquam.",
    "integer",
    "maximus",
    "purus",
    "ipsum,",
    "congue",
    "vehicula",
    "massa",
    "ullamcorper",
    "vitae.",
    "vivamus",
    "lacus",
    "ligula",
    "malesuada",
    "elementum.",
    "vestibulum",
    "viverra",
    "placerat",
    "mauris",
    "luctus.",
    "etiam",
    "pretium",
    "tristique",
    "auctor.",
    "etiam",
    "laoreet",
    "metus",
    "nibh,",
    "quis",
    "fringilla",
    "ante",
    "elementum.",
    "pretium",
    "enim",
    "velit",
    "facilisis",
    "sodales.",
    "maecenas",
    "eget",
    "lacinia",
    "eros.",
    "phasellus",
    "nulla",
    "enim,",
    "sagittis",
    "erat,",
    "eleifend",
    "consequat",
    "massa.",
    "nunc",
    "nisl",
    "lorem",
    "egestas",
    "semper.",
    "feugiat",
    "enim",
    "augue",
    "tincidunt",
    "malesuada.",
    "maecenas",
    "aliquam",
    "dolor,",
    "eget",
    "varius",
    "eros.",
    "proin",
    "sollicitudin",
    "nec",
    "fringilla",
    "molestie.",
    "vivamus",
    "vitae",
    "enim",
    "risus.",
    "sed",
    "metus",
    "libero",
    "tempor",
    "pellentesque",
    "mauris.",
    "semper",
    "sem",
    "sapien.",
    "nulla",
    "auctor",
    "faucibus",
    "turpis,",
    "laoreet",
    "lorem.",
    "fusce",
    "pharetra",
    "orci.",
    "praesent",
    "dictum",
    "lorem",
    "justo,",
    "quis",
    "cursus",
    "nisl",
    "sagittis.",
    "phasellus",
    "dapibus",
    "laoreet",
    "accumsan.",
    "duis",
    "in",
    "ornare",
    "odio,",
    "consectetur",
    "metus."
]

// Define our list array
var list = [];

// Get all document elements required
var _timer = document.getElementById("timer")
var _primary = document.getElementById("primary")
var _secondary = document.getElementById("secondary")
var _success = document.getElementById("success")
var _error = document.getElementById("errors")
var _total = document.getElementById("total")
var _start = document.getElementById("start")
var _stop = document.getElementById("stop")

// Set booleans that control game & timer.
var game_state = false;
var hard_diff = false;

// Define our timer object and set a countdown
var timer;
var countdown = 30;
var time = countdown;

// Set game score variables to 0;
var success = 0;
var error = 0;
var total = 0;

// Set the index, current word, current letter, and progress to default;
var index = [0, 0];
var current_word = "";
var current_letter = "";
var progress = "";

// Show or hide debug messages
var debug_bool = true;

// Start tracking keyboard inputs and begin countdown
function startTest() {
    if (!game_state) {

        // Set the word list based on difficulty selected
        if (document.getElementById("hard").checked) {

            // Shuffle the word list
            hard = shuffleWords(hard);

            // Set the dom element to the first word
            _primary.innerHTML = hard[0];

            // Set the game list to the shuffled list
            hard_diff = true;
            list = hard;

        } else {

            //Shuffle word list
            easy = shuffleWords(easy);

            // Set the dom element to the first word
            _primary.innerHTML = easy[0];

            // Set the game list to the shuffled list
            hard_diff = false;
            list = easy;

        }

        // Set the score dom elements to "0"
        _success.innerHTML = "0";
        _error.innerHTML = "0";
        _total.innerHTML = "0";

        // Set the scores to 0
        success = 0;
        error = 0;
        total = 0;

        // Set the tracking index to [0, 0]
        index = [0, 0];

        // Reset the progress
        progress = list[0];

        // Get the first word and letter on the list
        current_word = list[index[0]].split("");
        current_letter = current_word[index[1]];

        // Start the game
        game_state = true;

        // Start game timer
        startTimer();

        // Enable/disable appropriate buttons
        _start.disabled = true;
        _stop.disabled = false;

    } else {
        debug("Cannot start a game that is already started!")
    }
}

// Stop tracking keyboard inputs, reset variables, and stop timer
function stopTest() {
    if (game_state) {

        // If total is zero set primary text and timer to the default
        _primary.innerHTML = "TYPETEST.JS";

        // Display CPM by dividing succesfful inputs by timer length, multiplied by 60
        _timer.innerHTML = (((success / countdown) * 60) / 5 + " WPM")

        // Set the scores to 0 
        success = 0;
        error = 0;
        total = 0;

        // Set the tracking index to [0, 0]
        index = [0, 0];

        // Reset game variables
        current_word = "";
        current_letter = "";
        game_state = false;
        list = [];

        // Stop the game
        game_state = false;

        // Stop the game timer
        stopTimer();

        // Enable/disable appropriate buttons
        _start.disabled = false;
        _stop.disabled = true;

    } else {
        debug("Cannot stop a game that isnt started!")
    }

}

// Array shuffle function
function shuffleWords(unshuffled) {
    return unshuffled
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

// Create keyDownListener to track keyboard input
function setKeyDownListener() {
    window.addEventListener(
        "keydown",
        function (event) { checkKey(event.key) }
    )
}

// Process keyboard inputs
function checkKey(key) {

    // Only match keyboard input if game is started
    if (game_state) {

        // Get the current word and letter based on index [word, letter]
        current_word = list[index[0]].split("");
        current_letter = current_word[index[1]];

        // Log current letter & key pressed
        debug("Required: " + current_letter + ", : " + key)

        // If the keyboard input matches current_letter
        if (key == current_letter) {

            // Increment score and show it in dom element
            success++;
            _success.innerHTML = success;

            // Check if we have reached the word length
            if (parseInt(index[1]) + 1 == current_word.length) {

                // Remove the first word from the list
                list.shift();

                // Set the new current word and letter
                current_word = list[0];
                current_letter = current_word[0];

                // Reset the index
                index = [0, 0];

                // Set progress and show in dom element
                progress = current_word;
                _primary.innerHTML = progress;

            } else {

                // Increment the index
                index = [index[0], (parseInt(index[1]) + 1)]

                // Update the progress and show it in dom element
                progress = progress.substring(1);
                _primary.innerHTML = progress;

            }

        } else {

            // Increment errors and show it in dom element
            error++;
            _error.innerHTML = error;

        }

        // Update total keystrokes
        total = success + error;
        _total.innerHTML = (Math.round((success / total) * 100)) + "%";

    }

    // If game isnt started & key == Enter begin the game
    else if (key == "Enter") {

        // Begin game timer and reset scores
        startTest();

    }
}

// Update the timer
function updateTimer() {

    // Decrement time left
    time = time - 1;

    // If time is greater than zero display it
    if (time >= 0) {
        _timer.innerHTML = time;
    } else {

        // Else stop the test and reset time
        stopTest();

        // Set time left to the defined countdown
        time = countdown;

    }
}

// Stop the timer
function stopTimer() {

    // Clear the setInterval, so the timer stops being called
    timer = clearInterval(timer);

}

// Start the timer
function startTimer() {

    // Set the interval to run updateTimer()
    timer = setInterval(function () { updateTimer() }, 1000);

    // Manually update the timer
    updateTimer();

}

// Log a message to the console
function debug(message) {
    if (debug_bool) { console.log("[Debug]: " + message); }
}

// Intitalize our keystroke listener
setKeyDownListener();