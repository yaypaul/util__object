/**
 * util__object
 * @fileoverview Sets up prototype Object Utility functions on JavaScripts Object object.
 * @version 1.3
 * @author <a href="http://yaypaul.com">YayPaul (Paul West)</a>
 * @copyright 2017 Paul West.
 * @license MIT
 */

/**
 * To Query String
 * @desc Parses a JavaScript Object into a querystring.
 * @return A query string.
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