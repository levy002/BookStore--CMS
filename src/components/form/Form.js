import React from 'react';

const Form = () => (
  <section>
    <h3>ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default Form;
