import { useState } from "react";

const Order = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [note, setNote] = useState("");

  const whatsappNumber = "59168496505";
  const message = "Hola estoy ordenando un pollo frito";
  const encodedMessage = encodeURIComponent(message);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value); // Actualiza el estado con la nota ingresada
  };

  return (
    <section id="order">
      <h2>Ordena y disfruta tu comida YA!</h2>
      <label htmlFor="customerName">Nombre</label>
      <input
        type="text"
        id="customerName"
        value={name}
        onChange={handleNameChange}
        placeholder="Escriba su nombre aquí"
        name=""
      />

      <label htmlFor="customerNumber">Número de celular</label>
      <input
        type="text"
        id="customerNumber"
        value={number}
        onChange={handleNumberChange}
        placeholder="Déjanos un número de celular"
        name=""
      />

      <label
        htmlFor="customerNote"
      >
        Nota o comentarios
      </label>
      <textarea
        id="customerNote"
        value={note}
        onChange={handleNoteChange}
        placeholder="Si desea puede escribir una nota para su pedido aqui"
        rows="4" // Establece el tamaño del área de texto
      />

      <button
        onClick={() =>
          window.open(
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
            "_blank"
          )
        }
      >
        Pedir
      </button>
    </section>
  );
};

export default Order;
