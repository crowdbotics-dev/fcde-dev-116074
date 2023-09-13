import axios from "axios"
const fcdedevAPI = axios.create({
  baseURL: "https://fcde-dev-116074.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return fcdedevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return fcdedevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_rohit_list(payload) {
  return fcdedevAPI.get(`/api/v1/rohit/`)
}
function api_v1_rohit_create(payload) {
  return fcdedevAPI.post(`/api/v1/rohit/`, payload)
}
function api_v1_rohit_retrieve(payload) {
  return fcdedevAPI.get(`/api/v1/rohit/${payload.id}/`)
}
function api_v1_rohit_update(payload) {
  return fcdedevAPI.put(`/api/v1/rohit/${payload.id}/`, payload)
}
function api_v1_rohit_partial_update(payload) {
  return fcdedevAPI.patch(`/api/v1/rohit/${payload.id}/`, payload)
}
function api_v1_rohit_destroy(payload) {
  return fcdedevAPI.delete(`/api/v1/rohit/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return fcdedevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_vgdhf_list(payload) {
  return fcdedevAPI.get(`/api/v1/vgdhf/`)
}
function api_v1_vgdhf_create(payload) {
  return fcdedevAPI.post(`/api/v1/vgdhf/`, payload)
}
function api_v1_vgdhf_retrieve(payload) {
  return fcdedevAPI.get(`/api/v1/vgdhf/${payload.id}/`)
}
function api_v1_vgdhf_update(payload) {
  return fcdedevAPI.put(`/api/v1/vgdhf/${payload.id}/`, payload)
}
function api_v1_vgdhf_partial_update(payload) {
  return fcdedevAPI.patch(`/api/v1/vgdhf/${payload.id}/`, payload)
}
function api_v1_vgdhf_destroy(payload) {
  return fcdedevAPI.delete(`/api/v1/vgdhf/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return fcdedevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return fcdedevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return fcdedevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return fcdedevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return fcdedevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return fcdedevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return fcdedevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return fcdedevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return fcdedevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return fcdedevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return fcdedevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_rohit_list,
  api_v1_rohit_create,
  api_v1_rohit_retrieve,
  api_v1_rohit_update,
  api_v1_rohit_partial_update,
  api_v1_rohit_destroy,
  api_v1_signup_create,
  api_v1_vgdhf_list,
  api_v1_vgdhf_create,
  api_v1_vgdhf_retrieve,
  api_v1_vgdhf_update,
  api_v1_vgdhf_partial_update,
  api_v1_vgdhf_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
