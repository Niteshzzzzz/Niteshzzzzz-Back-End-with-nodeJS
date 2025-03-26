#!/usr/bin/env node

import fs from 'node:fs/promises'

const filePath = process.argv[2]

const fileContent = await fs.readFile(filePath, 'utf-8')

const wordsArray = fileContent.split(/[\W]/).filter(w => w.toLowerCase())


const targetWord = (process.argv[3] != undefined) ? process.argv[3].toLowerCase() : process.argv[3];

let wordsCount = {}
wordsCount[targetWord] = 0;

if (targetWord == undefined) {
    wordsCount = {}
    wordsArray.forEach(word => {
        if (word in wordsCount) {
            wordsCount[word] += 1;
        }
        else {
            wordsCount[word] = 1;
        }
    })
}
else {
    wordsArray.forEach(word => {
        if (targetWord == word) {
            wordsCount[targetWord] += 1;
        }
    })
}

console.log(wordsCount)