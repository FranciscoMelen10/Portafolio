interface TecnologiaProps {
  nombre: string;
  imagen: string;
}

interface CursoProps {
  nombre: string;
  imagen: string;
  certificado: string | URL;
  modalidad: string;
  descripcion: string;
  iconos: TecnologiaProps[];
}

interface AprendizajeProps {
  titulo: string;
  iconos: TecnologiaProps[];
}

interface ProyectoProps {
  titulo: string;
  background: string;
  descripcion: string;
  repositorio: string;
  deploy: string;
  iconos: TecnologiaProps[];
}

export { TecnologiaProps, CursoProps, ProyectoProps, AprendizajeProps };
