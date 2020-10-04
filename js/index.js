'use strict';
import { main } from './main.js'
import generateHeader from './generateHeader.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';
import generateFooter from './generateFooter.js';
import { logData } from './logData.js';




generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();
main();
logData();
