const { Router } = require('express')
const routes = Router()

const usuario = require('./UsuarioRoutes')
const imagem = require('./ImagensRoutes')
const categorias = require('./CategoriasRoutes')
const categoriasUsuario = require('./CategoriaUsuariosRoutes')
const match = require('./MatchsRoutes')

routes.use('/usuarios', usuario)
routes.use('/imagens', imagem)
routes.use('/categorias', categorias)
routes.use('/categorias/usuarios', categoriasUsuario)
routes.use('/mathchs', match)

module.exports = routes