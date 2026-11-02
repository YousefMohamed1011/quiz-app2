import { useState } from "react";
import "./ContactSave.css";

function ContactSave() {
  const [contacts, setContacts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputNum, setInputNum] = useState("");

  function handleAdd(e) {
    e?.preventDefault?.();
    if (!inputValue.trim() || !inputNum.toString().trim()) return;

    const NewContact = {
      id: Date.now(),
      name: inputValue.trim(),
      phone: inputNum.toString().trim(),
    };

    setContacts([...contacts, NewContact]);
    setInputValue("");
    setInputNum("");
  }

  function handleDelete(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div className="contact-container">
      <header className="contact-header">
        <div className="header-title-row">
          <h2>📇 Contact Book</h2>
          <span className="contacts-count">{contacts.length} Contacts</span>
        </div>
      </header>

      <form className="contact-form" onSubmit={handleAdd}>
        <div className="input-group">
          <span className="input-icon">👤</span>
          <input
            type="text"
            placeholder="Contact Name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span className="input-icon">📱</span>
          <input
            type="tel"
            placeholder="Phone Number..."
            value={inputNum}
            onChange={(e) => setInputNum(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-add">
          + Add Contact
        </button>
      </form>

      <div className="contact-list">
        {contacts.length === 0 ? (
          <p className="empty-contacts">No contacts saved yet.</p>
        ) : (
          contacts.map((contact) => (
            <div key={contact.id} className="contact-item">
              <div className="contact-avatar">
                {contact.name.charAt(0)}
              </div>

              <div className="contact-info">
                <div className="contact-top-row">
                  <h4 className="contact-name">{contact.name}</h4>
                  <span className="contact-id" title="Unique ID">
                    ID: {contact.id}
                  </span>
                </div>
                <p className="contact-phone">
                  <span className="phone-icon">📞</span> {contact.phone}
                </p>
              </div>

              <button
                type="button"
                className="btn-delete"
                onClick={() => handleDelete(contact.id)}
                title="Delete Contact"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { ContactSave };
export default ContactSave;
