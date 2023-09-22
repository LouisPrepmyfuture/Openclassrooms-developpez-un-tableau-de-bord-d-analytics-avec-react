import { USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_ACTIVITY, USER_PERFORMANCE } from "./mock"
/**
 * Fetch USER_MAIN_DATA from mockDATA
 * @param {Array} data
 * @param {Number} id
 * @returns Oject
 */

const getUserMainData = (id) => {
	let user
	USER_MAIN_DATA.forEach(element => {
		if (element.id === parseInt(id)) {
			user = element
		}
	});

	return user
}
/**
 * Fetch USER_AVERAGE_SESSIONS from mockDATA
 * @param {Array} data
 * @param {Number} id
 * @returns Array
 */

const getUserAverageSession = (id) => {
	let averageSession
	USER_AVERAGE_SESSIONS.forEach(element => {
		if (element.userId === parseInt(id)) {
			averageSession = element.sessions
		}
	});
	return {userId:id, sessions:averageSession}
}

/**
 * Fetch USER_ACTIVITY from mockDATA
 * @param {Array} data
 * @param {Number} id
 * @returns Array
 */

const getUserActivity = (id) => {
	let activity
	USER_ACTIVITY.forEach(element => {
		if (element.userId === parseInt(id)) {
			activity = element.sessions
		}
	});
	return {userId:id, sessions:activity}
}

/**
 * Fetch USER_ACTIVITY from mockDATA
 * @param {Array} data
 * @param {Number} id
 * @returns Oject
 */

const getUserPerformance = (id) => {
	let performance
	USER_PERFORMANCE.forEach(element => {
		if (element.userId === parseInt(id)) {
			performance = { "kind": element.kind, "data": element.data }
		}
	});
	return performance
}

const getUser = {
	getUserMainData,
	getUserAverageSession,
	getUserActivity,
	getUserPerformance
}

export default getUser
