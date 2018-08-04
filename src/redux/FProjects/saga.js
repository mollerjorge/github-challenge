import { FETCH_PROJECTS, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAIL, GET_CONTRIBUTORS, GET_CONTRIBUTORS_SUCCESS, GET_CONTRIBUTORS_FAIL } from './types';
import { getProjects } from './actions';
import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import {axiosInstance} from '../../settings/config';

export function fetchProjectsCall() {
	
	return axiosInstance.get('/users/Facebook/repos')
					.then(
							res => {
							 return {response: res.data}
							}
						)
					.catch(
							error => {
								return {error: error.response.data.message}
							}
						)
}

export function fetchContributorsCall(projectName) {
	
	return axios.get(`https://api.github.com/repos/facebook/${projectName}/contributors`)
					.then(
							res => {
							 return {response: res.data}
							}
						)
					.catch(
							error => {
								return {error: error.response.data.message}
							}
						)
}

export function* fetchProjects() {
	const { response, error } = yield call(fetchProjectsCall);
	if (response) {
		yield put({type: FETCH_PROJECTS_SUCCESS, payload: response});
	} else {
		yield put({ type: FETCH_PROJECTS_FAIL, payload: error});
	}
}

export function* fetchContributors({projectName}) {
	const {response, error} = yield call(fetchContributorsCall, projectName);
	if (response) {
		yield put({type: GET_CONTRIBUTORS_SUCCESS, payload: response});
	} else {
		yield put({ type: GET_CONTRIBUTORS_FAIL, payload: error});
	}
}

export default function* rootSaga() {
	yield takeLatest(FETCH_PROJECTS, fetchProjects);
	yield takeLatest(GET_CONTRIBUTORS, fetchContributors)
}