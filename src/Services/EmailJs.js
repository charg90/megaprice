import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const sendEmail = (e) => {
  e.preventDefault();

  const info = {
    nombre: e.target.nombreApellido.value,
    email: e.target.email.value,
    empresa: e.target.empresa.value,
    pais: e.target.pais.value,
    ciudad: e.target.ciudad.value,
    tel: e.target.tel.value,
    motivo: e.target.motivo.value,
    comment: e.target.comment.value,
  };

  switch (info) {
    case info.nombre === "":
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "faltan completar nombre",
        showConfirmButton: false,
        timer: 1500,
      });
      break;
    case info.email === "":
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "faltan completar email",
        showConfirmButton: false,
        timer: 1500,
      });
      break;
    case info.empresa === "":
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "faltan completar empresa",
        showConfirmButton: false,
        timer: 1500,
      });
      break;
    case info.pais === "":
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "faltan completar pais",
        showConfirmButton: false,
        timer: 1500,
      });
      break;
    case info.ciudad === "":
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "faltan completar cuidad",
        showConfirmButton: false,
        timer: 1500,
      });
      break;
    case info.tel === "":
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "faltan completar tel",
        showConfirmButton: false,
        timer: 1500,
      });
      break;
    case info.motivo === "":
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "faltan completar motivo",
        showConfirmButton: false,
        timer: 1500,
      });
      break;
    case info.comment === "":
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "faltan completar comentario",
        showConfirmButton: false,
        timer: 1500,
      });
      break;
    default:
      emailjs
        .sendForm(
          "service_fq6x04p",
          "template_nnr9cnq",
          e.target,
          "n4WX9Oyn3Wg_n7Fqh"
        )
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Su mensaje ha sido enviado exitosamente",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => console.log(error));
  }
};

export default sendEmail;
