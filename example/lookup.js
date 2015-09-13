/**
 * Created by Rannn505 on 9/11/2015.
 */

var ps = require('ps-node');

ps.lookup({
    command: 'node'
}, function(err, resultList ) {
    if (err) {
        throw new Error( err );
    }

    console.log(resultList);
});