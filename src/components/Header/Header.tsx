import React from 'react';

import { Form } from '../Form/Form';

export const Header: React.FC = () => {
  return (
    <header className="todoapp__header">
      <button
        type="button"
        className="todoapp__toggle-all active"
        data-cy="ToggleAllButton"
      />
      <Form />
    </header>
  );
};