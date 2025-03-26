process.stdout.write('hello nitesh\n')
process.stdout.write('How are you?')

// to transfer data from one js to another js file we use pipeline
// syntex= node firstfilename | node secondfilename
// ex= node index.js | node app.js


// redirecting is use to write data from a js file into a file or vice versa
// syntex-  jsFilename > filename (js to txt)
// ex - node app.js > std.txt
// syntex- jsfilename < filename (txt to js)
// ex - node  app.js < std.dxt

// node app.js >> std.txt
// node app.js > std.txt > text.txt (writing in two txt files)
