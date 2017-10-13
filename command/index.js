
module.exports = (type, folder) => {
	var path = './'+type;
    require(path)(folder);
 }