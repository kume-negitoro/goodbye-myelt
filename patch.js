const keys = Object.keys;
Object.keys = function(obj){
    return keys.call(this, obj || {});
};
console.log('goodbye errors!');
