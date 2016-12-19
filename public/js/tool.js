function add(a,b) {
	console.log(a+b);
}

function minus(a,b) {
	console.log(a-b);
}

define(function() {
    return {
        add:add,
        minus:minus
    }
});
