import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../components/Auth/SignUp';
import { MemoryRouter } from 'react-router-dom';
import { validateErros } from '../components/Auth/SignUp';

describe('SignUp component', () => {
  it('Shows the "Create Account" button only if there are no errors in the form', () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Nickname'), {
      target: { value: 'usuario', name: 'nickname' },
    });

    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: '12345678', name: 'password' },
    });

    fireEvent.change(screen.getByPlaceholderText('Repeat the password'), {
      target: { value: '12345678', name: 'repeat_password' },
    });

    // Verificamos que el botón se muestre
    expect(screen.getByText('Create Account')).toBeInTheDocument();
  });
});

describe('validateErros function', () => {
    it('returns an error when fields are empty', () => {
      const form = { nickname: '', password: '', repeat_password: '' };
      const errors = validateErros(form);
      expect(errors).toHaveProperty('empty');
    });
  
    it('returns an error when passwords are different', () => {
      const form = { nickname: 'user', password: '12345678', repeat_password: '87654321' };
      const errors = validateErros(form);
      expect(errors).toHaveProperty('diferent');
    });
  
    it('returns an error when the password is too short', () => {
      const form = { nickname: 'user', password: '1234', repeat_password: '1234' };
      const errors = validateErros(form);
      expect(errors).toHaveProperty('password_size');
    });
  
    it('returns no errors when the form is valid', () => {
      const form = { nickname: 'user', password: '12345678', repeat_password: '12345678' };
      const errors = validateErros(form);
      expect(errors).toEqual({});
    });
  });
  