module.exports = {
  path: '/v1/sessions',
  method: 'POST',
  template: {
    id: (params, query, body) => params.id,
    name: 'pepe'
  }
}