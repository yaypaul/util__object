# utils__object 

Prototype Object Utilities  
I created these utilities some time ago for my own projects. They will have gone through numerous versions, I've tried to keep them small, only including operations I find myself doing time after time.
I finally found the time to make proper repros and read me files so I could upload them. I hope you find them as useful as I do!

### Version
1.2

# Installation
As these are Prototypes and not framework functions, all you need to do is load the file as part of your stack. I recommend after your other library includes.

# Usage

### parseObjectAsQueryString
Parses a JavaScript Object into a querystring.
```javascript
( Object ).parseObjectAsQueryString();
//key=value&key=value&key=value...
```

# Change Log
1.3 Updated comments to mirror read me. Forced script to strict mode.
1.2 Reduced code lines in parseObjectAsQueryString by just returning everything.  
1.1 Renamed parseObjectAsQueryString function to avoid conflict with Facebook SDK.  
1.0 Implemented defineProperty in parseObjectAsQueryString to avoid function being enumerable.  
0.5 Initial parseObjectAsQueryString release.  

# License
MIT  
It's Free!
