// rec = {
// 	top: '25px',
// 	left: '96px',
// 	width: '64px',
// 	height: '96px',
//      children: []
// }

function updateStructure(rec1,rec2){
	//write your code
	if(contains(rec1, rec2)){
		const relativeDim = relative(rec1, rec2);
		return { ...rec1, children: [relativeDim] };
	} else if(contains(rec2, rec1)){
		const relativeDim = relative(rec2, rec1);
		return { ...rec2, children: [relativeDim] };
	} else{
		return { ...rec1 };
	}
}

function contains(rec1, rec2){
	let obj1 = getCoordinates(rec1);
	let obj2 = getCoordinates(rec2);

	if(obj1.x1 <= obj2.x1 && obj1.y1 <= obj2.y2 && obj1.x2 >= obj2.x2 && obj1.y2 >= obj2.y2){
		return true;
	}
	return false;
}

function relative(rec1, rec2){
	let obj1 = getCoordinates(rec1);
	let obj2 = getCoordinates(rec2);

	const res = {
		children: rec2.children
	}

	if(rec2.top)
		res.top = `${obj2.x1 - obj1.x1}px`;
	if(rec2.left)
		res.left = `${obj2.y1 - obj1.y1}px`;
	if(rec2.height)
		res.height = rec2.height;
	if(rec2.width)
		res.width = rec2.width;
	if(rec2.bottom)
		res.bottom = `${obj1.x2 - obj2.x2}px`;
	if(rec2.right)
		res.right = `${obj1.y2 - obj2.y2}px`;
	
	return res;
}
const T=0;
const W=0;
function getCoordinates(rect){
	return {
	x1 = rect.top ? parseInt(rect.top) :(T -(parseInt(rect.height) + parseInt(rect.bottom))),
	y1 = rect.left ? parseInt(rect.left) :(W -(parseInt(rect.width) + parseInt(rect.right))),
	x2 = rect.bottom ?(T- parseInt(rect.bottom)) : (parseInt(rect.height) + parseInt(rect.top)),
	y2 = rect.right ?(W- parseInt(rect.right)) : (parseInt(rect.width) + parseInt(rect.left))
}
	}
module.exports = updateStructure;
