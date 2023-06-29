/**
 * Formats the data for the user's average sports session.
 *
 * @param {Array} dataAverage - Array containing the user's average data.
 * @returns {Array} - Array containing the formatted user's average data.
 */

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

/**
 * Formats the user activity data.
 *
 * @param {Array} dataActivity - Array containing the user activity data.
 * @returns {Array} - Array containing the formatted user activity data.
 */
export const UserActivityFormat = (dataActivity) =>{
	dataActivity.forEach((element, index) => {
		element.add = index + 1
	})
	return dataActivity
}


/**
 * Translates a category title to French.
 *
 * @param {string} title - Title to translate.
 * @returns {string} - Title translated to French.
 */
const translateFrKing = title =>{
	switch (title) {
		case "cardio": 
			return "Cardio"
		case "energy": 
			return "Energie"
		case "endurance": 
			return "Endurance"
		case "speed": 
			return "Vitesse"
		case "strength": 
			return "Force"
		case "intensity": 
			return "Intensity"
		default:
			break;
	}
}

/**
 * Formats the user performance data.
 *
 * @param {Object} data - Object containing the performance data and kind name.
 * @param {Array} data.data - Array containing the performance data.
 * @param {string} data.kind - Name of the performance kind.
 * @returns {Array} - Array containing the formatted user performance data.
 */
export const UserPerformanceFormat = (data) =>{
 let dataPerformance = data.data
 const kindName = data.kind

 return dataPerformance.map((item) =>{
		let formattedData = {}
		formattedData.value = item.value
		formattedData.kind = translateFrKing(kindName[item.kind])
		return formattedData
 })
}


 const UserFormat = {
	UserAverageFormat,
	UserActivityFormat,
	UserPerformanceFormat
}

export default UserFormat