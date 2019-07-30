const keys = Object.keys;
Object.keys = function(obj){
    return keys.call(this, obj ? obj : {});
};
console.log('goodbye errors!');
