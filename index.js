/**
 * Created by Ran Cohen on 17/06/2015.
 */

var open = require("open");
var proc = require('child_process');
var ps = require('ps-node');
var colors = require('colors');

const MODULE_NAME = 'afterbuild-starter';


function killer(args,cb){

    ps.lookup({
        command: 'node',
        arguments: args
    }, function(err, resultList ) {
        if (err) {
            throw new Error( err );
        }

        //console.log(resultList);

        resultList.forEach(function( process ){
            if( process ){

                ps.kill(process.pid, function( err ) {
                    if (err) {
                        throw new Error( err );
                    }
                });
                console.log(colors.gray(MODULE_NAME,' : Old node process ',process.pid,' has been killed!'));
            }
        });
        cb();
    });
}


function starter(obj) {

    var pathApp = obj.path;
    var url = "http://localhost";

    if (!pathApp) {
        throw new Error(MODULE_NAME, 'Missing path to App!');
    }
    if(obj.url!= null && obj.url!=""){
        url = obj.url;
    }

    killer(pathApp,function(){

        console.log(colors.green(MODULE_NAME,' : Starting new node process', pathApp, 'On' ,url));

        node = proc.spawn("node",[pathApp],{detached: true});
        node.unref();

        setTimeout(function(){
            process.exit(0);
        },7777);
    });
    open(url);
}

module.exports = starter;