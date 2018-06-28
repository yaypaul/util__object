/**
 * util__object
 * @fileoverview Sets up prototype Object Utility functions on JavaScripts Object object.
 * @version 1.4
 * @author <a href="http://yaypaul.com">YayPaul (Paul West)</a>
 * @copyright 2017-2018 Paul West.
 * @license MIT
 */

/**
 * Parse Object As Query String
 * @desc Parses a JavaScript Object into a querystring.
 * @return {string} A query string.
 * @since 1.0
 */
Object.defineProperty( Object.prototype, 'parseObjectAsQueryString', {
    
    value   : function(){
        
        'use strict';

        var obj = this;
        
        return Object.keys( obj ).map( function( key ){

            return encodeURIComponent( key ) + '=' + encodeURIComponent( obj[ key ] );
            
        } ).join( '&' );
        
    }
    
} );

/**
 * Merge Object
 * @desc Merges a JavaScript Object into the existing object.
 * @param {object} toMerge Object to merge in.
 * @return {object} The merged object.
 * @since 1.4
 */
Object.defineProperty( Object.prototype, 'mergeObject', {
    
    value   : function mergeObject( toMerge ){
        
        'use strict';

        var obj = this;
        
        for( var key in toMerge ){

            obj[ key ] = toMerge[ key ];

        }

        return obj;
        
    }
    
} );