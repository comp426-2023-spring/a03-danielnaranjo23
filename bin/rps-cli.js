#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    console.log("Usage: node-rps [SHOT]");
    console.log("Play Rock Paper Scissors (RPS)")
    console.log("\n");
    console.log('  -h, --help      display this help message and exit');
    console.log('  -r, --rules     display the rules and exit');
    console.log("\n");
    console.log("Examples:");
    console.log("  node-rps        Return JSON with single player RPS result.");
    console.log("                 e.g. {'player':'rock'}");
    console.log("  node-rps rock   Return JSON with results for RPS played against a simulated opponent.");
    console.log("                  e.g {'player':'rock','opponent':'scissors','result':'win'}");
}
else if (args.r || args.rules) {
    console.log("Rules for Rock Paper Scissors:");
    console.log("  - Scissors CUTS Paper");
    console.log("  - Paper COVERS Rock");
    console.log("  - Rock CRUSHES Scissors");
}
else {
    let output = rps(args._[0]);
    if (output != 'error'){
        console.log(JSON.stringify(output));
    }
    else {
        console.error(args._[0] + " is out of range.");
        // GET HELP__________________________
        console.log("Usage: node-rps [SHOT]");
        console.log("Play Rock Paper Scissors (RPS)")
        console.log("\n");
        console.log('  -h, --help      display this help message and exit');
        console.log('  -r, --rules     display the rules and exit');
        console.log("\n");
        console.log("Examples:");
        console.log("  node-rps        Return JSON with single player RPS result.");
        console.log("                 e.g. {'player':'rock'}");
        console.log("  node-rps rock   Return JSON with results for RPS played against a simulated opponent.");
        console.log("                  e.g {'player':'rock','opponent':'scissors','result':'win'}");

        // GET RULES____________________________
        console.log("Rules for Rock Paper Scissors:");
        console.log("  - Scissors CUTS Paper");
        console.log("  - Paper COVERS Rock");
        console.log("  - Rock CRUSHES Scissors");
    }
}
