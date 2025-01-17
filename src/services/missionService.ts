import { MissionResponse, ResponseModel } from "../utils/models";

 

/** 
 * call getMissions Rest Api from back-end server to retrieve list of mission  
 * @returns list of mission 
 */
const getMissions = async (): Promise<ResponseModel<MissionResponse[]>> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/Mission`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    let errorMessage = '';
    if (typeof error === "string") {
      errorMessage = error.toUpperCase()
    } else if (error instanceof Error) {
      errorMessage = error.message 
    }
    return {
      data: [],
      statusCode: 500,
      resultCode: -1,
      errorDetail: errorMessage,
      errors: [],
      errorDescription: ''
    };
  }
};
  

/** 
 * call getMissionById Rest Api from back-end server to retrieve a mission by id  
 * @param {number} id - id
 * @returns a mission 
 */
const getMissionById = async (id: number) : Promise<ResponseModel<MissionResponse>> => {
  console.log(process.env.REACT_APP_API_URL);
  //call getMission Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/Mission/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
    return response.json(); 
};
  

/** 
 * call createMission Rest Api from back-end server to create new mission  
 * @param {MissionResponse} Mission - object of mission data 
 * @returns new mission 
 */
const createMission = async (_inputData: MissionResponse = new MissionResponse()) : Promise<ResponseModel<MissionResponse>>  => {
  //call createMission Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/Mission`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_inputData)
  });
    return response.json(); 
};
  
/** 
 * call updateMission Rest Api from back-end server to update mission  
 * @param {MissionResponse} Mission - object of mission data 
 */
const updateMission = async (_inputData: MissionResponse = new MissionResponse()) : Promise<ResponseModel<MissionResponse>>  => {
  
  //call updateMission Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/Mission`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_inputData)
  });
    return response.json(); 
};
  
/** 
 * call deleteMission Rest Api from back-end server to delete new mission  
 * @param {number} id - id
 */
const deleteMission = async (id: number) : Promise<ResponseModel<number>>  => {
  
  //call deleteMission Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/Mission/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
    return response.json(); 
};
  
 

const missionService = {
  getMissions: getMissions,
  getMissionById,
  createMission,
  updateMission,
  deleteMission
};
export default missionService;