#!/usr/bin/env node

import minimist from "minimist";
import { rpsls } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    console.log("Usage: node-rpsls [SHOT]");
    console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!)")
    console.log("");
    console.log('  -h, --help      display this help message and exit');
    console.log('  -r, --rules     display the rules and exit');
    console.log("");
    console.log("Examples:");
    console.log("  node-rps        Return JSON with single player RPS result.");
    console.log("                 e.g. {'player':'rock'}");
    console.log("  node-rps rock   Return JSON with results for RPS played against a simulated opponent.");
    console.log("                  e.g {'player':'rock','opponent':'Spock','result':'lose'}");
}
else if (args.r || args.rules) {
    console.log("Rules for Rock Paper Scissors:");
    console.log("  - Scissors CUTS Paper");
    console.log("  - Paper COVERS Rock");
    console.log("  - Rock SMOOSHES Lizard");
    console.log("  - Lizard POISONS Spock");
    console.log("  - Spock SMASHES Scissors");
    console.log("  - Scissors DECAPITATES Lizard");
    console.log("  - Lizard EATS Paper");
    console.log("  - Paper DISPROVES Spock");
    console.log("  - Spock VAPORIZES Rock");
    console.log("  - Rock CRUSHES Scissors");
}
else {
    var output = rpsls(args._[0]);
    if (output != 'error'){
        console.log(JSON.stringify(output));
    }
    else {
        console.error(`${args._[0]} is out of range.`);
        // GET HELP__________________________
        console.log("Usage: node-rpsls [SHOT]");
        console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!)")
        console.log("");
        console.log('  -h, --help      display this help message and exit');
        console.log('  -r, --rules     display the rules and exit');
        console.log("");
        console.log("Examples:");
        console.log("  node-rps        Return JSON with single player RPS result.");
        console.log("                 e.g. {'player':'rock'}");
        console.log("  node-rps rock   Return JSON with results for RPS played against a simulated opponent.");
        console.log("                  e.g {'player':'rock','opponent':'Spock','result':'lose'}");

        // GET RULES____________________________
        console.log("Rules for Rock Paper Scissors:");
        console.log("  - Scissors CUTS Paper");
        console.log("  - Paper COVERS Rock");
        console.log("  - Rock SMOOSHES Lizard");
        console.log("  - Lizard POISONS Spock");
        console.log("  - Spock SMASHES Scissors");
        console.log("  - Scissors DECAPITATES Lizard");
        console.log("  - Lizard EATS Paper");
        console.log("  - Paper DISPROVES Spock");
        console.log("  - Spock VAPORIZES Rock");
        console.log("  - Rock CRUSHES Scissors");
    }
}
