import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Teste total', () => {
  it('Deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });

    expect(homeTitle).toBeInTheDocument();
  });

  it('Deve renderizar o componente sobre', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pagina/que-nao-existe');
    });

    const notFoundTitle = screen.getByRole('heading', { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
