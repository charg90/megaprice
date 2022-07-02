import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_fq6x04p",
      "template_nnr9cnq",
      e.target,
      "n4WX9Oyn3Wg_n7Fqh"
    )
    .then((response) => {
      console.log(response);
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
