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

    node.innerHTML = ` 
    <div class="modal__container">     
    </div>
    `;
    node.appendChild(content);
    return node;
  }
  closeModal() {
    this.modal.remove();
  }
}
