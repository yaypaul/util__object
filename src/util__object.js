/**
 * Object Utilities (util)
 * @fileoverview Sets up prototype functions on JavaScripts Object object.
 * @author <a href="http://yaypaul.com">Paul West</a>
 * @version 1.2
 * @license None (public domain)
 */

/**
 * To Query String
 * @desc Parse an object and turn it into a query string.
 * @return A query string.
 */
Object.defineProperty( Object.prototype, 'parseObjectAsQueryString', {
    
    value   : function(){
        
        var obj = this;
        
        return Object.keys( obj ).map( function( key ){
            return encodeURIComponent( key ) + '=' + encodeURIComponent( obj[ key ] );
        } ).join( '&' );
        
    }
    
} );