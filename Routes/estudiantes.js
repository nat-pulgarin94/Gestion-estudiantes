const express = require('express');
const router = express.Router();

// 1. Importamos el controlador de estudiantes
const estudiantesCtrl = require('../Controllers/estudiantes.controllers.js');

/* DEFINIMOS LAS RUTAS DE LA API */

// Obtener todos los estudiantes (GET)
router.get('/', estudiantesCtrl.getEstudiantes);

// Obtener un solo estudiante por ID (GET)
router.get('/:id', estudiantesCtrl.getEstudiante);

// Crear un nuevo estudiante (POST)
router.post('/', estudiantesCtrl.createEstudiante);

// Actualizar un estudiante por ID (PUT)
router.put('/:id', estudiantesCtrl.editEstudiante);

// Eliminar un estudiante por ID (DELETE)
router.delete('/:id', estudiantesCtrl.deleteEstudiante);

module.exports = router;