function _hasConflict(candidateSignature, otherSignature) {
    let conflict = false;
    for (let i = 0; i < candidateSignature.length; ++i) {
        const candidateDep = candidateSignature[i];
        const lastIndex = candidateDep[0].lastIndexOf('_');
        const scope = candidateDep[0].substring(0, lastIndex);
        const readWrite = candidateDep[0].substring(lastIndex + 1);
        for (let j = 0; j < otherSignature.length; ++j) {
            const otherDep = otherSignature[j];
            const otherLastIndex = otherDep[0].lastIndexOf('_');
            if (scope !== otherDep[0].substring(0, otherLastIndex)) {
                continue;
            }
            const otherReadWrite = otherDep[0].substring(otherLastIndex + 1);
            if (readWrite === 'reads' && otherReadWrite === 'reads') {
                continue;
            }
            if ((typeof candidateDep[1] == "string" && typeof otherDep[1] == "string") && (candidateDep[1].includes(otherDep[1]) ||
                otherDep[1].includes(candidateDep[1]))) {
                conflict = true;
                break;
            }
        }
        if (conflict) {
            break;
        }
    }
    return conflict;
}

function countDependencies(candidateSignature, allSignatures) {
    let count = 0;
    for (const item in allSignatures) {
        if (_hasConflict(allSignatures[item]['sig'], candidateSignature)) count++;
    }
    return count;
}



// load a json file from the filesystem
const fs = require('fs');

filePath = process.argv[2];

const json = fs.readFileSync(filePath, 'utf8');
const data = JSON.parse(json);


for (const item in data) {
    data[item].dependencies = countDependencies(data[item]['sig'], data);
}

// write the json file to the filesystem
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');