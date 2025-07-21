import estudiantes from "../data/estudiantes.js";
import cursos from "../data/cursos.js";
import calificaciones from "../data/calificaciones.js";

function obtenerCalifEstudiantes(req, res) {
    try {
        const califValidasEstudiante = calificaciones.filter(calificacion => {
            return calificacion && calificacion.estudianteId && calificacion.cursoId;
        });

        const resultado = califValidasEstudiante.map(calificacion => {
            
            const estudiante = estudiantes.find(e => e.id === calificacion.estudianteId);
            const curso = cursos.find(c => c.id === calificacion.cursoId);

            if (!estudiante || !curso) {
                throw new Error("Relación inválida entre calificación, estudiante o curso");
            }
            return { nombreEstudiante: estudiante.nombre, nombreCurso: curso.nombre, calificacionEstudiante: calificacion.calificacion};
        });
        res.status(200).json(resultado);
    }
    catch (error) {
        res.status(400).json({ error: "error al obtener calificaciones" });
    }
}

export default obtenerCalifEstudiantes;
