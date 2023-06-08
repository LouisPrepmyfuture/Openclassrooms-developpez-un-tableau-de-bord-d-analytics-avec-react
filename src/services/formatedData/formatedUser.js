export const UserAverageFormat = (dataAverage) => {
	return dataAverage.map(item => {
		let newData = {}
	  switch(item.day) {
			case 2 :
				newData.day = 'M';
				break;
			case 3:
				newData.day = 'M';
				break;
			case 4:
				newData.day = 'J';
				break;
			case 5:
				newData.day = 'V';
				break;
			case 6:
				newData.day = 'S';
				break;
			case 7:
				newData.day = 'D';
				break;
			default:
				newData.day = 'L';
				break;
		}
		newData.sessionLength = item.sessionLength
		return newData
	})
}

export const UserActivityFormat = (dataActivity) =>{
	dataActivity.forEach((element, index) => {
		element.add = index + 1
	})
	return dataActivity
}

export const UserPerformanceFormat = (data) =>{
 let dataPerformance = data.data
 const kindName = data.kind

 return dataPerformance.map((item) =>{
		let formattedData = {}
		formattedData.value = item.value
		formattedData.kind = kindName[item.kind]
		return formattedData
 })
}


 const UserFormat = {
	UserAverageFormat,
	UserActivityFormat,
	UserPerformanceFormat
}

export default UserFormat