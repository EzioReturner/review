const minify = require('@meitu/tinify');

minify({
    path: {
        source: './src/source-img/',
        dist: './src/img/',
    },
    isLog:true,
    filter(path) {
        if (/.*(.jpg)$/.test(path)) return true;
        if (/.*(.png)$/.test(path)) return true;
        if (path.indexOf('sprite') == 0) return true;
    },
});
