const Estudiante = require('../Models/estudiantes.js');
const estudiantesCtrl = {};

// 1. Obtener todos los estudiantes (GET)
estudiantesCtrl.getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los estudiantes", error: error.message });
    }
};

// 2. Crear un nuevo estudiante (POST)
estudiantesCtrl.createEstudiante = async (req, res) => {
    try {
        const { name, position, office, salary, age, city } = req.body;
        const nuevoEstudiante = new Estudiante({ name, position, office, salary, age, city });
        await nuevoEstudiante.save();
        res.json({ status: 'Estudiante guardado con éxito' });
    } catch (error) {
        res.status(400).json({ message: "Error al guardar el estudiante", error: error.message });
    }
};

// 3. Obtener un solo estudiante por ID (GET)
estudiantesCtrl.getEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiante.findById(id);
        if (!estudiante) {
            return res.status(404).json({ status: 'Estudiante no encontrado' });
        }
        res.json(estudiante);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar el estudiante", error: error.message });
    }
};

// 4. Editar un estudiante por ID (PUT)
estudiantesCtrl.editEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, position, office, salary, age, city } = req.body;
        
        const estudianteActualizado = { name, position, office, salary, age, city };
        await Estudiante.findByIdAndUpdate(id, { $set: estudianteActualizado }, { new: true });
        
        res.json({ status: 'Estudiante actualizado con éxito' });
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar el estudiante", error: error.message });
    }
};

// 5. Eliminar un estudiante por ID (DELETE)
estudiantesCtrl.deleteEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        await Estudiante.findByIdAndDelete(id);
        res.json({ status: 'Estudiante eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el estudiante", error: error.message });
    }
};

module.exports = estudiantesCtrl;