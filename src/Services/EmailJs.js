import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const sendEmail = (e) => {
  e.preventDefault();
  const nombre = e.target.nombreApellido.value;
  const email = e.target.email.value;
  const empresa = e.target.empresa.value;
  const pais = e.target.pais.value;
  const ciudad = e.target.ciudad.value;
  const telefono = e.target.telefono.value;
  const motivo = e.target.motivo.value;
  const comment = e.target.comment.value;

  if (
    (nombre, email, empresa, pais, ciudad, telefono, motivo, comment === "")
  ) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "faltan campos por completar",
      showConfirmButton: false,
      timer: 1500,
    });
  }

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
};

export default sendEmail;
