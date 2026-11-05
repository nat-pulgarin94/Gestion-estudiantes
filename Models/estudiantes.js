const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstudianteSchema = new Schema({
    name: {type: String, required: true},
    position: {type: String, required: true}, // Puedes cambiar esto por 'career' o 'grade' si prefieres
    office: {type: String, required: true},   // Puedes cambiar esto por 'classroom' o 'section'
    salary: {type: Number, required: true},   // Puedes cambiar esto por 'tuition' o 'age'
    age: {type: Number, required: true},      // Puedes cambiar esto por 'age' o 'year'
    city: {type: String, required: true},       // Puedes cambiar esto por 'city' o 'address'
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);