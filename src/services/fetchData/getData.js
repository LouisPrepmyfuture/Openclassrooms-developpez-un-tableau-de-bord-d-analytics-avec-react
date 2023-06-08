
/**
 * call a request to the api
 * return the data about user info the user id, user information (first name, last name and age),
 *  the current day's score (todayScore) and key data (calorie, macronutrient, etc.)
 * @param {number} userId - id of the user
 * @returns {promise<object>} - user info object
 */
 const getUserMainData = async (userId) => {
  return fetch(`http://localhost:3000/user/${userId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
    });
};
/**
 * call a request to the api
 * return user's activity day by day with kilograms and calories
 * @param {number} userId - id of the user
 * @returns {promise<object>} -user activity
 */
 const getUserActivity = async (userId) => {
  return fetch(`http://localhost:3000/user/${userId}/activity`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      return data.data;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
    });
};
/**
 * call a request to the api
 * return the average sessions of a user per day
 * @param {number} userId - id of the user
 * @returns {promise<object>} -user average sessions
 */
 const getUserAverageSession = async (userId) => {
  return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      return data.data;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
    });
};
/**
 * call a request to the api
 * return user's performance (energy, endurance, etc.)
 * @param {number} userId - id of the user
 * @returns {promise<object>} - user performance
 */
 const getUserPerformance = async (userId) => {
	try {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error('Erreur lors de la requête');
    }
    const data = await response.json();
    console.log(data); // Utilisez les données récupérées
  } catch (error) {
    console.log(error);
  }
};



const getUser = {
	getUserMainData,
	getUserAverageSession,
	getUserActivity,
	getUserPerformance
}

export default getUser 
