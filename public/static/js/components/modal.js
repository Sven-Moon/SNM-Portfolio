export class Modal {
  // creates an enlarged modal with an embedded object
  // for interests, the text given is full text
  constructor(content) {
    this.createModal = this.createModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modal = this.createModal(content);
    document.body.appendChild(this.modal);
  }
  createModal(content) {
    const node = document.createElement("aside");
    node.className = "modal";
    node.addEventListener("click", this.closeModal);

    const container = document.createElement("div");
    container.className = "modal__container";
    container.appendChild(content);

    node.appendChild(container);
    return node;
  }
  closeModal() {
    this.modal.remove();
  }
}
