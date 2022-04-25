export default function handler(req, res) {

    const fs = require('fs')

    const { join } = require('path')

    const file = fs.readFileSync(join(__dirname, '_files', 'ci.yml'), 'utf8')

    fs.writeFile('./', file);

    res.json({success: true});

}