const keys = Object.keys;
Object.keys = function(obj){
    keys.call(this, obj ? obj : {});
};
console.log('goodbye errors!');
