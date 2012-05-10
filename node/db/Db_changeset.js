var ueberDB = require("ueberDB");
var settings = require("../utils/Settings");
var log4js = require('log4js');

//set database settings
var dbcs = new ueberDB.database(settings.dbcsType, settings.dbcsSettings, null, log4js.getLogger("ueberDB"));

/**
 * The UeberDB Object that provides the database functions
 */
exports.dbcs = null;

/**
 * Initalizes the database with the settings provided by the settings module
 * @param {Function} callback 
 */
exports.init = function(callback)
{
  //initalize the database async
  dbcs.init(function(err)
  {
    //there was an error while initializing the database, output it and stop 
    if(err)
    {
      console.error("ERROR: Problem while initalizing the database");
      console.error(err.stack ? err.stack : err);
      process.exit(1);
    }
    //everything ok
    else
    {
      exports.dbcs = dbcs;  
      callback(null);
    }
  });
}
