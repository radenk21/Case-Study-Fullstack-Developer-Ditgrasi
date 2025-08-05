import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const fetchAkreditasi = async (params = {}) => {
	const res = await axios.get(`${API_BASE}/akreditasi`, { params });	
	return res.data;
};

export const fetchFakultas = async (params = {}) => {
	const res = await axios.get(`${API_BASE}/fakultas`, { params });
	return res.data;
};

export const fetchStrata = async (params = {}) => {
	const res = await axios.get(`${API_BASE}/strata`, { params });
	return res.data;
};

export const fetchJenisAkreditasi = async (params = {}) => {
	const res = await axios.get(`${API_BASE}/jenis-akreditasi`, { params });
	return res.data;
};

// Additional functions to fetch master data
export const getFakultas = async (params={}) => {
	const res = await axios.get(`${API_BASE}/master/fakultas`, { params });
	return res.data;
};
export const getStrata = async () => {
	const res = await axios.get(`${API_BASE}/master/strata`);
	return res.data;
};
export const getJenisAkreditasi = async () => {
	const res = await axios.get(`${API_BASE}/master/jenis-akreditasi`);
	return res.data;
};