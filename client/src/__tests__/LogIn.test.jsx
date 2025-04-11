import { render, screen, fireEvent } from '@testing-library/react';
import LogIn from '../components/Auth/LogIn.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('LogIn component', () => {
  it('displays the "Let\'s Go!" button only if there are no errors', () => {
    // Renderizamos LogIn dentro de un MemoryRouter
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );

    // Llenamos correctamente los campos
    fireEvent.change(screen.getByPlaceholderText('Nickname'), {
      target: { value: 'usuario', name: 'nickname' },
    });

    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: '123456789', name: 'password' },
    });

    // Verificamos que aparezca el botón "Let's Go!"
    expect(screen.getByText("Let's Go!")).toBeInTheDocument();
  });
});
