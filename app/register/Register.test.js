import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from './page';  
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

describe('Register Form', () => {

  test('renders the form fields', () => {
    render(<Register />);

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test('shows error messages for invalid input', async () => {
    render(<Register />);

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    });
  });

  test('shows specific error for invalid email', async () => {
    render(<Register />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
    });
  });

  test('shows success alert on successful form submission', async () => {
    render(<Register />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'Password@123' } });

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith({
        icon: 'success',
        title: 'Profile Successfully Created!!!',
      });
    });
  });

  test('does not show error for optional phone field', async () => {
    render(<Register />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'Password@123' } });

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.queryByText(/Phone number must be 10 digits/i)).not.toBeInTheDocument();
    });
  });

});
